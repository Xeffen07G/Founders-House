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
  description,
  className = "mb-6 sm:mb-8"
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 ${className}`}>
      <div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bebas leading-[0.95] tracking-wide uppercase">
          <span className="block text-[#FFFFFF] drop-shadow-[3px_3px_0px_#000]">{line1}</span>
          <span className={`block ${accentColor} drop-shadow-[3px_3px_0px_#000]`}>
            {line2}
          </span>
        </h2>
      </div>
    </div>
  );
};
