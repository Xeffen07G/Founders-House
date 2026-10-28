import React, { useState } from 'react';
import { content } from '../content';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-[#1C0509]/90 backdrop-blur-xl border-2 border-black rounded-full px-5 py-2.5 flex items-center justify-between shadow-[4px_4px_0px_#000]">
        
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-[#E11D48] border-2 border-black flex items-center justify-center font-bebas text-white text-base font-bold shadow-[2px_2px_0px_#000]">
            FH
          </span>
          <span className="font-bebas text-xl tracking-wider text-[#FFFFFF] drop-shadow-[2px_2px_0px_#000]">
            FOUNDERS' <span className="text-[#E11D48]">HOUSE</span>
          </span>
        </a>

        {/* Desktop Links: ABOUT, TRACKS, TIMELINE, PRIZES, SQUAD, SPONSORS, FAQ */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#about" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            ABOUT
          </a>
          <a href="#tracks" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            TRACKS
          </a>
          <a href="#route" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            TIMELINE
          </a>
          <a href="#scoreboard" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            SCOREBOARD
          </a>
          <a href="#awards" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            PRIZES
          </a>
          <a href="#squad" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            MENTORS
          </a>
          <a href="#sponsors" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            SPONSORS
          </a>
          <a href="#faq" className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#E11D48] transition-colors">
            FAQ
          </a>
        </div>

        {/* Red & Gold Apply Pill */}
        <div className="flex items-center gap-3">
          <a
            href={content.event.applyLink}
            className="px-5 py-1.5 rounded-full bg-[#E11D48] border-2 border-black text-white font-poppins text-xs tracking-wider font-extrabold shadow-[2px_2px_0px_#000] hover:bg-[#BE123C] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            REGISTER NOW
          </a>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-1.5 text-creamText border-2 border-black rounded-lg bg-[#120205]"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 max-w-sm mx-auto bg-[#1C0509] border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000] flex flex-col gap-3">
          {["ABOUT", "TRACKS", "ROUTE", "SCOREBOARD", "AWARDS", "SQUAD", "SPONSORS", "FAQ"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-mono font-bold py-1.5 px-3 rounded-lg text-[#FFF9F2] hover:bg-[#E11D48] hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
