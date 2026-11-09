import { PokemonType } from '../types/game';

export const TYPE_COLORS: Record<PokemonType, { bg: string; text: string; border: string; badge: string; accent: string }> = {
  normal: { bg: '#9FA19F', text: '#FFFFFF', border: '#797964', badge: 'bg-[#9FA19F] text-white', accent: '#A8A878' },
  fire: { bg: '#E62829', text: '#FFFFFF', border: '#A61A1A', badge: 'bg-[#E62829] text-white', accent: '#F08030' },
  water: { bg: '#2980EF', text: '#FFFFFF', border: '#1A55A6', badge: 'bg-[#2980EF] text-white', accent: '#6890F0' },
  grass: { bg: '#3FA129', text: '#FFFFFF', border: '#256D18', badge: 'bg-[#3FA129] text-white', accent: '#78C850' },
  electric: { bg: '#FAC000', text: '#1E1E1E', border: '#B88D00', badge: 'bg-[#FAC000] text-gray-900', accent: '#F8D030' },
  ice: { bg: '#3DCEF3', text: '#1E1E1E', border: '#2289A3', badge: 'bg-[#3DCEF3] text-gray-900', accent: '#98D8D8' },
  fighting: { bg: '#FF8000', text: '#FFFFFF', border: '#B35900', badge: 'bg-[#FF8000] text-white', accent: '#C03028' },
  poison: { bg: '#9141CB', text: '#FFFFFF', border: '#5C2782', badge: 'bg-[#9141CB] text-white', accent: '#A040A0' },
  ground: { bg: '#915121', text: '#FFFFFF', border: '#5A3214', badge: 'bg-[#915121] text-white', accent: '#E0C068' },
  flying: { bg: '#81B9EF', text: '#1E1E1E', border: '#4E83B3', badge: 'bg-[#81B9EF] text-gray-900', accent: '#A890F0' },
  psychic: { bg: '#EF4179', text: '#FFFFFF', border: '#A82550', badge: 'bg-[#EF4179] text-white', accent: '#F85888' },
  bug: { bg: '#91A119', text: '#FFFFFF', border: '#5A640F', badge: 'bg-[#91A119] text-white', accent: '#A8B820' },
  rock: { bg: '#AFA981', text: '#FFFFFF', border: '#6E694E', badge: 'bg-[#AFA981] text-white', accent: '#B8A038' },
  ghost: { bg: '#704170', text: '#FFFFFF', border: '#452845', badge: 'bg-[#704170] text-white', accent: '#705898' },
  dragon: { bg: '#5060E1', text: '#FFFFFF', border: '#2D3996', badge: 'bg-[#5060E1] text-white', accent: '#7038F8' },
  dark: { bg: '#50413F', text: '#FFFFFF', border: '#2E2524', badge: 'bg-[#50413F] text-white', accent: '#705848' },
  steel: { bg: '#60A1B8', text: '#FFFFFF', border: '#3B6877', badge: 'bg-[#60A1B8] text-white', accent: '#B8B8D0' },
  fairy: { bg: '#EF70EF', text: '#FFFFFF', border: '#9E459E', badge: 'bg-[#EF70EF] text-white', accent: '#EE99AC' },
};

export const TYPE_NAMES_KO: Record<PokemonType, string> = {
  normal: '노말',
  fire: '불꽃',
  water: '물',
  grass: '풀',
  electric: '전기',
  ice: '얼음',
  fighting: '격투',
  poison: '독',
  ground: '땅',
  flying: '비행',
  psychic: '에스퍼',
  bug: '벌레',
  rock: '바위',
  ghost: '고스트',
  dragon: '드래곤',
  dark: '악',
  steel: '강철',
  fairy: '페어리',
};

export const ALL_TYPES: PokemonType[] = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
];

