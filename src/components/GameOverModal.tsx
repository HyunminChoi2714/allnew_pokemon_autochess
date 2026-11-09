import React from 'react';
import { ActivePokemon } from '../types/game';
import { POKEMON_SPECIES } from '../data/pokemonData';
import { Trophy, Skull, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  isVictory: boolean;
  round: number;
  playerTeam: ActivePokemon[];
  onRestart: () => void;
}

export const GameOverModal: React.FC<Props> = ({
  isOpen,
  isVictory,
  round,
  playerTeam,
  onRestart,
}) => {
  React.useEffect(() => {
    if (isOpen && isVictory) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  }, [isOpen, isVictory]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
      <div className="relative w-full max-w-xl bg-gray-900 border-2 border-yellow-500/80 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center text-white overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
          {isVictory ? (
            <div className="w-16 h-16 bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl flex items-center justify-center">
              <Trophy size={36} className="text-yellow-400 animate-bounce" />
            </div>
          ) : (
            <div className="w-16 h-16 bg-red-950/60 border-2 border-red-500 rounded-2xl flex items-center justify-center">
              <Skull size={36} className="text-red-500" />
            </div>
          )}
        </div>

        <h2 className="text-2xl font-black text-white">
          {isVictory ? '🎉 포켓몬 리그 챔피언 등극!' : '💀 눈앞이 캄캄해졌다...'}
        </h2>
        <p className="text-xs text-gray-400 mt-1">
          {isVictory
            ? '모든 체육관 관장과 사천왕, 초대 챔피언을 꺾고 정점에 섰습니다!'
            : `라운드 ${round}에서 패배하였습니다. 다음 번엔 더욱 강력한 시너지로 도전해보세요!`}
        </p>

        {/* Final Team Showcase */}
        <div className="my-5 w-full bg-gray-950/60 border border-gray-800 rounded-2xl p-3">
          <div className="text-xs font-bold text-gray-400 mb-2 flex items-center justify-center gap-1">
            <Award size={14} className="text-yellow-400" />
            최종 출전 엔트리 ({playerTeam.length}마리)
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {playerTeam.length === 0 ? (
              <span className="text-xs text-gray-500">배치된 포켓몬 없음</span>
            ) : (
              playerTeam.map((p, idx) => (
                <div
                  key={`${p.instanceId}_${idx}`}
                  className="flex flex-col items-center p-2 bg-gray-900 border border-gray-800 rounded-xl w-20 text-center"
                >
                  <img
                    src={POKEMON_SPECIES[p.speciesId]?.spriteUrl || undefined}
                    alt={p.name}
                    className="h-10 object-contain filter drop-shadow"
                  />
                  <span className="text-[10px] font-bold text-white truncate max-w-full mt-1">
                    {p.name}
                  </span>
                  <span className="text-[9px] text-yellow-400 font-semibold">Lv.{p.level}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onRestart}
          className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-gray-950 font-black rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-yellow-500/30 transition active:scale-95"
        >
          <RotateCcw size={16} />
          새로운 게임 시작
        </button>
      </div>
    </div>
  );
};
