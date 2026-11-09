import { PokemonType } from '../types/game';

export interface SynergyConfig {
  type: PokemonType;
  title: string;
  thresholds: [number, number]; // [3, 5]
  tier1Desc: string;
  tier2Desc: string;
  shortDesc: string;
}

export const SYNERGIES: Record<PokemonType, SynergyConfig> = {
  fire: {
    type: 'fire',
    title: '타오르는불사조',
    thresholds: [3, 5],
    tier1Desc: '불꽃 포켓몬 공/특공 +10%. 기본 공격 시 10% 확률로 2초간 화상 (초당 최대 HP 1% 지속 피해 및 물리 공격력 50% 감소).',
    tier2Desc: '불꽃 포켓몬 공/특공 +25%, 화상 부여 확률 20%로 증가.',
    shortDesc: '공/특공 증가 & 공격 시 화상 부여',
  },
  water: {
    type: 'water',
    title: '아쿠아마린',
    thresholds: [3, 5],
    tier1Desc: '물 포켓몬이 매초 최대 HP의 1.5%를 지속 회복합니다.',
    tier2Desc: '매초 최대 HP 3.5% 회복 및 전투 시작 시 4초간 최대 HP 15% 보호막 획득.',
    shortDesc: '체력 지속 재생 & 전투 개시 보호막',
  },
  grass: {
    type: 'grass',
    title: '생명의꽃봉오리',
    thresholds: [3, 5],
    tier1Desc: '풀 포켓몬이 가한 피해의 12%를 체력으로 흡수합니다.',
    tier2Desc: '체력 흡수 비율 25%로 증가, 전투 시작 시 아군 전체 포켓몬 최대 HP +10%.',
    shortDesc: '피해량 비례 체력 흡수(흡혈) & 아군 체력 증대',
  },
  electric: {
    type: 'electric',
    title: '제우스의분노',
    thresholds: [3, 5],
    tier1Desc: '전기 포켓몬 공격 속도 +15%, 기본 공격 시 8% 확률로 0.5초 마비(행동 불능).',
    tier2Desc: '공격 속도 +35%, 마비 발동 확률 15%로 증가.',
    shortDesc: '공격 속도 증가 & 타격 시 마비(기절)',
  },
  ground: {
    type: 'ground',
    title: '레이지그래비티',
    thresholds: [3, 5],
    tier1Desc: '땅 포켓몬 피격 시 15% 확률로 공격한 적의 이동 및 공격 속도를 2초간 20% 감소.',
    tier2Desc: '둔화 발동 확률 30%로 증가, 공격한 적의 방어력 15 감소.',
    shortDesc: '피격 시 적 공속/이속 둔화 & 방어력 깎기',
  },
  steel: {
    type: 'steel',
    title: '불멸의방호',
    thresholds: [3, 5],
    tier1Desc: '강철 포켓몬의 방어력 및 특수방어력 +15.',
    tier2Desc: '방어력/특수방어력 +35, 받는 모든 피해 10% 감소.',
    shortDesc: '방어/특방 대폭 상승 & 받는 피해 감쇄',
  },
  fighting: {
    type: 'fighting',
    title: '맹호경파산',
    thresholds: [3, 5],
    tier1Desc: '격투 포켓몬의 물리 공격 피해가 12% 증가합니다.',
    tier2Desc: '물리 공격 피해 25% 증가 및 공격 시 대상 방어력 20% 무시.',
    shortDesc: '물리 피해 강화 & 방어력 관통',
  },
  ghost: {
    type: 'ghost',
    title: '엑소시스트',
    thresholds: [3, 5],
    tier1Desc: '고스트 포켓몬이 전투 개시 후 1.5초간 타겟팅 제외(은신), 회피율 10% 증가.',
    tier2Desc: '은신 지속 시간 2.5초로 증가, 회피율 20% 증가.',
    shortDesc: '전투 시작 시 은신 & 회피율 상승',
  },
  dark: {
    type: 'dark',
    title: '흑야의잔영',
    thresholds: [3, 5],
    tier1Desc: '적 포켓몬 처치 시, 기술 쿨다운 15% 감소 및 3초간 공/특공 +10%.',
    tier2Desc: '처치 시 쿨다운 30% 감소 및 3초간 공/특공 25% 증가.',
    shortDesc: '적 처치 시 쿨감 & 폭발적인 공/특공 버프',
  },
  normal: {
    type: 'normal',
    title: '라스트스탠드',
    thresholds: [3, 5],
    tier1Desc: '체력이 40% 이하로 떨어지면 4초간 공격 속도 20% 증가, 방어/특방 +15.',
    tier2Desc: '체력 40% 이하 시 5초간 공속 40% 증가, 방/특방 +30 및 최대 HP 15% 보호막.',
    shortDesc: '위기 시 폭주 (공속/방어/보호막)',
  },
  fairy: {
    type: 'fairy',
    title: '요정의축복',
    thresholds: [3, 5],
    tier1Desc: '아군 전체 포켓몬이 받는 특수 피해 10% 감소, 상태 이상 지속 시간 20% 감소.',
    tier2Desc: '받는 특수 피해 20% 감소, 상태 이상 지속 시간 40% 감소.',
    shortDesc: '아군 특수 피해 감쇄 & 상태이상 시간 단축',
  },
  psychic: {
    type: 'psychic',
    title: '사이킥오버로드',
    thresholds: [3, 5],
    tier1Desc: '에스퍼 포켓몬 기술(특수공격) 위력 12% 증가, 기술 사용 후 PP 15% 즉시 회복.',
    tier2Desc: '기술 위력 25% 증가 및 기술 사용 후 PP 30% 회복.',
    shortDesc: '특수 위력 증가 & 기술 사용 시 PP 환급',
  },
  poison: {
    type: 'poison',
    title: '멜트다운',
    thresholds: [3, 5],
    tier1Desc: '독 포켓몬 기술 사용 시 20% 확률로 적을 3초간 중독 (초당 최대 HP 1.2% 피해).',
    tier2Desc: '중독 확률 40% 증가, 중독된 적의 방어력과 특수방어력 15% 감소.',
    shortDesc: '기술 시전 시 중독 부여 & 중독 대상 방/특방 약화',
  },
  dragon: {
    type: 'dragon',
    title: '니벨룽겐의포효',
    thresholds: [3, 5],
    tier1Desc: '드래곤 포켓몬이 전투 개시 후 5초 동안 가하는 피해량 12% 증가.',
    tier2Desc: '피해량 증가 지속 시간 8초로 증가, 피해량 폭 25%로 상승.',
    shortDesc: '전투 초반 막강한 피해 증폭',
  },
  ice: {
    type: 'ice',
    title: '유키온나의저주',
    thresholds: [3, 5],
    tier1Desc: '얼음 포켓몬에게 피격된 적은 2초간 공격 속도가 12% 감소합니다.',
    tier2Desc: '공격 속도 감소 폭 25%로 증가, 둔화 상태인 적에게 10% 추가 특수 피해.',
    shortDesc: '적 공격 속도 둔화 & 둔화 대상 추가 타격',
  },
  bug: {
    type: 'bug',
    title: '인페스테이션',
    thresholds: [3, 5],
    tier1Desc: '벌레 포켓몬 공격 속도 12% 증가, 매 4번째 기본 공격마다 추가 물리 피해.',
    tier2Desc: '공격 속도 25% 증가, 매 3번째 기본 공격마다 강력한 추가 물리 피해.',
    shortDesc: '공속 증가 & 연타마다 추가 물리 강타',
  },
  rock: {
    type: 'rock',
    title: '천암만학',
    thresholds: [3, 5],
    tier1Desc: '바위 포켓몬이 전투 시작 시 최대 HP의 12%에 해당하는 물리 보호막 획득.',
    tier2Desc: '물리 보호막 25%로 증가, 보호막 유지 동안 방어력 +20 추가.',
    shortDesc: '전투 시작 시 물리 쉴드 & 쉴드 중 방어력 가산',
  },
  flying: {
    type: 'flying',
    title: '갓스피드',
    thresholds: [3, 5],
    tier1Desc: '비행 포켓몬의 이동 속도 25% 증가, 스피드 스탯에 따른 공속 변환 비율 15% 상승.',
    tier2Desc: '이동 속도 45% 증가, 스피드 스탯 기반 공속 변환 비율 35% 상승.',
    shortDesc: '기동성 및 스피드 스탯 효율 극대화',
  },
};
