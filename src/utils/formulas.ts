import { ActivePokemon, Move, PokemonType, StatRanks } from '../types/game';
import { getTypeMultiplier } from '../data/typeChart';

/**
 * Rank multiplier for attack, defense, spAttack, spDefense, speed
 * +1 -> 150%, +2 -> 200%, +3 -> 250%, +4 -> 300%, +5 -> 350%, +6 -> 400%
 * -1 -> 67%, -2 -> 50%, -3 -> 40%, -4 -> 34%, -5 -> 29%, -6 -> 25%
 */
export function getRankMultiplier(rank: number): number {
  const clamped = Math.max(-6, Math.min(6, rank));
  if (clamped >= 0) {
    return (2 + clamped) / 2;
  } else {
    return 2 / (2 + Math.abs(clamped));
  }
}

/**
 * Accuracy and Evasion rank multiplier
 */
export function getAccuracyRankMultiplier(accRank: number, evaRank: number): number {
  const netRank = Math.max(-6, Math.min(6, accRank - evaRank));
  if (netRank >= 0) {
    return (3 + netRank) / 3;
  } else {
    return 3 / (3 + Math.abs(netRank));
  }
}

/**
 * Calculate effective stats for a pokemon at its current level and ranks
 */
export function calculateEffectiveStats(poke: ActivePokemon) {
  const lvlRatio = 1 + (poke.level - 1) * 0.04;
  
  // Base scaling
  let atk = poke.stats.attack * lvlRatio * getRankMultiplier(poke.ranks.attack);
  let def = poke.stats.defense * lvlRatio * getRankMultiplier(poke.ranks.defense);
  let spA = poke.stats.spAttack * lvlRatio * getRankMultiplier(poke.ranks.spAttack);
  let spD = poke.stats.spDefense * lvlRatio * getRankMultiplier(poke.ranks.spDefense);
  let spe = poke.stats.speed * lvlRatio * getRankMultiplier(poke.ranks.speed);

  // Item multipliers
  for (const item of poke.items) {
    if (item.id === 'eviolite' && poke.evolutionStage < poke.evolutionStagesTotal) {
      def *= 1.5;
      spD *= 1.5;
    }
    if (item.id === 'assault_vest') {
      spD *= 1.5;
    }
    if (item.id === 'light_ball' && poke.speciesId === 'pikachu') {
      atk *= 2.0;
      spA *= 2.0;
    }
    if (item.id === 'thick_club' && (poke.speciesId === 'cubone' || poke.speciesId === 'marowak')) {
      atk *= 2.0;
    }
  }

  // Mega evolution buff
  if (poke.isMega) {
    atk *= 1.25;
    spA *= 1.25;
    def *= 1.2;
    spD *= 1.2;
    spe *= 1.15;
  }

  // Paralysis halves speed
  if (poke.status === 'paralysis') {
    spe *= 0.5;
  }

  return {
    attack: Math.round(atk),
    defense: Math.round(def),
    spAttack: Math.round(spA),
    spDefense: Math.round(spD),
    speed: Math.round(spe),
  };
}

/**
 * Attacks per second = 0.5 + (Speed / 100)
 */
export function calculateAttackSpeed(poke: ActivePokemon, flyingSpeedBonusPercent: number = 0, electricBonusPercent: number = 0): number {
  const stats = calculateEffectiveStats(poke);
  // Flying synergy: speed stat conversion ratio bonus
  const speedRatio = (100 + flyingSpeedBonusPercent) / 100;
  let baseAspd = 0.5 + (stats.speed * speedRatio) / 100;
  
  // Electric synergy bonus
  if (electricBonusPercent > 0) {
    baseAspd *= (1 + electricBonusPercent / 100);
  }

  return Math.max(0.2, Math.min(4.0, baseAspd));
}

export interface DamageCalculationResult {
  damage: number;
  typeMultiplier: number;
  isStab: boolean;
  isCritical: boolean;
  isMiss: boolean;
  rawPower: number;
  drainAmount: number;
  recoilAmount: number;
  statusApplied?: 'burn' | 'paralysis' | 'poison' | 'toxic' | 'sleep' | 'freeze';
  statChangesApplied?: { stat: string; stages: number; target: 'self' | 'opponent' }[];
}

