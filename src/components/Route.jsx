import React, { useState, useEffect } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Route = () => {
  const [activeStopIdx, setActiveStopIdx] = useState(2); // Default to Day 1
  const [popupStop, setPopupStop] = useState(null); // The stop currently opened in the popup modal

  const stops = content.route.stops;

  // Handle escape key to close modal
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
    <section id="route" className="py-24 sm:py-32 px-4 max-w-7xl mx-auto relative">
      <SectionHeader
        pill="RAILWAY TIMETABLE & SPRINT LINE"
        line1="THE SPRINT"
        line2="STATIONS & TIMELINE."
        accentColor="text-[#FFC800]"
        description="Step onto the platform. Each sprint day is an authentic Kolkata train station along our 72-hour route. Click any station below to pop up its platform timetable, dossier clues, and full schedule of activities."
      />

      {/* Railway Track & Overhead Wire System */}
      <div className="relative my-8 lg:my-14">
        {/* Overhead Catenary Electric Wire */}
        <div className="hidden lg:block relative mb-3 px-6">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#FFC800]/40 to-transparent w-full" />
          <div className="flex justify-between items-center text-[10px] font-mono text-[#FFC800]/60 uppercase tracking-widest pt-1 px-4">
            <span>⚡ 25kV CCU TRAM & SPRINT CATENARY LINE</span>
            <span>GAUGE: BROAD GAUGE 5FT 6IN</span>
            <span>SIGNAL STATUS: ALL CLEAR 🟢</span>
          </div>
        </div>

        {/* Dual Steel Rails & Wooden Sleepers */}
        <div className="hidden lg:block relative h-14 bg-[#140407] border-2 border-black rounded-xl overflow-hidden shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)]">
          {/* Wooden Sleepers Pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #3D1E0F 0px, #3D1E0F 12px, transparent 12px, transparent 28px)',
            }}
          />

          {/* Top Steel Rail */}
          <div className="absolute top-3 left-0 right-0 h-1.5 bg-gradient-to-b from-[#E2E8F0] via-[#94A3B8] to-[#475569] shadow-[0_1px_4px_rgba(255,255,255,0.4)]" />

          {/* Bottom Steel Rail */}
          <div className="absolute bottom-3 left-0 right-0 h-1.5 bg-gradient-to-b from-[#E2E8F0] via-[#94A3B8] to-[#475569] shadow-[0_1px_4px_rgba(255,255,255,0.4)]" />

          {/* Progress Light Track */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 h-2 bg-[#FFC800] transition-all duration-700 rounded-full shadow-[0_0_12px_#FFC800]"
            style={{ width: `${((activeStopIdx + 0.5) / stops.length) * 100}%` }}
          />

          {/* Moving Tram / Train Engine Indicator */}
          <div
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 z-20 flex items-center -ml-7"
            style={{ left: `${((activeStopIdx + 0.5) / stops.length) * 100}%` }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48] border-2 border-black shadow-[3px_3px_0px_#000] text-white font-mono text-xs font-bold animate-pulse">
              <span>🚃</span>
              <span>AT PLATFORM</span>
            </div>
          </div>
        </div>

        {/* Station Signal Lights Bar (Desktop) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 mt-3 px-2">
          {stops.map((stop, idx) => (
            <div key={stop.id} className="flex items-center justify-center gap-2">
              <span
                className={`w-3 h-3 rounded-full border border-black shadow-[0_0_8px] transition-all ${
                  idx < activeStopIdx
                    ? 'bg-[#7CFF3A] shadow-[#7CFF3A]'
                    : idx === activeStopIdx
                    ? 'bg-[#FFC800] shadow-[#FFC800] animate-ping'
                    : 'bg-[#E11D48] shadow-[#E11D48]/50'
                }`}
              />
              <span className="font-mono text-[10px] text-white/60 tracking-wider">
                {idx < activeStopIdx ? 'CLEARED' : idx === activeStopIdx ? 'CURRENT STOP' : 'SEALED'}
              </span>
            </div>
          ))}
        </div>

        {/* 5 Train Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10 pt-4 lg:pt-8">
          {stops.map((stop, idx) => {
            const isSelected = activeStopIdx === idx;
            const isLocked = stop.status === 'COMING SOON';
            const isDayStation = stop.id.startsWith('stop-3') || stop.id.startsWith('stop-4') || stop.id.startsWith('stop-5');

            return (
              <div
                key={stop.id}
                onClick={() => openStationPopup(stop, idx)}
                className={`group relative comic-card p-5 cursor-pointer bg-[#180407] transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#FFC800] shadow-[8px_8px_0px_#FFC800] -translate-y-2 ring-2 ring-[#FFC800]/50'
                    : 'hover:-translate-y-1.5 hover:border-[#FFC800]/60 hover:shadow-[6px_6px_0px_rgba(255,200,0,0.4)]'
                }`}
              >
                {/* Station Pole Accent at Top */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-black text-[#FFC800] border border-[#FFC800]/40">
                    {stop.platform || `STOP ${idx + 1}`}
                  </span>
                  <span className="text-[11px] font-mono text-white/80 font-bold bg-[#E11D48]/30 px-2 py-0.5 rounded border border-[#E11D48]/40">
                    {stop.date}
                  </span>
                </div>

                {/* Classic Indian Railways Station Signboard */}
                <div className="rounded-lg bg-[#FFC800] border-2 border-black p-3 mb-3 text-center shadow-[3px_3px_0px_#000] group-hover:scale-[1.02] transition-transform">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-black/70 font-extrabold border-b border-black/30 pb-0.5 mb-1 flex items-center justify-center gap-1">
                    <span>🚉</span>
                    <span>{stop.stationCode || `CCU-STN-0${idx + 1}`}</span>
                  </div>
                  <h4 className="font-bebas text-xl sm:text-2xl text-black tracking-wide leading-tight uppercase font-black">
                    {stop.stationName || stop.name}
                  </h4>
                  <div className="font-comic text-xs text-[#8C1D03] font-bold mt-0.5">
                    {stop.bengali}
                  </div>
                </div>

                {/* Tag & Summary */}
                <div className="mb-4 flex-1">
                  <div className="inline-block font-mono text-[10px] font-bold text-[#7CFF3A] uppercase tracking-wider mb-2">
                    ✦ {stop.tag || 'SPRINT CHECKPOINT'}
                  </div>
                  <p className="text-xs font-poppins text-white/80 leading-relaxed">
                    {stop.desc}
                  </p>
                </div>

                {/* Status or Activities Count */}
                <div className="pt-3 border-t border-white/10">
                  {isLocked ? (
                    <div className="p-2 rounded-lg bg-black/80 border border-[#E11D48]/50 text-center font-mono text-[11px] text-[#E11D48] font-bold flex items-center justify-center gap-1.5">
                      <span>🔒</span>
                      <span>DOSSIER SEALED · CLICK TO VIEW</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                        <span className="text-[#FFC800] font-bold">
                          {stop.activities?.length || 0} Activities
                        </span>
                        <span>{isDayStation ? '72H Residential' : 'Screening'}</span>
                      </div>

                      {/* Interactive Pop-up Action Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openStationPopup(stop, idx);
                        }}
                        className="w-full py-2 px-3 rounded-lg bg-[#E11D48] hover:bg-[#F43F5E] text-white font-mono text-xs font-extrabold tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-1.5 transition-all group-hover:bg-[#FFC800] group-hover:text-black"
                      >
                        <span>🎫</span>
                        <span>POP UP ACTIVITIES</span>
                        <span className="text-sm">↗</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Jatayu & Feluda Stationmaster Box */}
      <div className="comic-card p-6 bg-[#180407] border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 shadow-[4px_4px_0px_#000]">
        <div className="flex items-center gap-4">
          <span className="text-4xl flex-shrink-0 animate-bounce">🚊</span>
          <div className="text-xs sm:text-sm font-poppins text-white">
            <span className="text-[#FFC800] font-bold font-mono tracking-wider">
              STATION MASTER DISPATCH:
            </span>{' '}
            "Tram Didi announces all 3 sprint day platforms are fully wired with high-speed fiber at AIC Techno. Click any station card to inspect the minute-by-minute timetable!"
          </div>
        </div>

        <button
          type="button"
          onClick={() => openStationPopup(stops[2], 2)}
          className="flex-shrink-0 px-4 py-2 rounded-lg bg-[#FFC800] hover:bg-[#FFD700] text-black font-mono text-xs font-bold border-2 border-black shadow-[2px_2px_0px_#000] transition-transform hover:scale-105 active:scale-95"
        >
          OPEN DAY 1 TIMETABLE ✦
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
                    {popupStop.platform || 'PLATFORM DOCKET'}
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
                    {popupStop.bengali}
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
                  <span className="text-[#7CFF3A]">📍 LOCATION:</span>
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
