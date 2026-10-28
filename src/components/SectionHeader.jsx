import React from 'react';

/**
 * SectionHeader Component (Convergence 1.0 exact structure)
 * - Small pill tag
 * - Huge Bebas Neue display heading with colored emphasis line
 * - Optional descriptive subtitle / badge
 * - 100% visible and accessible immediately across all devices
 */
export const SectionHeader = ({
  pill,
  line1,
  line2,
  accentColor = "text-[#E11D48]",
  description
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C0509] border border-[#E11D48]/60 text-[#FFF9F2] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[2px_2px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
          {pill}
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bebas leading-[0.95] tracking-wide uppercase">
          <span className="block text-[#FFFFFF] drop-shadow-[3px_3px_0px_#000]">{line1}</span>
          <span className={`block ${accentColor} drop-shadow-[3px_3px_0px_#000]`}>
            {line2}
          </span>
        </h2>
      </div>

      {description && (
        <div className="max-w-md p-4 rounded-xl bg-[#1C0509]/90 border-l-4 border-l-[#E11D48] border-y border-r border-black text-sm text-[#FFF9F2]/90 leading-relaxed font-poppins shadow-[3px_3px_0px_#000]">
          {description}
        </div>
      )}
    </div>
  );
};
