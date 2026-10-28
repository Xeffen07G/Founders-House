import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Squad = () => {
  const [activeTab, setActiveTab] = useState("MENTORS");

  return (
    <section id="squad" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill={content.squad.pill}
        line1={content.squad.headingLine1}
        line2={content.squad.headingLine2}
        accentColor="text-neonCyan"
        description={content.squad.desc}
      />

      {/* Tabs for Mentors, Jury, Organizers */}
      <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
        {content.squad.tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-display text-xs tracking-wider border-2 border-black shadow-sticker transition-all ${
              activeTab === tab
                ? 'bg-neonYellow text-black font-extrabold translate-y-0.5'
                : 'bg-[#0B1126] text-creamText/75 hover:text-creamText hover:bg-[#121A38]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Locked Silhouette Cards with CLASSIFIED, REVEALING SOON */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array.from({ length: content.squad.classifiedCount }).map((_, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#080E21] border-2 border-black shadow-sticker text-center flex flex-col items-center justify-between h-56 relative overflow-hidden group hover:border-neonPink transition-colors"
          >
            {/* Top Classified Stamp */}
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-neonPink/20 text-neonPink border border-neonPink/40">
              CONFIDENTIAL
            </span>

            {/* Silhouette Figure */}
            <div className="w-16 h-16 rounded-full bg-[#121B38] border-2 border-dashed border-white/20 flex items-center justify-center text-2xl filter grayscale opacity-60 group-hover:scale-105 transition-transform">
              👤
            </div>

            <div>
              <div className="font-display text-xs text-creamText mb-1">
                DOSSIER #{idx + 1}
              </div>
              <div className="font-mono text-[10px] text-neonYellow font-bold animate-pulse">
                CLASSIFIED, REVEALING SOON
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
