import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Route = () => {
  const [activeStop, setActiveStop] = useState(2);
  const [expandedDay, setExpandedDay] = useState("stop-3");

  const stops = content.route.stops;

  return (
    <section id="route" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill="SCHEDULE & TIMELINE"
        line1="THE SPRINT"
        line2="ROUTE & TIMELINE."
        accentColor="text-[#E11D48]"
        description="From your initial team dossier submission to the Sunday Demo Day jury presentation. Follow the 5-stage roadmap."
      />

      {/* Tram Line Track */}
      <div className="relative my-10">
        <div className="hidden lg:block absolute top-12 left-8 right-8 h-3 bg-[#1C0509] border-y-2 border-black rounded-full z-0">
          <div
            className="h-full bg-[#FFC800] transition-all duration-500 rounded-full"
            style={{ width: `${(activeStop / (stops.length - 1)) * 100}%` }}
          />
        </div>

        {/* 5 Stops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10 pt-4 lg:pt-16">
          {stops.map((stop, idx) => {
            const isDayCard = stop.activities && stop.activities.length > 0;
            const isExpanded = expandedDay === stop.id;
            const isLocked = stop.status === "COMING SOON";

            return (
              <div
                key={stop.id}
                onClick={() => {
                  setActiveStop(idx);
                  if (isDayCard) {
                    setExpandedDay(isExpanded ? null : stop.id);
                  }
                }}
                className={`comic-card p-6 cursor-pointer bg-[#1C0509] transition-all ${
                  activeStop === idx
                    ? 'border-[#FFC800] shadow-[6px_6px_0px_#FFC800] -translate-y-2'
                    : 'hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-black/80 text-[#FFC800] border border-[#FFC800]/30">
                    {stop.number}
                  </span>
                  <span className="text-xs font-mono text-white/70 font-bold">
                    {stop.date}
                  </span>
                </div>

                <h4 className="font-bebas text-xl sm:text-2xl text-white mb-0.5 tracking-wide">
                  {stop.name}
                </h4>
                <div className="font-mono text-xs text-[#E11D48] font-bold mb-3">
                  {stop.bengali}
                </div>

                <p className="text-xs font-poppins text-white/75 leading-relaxed mb-4">
                  {stop.desc}
                </p>

                {isLocked && (
                  <div className="p-2 rounded-lg bg-black/80 border border-[#E11D48]/40 text-center font-mono text-xs text-[#E11D48] animate-pulse">
                    🔒 DOSSIER SEALED
                  </div>
                )}

                {isDayCard && (
                  <div>
                    <button
                      type="button"
                      className="w-full py-1.5 px-3 rounded-lg bg-[#E11D48]/20 hover:bg-[#E11D48]/30 border border-[#E11D48] text-[11px] font-mono font-bold text-white flex items-center justify-between transition-colors"
                    >
                      <span>{isExpanded ? "HIDE ACTIVITIES" : "VIEW ACTIVITIES"}</span>
                      <span>{isExpanded ? "▲" : "▼"}</span>
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 text-xs font-poppins text-white/90">
                        {stop.activities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-1.5">
                            <span className="text-[#FFC800]">✦</span>
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Jatayu Comic Bubble */}
      <div className="comic-card p-6 bg-[#1C0509] border-2 border-black flex items-center gap-4 mt-8 shadow-[4px_4px_0px_#000]">
        <span className="text-3xl flex-shrink-0">🚖</span>
        <div className="text-xs sm:text-sm font-poppins text-white">
          <span className="text-[#FFC800] font-bold font-mono tracking-wider">JATAYU'S WARNING: </span>
          "Day 2 midnight is when true thriller begins! Sleep is temporary, shipping production code is forever."
        </div>
      </div>
    </section>
  );
};
