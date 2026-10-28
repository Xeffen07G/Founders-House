import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Archives = () => {
  return (
    <section id="archives" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill={content.archives.pill}
        line1={content.archives.headingLine1}
        line2={content.archives.headingLine2}
        accentColor="text-[#E11D48]"
        description={content.archives.desc}
      />

      {/* Auto-scrolling photo strip */}
      <div className="relative overflow-hidden py-6 border-y-2 border-black bg-[#1C0509] mb-12 shadow-[4px_4px_0px_#000]">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="w-80 h-52 rounded-xl bg-[#120205] border-2 border-black shadow-[3px_3px_0px_#000] flex-shrink-0 flex flex-col items-center justify-center p-6 text-center group hover:border-[#FFC800] transition-colors"
            >
              <div className="text-4xl mb-3">📸</div>
              <span className="font-bebas text-base text-white">
                HULT PRIZE SPRINT ARCHIVE #{idx + 1}
              </span>
              <span className="font-mono text-xs text-[#FFC800] mt-1 tracking-wider uppercase">
                KOLKATA BUILDERS IN ACTION
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href={content.event.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C0509] border-2 border-black text-[#FFC800] hover:text-white hover:bg-[#E11D48] transition-all font-mono text-xs font-bold tracking-wider shadow-[3px_3px_0px_#000]"
        >
          {content.archives.cta} ↗
        </a>
      </div>
    </section>
  );
};
