import React from 'react';
import { SectionHeader } from './SectionHeader';

export const Awards = () => {
  return (
    <section id="awards" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill="PRIZES & REWARDS"
        line1="THE GRAND"
        line2="JOSH AWARDS."
        accentColor="text-[#FFC800]"
        description="Prize pool revealing soon. Stay tuned as we unveil the cash awards, incubation scholarships at AIC Techno, cloud compute grants, and trophies."
      />

      {/* Podium Style Awards (2nd, 1st, 3rd) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end my-16 pt-6">
        
        {/* 2nd Place */}
        <div className="order-2 md:order-1">
          <div className="comic-card p-7 border-2 border-[#19D3F3] bg-[#1C0509] text-center flex flex-col justify-between h-84 shadow-[6px_6px_0px_#000]">
            <div>
              <div className="text-6xl mb-4">🥈</div>
              <h4 className="font-bebas text-3xl text-white mb-1 tracking-wide">
                2nd Prize
              </h4>
              <div className="text-sm font-mono text-[#19D3F3] font-bold mb-3 tracking-wider">
                REVEALING SOON
              </div>
            </div>
            <p className="text-xs font-poppins text-white/75 leading-relaxed">
              For the runner-up squad demonstrating exceptional problem solving deductions, working prototype, and market validation.
            </p>
          </div>
        </div>

        {/* 1st Place (Tallest Podium in Center) */}
        <div className="order-1 md:order-2">
          <div className="comic-card p-8 border-3 border-[#FFC800] bg-[#1C0509] shadow-[8px_8px_0px_#FFC800] text-center flex flex-col justify-between h-96 -translate-y-4">
            <div>
              <div className="text-7xl mb-4">🥇</div>
              <h3 className="font-bebas text-4xl sm:text-5xl text-[#FFC800] mb-1 tracking-wide">
                1st Prize
              </h3>
              <div className="text-base font-mono text-[#FFC800] font-extrabold mb-3 tracking-wider">
                PRIZE POOL REVEALING SOON
              </div>
            </div>
            <p className="text-xs font-poppins text-white/90 leading-relaxed font-medium">
              The supreme championship honor for the overall most venture-ready, technically ambitious, and relentless builder squad.
            </p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="order-3">
          <div className="comic-card p-7 border-2 border-[#E11D48] bg-[#1C0509] text-center flex flex-col justify-between h-84 shadow-[6px_6px_0px_#000]">
            <div>
              <div className="text-6xl mb-4">🥉</div>
              <h4 className="font-bebas text-3xl text-white mb-1 tracking-wide">
                3rd Prize
              </h4>
              <div className="text-sm font-mono text-[#E11D48] font-bold mb-3 tracking-wider">
                REVEALING SOON
              </div>
            </div>
            <p className="text-xs font-poppins text-white/75 leading-relaxed">
              For the second runner-up squad demonstrating outstanding creativity, execution velocity, and presentation mastery.
            </p>
          </div>
        </div>
      </div>

      {/* Tenida Boisterous Speech Bubble */}
      <div className="comic-card p-6 bg-[#1C0509] border-2 border-black flex items-center gap-4 shadow-[4px_4px_0px_#000]">
        <span className="text-3xl flex-shrink-0">🥟</span>
        <div className="text-xs sm:text-sm font-poppins text-white">
          <span className="text-[#E11D48] font-bold font-mono tracking-wider">TENIDA'S CHEER: </span>
          "Dey shingara! The grand prize pool is unboxing soon — get your squad ready for AIC Techno and hot Darjeeling tea!"
        </div>
      </div>
    </section>
  );
};
