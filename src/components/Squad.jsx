import React, { useState, useEffect, useRef } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Squad = () => {
  const [activeTab, setActiveTab] = useState("MENTORS");
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Interaction refs for auto & manual scrolling
  const isInteractingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const scrollAccumulatorRef = useRef(0);
  const resumeTimeoutRef = useRef(null);

  // Preload team member photos so they render instantly with zero network delay or flashing
  useEffect(() => {
    if (content.squad?.spaces?.team?.members) {
      content.squad.spaces.team.members.forEach((m) => {
        if (m.image) {
          const img = new Image();
          img.src = m.image;
        }
      });
    }
  }, []);

  const currentSpace = 
    activeTab === "JURY"
      ? content.squad.spaces.jury
      : activeTab === "ORGANIZING TEAM"
        ? content.squad.spaces.team
        : content.squad.spaces.mentors;

  const isMentors = currentSpace.id === "mentors";
  const isJury = currentSpace.id === "jury";
  const isTeam = currentSpace.id === "team";

  // Center the 1st photo directly in the middle of the screen when Organizing Team is clicked/viewed
  useEffect(() => {
    if (!isTeam) return;

    const measureAndCenter = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const containerW = container.clientWidth;
      const firstCard = track.querySelector('.team-card');
      if (!firstCard) return;

      const cardW = firstCard.offsetWidth;
      // Total track has 3 identical copies: L is the width of exactly 1 copy
      const totalW = track.scrollWidth;
      const L = totalW / 3;

      if (L > 0) {
        // Target: Center Card 0 of the middle set (Set 2) directly at (containerW / 2)
        const targetScrollLeft = L - (containerW / 2) + (cardW / 2);
        container.scrollLeft = targetScrollLeft;
        scrollAccumulatorRef.current = targetScrollLeft;
      }
    };

    const rafId = requestAnimationFrame(measureAndCenter);
    window.addEventListener('resize', measureAndCenter);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', measureAndCenter);
    };
  }, [isTeam, activeTab]);

  // Infinite Auto-Scroll with seamless boundary wrapping
  useEffect(() => {
    if (!isTeam) return;

    let rafId;
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (container && track) {
        const totalW = track.scrollWidth;
        const L = totalW / 3;

        if (L > 0) {
          // Boundary wrapping: seamlessly loop back into middle set (Set 2)
          if (container.scrollLeft >= 2 * L) {
            container.scrollLeft -= L;
            scrollAccumulatorRef.current = container.scrollLeft;
          } else if (container.scrollLeft < L) {
            container.scrollLeft += L;
            scrollAccumulatorRef.current = container.scrollLeft;
          }

          const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
          // Silk-smooth auto-scroll speed: 38px/sec
          const pxPerSecond = 38;

          if (!isInteractingRef.current && !isHoveredRef.current && !isMouseDownRef.current) {
            scrollAccumulatorRef.current += pxPerSecond * dt;
            container.scrollLeft = scrollAccumulatorRef.current;
          } else {
            // Keep accumulator synchronized with user's manual scroll position
            scrollAccumulatorRef.current = container.scrollLeft;
          }
        }
      }

      lastTime = currentTime;
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isTeam, activeTab]);

  // Mouse Drag Handlers for manual scroll
  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    isMouseDownRef.current = true;
    isInteractingRef.current = true;
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollStartRef.current = containerRef.current.scrollLeft;
    dragDistanceRef.current = 0;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current);
    dragDistanceRef.current += Math.abs(walk);
    containerRef.current.scrollLeft = scrollStartRef.current - walk;
    scrollAccumulatorRef.current = containerRef.current.scrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
      }, 1500);
    }
  };

  // Touch Swipe Handlers for mobile manual scroll
  const handleTouchStart = () => {
    isInteractingRef.current = true;
    dragDistanceRef.current = 0;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1500);
  };

  // Wheel / Trackpad Handler
  const handleWheel = () => {
    isInteractingRef.current = true;
    if (containerRef.current) {
      scrollAccumulatorRef.current = containerRef.current.scrollLeft;
    }
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1500);
  };

  // Theme accents
  const accentColor = isMentors ? "#FFC800" : isJury ? "#E11D48" : "#19D3F3";
  const glowBorder = isMentors ? "group-hover:border-[#FFC800]" : isJury ? "group-hover:border-[#E11D48]" : "group-hover:border-[#19D3F3]";

  return (
    <section id="team" className="py-24 sm:py-32 px-4 max-w-7xl mx-auto relative scroll-mt-20">
      {/* Invisible anchor for backward compatibility with #squad links */}
      <span id="squad" className="absolute -top-24 left-0 pointer-events-none" aria-hidden="true" />

      {/* Main Section Header */}
      <SectionHeader
        pill={content.squad.pill}
        line1={content.squad.headingLine1}
        line2={content.squad.headingLine2}
        accentColor="text-[#E11D48]"
        description={content.squad.desc}
      />

      {/* Direct Space Switcher Tabs (Mentors, Jury, Organizing Team) */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-12 overflow-x-auto pb-2 scrollbar-none">
        {content.squad.tabs.map((tab) => {
          const isActive = activeTab === tab;
          let activeBg = 'bg-[#FFC800] text-black border-black';
          if (tab === "JURY") activeBg = 'bg-[#E11D48] text-white border-black';
          if (tab === "ORGANIZING TEAM") activeBg = 'bg-[#19D3F3] text-black border-black';

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-5 sm:px-7 py-3 rounded-full font-bebas text-base sm:text-lg tracking-wider border-2 shadow-[3px_3px_0px_#000] transition-all whitespace-nowrap flex items-center gap-2.5 select-none ${
                isActive
                  ? `${activeBg} font-extrabold -translate-y-0.5 shadow-[5px_5px_0px_#000]`
                  : 'bg-[#1C0509] text-white/75 border-black hover:text-white hover:bg-[#2A080E] hover:-translate-y-0.5'
              }`}
            >
              {tab === "MENTORS" && <span>🎓</span>}
              {tab === "JURY" && <span>⚖️</span>}
              {tab === "ORGANIZING TEAM" && <span>⚡</span>}
              <span>{tab}</span>
            </button>
          );
        })}
      </div>

      {/* Active Space Container */}
      <div
        key={currentSpace.id}
        className="p-6 sm:p-8 rounded-3xl bg-[#140407]/90 border-2 border-black shadow-[6px_6px_0px_#000] relative overflow-hidden transition-all duration-300"
        style={{
          background: 'linear-gradient(180deg, rgba(28, 5, 9, 0.95) 0%, rgba(18, 2, 5, 0.98) 100%)'
        }}
      >
        {/* Top Accent Strip */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 transition-colors duration-300"
          style={{ backgroundColor: accentColor }}
        />

        {/* Space Title Header */}
        <div className="pb-4 mb-6 sm:mb-8 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-2xl sm:text-4xl font-bebas text-white tracking-wider">
            {currentSpace.title}
          </h3>
        </div>

        {/* Space Cards: Interactive Moving Carousel for Team, Responsive Grid for Mentors & Jury */}
        {isTeam ? (
          <div className="relative w-full py-2 sm:py-4">
            {/* Subtle fade edges for cinematic marquee transition */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-r from-[#140407] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-12 bg-gradient-to-l from-[#140407] to-transparent z-10" />

            {/* Scrollable container with mouse drag, touch swipe, trackpad wheel, and auto-scroll */}
            <div
              ref={containerRef}
              key={activeTab}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={() => {
                handleMouseUpOrLeave();
                isHoveredRef.current = false;
              }}
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              className="w-full overflow-x-auto select-none cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-2"
            >
              {/* Continuous track with tripled array: Set 2 Card 0 (Prince Shaw) starts centered */}
              <div ref={trackRef} className="flex items-stretch gap-5 sm:gap-7 w-max py-2">
                {[...currentSpace.members, ...currentSpace.members, ...currentSpace.members].map((member, idx) => {
                  const CardWrapper = member.linkedin ? 'a' : 'div';
                  return (
                    <CardWrapper
                      key={idx}
                      {...(member.linkedin
                        ? {
                            href: member.linkedin,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            title: `Open ${member.name}'s LinkedIn profile`,
                            onClickCapture: (e) => {
                              if (dragDistanceRef.current > 8) {
                                e.preventDefault();
                                e.stopPropagation();
                              }
                            }
                          }
                        : {})}
                      className={`team-card w-[230px] sm:w-[270px] flex-shrink-0 p-4 sm:p-5 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[5px_5px_0px_#000] text-center flex flex-col items-center justify-between relative overflow-hidden group hover:border-[#19D3F3] transition-all duration-300 hover:-translate-y-2 select-none ${
                        member.linkedin ? 'cursor-pointer' : ''
                      }`}
                    >
                      {/* Photo in prominent high-impact portrait frame */}
                      <div className="w-full relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-black shadow-[3px_3px_0px_#000] mb-4 bg-[#120205]">
                        <img
                          src={member.image}
                          alt={member.name}
                          width="270"
                          height="360"
                          className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                          loading="eager"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        {member.linkedin && (
                          <div className="absolute top-2.5 right-2.5 bg-[#0077B5] text-white p-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_#000] opacity-80 group-hover:opacity-100 transition-opacity">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Member Name */}
                      <div className="w-full text-center pb-1">
                        <h4 className="font-poppins font-extrabold text-base sm:text-xl text-white tracking-wide group-hover:text-[#19D3F3] transition-colors whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-center gap-1.5">
                          <span>{member.name}</span>
                          {member.linkedin && (
                            <span className="text-[11px] text-[#19D3F3] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                          )}
                        </h4>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className={`grid grid-cols-2 sm:grid-cols-3 ${isJury ? 'lg:grid-cols-5' : 'lg:grid-cols-6'} gap-4 sm:gap-6`}>
            {currentSpace.dossiers.map((dossier, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[4px_4px_0px_#000] text-center flex flex-col items-center justify-between min-h-[260px] sm:min-h-[280px] relative overflow-hidden group ${glowBorder} transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Top Stamp */}
                <div className="w-full flex items-center justify-between mb-2">
                  <span
                    className="font-mono text-[9px] font-extrabold px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]"
                    style={{
                      backgroundColor: `${accentColor}25`,
                      color: accentColor
                    }}
                  >
                    {dossier.tag}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">#{idx + 1}</span>
                </div>

                {/* Silhouette Figure */}
                <div className="my-2 relative">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#120205] border-2 border-dashed border-white/20 flex items-center justify-center text-3xl sm:text-4xl filter grayscale opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      boxShadow: `0 0 15px ${accentColor}15`
                    }}
                  >
                    {isMentors && "👤"}
                    {isJury && "💼"}
                  </div>
                  {/* Subtle pulse ring on hover */}
                  <div
                    className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ borderColor: accentColor }}
                  />
                </div>

                {/* Dossier Code & Role Domain */}
                <div className="w-full mt-2">
                  <div className="font-bebas text-xs sm:text-sm text-white/90 tracking-wider mb-1">
                    {dossier.code}
                  </div>
                  <div className="text-xs font-poppins font-bold text-white leading-tight min-h-[32px] flex items-center justify-center">
                    {dossier.domain}
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="w-full pt-3 mt-2 border-t border-white/10 flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                  <span className="font-mono text-[9px] sm:text-[10px] text-white/60 font-semibold tracking-wider">
                    REVEALING SOON
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Invite Box: Join as Mentor / Jury / Organizer */}
      <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[6px_6px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="flex items-center gap-4 text-left">
          <span className="text-4xl sm:text-5xl flex-shrink-0">🤝</span>
          <div>
            <h4 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
              WANT TO MENTOR, EVALUATE, OR JOIN MISSION CONTROL?
            </h4>
            <p className="font-poppins text-xs sm:text-sm text-white/70 mt-1 max-w-2xl">
              Founders' House welcomes experienced tech operators, venture syndicate leaders, and student hustlers across Kolkata and India.
            </p>
          </div>
        </div>

        <a
          href="mailto:official.hultprize.tiu@gmail.com?subject=Founders%20House%20-%20Mentor%20%2F%20Jury%20%2F%20Team%20Inquiry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-[#FFC800] hover:bg-[#FFE600] text-black font-poppins font-extrabold text-xs sm:text-sm border-2 border-black shadow-[3px_3px_0px_#000] hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap flex-shrink-0"
        >
          CONNECT WITH THE TEAM ↗
        </a>
      </div>
    </section>
  );
};