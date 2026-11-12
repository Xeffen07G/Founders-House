import React, { useState, useEffect, useRef } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Route = () => {
  const [activeStopIdx, setActiveStopIdx] = useState(0);
  const [popupStop, setPopupStop] = useState(null);
  const [pathD, setPathD] = useState('');
  const [trackPoints, setTrackPoints] = useState([]);

  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const tramRef = useRef(null);
  const cardRefs = useRef([]);
  const animStateRef = useRef({
    currentProgress: 0,
    targetProgress: 0,
    isAnimating: false,
    rafId: null,
    cachedTotalLength: 0,
    initialized: false,
  });
  const lastActiveStopRef = useRef(0);

  const stops = content.route.stops;

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPopupStop(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (popupStop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [popupStop]);

  // Compute the curvy Kolkata railway / tram track path (authentic wide S-curve connecting the stations)
  const computeTrackPath = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;
    const containerW = containerRect.width;

    const points = [];

    // Calculate station waypoint connection coordinates directly from each station board
    stops.forEach((_, idx) => {
      const cardEl = cardRefs.current[idx];
      if (!cardEl) return;
      const cardRect = cardEl.getBoundingClientRect();

      let x, y;
      const boardCenterX = cardRect.left - containerRect.left + cardRect.width * 0.5;
      const boardBaseY = cardRect.top - containerRect.top + cardRect.height - 4;

      if (isMobile) {
        // On mobile, waypoints are at the station platform track
        x = Math.max(28, Math.min(containerW - 28, cardRect.left - containerRect.left + 24));
        y = cardRect.top - containerRect.top + cardRect.height * 0.55;
      } else {
        // On desktop, waypoints are directly at the station platform base of each alternating station
        x = Math.max(35, Math.min(containerW - 35, boardCenterX));
        y = boardBaseY;
      }

      points.push({ x, y });
    });

    if (points.length < 2) return;
    setTrackPoints(points);

    // Build the grand serpentine S-Curve starting ON Station 0 (Application Open)
    // with turns ON Shortlist Dossier (Turn 1), Day 1 (Turn 2), Day 2 (Turn 3), and Demo Day (Turn 4)
    let d = '';

    if (isMobile) {
      // Mobile smooth snaking path
      d += `M ${points[0].x} ${points[0].y - 20} `;
      d += `L ${points[0].x} ${points[0].y} `;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const dy = p2.y - p1.y;
        const wave = (i % 2 === 0) ? 28 : -14;
        d += `C ${p1.x + wave} ${p1.y + dy * 0.35}, ${p2.x + wave} ${p1.y + dy * 0.65}, ${p2.x} ${p2.y} `;
      }
      const lastP = points[points.length - 1];
      d += `L ${lastP.x} ${lastP.y + 40}`;
    } else {
      // DESKTOP S-CURVE:
      // Start of the S on Application Open (Station 0)
      const p0 = points[0];
      d += `M ${p0.x} ${p0.y} `;

      for (let i = 0; i < points.length - 1; i++) {
        const pCurr = points[i];
        const pNext = points[i + 1];
        const dy = pNext.y - pCurr.y;
        const isGoingRight = pNext.x > pCurr.x;

        if (i === 0) {
          // From Station 0 (Application Open, left) to Station 1 (Shortlist Dossier, right):
          // First turn is on Shortlist Dossier!
          // Curves gracefully across the screen, swinging smoothly into the turn at Shortlist
          const cp1x = pCurr.x + (pNext.x - pCurr.x) * 0.45;
          const cp1y = pCurr.y + dy * 0.08;
          const cp2x = Math.min(containerW - 20, pNext.x + 35);
          const cp2y = pCurr.y + dy * 0.55;

          d += `C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${pNext.x.toFixed(1)} ${pNext.y.toFixed(1)} `;
        } else {
          // Subsequent turns:
          // Turn 2 on Day 1 (left)
          // Turn 3 on Day 2 (right)
          // Turn 4 on Demo Day (left)
          const outSwing = isGoingRight ? -35 : 35;
          const inSwing = isGoingRight ? 35 : -35;

          const cp1x = Math.max(20, Math.min(containerW - 20, pCurr.x - outSwing));
          const cp1y = pCurr.y + dy * 0.42;
          const cp2x = Math.max(20, Math.min(containerW - 20, pNext.x + inSwing));
          const cp2y = pCurr.y + dy * 0.58;

          d += `C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${pNext.x.toFixed(1)} ${pNext.y.toFixed(1)} `;
        }
      }

      // Smooth buffer stop past Demo Day
      const lastP = points[points.length - 1];
      d += `L ${lastP.x.toFixed(1)} ${(lastP.y + 45).toFixed(1)}`;
    }

    setPathD(d);
  };

  // Recompute path on resize & mount
  useEffect(() => {
    // Immediate compute to prevent layout shift
    computeTrackPath();
    const rafId = requestAnimationFrame(() => {
      computeTrackPath();
    });

    const handleResize = () => {
      computeTrackPath();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      resizeObserver = new ResizeObserver(() => {
        computeTrackPath();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Silky-smooth hardware-accelerated tram animation along the curvy track
  // Programmatic damped lerp ensures that even during violent/fast scroll, the tram stays 100% on track
  useEffect(() => {
    if (!pathRef.current || !containerRef.current) return;

    let tl = 0;
    try {
      tl = pathRef.current.getTotalLength();
    } catch {
      tl = 0;
    }
    if (!tl || isNaN(tl) || tl <= 0) return;
    animStateRef.current.cachedTotalLength = tl;

    const applyTramPosition = (progress) => {
      if (!pathRef.current || !tramRef.current) return;
      const totalLen = animStateRef.current.cachedTotalLength;
      if (!totalLen) return;

      const currentDist = Math.max(0, Math.min(totalLen, progress * totalLen));
      const pt = pathRef.current.getPointAtLength(currentDist);

      // Smooth tangent angle calculation using 6px lookahead/behind to simulate bogie orientation
      const delta = 6;
      let p1, p2;
      if (currentDist >= totalLen - delta) {
        p1 = pathRef.current.getPointAtLength(Math.max(0, totalLen - delta));
        p2 = pathRef.current.getPointAtLength(totalLen);
      } else {
        p1 = pt;
        p2 = pathRef.current.getPointAtLength(currentDist + delta);
      }
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);

      tramRef.current.setAttribute(
        'transform',
        `translate(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)}) rotate(${angle.toFixed(2)})`
      );

      // Automatically highlight active station based on train progress (only triggers state when index changes)
      const stationIndex = Math.min(
        stops.length - 1,
        Math.floor(progress * stops.length * 1.05)
      );
      if (stationIndex !== lastActiveStopRef.current) {
        lastActiveStopRef.current = stationIndex;
        setActiveStopIdx(stationIndex);
      }
    };

    const runAnimation = () => {
      const state = animStateRef.current;
      const diff = state.targetProgress - state.currentProgress;

      if (Math.abs(diff) < 0.0004) {
        state.currentProgress = state.targetProgress;
        applyTramPosition(state.currentProgress);
        state.isAnimating = false;
        state.rafId = null;
        return;
      }

      // Adaptive lerp factor:
      // When scrolling very fast (large diff), swiftly glide along the track (up to 0.28)
      // When scrolling slowly (small diff), smooth responsive tracking (0.16)
      const absDiff = Math.abs(diff);
      const lerpFactor = Math.min(0.28, 0.16 + absDiff * 0.18);
      state.currentProgress += diff * lerpFactor;

      applyTramPosition(state.currentProgress);
      state.rafId = requestAnimationFrame(runAnimation);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when route section enters middle of screen, finish as it exits
      const totalTravel = rect.height;
      const currentScroll = windowHeight * 0.65 - rect.top;
      const target = Math.max(0, Math.min(1, currentScroll / totalTravel));

      animStateRef.current.targetProgress = target;

      // On first run or mount, place tram immediately on track without animation lag
      if (!animStateRef.current.initialized) {
        animStateRef.current.initialized = true;
        animStateRef.current.currentProgress = target;
        applyTramPosition(target);
        return;
      }

      // If animation loop is not currently running, trigger it
      if (!animStateRef.current.isAnimating) {
        animStateRef.current.isAnimating = true;
        animStateRef.current.rafId = requestAnimationFrame(runAnimation);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animStateRef.current.rafId) {
        cancelAnimationFrame(animStateRef.current.rafId);
        animStateRef.current.rafId = null;
      }
      animStateRef.current.isAnimating = false;
    };
  }, [pathD]);

  const openStationPopup = (stop, idx) => {
    setActiveStopIdx(idx);
    setPopupStop(stop);
  };

  const closePopup = () => {
    setPopupStop(null);
  };

  const goToNextStation = () => {
    if (!popupStop) return;
    const currentIdx = stops.findIndex((s) => s.id === popupStop.id);
    const nextIdx = (currentIdx + 1) % stops.length;
    setActiveStopIdx(nextIdx);
    setPopupStop(stops[nextIdx]);
  };

  const goToPrevStation = () => {
    if (!popupStop) return;
    const currentIdx = stops.findIndex((s) => s.id === popupStop.id);
    const prevIdx = (currentIdx - 1 + stops.length) % stops.length;
    setActiveStopIdx(prevIdx);
    setPopupStop(stops[prevIdx]);
  };

  return (
    <section id="route" className="py-20 sm:py-28 px-4 max-w-5xl mx-auto relative overflow-hidden">
      <SectionHeader
        pill="KOLKATA RAILWAY SPRINT LINE"
        line1="THE SPRINT"
        line2="ROUTE & STATIONS."
        accentColor="text-[#FFC800]"
        description="Hop onto the Kolkata broad gauge line. Each station is an authentic cartoon station board on twin striped pillars. Click any station board to pop up its full activities docket and mission briefing."
      />

      {/* Main Track & Station Boards Container */}
      <div ref={containerRef} className="relative mt-10 sm:mt-16 pb-12">
        {/* ============================================================== */}
        {/* CURVY SVG CARTOON RAILWAY TRACK & ANIMATED SCROLLING TRAM      */}
        {/* ============================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Front Headlight Light Cone Gradient */}
            <linearGradient id="tramHeadlight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FFC800" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#FFD700" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFC800" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Layer 1: Dark Gravel Ballast Bed (Smooth Curvy Track) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#1C0509"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 2: Wooden Sleepers (Rail Ties) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#3D1808"
              strokeWidth="13"
              strokeDasharray="3 9"
              strokeLinecap="butt"
              opacity="0.95"
            />
          )}

          {/* Layer 3: Steel Rails Base Outline */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#0B0A12"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 4: Dual Steel Rails (Polished Silver) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 5: Inner Ballast Cutout (Produces parallel steel rails) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#140306"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 6: Golden Tram Rail Glow */}
          {pathD && (
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="#FFC800"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
          )}

          {/* Station Waypoint Hubs on Track */}
          {trackPoints.map((pt, pIdx) => {
            const isPassed = pIdx < activeStopIdx;
            const isCurrent = pIdx === activeStopIdx;

            return (
              <g key={pIdx} transform={`translate(${pt.x}, ${pt.y})`}>
                <circle
                  r="9"
                  fill="#140306"
                  stroke="#000000"
                  strokeWidth="2"
                />
                <circle
                  r="7"
                  fill="#1F070B"
                  stroke={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                  strokeWidth="2"
                />
                <circle
                  r="3.5"
                  fill={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                />
              </g>
            );
          })}

          {/* ============================================================== */}
          {/* CARTOON KOLKATA HERITAGE TRAM / STREETCAR                      */}
          {/* ============================================================== */}
          {pathD && (
            <g
              ref={tramRef}
              style={{ willChange: 'transform' }}
            >
              {/* Headlight Beam spreading forward onto the curvy track */}
              <polygon
                points="20,-4 65,-18 65,18 20,4"
                fill="url(#tramHeadlight)"
                opacity="0.85"
              />

              {/* Cartoon Steam Puffs Drifting from Locomotive Exhaust */}
              <circle cx="-24" cy="0" r="3.5" fill="#FFFFFF" opacity="0.75" />
              <circle cx="-33" cy="0" r="4.8" fill="#FFFFFF" opacity="0.5" />
              <circle cx="-44" cy="0" r="6" fill="#FFFFFF" opacity="0.25" />

              {/* Tram Drop Shadow */}
              <rect
                x="-20"
                y="-11"
                width="41"
                height="22"
                rx="5"
                fill="#000000"
                opacity="0.55"
              />

              {/* Steel Rail Wheels (On twin rails, perfectly hugging the track) */}
              <circle cx="-12" cy="-9.5" r="2" fill="#0F172A" stroke="#000000" strokeWidth="0.8" />
              <circle cx="12" cy="-9.5" r="2" fill="#0F172A" stroke="#000000" strokeWidth="0.8" />
              <circle cx="-12" cy="9.5" r="2" fill="#0F172A" stroke="#000000" strokeWidth="0.8" />
              <circle cx="12" cy="9.5" r="2" fill="#0F172A" stroke="#000000" strokeWidth="0.8" />

              {/* Tram Main Chassis (Iconic Kolkata Streetcar Green) */}
              <rect
                x="-19"
                y="-10"
                width="38"
                height="20"
                rx="4.5"
                fill="#1B5E3F"
                stroke="#000000"
                strokeWidth="1.8"
              />

              {/* Crimson Heritage Side Accent Stripes */}
              <rect x="-18" y="-8.5" width="36" height="1.8" fill="#991B1B" />
              <rect x="-18" y="6.7" width="36" height="1.8" fill="#991B1B" />

              {/* Cream Top Vintage Carriage Roof */}
              <rect
                x="-16"
                y="-6"
                width="31"
                height="12"
                rx="3"
                fill="#FFF9F2"
                stroke="#000000"
                strokeWidth="1.2"
              />

              {/* Conductor Windows & Clerestory Skylights */}
              <rect x="-13" y="-4" width="4.5" height="8" rx="1" fill="#14192C" />
              <rect x="-6" y="-4" width="4.5" height="8" rx="1" fill="#14192C" />
              <rect x="1" y="-4" width="4.5" height="8" rx="1" fill="#14192C" />
              <rect x="8" y="-4" width="4.5" height="8" rx="1" fill="#14192C" />

              {/* Centered Overhead Trolley Pantograph Pole */}
              <line x1="-5" y1="0" x2="-1" y2="0" stroke="#000000" strokeWidth="1.5" />
              <circle cx="-1" cy="0" r="1.5" fill="#FFC800" />
              <line x1="-1" y1="0" x2="-8" y2="0" stroke="#FFC800" strokeWidth="2" strokeLinecap="round" />

              {/* Front Cowcatcher / Bumper (Kolkata Taxi Yellow) */}
              <polygon
                points="19,-7 24,-4 24,4 19,7"
                fill="#FFC800"
                stroke="#000000"
                strokeWidth="1.5"
              />

              {/* Front Glowing Twin Headlights */}
              <circle cx="19" cy="-3" r="2" fill="#FFC800" stroke="#000000" strokeWidth="0.8" />
              <circle cx="19" cy="-3" r="0.8" fill="#FFFFFF" />
              <circle cx="19" cy="3" r="2" fill="#FFC800" stroke="#000000" strokeWidth="0.8" />
              <circle cx="19" cy="3" r="0.8" fill="#FFFFFF" />
            </g>
          )}
        </svg>

        {/* ============================================================== */}
        {/* CARTOON KOLKATA STATION BOARDS (ON TWIN STRIPED PILLARS)       */}
        {/* ============================================================== */}
        <div className="space-y-16 sm:space-y-24 relative z-20">
          {stops.map((stop, idx) => {
            const isLeft = idx % 2 === 0;
            const isSelected = activeStopIdx === idx;

            return (
              <div
                key={stop.id}
                className="flex items-center w-full"
              >
                {/* Station Board Column: Alternates Left and Right */}
                <div
                  className={`w-full pl-4 md:pl-0 flex ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* The Cartoon Station Board Structure */}
                  <div
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => openStationPopup(stop, idx)}
                    className="group cursor-pointer flex flex-col items-center select-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`Open activities for ${stop.boardEnglish || stop.stationName}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openStationPopup(stop, idx);
                      }
                    }}
                  >
                    {/* Floating Instruction Chip on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-1.5 px-2.5 py-0.5 rounded-full bg-black/90 border border-[#FFC800] text-[10px] font-mono font-bold text-[#FFC800] tracking-wider shadow-[2px_2px_0px_#000] flex items-center gap-1">
                      <span>🎫</span>
                      <span>CLICK TO VIEW ACTIVITIES & DETAILS</span>
                    </div>

                    {/* The Yellow Railway Stationboard (Clean English: APPLICATION OPEN, DEMO DAY, etc.) */}
                    <div
                      className={`relative w-[220px] sm:w-[260px] bg-[#FFC800] border-[3.5px] border-black rounded-sm py-4 px-3 sm:px-4 text-center shadow-[5px_5px_0px_#000] transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-[7px_7px_0px_#E11D48] ${
                        isSelected ? 'ring-2 ring-[#FFC800] ring-offset-2 ring-offset-black' : ''
                      }`}
                    >
                      {/* 4 Corner Rivets / Bolts */}
                      <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-black" />
                      <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-black" />
                      <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-black" />
                      <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-black" />

                      {/* Station Code / Platform Tag */}
                      <div className="font-mono text-[9px] uppercase tracking-widest text-black/70 font-black mb-1">
                        {stop.yard || `JUNCTION 0${idx + 1}`}
                      </div>

                      {/* Main English Station Name */}
                      <h4 className="text-black font-bebas text-2xl sm:text-3xl tracking-widest leading-none font-black uppercase">
                        {stop.boardEnglish || stop.stationName}
                      </h4>
                    </div>

                    {/* Twin Black-and-Yellow Striped Support Posts (Pillars from photo) */}
                    <div className="w-[200px] sm:w-[240px] flex justify-between px-6 -mt-[1px]">
                      {/* Left Pillar */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2.5 h-9 sm:h-12 border-x-2 border-black"
                          style={{
                            background:
                              'repeating-linear-gradient(180deg, #FFC800 0px, #FFC800 8px, #000000 8px, #000000 16px)',
                          }}
                        />
                        {/* Foundation Footing Base */}
                        <div className="w-4 h-2 bg-[#475569] border-2 border-black rounded-xs shadow-[1px_1px_0px_#000]" />
                      </div>

                      {/* Right Pillar */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2.5 h-9 sm:h-12 border-x-2 border-black"
                          style={{
                            background:
                              'repeating-linear-gradient(180deg, #FFC800 0px, #FFC800 8px, #000000 8px, #000000 16px)',
                          }}
                        />
                        {/* Foundation Footing Base */}
                        <div className="w-4 h-2 bg-[#475569] border-2 border-black rounded-xs shadow-[1px_1px_0px_#000]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* ============================================================== */}
      {/* POP-UP MODAL: Interactive Railway Station Activities Docket    */}
      {/* ============================================================== */}
      {popupStop && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#140306] border-4 border-black rounded-2xl shadow-[8px_8px_0px_#FFC800] overflow-hidden text-white animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Kolkata Railway Stationboard */}
            <div className="p-4 sm:p-5 bg-[#1F070B] border-b-2 border-black flex-shrink-0 relative">
              {/* Close Button Top Right */}
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#E11D48] hover:bg-[#F43F5E] text-white font-mono font-bold text-base border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-20"
                aria-label="Close Station Timetable"
              >
                ✕
              </button>

              <div className="pr-10">
                {/* Station Yard & Status */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-black text-[#FFC800] border border-[#FFC800]/50">
                    {popupStop.yard}
                  </span>
                  <span className="font-mono text-[11px] text-white/70">
                    CODE: {popupStop.stationCode || 'CCU-EXP'}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#7CFF3A] px-2 py-0.5 rounded bg-[#7CFF3A]/10 border border-[#7CFF3A]/30">
                    {popupStop.status}
                  </span>
                </div>

                {/* Iconic Indian Railways Enamel Signboard in Modal */}
                <div className="rounded-xl bg-[#FFC800] border-2 border-black p-3 text-center shadow-[3px_3px_0px_#000] mt-1">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-black/70 font-black mb-0.5">
                    KOLKATA SPRINT LINE · ATAL INCUBATION CENTRE (AIC TECHNO)
                  </div>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-black tracking-wide leading-none font-black uppercase">
                    {popupStop.number}: {popupStop.boardEnglish || popupStop.stationName}
                  </h3>
                  <div className="font-mono text-xs text-[#8C1D03] font-bold mt-1">
                    {popupStop.platform}
                  </div>
                </div>
              </div>

              {/* Station Date & Logistics */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2.5 border-t border-white/10 text-xs font-mono text-white/80">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FFC800]">📅 DATE:</span>
                  <span className="text-white font-bold">{popupStop.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7CFF3A]">📍 VENUE:</span>
                  <span className="text-white">AIC Techno Campus, Kolkata</span>
                </div>
              </div>
            </div>

            {/* Modal Body: Description & Timetable Activities (Scrollable) */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
              {/* Station Overview Narrative & Description */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                <div className="font-mono text-xs text-[#FFC800] font-bold uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <span>🔍</span>
                  <span>STATION MISSION & DESCRIPTION:</span>
                </div>
                <p className="text-xs sm:text-sm font-poppins text-white/90 leading-relaxed">
                  {popupStop.desc}
                </p>
              </div>

              {/* Chronological Platform Timetable */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bebas text-lg sm:text-xl text-white tracking-wide flex items-center gap-1.5">
                    <span className="text-[#FFC800]">✦</span>
                    <span>SCHEDULED ACTIVITIES & EVENTS</span>
                  </h4>
                  <span className="font-mono text-xs text-white/60">
                    {popupStop.schedule?.length || popupStop.activities?.length || 0} TOTAL EVENTS
                  </span>
                </div>

                <div className="space-y-2.5 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#E11D48]/40">
                  {/* Detailed Schedule Items with Time */}
                  {popupStop.schedule && popupStop.schedule.length > 0 ? (
                    popupStop.schedule.map((item, sIdx) => (
                      <div
                        key={sIdx}
                        className="relative pl-8 group"
                      >
                        {/* Timeline Marker Dot */}
                        <div className="absolute left-2 top-2.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#140306] border-2 border-[#FFC800] group-hover:scale-125 group-hover:bg-[#FFC800] transition-all" />

                        <div className="comic-card p-3 bg-[#1F070B] border-2 border-black hover:border-[#FFC800] shadow-[2px_2px_0px_#000] transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className="font-mono text-[11px] font-bold text-[#FFC800] bg-black/70 px-2 py-0.5 rounded border border-[#FFC800]/30 w-fit">
                              ⏰ {item.time}
                            </span>
                            <span className="font-mono text-[10px] text-white/50 uppercase">
                              EVENT #{sIdx + 1}
                            </span>
                          </div>

                          <h5 className="font-bebas text-base sm:text-lg text-white tracking-wide mt-0.5">
                            {item.title}
                          </h5>

                          {item.detail && (
                            <p className="font-poppins text-xs text-white/75 mt-0.5 leading-relaxed">
                              {item.detail}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    /* Fallback to activities list */
                    popupStop.activities?.map((act, aIdx) => (
                      <div key={aIdx} className="relative pl-8">
                        <div className="absolute left-2 top-2.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FFC800] border-2 border-black" />
                        <div className="comic-card p-3 bg-[#1F070B] border-2 border-black shadow-[2px_2px_0px_#000]">
                          <div className="font-mono text-[11px] text-[#FFC800] font-bold">
                            EVENT #{aIdx + 1}
                          </div>
                          <div className="font-poppins text-xs text-white font-medium mt-0.5">
                            {act}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer: Station Switcher Navigation */}
            <div className="p-3 sm:p-4 bg-[#1F070B] border-t-2 border-black flex-shrink-0 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={goToPrevStation}
                className="px-3 py-1.5 rounded-lg bg-black hover:bg-[#E11D48] text-white font-mono text-xs font-bold border-2 border-white/20 transition-all flex items-center gap-1.5"
              >
                <span>←</span>
                <span className="hidden sm:inline">PREV</span> STATION
              </button>

              <div className="font-mono text-xs text-center text-white/70">
                <span className="text-[#FFC800] font-bold">
                  {stops.findIndex((s) => s.id === popupStop.id) + 1}
                </span>{' '}
                / {stops.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToNextStation}
                  className="px-3 py-1.5 rounded-lg bg-[#FFC800] hover:bg-[#FFD700] text-black font-mono text-xs font-bold border-2 border-black shadow-[2px_2px_0px_#000] transition-all flex items-center gap-1.5"
                >
                  <span className="hidden sm:inline">NEXT</span> STATION
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={closePopup}
                  className="px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black text-white/80 hover:text-white font-mono text-xs font-bold border border-white/20 transition-all"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
