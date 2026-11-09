import React, { useRef, useEffect } from 'react';
import { ScrollText, Trash2 } from 'lucide-react';

export interface LogEntry {
  id: string;
  text: string;
  type: 'attack' | 'super' | 'crit' | 'faint' | 'level' | 'status' | 'rank' | 'system';
  time: string;
}

interface Props {
  logs: LogEntry[];
  onClearLogs?: () => void;
}

export const CombatLog: React.FC<Props> = ({ logs, onClearLogs }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-3 flex flex-col w-64 text-white shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800">
        <h3 className="text-xs font-black uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
          <ScrollText size={14} className="text-cyan-400" />
          배틀 로그 (Battle Log)
        </h3>
        {onClearLogs && (
          <button
            onClick={onClearLogs}
            className="text-gray-500 hover:text-gray-300 p-0.5"
            title="로그 비우기"
          >
            <Trash2 size={12} />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1 max-h-[360px] text-[11px] custom-scrollbar font-mono">
        {logs.length === 0 ? (
          <div className="text-center py-6 text-xs text-gray-500 font-sans">
            전투가 시작되면 실시간 데미지, 기술 시전, 상성 및 레벨업이 기록됩니다.
          </div>
        ) : (
          logs.map((log) => {
            let textColor = 'text-gray-300';
            if (log.type === 'super') textColor = 'text-red-400 font-bold';
            else if (log.type === 'crit') textColor = 'text-yellow-300 font-bold';
            else if (log.type === 'faint') textColor = 'text-rose-500 font-bold';
            else if (log.type === 'level') textColor = 'text-cyan-300 font-bold';
            else if (log.type === 'status') textColor = 'text-purple-400';
            else if (log.type === 'rank') textColor = 'text-emerald-400';
            else if (log.type === 'system') textColor = 'text-amber-400 font-semibold';

            return (
              <div key={log.id} className="leading-snug">
                <span className="text-[9px] text-gray-500 mr-1.5">[{log.time}]</span>
                <span className={textColor}>{log.text}</span>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
