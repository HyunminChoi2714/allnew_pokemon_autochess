import React from 'react';
import { PokemonSpecies } from '../types/game';
import { TYPE_COLORS, TYPE_NAMES_KO } from '../data/typeChart';
import { TRAINER_LEVEL_XP } from '../utils/gameEngine';
import { Coins, RefreshCw, ArrowUpCircle, Lock, Unlock, Sparkles } from 'lucide-react';

interface Props {
  shopItems: (PokemonSpecies | null)[];
  gold: number;
  trainerLevel: number;
  trainerXp: number;
  deployedCount: number;
  benchCount: number;
  maxBench: number;
  winStreak: number;
  lossStreak: number;
  round: number;
  isShopLocked: boolean;
  isBattleActive: boolean;
  onBuyPokemon: (index: number) => void;
  onReroll: () => void;
  onBuyXp: () => void;
  onToggleLock: () => void;
}

export const ShopPanel: React.FC<Props> = ({
  shopItems,
  gold,
  trainerLevel,
  trainerXp,
  deployedCount,
  benchCount,
  maxBench,
  winStreak,
  lossStreak,
  round,
  isShopLocked,
  isBattleActive,
  onBuyPokemon,
  onReroll,
  onBuyXp,
  onToggleLock,
}) => {
  const xpNeeded = TRAINER_LEVEL_XP[trainerLevel] || 999;
  const interestGold = Math.min(5, Math.floor(gold / 10));

  // Streak bonus preview
  let streakBonus = 0;
  let streakText = '';
  if (winStreak >= 5) {
    streakBonus = 3;
    streakText = `🔥 ${winStreak}연승 (+3원)`;
  } else if (winStreak === 4) {
    streakBonus = 2;
    streakText = `🔥 4연승 (+2원)`;
  } else if (winStreak >= 2) {
    streakBonus = 1;
    streakText = `🔥 ${winStreak}연승 (+1원)`;
  } else if (lossStreak >= 5) {
    streakBonus = 3;
    streakText = `💧 ${lossStreak}연패 (+3원)`;
  } else if (lossStreak === 4) {
    streakBonus = 2;
    streakText = `💧 4연패 (+2원)`;
  } else if (lossStreak >= 2) {
    streakBonus = 1;
    streakText = `💧 ${lossStreak}연패 (+1원)`;
  }

  return (
    <div className="w-full bg-gray-950/95 border-t-2 border-yellow-500/40 p-3 flex flex-col gap-2 shadow-2xl backdrop-blur-md">
      {/* Top Bar: Level, Gold, XP, Streak, Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        {/* Left: Trainer Level & EXP */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-600 to-amber-400 text-black font-black flex items-center justify-center text-sm shadow">
              Lv.{trainerLevel}
            </span>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>트레이너 레벨</span>
                <span className="text-cyan-400 font-extrabold">
                  (출전 인원: {deployedCount}/{trainerLevel})
                </span>
              </div>
              {trainerLevel < 10 ? (
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                      style={{ width: `${Math.min(100, (trainerXp / xpNeeded) * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400">
                    {trainerXp} / {xpNeeded} XP
                  </span>
                </div>
              ) : (
                <span className="text-[10px] text-yellow-400 font-bold">최대 레벨 도달 (MAX)</span>
              )}
            </div>
          </div>

          {/* Buy XP Button */}
          {trainerLevel < 10 && (
            <button
              onClick={onBuyXp}
              disabled={gold < 4}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                gold >= 4
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 active:scale-95'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ArrowUpCircle size={14} />
              경험치 구매 (4원: +4XP)
            </button>
          )}
        </div>

        {/* Center: Gold & Economy Status */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-950/60 border border-yellow-500/50 rounded-xl">
            <Coins size={18} className="text-yellow-400 animate-pulse" />
            <span className="text-lg font-black text-yellow-300">{gold}원</span>
            <span className="text-[11px] text-yellow-400/80 font-semibold border-l border-yellow-500/40 pl-2">
              이자: +{interestGold}원
            </span>
          </div>

          {streakText && (
            <span className="text-xs font-bold text-orange-300 bg-orange-950/50 border border-orange-500/40 px-2.5 py-1 rounded-lg">
              {streakText}
            </span>
          )}

          <div className="text-[11px] text-gray-400 hidden md:block">
            벤치: <span className="text-white font-bold">{benchCount}/{maxBench}</span>
          </div>
        </div>

        {/* Right: Reroll & Lock buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleLock}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition border ${
              isShopLocked
                ? 'bg-amber-950 border-amber-500 text-amber-300'
                : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {isShopLocked ? <Lock size={14} /> : <Unlock size={14} />}
            {isShopLocked ? '상점 잠금됨' : '상점 잠금'}
          </button>

          <button
            onClick={onReroll}
            disabled={gold < 2}
            className={`px-4 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 transition ${
              gold >= 2
                ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-950 shadow-md shadow-yellow-500/30 active:scale-95'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            <RefreshCw size={14} />
            새로고침 (2원)
          </button>
        </div>
      </div>

      {/* 5 Shop Slots */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 pt-1">
        {shopItems.map((species, idx) => {
          if (!species) {
            return (
              <div
                key={`empty_${idx}`}
                className="h-20 sm:h-28 bg-gray-900/60 border border-gray-800/80 rounded-xl sm:rounded-2xl flex items-center justify-center text-[10px] sm:text-xs text-gray-600 italic"
              >
                구매 완료
              </div>
            );
          }

          const canAfford = gold >= species.cost;
          const canBuy = canAfford && benchCount < maxBench;
          const isLegendary = species.isLegendary;

          // Border color by cost tier
          let borderColor = 'border-gray-700 hover:border-gray-500';
          let costBadgeColor = 'bg-gray-700 text-white';
          if (species.cost === 1) {
            borderColor = 'border-gray-700 hover:border-gray-400 bg-gray-900/80';
            costBadgeColor = 'bg-gray-600 text-gray-200';
          } else if (species.cost === 2) {
            borderColor = 'border-emerald-700/80 hover:border-emerald-500 bg-emerald-950/20';
            costBadgeColor = 'bg-emerald-600 text-white';
          } else if (species.cost === 3) {
            borderColor = 'border-blue-700/80 hover:border-blue-500 bg-blue-950/20';
            costBadgeColor = 'bg-blue-600 text-white';
          } else if (isLegendary) {
            borderColor = 'border-purple-500 hover:border-purple-400 bg-purple-950/30 shadow-lg shadow-purple-500/20';
            costBadgeColor = 'bg-gradient-to-r from-purple-600 to-pink-600 text-white';
          }

          return (
            <div
              key={`shop_${species.id}_${idx}`}
              data-shop-index={idx}
              onClick={() => canBuy && onBuyPokemon(idx)}
              className={`relative h-20 sm:h-28 p-1 sm:p-2 rounded-xl sm:rounded-2xl border-2 transition-all flex flex-col justify-between select-none ${borderColor} ${
                canBuy
                  ? 'cursor-pointer hover:-translate-y-0.5 hover:shadow-xl'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {/* Cost Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-black text-[10px] sm:text-sm text-white tracking-tight truncate max-w-[45px] sm:max-w-none">
                      {species.name}
                    </span>
                    {isLegendary && (
                      <Sparkles size={11} className="text-yellow-400 animate-pulse hidden sm:inline" />
                    )}
                  </div>
                  <div className="hidden sm:flex items-center gap-1 mt-0.5">
                    {species.types.map((type) => (
                      <span
                        key={type}
                        className="px-1.5 py-0.2 rounded text-[8px] sm:text-[9px] font-bold"
                        style={{ backgroundColor: TYPE_COLORS[type].bg, color: TYPE_COLORS[type].text }}
                      >
                        {TYPE_NAMES_KO[type]}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`px-1 sm:px-2 py-0.5 rounded-lg text-[9px] sm:text-xs font-black flex items-center gap-0.5 shadow ${costBadgeColor}`}
                >
                  <Coins size={10} />
                  {species.cost}원
                </div>
              </div>

              {/* Sprite Thumbnail */}
              <div className="flex items-center justify-center flex-1 my-0.5">
                <img
                  src={species.spriteUrl}
                  alt={species.name}
                  className="h-8 sm:h-12 md:h-14 max-w-full object-contain filter drop-shadow pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Sub-label */}
              <div className="flex items-center justify-between text-[7px] sm:text-[10px] text-gray-400">
                <span>{species.evolutionStagesTotal === 3 ? '3단진화' : species.evolutionStagesTotal === 2 ? '2단진화' : '단일종'}</span>
                {species.requiresTradeItem && (
                  <span className="text-indigo-400 font-semibold hidden sm:inline">통신교환</span>
                )}
                {!canAfford && <span className="text-red-400 font-bold">부족</span>}
                {canAfford && benchCount >= maxBench && (
                  <span className="text-red-400 font-bold">가득참</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
