import { ActivePokemon, StatRanks } from '../types/game';
import { POKEMON_SPECIES } from '../data/pokemonData';
import { MOVES_DATA } from '../data/movesData';

export interface OpponentTrainer {
  name: string;
  title: string;
  avatar: string;
  dialogue: string;
  round: number;
  team: {
    speciesId: string;
    level: number;
    col: number;
    row: number; // 0, 1, 2, 3
    items?: string[];
    isMega?: boolean;
  }[];
}

const DEFAULT_RANKS: StatRanks = {
  attack: 0,
  defense: 0,
  spAttack: 0,
  spDefense: 0,
  speed: 0,
  accuracy: 0,
  evasion: 0,
};

export function createOpponentPokemon(
  speciesId: string,
  level: number,
  row: number,
  col: number,
  isMega: boolean = false
): ActivePokemon {
  const species = POKEMON_SPECIES[speciesId] || POKEMON_SPECIES.charmander;
  const lvlRatio = 1 + (level - 1) * 0.05;
  const maxHp = Math.round(species.baseStats.hp * lvlRatio);

  const moves = species.possibleMoves
    .filter((m) => m.learnLevel <= level)
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
    instanceId: `enemy_${speciesId}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    speciesId,
    name: species.name,
    types: [...species.types],
    level,
    exp: 0,
    maxExp: 1000,
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
    team: 'enemy',
    row,
    col,
    damageDealt: 0,
    damageTaken: 0,
    kills: 0,
    hitTargetInCombat: false,
    isMega,
  };
}

export const OPPONENTS: OpponentTrainer[] = [
  {
    round: 1,
    name: '야생 포켓몬 (Wild Encounter)',
    title: '1번 도로의 풀숲',
    avatar: '🌿',
    dialogue: '풀숲에서 야생 꼬렛이 불쑥 튀어나왔다!',
    team: [
      { speciesId: 'rattata', level: 1, row: 2, col: 3 },
    ],
  },
  {
    round: 2,
    name: '야생 포켓몬 무리 (Wild Forest)',
    title: '상록숲의 야생 포켓몬',
    avatar: '🐛',
    dialogue: '나뭇잎 사이로 캐터피와 구구가 호기심 어린 눈으로 다가옵니다.',
    team: [
      { speciesId: 'caterpie', level: 1, row: 2, col: 2 },
      { speciesId: 'pidgey', level: 1, row: 2, col: 4 },
    ],
  },
  {
    round: 3,
    name: '반바지 꼬마 동수 (Youngster Joey)',
    title: '초보 트레이너',
    avatar: '🧢',
    dialogue: '내 꼬렛은 상위 1%의 특급 꼬렛이라고! 한번 배틀해볼래?',
    team: [
      { speciesId: 'rattata', level: 2, row: 2, col: 2 },
      { speciesId: 'snivy', level: 2, row: 2, col: 4 },
    ],
  },
  {
    round: 4,
    name: '웅이 (Gym Leader Brock)',
    title: '회색체육관 관장 - 바위의 의지',
    avatar: '🪨',
    dialogue: '나의 단단한 바위 포켓몬들을 뚫을 수 있을까?',
    team: [
      { speciesId: 'machop', level: 4, row: 2, col: 2 },
      { speciesId: 'onix', level: 4, row: 2, col: 4 },
    ],
  },
  {
    round: 5,
    name: '이슬이 (Gym Leader Misty)',
    title: '블루체육관 관장 - 말괄량이 인어',
    avatar: '💧',
    dialogue: '물 포켓몬의 유연함과 회복력을 느껴봐!',
    team: [
      { speciesId: 'squirtle', level: 5, row: 2, col: 2 },
      { speciesId: 'psyduck', level: 5, row: 2, col: 4 },
      { speciesId: 'lapras', level: 5, row: 1, col: 3 },
    ],
  },
  {
    round: 6,
    name: '마티스 (Lt. Surge)',
    title: '갈색체육관 관장 - 번개 미군',
    avatar: '⚡',
    dialogue: '헤이 베이비! 짜릿한 백만 볼트 맛을 보여주지!',
    team: [
      { speciesId: 'pikachu', level: 6, row: 2, col: 2 },
      { speciesId: 'raichu', level: 6, row: 2, col: 4 },
      { speciesId: 'machoke', level: 6, row: 3, col: 3 },
    ],
  },
  {
    round: 7,
    name: '에리카 (Erika)',
    title: '무지개체육관 관장 - 자연의 아가씨',
    avatar: '🌸',
    dialogue: '풀 포켓몬들의 생명력은 끝이 없답니다.',
    team: [
      { speciesId: 'bulbasaur', level: 8, row: 2, col: 1 },
      { speciesId: 'ivysaur', level: 8, row: 2, col: 3 },
      { speciesId: 'butterfree', level: 8, row: 1, col: 5 },
      { speciesId: 'turtwig', level: 8, row: 3, col: 3 },
    ],
  },
  {
    round: 8,
    name: '초련 (Sabrina)',
    title: '노랑체육관 관장 - 에스퍼의 여왕',
    avatar: '🔮',
    dialogue: '당신의 패배는 이미 미래에 예견되어 있어요.',
    team: [
      { speciesId: 'kadabra', level: 10, row: 1, col: 2 },
      { speciesId: 'haunter', level: 10, row: 1, col: 4 },
      { speciesId: 'espeon', level: 10, row: 2, col: 3 },
      { speciesId: 'mimikyu', level: 10, row: 3, col: 3 },
    ],
  },
  {
    round: 9,
    name: '블레인 (Blaine)',
    title: '홍련체육관 관장 - 열혈 퀴즈 마스터',
    avatar: '🔥',
    dialogue: '불꽃 시너지의 뜨거운 화염을 견딜 수 있을까?!',
    team: [
      { speciesId: 'charmeleon', level: 12, row: 2, col: 2 },
      { speciesId: 'arcanine', level: 12, row: 1, col: 3 },
      { speciesId: 'charizard', level: 12, row: 1, col: 4 },
      { speciesId: 'flareon', level: 12, row: 3, col: 3 },
      { speciesId: 'machamp', level: 12, row: 3, col: 1 },
    ],
  },
  {
    round: 10,
    name: '비주기 (Giovanni)',
    title: '로켓단 두목 & 상록체육관 관장',
    avatar: '🕶️',
    dialogue: '세계는 악의 손아귀에 있다. 너의 포켓몬을 모두 빼앗아주마!',
    team: [
      { speciesId: 'persian', level: 14, row: 2, col: 1 },
      { speciesId: 'garchomp', level: 14, row: 3, col: 3 },
      { speciesId: 'gengar', level: 14, row: 1, col: 5 },
      { speciesId: 'gyarados', level: 14, row: 2, col: 4 },
      { speciesId: 'scizor', level: 14, row: 3, col: 2 },
      { speciesId: 'tyranitar', level: 14, row: 2, col: 3 },
    ],
  },
  {
    round: 11,
    name: '난천 (Cynthia)',
    title: '신오리그 챔피언 - 고고학자',
    avatar: '👑',
    dialogue: '포켓몬과의 깊은 유대감이 만들어내는 진정한 힘을 보여드리죠.',
    team: [
      { speciesId: 'garchomp', level: 17, row: 3, col: 3, isMega: true },
      { speciesId: 'lucario', level: 17, row: 2, col: 2 },
      { speciesId: 'gardevoir', level: 17, row: 1, col: 4 },
      { speciesId: 'gengar', level: 17, row: 1, col: 2 },
      { speciesId: 'metagross', level: 17, row: 3, col: 5 },
      { speciesId: 'greninja', level: 17, row: 2, col: 4 },
    ],
  },
  {
    round: 12,
    name: '전설의 트레이너 레드 (Legendary Red)',
    title: '은빛산 정상의 정점',
    avatar: '🧢',
    dialogue: '...... (조용히 몬스터볼을 던진다)',
    team: [
      { speciesId: 'charizard', level: 20, row: 2, col: 3, isMega: true },
      { speciesId: 'blastoise', level: 20, row: 3, col: 2 },
      { speciesId: 'venusaur', level: 20, row: 3, col: 4 },
      { speciesId: 'raichu', level: 20, row: 2, col: 5 },
      { speciesId: 'snorlax', level: 20, row: 3, col: 3 },
      { speciesId: 'mewtwo', level: 22, row: 1, col: 3 },
    ],
  },
];

/**
 * Get opponent for round N, or procedural infinite round generator
 */
export function getOpponentForRound(round: number): OpponentTrainer {
  if (round <= OPPONENTS.length) {
    return OPPONENTS[round - 1];
  }
  
  // Procedural scaling for round 13+
  const bonusLevel = 20 + (round - 12) * 3;
  return {
    round,
    name: `마스터 챔피언 Lv.${bonusLevel}`,
    title: `엔드게임 마스터 트레이너 (Round ${round})`,
    avatar: '⚡',
    dialogue: '끝없는 시련에 도전할 준비가 되었는가!',
    team: [
      { speciesId: 'garchomp', level: bonusLevel, row: 3, col: 3, isMega: true },
      { speciesId: 'charizard', level: bonusLevel, row: 2, col: 2 },
      { speciesId: 'mewtwo', level: bonusLevel + 2, row: 1, col: 3 },
      { speciesId: 'dragonite', level: bonusLevel, row: 2, col: 4 },
      { speciesId: 'koraidon', level: bonusLevel + 2, row: 3, col: 1 },
      { speciesId: 'miraidon', level: bonusLevel + 2, row: 1, col: 5 },
      { speciesId: 'tinkaton', level: bonusLevel + 2, row: 3, col: 5 },
    ],
  };
}
