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

  // Compute the dynamic SVG railway track path connecting each station
  const computeTrackPath = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;

    const points = [];

    // Calculate station waypoint connection coordinates
    stops.forEach((_, idx) => {
      const cardEl = cardRefs.current[idx];
      if (!cardEl) return;
      const cardRect = cardEl.getBoundingClientRect();

      let x, y;
      const centerY = cardRect.top - containerRect.top + cardRect.height * 0.5;

      if (isMobile) {
        // On mobile, the track snakes along the left side
        x = 36;
        y = centerY;
      } else {
        // On desktop, zigzag left and right
        const isLeft = idx % 2 === 0;
        if (isLeft) {
          // Connect to the right edge of left cards
          x = cardRect.right - containerRect.left + 24;
        } else {
          // Connect to the left edge of right cards
          x = cardRect.left - containerRect.left - 24;
        }
        y = centerY;
      }

      points.push({ x, y });
    });

    if (points.length < 2) return;
    setTrackPoints(points);

    // Build the serpentine cubic bezier SVG path
    let d = '';
    const startY = Math.max(0, points[0].y - 80);
    const startX = points[0].x;

    d += `M ${startX} ${startY} `;
    d += `L ${points[0].x} ${points[0].y} `;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const midY = (p1.y + p2.y) / 2;

      if (isMobile) {
        // Subtle serpentine curve on mobile
        const waveX = (i % 2 === 0) ? 54 : 20;
        d += `C ${waveX} ${p1.y + 40}, ${waveX} ${p2.y - 40}, ${p2.x} ${p2.y} `;
      } else {
        // Luxurious wide S-curve on desktop like reference image
        d += `C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y} `;
      }
    }

    // Extend line past the final station
    const lastP = points[points.length - 1];
    d += `L ${lastP.x} ${lastP.y + 90}`;

    setPathD(d);
  };

  // Recompute path on resize & mount
  useEffect(() => {
    // Initial delay to allow layout to settle
    const timer = setTimeout(() => {
      computeTrackPath();
    }, 150);

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
      const delta = 4;
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
    // Run once on load
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
    <section id="route" className="py-24 sm:py-36 px-4 max-w-7xl mx-auto relative overflow-hidden">
      <SectionHeader
        pill="RAILWAY SPRINT LINE & TIMETABLE"
        line1="THE SPRINT"
        line2="ROUTE & STATIONS."
        accentColor="text-[#FFC800]"
        description="Follow the serpentine broad gauge track as the Kolkata Sprint Express travels through each station. As you scroll, the cartoon train journeys from Yard 1 to Demo Day Platform 3. Click any station to pop up its full activity docket."
      />

      {/* Main Track & Stations Container */}
      <div ref={containerRef} className="relative mt-12 sm:mt-20 pb-16">
        {/* ============================================================== */}
        {/* SVG CARTOON RAILWAY TRACK & ANIMATED SCROLLING TRAIN           */}
        {/* ============================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Front Headlight Light Cone Gradient */}
            <linearGradient id="trainHeadlight" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FFC800" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#FFD700" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FFC800" stopOpacity="0" />
            </linearGradient>

            {/* Ballast Gravel Pattern Filter */}
            <filter id="trackGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.8" />
            </filter>
          </defs>

          {/* Layer 1: Dark Track Bed / Ballast */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#1C0509"
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#trackGlow)"
            />
          )}

          {/* Layer 2: Wooden Sleepers (Rail Ties) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#3D1808"
              strokeWidth="24"
              strokeDasharray="4 14"
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
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 4: Dual Shiny Steel Rails (cut out center creates two parallel rails!) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Layer 5: Inner Ballast Cutout (Leaves two 2.5px polished steel rails) */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="#140306"
              strokeWidth="6"
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
          )}

          {/* Station Waypoint Markers (Platform Junction Hubs) */}
          {trackPoints.map((pt, pIdx) => {
            const isPassed = pIdx < activeStopIdx;
            const isCurrent = pIdx === activeStopIdx;

            return (
              <g key={pIdx} transform={`translate(${pt.x}, ${pt.y})`}>
                {/* Station Platform Outer Ring */}
                <circle
                  r="16"
                  fill="#140306"
                  stroke="#000000"
                  strokeWidth="3"
                />
                <circle
                  r="13"
                  fill="#1F070B"
                  stroke={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                  strokeWidth="2.5"
                />
                {/* Station Signal Light Indicator */}
                <circle
                  r="6"
                  fill={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                  className={isCurrent ? "animate-ping" : ""}
                />
                <circle
                  r="5"
                  fill={isCurrent ? "#FFC800" : isPassed ? "#7CFF3A" : "#E11D48"}
                />
              </g>
            );
          })}

          {/* ============================================================== */}
          {/* CARTOON ANIMATED TRAIN (Driven by user scroll position)       */}
          {/* ============================================================== */}
          {pathD && (
            <g
              transform={`translate(${trainState.x}, ${trainState.y}) rotate(${trainState.angle})`}
              className="transition-transform duration-75 ease-out"
            >
              {/* Headlight Beam spreading forward onto the track */}
              <polygon
                points="28,-4 85,-24 85,24 28,4"
                fill="url(#trainHeadlight)"
              />

              {/* Cartoon Steam Puffs Drifting from Locomotive Exhaust */}
              <circle cx="-32" cy="-8" r="4.5" fill="#FFFFFF" opacity="0.85" />
              <circle cx="-42" cy="-14" r="6" fill="#FFFFFF" opacity="0.6" />
              <circle cx="-54" cy="-20" r="7.5" fill="#FFFFFF" opacity="0.35" />

              {/* Train Drop Shadow */}
              <rect
                x="-28"
                y="-13"
                width="56"
                height="26"
                rx="6"
                fill="#000000"
                opacity="0.6"
              />

              {/* Train Main Chassis (Iconic Kolkata Crimson) */}
              <rect
                x="-26"
                y="-14"
                width="52"
                height="28"
                rx="7"
                fill="#E11D48"
                stroke="#000000"
                strokeWidth="2.5"
              />

              {/* Train Top Cabin (Cream / White vintage streetcar look) */}
              <rect
                x="-23"
                y="-11"
                width="28"
                height="22"
                rx="4"
                fill="#FFF9F2"
                stroke="#000000"
                strokeWidth="2"
              />

              {/* Front Cowcatcher / Pilot (Golden Taxi Yellow) */}
              <polygon
                points="26,-10 33,-5 33,5 26,10"
                fill="#FFC800"
                stroke="#000000"
                strokeWidth="2"
              />

              {/* Conductor Windshield & Feluda Silhouette */}
              <rect
                x="-17"
                y="-8"
                width="11"
                height="16"
                rx="2"
                fill="#1E293B"
                stroke="#000000"
                strokeWidth="1.5"
              />
              <circle cx="-12" cy="0" r="3" fill="#FAD1A7" />

              {/* Side Racing Gold Stripe */}
              <line
                x1="-24"
                y1="0"
                x2="26"
                y2="0"
                stroke="#FFC800"
                strokeWidth="3"
              />

              {/* Front Glowing Lantern */}
              <circle cx="26" cy="0" r="3.5" fill="#FFC800" stroke="#000000" strokeWidth="1.5" />
              <circle cx="26" cy="0" r="1.5" fill="#FFFFFF" />

              {/* Wheels along the Steel Rail */}
              <circle cx="-16" cy="-14" r="3" fill="#0F172A" stroke="#000" strokeWidth="1" />
              <circle cx="2" cy="-14" r="3" fill="#0F172A" stroke="#000" strokeWidth="1" />
              <circle cx="16" cy="-14" r="3" fill="#0F172A" stroke="#000" strokeWidth="1" />

              <circle cx="-16" cy="14" r="3" fill="#0F172A" stroke="#000" strokeWidth="1" />
              <circle cx="2" cy="14" r="3" fill="#0F172A" stroke="#000" strokeWidth="1" />
              <circle cx="16" cy="14" r="3" fill="#0F172A" stroke="#000" strokeWidth="1" />
            </g>
          )}
        </svg>

        {/* ============================================================== */}
        {/* 5 ALTERNATING STATION CARDS (ZIGZAG LAYOUT AS IN REFERENCE)   */}
        {/* ============================================================== */}
        <div className="space-y-16 sm:space-y-28 relative z-20">
          {stops.map((stop, idx) => {
            const isLeft = idx % 2 === 0;
            const isSelected = activeStopIdx === idx;
            const isLocked = stop.status === 'COMING SOON';

            return (
              <div
                key={stop.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className={`grid grid-cols-1 md:grid-cols-12 items-center`}
              >
                {/* Station Card Column (Alternating Left/Right) */}
                <div
                  className={`pl-12 md:pl-0 ${
                    isLeft
                      ? 'md:col-start-1 md:col-end-7 md:pr-6'
                      : 'md:col-start-7 md:col-end-13 md:pl-6'
                  }`}
                >
                  <div
                    onClick={() => openStationPopup(stop, idx)}
                    className={`group relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 overflow-hidden border ${
                      isSelected
                        ? 'bg-[#180407] border-[#FFC800] shadow-[8px_8px_0px_#FFC800] -translate-y-1 ring-2 ring-[#FFC800]/50'
                        : 'bg-[#120305]/95 border-white/10 hover:border-[#FFC800]/60 hover:shadow-[6px_6px_0px_rgba(255,200,0,0.3)] hover:-translate-y-1'
                    }`}
                  >
                    {/* Giant Faint Watermark Number in Background (As in reference image) */}
                    <div className="absolute right-4 bottom-2 font-bebas text-8xl sm:text-9xl text-white/[0.05] group-hover:text-[#FFC800]/[0.08] select-none pointer-events-none font-black transition-colors">
                      {stop.watermark || `0${idx + 1}`}
                    </div>

                    {/* Top Row: Squircle Icon Badge & Phase Tag */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      {/* Squircle Icon Badge with Gold Border */}
                      <div className="w-12 h-12 rounded-2xl bg-black/70 border border-[#FFC800]/40 flex items-center justify-center text-2xl text-[#FFC800] shadow-[2px_2px_0px_#000] group-hover:scale-110 transition-transform">
                        {stop.icon || '🚉'}
                      </div>

                      {/* Station Phase Pill & Platform Name */}
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-xs font-bold text-[#FFC800] tracking-widest uppercase">
                          {stop.phase} · {stop.yard}
                        </span>
                        <span className="font-mono text-[11px] text-white/60 font-semibold">
                          {stop.date}
                        </span>
                      </div>
                    </div>

                    {/* Station Name Heading */}
                    <h4 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-tight uppercase font-black group-hover:text-[#FFC800] transition-colors">
                      {stop.stationName || stop.name}
                    </h4>

                    {/* Bengali Script Calligraphy Subtitle */}
                    <div className="font-comic text-xs sm:text-sm text-[#E11D48] font-bold mt-0.5 mb-3">
                      {stop.bengali} · {stop.platform}
                    </div>

                    {/* Station Description */}
                    <p className="font-poppins text-xs sm:text-sm text-white/75 leading-relaxed mb-6 relative z-10">
                      {stop.desc}
                    </p>

                    {/* Card Footer: Activities Count & Pop-up Action Button */}
                    <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
                      <div className="flex items-center gap-2 font-mono text-xs text-white/70">
                        <span className="w-2 h-2 rounded-full bg-[#7CFF3A]" />
                        <span>{stop.schedule?.length || stop.activities?.length || 0} Platform Events</span>
                      </div>

                      {isLocked ? (
                        <div className="px-3 py-1.5 rounded-lg bg-black/80 border border-[#E11D48]/50 text-center font-mono text-xs text-[#E11D48] font-bold">
                          🔒 DOSSIER SEALED
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openStationPopup(stop, idx);
                          }}
                          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#E11D48] hover:bg-[#FFC800] text-white hover:text-black font-mono text-xs font-black tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 transition-all"
                        >
                          <span>🎫 POP UP ACTIVITIES</span>
                          <span className="text-sm">↗</span>
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
      <div className="comic-card p-6 bg-[#160408] border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-4">
          <span className="text-4xl flex-shrink-0 animate-bounce">🚂</span>
          <div className="text-xs sm:text-sm font-poppins text-white">
            <span className="text-[#FFC800] font-bold font-mono tracking-wider">
              TRAM DIDI STATION DISPATCH:
            </span>{' '}
            "All 5 stations along the Kolkata Sprint line are live. As you scroll down the page, the animated cartoon train advances along the rails. Click any station card to open the departure docket!"
          </div>
        </div>

        <button
          type="button"
          onClick={() => openStationPopup(stops[2], 2)}
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#FFC800] hover:bg-[#FFD700] text-black font-mono text-xs font-bold border-2 border-black shadow-[2px_2px_0px_#000] transition-transform hover:scale-105 active:scale-95"
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
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#140306] border-4 border-black rounded-2xl shadow-[10px_10px_0px_#FFC800] overflow-hidden text-white animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header: Kolkata Railway Stationboard */}
            <div className="p-4 sm:p-6 bg-[#1F070B] border-b-2 border-black flex-shrink-0 relative">
              {/* Close Button Top Right */}
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#E11D48] hover:bg-[#F43F5E] text-white font-mono font-bold text-lg border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-20"
                aria-label="Close Station Timetable"
              >
                ✕
              </button>

              <div className="pr-12">
                {/* Station Code & Platform Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded bg-black text-[#FFC800] border border-[#FFC800]/50">
                    {popupStop.phase} · {popupStop.yard}
                  </span>
                  <span className="font-mono text-xs text-white/70">
                    STATION CODE: {popupStop.stationCode || 'CCU-EXP'}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#7CFF3A] px-2 py-0.5 rounded bg-[#7CFF3A]/10 border border-[#7CFF3A]/30">
                    STATUS: {popupStop.status}
                  </span>
                </div>

                {/* Iconic Indian Railways Enamel Signboard */}
                <div className="rounded-xl bg-[#FFC800] border-2 border-black p-3 sm:p-4 text-center shadow-[4px_4px_0px_#000] mt-2">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-black/70 font-black mb-0.5">
                    KOLKATA SPRINT LINE · ATAL INCUBATION CENTRE (AIC TECHNO)
                  </div>
                  <h3 className="font-bebas text-2xl sm:text-4xl text-black tracking-wide leading-none font-black uppercase">
                    {popupStop.number}: {popupStop.stationName || popupStop.name}
                  </h3>
                  <div className="font-comic text-sm sm:text-base text-[#8C1D03] font-bold mt-1">
                    {popupStop.bengali} · {popupStop.platform}
                  </div>
                </div>
              </div>

              {/* Station Date & Logistics */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-white/10 text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFC800]">📅 DATE:</span>
                  <span className="text-white font-bold">{popupStop.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#7CFF3A]">📍 VENUE:</span>
                  <span className="text-white">AIC Techno Campus, Topsia Road, Kolkata</span>
                </div>
              </div>
            </div>

            {/* Modal Body: Timetable Activities (Scrollable) */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">
              {/* Station Overview Narrative */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10">
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
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bebas text-xl sm:text-2xl text-white tracking-wide flex items-center gap-2">
                    <span className="text-[#FFC800]">✦</span>
                    <span>PLATFORM ACTIVITIES & SCHEDULE</span>
                  </h4>
                  <span className="font-mono text-xs text-white/60">
                    {popupStop.schedule?.length || popupStop.activities?.length || 0} TOTAL EVENTS
                  </span>
                </div>

                <div className="space-y-3 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E11D48]/40">
                  {/* Detailed Schedule Items with Time */}
                  {popupStop.schedule && popupStop.schedule.length > 0 ? (
                    popupStop.schedule.map((item, sIdx) => (
                      <div
                        key={sIdx}
                        className="relative pl-10 group"
                      >
                        {/* Timeline Marker Dot */}
                        <div className="absolute left-2.5 top-2.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#140306] border-2 border-[#FFC800] group-hover:scale-125 group-hover:bg-[#FFC800] transition-all" />

                        <div className="comic-card p-3 sm:p-4 bg-[#1F070B] border-2 border-black hover:border-[#FFC800] shadow-[3px_3px_0px_#000] transition-all">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                            <span className="font-mono text-xs font-bold text-[#FFC800] bg-black/70 px-2 py-0.5 rounded border border-[#FFC800]/30 w-fit">
                              ⏰ {item.time}
                            </span>
                            <span className="font-mono text-[10px] text-white/50 uppercase">
                              ACTIVITY #{sIdx + 1}
                            </span>
                          </div>

                          <h5 className="font-bebas text-lg sm:text-xl text-white tracking-wide mt-1">
                            {item.title}
                          </h5>

                          {item.detail && (
                            <p className="font-poppins text-xs text-white/75 mt-1 leading-relaxed">
                              {item.detail}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    /* Fallback to simple activities list */
                    popupStop.activities?.map((act, aIdx) => (
                      <div key={aIdx} className="relative pl-10">
                        <div className="absolute left-2.5 top-2.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFC800] border-2 border-black" />
                        <div className="comic-card p-3.5 bg-[#1F070B] border-2 border-black shadow-[3px_3px_0px_#000]">
                          <div className="font-mono text-xs text-[#FFC800] font-bold">
                            EVENT #{aIdx + 1}
                          </div>
                          <div className="font-poppins text-xs sm:text-sm text-white font-medium mt-0.5">
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
                className="px-3 sm:px-4 py-2 rounded-lg bg-black hover:bg-[#E11D48] text-white font-mono text-xs font-bold border-2 border-white/20 transition-all flex items-center gap-1.5"
              >
                <span>←</span>
                <span className="hidden sm:inline">PREVIOUS</span> STATION
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
                  className="px-3 sm:px-4 py-2 rounded-lg bg-[#FFC800] hover:bg-[#FFD700] text-black font-mono text-xs font-bold border-2 border-black shadow-[2px_2px_0px_#000] transition-all flex items-center gap-1.5"
                >
                  <span className="hidden sm:inline">NEXT</span> STATION
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={closePopup}
                  className="px-3 py-2 rounded-lg bg-black/60 hover:bg-black text-white/80 hover:text-white font-mono text-xs font-bold border border-white/20 transition-all"
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
