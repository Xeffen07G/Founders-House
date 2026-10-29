import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

const ARCHIVE_PHOTOS = [
  {
    id: 1,
    src: '/archive_01.webp',
    number: '01',
    badge: '1-ON-1 CLINIC',
    title: 'SPRINT ARCHIVE #01',
    subtitle: 'MENTOR DEEP DIVE',
    desc: 'Founders breaking down prototype roadblocks directly with industry veterans in the auditorium.'
  },
  {
    id: 2,
    src: '/archive_02.webp',
    number: '02',
    badge: 'PROTOTYPE LAB',
    title: 'SPRINT ARCHIVE #02',
    subtitle: 'HARDWARE DEMO',
    desc: 'Live telemetry and mechanical build review on the incubation floor.'
  },
  {
    id: 3,
    src: '/archive_03.webp',
    number: '03',
    badge: 'STAGE PITCH',
    title: 'SPRINT ARCHIVE #03',
    subtitle: 'THE 3-MINUTE GAUNTLET',
    desc: 'Defending live metrics, user traction, and unit economics under jury spotlight.'
  },
  {
    id: 4,
    src: '/archive_04.webp',
    number: '04',
    badge: 'VENTURE JURY',
    title: 'SPRINT ARCHIVE #04',
    subtitle: 'SYNDICATE SCRUTINY',
    desc: 'Institutional investors and incubation directors reviewing team dossiers.'
  }
];

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

      {/* 4-Column Comic Grid of Authentic Event Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {ARCHIVE_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className="comic-card bg-[#1C0509] border-2 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_#000] hover:border-[#FFC800] transition-all flex flex-col group"
          >
            {/* Real Snapshot Image with Comic Polaroid Frame */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40">
              <img
                src={photo.src}
                alt={photo.title}
                width="800"
                height="800"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Corner Comic Tag */}
              <div className="absolute top-3 left-3 bg-[#120205]/90 backdrop-blur-md border border-black px-2.5 py-1 rounded-full text-[10px] font-mono font-bold text-[#FFC800] uppercase tracking-wider shadow-[2px_2px_0px_#000]">
                {photo.badge}
              </div>
            </div>

            {/* Bottom Caption Box */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bebas text-base sm:text-lg text-white tracking-wide group-hover:text-[#FFC800] transition-colors">
                    {photo.title}
                  </span>
                  <span className="font-mono text-[10px] text-[#E11D48] font-bold">
                    #{photo.number}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#FFC800] tracking-wider uppercase mb-2">
                  {photo.subtitle}
                </div>
                <p className="font-poppins text-xs text-white/70 leading-relaxed">
                  {photo.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40 uppercase">
                <span>OFFBEAT CCU</span>
                <span className="text-[#E11D48] font-bold">LIVE ARCHIVE</span>
              </div>
            </div>
          </div>
        ))}
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
