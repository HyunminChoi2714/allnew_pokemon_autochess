import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ActivePokemon,
  BoardTile,
  CombatFloatingText,
  GamePhase,
  Item,
  PokemonSpecies,
  StatRanks,
} from './types/game';
import { POKEMON_SPECIES, SHOP_POOL_TIER_BASE } from './data/pokemonData';
import { MOVES_DATA } from './data/movesData';
import { POKEMON_ITEMS } from './data/items';
import {
  checkAndExecuteEvolution,
  evolveWithLinkingCord,
  generateShop,
  getCombatTickParticipants,
  grantExperienceToParticipants,
  instantiatePokemon,
  calculateSynergies,
  TRAINER_LEVEL_XP,
} from './utils/gameEngine';
import {
  calculateAveragePlayerLevel,
  generateOpponentForPlayer,
  getOpponentForRound,
  OpponentTrainer,
} from './utils/aiOpponents';
import {
  calculateAttackSpeed,
  calculateDamage,
  calculateEffectiveStats,
} from './utils/formulas';
import { GameBoard } from './components/GameBoard';
import { ShopPanel } from './components/ShopPanel';
import { SynergyPanel } from './components/SynergyPanel';
import { BattleControls } from './components/BattleControls';
import { CombatLog, LogEntry } from './components/CombatLog';
import { ItemInventory } from './components/ItemInventory';
import { PokemonDetailModal } from './components/PokemonDetailModal';
import { TypeChartModal } from './components/TypeChartModal';
import { GameOverModal } from './components/GameOverModal';
import { TutorialModal } from './components/TutorialModal';
import confetti from 'canvas-confetti';

