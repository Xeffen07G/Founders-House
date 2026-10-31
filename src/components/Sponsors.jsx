import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill={content.sponsors.pill}
        line1={content.sponsors.headingLine1}
        line2={content.sponsors.headingLine2}
        accentColor="text-[#FFC800]"
        description={content.sponsors.desc}
      />

      {/* Gold, Silver, Bronze Tiers */}
      <div className="flex flex-col gap-10 mb-16">
        {content.sponsors.tiers.map((tier, tIdx) => (
          <div key={tIdx} className="p-8 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[6px_6px_0px_#000]">
            <div className={`font-bebas text-lg sm:text-xl tracking-wider mb-6 ${
              tIdx === 0 ? 'text-[#FFC800]' : tIdx === 1 ? 'text-[#19D3F3]' : 'text-[#E11D48]'
            }`}>
              ✦ {tier.name}
            </div>

            <div className={`grid gap-4 sm:gap-6 ${
              tIdx === 0
                ? 'grid-cols-1 sm:grid-cols-3'
                : tIdx === 1
                ? 'grid-cols-2 sm:grid-cols-4'
                : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
            }`}>
              {Array.from({ length: tier.count }).map((_, sIdx) => {
                const partner = tier.partners && tier.partners[sIdx];
                if (partner) {
                  return (
                    <a
                      key={sIdx}
                      href={partner.url || '#'}
                      target={partner.url?.startsWith('http') ? '_blank' : undefined}
                      rel={partner.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      title={`Visit ${partner.name}`}
                      className="h-28 sm:h-32 rounded-xl bg-white border-2 border-black flex items-center justify-center p-4 text-center group hover:border-[#FFC800] hover:scale-[1.02] shadow-[4px_4px_0px_#000] hover:shadow-[5px_5px_0px_#FFC800] transition-all cursor-pointer overflow-hidden select-none"
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-20 sm:max-h-24 w-auto max-w-full object-contain filter group-hover:contrast-115 transition-all pointer-events-none"
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  );
                }
                return (
                  <div
                    key={sIdx}
                    className={`${tIdx === 0 ? 'h-28 sm:h-32' : 'h-24'} rounded-xl bg-[#120205] border border-white/10 flex items-center justify-center p-3 text-center group hover:border-[#FFC800] transition-colors`}
                  >
                    <span className="font-mono text-[11px] text-white/50 font-bold uppercase group-hover:text-[#FFC800]">
                      PARTNER SLOT #{sIdx + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* HUD Panel: WANT YOUR LOGO HERE? */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[6px_6px_0px_#000]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="font-bebas text-2xl sm:text-3xl text-[#FFC800] mb-3">
              {content.sponsors.hud.title}
            </h4>
            <p className="text-sm font-poppins text-white/80 leading-relaxed">
              {content.sponsors.hud.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${content.event.email}?subject=Partnership%20Inquiry%20-%20Founders%20House`}
              className="px-6 py-3 rounded-full bg-[#FFC800] border-2 border-black text-black font-bebas text-base tracking-wider hover:bg-[#FFE600] shadow-[3px_3px_0px_#000] transition-all"
            >
              {content.sponsors.hud.ctaPartner}
            </a>

            <a
              href={content.sponsors.hud.brochureUrl}
              className="px-6 py-3 rounded-full bg-[#120205] border-2 border-white/20 text-white font-bebas text-base tracking-wider hover:border-[#E11D48] transition-all"
            >
              {content.sponsors.hud.ctaDeck}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
