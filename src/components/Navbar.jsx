import React, { useState, useEffect } from 'react';

export const Navbar = ({ currentRoute = 'home', onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scrollspy: accurately highlights the section currently in view with zero lag
  useEffect(() => {
    if (currentRoute !== 'home') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['venue', 'about', 'tracks', 'route', 'awards', 'team', 'sponsors', 'faq'];
    let ticking = false;
    let lastMatched = '';

    const updateActiveSection = () => {
      // If at or near top of page (hero), clear highlight
      if (window.scrollY < 180) {
        if (lastMatched !== '') {
          lastMatched = '';
          setActiveSection('');
        }
        return;
      }

      // If at bottom of page, highlight FAQ
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        if (lastMatched !== 'faq') {
          lastMatched = 'faq';
          setActiveSection('faq');
        }
        return;
      }

      // Check sections from top trigger offset
      const triggerY = 220;
      let matched = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom > triggerY) {
            matched = id;
            break;
          }
        }
      }

      // Fallback: choose the last section that passed the trigger
      if (!matched) {
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= triggerY) {
              matched = sectionIds[i];
              break;
            }
          }
        }
      }

      if (matched !== lastMatched) {
        lastMatched = matched;
        setActiveSection(matched);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  const handleLinkClick = (e, targetHash) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileOpen(false);

    // 1. Dedicated Scoreboard Page navigation
    if (targetHash === '#/scoreboard' || targetHash === '#scoreboard') {
      window.location.hash = '#/scoreboard';
      if (onNavigate) onNavigate('scoreboard');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setActiveSection('');
      return;
    }

    // Immediate active highlight feedback for clicked section
    const targetId = targetHash.replace(/^#/, '');
    if (targetId && targetId !== 'hero' && targetId !== '/') {
      setActiveSection(targetId);
    } else {
      setActiveSection('');
    }

    // 2. Navigating from Scoreboard back to Landing Page
    if (currentRoute === 'scoreboard') {
      if (onNavigate) onNavigate('home');
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      if (targetHash === '#hero' || targetHash === '#') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    // 3. Smooth scrolling on the landing page without polluting URL hash
    if (targetHash === '#hero' || targetHash === '#') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = (id) => {
    const isActive = activeSection === id;
    return `text-xs font-mono font-bold tracking-wider inline-block transition-all duration-200 flex-shrink-0 whitespace-nowrap ${
      isActive
        ? 'text-[#FFC800] scale-110 drop-shadow-[0_0_8px_rgba(255,200,0,0.85)]'
        : 'text-[#FFF9F2]/65 hover:text-[#FFC800] hover:scale-105'
    }`;
  };

  const mobileLinkClass = (id, hasBorder = true) => {
    const isActive = activeSection === id;
    return `text-sm font-mono font-bold py-1.5 px-1 transition-all flex items-center justify-between ${
      hasBorder ? 'border-b border-white/10' : ''
    } ${
      isActive
        ? 'text-[#FFC800] translate-x-1 drop-shadow-[0_0_6px_rgba(255,200,0,0.7)]'
        : 'text-white/80 hover:text-[#FFC800]'
    }`;
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        
        {/* 1. BRAND / LOGO (Floating Transparent, No Box) */}
        <div className="pointer-events-auto flex items-center translate-x-2 sm:translate-x-3 translate-y-1.5 sm:translate-y-2">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="inline-flex items-center transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            title="Founders' House Kolkata Edition 1.0"
          >
            <img
              src="/founders_house_logo.webp"
              alt="Founders' House Kolkata Edition 1.0"
              width="833"
              height="833"
              className="h-14 sm:h-[70px] md:h-20 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
              loading="eager"
            />
          </a>
        </div>

        {/* 2. ISOLATED NAVIGATION OPTIONS CAPSULE (Dead-Center in the Middle) */}
        <div className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-5 sm:gap-6 bg-[#1C0509]/80 backdrop-blur-xl border-2 border-black rounded-full px-6 py-2 shadow-[4px_4px_0px_#000] flex-nowrap whitespace-nowrap">
          <a
            href="#venue"
            onClick={(e) => handleLinkClick(e, '#venue')}
            className={navLinkClass('venue')}
          >
            VENUE
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className={navLinkClass('about')}
          >
            ABOUT
          </a>
          <a
            href="#tracks"
            onClick={(e) => handleLinkClick(e, '#tracks')}
            className={navLinkClass('tracks')}
          >
            TRACKS
          </a>
          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className={navLinkClass('route')}
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
            className={navLinkClass('awards')}
          >
            PRIZES
          </a>
          <a
            href="#team"
            onClick={(e) => handleLinkClick(e, '#team')}
            className={navLinkClass('team')}
          >
            TEAM
          </a>
          <a
            href="#sponsors"
            onClick={(e) => handleLinkClick(e, '#sponsors')}
            className={navLinkClass('sponsors')}
          >
            SPONSORS
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className={navLinkClass('faq')}
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
              width="748"
              height="127"
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
              width="748"
              height="127"
              className="h-5 w-auto object-contain"
            />
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-full bg-[#1C0509]/80 backdrop-blur-xl border-2 border-black text-white hover:text-[#FFC800] shadow-[3px_3px_0px_#000]"
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
            className={mobileLinkClass('venue')}
          >
            <span>📍 VENUE (OFFBEAT CCU)</span>
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, '#about')}
            className={mobileLinkClass('about')}
          >
            <span>🕵️‍♂️ ABOUT & FELUDA ADDABAZI</span>
          </a>
          <a
            href="#tracks"
            onClick={(e) => handleLinkClick(e, '#tracks')}
            className={mobileLinkClass('tracks')}
          >
            <span>🎯 MISSION TRACKS</span>
          </a>
          <a
            href="#route"
            onClick={(e) => handleLinkClick(e, '#route')}
            className={mobileLinkClass('route')}
          >
            <span>🚊 TIMELINE & TRAM ROUTE</span>
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
            className={mobileLinkClass('awards')}
          >
            <span>🏆 PRIZES & GRANTS</span>
          </a>
          <a
            href="#team"
            onClick={(e) => handleLinkClick(e, '#team')}
            className={mobileLinkClass('team')}
          >
            <span>👥 MEET THE TEAM & JURY</span>
          </a>
          <a
            href="#sponsors"
            onClick={(e) => handleLinkClick(e, '#sponsors')}
            className={mobileLinkClass('sponsors')}
          >
            <span>🤝 SPONSORS</span>
          </a>
          <a
            href="#faq"
            onClick={(e) => handleLinkClick(e, '#faq')}
            className={mobileLinkClass('faq', false)}
          >
            <span>❓ FAQ</span>
          </a>

          {/* Official Partners Capsule inside Drawer */}
          <div className="pt-3 border-t border-white/10 flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Partners & Organizers</span>
            <div className="inline-flex items-center bg-[#FFFFFF] border-2 border-black rounded-full px-3 py-1.5 shadow-[2px_2px_0px_#000]">
              <img
                src="/header_partners_light.webp"
                alt="AIC Techno, Techno India University, Hult Prize TIU"
                width="748"
                height="127"
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
