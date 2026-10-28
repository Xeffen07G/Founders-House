import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Tracks = () => {
  return (
    <section id="tracks" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill="MISSION TRACKS"
        line1="CHOOSE YOUR"
        line2="MISSION TRACK."
        accentColor="text-[#E11D48]"
        description="Three curated problem domains. Your precise problem statement will be unsealed and assigned by your domain mentor on Day 1."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {content.tracks.cases.map((c) => {
          const hoverBorder =
            c.color === 'neonPink'
              ? 'hover:border-[#E11D48] hover:shadow-[6px_6px_0px_#E11D48]'
              : c.color === 'neonCyan'
              ? 'hover:border-[#19D3F3] hover:shadow-[6px_6px_0px_#19D3F3]'
              : 'hover:border-[#7CFF3A] hover:shadow-[6px_6px_0px_#7CFF3A]';

          const titleColor =
            c.color === 'neonPink'
              ? 'text-[#E11D48]'
              : c.color === 'neonCyan'
              ? 'text-[#19D3F3]'
              : 'text-[#7CFF3A]';

          return (
            <div
              key={c.id}
              className={`comic-card p-8 flex flex-col justify-between bg-[#1C0509] transition-all ${hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-white/60 tracking-widest">
                    {c.id}
                  </span>
                  <span className="font-mono text-[10px] font-extrabold px-3 py-1 rounded-full bg-black/80 border border-white/20 text-white">
                    {c.badge}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-[#FFC800] mb-2 tracking-wider uppercase">
                  {c.tag}
                </div>

                <h3 className={`text-2xl sm:text-3xl font-bebas uppercase tracking-wide mb-3 ${titleColor}`}>
                  {c.title}
                </h3>

                <p className="text-sm font-poppins text-white/80 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>CASE STATUS</span>
                <span className="text-[#FFC800] font-bold">REVEALED DAY 1 ✦</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Professor Shonku Advice Bubble */}
      <div className="comic-card p-6 bg-[#1C0509] border-2 border-black flex items-center gap-4 shadow-[4px_4px_0px_#000]">
        <span className="text-3xl flex-shrink-0">⚡</span>
        <div className="text-xs sm:text-sm font-poppins text-white">
          <span className="text-[#7CFF3A] font-bold font-mono tracking-wider">PROFESSOR SHONKU'S ADVICE: </span>
          "Build something that fundamentally alters human efficiency. Whether it's an AI cognitive pipeline or decentralized logistics, aim for breakthrough execution."
        </div>
      </div>
    </section>
  );
};
