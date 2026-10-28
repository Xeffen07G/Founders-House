import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill={content.sponsors.pill}
        line1={content.sponsors.headingLine1}
        line2={content.sponsors.headingLine2}
        accentColor="text-neonLime"
        description={content.sponsors.desc}
      />

      {/* Gold, Silver, Bronze Tiers */}
      <div className="flex flex-col gap-8 mb-12">
        {content.sponsors.tiers.map((tier, tIdx) => (
          <div key={tIdx} className="p-6 rounded-2xl bg-[#080E21] border-2 border-black shadow-sticker">
            <div className={`font-display text-sm tracking-wider mb-4 ${tier.color}`}>
              ✦ {tier.name}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {Array.from({ length: tier.count }).map((_, sIdx) => (
                <div
                  key={sIdx}
                  className="h-20 rounded-xl bg-[#0F1733] border border-white/10 flex items-center justify-center p-3 text-center group hover:border-neonYellow transition-colors"
                >
                  <span className="font-mono text-[10px] text-creamText/50 font-bold uppercase group-hover:text-neonYellow">
                    PARTNER SLOT #{sIdx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* HUD Panel: WANT YOUR LOGO HERE? */}
      <div className="hud-box rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="font-display text-xl sm:text-2xl text-neonYellow mb-2">
              {content.sponsors.hud.title}
            </h4>
            <p className="text-sm text-creamText/80 leading-relaxed font-medium">
              {content.sponsors.hud.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${content.event.email}?subject=Partnership%20Inquiry%20-%20Founders%20House`}
              className="btn-cartoon-yellow"
            >
              {content.sponsors.hud.ctaPartner}
            </a>

            <a
              href="#brochure"
              className="btn-cartoon-outline text-xs"
            >
              {content.sponsors.hud.ctaBrochure}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
