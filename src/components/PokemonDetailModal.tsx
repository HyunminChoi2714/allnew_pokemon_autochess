import React from 'react';
import { ActivePokemon, Move } from '../types/game';
import { TYPE_COLORS, TYPE_NAMES_KO } from '../data/typeChart';
import { POKEMON_SPECIES } from '../data/pokemonData';
import { calculateAttackSpeed, calculateEffectiveStats } from '../utils/formulas';
import { X, Shield, Swords, Zap, Heart, Eye, ArrowUpRight, Sparkles, Trash2 } from 'lucide-react';

interface Props {
  pokemon: ActivePokemon | null;
  onClose: () => void;
  onSelectMove: (pokemonId: string, moveId: string) => void;
  onUnequipItem: (pokemonId: string, itemIndex: number) => void;
  onEvolveWithCord?: (pokemonId: string) => void;
  onSellPokemon?: (pokemonId: string) => void;
  isBattleActive: boolean;
}

export const PokemonDetailModal: React.FC<Props> = ({
  pokemon,
  onClose,
  onSelectMove,
  onUnequipItem,
  onEvolveWithCord,
  onSellPokemon,
  isBattleActive,
}) => {
  if (!pokemon) return null;

  const species = POKEMON_SPECIES[pokemon.speciesId] || POKEMON_SPECIES.charmander;
  const effectiveStats = calculateEffectiveStats(pokemon);
  const aspd = calculateAttackSpeed(pokemon);
  const hasLinkingCord = pokemon.items.some((i) => i.id === 'linking_cord');
  const canTradeEvolve = species.requiresTradeItem && hasLinkingCord;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-gray-900 border-2 border-yellow-500/50 rounded-2xl p-6 shadow-2xl flex flex-col text-white max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20 bg-gray-800/80 rounded-2xl flex items-center justify-center border border-gray-700 overflow-hidden p-2">
              <img
                src={species.spriteUrl}
                alt={pokemon.name}
                className="w-full h-full object-contain filter drop-shadow"
              />
              <span className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 text-[10px] rounded font-bold text-yellow-400">
                Lv.{pokemon.level}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-white">{pokemon.name}</h2>
                <span className="text-xs text-gray-400">#{species.pokedexNumber} {species.nameEn}</span>
                {pokemon.evolutionStagesTotal > 1 && (
                  <span className="text-yellow-400 font-bold text-sm">
                    {'★'.repeat(pokemon.evolutionStage)}
                  </span>
                )}
              </div>

              {/* Type Badges */}
              <div className="flex items-center gap-1.5 mt-1.5">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className="px-2.5 py-0.5 rounded-full text-xs font-bold shadow-sm"
                    style={{ backgroundColor: TYPE_COLORS[type].bg, color: TYPE_COLORS[type].text }}
                  >
                    {TYPE_NAMES_KO[type]}
                  </span>
                ))}
                <span className="ml-2 text-xs text-yellow-300 font-bold bg-yellow-900/40 border border-yellow-500/50 px-2 py-0.5 rounded">
                  가치: {pokemon.cost}원
                </span>
                {species.isLegendary && (
                  <span className="text-xs text-purple-300 font-bold bg-purple-900/50 border border-purple-500/50 px-2 py-0.5 rounded">
                    전설/환상
                  </span>
                )}
              </div>

              {/* Exp Bar */}
              <div className="mt-2 w-56">
                <div className="flex justify-between text-[10px] text-gray-400 mb-0.5">
                  <span>경험치 (EXP)</span>
                  <span>{pokemon.exp} / {pokemon.maxExp}</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cyan-400 transition-all duration-300"
                    style={{ width: `${Math.min(100, (pokemon.exp / pokemon.maxExp) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Trade Evolution Notice / Button */}
        {species.requiresTradeItem && (
          <div className="my-3 p-3 bg-indigo-950/60 border border-indigo-500/60 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔗</span>
              <div className="text-xs">
                <span className="font-bold text-indigo-300">통신교환 진화 포켓몬</span>
                <p className="text-gray-300">
                  {canTradeEvolve
                    ? '연결의끈을 소지하고 있습니다! 지금 즉시 진화시킬 수 있습니다.'
                    : '이 포켓몬은 [연결의끈] 아이템을 장착하여 최종 형태로 즉시 진화할 수 있습니다.'}
                </p>
              </div>
            </div>
            {canTradeEvolve && onEvolveWithCord && !isBattleActive && (
              <button
                onClick={() => onEvolveWithCord(pokemon.instanceId)}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg transition"
              >
                <Sparkles size={14} />
                연결의끈 진화!
              </button>
            )}
          </div>
        )}

        {/* 6 Stats Breakdown */}
        <div className="my-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
            <Shield size={14} /> 6대 전투 능력치 & 스피드 (기획 공식 반영)
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            <div className="p-2.5 bg-gray-800/80 rounded-xl border border-gray-700/60 text-center">
              <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Heart size={10} className="text-red-400" /> HP
              </div>
              <div className="text-base font-black text-red-400 mt-0.5">
                {pokemon.currentHp}/{pokemon.maxHp}
              </div>
            </div>
            <div className="p-2.5 bg-gray-800/80 rounded-xl border border-gray-700/60 text-center">
              <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Swords size={10} className="text-amber-400" /> 공격
              </div>
              <div className="text-base font-black text-amber-400 mt-0.5">
                {effectiveStats.attack}
                {pokemon.ranks.attack !== 0 && (
                  <span className="text-[10px] ml-0.5">({pokemon.ranks.attack > 0 ? `+${pokemon.ranks.attack}` : pokemon.ranks.attack})</span>
                )}
              </div>
            </div>
            <div className="p-2.5 bg-gray-800/80 rounded-xl border border-gray-700/60 text-center">
              <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Shield size={10} className="text-blue-400" /> 방어
              </div>
              <div className="text-base font-black text-blue-400 mt-0.5">
                {effectiveStats.defense}
                {pokemon.ranks.defense !== 0 && (
                  <span className="text-[10px] ml-0.5">({pokemon.ranks.defense > 0 ? `+${pokemon.ranks.defense}` : pokemon.ranks.defense})</span>
                )}
              </div>
            </div>
            <div className="p-2.5 bg-gray-800/80 rounded-xl border border-gray-700/60 text-center">
              <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Zap size={10} className="text-purple-400" /> 특수공격
              </div>
              <div className="text-base font-black text-purple-400 mt-0.5">
                {effectiveStats.spAttack}
                {pokemon.ranks.spAttack !== 0 && (
                  <span className="text-[10px] ml-0.5">({pokemon.ranks.spAttack > 0 ? `+${pokemon.ranks.spAttack}` : pokemon.ranks.spAttack})</span>
                )}
              </div>
            </div>
            <div className="p-2.5 bg-gray-800/80 rounded-xl border border-gray-700/60 text-center">
              <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Shield size={10} className="text-emerald-400" /> 특수방어
              </div>
              <div className="text-base font-black text-emerald-400 mt-0.5">
                {effectiveStats.spDefense}
                {pokemon.ranks.spDefense !== 0 && (
                  <span className="text-[10px] ml-0.5">({pokemon.ranks.spDefense > 0 ? `+${pokemon.ranks.spDefense}` : pokemon.ranks.spDefense})</span>
                )}
              </div>
            </div>
            <div className="p-2.5 bg-gray-800/80 rounded-xl border border-gray-700/60 text-center">
              <div className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                <Zap size={10} className="text-yellow-400" /> 스피드
              </div>
              <div className="text-base font-black text-yellow-400 mt-0.5">
                {effectiveStats.speed}
              </div>
              <div className="text-[9px] text-gray-400 mt-0.5">
                공속: {aspd.toFixed(2)}/s
              </div>
            </div>
          </div>
        </div>

        {/* Moves (기술 선택) */}
        <div className="my-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <Zap size={14} className="text-yellow-400" /> 라운드 사용 기술 선택 (Active Move)
            </h3>
            <span className="text-[11px] text-yellow-400/90 font-medium">
              * 이번 라운드에 집중 사용할 기술을 클릭하여 지정하세요!
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {pokemon.moves.map((move: Move) => {
              const isSelected = pokemon.selectedMoveId === move.id;
              const isStab = pokemon.types.includes(move.type);
              const remainingPp = pokemon.currentPp[move.id] ?? move.maxPp;

              return (
                <div
                  key={move.id}
                  onClick={() => !isBattleActive && onSelectMove(pokemon.instanceId, move.id)}
                  className={`relative p-3 rounded-xl border-2 transition cursor-pointer ${
                    isSelected
                      ? 'border-yellow-400 bg-yellow-950/30 shadow-lg shadow-yellow-500/10'
                      : 'border-gray-800 bg-gray-800/50 hover:border-gray-700 hover:bg-gray-800'
                  } ${isBattleActive ? 'cursor-not-allowed opacity-80' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold"
                        style={{ backgroundColor: TYPE_COLORS[move.type].bg, color: TYPE_COLORS[move.type].text }}
                      >
                        {TYPE_NAMES_KO[move.type]}
                      </span>
                      <span className="font-bold text-sm text-white">{move.name}</span>
                      <span className="text-[10px] text-gray-400">({move.nameEn})</span>
                    </div>
                    {isSelected && (
                      <span className="px-2 py-0.5 rounded bg-yellow-500 text-black text-[10px] font-black animate-pulse">
                        사용 중
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-300 mb-1">
                    <span className="font-semibold text-gray-400">
                      분류: <span className="text-white">{move.category === 'physical' ? '물리' : move.category === 'special' ? '특수' : '변화'}</span>
                    </span>
                    <span className="font-semibold text-gray-400">
                      위력: <span className="text-white">{move.power > 0 ? move.power : '-'}</span>
                    </span>
                    <span className="font-semibold text-gray-400">
                      명중: <span className="text-white">{move.accuracy}%</span>
                    </span>
                    <span className="font-semibold text-gray-400">
                      PP: <span className="text-yellow-400 font-bold">{remainingPp}/{move.maxPp}</span>
                    </span>
                  </div>

                  {isStab && (
                    <div className="text-[10px] text-green-400 font-bold mb-1 flex items-center gap-1">
                      <Sparkles size={10} /> 자속 보정(STAB): 위력 1.5배 증가!
                    </div>
                  )}

                  <p className="text-[11px] text-gray-400 leading-snug">
                    {move.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Equipped Items (도구) */}
        <div className="my-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              장착 도구 (최대 6개)
            </h3>
            <span className="text-xs text-gray-500">{pokemon.items.length} / 6</span>
          </div>

          <div className="flex flex-wrap gap-2 min-h-[48px] p-2 bg-gray-800/40 border border-gray-800 rounded-xl items-center">
            {pokemon.items.length === 0 ? (
              <span className="text-xs text-gray-500 italic pl-2">
                장착된 도구가 없습니다. 하단 도구함에서 드래그하거나 클릭하여 장착하세요.
              </span>
            ) : (
              pokemon.items.map((item, idx) => (
                <div
                  key={`${item.id}_${idx}`}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs"
                >
                  <span className="text-base">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-[11px]">{item.name}</span>
                    <span className="text-[9px] text-gray-400">{item.description}</span>
                  </div>
                  {!isBattleActive && (
                    <button
                      onClick={() => onUnequipItem(pokemon.instanceId, idx)}
                      className="ml-1 text-gray-400 hover:text-red-400 p-0.5"
                      title="장착 해제"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
          {onSellPokemon && pokemon.team === 'player' && !isBattleActive ? (
            <button
              onClick={() => {
                onSellPokemon(pokemon.instanceId);
                onClose();
              }}
              className="px-4 py-2 bg-red-900/40 hover:bg-red-800/60 border border-red-500/50 text-red-300 font-bold rounded-xl text-xs flex items-center gap-1.5 transition"
            >
              <Trash2 size={14} />
              포켓몬 판매 (+{pokemon.cost}원 환급)
            </button>
          ) : <div />}

          <button
            onClick={onClose}
            className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-black rounded-xl text-xs transition"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
