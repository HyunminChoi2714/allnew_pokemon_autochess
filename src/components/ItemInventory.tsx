import React from 'react';
import { Item } from '../types/game';
import { Package, Sparkles } from 'lucide-react';

interface Props {
  items: Item[];
  selectedItemIndex: number | null;
  onSelectItem: (index: number | null) => void;
  isBattleActive: boolean;
}

export const ItemInventory: React.FC<Props> = ({
  items,
  selectedItemIndex,
  onSelectItem,
  isBattleActive,
}) => {
  return (
    <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-2.5 flex items-center gap-3 text-white shadow-lg backdrop-blur-md">
      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 pl-1 shrink-0">
        <Package size={14} className="text-amber-400" />
        <span>도구함 ({items.length})</span>
      </div>

      <div className="flex-1 flex items-center gap-2 overflow-x-auto py-1">
        {items.length === 0 ? (
          <span className="text-xs text-gray-500 italic pl-2">
            체육관 관장 격파 및 라운드 클리어 시 특별한 포켓몬 도구를 획득합니다!
          </span>
        ) : (
          items.map((item, index) => {
            const isSelected = selectedItemIndex === index;
            return (
              <button
                key={`${item.id}_${index}`}
                disabled={isBattleActive}
                onClick={() => onSelectItem(isSelected ? null : index)}
                className={`relative px-2.5 py-1.5 rounded-xl border-2 transition flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'border-yellow-400 bg-yellow-950/60 shadow-lg shadow-yellow-500/20 scale-105'
                    : 'border-gray-700 bg-gray-800 hover:border-gray-500 hover:bg-gray-750'
                } ${isBattleActive ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
                title={`${item.name}: ${item.description}`}
              >
                <span className="text-lg">{item.icon}</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-white leading-tight">{item.name}</span>
                  <span className="text-[9px] text-gray-400 line-clamp-1 max-w-[110px]">
                    {item.description}
                  </span>
                </div>
                {isSelected && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                  </span>
                )}
              </button>
            );
          })
        )}
      </div>

      {selectedItemIndex !== null && !isBattleActive && (
        <div className="text-[11px] text-yellow-300 font-bold px-2 py-1 bg-yellow-950/80 border border-yellow-500/60 rounded-lg animate-pulse shrink-0">
          장착할 포켓몬을 클릭하세요!
        </div>
      )}
    </div>
  );
};
