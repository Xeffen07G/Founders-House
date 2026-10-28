import React, { useState } from 'react';
import { content } from '../content';

export const Navbar = ({ currentRoute = 'home', onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, targetHash) => {
    if (targetHash === '#/scoreboard' || targetHash === '#scoreboard') {
      window.location.hash = '#/scoreboard';
    } else {
      window.location.hash = targetHash;
    }
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-6xl mx-auto bg-[#1C0509]/95 backdrop-blur-xl border-2 border-black rounded-full px-5 py-2.5 flex items-center justify-between shadow-[4px_4px_0px_#000]">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-8 h-8 rounded-full bg-[#E11D48] border-2 border-black flex items-center justify-center font-bebas text-white text-base font-bold shadow-[2px_2px_0px_#000] group-hover:bg-[#FFC800] group-hover:text-black transition-colors">
            FH
          </span>
          <span className="font-bebas text-xl tracking-wider text-[#FFFFFF] drop-shadow-[2px_2px_0px_#000]">
            FOUNDERS' <span className="text-[#E11D48]">HOUSE</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#venue"
            onClick={(e) => handleLinkClick(e, '#venue')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            VENUE
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#tracks"
            onClick={(e) => handleLinkClick(e, '#tracks')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            TRACKS
          </a>
          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            TIMELINE
          </a>

          {/* DEDICATED SCOREBOARD LINK */}
          <a
            href="#/scoreboard"
            onClick={(e) => handleLinkClick(e, '#/scoreboard')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold tracking-wider transition-all border-2 border-black ${
              currentRoute === 'scoreboard'
                ? 'bg-[#FFC800] text-black shadow-[2px_2px_0px_#000]'
                : 'bg-[#2A080E] text-[#FFC800] hover:bg-[#E11D48] hover:text-white'
            }`}
          >
            ✦ SCOREBOARD
          </a>

          <a
            href="#awards"
            onClick={(e) => handleLinkClick(e, '#awards')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            PRIZES
          </a>
          <a
            href="#squad"
            onClick={(e) => handleLinkClick(e, '#squad')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            MENTORS
          </a>
          <a
            href="#sponsors"
            onClick={(e) => handleLinkClick(e, '#sponsors')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            SPONSORS
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* Red & Gold Apply Pill */}
        <div className="flex items-center gap-3">
          <a
            href={content.event.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-1.5 rounded-full bg-[#E11D48] border-2 border-black text-white font-poppins text-xs tracking-wider font-extrabold shadow-[2px_2px_0px_#000] hover:bg-[#BE123C] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            REGISTER NOW
          </a>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#2A080E] border-2 border-black text-white hover:text-[#FFC800]"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 max-w-6xl mx-auto bg-[#1C0509] border-2 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000] flex flex-col gap-3.5">
          <a
            href="#venue"
            onClick={(e) => handleLinkClick(e, '#venue')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            📍 VENUE (OFFBEAT CCU)
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            🕵️‍♂️ ABOUT & FELUDA ADDABAZI
          </a>
          <a
            href="#tracks"
            onClick={(e) => handleLinkClick(e, '#tracks')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            🎯 MISSION TRACKS
          </a>
          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            🚊 TIMELINE & TRAM ROUTE
          </a>
          <a
            href="#/scoreboard"
            onClick={(e) => handleLinkClick(e, '#/scoreboard')}
            className="text-sm font-mono font-bold text-[#FFC800] bg-[#2A080E] p-2 rounded-lg border border-[#FFC800]/40 flex items-center justify-between"
          >
            <span>✦ LIVE SCOREBOARD PAGE</span>
            <span className="text-xs bg-[#E11D48] text-white px-2 py-0.5 rounded font-mono">NEW</span>
          </a>
          <a
            href="#awards"
            onClick={(e) => handleLinkClick(e, '#awards')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            🏆 PRIZES & GRANTS
          </a>
          <a
            href="#squad"
            onClick={(e) => handleLinkClick(e, '#squad')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            👥 MENTORS & SQUAD
          </a>
          <a
            href="#sponsors"
            onClick={(e) => handleLinkClick(e, '#sponsors')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1 border-b border-white/10"
          >
            🤝 SPONSORS
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className="text-sm font-mono font-bold text-white hover:text-[#FFC800] py-1"
          >
            ❓ FAQ
          </a>
        </div>
      )}
    </nav>
  );
};
