export type PokemonType =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export type MoveCategory = 'physical' | 'special' | 'status';

export interface Move {
  id: string;
  name: string; // Korean name
  nameEn: string;
  type: PokemonType;
  category: MoveCategory;
  power: number;
  accuracy: number; // 0 - 100
  maxPp: number;
  range: number; // 1 = melee, 2-4 = ranged
  description: string;
  effect?: {
    status?: 'burn' | 'paralysis' | 'poison' | 'toxic' | 'sleep' | 'freeze';
    statusChance?: number;
    statChanges?: {
      target: 'self' | 'opponent';
      stat: 'attack' | 'defense' | 'spAttack' | 'spDefense' | 'speed' | 'accuracy' | 'evasion';
      stages: number;
    }[];
    healPercent?: number;
    drainPercent?: number;
  };
}

export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

export type StatusCondition = 'burn' | 'paralysis' | 'poison' | 'toxic' | 'sleep' | 'freeze' | null;

export interface StatRanks {
  attack: number;     // -6 to +6
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  accuracy: number;
  evasion: number;
}

export interface PokemonSpecies {
  id: string;
  pokedexNumber: number;
  generation?: number;
  name: string; // Korean
  nameEn: string;
  types: PokemonType[];
  baseStats: BaseStats;
  baseExp: number;
  evolutionStage: 1 | 2 | 3; // 1: base, 2: mid, 3: final
  evolutionStagesTotal: 1 | 2 | 3; // 1: non-evolving, 2: 2-stage line, 3: 3-stage line
  cost: number; // 1, 2, 3, 6, 9, 10
  isLegendary?: boolean;
  evolvesTo?: string; // Next species id
  requiresTradeItem?: boolean; // Requires Linking Cord (연결의끈)
  possibleMoves: {
    moveId: string;
    learnLevel: number;
  }[];
  range: number;
  spriteUrl: string;
  backSpriteUrl?: string;
}

export interface Item {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  isConsumable?: boolean;
  exclusiveTo?: string[]; // Pokemon IDs
  typeBoost?: PokemonType;
}

export interface ActivePokemon {
  instanceId: string;
  speciesId: string;
  name: string;
  types: PokemonType[];
  level: number;
  exp: number;
  maxExp: number;
  cost: number;
  evolutionStage: 1 | 2 | 3;
  evolutionStagesTotal: 1 | 2 | 3;
  isLegendary?: boolean;
  
  // Real combat stats
  maxHp: number;
  currentHp: number;
  shield: number;
  stats: BaseStats;
  ranks: StatRanks;
  
  // Moves & PP
  moves: Move[];
  selectedMoveId: string;
  currentPp: Record<string, number>; // moveId -> remaining PP
  
  // Items
  items: Item[];
  
  // Combat status
  status: StatusCondition;
  statusTurnsRemaining: number;
  toxicCounter: number;
  isStealthed: boolean;
  stealthTimer: number;
  attackCooldown: number; // seconds until next attack
  range: number;
  
  // Position
  team: 'player' | 'enemy';
  row: number; // 0-7
  col: number; // 0-6
  
  // Metrics
  damageDealt: number;
  damageTaken: number;
  kills: number;
  hitTargetInCombat: boolean; // For EXP distribution factor
  
  // Mega/Forme
  isMega?: boolean;

  // Animation metadata
  attackAnim?: { targetCol: number; targetRow: number; time: number; moveType?: PokemonType; isRanged?: boolean };
  hitAnim?: number;
}

export type BoardTile = ActivePokemon | null;

export interface SynergyTiers {
  type: PokemonType;
  name: string;
  koreanName: string;
  counts: [number, number]; // e.g. [3, 5]
  currentCount: number;
  activeTier: 0 | 1 | 2; // 0 = none, 1 = 3-piece, 2 = 5-piece
  effects: [string, string];
}

export type GamePhase = 'planning' | 'battle' | 'round_end' | 'game_over' | 'victory';

export interface CombatFloatingText {
  id: string;
  text: string;
  type: 'damage' | 'heal' | 'crit' | 'super' | 'not_effective' | 'immune' | 'rank' | 'status' | 'miss';
  col: number;
  row: number;
  createdAt: number;
}
