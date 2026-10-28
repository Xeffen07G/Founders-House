import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Tracks = () => {
  return (
    <section id="tracks" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill="MISSION TRACKS"
        line1="CHOOSE YOUR"
        line2="MISSION TRACK."
        accentColor="text-[#FF2E93]"
        description="Three curated problem domains. Your precise problem statement will be unsealed and assigned by your domain mentor on Day 1."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {content.tracks.cases.map((c) => {
          const hoverBorder =
            c.color === 'neonPink'
              ? 'hover:border-[#FF2E93] hover:shadow-comic-pink'
              : c.color === 'neonCyan'
              ? 'hover:border-[#19D3F3] hover:shadow-comic-cyan'
              : 'hover:border-[#7CFF3A] hover:shadow-comic-lime';

          const titleColor =
            c.color === 'neonPink'
              ? 'text-[#FF2E93]'
              : c.color === 'neonCyan'
              ? 'text-[#19D3F3]'
              : 'text-[#7CFF3A]';

          return (
            <div
              key={c.id}
              className={`comic-card p-7 flex flex-col justify-between ${hoverBorder}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#F4F0FF]/60 tracking-widest">
                    {c.id}
                  </span>
                  <span className="font-mono text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-black/80 border border-white/20 text-[#F4F0FF]">
                    {c.badge}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-[#FFE600] mb-1 tracking-wider uppercase">
                  {c.tag}
                </div>

                <h3 className={`text-2xl font-bebas uppercase tracking-wide mb-3 ${titleColor}`}>
                  {c.title}
                </h3>

                <p className="text-sm font-poppins text-[#F4F0FF]/80 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#F4F0FF]/60">
                <span>CASE STATUS</span>
                <span className="text-[#FFE600] font-bold">REVEALED DAY 1 ✦</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Professor Shonku Advice Bubble */}
      <div className="comic-speech-bubble flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">⚡</span>
        <div className="text-xs sm:text-sm font-poppins text-[#F4F0FF]">
          <span className="text-[#7CFF3A] font-bold">PROFESSOR SHONKU'S ADVICE: </span>
          "Build something that fundamentally alters human efficiency. Whether it's an AI RAG pipeline or decentralized logistics, aim for breakthrough execution."
        </div>
      </div>
    </section>
  );
};
