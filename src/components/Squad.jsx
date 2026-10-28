import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Squad = () => {
  const [activeTab, setActiveTab] = useState("MENTORS");

  return (
    <section id="squad" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill={content.squad.pill}
        line1={content.squad.headingLine1}
        line2={content.squad.headingLine2}
        accentColor="text-[#E11D48]"
        description={content.squad.desc}
      />

      {/* Tabs for Mentors, Jury, Organizers */}
      <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-2">
        {content.squad.tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-bebas text-sm sm:text-base tracking-wider border-2 border-black shadow-[3px_3px_0px_#000] transition-all ${
              activeTab === tab
                ? 'bg-[#FFC800] text-black font-extrabold -translate-y-0.5'
                : 'bg-[#1C0509] text-white/75 hover:text-white hover:bg-[#2A080E]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Locked Silhouette Cards with CLASSIFIED, REVEALING SOON */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {Array.from({ length: content.squad.classifiedCount }).map((_, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[4px_4px_0px_#000] text-center flex flex-col items-center justify-between h-64 relative overflow-hidden group hover:border-[#E11D48] transition-colors"
          >
            {/* Top Classified Stamp */}
            <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E11D48]/20 text-[#E11D48] border border-[#E11D48]/40">
              CONFIDENTIAL
            </span>

            {/* Silhouette Figure */}
            <div className="w-18 h-18 rounded-full bg-[#120205] border-2 border-dashed border-white/20 flex items-center justify-center text-3xl filter grayscale opacity-60 group-hover:scale-105 transition-transform">
              👤
            </div>

            <div>
              <div className="font-bebas text-sm text-white mb-1">
                DOSSIER #{idx + 1}
              </div>
              <div className="font-mono text-[10px] text-[#FFC800] font-bold animate-pulse">
                CLASSIFIED, REVEALING SOON
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
