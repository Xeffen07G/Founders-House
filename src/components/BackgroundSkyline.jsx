import React from 'react';

export const BackgroundSkyline = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Deep Atmospheric Gradient & Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090103] via-[#120205] to-[#0A0103]" />
      
      {/* Ambient Crimson Sky Haze */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-[#E11D48]/20 via-[#881337]/15 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#FFC800]/10 rounded-full blur-[150px]" />

      {/* 2. HOWRAH BRIDGE BACKGROUND (Brighter & Luminous Transparency without blend-mode compositing stalls) */}
      <div className="absolute top-[24%] sm:top-[16%] inset-x-0 w-full h-[60vh] sm:h-[72vh] flex items-center justify-center pointer-events-none opacity-25 sm:opacity-35 overflow-hidden">
        <img
          src="/howrah_bridge_bg.jpg"
          alt="Howrah Bridge Comic Silhouette"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-135"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* 3. Delicate Kolkata Tech Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(225, 29, 72, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225, 29, 72, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

    </div>
  );
};