export default function App() {
  // === Game State ===
  const [round, setRound] = useState<number>(1);
  const [phase, setPhase] = useState<GamePhase>('planning');
  const [gold, setGold] = useState<number>(5); // Round 1 gives 5 gold
  const [trainerLevel, setTrainerLevel] = useState<number>(1);
  const [trainerXp, setTrainerXp] = useState<number>(0);
  const [playerHp, setPlayerHp] = useState<number>(100);
  const [winStreak, setWinStreak] = useState<number>(0);
  const [lossStreak, setLossStreak] = useState<number>(0);

  // Shop
  const [shopItems, setShopItems] = useState<(PokemonSpecies | null)[]>(() => generateShop(1));
  const [isShopLocked, setIsShopLocked] = useState<boolean>(false);

  // Board (8 rows x 7 cols) & Bench (9 slots)
  const [board, setBoard] = useState<BoardTile[][]>(() => {
    const grid: BoardTile[][] = [];
    for (let r = 0; r < 8; r++) {
      grid.push(new Array(7).fill(null));
    }
    return grid;
  });
  const [bench, setBench] = useState<(ActivePokemon | null)[]>(new Array(9).fill(null));

  // Track all owned Pokemon so their species can receive a shop appearance bonus.
  const ownedSpeciesIds = [...bench, ...board.flat()]
    .filter((pokemon): pokemon is ActivePokemon => pokemon !== null && pokemon.team === 'player')
    .map((pokemon) => pokemon.speciesId);

  // Player Item Inventory (starts with 1 Linking Cord and Leftovers to test items!)
  const [items, setItems] = useState<Item[]>([
    POKEMON_ITEMS.find((i) => i.id === 'linking_cord')!,
    POKEMON_ITEMS.find((i) => i.id === 'leftovers')!,
  ]);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Selection & Modals
  const [selectedUnit, setSelectedUnit] = useState<{
    source: 'bench' | 'board';
    index?: number;
    r?: number;
    c?: number;
  } | null>(null);
  const [inspectingPokemon, setInspectingPokemon] = useState<ActivePokemon | null>(null);
  const [isTypeChartOpen, setIsTypeChartOpen] = useState<boolean>(false);
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(false);
  const [isMobileSynergyOpen, setIsMobileSynergyOpen] = useState<boolean>(false);
  const [isMobileLogOpen, setIsMobileLogOpen] = useState<boolean>(false);
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState<boolean>(false);
  const [isVictory, setIsVictory] = useState<boolean>(false);

  // Battle Settings & Feedback
  const [battleSpeed, setBattleSpeed] = useState<number>(1);
  const [autoStart, setAutoStart] = useState<boolean>(false);
  const [combatLogs, setCombatLogs] = useState<LogEntry[]>([
    {
      id: 'welcome_1',
      text: '포켓몬 오토체스에 오신 것을 환영합니다! 상점에서 포켓몬을 구매하고 배치하세요.',
      type: 'system',
      time: '00:00',
    },
    {
      id: 'welcome_2',
      text: '동일 포켓몬 3마리가 모이면 자동으로 다음 단계로 진화합니다.',
      type: 'system',
      time: '00:00',
    },
  ]);
  const [floatingTexts, setFloatingTexts] = useState<CombatFloatingText[]>([]);

  // Calculate the level curve from every Pokemon the player owns (board + bench).
  const ownedPlayerPokemon = [...bench, ...board.flat()].filter(
    (pokemon): pokemon is ActivePokemon => pokemon !== null && pokemon.team === 'player',
  );
  const playerAverageLevel = calculateAveragePlayerLevel(ownedPlayerPokemon.map((pokemon) => pokemon.level));
  const playerAverageLevelRef = useRef<number>(playerAverageLevel);
  playerAverageLevelRef.current = playerAverageLevel;

  // Keep the opponent stable throughout a round; recalculate it when a new round starts.
  const [currentOpponent, setCurrentOpponent] = useState<OpponentTrainer>(() =>
    getOpponentForRound(1, playerAverageLevel),
  );

  // Ref to hold battle tick interval and player deployment snapshot
  const battleIntervalRef = useRef<any>(null);
  const simulationTimeRef = useRef<number>(0);
  const playerTeamSnapshotRef = useRef<{ pokemon: ActivePokemon; row: number; col: number }[]>([]);
  const isBattleEndingRef = useRef<boolean>(false);

  // Helper: Log message
  const addLog = useCallback((text: string, type: LogEntry['type'] = 'attack') => {
    const now = new Date();
    const timeStr = `${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setCombatLogs((prev) => [...prev.slice(-80), { id: `${Date.now()}_${Math.random()}`, text, type, time: timeStr }]);
  }, []);

  // Helper: Add floating text
  const addFloatingText = useCallback((text: string, col: number, row: number, type: CombatFloatingText['type'] = 'damage') => {
    const id = `${Date.now()}_${Math.random()}`;
    setFloatingTexts((prev) => [...prev, { id, text, col, row, type, createdAt: Date.now() }]);
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((ft) => ft.id !== id));
    }, 1200);
  }, []);

  // Calculate deployed player Pokemon count
  const deployedPlayerPokemon = board
    .flat()
    .filter((p): p is ActivePokemon => p !== null && p.team === 'player');
  const benchCount = bench.filter(Boolean).length;

  // Active synergies
  const synergies = calculateSynergies(deployedPlayerPokemon);

  // Generate opponents from the complete owned roster (board + bench).
  // This is shared by planning refreshes and the final pre-battle validation.
  const setupOpponentForRound = useCallback((rNum: number, playerLevels: number[]) => {
    const generated = generateOpponentForPlayer(rNum, playerLevels);
    setCurrentOpponent(generated.opponent);
    setBoard((prev) => {
      const next = prev.map((row) => [...row]);
      // Clear every previous enemy before placing the newly generated team.
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 7; c++) {
          next[r][c] = null;
        }
      }
      for (const enemy of generated.units) {
        if (enemy.row >= 0 && enemy.row < 4 && enemy.col >= 0 && enemy.col < 7) {
          next[enemy.row][enemy.col] = enemy;
        }
      }
      return next;
    });
  }, []);

  // Rebuild the opponent whenever the round or the player's average changes.
  useEffect(() => {
    if (phase !== 'planning') return;
    setupOpponentForRound(
      round,
      ownedPlayerPokemon.map((pokemon) => pokemon.level),
    );
  }, [round, phase, playerAverageLevel, setupOpponentForRound]);

  // === Shop Actions ===
  const handleBuyPokemon = (shopIndex: number) => {
    const species = shopItems[shopIndex];
    if (!species) return;
    if (gold < species.cost) {
      addLog('골드가 부족합니다!', 'system');
      return;
    }

    const emptyBenchIndex = bench.findIndex((slot) => slot === null);

    // Check if buying this Pokemon will immediately trigger a 3-unit fusion
    const matchingCount = [...bench, ...board.flat()].filter(
      (p) => p && p.team === 'player' && p.speciesId === species.id && (p.evolutionStage || 1) === 1
    ).length;
    const canFuseOnBuy = matchingCount >= 2;

    if (emptyBenchIndex === -1 && !canFuseOnBuy) {
      addLog('벤치가 가득 찼습니다! (최대 9칸)', 'system');
      return;
    }

    // Deduct gold
    setGold((prev) => prev - species.cost);

    // Remove from shop
    const newShop = [...shopItems];
    newShop[shopIndex] = null;
    setShopItems(newShop);

    // Create Pokemon instance
    const newPoke = instantiatePokemon(species.id, 'player', -1, -1, 1);
    addLog(`[${species.name}]을(를) ${species.cost}원에 영입했습니다.`, 'system');

    if (emptyBenchIndex === -1 && canFuseOnBuy) {
      // Bench is full, but fusing immediately frees up space!
      const evoResult = checkAndExecuteEvolution(bench, board, newPoke);
      if (evoResult.didEvolve) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        addLog(`✨ 3마리 융합 완료! [${evoResult.evolvedSpeciesName}]으로 진화했습니다!`, 'level');
        setBench(evoResult.bench);
        setBoard(evoResult.board);
        if (evoResult.returnedItems && evoResult.returnedItems.length > 0) {
          setItems((prev) => [...prev, ...evoResult.returnedItems]);
          addLog(`도구함으로 넘친 도구 ${evoResult.returnedItems.length}개가 반환되었습니다.`, 'system');
        }
      }
    } else {
      const newBench = [...bench];
      newBench[emptyBenchIndex] = newPoke;

      // Evolution check!
      const evoResult = checkAndExecuteEvolution(newBench, board);
      if (evoResult.didEvolve) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        addLog(`✨ 3마리 융합 완료! [${evoResult.evolvedSpeciesName}]으로 진화했습니다!`, 'level');
        setBench(evoResult.bench);
        setBoard(evoResult.board);
        if (evoResult.returnedItems && evoResult.returnedItems.length > 0) {
          setItems((prev) => [...prev, ...evoResult.returnedItems]);
          addLog(`도구함으로 넘친 도구 ${evoResult.returnedItems.length}개가 반환되었습니다.`, 'system');
        }
      } else {
        setBench(newBench);
      }
    }
  };

  const handleReroll = () => {
    if (gold < 2) {
      addLog('새로고침 비용(2원)이 부족합니다.', 'system');
      return;
    }
    setGold((prev) => prev - 2);
    setShopItems(generateShop(trainerLevel, ownedSpeciesIds));
    addLog('상점을 새로고침했습니다 (-2원).', 'system');
  };

  const handleBuyXp = () => {
    if (gold < 4 || trainerLevel >= 10) return;
    setGold((prev) => prev - 4);
    const xpNeeded = TRAINER_LEVEL_XP[trainerLevel] || 999;
    const nextXp = trainerXp + 4;
    if (nextXp >= xpNeeded) {
      setTrainerLevel((prev) => prev + 1);
      setTrainerXp(nextXp - xpNeeded);
      addLog(`🎉 트레이너 레벨이 ${trainerLevel + 1}로 상승했습니다! 출전 가능 포켓몬 +1`, 'level');
    } else {
      setTrainerXp(nextXp);
      addLog('경험치 4를 구매했습니다 (+4 XP).', 'system');
    }
  };

  const handleToggleLock = () => {
    setIsShopLocked((prev) => !prev);
  };

  // === Board & Bench Movement / Item Equipping ===
  const handleTileClick = (r: number, c: number) => {
    if (phase !== 'planning') return;

    // Item equipping mode
    if (selectedItemIndex !== null) {
      const targetPoke = board[r][c];
      if (targetPoke && targetPoke.team === 'player') {
        const item = items[selectedItemIndex];
        if (targetPoke.items.length >= 6) {
          addLog('포켓몬은 최대 6개까지만 도구를 장착할 수 있습니다.', 'system');
          return;
        }
        targetPoke.items.push(item);
        // Remove item from inventory
        setItems((prev) => prev.filter((_, idx) => idx !== selectedItemIndex));
        setSelectedItemIndex(null);
        addLog(`[${targetPoke.name}]에게 [${item.name}]을(를) 장착했습니다!`, 'system');

        // Check if linking cord used on trade evolution pokemon
        if (item.id === 'linking_cord' && targetPoke.evolutionStagesTotal > 1) {
          const evolved = evolveWithLinkingCord(targetPoke);
          if (evolved) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
            addLog(`🔗 연결의끈 공명! [${evolved.name}]으로 통신진화했습니다!`, 'level');
            const nextBoard = board.map((row) => [...row]);
            nextBoard[r][c] = evolved;
            const chainEvo = checkAndExecuteEvolution(bench, nextBoard);
            if (chainEvo.didEvolve) {
              addLog(`✨ 3마리 융합 완료! [${chainEvo.evolvedSpeciesName}]으로 진화했습니다!`, 'level');
              setBench(chainEvo.bench);
              setBoard(chainEvo.board);
            } else {
              setBoard(nextBoard);
            }
          }
        }
        return;
      }
    }

    // Only player rows (4..7) can be targeted for placement
    if (r < 4) {
      const enemyPoke = board[r][c];
      if (enemyPoke) setInspectingPokemon(enemyPoke);
      return;
    }

    // If unit is currently selected
    if (selectedUnit) {
      const newBoard = board.map((row) => [...row]);
      const newBench = [...bench];

      let unitToMove: ActivePokemon | null = null;
      if (selectedUnit.source === 'bench' && selectedUnit.index !== undefined) {
        unitToMove = newBench[selectedUnit.index];
      } else if (selectedUnit.source === 'board' && selectedUnit.r !== undefined && selectedUnit.c !== undefined) {
        unitToMove = newBoard[selectedUnit.r][selectedUnit.c];
      }

      if (!unitToMove) {
        setSelectedUnit(null);
        return;
      }

      const destUnit = newBoard[r][c];

      // If moving from bench to board, check trainer capacity
      if (selectedUnit.source === 'bench' && !destUnit) {
        if (deployedPlayerPokemon.length >= trainerLevel) {
          addLog(`현재 레벨(${trainerLevel})에서는 최대 ${trainerLevel}마리까지만 출전시킬 수 있습니다!`, 'system');
          setSelectedUnit(null);
          return;
        }
      }

      // Perform swap / move
      if (selectedUnit.source === 'bench' && selectedUnit.index !== undefined) {
        newBench[selectedUnit.index] = destUnit;
        if (destUnit) {
          destUnit.row = -1;
          destUnit.col = -1;
        }
      } else if (selectedUnit.source === 'board' && selectedUnit.r !== undefined && selectedUnit.c !== undefined) {
        newBoard[selectedUnit.r][selectedUnit.c] = destUnit;
        if (destUnit) {
          destUnit.row = selectedUnit.r;
          destUnit.col = selectedUnit.c;
        }
      }

      unitToMove.row = r;
      unitToMove.col = c;
      newBoard[r][c] = unitToMove;

      setBoard(newBoard);
      setBench(newBench);
      setSelectedUnit(null);
    } else {
      // Select unit on board
      const clicked = board[r][c];
      if (clicked && clicked.team === 'player') {
        setSelectedUnit({ source: 'board', r, c });
      }
    }
  };

  const handleBenchClick = (index: number) => {
    if (phase !== 'planning') return;

    // Item equipping mode
    if (selectedItemIndex !== null) {
      const targetPoke = bench[index];
      if (targetPoke) {
        const item = items[selectedItemIndex];
        if (targetPoke.items.length >= 6) {
          addLog('포켓몬은 최대 6개까지만 도구를 장착할 수 있습니다.', 'system');
          return;
        }
        targetPoke.items.push(item);
        setItems((prev) => prev.filter((_, idx) => idx !== selectedItemIndex));
        setSelectedItemIndex(null);
        addLog(`[${targetPoke.name}]에게 [${item.name}]을(를) 장착했습니다!`, 'system');

        if (item.id === 'linking_cord') {
          const evolved = evolveWithLinkingCord(targetPoke);
          if (evolved) {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
            addLog(`🔗 연결의끈 공명! [${evolved.name}]으로 통신진화했습니다!`, 'level');
            const nextBench = [...bench];
            nextBench[index] = evolved;
            const chainEvo = checkAndExecuteEvolution(nextBench, board);
            if (chainEvo.didEvolve) {
              addLog(`✨ 3마리 융합 완료! [${chainEvo.evolvedSpeciesName}]으로 진화했습니다!`, 'level');
              setBench(chainEvo.bench);
              setBoard(chainEvo.board);
            } else {
              setBench(nextBench);
            }
          }
        }
        return;
      }
    }

    if (selectedUnit) {
      const newBoard = board.map((row) => [...row]);
      const newBench = [...bench];

      let unitToMove: ActivePokemon | null = null;
      if (selectedUnit.source === 'bench' && selectedUnit.index !== undefined) {
        unitToMove = newBench[selectedUnit.index];
      } else if (selectedUnit.source === 'board' && selectedUnit.r !== undefined && selectedUnit.c !== undefined) {
        unitToMove = newBoard[selectedUnit.r][selectedUnit.c];
      }

      if (!unitToMove) {
        setSelectedUnit(null);
        return;
      }

      const destUnit = newBench[index];

      // Perform move/swap
      if (selectedUnit.source === 'bench' && selectedUnit.index !== undefined) {
        newBench[selectedUnit.index] = destUnit;
      } else if (selectedUnit.source === 'board' && selectedUnit.r !== undefined && selectedUnit.c !== undefined) {
        newBoard[selectedUnit.r][selectedUnit.c] = destUnit;
        if (destUnit) {
          destUnit.row = selectedUnit.r;
          destUnit.col = selectedUnit.c;
        }
      }

      unitToMove.row = -1;
      unitToMove.col = -1;
      newBench[index] = unitToMove;

      setBoard(newBoard);
      setBench(newBench);
      setSelectedUnit(null);
    } else {
      const clicked = bench[index];
      if (clicked) {
        setSelectedUnit({ source: 'bench', index });
      }
    }
  };

  const handleSelectMove = (pokemonId: string, moveId: string) => {
    const updatePoke = (p: ActivePokemon) => {
      if (p.instanceId === pokemonId) {
        p.selectedMoveId = moveId;
        addLog(`[${p.name}]의 라운드 주력 기술이 [${MOVES_DATA[moveId]?.name || moveId}]로 설정되었습니다.`, 'system');
      }
      return p;
    };

    setBoard((prev) => prev.map((row) => row.map((slot) => (slot ? updatePoke({ ...slot }) : null))));
    setBench((prev) => prev.map((slot) => (slot ? updatePoke({ ...slot }) : null)));
    if (inspectingPokemon && inspectingPokemon.instanceId === pokemonId) {
      setInspectingPokemon((prev) => (prev ? { ...prev, selectedMoveId: moveId } : null));
    }
  };

  const handleUnequipItem = (pokemonId: string, itemIndex: number) => {
    let unequippedItem: Item | null = null;

    const remove = (p: ActivePokemon) => {
      if (p.instanceId === pokemonId && p.items[itemIndex]) {
        unequippedItem = p.items[itemIndex];
        p.items = p.items.filter((_, idx) => idx !== itemIndex);
      }
      return p;
    };

    setBoard((prev) => prev.map((row) => row.map((slot) => (slot ? remove({ ...slot }) : null))));
    setBench((prev) => prev.map((slot) => (slot ? remove({ ...slot }) : null)));

    if (unequippedItem) {
      setItems((prev) => [...prev, unequippedItem!]);
      addLog(`도구 [${(unequippedItem as Item).name}]을(를) 도구함으로 회수했습니다.`, 'system');
    }
  };

  const handleSellPokemon = (pokemonId: string) => {
    let refundGold = 0;
    let soldName = '';

    const newBoard = board.map((row) =>
      row.map((slot) => {
        if (slot && slot.instanceId === pokemonId) {
          refundGold = slot.cost;
          soldName = slot.name;
          // Return equipped items to inventory
          if (slot.items.length > 0) {
            setItems((prev) => [...prev, ...slot.items]);
          }
          return null;
        }
        return slot;
      })
    );

    const newBench = bench.map((slot) => {
      if (slot && slot.instanceId === pokemonId) {
        refundGold = slot.cost;
        soldName = slot.name;
        if (slot.items.length > 0) {
          setItems((prev) => [...prev, ...slot.items]);
        }
        return null;
      }
      return slot;
    });

    if (refundGold > 0) {
      setGold((prev) => prev + refundGold);
      setBoard(newBoard);
      setBench(newBench);
      addLog(`[${soldName}]을(를) 방생하고 ${refundGold}원을 돌려받았습니다.`, 'system');
    }
  };

  const handleEvolveWithCord = (pokemonId: string) => {
    let evolvedName = '';
    const evolve = (p: ActivePokemon) => {
      if (p.instanceId === pokemonId) {
        const evo = evolveWithLinkingCord(p);
        if (evo) {
          evolvedName = evo.name;
          return evo;
        }
      }
      return p;
    };

    setBoard((prev) => prev.map((row) => row.map((slot) => (slot ? evolve({ ...slot }) : null))));
    setBench((prev) => prev.map((slot) => (slot ? evolve({ ...slot }) : null)));

    if (evolvedName) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.7 } });
      addLog(`🔗 연결의끈 공명! [${evolvedName}]으로 통신진화했습니다!`, 'level');
    }
  };

  // === Start Battle Simulation ===
  const handleStartBattle = () => {
    if (deployedPlayerPokemon.length === 0) {
      addLog('필드에 출전할 포켓몬을 먼저 1마리 이상 배치해주세요!', 'system');
      return;
    }

    // Recalculate from the live board + bench immediately before combat.
    // Never trust a previously rendered/planning-phase opponent level.
    const battleOpponent = generateOpponentForPlayer(
      round,
      [...bench, ...board.flat()]
        .filter((pokemon): pokemon is ActivePokemon => pokemon !== null && pokemon.team === 'player')
        .map((pokemon) => pokemon.level),
    );
    setCurrentOpponent(battleOpponent.opponent);

    setPhase('battle');
    isBattleEndingRef.current = false;
    setSelectedUnit(null);
    simulationTimeRef.current = 0;
    addLog(`=== [라운드 ${round}] 전투 개시! ===`, 'system');

    // Snapshot player team deployment so fainted units are NEVER lost!
    const snapshot: { pokemon: ActivePokemon; row: number; col: number }[] = [];
    for (let r = 4; r < 8; r++) {
      for (let c = 0; c < 7; c++) {
        const p = board[r][c];
        if (p && p.team === 'player') {
          snapshot.push({
            pokemon: JSON.parse(JSON.stringify(p)),
            row: r,
            col: c,
          });
        }
      }
    }
    playerTeamSnapshotRef.current = snapshot;

    // Install the freshly generated, exact-average enemy team before combat ticks begin.
    setBoard((prev) => {
      const next = prev.map((row) => [...row]);
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 7; c++) next[r][c] = null;
      }
      for (const enemy of battleOpponent.units) {
        next[enemy.row][enemy.col] = enemy;
      }

      // Trigger Combat Start Synergies (Water 5-set shield, Rock 3/5 shield, Ghost stealth, etc.)
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 7; c++) {
          const p = next[r][c];
          if (!p) continue;
          p.currentHp = p.maxHp;
          p.shield = 0;
          p.hitTargetInCombat = false;
          p.attackCooldown = 0; // Synchronize the opening action for every deployed Pokemon

          // Synergies on battle start
          if (p.team === 'player') {
            const rockSyn = synergies.find((s) => s.type === 'rock');
            if (rockSyn && rockSyn.activeTier >= 1 && p.types.includes('rock')) {
              const shieldPct = rockSyn.activeTier === 2 ? 0.25 : 0.12;
              p.shield += Math.round(p.maxHp * shieldPct);
            }

            const waterSyn = synergies.find((s) => s.type === 'water');
            if (waterSyn && waterSyn.activeTier >= 2 && p.types.includes('water')) {
              p.shield += Math.round(p.maxHp * 0.15);
            }

            const ghostSyn = synergies.find((s) => s.type === 'ghost');
            if (ghostSyn && ghostSyn.activeTier >= 1 && p.types.includes('ghost')) {
              p.isStealthed = true;
              p.stealthTimer = ghostSyn.activeTier === 2 ? 2.5 : 1.5;
            }

            const grassSyn = synergies.find((s) => s.type === 'grass');
            if (grassSyn && grassSyn.activeTier >= 2) {
              p.maxHp = Math.round(p.maxHp * 1.1);
              p.currentHp = p.maxHp;
            }
          }
        }
      }
      return next;
    });
  };

  // Combat loop
  useEffect(() => {
    if (phase !== 'battle') {
      if (battleIntervalRef.current) clearInterval(battleIntervalRef.current);
      return;
    }

    const tickMs = 100 / battleSpeed;
    const dtSeconds = 0.1;

    battleIntervalRef.current = setInterval(() => {
      simulationTimeRef.current += dtSeconds;
      const simTime = simulationTimeRef.current;

      setBoard((prevBoard) => {
        // Collect all board units (both living and fainted)
        const units: ActivePokemon[] = [];
        for (let r = 0; r < 8; r++) {
          for (let c = 0; c < 7; c++) {
            const u = prevBoard[r][c];
            if (u) units.push({ ...u });
          }
        }

        // Freeze positions and living actors at tick start. Every eligible unit chooses
        // an action from this same snapshot; damage is applied only after all choices exist.
        const tickStartUnits = units.map((unit) => ({ ...unit }));
        const unitById = new Map<string, ActivePokemon>();
        for (const unit of units) unitById.set(unit.instanceId, unit);
        const activeAtTickStart = getCombatTickParticipants(tickStartUnits);
        const playerParticipantIds = new Set(
          playerTeamSnapshotRef.current.map((entry) => entry.pokemon.instanceId),
        );
        const defeatedThisTick = new Set<string>();
        const pendingAttacks: {
          attacker: ActivePokemon;
          defender: ActivePokemon;
          move: ActivePokemon['moves'][number];
          calc: ReturnType<typeof calculateDamage>;
        }[] = [];
        const movementIntents: {
          unit: ActivePokemon;
          candidates: { row: number; col: number }[];
        }[] = [];

        const livingPlayers = units.filter((u) => u.team === 'player' && u.currentHp > 0);
        const livingEnemies = units.filter((u) => u.team === 'enemy' && u.currentHp > 0);

        // Check victory / defeat
        if (livingEnemies.length === 0 || livingPlayers.length === 0) {
          if (isBattleEndingRef.current) return prevBoard;
          isBattleEndingRef.current = true;
          if (battleIntervalRef.current) clearInterval(battleIntervalRef.current);
          const isPlayerWon = livingEnemies.length === 0 && livingPlayers.length > 0;
          setTimeout(() => endBattle(isPlayerWon), 600);
          return prevBoard;
        }

        const nextBoard: BoardTile[][] = [];
        for (let r = 0; r < 8; r++) {
          nextBoard.push(new Array(7).fill(null));
        }

        // Active synergy config
        const synFire = synergies.find((s) => s.type === 'fire');
        const synElectric = synergies.find((s) => s.type === 'electric');
        const synFighting = synergies.find((s) => s.type === 'fighting');
        const synFlying = synergies.find((s) => s.type === 'flying');
        const synPsychic = synergies.find((s) => s.type === 'psychic');
        const synDragon = synergies.find((s) => s.type === 'dragon');
        const synFairy = synergies.find((s) => s.type === 'fairy');
        const synSteel = synergies.find((s) => s.type === 'steel');
        const synGrass = synergies.find((s) => s.type === 'grass');
        const synIce = synergies.find((s) => s.type === 'ice');

        const synergyBonus = {
          fireAtkPercent: synFire?.activeTier === 2 ? 25 : synFire?.activeTier === 1 ? 10 : 0,
          fightingDmgPercent: synFighting?.activeTier === 2 ? 25 : synFighting?.activeTier === 1 ? 12 : 0,
          fightingArmorIgnorePercent: synFighting?.activeTier === 2 ? 20 : 0,
          fairyDamageReductionPercent: synFairy?.activeTier === 2 ? 20 : synFairy?.activeTier === 1 ? 10 : 0,
          steelDamageReductionPercent: synSteel?.activeTier === 2 ? 10 : 0,
          psychicPowerPercent: synPsychic?.activeTier === 2 ? 25 : synPsychic?.activeTier === 1 ? 12 : 0,
          dragonDamagePercent: synDragon?.activeTier === 2 ? 25 : synDragon?.activeTier === 1 ? 12 : 0,
          grassLifestealPercent: synGrass?.activeTier === 2 ? 25 : synGrass?.activeTier === 1 ? 12 : 0,
        };

        const isDragonActive =
          (synDragon?.activeTier === 2 && simTime <= 8) ||
          (synDragon?.activeTier === 1 && simTime <= 5);

        // Process each unit's tick
        for (const unit of units) {
          if (!activeAtTickStart.has(unit.instanceId)) continue;

          // Stealth timer
          if (unit.isStealthed) {
            unit.stealthTimer -= dtSeconds;
            if (unit.stealthTimer <= 0) unit.isStealthed = false;
          }

          // Status & 1-turn (1.2s) tick
          if (Math.floor(simTime / 1.2) !== Math.floor((simTime - dtSeconds) / 1.2)) {
            // Poison
            if (unit.status === 'poison') {
              const dmg = Math.max(1, Math.round(unit.maxHp / 8));
              unit.currentHp = Math.max(0, unit.currentHp - dmg);
              addFloatingText(`-${dmg} 독`, unit.col, unit.row, 'status');
            } else if (unit.status === 'toxic') {
              unit.toxicCounter = Math.min(15, (unit.toxicCounter || 1) + 1);
              const dmg = Math.max(1, Math.round((unit.maxHp * unit.toxicCounter) / 16));
              unit.currentHp = Math.max(0, unit.currentHp - dmg);
              addFloatingText(`-${dmg} 맹독`, unit.col, unit.row, 'status');
            } else if (unit.status === 'burn') {
              const dmg = Math.max(1, Math.round(unit.maxHp / 16));
              unit.currentHp = Math.max(0, unit.currentHp - dmg);
              addFloatingText(`-${dmg} 화상`, unit.col, unit.row, 'status');
            }

            // Leftovers item
            if (unit.items.some((i) => i.id === 'leftovers') && unit.currentHp < unit.maxHp) {
              const heal = Math.round(unit.maxHp / 16);
              unit.currentHp = Math.min(unit.maxHp, unit.currentHp + heal);
              addFloatingText(`+${heal}`, unit.col, unit.row, 'heal');
            }

            // Water synergy regen
            if (unit.team === 'player' && unit.types.includes('water')) {
              const waterSyn = synergies.find((s) => s.type === 'water');
              if (waterSyn && waterSyn.activeTier >= 1) {
                const regenRate = waterSyn.activeTier === 2 ? 0.035 : 0.015;
                const heal = Math.max(1, Math.round(unit.maxHp * regenRate));
                unit.currentHp = Math.min(unit.maxHp, unit.currentHp + heal);
              }
            }
          }

          if (!activeAtTickStart.has(unit.instanceId)) continue;

          // Attack speed & cooldown
          const flyingBonus =
            unit.team === 'player' && synFlying && synFlying.activeTier >= 1
              ? synFlying.activeTier === 2 ? 35 : 15
              : 0;
          const elecBonus =
            unit.team === 'player' && synElectric && synElectric.activeTier >= 1
              ? synElectric.activeTier === 2 ? 35 : 15
              : 0;

          const aspd = calculateAttackSpeed(unit, flyingBonus, elecBonus);
          const attackInterval = 1 / aspd;

          unit.attackCooldown -= dtSeconds;

          // Select the nearest opponent that was alive at tick start.
          // A target's position is read from the frozen snapshot, so earlier units cannot
          // change later units' target selection within the same tick.
          const opponentSnapshots = tickStartUnits.filter(
            (candidate) =>
              candidate.team !== unit.team &&
              candidate.currentHp > 0 &&
              !candidate.isStealthed,
          );

          let nearestOpponentSnapshot: ActivePokemon | null = null;
          let minDistance = Infinity;
          for (const opponent of opponentSnapshots) {
            const distance = Math.max(
              Math.abs(unit.row - opponent.row),
              Math.abs(unit.col - opponent.col),
            );
            if (distance < minDistance) {
              minDistance = distance;
              nearestOpponentSnapshot = opponent;
            }
          }

          const nearestOpponent = nearestOpponentSnapshot
            ? unitById.get(nearestOpponentSnapshot.instanceId) ?? null
            : null;
          if (!nearestOpponent || !nearestOpponentSnapshot) continue;

          // Range check (melee = 1, ranged = 2..4)
          if (minDistance <= unit.range) {
            // Within attack range!
            if (unit.attackCooldown <= 0) {
              unit.attackCooldown = attackInterval;
              unit.hitTargetInCombat = true;
              // Check if frozen or asleep
              if (unit.status === 'freeze' || unit.status === 'sleep') {
                continue;
              }
              // Paralysis 25% chance to be fully paralyzed
              if (unit.status === 'paralysis' && Math.random() < 0.25) {
                addFloatingText('몸이 저렸다!', unit.col, unit.row, 'status');
                continue;
              }

              // Pick active move
              let move = MOVES_DATA[unit.selectedMoveId] || unit.moves[0] || MOVES_DATA.tackle;
              const remainingPp = unit.currentPp[move.id] ?? move.maxPp;

              if (remainingPp <= 0) {
                move = MOVES_DATA.struggle; // Fallback to Struggle (발버둥)
              } else {
                unit.currentPp[move.id] = Math.max(0, remainingPp - 1);
                // Psychic synergy PP recovery
                if (unit.team === 'player' && synPsychic && synPsychic.activeTier >= 1 && unit.types.includes('psychic')) {
                  const recoverChance = synPsychic.activeTier === 2 ? 0.3 : 0.15;
                  if (Math.random() < recoverChance) {
                    unit.currentPp[move.id] += 1;
                  }
                }
              }

              unit.attackAnim = {
                targetCol: nearestOpponent.col,
                targetRow: nearestOpponent.row,
                time: Date.now(),
                moveType: move.type,
                isRanged: unit.range > 1,
              };

              // Calculate now, apply later: all attacks selected this tick resolve together.
              const calc = calculateDamage(unit, nearestOpponent, move, {
                synergyBonus: unit.team === 'player' ? synergyBonus : undefined,
                isDragonActive,
              });
              pendingAttacks.push({ attacker: unit, defender: nearestOpponent, move, calc });
            }
          } else {
            // Queue a movement choice. Try diagonal, both forward axes, then flank spaces;
            // all choices are based on the same tick-start target position.
            const dRow = Math.sign(nearestOpponentSnapshot.row - unit.row);
            const dCol = Math.sign(nearestOpponentSnapshot.col - unit.col);
            const rawCandidates = [
              { row: unit.row + dRow, col: unit.col + dCol },
              { row: unit.row + dRow, col: unit.col },
              { row: unit.row, col: unit.col + dCol },
              { row: unit.row - 1, col: unit.col },
              { row: unit.row + 1, col: unit.col },
              { row: unit.row, col: unit.col - 1 },
              { row: unit.row, col: unit.col + 1 },
            ];
            const seen = new Set<string>();
            const candidates = rawCandidates.filter((position) => {
              const row = Math.max(0, Math.min(7, position.row));
              const col = Math.max(0, Math.min(6, position.col));
              const key = `${row}:${col}`;
              if ((row === unit.row && col === unit.col) || seen.has(key)) return false;
              seen.add(key);
              return true;
            });
            movementIntents.push({
              unit,
              candidates: candidates.map((position) => ({
                row: Math.max(0, Math.min(7, position.row)),
                col: Math.max(0, Math.min(6, position.col)),
              })),
            });
          }
        }

        // Resolve movement intents after every unit has selected an action.
        const occupiedPositions = new Set(
          units.map((unit) => `${unit.row}:${unit.col}`),
        );
        for (const intent of movementIntents) {
          const { unit, candidates } = intent;
          occupiedPositions.delete(`${unit.row}:${unit.col}`);
          const destination = candidates.find(
            (position) => !occupiedPositions.has(`${position.row}:${position.col}`),
          );
          if (destination) {
            unit.row = destination.row;
            unit.col = destination.col;
          }
          occupiedPositions.add(`${unit.row}:${unit.col}`);
        }

        // Resolve every queued attack after all living units have chosen one.
        // A Pokemon knocked out during this resolution still completes its queued attack.
        for (const attack of pendingAttacks) {
          const { attacker: unit, defender: nearestOpponent, move, calc } = attack;
          if (calc.isMiss) {
            addFloatingText('빗나감!', nearestOpponent.col, nearestOpponent.row, 'miss');
            addLog(`[${unit.name}]의 ${move.name}! 빗나갔다!`);
            continue;
          }
          if (calc.typeMultiplier === 0) {
            addFloatingText('효과가 없다', nearestOpponent.col, nearestOpponent.row, 'miss');
            addLog(`[${unit.name}]의 ${move.name}! [${nearestOpponent.name}]에게 효과가 없다!`);
            continue;
          }

          let damageToApply = calc.damage;
          nearestOpponent.hitAnim = Date.now();

          if (nearestOpponent.shield > 0) {
            if (nearestOpponent.shield >= damageToApply) {
              nearestOpponent.shield -= damageToApply;
              damageToApply = 0;
            } else {
              damageToApply -= nearestOpponent.shield;
              nearestOpponent.shield = 0;
            }
          }

          const isFullHp = nearestOpponent.currentHp === nearestOpponent.maxHp;
          if (
            damageToApply >= nearestOpponent.currentHp &&
            isFullHp &&
            nearestOpponent.items.some((item) => item.id === 'focus_sash')
          ) {
            nearestOpponent.currentHp = 1;
            nearestOpponent.items = nearestOpponent.items.filter((item) => item.id !== 'focus_sash');
            addFloatingText('기합의띠 버팀!', nearestOpponent.col, nearestOpponent.row, 'crit');
            addLog(`[${nearestOpponent.name}]이(가) 기합의띠로 1HP로 버텼다!`);
          } else {
            nearestOpponent.currentHp = Math.max(0, nearestOpponent.currentHp - damageToApply);
          }

          unit.damageDealt += calc.damage;
          nearestOpponent.damageTaken += calc.damage;

          if (calc.isCritical) {
            addFloatingText(`💥${calc.damage} 급소!`, nearestOpponent.col, nearestOpponent.row, 'crit');
          } else if (calc.typeMultiplier > 1.0) {
            addFloatingText(`⚡${calc.damage} 굉장함!`, nearestOpponent.col, nearestOpponent.row, 'super');
          } else if (calc.typeMultiplier < 1.0) {
            addFloatingText(`${calc.damage} 별로`, nearestOpponent.col, nearestOpponent.row, 'not_effective');
          } else {
            addFloatingText(`-${calc.damage}`, nearestOpponent.col, nearestOpponent.row, 'damage');
          }

          const effectText =
            calc.typeMultiplier > 1.0
              ? ' (효과가 굉장했다!)'
              : calc.typeMultiplier < 1.0
                ? ' (효과가 별로다)'
                : '';
          const critText = calc.isCritical ? ' [급소에 맞았다!]' : '';
          addLog(
            `[${unit.name}]의 ${move.name}! -> [${nearestOpponent.name}]에게 ${calc.damage} 피해${critText}${effectText}`,
            calc.typeMultiplier > 1.0 ? 'super' : calc.isCritical ? 'crit' : 'attack',
          );

          if (calc.drainAmount > 0) {
            unit.currentHp = Math.min(unit.maxHp, unit.currentHp + calc.drainAmount);
            addFloatingText(`+${calc.drainAmount}`, unit.col, unit.row, 'heal');
          }
          if (calc.recoilAmount > 0) {
            unit.currentHp = Math.max(1, unit.currentHp - calc.recoilAmount);
            addFloatingText(`-${calc.recoilAmount} 반동`, unit.col, unit.row, 'damage');
          }

          if (calc.statusApplied && !nearestOpponent.status) {
            nearestOpponent.status = calc.statusApplied;
            addFloatingText(`${calc.statusApplied}!`, nearestOpponent.col, nearestOpponent.row, 'status');
            addLog(`[${nearestOpponent.name}]이(가) ${calc.statusApplied} 상태에 걸렸습니다!`, 'status');
          }

          if (calc.statChangesApplied) {
            for (const change of calc.statChangesApplied) {
              const targetUnit: ActivePokemon =
                change.target === 'self' ? unit : nearestOpponent;
              const statKey = change.stat as keyof StatRanks;
              if (targetUnit.ranks[statKey] !== undefined) {
                targetUnit.ranks[statKey] = Math.max(
                  -6,
                  Math.min(6, targetUnit.ranks[statKey] + change.stages),
                );
                const direction = change.stages > 0 ? '상승했다!' : '떨어졌다!';
                addFloatingText(
                  `${change.stat} ${direction}`,
                  targetUnit.col,
                  targetUnit.row,
                  'rank',
                );
                addLog(`[${targetUnit.name}]의 ${change.stat}이(가) ${direction}`, 'rank');
              }
            }
          }

          if (nearestOpponent.currentHp <= 0 && !defeatedThisTick.has(nearestOpponent.instanceId)) {
            defeatedThisTick.add(nearestOpponent.instanceId);
            unit.kills += 1;
            addLog(`💀 [${nearestOpponent.name}]이(가) 쓰러졌습니다!`, 'faint');

            const darkSyn = synergies.find((synergy) => synergy.type === 'dark');
            if (
              unit.team === 'player' &&
              darkSyn &&
              darkSyn.activeTier >= 1 &&
              unit.types.includes('dark')
            ) {
              unit.attackCooldown = 0;
              unit.ranks.attack = Math.min(6, unit.ranks.attack + 1);
              addFloatingText('흑야의잔영 발동!', unit.col, unit.row, 'rank');
            }

            if (nearestOpponent.team === 'enemy') {
              const awards = grantExperienceToParticipants(
                units,
                playerParticipantIds,
                nearestOpponent.speciesId,
                nearestOpponent.level,
              );
              for (const award of awards) {
                const recipient = award.pokemon;
                addLog(
                  `[${recipient.name}]이(가) 전투 보상으로 ${award.expGained} EXP를 획득했습니다!`,
                  'system',
                );
                for (let levelIndex = 0; levelIndex < award.levelsGained; levelIndex += 1) {
                  const gainedLevel = recipient.level - award.levelsGained + levelIndex + 1;
                  addFloatingText(
                    `Lv.${gainedLevel} 레벨업!`,
                    recipient.col,
                    recipient.row,
                    'rank',
                  );
                  addLog(`✨ [${recipient.name}]이(가) Lv.${gainedLevel}로 레벨업했습니다!`, 'level');
                }
                for (const learnedMove of award.learnedMoves) {
                  addLog(
                    `📖 [${recipient.name}]이(가) 새로운 기술 [${learnedMove.name}]을(를) 배웠습니다!`,
                    'level',
                  );
                }
              }
            }
          }
        }

        // Poison or burn can also cause a faint without a queued direct hit.
        for (const fainted of units) {
          if (
            fainted.currentHp <= 0 &&
            activeAtTickStart.has(fainted.instanceId) &&
            !defeatedThisTick.has(fainted.instanceId)
          ) {
            defeatedThisTick.add(fainted.instanceId);
            addLog(`💀 [${fainted.name}]이(가) 쓰러졌습니다!`, 'faint');
            if (fainted.team === 'enemy') {
              const awards = grantExperienceToParticipants(
                units,
                playerParticipantIds,
                fainted.speciesId,
                fainted.level,
              );
              for (const award of awards) {
                addLog(
                  `[${award.pokemon.name}]이(가) 전투 보상으로 ${award.expGained} EXP를 획득했습니다!`,
                  'system',
                );
                for (let levelIndex = 0; levelIndex < award.levelsGained; levelIndex += 1) {
                  const gainedLevel =
                    award.pokemon.level - award.levelsGained + levelIndex + 1;
                  addFloatingText(
                    `Lv.${gainedLevel} 레벨업!`,
                    award.pokemon.col,
                    award.pokemon.row,
                    'rank',
                  );
                  addLog(
                    `✨ [${award.pokemon.name}]이(가) Lv.${gainedLevel}로 레벨업했습니다!`,
                    'level',
                  );
                }
                for (const learnedMove of award.learnedMoves) {
                  addLog(
                    `📖 [${award.pokemon.name}]이(가) 새로운 기술 [${learnedMove.name}]을(를) 배웠습니다!`,
                    'level',
                  );
                }
              }
            }
          }
        }

        // Place units onto nextBoard: living enemies + all player units (even if fainted, so player units never vanish)
        for (const u of units) {
          if (u.row >= 0 && u.row < 8 && u.col >= 0 && u.col < 7) {
            if (u.team === 'player' || u.currentHp > 0) {
              if (nextBoard[u.row][u.col] === null) {
                nextBoard[u.row][u.col] = u;
              } else {
                // Find nearest open tile in nextBoard so no unit is EVER lost
                let placed = false;
                for (let dist = 1; dist < 8 && !placed; dist++) {
                  for (let dr = -dist; dr <= dist && !placed; dr++) {
                    for (let dc = -dist; dc <= dist && !placed; dc++) {
                      const nr = u.row + dr;
                      const nc = u.col + dc;
                      if (nr >= 0 && nr < 8 && nc >= 0 && nc < 7 && nextBoard[nr][nc] === null) {
                        u.row = nr;
                        u.col = nc;
                        nextBoard[nr][nc] = u;
                        placed = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        return nextBoard;
      });
    }, tickMs);

    return () => {
      if (battleIntervalRef.current) clearInterval(battleIntervalRef.current);
    };
  }, [phase, battleSpeed, synergies, addLog, addFloatingText]);

  // === End Battle & Calculate Economy ===
  const endBattle = (isPlayerWon: boolean) => {
    setPhase('round_end');

    if (isPlayerWon) {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      const nextWin = winStreak + 1;
      setWinStreak(nextWin);
      setLossStreak(0);
      addLog(`🏆 [라운드 ${round}] 승리!`, 'super');

      // Drop milestone items on victory
      if (round === 2) {
        setItems((prev) => [...prev, POKEMON_ITEMS.find((i) => i.id === 'charcoal')!]);
        addLog('🎁 라운드 클리어 보상: [목탄]을 획득했습니다!', 'level');
      } else if (round === 4) {
        setItems((prev) => [...prev, POKEMON_ITEMS.find((i) => i.id === 'life_orb')!]);
        addLog('🎁 라운드 클리어 보상: [생명의구슬]을 획득했습니다!', 'level');
      } else if (round === 6) {
        setItems((prev) => [...prev, POKEMON_ITEMS.find((i) => i.id === 'linking_cord')!]);
        addLog('🎁 라운드 클리어 보상: [연결의끈]을 획득했습니다!', 'level');
      } else if (round === 8) {
        setItems((prev) => [...prev, POKEMON_ITEMS.find((i) => i.id === 'mega_stone')!]);
        addLog('🎁 보스 격파 보상: [메가스톤]을 획득했습니다!', 'level');
      }

      // Check ultimate victory (round 12)
      if (round >= 12) {
        setIsVictory(true);
        setIsGameOverModalOpen(true);
      }
    } else {
      const nextLoss = lossStreak + 1;
      setLossStreak(nextLoss);
      setWinStreak(0);

      // Remaining enemy count determines player damage
      const remainingEnemies = board.flat().filter((p) => p && p.team === 'enemy' && p.currentHp > 0).length;
      const damageTaken = Math.max(5, remainingEnemies * 4 + round * 2);
      const nextHp = Math.max(0, playerHp - damageTaken);
      setPlayerHp(nextHp);
      addLog(`💔 [라운드 ${round}] 패배... 플레이어 체력 -${damageTaken} HP (남은 체력: ${nextHp})`, 'faint');

      if (nextHp <= 0) {
        setIsVictory(false);
        setIsGameOverModalOpen(true);
        setPhase('game_over');
        return;
      }
    }

    // === Economy Calculations from PDF Page 1 ===
    // "재화는 원으로 1라운드에는 5원, 2,3라운드에는 2원, 4라운드에는 4원, 5라운드 이후부터는 5원이 지급된다."
    let baseRoundGold = 5;
    if (round === 1) baseRoundGold = 5;
    else if (round === 2 || round === 3) baseRoundGold = 2;
    else if (round === 4) baseRoundGold = 4;
    else baseRoundGold = 5;

    // Interest: "보유한 돈 10원당 1원의 이자가 발생하고, 최대 이자는 50원 기준 5원이다."
    const interest = Math.min(5, Math.floor(gold / 10));

    // Win bonus: "플레이어 간 전투에서 승리하면 1원을 추가로 얻고"
    const winBonus = isPlayerWon ? 1 : 0;

    // Streak bonus:
    // "2~3연승 / 2~3연패는 추가로 1원, 4연승 / 4연패는 추가로 2원, 5연승 이상 / 5연패 이상은 추가로 3원을 얻는다."
    let streakBonus = 0;
    const currentStreak = isPlayerWon ? winStreak + 1 : lossStreak + 1;
    if (currentStreak >= 5) streakBonus = 3;
    else if (currentStreak === 4) streakBonus = 2;
    else if (currentStreak >= 2) streakBonus = 1;

    const totalIncome = baseRoundGold + interest + winBonus + streakBonus;
    setGold((prev) => prev + totalIncome);
    addLog(`💰 골드 정산: 기본 +${baseRoundGold}원, 이자 +${interest}원, 보너스 +${winBonus + streakBonus}원 (총 +${totalIncome}원)`, 'system');

    // Fully revive all player pokemon (even if fainted during battle) and restore their board positions
    setBoard((prev) => {
      const next: BoardTile[][] = [];
      for (let r = 0; r < 8; r++) next.push(new Array(7).fill(null));

      // Collect battle updates (exp, level, kills, damage)
      const battleUpdates = new Map<string, ActivePokemon>();
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 7; c++) {
          const u = prev[r][c];
          if (u && u.team === 'player') {
            battleUpdates.set(u.instanceId, u);
          }
        }
      }

      for (const item of playerTeamSnapshotRef.current) {
        const u = battleUpdates.get(item.pokemon.instanceId) || item.pokemon;
        u.currentHp = u.maxHp;
        u.shield = 0;
        u.status = null;
        u.toxicCounter = 0;
        u.isStealthed = false;
        u.attackAnim = undefined;
        u.hitAnim = undefined;
        u.ranks = { attack: 0, defense: 0, spAttack: 0, spDefense: 0, speed: 0, accuracy: 0, evasion: 0 };
        u.row = item.row;
        u.col = item.col;
        for (const m of u.moves) {
          u.currentPp[m.id] = m.maxPp;
        }
        next[item.row][item.col] = u;
      }

      return next;
    });

    // Refresh shop if not locked
    if (!isShopLocked) {
      setShopItems(generateShop(trainerLevel, ownedSpeciesIds));
    }

    // Advance round after short delay
    setTimeout(() => {
      setRound((prev) => prev + 1);
      setPhase('planning');
      if (autoStart) {
        setTimeout(() => handleStartBattle(), 1000);
      }
    }, 2000);
  };

  // Restart game
  const handleRestart = () => {
    setRound(1);
    setPhase('planning');
    setGold(5);
    setTrainerLevel(1);
    setTrainerXp(0);
    setPlayerHp(100);
    setWinStreak(0);
    setLossStreak(0);
    setIsShopLocked(false);
    setShopItems(generateShop(1));
    setItems([
      POKEMON_ITEMS.find((i) => i.id === 'linking_cord')!,
      POKEMON_ITEMS.find((i) => i.id === 'leftovers')!,
    ]);
    setSelectedUnit(null);
    setInspectingPokemon(null);
    setIsGameOverModalOpen(false);

    // Clear board and bench
    const newBoard: BoardTile[][] = [];
    for (let r = 0; r < 8; r++) newBoard.push(new Array(7).fill(null));
    setBoard(newBoard);
    setBench(new Array(9).fill(null));
    setupOpponentForRound(1, []);
    addLog('새로운 포켓몬 오토체스 게임이 시작되었습니다!', 'system');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900 text-white flex flex-col font-sans select-none overflow-x-hidden">
      {/* Top HUD & Battle Controls */}
      <BattleControls
        round={round}
        phase={phase}
        playerHp={playerHp}
        opponent={currentOpponent}
        battleSpeed={battleSpeed}
        autoStart={autoStart}
        onStartBattle={handleStartBattle}
        onToggleSpeed={() => setBattleSpeed((s) => (s === 1 ? 2 : s === 2 ? 4 : 1))}
        onToggleAutoStart={() => setAutoStart((a) => !a)}
        onOpenTypeChart={() => setIsTypeChartOpen(true)}
        onOpenTutorial={() => setIsTutorialOpen(true)}
        onOpenMobileSynergy={() => setIsMobileSynergyOpen(true)}
        onOpenMobileLog={() => setIsMobileLogOpen(true)}
      />

      {/* Main Play Area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between p-2 sm:p-3 gap-2 sm:gap-3 max-w-7xl mx-auto w-full">
        {/* Left Side: Synergy HUD (Desktop / Laptop) */}
        <div className="hidden lg:flex flex-col gap-2 shrink-0">
          <SynergyPanel synergies={synergies} />
        </div>

        {/* Center: The 7x8 Battle Arena & 9-Slot Bench */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <GameBoard
            board={board}
            bench={bench}
            phase={phase}
            selectedUnit={selectedUnit}
            floatingTexts={floatingTexts}
            onSelectUnit={setSelectedUnit}
            onTileClick={handleTileClick}
            onBenchClick={handleBenchClick}
            onInspectUnit={(p) => setInspectingPokemon(p)}
          />

          {/* Item Tray below bench */}
          <div className="w-full max-w-2xl mt-1 sm:mt-2">
            <ItemInventory
              items={items}
              selectedItemIndex={selectedItemIndex}
              onSelectItem={setSelectedItemIndex}
              isBattleActive={phase === 'battle'}
            />
          </div>
        </div>

        {/* Right Side: Combat Battle Log (Desktop / Laptop) */}
        <div className="hidden lg:flex flex-col gap-2 shrink-0">
          <CombatLog logs={combatLogs} onClearLogs={() => setCombatLogs([])} />
        </div>
      </div>

      {/* Bottom: Shop Panel & Economy Controls */}
      <ShopPanel
        shopItems={shopItems}
        gold={gold}
        trainerLevel={trainerLevel}
        trainerXp={trainerXp}
        deployedCount={deployedPlayerPokemon.length}
        benchCount={benchCount}
        maxBench={9}
        winStreak={winStreak}
        lossStreak={lossStreak}
        round={round}
        isShopLocked={isShopLocked}
        isBattleActive={phase === 'battle'}
        onBuyPokemon={handleBuyPokemon}
        onReroll={handleReroll}
        onBuyXp={handleBuyXp}
        onToggleLock={handleToggleLock}
      />

      {/* Battle Guide Tutorial Modal */}
      <TutorialModal
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
      />

      {/* Mobile Synergy Drawer Modal */}
      {isMobileSynergyOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 animate-in fade-in">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4 max-w-md w-full shadow-2xl flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="font-black text-sm text-yellow-400 flex items-center gap-1.5">
                ⚡ 18타입 시너지 현황
              </span>
              <button
                onClick={() => setIsMobileSynergyOpen(false)}
                className="px-3 py-1 rounded-xl bg-gray-800 text-xs font-bold text-gray-300"
              >
                닫기
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-3">
              <SynergyPanel synergies={synergies} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Combat Log Drawer Modal */}
      {isMobileLogOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 animate-in fade-in">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4 max-w-md w-full shadow-2xl flex flex-col max-h-[85vh]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <span className="font-black text-sm text-cyan-400 flex items-center gap-1.5">
                📜 실시간 배틀 로그
              </span>
              <button
                onClick={() => setIsMobileLogOpen(false)}
                className="px-3 py-1 rounded-xl bg-gray-800 text-xs font-bold text-gray-300"
              >
                닫기
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pt-3">
              <CombatLog logs={combatLogs} onClearLogs={() => setCombatLogs([])} />
            </div>
          </div>
        </div>
      )}

      {/* Pokemon Detail / Skill Selection Modal */}
      <PokemonDetailModal
        pokemon={inspectingPokemon}
        onClose={() => setInspectingPokemon(null)}
        onSelectMove={handleSelectMove}
        onUnequipItem={handleUnequipItem}
        onEvolveWithCord={handleEvolveWithCord}
        onSellPokemon={handleSellPokemon}
        isBattleActive={phase === 'battle'}
      />

      {/* 18-Type Matchup Chart Modal */}
      <TypeChartModal
        isOpen={isTypeChartOpen}
        onClose={() => setIsTypeChartOpen(false)}
      />

      {/* Game Over / Victory Modal */}
      <GameOverModal
        isOpen={isGameOverModalOpen}
        isVictory={isVictory}
        round={round}
        playerTeam={deployedPlayerPokemon}
        onRestart={handleRestart}
      />
    </div>
  );
}
