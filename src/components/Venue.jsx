import React from 'react';
import { content } from '../content';

export const Venue = () => {
  return (
    <section id="venue" className="relative w-full py-12 sm:py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center z-10">
      
      {/* Top Header Row matching convergence1.tech layout */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 mb-6 sm:mb-12 relative z-30">
        
        {/* Left Side: Speech / Description Box */}
        <div className="w-full md:w-[55%] lg:w-[60%] flex justify-start order-2 md:order-1">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-[20px] relative w-full h-full flex flex-col justify-center shadow-[4px_4px_0px_#000]">
            <p className="font-comic text-sm sm:text-lg lg:text-xl text-[#FFF9F2]/90 leading-relaxed">
              <span className="block mb-2 sm:mb-3">
                Welcome to the home of Founders' House. The{" "}
                <span className="text-[#FFC800] drop-shadow-[0_0_8px_rgba(255,200,0,0.6)] uppercase tracking-wider font-bold">
                  AIC Techno (Atal Incubation Centre)
                </span>{" "}
                grounds have been unlocked.
              </span>
              <span className="block text-white/70 text-xs sm:text-base">
                Navigate the satellite territory below to discover where the ultimate 72-hour Kolkata hackathon showdown will take place at Offbeat CCU, 36F Topsia Road!
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Pill + Massive Heading */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-start md:items-end text-left md:text-right order-1 md:order-2">
          {/* Pill Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 sm:px-4 py-1 sm:py-1.5 mb-2 sm:mb-4 backdrop-blur-md">
            <span className="font-bebas text-sm sm:text-base tracking-widest uppercase text-white">
              The Arena
            </span>
          </div>

          {/* Huge Bebas Title */}
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-widest leading-[0.9] uppercase select-none drop-shadow-[4px_4px_0px_#000]">
            <span className="block text-white/90">THE ADDA</span>
            <span className="block text-[#E11D48] mt-0 sm:mt-1 lg:mt-2">TERRITORY.</span>
          </h2>
        </div>
      </div>

      {/* Full-width Wide Cinematic Satellite Map Card (Exact convergence1.tech structure) */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
        <a
          href="https://maps.google.com/?q=Offbeat+CCU+36F+Topsia+Road+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video sm:aspect-[4/3] md:aspect-[21/9] rounded-2xl sm:rounded-[20px] border border-white/15 bg-white/5 backdrop-blur-sm group overflow-hidden cursor-pointer shadow-[6px_6px_0px_#000]"
        >
          {/* Satellite Map Layer with smooth hover zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter contrast-125 saturate-110"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80')"
            }}
          />

          {/* Dark Overlay that lightens on hover */}
          <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-500" />

          {/* Subtle Grid Lines Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
              backgroundSize: '36px 36px'
            }}
          />

          {/* Bouncing Pin & Text (Exact Convergence 1.0 placement & animation) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12 sm:-translate-y-24 md:-translate-y-32 flex flex-col items-center pointer-events-none animate-bounce">
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-[#E11D48] drop-shadow-[0_0_12px_rgba(225,29,72,0.9)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bebas text-[11px] sm:text-sm font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-black/60 px-3 py-1 rounded-full border border-white/20">
              AIC TECHNO (OFFBEAT CCU)
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] text-[#FFC800] font-bold tracking-widest mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              36F TOPSIA ROAD, KOLKATA
            </span>
          </div>

          {/* Bottom Satellite Telemetry Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/70 pointer-events-none">
            <span className="px-2.5 py-1 rounded bg-black/70 border border-white/10 text-[#FFC800]">
              📍 22.5415° N, 88.3888° E · EM BYPASS
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded bg-[#E11D48] text-white font-bold">
              CLICK TO OPEN SATELLITE NAVIGATION ↗
            </span>
          </div>
        </a>
      </div>

      {/* Character Quote at Bottom (Exact convergence1.tech Robin quote structure) */}
      <div className="mt-4 sm:mt-8 flex justify-center px-2 sm:px-4 w-full">
        <p className="font-comic text-[11px] sm:text-base md:text-xl text-[#FFC800] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center">
          "If we get lost along the EM Bypass, I'm blaming Topshe's notebook directions entirely."{" "}
          <span className="text-[#E11D48] font-bold ml-1 sm:ml-2">— FELUDA</span>
        </p>
      </div>
    </section>
  );
};
