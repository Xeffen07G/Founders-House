import React, { useState } from 'react';
import { content } from '../content';

export const ScoreboardPage = ({ onBack }) => {
  const [selectedTrack, setSelectedTrack] = useState('ALL');

  const filteredTeams = selectedTrack === 'ALL'
    ? content.scoreboard.leaderboard
    : content.scoreboard.leaderboard.filter(t => t.caseTrack.toUpperCase().includes(selectedTrack));

  return (
    <div className="min-h-screen bg-[#120205] text-[#FFF9F2] pt-24 pb-20 px-4 sm:px-6">
      
      {/* Top Header / Back Navigation */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-black/80 pb-6">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1C0509] border-2 border-black text-[#FFC800] hover:text-white hover:bg-[#E11D48] transition-all shadow-[3px_3px_0px_#000] font-mono text-xs sm:text-sm font-bold tracking-wider"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span>BACK TO MAIN ADDA</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7CFF3A] animate-ping" />
          <span className="font-mono text-xs text-[#7CFF3A] font-bold tracking-widest uppercase">
            LIVE SYNCED · SPRINT IN PROGRESS
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#E11D48] text-white border-2 border-black shadow-[3px_3px_0px_#000] font-bebas text-sm sm:text-base tracking-[0.2em] uppercase mb-4">
            OFFICIAL FOUNDER LEADERBOARD
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bebas uppercase text-white tracking-wide leading-none mb-4">
            FOUNDERS' <span className="text-[#FFC800]">STOCK EXCHANGE</span>
          </h1>
          <p className="text-sm sm:text-base font-poppins text-[#FFF9F2]/75 leading-relaxed">
            Real time evidence board, milestone points, and jury traction scores. Selected teams compete over 72 hours at AIC Techno to reach the final demo day.
          </p>
        </div>

        {/* Live Kolkata Market Ticker Bar */}
        <div className="bg-[#1C0509] border-2 border-black rounded-xl p-3 mb-10 overflow-hidden shadow-[4px_4px_0px_#000]">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {content.scoreboard.ticker.map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2.5 font-mono text-xs">
                <span className="text-white font-bold">{item.sym}</span>
                <span className="text-[#FFC800] font-extrabold">{item.price}</span>
                <span className="text-[#7CFF3A] font-bold">{item.chg}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Track Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {['ALL', 'AI', 'FINTECH', 'CREATIVE'].map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-4 py-1.5 rounded-full border-2 border-black font-mono text-xs font-bold tracking-wider transition-all shadow-[2px_2px_0px_#000] ${
                selectedTrack === track
                  ? 'bg-[#E11D48] text-white -translate-y-0.5'
                  : 'bg-[#1C0509] text-white/70 hover:text-white hover:bg-[#2A080E]'
              }`}
            >
              {track === 'ALL' ? '✦ ALL TRACKS' : `● ${track}`}
            </button>
          ))}
        </div>

        {/* Main Content Grid: Leaderboard (Left) & Unlockable Perks (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Evidence Board Style Leaderboard */}
          <div className="lg:col-span-8 bg-[#1C0509] border-2 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#000]">
            <div className="flex items-center justify-between border-b-2 border-black/80 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📌</span>
                <h2 className="font-bebas text-lg sm:text-xl tracking-wider text-[#FFC800]">
                  EVIDENCE BOARD: LIVE SPRINT METRICS
                </h2>
              </div>
              <span className="text-xs font-mono text-[#7CFF3A] font-bold animate-pulse">
                ● 10/10 SEATS ACTIVE
              </span>
            </div>

            <div className="flex flex-col gap-3.5">
              {filteredTeams.map((team) => (
                <div
                  key={team.rank}
                  className="p-4 rounded-xl bg-[#120205] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-between hover:border-[#E11D48] transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-9 h-9 rounded-full border-2 border-black flex items-center justify-center font-bebas text-base font-bold shadow-[2px_2px_0px_#000] ${
                        team.rank === 1
                          ? 'bg-[#FFC800] text-black'
                          : team.rank === 2
                          ? 'bg-[#E11D48] text-white'
                          : team.rank === 3
                          ? 'bg-[#19D3F3] text-black'
                          : 'bg-[#2A080E] text-white'
                      }`}
                    >
                      #{team.rank}
                    </span>
                    <div>
                      <h3 className="font-bebas text-base sm:text-lg text-white group-hover:text-[#FFC800] transition-colors">
                        {team.name}
                      </h3>
                      <span className="text-[11px] font-mono text-white/60 tracking-wider">
                        {team.caseTrack}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-sm sm:text-base font-extrabold text-[#FFC800]">
                      {team.score.toLocaleString()} <span className="text-xs font-bold text-white/50">pts</span>
                    </div>
                    <div className="font-mono text-xs text-[#7CFF3A] font-bold">
                      ▲ {team.points}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Perks & Rewards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-1">
              <span className="text-xs font-mono text-[#E11D48] uppercase tracking-wider font-extrabold">
                ✦ UNLOCKABLE SPRINT PERKS
              </span>
            </div>

            <div className="flex flex-col gap-3.5">
              {content.scoreboard.perks.map((perk, pIdx) => (
                <div
                  key={pIdx}
                  className="comic-card p-5 hover:border-[#FFC800] transition-colors"
                >
                  <span className="text-2xl mb-2 block">{perk.icon}</span>
                  <h4 className="font-bebas text-base sm:text-lg text-white mb-1 tracking-wide">
                    {perk.title}
                  </h4>
                  <p className="text-xs font-poppins text-white/70 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Back Button Card */}
            <div className="p-6 rounded-2xl bg-[#1C0509] border-2 border-black text-center shadow-[4px_4px_0px_#000]">
              <p className="font-comic text-xs text-white/80 mb-4">
                "Ready to inspect the problem tracks and awards?"
              </p>
              <button
                onClick={onBack}
                className="w-full py-3 rounded-full bg-[#E11D48] border-2 border-black text-white font-bebas text-base tracking-wider hover:bg-[#BE123C] shadow-[3px_3px_0px_#000] transition-all"
              >
                RETURN TO MAIN ARENA
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

