import {
  ActivePokemon,
  BoardTile,
  CombatFloatingText,
  Item,
  Move,
  PokemonSpecies,
  PokemonType,
  StatRanks,
  SynergyTiers,
} from '../types/game';
import { POKEMON_SPECIES, SHOP_POOL_TIER_BASE, SHOP_POOL_LEGENDARIES } from '../data/pokemonData';
import { MOVES_DATA } from '../data/movesData';
import { POKEMON_ITEMS } from '../data/items';
import { SYNERGIES } from '../data/synergies';
import {
  calculateAttackSpeed,
  calculateDamage,
  calculateEffectiveStats,
  calculateExpGained,
  getRequiredExpForLevel,
} from './formulas';

const DEFAULT_RANKS: StatRanks = {
  attack: 0,
  defense: 0,
  spAttack: 0,
  spDefense: 0,
  speed: 0,
  accuracy: 0,
  evasion: 0,
};

// Player EXP needed to level up trainer (Level 1 -> 10)
export const TRAINER_LEVEL_XP: Record<number, number> = {
  1: 2,
  2: 4,
  3: 8,
  4: 14,
  5: 24,
  6: 36,
  7: 54,
  8: 76,
  9: 100,
  10: 9999,
};

/**
 * Generates an active Pokemon instance from a species
 */
