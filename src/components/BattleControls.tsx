import React from 'react';
import { GamePhase } from '../types/game';
import { OpponentTrainer } from '../utils/aiOpponents';
import { Play, FastForward, RotateCcw, Heart, Shield, Swords, BookOpen, Volume2 } from 'lucide-react';

interface Props {
  round: number;
  phase: GamePhase;
  playerHp: number;
  opponent: OpponentTrainer;
  battleSpeed: number; // 1, 2, 4
  autoStart: boolean;
  onStartBattle: () => void;
  onToggleSpeed: () => void;
  onToggleAutoStart: () => void;
  onOpenTypeChart: () => void;
  onOpenTutorial: () => void;
  onOpenMobileSynergy?: () => void;
  onOpenMobileLog?: () => void;
}

export const BattleControls: React.FC<Props> = ({
  round,
  phase,
  playerHp,
  opponent,
  battleSpeed,
  autoStart,
  onStartBattle,
  onToggleSpeed,
  onToggleAutoStart,
  onOpenTypeChart,
  onOpenTutorial,
  onOpenMobileSynergy,
  onOpenMobileLog,
}) => {
  const isPlanning = phase === 'planning';
  const isBattle = phase === 'battle';

  return (
    <div className="w-full bg-gray-950/90 border-b border-gray-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-white backdrop-blur-md">
      {/* Left: Round & Player HP */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 bg-red-600 font-black text-xs rounded-lg uppercase tracking-wider shadow">
            라운드 {round}
          </span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
            isPlanning ? 'bg-blue-900/60 text-blue-300 border border-blue-500/40' : 'bg-red-900/60 text-red-300 border border-red-500/40 animate-pulse'
          }`}>
            {isPlanning ? '준비 단계' : isBattle ? '전투 진행 중' : '라운드 정산'}
          </span>
        </div>

        {/* Player HP */}
        <div className="flex items-center gap-2">
          <Heart size={16} className="text-red-500 fill-red-500" />
          <div className="w-28 h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div
              className={`h-full transition-all duration-300 ${
                playerHp > 50
                  ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                  : playerHp > 20
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                  : 'bg-gradient-to-r from-red-600 to-rose-400 animate-pulse'
              }`}
              style={{ width: `${Math.max(0, playerHp)}%` }}
            />
          </div>
          <span className="text-xs font-black text-white">{playerHp} HP</span>
        </div>
      </div>

      {/* Center: Current Opponent Leader Dialogue */}
      <div className="hidden lg:flex items-center gap-3 bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-xl max-w-md">
        <span className="text-xl">{opponent.avatar}</span>
        <div className="flex flex-col text-left overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-yellow-400">{opponent.name}</span>
            <span className="text-[10px] text-gray-400 truncate">{opponent.title}</span>
          </div>
          <p className="text-[11px] text-gray-300 italic truncate">
            &ldquo;{opponent.dialogue}&rdquo;
          </p>
        </div>
      </div>

      {/* Right: Controls & Speed */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {/* Battle Guide Tutorial Button */}
        <button
          onClick={onOpenTutorial}
          className="px-2.5 sm:px-3 py-1.5 bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/60 rounded-xl text-xs font-black text-yellow-300 flex items-center gap-1 transition shadow-sm"
        >
          <BookOpen size={14} className="text-yellow-400" />
          가이드
        </button>

        {/* Type Chart Button */}
        <button
          onClick={onOpenTypeChart}
          className="px-2.5 sm:px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-xs font-bold text-gray-200 flex items-center gap-1 transition"
        >
          <Shield size={14} className="text-cyan-400" />
          <span className="hidden sm:inline">18타입</span> 상성표
        </button>

        {/* Mobile-only Synergy & Log Toggle */}
        {onOpenMobileSynergy && (
          <button
            onClick={onOpenMobileSynergy}
            className="md:hidden px-2.5 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-xs font-bold text-purple-300 flex items-center gap-1 transition"
          >
            ⚡ 시너지
          </button>
        )}
        {onOpenMobileLog && (
          <button
            onClick={onOpenMobileLog}
            className="lg:hidden px-2.5 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-xs font-bold text-gray-300 flex items-center gap-1 transition"
          >
            📜 로그
          </button>
        )}

        {/* Speed toggle */}
        <button
          onClick={onToggleSpeed}
          className="px-2.5 sm:px-3 py-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-xs font-bold text-yellow-400 flex items-center gap-1 transition"
        >
          <FastForward size={14} />
          {battleSpeed}x
        </button>

        {/* Auto start toggle */}
        <button
          onClick={onToggleAutoStart}
          className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition border ${
            autoStart
              ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
              : 'bg-gray-800 border-gray-700 text-gray-400'
          }`}
        >
          자동 {autoStart ? 'ON' : 'OFF'}
        </button>

        {/* Start Battle Button */}
        {isPlanning && (
          <button
            onClick={onStartBattle}
            className="px-4 sm:px-5 py-1.5 bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-500 hover:to-rose-400 text-white font-black text-xs rounded-xl shadow-lg shadow-red-600/40 active:scale-95 flex items-center gap-1.5 transition animate-pulse"
          >
            <Swords size={15} />
            전투 시작!
          </button>
        )}
      </div>
    </div>
  );
};
