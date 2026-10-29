import React, { useState, useEffect } from 'react';

// Decoupled critical links to prevent bundling the full below-the-fold content into above-the-fold JS
const APPLY_LINK = '#apply';
const INSTAGRAM_LINK = 'https://www.instagram.com/hustlers_tiu/';

export const Hero = () => {
  // Live Countdown targeting 18 Dec 2026 (exact style from convergence1.tech)
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = new Date('2026-12-18T09:00:00+05:30').getTime();
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((diff % (1000 * 60)) / 1000)
    };
  });

  useEffect(() => {
    const target = new Date('2026-12-18T09:00:00+05:30').getTime();
    const updateCountdown = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    };
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[85vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Radial Crimson & Terracotta Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[650px] bg-gradient-to-b from-[#881337]/40 via-[#4C0519]/25 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Hero Header Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Huge Convergence-style BEBAS NEUE Title in Kolkata Red & Pure White */}
        <div className="relative mb-1 sm:mb-2 inline-block">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bebas uppercase tracking-wide text-[#FFFFFF] select-none drop-shadow-[5px_5px_0px_#000000] leading-[0.9]">
            FOUNDERS'{" "}
            <span className="text-[#E11D48]">HOUSE</span>
          </h1>

          {/* Comic sticker badge in Kolkata Yellow */}
          <div className="absolute -top-6 -right-4 sm:-right-10 bg-[#FFC800] text-black font-bebas text-sm sm:text-base px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] transform rotate-12">
            EDITION 1.0
          </div>
        </div>

        {/* Kolkata in Bengali Comic Sticker (Goa-style Pop Art) */}
        <div className="flex justify-center -mt-1 sm:-mt-2 mb-4 sm:mb-5">
          <img
            src="/kolkata_bengali_sticker.webp"
            alt="কলকাতা (Kolkata)"
            className="h-8 sm:h-10 md:h-12 w-auto object-contain select-none transform -rotate-2 hover:rotate-0 hover:scale-105 transition-transform duration-300 drop-shadow-[3px_3px_0px_#000]"
            width="376"
            height="102"
          />
        </div>

        {/* Subtitle / Tagline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#FFF9F2]/90 font-poppins font-medium leading-relaxed mb-6 sm:mb-7">
          Kolkata's most relentless 72 hour startup sprint. 10 elite squads live on site at AIC Techno (Offbeat CCU), crack raw mentor problems, build real products, and pitch live to venture syndicates.
        </p>

        {/* Live Countdown Timer in Red, White & Gold with tabular-nums (Zero CLS) */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-5 p-3.5 sm:p-5 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[5px_5px_0px_#000] mb-6 sm:mb-7">
          <div className="flex flex-col items-center min-w-[44px] sm:min-w-[60px]">
            <span className="font-bebas tabular-nums text-3xl sm:text-5xl text-[#FFFFFF] leading-none">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Days</span>
          </div>
          <span className="font-bebas text-2xl sm:text-3xl text-[#E11D48] mb-3 select-none">:</span>
          <div className="flex flex-col items-center min-w-[44px] sm:min-w-[60px]">
            <span className="font-bebas tabular-nums text-3xl sm:text-5xl text-[#E11D48] leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Hours</span>
          </div>
          <span className="font-bebas text-2xl sm:text-3xl text-[#E11D48] mb-3 select-none">:</span>
          <div className="flex flex-col items-center min-w-[44px] sm:min-w-[60px]">
            <span className="font-bebas tabular-nums text-3xl sm:text-5xl text-[#FFC800] leading-none">
              {String(timeLeft.mins).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Mins</span>
          </div>
          <span className="font-bebas text-2xl sm:text-3xl text-[#E11D48] mb-3 select-none">:</span>
          <div className="flex flex-col items-center min-w-[44px] sm:min-w-[60px]">
            <span className="font-bebas tabular-nums text-3xl sm:text-5xl text-[#FFFFFF] leading-none">
              {String(timeLeft.secs).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Secs</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#E11D48] hover:bg-[#BE123C] text-white font-poppins font-extrabold text-sm py-3 px-8 rounded-full border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>REGISTER NOW</span>
            <span className="text-xs bg-black text-[#FFC800] px-2 py-0.5 rounded-full font-mono">
              ₹0 ENTRY
            </span>
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-poppins font-bold text-sm py-3 px-8 rounded-full border-2 border-white shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            JOIN COMMUNITY ↗
          </a>
        </div>

        {/* Character Dialogue Box: Feluda speaks */}
        <div className="max-w-2xl mx-auto comic-speech-bubble flex items-center gap-3.5 text-left mb-4">
          <span className="text-2xl flex-shrink-0">🔍</span>
          <div className="text-xs sm:text-sm font-poppins font-medium text-[#FFF9F2]">
            <span className="text-[#FFC800] font-bold">FELUDA SPEAKS: </span>
            "No slides without code. At Founders' House, we demand authentic customer proof and working terminals before you face the jury."
          </div>
        </div>

        {/* Satyajit Ray dialogue */}
        <div className="max-w-2xl mx-auto comic-speech-bubble flex items-center gap-3.5 text-left mb-6" style={{ boxShadow: '4px 4px 0px #E11D48' }}>
          <span className="text-2xl flex-shrink-0">🎬</span>
          <div className="text-xs sm:text-sm font-poppins font-medium text-[#FFF9F2]">
            <span className="text-[#E11D48] font-bold">SATYAJIT RAY'S DIRECTION: </span>
            "Every frame of your pitch must tell a story. The audience should feel your product, not just see it. That is cinema. That is entrepreneurship."
          </div>
        </div>

        {/* Event Meta Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {["18 TO 20 DEC 2026", "AIC TECHNO (OFFBEAT CCU)", "10 FINALIST TEAMS", "PAN INDIA STUDENTS"].map((chip, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-lg bg-[#1C0509] border border-white/20 text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 shadow-[2px_2px_0px_#000]"
            >
              ✦ {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
