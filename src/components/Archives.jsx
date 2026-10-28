import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Archives = () => {
  return (
    <section id="archives" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill={content.archives.pill}
        line1={content.archives.headingLine1}
        line2={content.archives.headingLine2}
        accentColor="text-neonPink"
        description={content.archives.desc}
      />

      {/* Auto-scrolling photo strip */}
      <div className="relative overflow-hidden py-4 border-y-2 border-black bg-[#050814] mb-8">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="w-72 h-48 rounded-xl bg-[#0D152D] border-2 border-black shadow-sticker flex-shrink-0 flex flex-col items-center justify-center p-4 text-center group hover:border-neonCyan transition-colors"
            >
              <div className="text-3xl mb-2">📸</div>
              <span className="font-display text-xs text-creamText">
                HULT PRIZE SPRINT PHOTO #{idx + 1}
              </span>
              <span className="font-mono text-[10px] text-neonPink mt-1">
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
          className="btn-cartoon-outline text-xs"
        >
          {content.archives.cta} ↗
        </a>
      </div>
    </section>
  );
};
