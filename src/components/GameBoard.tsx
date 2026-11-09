import React, { useState, useEffect } from 'react';
import { ActivePokemon, BoardTile, CombatFloatingText, GamePhase } from '../types/game';
import { TYPE_COLORS, TYPE_NAMES_KO } from '../data/typeChart';
import { POKEMON_SPECIES } from '../data/pokemonData';
import { Heart, Shield, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  board: BoardTile[][]; // 8 rows x 7 cols
  bench: (ActivePokemon | null)[]; // 9 slots
  phase: GamePhase;
  selectedUnit: { source: 'bench' | 'board'; index?: number; r?: number; c?: number } | null;
  floatingTexts: CombatFloatingText[];
  onSelectUnit: (unit: { source: 'bench' | 'board'; index?: number; r?: number; c?: number } | null) => void;
  onTileClick: (r: number, c: number) => void;
  onBenchClick: (index: number) => void;
  onInspectUnit: (pokemon: ActivePokemon) => void;
}

export const GameBoard: React.FC<Props> = ({
  board,
  bench,
  phase,
  selectedUnit,
  floatingTexts,
  onSelectUnit,
  onTileClick,
  onBenchClick,
  onInspectUnit,
}) => {
  const isBattle = phase === 'battle';
  const [now, setNow] = useState<number>(Date.now());

  // High-frequency animation ticker during battle for ultra-smooth physical recoil & hit impact
  useEffect(() => {
    if (!isBattle) return;
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 30);
    return () => clearInterval(interval);
  }, [isBattle]);

  // Collect all active units placed on the board
  const boardUnits: ActivePokemon[] = [];
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 7; c++) {
      const p = board[r][c];
      if (p) {
        boardUnits.push(p);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-1 sm:p-2 select-none w-full">
      {/* 7x8 Arena Grid Container */}
      <div className="relative p-1.5 sm:p-3 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-2 border-yellow-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        {/* Arena Dividing Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent -translate-y-1/2 pointer-events-none z-10 flex items-center justify-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-950 border-2 border-red-500 flex items-center justify-center shadow-lg">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow" />
          </div>
        </div>

        {/* Floating Combat Texts Layer */}
        <div className="absolute inset-0 pointer-events-none z-40">
          <AnimatePresence>
            {floatingTexts.map((ft) => {
              const leftPercent = ((ft.col + 0.5) / 7) * 100;
              const topPercent = ((ft.row + 0.5) / 8) * 100;

              let textColor = 'text-white font-black text-[10px] sm:text-xs';
              if (ft.type === 'crit') textColor = 'text-yellow-300 font-black text-xs sm:text-sm scale-125';
              else if (ft.type === 'super') textColor = 'text-red-400 font-black text-[11px] sm:text-xs scale-110';
              else if (ft.type === 'not_effective') textColor = 'text-blue-300 font-bold text-[9px] sm:text-[10px]';
              else if (ft.type === 'miss') textColor = 'text-gray-400 font-bold text-[10px] sm:text-xs';
              else if (ft.type === 'heal') textColor = 'text-emerald-400 font-black text-[10px] sm:text-xs';
              else if (ft.type === 'status') textColor = 'text-purple-300 font-bold text-[10px] sm:text-xs';
              else if (ft.type === 'rank') textColor = 'text-cyan-300 font-bold text-[10px] sm:text-[11px]';

              return (
                <motion.div
                  key={ft.id}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: -26, scale: 1.15 }}
                  exit={{ opacity: 0, y: -42 }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                  style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] whitespace-nowrap ${textColor}`}
                >
                  {ft.text}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 1. Underlying 8 Rows x 7 Columns Static Grid */}
        <div className="grid grid-rows-8 gap-1 sm:gap-1.5 relative">
          {board.map((row, r) => {
            const isEnemyRow = r < 4;
            const isPlayerRow = r >= 4;

            return (
              <div key={`row_${r}`} className="grid grid-cols-7 gap-1 sm:gap-1.5">
                {row.map((_, c) => {
                  const isSelected =
                    selectedUnit?.source === 'board' &&
                    selectedUnit.r === r &&
                    selectedUnit.c === c;

                  const isValidPlayerDrop =
                    !isBattle &&
                    isPlayerRow &&
                    selectedUnit !== null &&
                    !(selectedUnit.source === 'board' && selectedUnit.r === r && selectedUnit.c === c);

                  let tileBg = isEnemyRow
                    ? (r + c) % 2 === 0 ? 'bg-red-950/20' : 'bg-red-900/10'
                    : (r + c) % 2 === 0 ? 'bg-blue-950/20' : 'bg-blue-900/10';

                  if (isSelected) {
                    tileBg = 'bg-yellow-500/30 border-yellow-400 ring-2 ring-yellow-400';
                  } else if (isValidPlayerDrop) {
                    tileBg += ' hover:bg-emerald-500/20 hover:border-emerald-400/80 cursor-pointer';
                  }

                  return (
                    <div
                      key={`tile_${r}_${c}`}
                      data-tile={`${r}-${c}`}
                      onClick={() => onTileClick(r, c)}
                      className={`relative w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[4.15rem] lg:h-[4.15rem] rounded-lg sm:rounded-xl border border-gray-800/80 flex flex-col items-center justify-center transition-colors overflow-hidden ${tileBg}`}
                    >
                      {/* Tile Coordinate */}
                      <span className="absolute top-0.5 left-1 text-[7px] sm:text-[8px] text-gray-700 pointer-events-none">
                        {r < 4 ? `E${r},${c}` : `P${r - 4},${c}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* 2. Framer Motion Animated Units Overlay Layer */}
        <div className="absolute inset-3 pointer-events-none z-20">
          <AnimatePresence>
            {boardUnits.map((pokemon) => {
              const isSelected =
                selectedUnit?.source === 'board' &&
                selectedUnit.r === pokemon.row &&
                selectedUnit.c === pokemon.col;

              const isFainted = pokemon.currentHp <= 0;

              // === Highly Dynamic Attack Recoil / Lunge Animation ===
              let attackOffsetX = 0;
              let attackOffsetY = 0;
              let attackScale = 1;
              let attackRotate = 0;

              if (pokemon.attackAnim && now - pokemon.attackAnim.time < 280) {
                const elapsed = (now - pokemon.attackAnim.time) / 280;
                // Lunging wave: fast snap forward (0..0.4), punch hold, then spring back
                const lungeProgress = Math.sin(elapsed * Math.PI);
                const dCol = pokemon.attackAnim.targetCol - pokemon.col;
                const dRow = pokemon.attackAnim.targetRow - pokemon.row;

                if (pokemon.range === 1) {
                  // Melee explosive strike: thrusts 35px into enemy face!
                  attackOffsetX = dCol * 35 * lungeProgress;
                  attackOffsetY = dRow * 35 * lungeProgress;
                  attackScale = 1 + 0.35 * lungeProgress;
                  attackRotate = dCol * 16 * lungeProgress;
                } else {
                  // Ranged cast recoil: pulls back first, then power hops forward
                  const recoilProgress = elapsed < 0.3 ? -Math.sin(elapsed * Math.PI / 0.3) : Math.sin((elapsed - 0.3) * Math.PI / 0.7);
                  attackOffsetY = -18 * lungeProgress;
                  attackOffsetX = dCol * 12 * recoilProgress;
                  attackScale = 1 + 0.3 * lungeProgress;
                  attackRotate = (dCol || 1) * 8 * lungeProgress;
                }
              }

              // === Highly Dynamic Hit Shake & Impact Flashing ===
              let hitOffsetX = 0;
              let hitOffsetY = 0;
              let hitRotate = 0;
              let hitScale = 1;
              let isHitFlashing = false;

              if (pokemon.hitAnim && now - pokemon.hitAnim < 260) {
                const hitProgress = (now - pokemon.hitAnim) / 260;
                const decay = 1 - hitProgress;
                // High-frequency decaying shake
                hitOffsetX = Math.sin(hitProgress * Math.PI * 8) * decay * 14;
                hitOffsetY = Math.cos(hitProgress * Math.PI * 8) * decay * 8;
                hitRotate = Math.sin(hitProgress * Math.PI * 8) * decay * 15;
                hitScale = 1 - Math.sin(hitProgress * Math.PI) * 0.2; // Impact compression
                isHitFlashing = true;
              }

              return (
                <motion.div
                  key={pokemon.instanceId}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{
                    left: `${(pokemon.col / 7) * 100}%`,
                    top: `${(pokemon.row / 8) * 100}%`,
                    scale: isFainted ? 0.8 : attackScale * hitScale,
                    opacity: pokemon.isStealthed ? 0.35 : isFainted ? 0.38 : 1,
                    x: attackOffsetX + hitOffsetX,
                    y: (isFainted ? 8 : 0) + attackOffsetY + hitOffsetY,
                    rotate: isFainted ? (pokemon.team === 'player' ? -35 : 35) : attackRotate + hitRotate,
                  }}
                  transition={{
                    left: { type: 'spring', stiffness: 260, damping: 24 },
                    top: { type: 'spring', stiffness: 260, damping: 24 },
                    x: { duration: 0.06, ease: 'easeOut' },
                    y: { duration: 0.06, ease: 'easeOut' },
                    rotate: { duration: 0.08, ease: 'easeOut' },
                    scale: { duration: 0.12 },
                    opacity: { duration: 0.2 },
                  }}
                  style={{
                    position: 'absolute',
                    width: `${100 / 7}%`,
                    height: `${100 / 8}%`,
                    padding: '2px',
                  }}
                  className="pointer-events-auto cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isBattle) {
                      if (pokemon.team === 'player') {
                        if (isSelected) {
                          onInspectUnit(pokemon);
                        } else {
                          onTileClick(pokemon.row, pokemon.col);
                        }
                      } else {
                        onInspectUnit(pokemon);
                      }
                    } else {
                      onInspectUnit(pokemon);
                    }
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    onInspectUnit(pokemon);
                  }}
                >
                  <div
                    className={`relative w-full h-full rounded-xl flex flex-col items-center justify-center p-1 transition-all ${
                      isSelected ? 'ring-2 ring-yellow-400 bg-yellow-500/20' : ''
                    } ${isHitFlashing ? 'bg-red-600/50 shadow-lg shadow-red-500/50' : ''}`}
                  >
                    {/* Top Badges: Level & Stars */}
                    <div className="absolute top-0.5 inset-x-1 flex items-center justify-between pointer-events-none z-10">
                      <span className="px-1 py-0.2 rounded bg-black/85 text-[8px] font-black text-yellow-300">
                        Lv.{pokemon.level}
                      </span>
                      {pokemon.evolutionStagesTotal > 1 && (
                        <span className="text-[9px] font-black text-amber-400 leading-none">
                          {'★'.repeat(pokemon.evolutionStage)}
                        </span>
                      )}
                    </div>

                    {/* Fainted Status Overlay Badge */}
                    {isFainted && (
                      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/50 rounded-xl pointer-events-none">
                        <span className="text-sm animate-pulse">💫</span>
                        <span className="text-[8px] font-black text-red-300 px-1 py-0.2 bg-red-950/80 rounded border border-red-500/60 shadow">
                          기절 (다음 턴 부활)
                        </span>
                      </div>
                    )}

                    {/* Animated Sprite with punchy attack & hit lighting */}
                    <div className="relative flex-1 flex items-center justify-center w-full mt-1">
                      <motion.img
                        src={POKEMON_SPECIES[pokemon.speciesId]?.spriteUrl || undefined}
                        alt={pokemon.name}
                        animate={{
                          filter: isFainted
                            ? 'grayscale(1) brightness(0.6)'
                            : isHitFlashing
                            ? 'brightness(2.2) contrast(1.5)'
                            : pokemon.attackAnim && now - pokemon.attackAnim.time < 240
                            ? 'brightness(1.4) contrast(1.2)'
                            : 'brightness(1) contrast(1)',
                        }}
                        className={`max-h-8 sm:max-h-11 md:max-h-13 max-w-full object-contain filter drop-shadow ${
                          pokemon.team === 'enemy' ? '' : 'transform scale-x-[-1]'
                        }`}
                        loading="lazy"
                      />
                      {/* Mega Glow */}
                      {pokemon.isMega && (
                        <span className="absolute -top-1 right-0 text-xs animate-spin">✨</span>
                      )}
                    </div>

                    {/* Status Icon */}
                    {pokemon.status && !isFainted && (
                      <span className="absolute left-1 top-4 text-xs z-20">
                        {pokemon.status === 'burn' && '🔥'}
                        {pokemon.status === 'paralysis' && '⚡'}
                        {pokemon.status === 'poison' && '☠️'}
                        {pokemon.status === 'toxic' && '☣️'}
                        {pokemon.status === 'freeze' && '❄️'}
                        {pokemon.status === 'sleep' && '💤'}
                      </span>
                    )}

                    {/* HP & Shield Bar */}
                    <div className="w-full mt-0.5 z-10 pointer-events-none">
                      <div className="w-full h-1.5 bg-gray-950 rounded-full overflow-hidden border border-gray-700/80 relative">
                        <motion.div
                          className={`h-full ${
                            pokemon.team === 'player'
                              ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                              : 'bg-gradient-to-r from-red-600 to-rose-400'
                          }`}
                          animate={{
                            width: `${Math.max(0, (pokemon.currentHp / pokemon.maxHp) * 100)}%`,
                          }}
                          transition={{ duration: 0.15 }}
                        />
                        {pokemon.shield > 0 && (
                          <div
                            className="absolute top-0 right-0 h-full bg-cyan-400 opacity-80"
                            style={{ width: `${Math.min(100, (pokemon.shield / pokemon.maxHp) * 100)}%` }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Name & Item count */}
                    <div className="flex items-center justify-between w-full text-[8px] font-bold text-gray-200 px-0.5 truncate pointer-events-none">
                      <span className="truncate">{pokemon.name}</span>
                      {pokemon.items.length > 0 && (
                        <span className="text-[8px] text-yellow-300 font-bold ml-0.5">
                          •{pokemon.items.length}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* 9-Slot Bench Tray */}
      <div className="mt-2 sm:mt-3 w-full max-w-2xl bg-gray-950/90 border border-gray-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2.5 shadow-xl flex flex-col gap-1 sm:gap-1.5 backdrop-blur-md">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] sm:text-xs font-black text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            포켓몬 벤치 (최대 9칸)
          </span>
          <span className="text-[9px] sm:text-[10px] text-gray-500">
            * 우클릭으로 기술 & 정보 확인
          </span>
        </div>

        <div className="grid grid-cols-9 gap-1 sm:gap-1.5">
          {bench.map((pokemon, idx) => {
            const isSelected = selectedUnit?.source === 'bench' && selectedUnit.index === idx;

            return (
              <motion.div
                key={`bench_${idx}`}
                data-bench-index={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onBenchClick(idx)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  if (pokemon) onInspectUnit(pokemon);
                }}
                className={`relative h-12 sm:h-16 md:h-18 rounded-lg sm:rounded-xl border-2 transition-colors flex flex-col items-center justify-center overflow-hidden ${
                  isSelected
                    ? 'border-yellow-400 bg-yellow-950/40 ring-2 ring-yellow-400'
                    : 'border-gray-800 bg-gray-900/60 hover:border-gray-700 hover:bg-gray-800/80 cursor-pointer'
                }`}
              >
                <span className="absolute top-0.5 left-1 text-[7px] sm:text-[8px] text-gray-600 pointer-events-none">
                  {idx + 1}
                </span>

                {pokemon ? (
                  <div className="relative w-full h-full flex flex-col items-center justify-between p-0.5 sm:p-1">
                    {/* Stars */}
                    {pokemon.evolutionStagesTotal > 1 && (
                      <span className="absolute top-0.5 right-1 text-[7px] sm:text-[8px] font-black text-amber-400">
                        {'★'.repeat(pokemon.evolutionStage)}
                      </span>
                    )}

                    <div className="flex-1 flex items-center justify-center w-full">
                      <img
                        src={POKEMON_SPECIES[pokemon.speciesId]?.spriteUrl || undefined}
                        alt={pokemon.name}
                        className="max-h-7 sm:max-h-9 md:max-h-11 max-w-full object-contain filter drop-shadow pointer-events-none"
                        loading="lazy"
                      />
                    </div>

                    <div className="w-full flex items-center justify-between text-[7px] sm:text-[8px] text-gray-300 font-bold px-0.5 truncate pointer-events-none">
                      <span className="truncate">{pokemon.name}</span>
                      <span className="text-yellow-400 hidden sm:inline">Lv.{pokemon.level}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-dashed border-gray-700 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
