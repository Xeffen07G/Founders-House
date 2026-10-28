import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill={content.faq.pill}
        line1={content.faq.headingLine1}
        line2={content.faq.headingLine2}
        accentColor="text-neonCyan"
        description={content.faq.desc}
      />

      {/* Two-Column Accordion (Single Column on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.faq.questions.map((item, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all border-2 border-black shadow-sticker ${
                isOpen
                  ? 'bg-[#101838] border-neonCyan'
                  : 'bg-[#080E21] hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base text-creamText"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-sm border border-black shadow-sticker flex-shrink-0 transition-transform ${
                    isOpen
                      ? 'bg-neonCyan text-black rotate-45'
                      : 'bg-neonYellow text-black'
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-sm text-creamText/80 leading-relaxed font-medium border-t border-white/10 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
