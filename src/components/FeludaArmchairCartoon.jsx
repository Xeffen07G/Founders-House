import React, { useState } from 'react';

export const FeludaArmchairCartoon = ({
  className = '',
  quote = "Bhabte shuru koro. Magojastro holo shobcheye boro weapon."
}) => {
  const [activeTab, setActiveTab] = useState('cartoon'); // 'cartoon' | 'photo'

  return (
    <div className={`relative flex flex-col items-center select-none w-full max-w-[420px] mx-auto ${className}`}>
      
      {/* 1. COMIC SPEECH BUBBLE (Clean layout with proper margins, zero collision) */}
      <div className="relative mb-5 w-full bg-[#FFFFFF] text-black p-4 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] z-20 animate-bounce-subtle">
        <p className="font-comic text-xs sm:text-sm font-bold leading-snug">
          "{quote}"
        </p>
        <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/20">
          <span className="font-mono text-[10px] text-[#E11D48] font-extrabold uppercase tracking-wider">
            PRADOSH C. MITTER (FELUDA)
          </span>
          <span className="text-sm">🕵️‍♂️</span>
        </div>
        {/* Speech bubble pointer notch pointing down towards Feluda */}
        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-b-3 border-r-3 border-black transform rotate-45" />
      </div>

      {/* 2. MAIN CHARACTER PANEL (Convergence Comic Frame) */}
      <div className="relative w-full rounded-2xl overflow-hidden border-4 border-black bg-[#1C0509] shadow-[8px_8px_0px_#000] group">
        
        {/* Top Comic Corner Badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120205]/90 border border-black/80 shadow-[2px_2px_0px_#000] text-[10px] font-mono font-bold tracking-widest text-[#FFC800] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          <span>{activeTab === 'cartoon' ? 'MAGOJASTRO COMIC' : 'RAY ARCHIVE'}</span>
        </div>

        {/* Floating Comic Star */}
        <div className="absolute top-3 right-3 z-20 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
          ⚡
        </div>

        {/* Image Display */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden flex items-center justify-center bg-[#0C0103]">
          {activeTab === 'cartoon' ? (
            <img
              src="/feluda_cartoon_armchair.jpg"
              alt="Cartoon Feluda sitting in vintage armchair with smoking cigarette"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img
              src="/feluda_armchair_photo.png"
              alt="Satyajit Ray archive reference of Feluda in armchair"
              className="w-full h-full object-cover object-top grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
            />
          )}

          {/* Bottom subtle gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#120205] via-[#120205]/40 to-transparent pointer-events-none" />
        </div>

        {/* Bottom Banner inside the frame */}
        <div className="px-4 py-2.5 bg-[#120205] border-t-2 border-black flex items-center justify-between">
          <span className="font-mono text-[10px] text-white/70 font-bold uppercase tracking-wider">
            21 RAJANI SEN ROAD · BALI
          </span>
          <span className="font-mono text-[10px] text-[#FFC800] font-extrabold uppercase">
            CHARMINAR · 72H
          </span>
        </div>
      </div>

      {/* 3. CLEAN BOTTOM TOGGLE BAR (Separated from the bubble, perfectly accessible) */}
      <div className="flex items-center gap-2 mt-4 z-10">
        <button
          type="button"
          onClick={() => setActiveTab('cartoon')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all border-2 border-black ${
            activeTab === 'cartoon'
              ? 'bg-[#E11D48] text-white shadow-[3px_3px_0px_#000] -translate-y-0.5'
              : 'bg-[#1C0509] text-white/70 hover:text-white hover:bg-[#2A080E]'
          }`}
        >
          ✦ CARTOON ART
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('photo')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all border-2 border-black ${
            activeTab === 'photo'
              ? 'bg-[#FFC800] text-black shadow-[3px_3px_0px_#000] -translate-y-0.5'
              : 'bg-[#1C0509] text-white/70 hover:text-white hover:bg-[#2A080E]'
          }`}
        >
          📷 RAY ARCHIVE
        </button>
      </div>

    </div>
  );
};
