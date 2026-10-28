import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Awards = () => {
  return (
    <section id="awards" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill="PRIZES & REWARDS"
        line1="THE GRAND"
        line2="JOSH AWARDS."
        accentColor="text-[#FFE600]"
        description="Over ₹50,00,000+ in pooled seed capital pipeline, AIC Techno incubation fast-track passes, cloud compute credits, and bespoke Kolkata trophies."
      />

      {/* Convergence 1.0 Style Trophy Podiums (2nd, 1st, 3rd) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end my-12 pt-6">
        
        {/* 2nd Place: Sherlock of Startups */}
        <div className="order-2 md:order-1">
          <div className="comic-card p-6 border-2 border-[#19D3F3] text-center flex flex-col justify-between h-80">
            <div>
              <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#19D3F3]/20 text-[#19D3F3] border border-[#19D3F3]">
                RUNNER-UP PRIZE
              </span>
              <div className="text-5xl my-3">🥈</div>
              <h4 className="font-bebas text-2xl text-[#F4F0FF] mb-1 tracking-wide">
                Sherlock of Startups
              </h4>
              <div className="text-sm font-mono text-[#19D3F3] font-bold mb-2">
                ₹40,000 CASH + CLOUD PASS
              </div>
            </div>
            <p className="text-xs font-poppins text-[#F4F0FF]/75 leading-relaxed">
              For the squad demonstrating the sharpest problem-solving deductions and customer validation evidence.
            </p>
          </div>
        </div>

        {/* 1st Place: Startup of the Sprint (Tallest Podium in Center) */}
        <div className="order-1 md:order-2">
          <div className="comic-card p-7 border-3 border-[#FFE600] shadow-comic-yellow text-center flex flex-col justify-between h-96 -translate-y-4">
            <div>
              <span className="font-mono text-xs font-extrabold px-4 py-1 rounded-full bg-[#FFE600] text-black border-2 border-black animate-pulse">
                🏆 GRAND CHAMPION
              </span>
              <div className="text-7xl my-4">🥇</div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-[#FFE600] mb-1 tracking-wide">
                Startup of the Sprint
              </h3>
              <div className="text-base font-mono text-[#FFE600] font-extrabold mb-2">
                ₹1,00,000 CASH + ₹25L INCUBATION
              </div>
            </div>
            <p className="text-xs font-poppins text-[#F4F0FF]/85 leading-relaxed font-medium">
              The supreme honor for the overall most venture-ready, technically ambitious, and relentless builder squad.
            </p>
          </div>
        </div>

        {/* 3rd Place: Best Screenplay */}
        <div className="order-3">
          <div className="comic-card p-6 border-2 border-[#FF2E93] text-center flex flex-col justify-between h-72">
            <div>
              <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full bg-[#FF2E93]/20 text-[#FF2E93] border border-[#FF2E93]">
                SPECIAL JURY AWARD
              </span>
              <div className="text-5xl my-3">🎭</div>
              <h4 className="font-bebas text-2xl text-[#F4F0FF] mb-1 tracking-wide">
                Best Screenplay & Story
              </h4>
              <div className="text-sm font-mono text-[#FF2E93] font-bold mb-2">
                ₹35,000 CASH + GTM BUNDLE
              </div>
            </div>
            <p className="text-xs font-poppins text-[#F4F0FF]/75 leading-relaxed">
              For unparalleled storytelling, charismatic communication, and presentation mastery on the main stage.
            </p>
          </div>
        </div>
      </div>

      {/* Grid of Category Awards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {[
          { name: "Chanakya Award", cat: "Unit Economics", prize: "Trophy + Mentorship" },
          { name: "Phoenix Award", cat: "Sprint Pivot", prize: "Trophy + AWS Credits" },
          { name: "Nari Shakti Award", cat: "Women In Tech", prize: "Trophy + Special Grant" },
          { name: "Innovation Ratan", cat: "Deep Tech & AI", prize: "Trophy + GitHub Enterprise" },
          { name: "Sustain-o-ward", cat: "SDG & Climate", prize: "Trophy + Impact Pass" },
          { name: "Jury's Choice", cat: "Audience Favorite", prize: "Trophy + Hardware Kit" },
        ].map((item, idx) => (
          <div key={idx} className="comic-card p-4 hover:border-[#7CFF3A] transition-colors">
            <div className="font-bebas text-lg text-[#7CFF3A] tracking-wide mb-1">
              ✦ {item.name}
            </div>
            <div className="font-mono text-xs text-[#F4F0FF]/80 mb-2">
              {item.cat}
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-[#FFE600] border border-[#FFE600]/30 font-bold">
              {item.prize}
            </span>
          </div>
        ))}
      </div>

      {/* Tenida Boisterous Speech Bubble */}
      <div className="comic-speech-bubble flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">🥟</span>
        <div className="text-xs sm:text-sm font-poppins text-[#F4F0FF]">
          <span className="text-[#FF2E93] font-bold">TENIDA'S CHEER: </span>
          "Dey shingara! Win the grand trophy, grab the incubation cheque, and treat the whole room to Darjeeling tea!"
        </div>
      </div>
    </section>
  );
};