export function instantiatePokemon(
  speciesId: string,
  team: 'player' | 'enemy',
  row: number = -1,
  col: number = -1,
  initialLevel: number = 1
): ActivePokemon {
  const species = POKEMON_SPECIES[speciesId] || POKEMON_SPECIES.charmander;
  const lvlRatio = 1 + (initialLevel - 1) * 0.05;
  const maxHp = Math.round(species.baseStats.hp * lvlRatio);

  const moves = species.possibleMoves
    .filter((m) => m.learnLevel <= initialLevel)
    .map((m) => MOVES_DATA[m.moveId])
    .filter(Boolean);

  if (moves.length === 0 && species.possibleMoves.length > 0) {
    moves.push(MOVES_DATA[species.possibleMoves[0].moveId]);
  }
  if (moves.length === 0) {
    moves.push(MOVES_DATA.tackle);
  }

  const selectedMoveId = moves[moves.length - 1].id;
  const currentPp: Record<string, number> = {};
  for (const m of moves) {
    currentPp[m.id] = m.maxPp;
  }

  return {
    instanceId: `${team}_${speciesId}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    speciesId,
    name: species.name,
    types: [...species.types],
    level: initialLevel,
    exp: 0,
    maxExp: getRequiredExpForLevel(initialLevel),
    cost: species.cost,
    evolutionStage: species.evolutionStage,
    evolutionStagesTotal: species.evolutionStagesTotal,
    isLegendary: species.isLegendary,
    maxHp,
    currentHp: maxHp,
    shield: 0,
    stats: { ...species.baseStats },
    ranks: { ...DEFAULT_RANKS },
    moves,
    selectedMoveId,
    currentPp,
    items: [],
    status: null,
    statusTurnsRemaining: 0,
    toxicCounter: 0,
    isStealthed: false,
    stealthTimer: 0,
    attackCooldown: 0,
    range: species.range,
    team,
    row,
    col,
    damageDealt: 0,
    damageTaken: 0,
    kills: 0,
    hitTargetInCombat: false,
    isMega: false,
  };
}

/**
 * Generate 5 shop items based on trainer level
 */
export function generateShop(trainerLevel: number): (PokemonSpecies | null)[] {
  // Legendary appearance chance unlocks at Level 6+
  // Lvl 6: 2%, Lvl 7: 5%, Lvl 8: 10%, Lvl 9: 18%, Lvl 10: 25%
  let legendaryRate = 0;
  if (trainerLevel === 6) legendaryRate = 0.03;
  else if (trainerLevel === 7) legendaryRate = 0.07;
  else if (trainerLevel === 8) legendaryRate = 0.12;
  else if (trainerLevel === 9) legendaryRate = 0.20;
  else if (trainerLevel >= 10) legendaryRate = 0.30;

  const result: (PokemonSpecies | null)[] = [];
  const basePool = SHOP_POOL_TIER_BASE;

  for (let i = 0; i < 5; i++) {
    if (trainerLevel >= 6 && Math.random() < legendaryRate) {
      const randomLeg = SHOP_POOL_LEGENDARIES[Math.floor(Math.random() * SHOP_POOL_LEGENDARIES.length)];
      result.push(POKEMON_SPECIES[randomLeg]);
    } else {
      const randomId = basePool[Math.floor(Math.random() * basePool.length)];
      result.push(POKEMON_SPECIES[randomId]);
    }
  }

  return result;
}

/**
 * Calculate active synergies for a team of deployed Pokemon
 */
export function calculateSynergies(deployedPokemon: ActivePokemon[]): SynergyTiers[] {
  const typeCounts: Partial<Record<PokemonType, number>> = {};
  
  // Count unique species per type on the battlefield (as in standard Auto Chess)
  // or count all deployed instances that have the type. As PDF says:
  // "각 파티별로 같은 타입인 포켓몬이 3마리 이상 있으면 타입별로 버프를 받을 수 있다... 두 개의 타입을 가진 포켓몬의 경우 시너지 카운트에 각각 1씩 동시에 기여한다."
  for (const poke of deployedPokemon) {
    if (poke.currentHp <= 0) continue;
    for (const t of poke.types) {
      typeCounts[t] = (typeCounts[t] || 0) + 1;
    }
  }

  const result: SynergyTiers[] = [];
  for (const [typeKey, config] of Object.entries(SYNERGIES)) {
    const pType = typeKey as PokemonType;
    const count = typeCounts[pType] || 0;
    let activeTier: 0 | 1 | 2 = 0;
    if (count >= config.thresholds[1]) {
      activeTier = 2;
    } else if (count >= config.thresholds[0]) {
      activeTier = 1;
    }

    result.push({
      type: pType,
      name: config.title,
      koreanName: SYNERGIES[pType].title,
      counts: config.thresholds,
      currentCount: count,
      activeTier,
      effects: [config.tier1Desc, config.tier2Desc],
    });
  }

  // Sort by active tier descending, then by count descending
  return result.sort((a, b) => {
    if (b.activeTier !== a.activeTier) return b.activeTier - a.activeTier;
    return b.currentCount - a.currentCount;
  });
}

/**
 * Checks and fuses 3 identical Pokemon into the next evolution stage
 * Inherits highest level and combined items.
 */
export interface EvolutionResult {
  didEvolve: boolean;
  evolvedSpeciesName?: string;
  bench: (ActivePokemon | null)[];
  board: BoardTile[][];
  returnedItems: Item[];
}

/**
 * Checks and fuses 3 identical Pokemon (same species and star level) into the next evolution stage / star upgrade.
 * Supports chain / cascading evolutions (e.g. 3x 1-star -> 2-star, and if that makes 3x 2-star -> 3-star).
 * Inherits highest level, accumulated EXP, and equipped items (excess items returned to inventory).
 */
export function checkAndExecuteEvolution(
  initialBench: (ActivePokemon | null)[],
  initialBoard: BoardTile[][],
  extraPokemon?: ActivePokemon
): EvolutionResult {
  let currentBench = initialBench.map((p) => (p ? { ...p } : null));
  let currentBoard = initialBoard.map((row) => row.map((p) => (p ? { ...p } : null)));
  let didAnyEvolve = false;
  const evolvedNames: string[] = [];
  const allReturnedItems: Item[] = [];

  let pendingExtra = extraPokemon ? { ...extraPokemon } : null;

  // Loop to handle cascading evolutions (e.g. 3 Charmander -> 1 Charmeleon, which triggers 3 Charmeleon -> 1 Charizard)
  while (true) {
    // Collect all player pokemon with location
    const allPokemon: {
      poke: ActivePokemon;
      loc: 'bench' | 'board' | 'extra';
      index?: number;
      r?: number;
      c?: number;
    }[] = [];

    currentBench.forEach((p, idx) => {
      if (p) allPokemon.push({ poke: p, loc: 'bench', index: idx });
    });

    for (let r = 4; r < 8; r++) {
      for (let c = 0; c < 7; c++) {
        const p = currentBoard[r][c];
        if (p && p.team === 'player') {
          allPokemon.push({ poke: p, loc: 'board', r, c });
        }
      }
    }

    if (pendingExtra) {
      allPokemon.push({ poke: pendingExtra, loc: 'extra' });
    }

    // Group by speciesId AND evolutionStage (so only 3 units of the same star rank fuse!)
    const speciesGroups: Record<string, typeof allPokemon> = {};
    for (const item of allPokemon) {
      const sId = item.poke.speciesId;
      const stage = item.poke.evolutionStage || 1;

      // Units that are already 3-star (maximum rank) cannot fuse further
      if (stage >= 3) {
        continue;
      }

      const groupKey = `${sId}_stage${stage}`;
      if (!speciesGroups[groupKey]) speciesGroups[groupKey] = [];
      speciesGroups[groupKey].push(item);
    }

    // Find first group with >= 3 candidates
    let fuseGroupKey: string | null = null;
    for (const [key, items] of Object.entries(speciesGroups)) {
      if (items.length >= 3) {
        fuseGroupKey = key;
        break;
      }
    }

    if (!fuseGroupKey) {
      // No more 3-unit fusions possible
      break;
    }

    const items = speciesGroups[fuseGroupKey];
    const toFuse = items.slice(0, 3);
    const samplePoke = toFuse[0].poke;
    const currentSpecies = POKEMON_SPECIES[samplePoke.speciesId];

    // If pendingExtra was used in this fusion, clear it
    if (toFuse.some((x) => x.loc === 'extra')) {
      pendingExtra = null;
    }

    // Determine target position for the evolved Pokemon:
    // Prefer board position so deployed team remains on board, then bench
    const targetPlace =
      toFuse.find((x) => x.loc === 'board') ||
      toFuse.find((x) => x.loc === 'bench') ||
      toFuse[0];

    // Find highest level and EXP among the 3
    const maxLevel = Math.max(...toFuse.map((x) => x.poke.level));
    const accumulatedExp = Math.max(...toFuse.map((x) => x.poke.exp));

    // Combine all items from the 3 fusing units
    const combinedItems: Item[] = [];
    for (const item of toFuse) {
      for (const itm of item.poke.items) {
        combinedItems.push(itm);
      }
    }
    const equippedItems = combinedItems.slice(0, 6);
    const overflowItems = combinedItems.slice(6);
    allReturnedItems.push(...overflowItems);

    // Remove the fused units from bench and board
    for (const item of toFuse) {
      if (item.loc === 'bench' && item.index !== undefined) {
        currentBench[item.index] = null;
      } else if (item.loc === 'board' && item.r !== undefined && item.c !== undefined) {
        currentBoard[item.r][item.c] = null;
      }
    }

    let evolvedPoke: ActivePokemon;
    let newSpeciesDisplayName = '';

    // Check if species has a defined next evolution in the species database
    const nextSpeciesId = currentSpecies?.evolvesTo;
    const nextSpecies = nextSpeciesId ? POKEMON_SPECIES[nextSpeciesId] : null;

    const targetRow = targetPlace.loc === 'board' ? (targetPlace.r ?? -1) : -1;
    const targetCol = targetPlace.loc === 'board' ? (targetPlace.c ?? -1) : -1;

    if (nextSpecies) {
      // Case 1: Standard / Trade species evolution (e.g. Charmander -> Charmeleon -> Charizard, Gastly -> Haunter -> Gengar)
      evolvedPoke = instantiatePokemon(
        nextSpeciesId!,
        'player',
        targetRow,
        targetCol,
        maxLevel
      );
      evolvedPoke.exp = accumulatedExp;
      evolvedPoke.items = equippedItems;
      newSpeciesDisplayName = nextSpecies.name;
    } else {
      // Case 2: Star upgrade for Pokemon with no higher species in database (e.g. Gen 2-9 starters, single-stage Pokemon)
      const nextStage = Math.min(3, (samplePoke.evolutionStage || 1) + 1) as 1 | 2 | 3;
      const statMultiplier = nextStage === 3 ? 1.6 : 1.4;
      const hpMultiplier = nextStage === 3 ? 1.7 : 1.5;

      const upgradedHp = Math.round(samplePoke.maxHp * hpMultiplier);
      evolvedPoke = {
        ...JSON.parse(JSON.stringify(samplePoke)),
        instanceId: `player_${samplePoke.speciesId}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        row: targetRow,
        col: targetCol,
        level: maxLevel + 2,
        exp: accumulatedExp,
        evolutionStage: nextStage,
        evolutionStagesTotal: 3,
        cost: samplePoke.cost * 2,
        maxHp: upgradedHp,
        currentHp: upgradedHp,
        stats: {
          hp: Math.round(samplePoke.stats.hp * hpMultiplier),
          attack: Math.round(samplePoke.stats.attack * statMultiplier),
          defense: Math.round(samplePoke.stats.defense * statMultiplier),
          spAttack: Math.round(samplePoke.stats.spAttack * statMultiplier),
          spDefense: Math.round(samplePoke.stats.spDefense * statMultiplier),
          speed: samplePoke.stats.speed,
        },
        items: equippedItems,
      };
      newSpeciesDisplayName = `${samplePoke.name} (★${nextStage})`;
    }

    // Place the evolved pokemon
    if (targetPlace.loc === 'board' && targetPlace.r !== undefined && targetPlace.c !== undefined) {
      currentBoard[targetPlace.r][targetPlace.c] = evolvedPoke;
    } else if (targetPlace.loc === 'bench' && targetPlace.index !== undefined) {
      currentBench[targetPlace.index] = evolvedPoke;
    } else {
      // If target was extra, find first empty slot on bench or board
      const emptyBench = currentBench.findIndex((slot) => slot === null);
      if (emptyBench !== -1) {
        currentBench[emptyBench] = evolvedPoke;
      } else {
        let placed = false;
        for (let r = 4; r < 8 && !placed; r++) {
          for (let c = 0; c < 7 && !placed; c++) {
            if (currentBoard[r][c] === null) {
              evolvedPoke.row = r;
              evolvedPoke.col = c;
              currentBoard[r][c] = evolvedPoke;
              placed = true;
            }
          }
        }
      }
    }

    didAnyEvolve = true;
    evolvedNames.push(newSpeciesDisplayName);
  }

  return {
    didEvolve: didAnyEvolve,
    evolvedSpeciesName: evolvedNames.join(' ➡️ '),
    bench: currentBench,
    board: currentBoard,
    returnedItems: allReturnedItems,
  };
}

/**
 * Evolve a trade-evolution Pokemon directly with Linking Cord
 */
export function evolveWithLinkingCord(
  pokemon: ActivePokemon
): ActivePokemon | null {
  const currentSpecies = POKEMON_SPECIES[pokemon.speciesId];
  if (!currentSpecies.evolvesTo) return null;
  const nextSpeciesId = currentSpecies.evolvesTo;
  
  const evolved = instantiatePokemon(
    nextSpeciesId,
    pokemon.team,
    pokemon.row,
    pokemon.col,
    pokemon.level
  );
  evolved.exp = pokemon.exp;
  // Keep items except used linking cord
  evolved.items = pokemon.items.filter((i) => i.id !== 'linking_cord');
  return evolved;
}
