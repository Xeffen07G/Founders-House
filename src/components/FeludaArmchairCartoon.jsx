import React from 'react';

export const FeludaArmchairCartoon = ({
  className = '',
  quote = "Bhabte shuru koro. Magojastro holo shobcheye boro weapon."
}) => {
  return (
    <div className={`relative flex flex-col items-center select-none w-full max-w-[420px] mx-auto ${className}`}>
      
      {/* 1. COMIC SPEECH BUBBLE */}
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

      {/* 2. MAIN CHARACTER PANEL (Cartoon Illustration) */}
      <div className="relative w-full rounded-2xl overflow-hidden border-4 border-black bg-[#1C0509] shadow-[8px_8px_0px_#000] group">
        
        {/* Top Comic Corner Badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120205]/90 border border-black/80 shadow-[2px_2px_0px_#000] text-[10px] font-mono font-bold tracking-widest text-[#FFC800] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
          <span>MAGOJASTRO COMIC</span>
        </div>

        {/* Cartoon Image Display with WebP */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden flex items-center justify-center bg-[#0C0103]">
          <picture className="w-full h-full">
            <source type="image/webp" srcSet="/feluda_cartoon_armchair.webp" />
            <img
              src="/feluda_cartoon_armchair.jpg"
              alt="Cartoon Feluda sitting in vintage armchair with smoking cigarette"
              width="896"
              height="1200"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </picture>

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

    </div>
  );
};
