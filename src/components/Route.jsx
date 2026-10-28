import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Route = () => {
  const [activeStop, setActiveStop] = useState(2);
  const [expandedDay, setExpandedDay] = useState("stop-3");

  const stops = content.route.stops;

  return (
    <section id="route" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill="SCHEDULE & TIMELINE"
        line1="THE SPRINT"
        line2="ROUTE & TIMELINE."
        accentColor="text-[#19D3F3]"
        description="From your initial team dossier submission to the Sunday Demo Day jury presentation. Follow the 5-stage roadmap."
      />

      {/* Tram Line Track */}
      <div className="relative my-8">
        <div className="hidden lg:block absolute top-10 left-8 right-8 h-2.5 bg-[#121124] border-y-2 border-black rounded-full z-0">
          <div
            className="h-full bg-[#FFE600] transition-all duration-500 rounded-full"
            style={{ width: `${(activeStop / (stops.length - 1)) * 100}%` }}
          ></div>
        </div>

        {/* 5 Stops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative z-10 pt-4 lg:pt-14">
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
                className={`comic-card p-5 cursor-pointer transition-all ${
                  activeStop === idx
                    ? 'border-[#FFE600] shadow-comic-yellow -translate-y-2'
                    : 'hover:-translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-[#19D3F3]">
                    {stop.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#FFE600] font-bold">
                    {stop.date}
                  </span>
                </div>

                <h4 className="font-bebas text-xl text-[#F4F0FF] mb-0.5 tracking-wide">
                  {stop.name}
                </h4>
                <div className="font-mono text-xs text-[#FF2E93] mb-3">
                  {stop.bengali}
                </div>

                <p className="text-xs font-poppins text-[#F4F0FF]/75 leading-relaxed mb-4">
                  {stop.desc}
                </p>

                {isLocked && (
                  <div className="p-2 rounded bg-black/80 border border-[#FF2E93]/40 text-center font-mono text-xs text-[#FF2E93] animate-pulse">
                    🔒 DOSSIER SEALED
                  </div>
                )}

                {isDayCard && (
                  <div>
                    <button
                      type="button"
                      className="w-full py-1.5 px-3 rounded-lg bg-[#19D3F3]/20 hover:bg-[#19D3F3]/30 border border-[#19D3F3] text-[10px] font-mono font-bold text-[#19D3F3] flex items-center justify-between transition-colors"
                    >
                      <span>{isExpanded ? "HIDE ACTIVITIES" : "VIEW ACTIVITIES"}</span>
                      <span>{isExpanded ? "▲" : "▼"}</span>
                    </button>

                    {isExpanded && (
                      <ul className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5 text-xs font-poppins text-[#F4F0FF]/85 font-medium">
                        {stop.activities.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-1.5">
                            <span className="text-[#FFE600]">✦</span>
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
      <div className="comic-speech-bubble flex items-center gap-3 mt-6">
        <span className="text-2xl flex-shrink-0">🚖</span>
        <div className="text-xs sm:text-sm font-poppins text-[#F4F0FF]">
          <span className="text-[#FFE600] font-bold">JATAYU'S WARNING: </span>
          "Day 2 midnight is when true thriller begins! Sleep is temporary, shipping production code is forever."
        </div>
      </div>
    </section>
  );
};