/**
 * Exact damage formula from PDF Page 1:
 * (실제 피해량) = (기술 위력) X 100 / (100 + 피격자 방어력) X (타입 상성) X (자속 보정)
 */
export function calculateDamage(
  attacker: ActivePokemon,
  defender: ActivePokemon,
  move: Move,
  options?: {
    synergyBonus?: {
      fireAtkPercent?: number;
      fightingDmgPercent?: number;
      fightingArmorIgnorePercent?: number;
      fairyDamageReductionPercent?: number;
      steelDamageReductionPercent?: number;
      psychicPowerPercent?: number;
      dragonDamagePercent?: number;
      iceBonusSpecialPercent?: number;
      grassLifestealPercent?: number;
    };
    isDragonActive?: boolean;
    isTargetSlowed?: boolean;
    combatTime?: number;
  }
): DamageCalculationResult {
  const syn = options?.synergyBonus || {};
  
  // Check accuracy
  const accMultiplier = getAccuracyRankMultiplier(attacker.ranks.accuracy, defender.ranks.evasion);
  const effectiveAccuracy = move.accuracy * accMultiplier;
  const hitRoll = Math.random() * 100;
  if (move.accuracy > 0 && hitRoll > effectiveAccuracy) {
    return {
      damage: 0,
      typeMultiplier: 1,
      isStab: false,
      isCritical: false,
      isMiss: true,
      rawPower: move.power,
      drainAmount: 0,
      recoilAmount: 0,
    };
  }

  // Status move (non damaging)
  if (move.category === 'status' || move.power === 0) {
    return {
      damage: 0,
      typeMultiplier: 1,
      isStab: false,
      isCritical: false,
      isMiss: false,
      rawPower: 0,
      drainAmount: 0,
      recoilAmount: 0,
      statusApplied: move.effect?.status,
      statChangesApplied: move.effect?.statChanges,
    };
  }

  const attackerStats = calculateEffectiveStats(attacker);
  const defenderStats = calculateEffectiveStats(defender);

  // Offensive Stat & Defensive Stat
  let offensiveStat = move.category === 'physical' ? attackerStats.attack : attackerStats.spAttack;
  let targetDefense = move.category === 'physical' ? defenderStats.defense : defenderStats.spDefense;

  // Fighting synergy: ignore % of target armor
  if (syn.fightingArmorIgnorePercent && syn.fightingArmorIgnorePercent > 0 && move.category === 'physical') {
    targetDefense *= (1 - syn.fightingArmorIgnorePercent / 100);
  }

  // Fire synergy bonus to Attack / SpAttack
  if (syn.fireAtkPercent && attacker.types.includes('fire')) {
    offensiveStat *= (1 + syn.fireAtkPercent / 100);
  }

  // Burn reduces physical power by 50%
  let burnPenalty = 1.0;
  if (attacker.status === 'burn' && move.category === 'physical') {
    burnPenalty = 0.5;
  }

  // STAB (자속 보정): 1.5x if same type
  const isStab = attacker.types.includes(move.type);
  const stabMultiplier = isStab ? 1.5 : 1.0;

  // Type Matchup (0x, 0.5x, 1x, 2x, 4x)
  const typeMultiplier = getTypeMultiplier(move.type, defender.types);
  if (typeMultiplier === 0) {
    return {
      damage: 0,
      typeMultiplier: 0,
      isStab,
      isCritical: false,
      isMiss: false,
      rawPower: move.power,
      drainAmount: 0,
      recoilAmount: 0,
    };
  }

  // Critical hit check (base ~6.25%, +1 stage with Scope Lens ~12.5%, +2 stage ~50%)
  let critRate = 0.0625;
  if (attacker.items.some((i) => i.id === 'scope_lens')) {
    critRate = 0.125;
  }
  const isCritical = Math.random() < critRate;
  const critMultiplier = isCritical ? 1.5 : 1.0;

  // Base Damage Formula from PDF:
  // (실제 피해량) = (기술 위력) X 100 / (100 + 피격자 방어력) X (타입 상성) X (자속 보정)
  // Scaling with offensive stat / 50 for realistic RPG numbers
  const statFactor = offensiveStat / 70;
  let baseDamage = (move.power * statFactor * 100) / (100 + targetDefense);
  
  let totalDamage = baseDamage * typeMultiplier * stabMultiplier * critMultiplier * burnPenalty;

  // Item multipliers
  for (const item of attacker.items) {
    if (item.id === 'life_orb') {
      totalDamage *= 1.3;
    }
    if (item.id === 'expert_belt' && typeMultiplier > 1.0) {
      totalDamage *= 1.2;
    }
    if (item.typeBoost && item.typeBoost === move.type) {
      totalDamage *= 1.2;
    }
  }

  // Synergy bonuses
  if (syn.fightingDmgPercent && move.category === 'physical' && attacker.types.includes('fighting')) {
    totalDamage *= (1 + syn.fightingDmgPercent / 100);
  }
  if (syn.psychicPowerPercent && move.category === 'special' && attacker.types.includes('psychic')) {
    totalDamage *= (1 + syn.psychicPowerPercent / 100);
  }
  if (syn.dragonDamagePercent && options?.isDragonActive && attacker.types.includes('dragon')) {
    totalDamage *= (1 + syn.dragonDamagePercent / 100);
  }
  if (syn.iceBonusSpecialPercent && options?.isTargetSlowed && move.category === 'special') {
    totalDamage *= (1 + syn.iceBonusSpecialPercent / 100);
  }

  // Defensive Synergies on Defender
  if (syn.fairyDamageReductionPercent && move.category === 'special') {
    totalDamage *= (1 - syn.fairyDamageReductionPercent / 100);
  }
  if (syn.steelDamageReductionPercent && defender.types.includes('steel')) {
    totalDamage *= (1 - syn.steelDamageReductionPercent / 100);
  }

  const finalDamage = Math.max(1, Math.round(totalDamage));

  // Life Orb Recoil: 10% max HP
  let recoilAmount = 0;
  if (attacker.items.some((i) => i.id === 'life_orb')) {
    recoilAmount = Math.round(attacker.maxHp * 0.1);
  }
  if (move.id === 'struggle') {
    recoilAmount = Math.round(attacker.maxHp * 0.25);
  }

  // Drain & Lifesteal
  let drainAmount = 0;
  if (move.effect?.drainPercent) {
    drainAmount += Math.round(finalDamage * (move.effect.drainPercent / 100));
  }
  if (attacker.items.some((i) => i.id === 'shell_bell')) {
    drainAmount += Math.round(finalDamage / 8);
  }
  if (syn.grassLifestealPercent && attacker.types.includes('grass')) {
    drainAmount += Math.round(finalDamage * (syn.grassLifestealPercent / 100));
  }

  // Move status effect
  let statusApplied = undefined;
  if (move.effect?.status && move.effect?.statusChance) {
    if (Math.random() * 100 <= move.effect.statusChance) {
      statusApplied = move.effect.status;
    }
  }

  return {
    damage: finalDamage,
    typeMultiplier,
    isStab,
    isCritical,
    isMiss: false,
    rawPower: move.power,
    drainAmount,
    recoilAmount,
    statusApplied,
    statChangesApplied: move.effect?.statChanges,
  };
}

/**
 * EXP reward formula normalized to the game's internal XP scale.
 * The level-up curve starts at 150 XP, so the source formula's 100x
 * display multiplier must not be applied to in-game XP.
 */
export function calculateExpGained(
  baseExp: number,
  opponentLevel: number,
  selfLevel: number,
  participatedInBattle: boolean,
  hasLuckyEgg: boolean
): number {
  const distributionFactor = participatedInBattle ? 1 : 2;
  const extraBonus = hasLuckyEgg ? 1.5 : 1.0;

  const part1 = (baseExp * opponentLevel) / (5 * distributionFactor);
  const ratio = (2 * opponentLevel + 10) / (opponentLevel + selfLevel + 10);
  const part2 = Math.pow(ratio, 2.5) + 1;

  const exp = part1 * part2 * extraBonus;
  return Math.max(10, Math.round(exp));
}

/**
 * Experience needed for level N (scaled for Auto Chess flow)
 */
export function getRequiredExpForLevel(level: number): number {
  if (level >= 100) return Infinity;
  // Scaled progressive curve
  return Math.round(150 * Math.pow(level, 1.4));
}
