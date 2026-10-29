import React from 'react';

export const BackgroundSkyline = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Deep Neutral Dark Background (No Red Haze) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]" />

      {/* 2. HOWRAH BRIDGE BACKGROUND (Optimized WebP, explicit dimensions, zero CLS) */}
      <div className="absolute top-[20%] sm:top-[12%] inset-x-0 w-full h-[65vh] sm:h-[78vh] flex items-center justify-center pointer-events-none opacity-65 sm:opacity-75 overflow-hidden">
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" type="image/webp" srcSet="/howrah_bridge_mobile.webp" />
          <source type="image/webp" srcSet="/howrah_bridge_bg.webp" />
          <img
            src="/howrah_bridge_bg.jpg"
            alt="Howrah Bridge Comic Silhouette"
            width="1376"
            height="768"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter contrast-130 brightness-130"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)'
            }}
          />
        </picture>
      </div>

      {/* 3. Subtle Neutral Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

    </div>
  );
};
