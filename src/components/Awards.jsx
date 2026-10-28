import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Awards = () => {
  return (
    <section id="awards" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill="PRIZES & REWARDS"
        line1="THE GRAND"
        line2="JOSH AWARDS."
        accentColor="text-[#FFC800]"
        description="Over ₹50,00,000+ in pooled seed capital pipeline, AIC Techno incubation fast-track passes, cloud compute credits, and bespoke Kolkata trophies."
      />

      {/* Convergence 1.0 Style Trophy Podiums (2nd, 1st, 3rd) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end my-16 pt-6">
        
        {/* 2nd Place: Sherlock of Startups */}
        <div className="order-2 md:order-1">
          <div className="comic-card p-7 border-2 border-[#19D3F3] bg-[#1C0509] text-center flex flex-col justify-between h-84 shadow-[6px_6px_0px_#000]">
            <div>
              <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#19D3F3]/20 text-[#19D3F3] border border-[#19D3F3]">
                RUNNER-UP PRIZE
              </span>
              <div className="text-5xl my-4">🥈</div>
              <h4 className="font-bebas text-2xl text-white mb-1 tracking-wide">
                Sherlock of Startups
              </h4>
              <div className="text-sm font-mono text-[#19D3F3] font-bold mb-3">
                ₹40,000 CASH + CLOUD PASS
              </div>
            </div>
            <p className="text-xs font-poppins text-white/75 leading-relaxed">
              For the squad demonstrating the sharpest problem-solving deductions and customer validation evidence.
            </p>
          </div>
        </div>

        {/* 1st Place: Startup of the Sprint (Tallest Podium in Center) */}
        <div className="order-1 md:order-2">
          <div className="comic-card p-8 border-3 border-[#FFC800] bg-[#1C0509] shadow-[8px_8px_0px_#FFC800] text-center flex flex-col justify-between h-96 -translate-y-4">
            <div>
              <span className="font-mono text-xs font-extrabold px-4 py-1.5 rounded-full bg-[#FFC800] text-black border-2 border-black animate-pulse">
                🏆 GRAND CHAMPION
              </span>
              <div className="text-7xl my-4">🥇</div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-[#FFC800] mb-1 tracking-wide">
                Startup of the Sprint
              </h3>
              <div className="text-base font-mono text-[#FFC800] font-extrabold mb-3">
                ₹1,00,000 CASH + ₹25L INCUBATION
              </div>
            </div>
            <p className="text-xs font-poppins text-white/90 leading-relaxed font-medium">
              The supreme honor for the overall most venture-ready, technically ambitious, and relentless builder squad.
            </p>
          </div>
        </div>

        {/* 3rd Place: Best Screenplay */}
        <div className="order-3">
          <div className="comic-card p-7 border-2 border-[#E11D48] bg-[#1C0509] text-center flex flex-col justify-between h-84 shadow-[6px_6px_0px_#000]">
            <div>
              <span className="font-mono text-[11px] font-bold px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#E11D48] border border-[#E11D48]">
                SPECIAL JURY AWARD
              </span>
              <div className="text-5xl my-4">🎭</div>
              <h4 className="font-bebas text-2xl text-white mb-1 tracking-wide">
                Best Screenplay & Story
              </h4>
              <div className="text-sm font-mono text-[#E11D48] font-bold mb-3">
                ₹35,000 CASH + GTM BUNDLE
              </div>
            </div>
            <p className="text-xs font-poppins text-white/75 leading-relaxed">
              For unparalleled storytelling, charismatic communication, and presentation mastery on the main stage.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Category Awards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
        {[
          { name: "Chanakya Award", cat: "Unit Economics", prize: "Trophy + Mentorship" },
          { name: "Phoenix Award", cat: "Sprint Pivot", prize: "Trophy + AWS Credits" },
          { name: "Nari Shakti Award", cat: "Women In Tech", prize: "Trophy + Special Grant" },
          { name: "Innovation Ratan", cat: "Deep Tech & AI", prize: "Trophy + GitHub Enterprise" },
          { name: "Sustain-o-ward", cat: "SDG & Climate", prize: "Trophy + Impact Pass" },
          { name: "Jury's Choice", cat: "Audience Favorite", prize: "Trophy + Hardware Kit" },
        ].map((item, idx) => (
          <div key={idx} className="comic-card p-5 bg-[#1C0509] hover:border-[#FFC800] transition-colors">
            <div className="font-bebas text-lg sm:text-xl text-[#FFC800] tracking-wide mb-1">
              ✦ {item.name}
            </div>
            <div className="font-mono text-xs text-white/80 mb-2">
              {item.cat}
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/80 text-[#7CFF3A] border border-[#7CFF3A]/30 font-bold">
              {item.prize}
            </span>
          </div>
        ))}
      </div>

      {/* Tenida Boisterous Speech Bubble */}
      <div className="comic-card p-6 bg-[#1C0509] border-2 border-black flex items-center gap-4 shadow-[4px_4px_0px_#000]">
        <span className="text-3xl flex-shrink-0">🥟</span>
        <div className="text-xs sm:text-sm font-poppins text-white">
          <span className="text-[#E11D48] font-bold font-mono tracking-wider">TENIDA'S CHEER: </span>
          "Dey shingara! Win the grand trophy, grab the incubation cheque at AIC Techno, and treat the whole room to hot Darjeeling tea!"
        </div>
      </div>
    </section>
  );
};
