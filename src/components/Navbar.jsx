import React, { useState } from 'react';

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
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. ISOLATED BRAND / LOGO CAPSULE (Left) */}
        <div className="pointer-events-auto">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="inline-flex items-center gap-2.5 bg-[#1C0509]/95 backdrop-blur-xl border-2 border-black rounded-full px-4 py-2 shadow-[4px_4px_0px_#000] hover:border-[#FFC800] transition-all group"
          >
            <span className="w-8 h-8 rounded-full bg-[#E11D48] border-2 border-black flex items-center justify-center font-bebas text-white text-base font-bold shadow-[2px_2px_0px_#000] group-hover:bg-[#FFC800] group-hover:text-black transition-colors">
              FH
            </span>
            <span className="font-bebas text-xl tracking-wider text-[#FFFFFF] drop-shadow-[2px_2px_0px_#000]">
              FOUNDERS' <span className="text-[#E11D48]">HOUSE</span>
            </span>
          </a>
        </div>

        {/* 2. ISOLATED NAVIGATION OPTIONS CAPSULE (Dead-Center in the Middle) */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-5 sm:gap-6 bg-[#1C0509]/95 backdrop-blur-xl border-2 border-black rounded-full px-6 py-2 shadow-[4px_4px_0px_#000] flex-nowrap whitespace-nowrap">
          <a
            href="#venue"
            onClick={(e) => handleLinkClick(e, '#venue')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            VENUE
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            ABOUT
          </a>
          <a
            href="#tracks"
            onClick={(e) => handleLinkClick(e, '#tracks')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            TRACKS
          </a>
          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            TIMELINE
          </a>

          {/* DEDICATED SCOREBOARD LINK (Strictly single-line, horizontally aligned) */}
          <a
            href="#/scoreboard"
            onClick={(e) => handleLinkClick(e, '#/scoreboard')}
            className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold tracking-wider transition-all border-2 border-black flex-shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 leading-none ${
              currentRoute === 'scoreboard'
                ? 'bg-[#FFC800] text-black shadow-[2px_2px_0px_#000]'
                : 'bg-[#2A080E] text-[#FFC800] hover:bg-[#E11D48] hover:text-white'
            }`}
          >
            <span className="text-[10px] leading-none">✦</span>
            <span className="leading-none">SCOREBOARD</span>
          </a>

          <a
            href="#awards"
            onClick={(e) => handleLinkClick(e, '#awards')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            PRIZES
          </a>
          <a
            href="#squad"
            onClick={(e) => handleLinkClick(e, '#squad')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            MENTORS
          </a>
          <a
            href="#sponsors"
            onClick={(e) => handleLinkClick(e, '#sponsors')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            SPONSORS
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className="text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 hover:text-[#FFC800] transition-colors flex-shrink-0 whitespace-nowrap"
          >
            FAQ
          </a>
        </div>

        {/* 3. PARTNERS LOGO CAPSULE (Top Right on Large Screens) */}
        <div className="pointer-events-auto hidden lg:flex items-center">
          <div
            title="Official Partners: AIC Techno · Techno India University · Hult Prize TIU"
            className="inline-flex items-center bg-[#FFFFFF]/95 hover:bg-[#FFFFFF] backdrop-blur-xl border-2 border-black rounded-full px-3.5 py-1.5 shadow-[4px_4px_0px_#000] hover:border-[#FFC800] hover:shadow-[5px_5px_0px_#FFC800] transition-all group"
          >
            <img
              src="/header_partners_light.webp"
              alt="AIC Techno, Techno India University, Hult Prize TIU"
              width="927"
              height="154"
              className="h-6 xl:h-7 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              loading="eager"
            />
          </div>
        </div>

        {/* 4. MOBILE HAMBURGER & COMPACT LOGO (Right side on small screens) */}
        <div className="pointer-events-auto lg:hidden flex items-center gap-2">
          <div className="hidden sm:inline-flex items-center bg-[#FFFFFF]/95 border-2 border-black rounded-full px-2.5 py-1 shadow-[2px_2px_0px_#000]">
            <img
              src="/header_partners_light.webp"
              alt="AIC Techno, Techno India University, Hult Prize TIU"
              width="927"
              height="154"
              className="h-5 w-auto object-contain"
            />
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-full bg-[#1C0509]/95 backdrop-blur-xl border-2 border-black text-white hover:text-[#FFC800] shadow-[3px_3px_0px_#000]"
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
        <div className="pointer-events-auto lg:hidden mt-3 max-w-sm mx-auto bg-[#1C0509] border-2 border-black rounded-2xl p-5 shadow-[6px_6px_0px_#000] flex flex-col gap-3.5">
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

          {/* Official Partners Capsule inside Drawer */}
          <div className="pt-3 border-t border-white/10 flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Partners & Organizers</span>
            <div className="inline-flex items-center bg-[#FFFFFF] border-2 border-black rounded-full px-3 py-1.5 shadow-[2px_2px_0px_#000]">
              <img
                src="/header_partners_light.webp"
                alt="AIC Techno, Techno India University, Hult Prize TIU"
                width="927"
                height="154"
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