// Attack type -> Defender type -> multiplier
export const TYPE_CHART: Record<PokemonType, Partial<Record<PokemonType, number>>> = {
  normal: {
    rock: 0.5,
    ghost: 0,
    steel: 0.5,
  },
  fire: {
    fire: 0.5,
    water: 0.5,
    grass: 2.0,
    ice: 2.0,
    bug: 2.0,
    rock: 0.5,
    dragon: 0.5,
    steel: 2.0,
  },
  water: {
    fire: 2.0,
    water: 0.5,
    grass: 0.5,
    ground: 2.0,
    rock: 2.0,
    dragon: 0.5,
  },
  grass: {
    fire: 0.5,
    water: 2.0,
    grass: 0.5,
    poison: 0.5,
    ground: 2.0,
    flying: 0.5,
    bug: 0.5,
    rock: 2.0,
    dragon: 0.5,
    steel: 0.5,
  },
  electric: {
    water: 2.0,
    electric: 0.5,
    grass: 0.5,
    ground: 0,
    flying: 2.0,
    dragon: 0.5,
  },
  ice: {
    fire: 0.5,
    water: 0.5,
    grass: 2.0,
    ice: 0.5,
    ground: 2.0,
    flying: 2.0,
    dragon: 2.0,
    steel: 0.5,
  },
  fighting: {
    normal: 2.0,
    ice: 2.0,
    poison: 0.5,
    flying: 0.5,
    psychic: 0.5,
    bug: 0.5,
    rock: 2.0,
    ghost: 0,
    dark: 2.0,
    steel: 2.0,
    fairy: 0.5,
  },
  poison: {
    grass: 2.0,
    poison: 0.5,
    ground: 0.5,
    rock: 0.5,
    ghost: 0.5,
    steel: 0,
    fairy: 2.0,
  },
  ground: {
    fire: 2.0,
    electric: 2.0,
    grass: 0.5,
    poison: 2.0,
    flying: 0,
    bug: 0.5,
    rock: 2.0,
    steel: 2.0,
  },
  flying: {
    electric: 0.5,
    grass: 2.0,
    fighting: 2.0,
    bug: 2.0,
    rock: 0.5,
    steel: 0.5,
  },
  psychic: {
    fighting: 2.0,
    poison: 2.0,
    psychic: 0.5,
    dark: 0,
    steel: 0.5,
  },
  bug: {
    fire: 0.5,
    grass: 2.0,
    fighting: 0.5,
    poison: 0.5,
    flying: 0.5,
    psychic: 2.0,
    ghost: 0.5,
    dark: 2.0,
    steel: 0.5,
    fairy: 0.5,
  },
  rock: {
    fire: 2.0,
    ice: 2.0,
    fighting: 0.5,
    ground: 0.5,
    flying: 2.0,
    bug: 2.0,
    steel: 0.5,
  },
  ghost: {
    normal: 0,
    psychic: 2.0,
    ghost: 2.0,
    dark: 0.5,
  },
  dragon: {
    dragon: 2.0,
    steel: 0.5,
    fairy: 0,
  },
  dark: {
    fighting: 0.5,
    psychic: 2.0,
    ghost: 2.0,
    dark: 0.5,
    fairy: 0.5,
  },
  steel: {
    fire: 0.5,
    water: 0.5,
    electric: 0.5,
    ice: 2.0,
    rock: 2.0,
    steel: 0.5,
    fairy: 2.0,
  },
  fairy: {
    fire: 0.5,
    fighting: 2.0,
    poison: 0.5,
    dragon: 2.0,
    dark: 2.0,
    steel: 0.5,
  },
};

/**
 * Calculates type effectiveness multiplier against single or dual-type defender
 */
export function getTypeMultiplier(attackType: PokemonType, defenderTypes: PokemonType[]): number {
  let multiplier = 1.0;
  for (const defType of defenderTypes) {
    const match = TYPE_CHART[attackType]?.[defType];
    if (match !== undefined) {
      multiplier *= match;
    }
  }
  return multiplier;
}
