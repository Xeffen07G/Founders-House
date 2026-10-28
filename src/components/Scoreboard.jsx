import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Scoreboard = () => {
  return (
    <section id="scoreboard" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill={content.scoreboard.pill}
        line1={content.scoreboard.headingLine1}
        line2={content.scoreboard.headingLine2}
        accentColor="text-neonLime"
        description={content.scoreboard.desc}
      />

      {/* Stock Exchange Ticker Bar */}
      <div className="bg-[#050814] border-2 border-black rounded-xl p-3 mb-10 overflow-hidden shadow-sticker">
        <div className="flex gap-8 whitespace-nowrap animate-marquee">
          {content.scoreboard.ticker.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 font-mono text-xs">
              <span className="text-creamText font-bold">{item.sym}</span>
              <span className="text-neonYellow font-extrabold">{item.price}</span>
              <span className="text-neonLime font-bold">{item.chg}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Evidence Board Style Leaderboard */}
        <div className="lg:col-span-7 evidence-board p-6">
          <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-5">
            <div className="flex items-center gap-2">
              <span className="text-xl">📌</span>
              <span className="font-display text-sm tracking-wider text-neonYellow">
                EVIDENCE BOARD: LIVE SPRINT METRICS
              </span>
            </div>
            <span className="text-xs font-mono text-neonLime font-bold animate-pulse">
              ● SYNCED
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {content.scoreboard.leaderboard.map((team) => (
              <div
                key={team.rank}
                className="p-3.5 rounded-xl bg-[#0F1836] border-2 border-black shadow-sticker flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-neonYellow border-2 border-black flex items-center justify-center font-display text-xs text-black font-extrabold">
                    {team.rank}
                  </span>
                  <div>
                    <h5 className="font-display text-sm text-creamText">
                      {team.name}
                    </h5>
                    <span className="text-[11px] font-mono text-creamText/60">
                      {team.caseTrack}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-sm font-extrabold text-neonCyan">
                    {team.score.toLocaleString()} pts
                  </div>
                  <div className="font-mono text-xs text-neonLime font-bold">
                    ▲ {team.points}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Perks Cards Grid */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="text-sm font-mono text-neonPink uppercase tracking-wider font-extrabold mb-1">
            ✦ UNLOCKABLE SPRINT PERKS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {content.scoreboard.perks.map((perk, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-xl bg-[#090F24] border-2 border-black shadow-sticker hover:border-neonYellow transition-colors"
              >
                <span className="text-2xl mb-2 block">{perk.icon}</span>
                <h6 className="font-display text-xs text-creamText mb-1">
                  {perk.title}
                </h6>
                <p className="text-[11px] text-creamText/70 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
