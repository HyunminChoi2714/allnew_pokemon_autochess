import React, { useState } from 'react';
import { X, BookOpen, Award, Coins, Zap, Shield, Sparkles, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const TutorialModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  if (!isOpen) return null;

  const tabs = [
    { id: 0, title: '기본 규칙', icon: '🎮' },
    { id: 1, title: '골드 & 경제', icon: '💰' },
    { id: 2, title: '18타입 시너지', icon: '⚡' },
    { id: 3, title: '기술 & 레벨업', icon: '📖' },
    { id: 4, title: '진화 & 아이템', icon: '🔗' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950 border-2 border-yellow-500/50 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-xl">
              <BookOpen size={22} />
            </span>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                포켓몬 오토체스 배틀 가이드 (튜토리얼)
              </h2>
              <p className="text-xs text-gray-400">
                기획안 공식 규칙 기반의 완벽 공략 가이드입니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-800 text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-800 bg-gray-950/60 overflow-x-auto scrollbar-none px-4 pt-2 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-t-xl transition flex items-center gap-2 shrink-0 ${
                activeTab === tab.id
                  ? 'bg-yellow-500 text-gray-950 shadow-md font-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 text-sm text-gray-200 space-y-5">
          {activeTab === 0 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/40">
                <h3 className="text-base font-black text-blue-300 flex items-center gap-2 mb-2">
                  <span>🏟️</span> 7열 x 8행 전장 & 9칸 벤치 시스템
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  배틀 경기장은 총 56칸(7x8)으로 구성되어 있습니다. 상단 4줄(E0~E3)은 상대 AI 영역이며, 하단 4줄(P0~P3)은 플레이어의 출전 배치 영역입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <h4 className="font-bold text-yellow-400 flex items-center gap-1.5 mb-1.5">
                    <span>👑</span> 트레이너 레벨과 출전 인원
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    필드에 출전시킬 수 있는 최대 포켓몬 수는 <strong className="text-white">트레이너 레벨</strong>과 동일합니다.
                    (Lv.1에는 1마리, Lv.3에는 3마리 출전 가능). 하단 상점에서 4원으로 경험치(+4 XP)를 구매해 레벨을 올리세요!
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <h4 className="font-bold text-emerald-400 flex items-center gap-1.5 mb-1.5">
                    <span>💖</span> 기절 포켓몬 100% 보존 & 부활
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    전투 중 체력이 다해 기절하더라도 아군 포켓몬은 영구 소멸되지 않습니다! 다음 라운드 준비 단계가 되면
                    원래 자리에서 <strong className="text-emerald-300">HP와 PP가 100% 회복</strong>된 상태로 자동 부활합니다.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200">
                💡 <strong>초반 팁:</strong> 1~3라운드는 약한 야생 포켓몬 및 초보 트레이너가 등장하므로, 무리하게 리롤하지 않고 포켓몬을 모으며 파티 시너지를 구축하세요.
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-yellow-950/30 border border-yellow-500/40">
                <h3 className="text-base font-black text-yellow-300 flex items-center gap-2 mb-2">
                  <span>💰</span> 재화(원) 지급 및 이자 공식
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  포켓몬 오토체스는 정교한 경제 시스템을 가지고 있습니다. 계획적인 골드 관리가 승리의 지름길입니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-gray-900/70 border border-gray-800">
                  <span className="text-xs font-bold text-gray-400">기본 라운드 수입</span>
                  <div className="mt-1 text-sm font-black text-white">
                    1라운드: 5원<br />
                    2, 3라운드: 2원<br />
                    4라운드: 4원<br />
                    5라운드 이후: 5원
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gray-900/70 border border-gray-800">
                  <span className="text-xs font-bold text-yellow-400">이자 (Interest)</span>
                  <div className="mt-1 text-sm font-black text-yellow-300">
                    보유 10원당 +1원<br />
                    최대 50원 기준<br />
                    <span className="text-xs font-normal text-yellow-400/90">(최대 이자: +5원)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gray-900/70 border border-gray-800">
                  <span className="text-xs font-bold text-orange-400">연승 / 연패 보너스</span>
                  <div className="mt-1 text-sm font-black text-orange-300">
                    2~3연승/연패: +1원<br />
                    4연승/연패: +2원<br />
                    5연승/연패 이상: +3원
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-xs text-gray-300 space-y-1.5">
                <h4 className="font-bold text-white text-sm">상점 액션 비용</h4>
                <div>• <strong>새로고침(리롤):</strong> 2원 소모 (상점의 5개 슬롯을 즉시 다시 뽑습니다)</div>
                <div>• <strong>경험치 구매:</strong> 4원 소모 (+4 XP 획득하여 트레이너 레벨업)</div>
                <div>• <strong>상점 잠금:</strong> 다음 라운드로 넘어갈 때 현재 상점 목록을 그대로 유지합니다</div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/40">
                <h3 className="text-base font-black text-purple-300 flex items-center gap-2 mb-2">
                  <span>⚡</span> 18개 타입 시너지 (3마리 / 5마리 기준)
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  필드에 배치된 아군 포켓몬 중 동일 타입을 가진 포켓몬 수에 따라 강력한 파티 패시브 버프가 활성화됩니다!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-gray-900/80 border border-red-500/30">
                  <span className="font-black text-red-400">🔥 불꽃 (Fire):</span> 공격력 & 특수공격 +10% (3마리) / +25% (5마리)
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-blue-500/30">
                  <span className="font-black text-blue-400">💧 물 (Water):</span> 전투 개시 시 최대 HP의 15% 보호막 (5마리)
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-green-500/30">
                  <span className="font-black text-green-400">🌱 풀 (Grass):</span> 입힌 데미지의 15% 흡혈 (3) / 흡혈 + HP 10% 증가 (5)
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-yellow-500/30">
                  <span className="font-black text-yellow-400">⚡ 전기 (Electric):</span> 공격 속도 +15% (3마리) / +30% (5마리)
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-orange-500/30">
                  <span className="font-black text-orange-400">🥊 격투 (Fighting):</span> 물리 데미지 +12% (3) / 데미지 +25% & 방어 20% 관통 (5)
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-pink-500/30">
                  <span className="font-black text-pink-400">🔮 에스퍼 (Psychic):</span> 특수위력 +15% & 기술 사용 시 15% 확률로 PP 즉시 회복 (3/5)
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-purple-500/30">
                  <span className="font-black text-purple-400">👻 고스트 (Ghost):</span> 전투 개시 시 1.5초(3) / 2.5초(5) 동안 은신 상태로 적 배후 기습!
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-indigo-500/30">
                  <span className="font-black text-indigo-400">🐉 드래곤 (Dragon):</span> 2초마다 공격 시 목표 최대 HP의 4%(3) / 8%(5) 추가 고정 데미지
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40">
                <h3 className="text-base font-black text-emerald-300 flex items-center gap-2 mb-2">
                  <span>📖</span> PokemonDB 기반 레벨업 & 기술(Moves) 시스템
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  포켓몬은 상대를 처치할 때마다 공식 EXP 공식에 따라 경험치를 얻어 Lv.100까지 성장합니다!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
                    <span>🎯</span> 기술 선택 & PP
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                    <li>포켓몬을 <strong>우클릭</strong>하면 상세 정보 창이 열리며, 배운 4개 기술 중 이번 라운드에 사용할 <strong className="text-yellow-400">주력 기술을 직접 선택</strong>할 수 있습니다.</li>
                    <li>모든 기술에는 최대 PP가 있으며, PP가 0이 되면 최후의 수단인 <strong className="text-rose-400">발버둥(Struggle)</strong>을 사용합니다.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-1.5">
                    <span>⚔️</span> 자속 보정(STAB) & 상성 배수
                  </h4>
                  <ul className="text-xs text-gray-400 space-y-2 list-disc list-inside">
                    <li>포켓몬 본인의 타입과 동일한 타입의 기술을 사용하면 <strong className="text-cyan-300">자속 보정(1.5배)</strong>이 적용됩니다.</li>
                    <li>상대 타입의 약점을 찌르면 2배, 4배의 치명적인 데미지를 가할 수 있습니다 (상단 18타입 상성표 버튼 참조).</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 4 && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40">
                <h3 className="text-base font-black text-amber-300 flex items-center gap-2 mb-2">
                  <span>🔗</span> 3마리 합체 진화 & 도구 장착
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  동일한 포켓몬을 수집하여 진화시키고 강력한 도구들을 장착시켜 파티를 강화하세요.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-2">
                  <h4 className="font-bold text-yellow-400">★ 3성 융합 진화</h4>
                  <p className="text-xs text-gray-400">
                    필드나 벤치에 동일한 포켓몬이 3마리 모이면, 자동으로 다음 진화 단계로 합체 진화합니다!<br />
                    (예: 파이리 3마리 ➡️ 리자드, 리자드 3마리 ➡️ 리자몽)
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 space-y-2">
                  <h4 className="font-bold text-cyan-400">🔗 연결의끈 (통신진화)</h4>
                  <p className="text-xs text-gray-400">
                    고우스트, 윤겔라, 데구리, 근육몬 등 통신교환으로 진화하는 포켓몬에게 아이템 <strong className="text-white">연결의끈</strong>을 장착하면 3마리를 모으지 않아도 즉시 팬텀, 후딘, 딱구리, 괴력몬으로 최종 진화합니다!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-xs text-gray-300 space-y-1.5">
                <h4 className="font-bold text-white text-sm">도구함 (최대 6개 장착 가능)</h4>
                <div>• <strong>먹다남은음식:</strong> 1.2초마다 최대 HP의 1/16을 지속 회복</div>
                <div>• <strong>생명의구슬:</strong> 기술 위력 1.3배 증가 (공격 시 HP 10% 소모)</div>
                <div>• <strong>달인의띠:</strong> 약점 공격 시 위력 1.2배 증가</div>
                <div>• <strong>메가스톤:</strong> 리자몽, 팬텀, 루카리오, 한카리아스 등 메가진화 가능 포켓몬에게 장착 시 전투 개시와 함께 메가진화!</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="px-5 py-3 border-t border-gray-800 bg-black/40 flex items-center justify-between">
          <button
            onClick={() => setActiveTab((p) => Math.max(0, p - 1))}
            disabled={activeTab === 0}
            className={`px-4 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition ${
              activeTab === 0 ? 'opacity-30 cursor-not-allowed text-gray-500' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            <ChevronLeft size={16} /> 이전
          </button>

          <span className="text-xs text-gray-500 font-bold">
            {activeTab + 1} / {tabs.length}
          </span>

          {activeTab < tabs.length - 1 ? (
            <button
              onClick={() => setActiveTab((p) => Math.min(tabs.length - 1, p + 1))}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-yellow-500 hover:bg-yellow-400 text-gray-950 flex items-center gap-1 transition shadow font-black"
            >
              다음 <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 transition shadow font-black"
            >
              <CheckCircle2 size={16} /> 이해했습니다!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
