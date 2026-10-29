import React, { useState, useEffect, useRef } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Route = () => {
  const [activeStopIdx, setActiveStopIdx] = useState(0);
  const [popupStop, setPopupStop] = useState(null);
  const [pathD, setPathD] = useState('');
  const [trackPoints, setTrackPoints] = useState([]);
  const [trainState, setTrainState] = useState({ x: 0, y: 0, angle: 90, progress: 0 });

  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const cardRefs = useRef([]);

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

  // Compute the dynamic SVG railway track path connecting each station safely within page margins
  const computeTrackPath = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;
    const containerW = containerRect.width;

    const points = [];

    // Calculate station waypoint connection coordinates
    stops.forEach((_, idx) => {
      const cardEl = cardRefs.current[idx];
      if (!cardEl) return;
      const cardRect = cardEl.getBoundingClientRect();

      let x, y;
      const centerY = cardRect.top - containerRect.top + cardRect.height * 0.5;

      if (isMobile) {
        // On mobile, the track stays safely on the left track gutter
        x = 24;
        y = centerY;
      } else {
        // On desktop, cards alternate left and right
        const isLeft = idx % 2 === 0;
        if (isLeft) {
          // Connect to the right side of left cards, bounded near the middle
          const rightEdge = cardRect.right - containerRect.left;
          x = Math.min(containerW * 0.48, Math.max(containerW * 0.38, rightEdge + 12));
        } else {
          // Connect to the left side of right cards, bounded near the middle
          const leftEdge = cardRect.left - containerRect.left;
          x = Math.max(containerW * 0.52, Math.min(containerW * 0.62, leftEdge - 12));
        }
        y = centerY;
      }

      // Hard clamp x strictly within container margins so track never escapes the page
      const clampedX = Math.max(20, Math.min(containerW - 20, x));
      points.push({ x: clampedX, y });
    });

    if (points.length < 2) return;
    setTrackPoints(points);

    // Build the serpentine cubic bezier SVG path
    let d = '';
    const startY = Math.max(0, points[0].y - 60);
    const startX = points[0].x;

    d += `M ${startX} ${startY} `;
    d += `L ${points[0].x} ${points[0].y} `;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const midY = (p1.y + p2.y) / 2;

      if (isMobile) {
        // Gentle wave on mobile
        const waveX = (i % 2 === 0) ? 36 : 16;
        d += `C ${waveX} ${p1.y + 30}, ${waveX} ${p2.y - 30}, ${p2.x} ${p2.y} `;
      } else {
        // Controlled S-curve strictly bounded between p1 and p2 in the center channel
        d += `C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y} `;
      }
    }

    // Extend line smoothly past the final station
    const lastP = points[points.length - 1];
    d += `L ${lastP.x} ${lastP.y + 60}`;

    setPathD(d);
  };

  // Recompute path on resize & mount
  useEffect(() => {
    const timer = setTimeout(() => {
      computeTrackPath();
    }, 120);

    const handleResize = () => {
      computeTrackPath();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll listener to drive the cartoon train along the track
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start when route section enters middle of screen, finish as it exits
      const totalTravel = rect.height;
      const currentScroll = windowHeight * 0.65 - rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalTravel));

      const totalLength = pathRef.current.getTotalLength();
      if (!totalLength || isNaN(totalLength) || totalLength <= 0) return;

      const currentDist = progress * totalLength;
      const pt = pathRef.current.getPointAtLength(currentDist);

      // Tangent for rotation angle
      const delta = 3;
      const ptAhead = pathRef.current.getPointAtLength(Math.min(currentDist + delta, totalLength));
      const angle = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI);

      setTrainState({ x: pt.x, y: pt.y, angle, progress });

      // Automatically highlight active station based on train progress
      const stationIndex = Math.min(
        stops.length - 1,
        Math.floor(progress * stops.length * 1.05)
      );
      setActiveStopIdx(stationIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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
    <section id="route" className="py-20 sm:py-28 px-4 max-w-6xl mx-auto relative overflow-hidden">
      <SectionHeader
        pill="RAILWAY SPRINT LINE & TIMETABLE"
        line1="THE SPRINT"
        line2="ROUTE & STATIONS."
        accentColor="text-[#FFC800]"
        description="Follow the slim serpentine railway track as the Kolkata Sprint Express travels through each station. As you scroll, the cartoon train journeys from Yard 1 to Demo Day. Click any station card to pop up its full activity docket."
      />

      {/* Main Track & Stations Container */}
      <div ref={containerRef} className="relative mt-8 sm:mt-14 pb-12">
        {/* ============================================================== */}
        {/* SLIM SVG CARTOON RAILWAY TRACK & ANIMATED SCROLLING TRAIN      */}
        {/* ============================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Front Headlight Light Cone Gradient */}
            <linearGradient id="trainHeadlightSlim" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FFC800" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#FFD700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFC800" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Layer 1: Dark Gravel Track Bed / Ballast (Slim & refined) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#1C0509"
              strokeWidth="16"
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
              strokeWidth="12"
              strokeDasharray="3 9"
              strokeLinecap="butt"
              opacity="0.9"
            />
          )}

          {/* Layer 3: Steel Rails Base Outline */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#0B0A12"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 4: Dual Steel Rails (Polished silver) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 5: Inner Ballast Cutout (Produces two crisp 1.5px parallel rails) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#140306"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 6: Golden Rail Reflection Line */}
          {pathD && (
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="#FFC800"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
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
                  strokeWidth="1.8"
                />
                <circle
                  r="3.5"
                  fill={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                  className={isCurrent ? "animate-ping" : ""}
                />
                <circle
                  r="3"
                  fill={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                />
              </g>
            );
          })}

          {/* ============================================================== */}
          {/* SLIM CARTOON TRAIN (Compact & perfectly scaled to the track)   */}
          {/* ============================================================== */}
          {pathD && (
            <g
              transform={`translate(${trainState.x}, ${trainState.y}) rotate(${trainState.angle})`}
              className="transition-transform duration-75 ease-out"
            >
              {/* Headlight Beam spreading forward onto the track */}
              <polygon
                points="18,-2 46,-12 46,12 18,2"
                fill="url(#trainHeadlightSlim)"
              />

              {/* Cartoon Steam Puffs Drifting from Locomotive Exhaust */}
              <circle cx="-20" cy="-5" r="3" fill="#FFFFFF" opacity="0.85" />
              <circle cx="-28" cy="-8" r="4" fill="#FFFFFF" opacity="0.6" />
              <circle cx="-36" cy="-12" r="5" fill="#FFFFFF" opacity="0.35" />

              {/* Train Drop Shadow */}
              <rect
                x="-18"
                y="-9"
                width="36"
                height="18"
                rx="4"
                fill="#000000"
                opacity="0.5"
              />

              {/* Train Main Chassis (Iconic Kolkata Crimson) */}
              <rect
                x="-17"
                y="-9"
                width="34"
                height="18"
                rx="4"
                fill="#E11D48"
                stroke="#000000"
                strokeWidth="1.8"
              />

              {/* Train Top Cabin (Cream / White vintage streetcar look) */}
              <rect
                x="-15"
                y="-7"
                width="18"
                height="14"
                rx="2"
                fill="#FFF9F2"
                stroke="#000000"
                strokeWidth="1.5"
              />

              {/* Front Cowcatcher / Pilot (Golden Taxi Yellow) */}
              <polygon
                points="17,-6 22,-3 22,3 17,6"
                fill="#FFC800"
                stroke="#000000"
                strokeWidth="1.5"
              />

              {/* Conductor Windshield */}
              <rect
                x="-11"
                y="-5"
                width="7"
                height="10"
                rx="1"
                fill="#1E293B"
                stroke="#000000"
                strokeWidth="1"
              />
              <circle cx="-8" cy="0" r="2" fill="#FAD1A7" />

              {/* Side Racing Gold Stripe */}
              <line
                x1="-16"
                y1="0"
                x2="17"
                y2="0"
                stroke="#FFC800"
                strokeWidth="2"
              />

              {/* Front Glowing Lantern */}
              <circle cx="17" cy="0" r="2.5" fill="#FFC800" stroke="#000000" strokeWidth="1" />
              <circle cx="17" cy="0" r="1" fill="#FFFFFF" />

              {/* Wheels */}
              <circle cx="-10" cy="-9" r="2" fill="#0F172A" stroke="#000" strokeWidth="0.8" />
              <circle cx="2" cy="-9" r="2" fill="#0F172A" stroke="#000" strokeWidth="0.8" />
              <circle cx="11" cy="-9" r="2" fill="#0F172A" stroke="#000" strokeWidth="0.8" />

              <circle cx="-10" cy="9" r="2" fill="#0F172A" stroke="#000" strokeWidth="0.8" />
              <circle cx="2" cy="9" r="2" fill="#0F172A" stroke="#000" strokeWidth="0.8" />
              <circle cx="11" cy="9" r="2" fill="#0F172A" stroke="#000" strokeWidth="0.8" />
            </g>
          )}
        </svg>

        {/* ============================================================== */}
        {/* COMPACT ALTERNATING STATION BOXES (SLEEK, TIDY & PROPORTIONAL) */}
        {/* ============================================================== */}
        <div className="space-y-8 sm:space-y-12 relative z-20">
          {stops.map((stop, idx) => {
            const isLeft = idx % 2 === 0;
            const isSelected = activeStopIdx === idx;
            const isLocked = stop.status === 'COMING SOON';

            return (
              <div
                key={stop.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="flex items-center w-full"
              >
                {/* Station Box: Aligns Left or Right on desktop with constrained max width */}
                <div
                  className={`w-full pl-10 md:pl-0 flex ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div
                    onClick={() => openStationPopup(stop, idx)}
                    className={`group relative rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 overflow-hidden border w-full md:max-w-[390px] ${
                      isSelected
                        ? 'bg-[#180407] border-[#FFC800] shadow-[6px_6px_0px_#FFC800] -translate-y-1 ring-1 ring-[#FFC800]/50'
                        : 'bg-[#120305]/95 border-white/10 hover:border-[#FFC800]/60 hover:shadow-[4px_4px_0px_rgba(255,200,0,0.3)] hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Faint Watermark Number */}
                    <div className="absolute right-3 bottom-1 font-bebas text-5xl sm:text-6xl text-white/[0.04] group-hover:text-[#FFC800]/[0.07] select-none pointer-events-none font-black transition-colors">
                      {stop.watermark || `0${idx + 1}`}
                    </div>

                    {/* Top Row: Squircle Icon Badge & Station Yard Tag (No Phase 1 writing!) */}
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-black/70 border border-[#FFC800]/40 flex items-center justify-center text-lg text-[#FFC800] shadow-[2px_2px_0px_#000] group-hover:scale-105 transition-transform flex-shrink-0">
                        {stop.icon || '🚉'}
                      </div>

                      {/* Clean Yard Tag without Phase text */}
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-[11px] font-bold text-[#FFC800] tracking-wider uppercase">
                          {stop.yard}
                        </span>
                        <span className="font-mono text-[10px] text-white/50 font-semibold">
                          {stop.date}
                        </span>
                      </div>
                    </div>

                    {/* Station Name Heading (Small, crisp & proportional) */}
                    <h4 className="font-bebas text-xl sm:text-2xl text-white tracking-wide leading-tight uppercase font-black group-hover:text-[#FFC800] transition-colors">
                      {stop.stationName || stop.name}
                    </h4>

                    {/* Bengali Script Calligraphy Subtitle */}
                    <div className="font-comic text-xs text-[#E11D48] font-bold mt-0.5 mb-2">
                      {stop.bengali} · {stop.platform}
                    </div>

                    {/* Station Description (Compact & clean) */}
                    <p className="font-poppins text-xs text-white/70 leading-relaxed mb-3 relative z-10 line-clamp-2">
                      {stop.desc}
                    </p>

                    {/* Card Footer: Activities Count & Compact Action Button */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 relative z-10">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7CFF3A]" />
                        <span>{stop.schedule?.length || stop.activities?.length || 0} Events</span>
                      </div>

                      {isLocked ? (
                        <div className="px-2.5 py-1 rounded bg-black/80 border border-[#E11D48]/50 text-center font-mono text-[10px] text-[#E11D48] font-bold">
                          🔒 SEALED
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openStationPopup(stop, idx);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-[#E11D48] hover:bg-[#FFC800] text-white hover:text-black font-mono text-[11px] font-bold tracking-wider border border-black shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 transition-all"
                        >
                          <span>🎫 ACTIVITIES</span>
                          <span className="text-xs">↗</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Station Master Dispatch Box */}
      <div className="comic-card p-5 bg-[#160408] border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-3">
          <span className="text-3xl flex-shrink-0 animate-bounce">🚂</span>
          <div className="text-xs sm:text-sm font-poppins text-white">
            <span className="text-[#FFC800] font-bold font-mono tracking-wider">
              TRAM DIDI STATION DISPATCH:
            </span>{' '}
            "All 5 stations along the Kolkata Sprint line are live. As you scroll, the cartoon train advances along the track. Click any station card to open the departure docket!"
          </div>
        </div>

        <button
          type="button"
          onClick={() => openStationPopup(stops[2], 2)}
          className="flex-shrink-0 px-3.5 py-2 rounded-lg bg-[#FFC800] hover:bg-[#FFD700] text-black font-mono text-xs font-bold border-2 border-black shadow-[2px_2px_0px_#000] transition-transform hover:scale-105 active:scale-95"
        >
          POP UP DAY 1 ACTIVITIES ✦
        </button>
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
                {/* Station Yard & Platform Bar (No Phase text) */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-black text-[#FFC800] border border-[#FFC800]/50">
                    {popupStop.yard}
                  </span>
                  <span className="font-mono text-[11px] text-white/70">
                    CODE: {popupStop.stationCode || 'CCU-EXP'}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#7CFF3A] px-2 py-0.5 rounded bg-[#7CFF3A]/10 border border-[#7CFF3A]/30">
                    {popupStop.status}
                  </span>
                </div>

                {/* Iconic Indian Railways Enamel Signboard */}
                <div className="rounded-xl bg-[#FFC800] border-2 border-black p-3 text-center shadow-[3px_3px_0px_#000] mt-1">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-black/70 font-black mb-0.5">
                    KOLKATA SPRINT LINE · ATAL INCUBATION CENTRE (AIC TECHNO)
                  </div>
                  <h3 className="font-bebas text-2xl sm:text-3xl text-black tracking-wide leading-none font-black uppercase">
                    {popupStop.number}: {popupStop.stationName || popupStop.name}
                  </h3>
                  <div className="font-comic text-xs sm:text-sm text-[#8C1D03] font-bold mt-1">
                    {popupStop.bengali} · {popupStop.platform}
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

            {/* Modal Body: Timetable Activities (Scrollable) */}
            <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
              {/* Station Overview Narrative */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/10">
                <div className="font-mono text-xs text-[#FFC800] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span>🔍</span>
                  <span>STATION MISSION BRIEFING:</span>
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
                    <span>PLATFORM ACTIVITIES & SCHEDULE</span>
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
                              ACTIVITY #{sIdx + 1}
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
                    /* Fallback to simple activities list */
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
