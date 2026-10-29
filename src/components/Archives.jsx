import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

const ARCHIVE_PHOTOS = [
  { id: 1, src: '/archive_01.webp', alt: 'Hult Prize Sprint Archive 1' },
  { id: 2, src: '/archive_02.webp', alt: 'Hult Prize Sprint Archive 2' },
  { id: 3, src: '/archive_03.webp', alt: 'Hult Prize Sprint Archive 3' },
  { id: 4, src: '/archive_04.webp', alt: 'Hult Prize Sprint Archive 4' }
];

// Two identical sets of 8 photos for seamless infinite horizontal loop
const PHOTO_SET = [...ARCHIVE_PHOTOS, ...ARCHIVE_PHOTOS];
const SCROLLING_PHOTOS = [...PHOTO_SET, ...PHOTO_SET];

export const Archives = () => {
  return (
    <section id="archives" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto overflow-hidden">
      <SectionHeader
        pill={content.archives.pill}
        line1={content.archives.headingLine1}
        line2={content.archives.headingLine2}
        accentColor="text-[#E11D48]"
        description={content.archives.desc}
      />

      {/* Infinite Smooth Sideways Auto-Scrolling Photo Track */}
      <div className="relative w-full overflow-hidden py-4 mb-12 select-none">
        {/* Soft atmospheric gradient masks on edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#120205] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#120205] to-transparent z-10" />

        {/* Auto-scrolling Reel (Pauses on hover for comfortable viewing) */}
        <div className="animate-photo-scroll flex items-center gap-5 sm:gap-7">
          {SCROLLING_PHOTOS.map((photo, idx) => (
            <div
              key={`${photo.id}-${idx}`}
              className="rounded-2xl overflow-hidden border-2 border-black bg-[#160309] shadow-[5px_5px_0px_#000] hover:border-[#FFC800] hover:scale-[1.03] transition-all duration-300 flex-shrink-0 cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-64 sm:h-72 md:h-80 lg:h-[340px] xl:h-[370px] w-auto max-w-none object-contain block pointer-events-none"
              />
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
