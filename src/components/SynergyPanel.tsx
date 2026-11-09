import React, { useState } from 'react';
import { SynergyTiers } from '../types/game';
import { TYPE_COLORS, TYPE_NAMES_KO } from '../data/typeChart';
import { ChevronRight, Shield, Sparkles } from 'lucide-react';

interface Props {
  synergies: SynergyTiers[];
}

export const SynergyPanel: React.FC<Props> = ({ synergies }) => {
  const [hoveredSynergy, setHoveredSynergy] = useState<SynergyTiers | null>(null);

  const activeSynergies = synergies.filter((s) => s.currentCount > 0);

  return (
    <div className="relative bg-gray-900/90 border border-gray-800 rounded-2xl p-3 flex flex-col w-56 text-white shadow-xl backdrop-blur-md">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800">
        <h3 className="text-xs font-black uppercase tracking-wider text-gray-300 flex items-center gap-1.5">
          <Sparkles size={14} className="text-yellow-400" />
          타입 시너지 (18종)
        </h3>
        <span className="text-[10px] text-gray-400">기준: 3 / 5 마리</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 max-h-[360px] custom-scrollbar">
        {activeSynergies.length === 0 ? (
          <div className="text-center py-6 text-xs text-gray-500">
            필드에 포켓몬을 배치하여 18개 타입 파티 버프를 활성화하세요!
          </div>
        ) : (
          activeSynergies.map((synergy) => {
            const colors = TYPE_COLORS[synergy.type];
            const isTier1 = synergy.activeTier === 1;
            const isTier2 = synergy.activeTier === 2;
            const isActive = synergy.activeTier > 0;

            return (
              <div
                key={synergy.type}
                onMouseEnter={() => setHoveredSynergy(synergy)}
                onMouseLeave={() => setHoveredSynergy(null)}
                className={`relative group p-2 rounded-xl transition flex items-center justify-between cursor-pointer border ${
                  isTier2
                    ? 'bg-amber-950/40 border-amber-500/80 shadow-md shadow-amber-500/10'
                    : isTier1
                    ? 'bg-blue-950/40 border-blue-500/60'
                    : 'bg-gray-800/40 border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 shadow"
                    style={{ backgroundColor: colors.bg, color: colors.text }}
                  >
                    {TYPE_NAMES_KO[synergy.type][0]}
                  </span>
                  <div>
                    <div className="text-xs font-bold leading-none flex items-center gap-1">
                      <span>{TYPE_NAMES_KO[synergy.type]}</span>
                      {isActive && (
                        <span className="text-[10px] text-yellow-400 font-extrabold">
                          {isTier2 ? '(5)' : '(3)'}
                        </span>
                      )}
                    </div>
                    <div className="text-[9px] text-gray-400 truncate max-w-[100px] mt-0.5">
                      {synergy.name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                      isTier2
                        ? 'bg-amber-500 text-black'
                        : isTier1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {synergy.currentCount}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        synergy.currentCount >= 3 ? 'bg-blue-400' : 'bg-gray-700'
                      }`}
                    />
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        synergy.currentCount >= 5 ? 'bg-amber-400' : 'bg-gray-700'
                      }`}
                    />
                  </div>
                </div>

                {/* Tooltip on hover */}
                {hoveredSynergy?.type === synergy.type && (
                  <div className="absolute left-full top-0 ml-2 z-50 w-64 p-3 bg-gray-950 border-2 border-yellow-500/70 rounded-xl shadow-2xl text-xs text-white pointer-events-none animate-in fade-in duration-150">
                    <div className="flex items-center justify-between pb-1.5 border-b border-gray-800 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-bold"
                          style={{ backgroundColor: colors.bg, color: colors.text }}
                        >
                          {TYPE_NAMES_KO[synergy.type]}
                        </span>
                        <span className="font-bold text-white text-sm">{synergy.name}</span>
                      </div>
                      <span className="text-yellow-400 font-black">{synergy.currentCount}마리 보유</span>
                    </div>

                    <div className="space-y-2 text-[11px] leading-relaxed">
                      <div className={`p-1.5 rounded ${isTier1 || isTier2 ? 'bg-blue-950/60 text-blue-200 border border-blue-500/40' : 'text-gray-400'}`}>
                        <span className="font-bold text-blue-300 block mb-0.5">(3) 마리 활성화:</span>
                        {synergy.effects[0]}
                      </div>
                      <div className={`p-1.5 rounded ${isTier2 ? 'bg-amber-950/60 text-amber-200 border border-amber-500/40' : 'text-gray-500'}`}>
                        <span className="font-bold text-amber-300 block mb-0.5">(5) 마리 활성화:</span>
                        {synergy.effects[1]}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
