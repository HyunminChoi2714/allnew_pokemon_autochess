import React, { useState } from 'react';
import { ALL_TYPES, TYPE_COLORS, TYPE_NAMES_KO, TYPE_CHART } from '../data/typeChart';
import { PokemonType } from '../types/game';
import { X, HelpCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TypeChartModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [selectedAttackType, setSelectedAttackType] = useState<PokemonType | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-gray-900 border-2 border-red-500/50 rounded-2xl p-6 shadow-2xl flex flex-col text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                포켓몬 18타입 공식 상성표 (Type Matchup Chart)
              </h2>
              <p className="text-xs text-gray-400">
                기획안 9페이지 수록: 공격 기술 타입 vs 방어 포켓몬 타입 상성 배율
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 py-3 text-xs bg-gray-800/40 px-4 rounded-lg my-3 border border-gray-800">
          <span className="font-semibold text-gray-300">배율 표기:</span>
          <span className="flex items-center gap-1 text-red-400 font-bold">
            <span className="w-5 h-5 rounded flex items-center justify-center bg-red-900/60 border border-red-500">2x</span>
            효과가 굉장했다! (2배)
          </span>
          <span className="flex items-center gap-1 text-blue-400">
            <span className="w-5 h-5 rounded flex items-center justify-center bg-blue-900/60 border border-blue-500">½x</span>
            효과가 별로다 (0.5배)
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <span className="w-5 h-5 rounded flex items-center justify-center bg-gray-900 border border-gray-600">0x</span>
            효과가 없다 (0배)
          </span>
          <span className="flex items-center gap-1 text-gray-300">
            <span className="w-5 h-5 rounded flex items-center justify-center bg-gray-800">1x</span>
            보통 효과
          </span>
        </div>

        {/* Matrix Table */}
        <div className="flex-1 overflow-auto border border-gray-800 rounded-xl">
          <table className="w-full text-[11px] text-center border-collapse">
            <thead className="sticky top-0 bg-gray-950 z-20 shadow">
              <tr>
                <th className="p-2 bg-gray-950 border-r border-b border-gray-800 text-gray-400 font-bold sticky left-0 z-30">
                  공격 \ 방어
                </th>
                {ALL_TYPES.map((defType) => (
                  <th
                    key={defType}
                    className="p-1 border-b border-gray-800 font-semibold"
                    style={{ backgroundColor: `${TYPE_COLORS[defType].bg}33` }}
                  >
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-bold block whitespace-nowrap"
                      style={{ backgroundColor: TYPE_COLORS[defType].bg, color: TYPE_COLORS[defType].text }}
                    >
                      {TYPE_NAMES_KO[defType]}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ALL_TYPES.map((atkType) => (
                <tr key={atkType} className="hover:bg-gray-800/50">
                  <td
                    className="p-1.5 border-r border-b border-gray-800 font-bold sticky left-0 bg-gray-950 z-10 text-left pl-3"
                  >
                    <span
                      className="px-2 py-0.5 rounded text-[11px] font-bold inline-block"
                      style={{ backgroundColor: TYPE_COLORS[atkType].bg, color: TYPE_COLORS[atkType].text }}
                    >
                      {TYPE_NAMES_KO[atkType]}
                    </span>
                  </td>
                  {ALL_TYPES.map((defType) => {
                    const mult = TYPE_CHART[atkType]?.[defType] ?? 1.0;
                    let display = '-';
                    let cellClass = 'text-gray-600';
                    if (mult === 2.0) {
                      display = '2x';
                      cellClass = 'bg-red-500/20 text-red-400 font-bold';
                    } else if (mult === 0.5) {
                      display = '½';
                      cellClass = 'bg-blue-500/10 text-blue-400';
                    } else if (mult === 0) {
                      display = '0';
                      cellClass = 'bg-gray-900 text-gray-600 font-bold';
                    }

                    return (
                      <td
                        key={defType}
                        className={`p-1 border-b border-gray-800/60 ${cellClass}`}
                      >
                        {display}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="pt-3 flex justify-between items-center text-xs text-gray-400">
          <span>* 듀얼 타입 포켓몬의 경우 두 타입의 상성이 곱연산(4배, 0배 등)으로 적용됩니다.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
