import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill={content.faq.pill}
        line1={content.faq.headingLine1}
        line2={content.faq.headingLine2}
        accentColor="text-[#E11D48]"
        description={content.faq.desc}
      />

      {/* Two-Column Accordion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {content.faq.questions.map((item, idx) => {
          const isOpen = openIdx === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all border-2 border-black shadow-[4px_4px_0px_#000] ${
                isOpen
                  ? 'bg-[#1C0509] border-[#FFC800]'
                  : 'bg-[#1C0509]/80 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-bebas text-lg sm:text-xl text-white"
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-sm border-2 border-black shadow-[2px_2px_0px_#000] flex-shrink-0 transition-transform ${
                    isOpen
                      ? 'bg-[#E11D48] text-white rotate-45'
                      : 'bg-[#FFC800] text-black'
                  }`}
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-sm font-poppins text-white/80 leading-relaxed border-t border-white/10 pt-4">
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
