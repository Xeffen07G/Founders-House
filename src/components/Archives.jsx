import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

const ARCHIVE_PHOTOS = [
  { id: 1, src: '/archive_01.webp', alt: 'Hult Prize Sprint Archive 1' },
  { id: 2, src: '/archive_02.webp', alt: 'Hult Prize Sprint Archive 2' },
  { id: 3, src: '/archive_03.webp', alt: 'Hult Prize Sprint Archive 3' },
  { id: 4, src: '/archive_04.webp', alt: 'Hult Prize Sprint Archive 4' }
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

      {/* Uncropped Portrait & Landscape Event Photos (No frames, No captions, Full images) */}
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 mb-12">
        {ARCHIVE_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className="rounded-2xl overflow-hidden border-2 border-black bg-[#160309] shadow-[5px_5px_0px_#000] hover:border-[#FFC800] hover:scale-[1.02] transition-all duration-300 flex-shrink-0 max-w-full"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="h-64 sm:h-72 md:h-80 lg:h-[340px] xl:h-[370px] w-auto max-w-full object-contain block select-none"
            />
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
