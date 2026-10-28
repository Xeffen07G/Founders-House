import React from 'react';

export const BackgroundSkyline = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Deep Atmospheric Gradient & Red Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090103] via-[#120205] to-[#0A0103]" />
      
      {/* Ambient Crimson Sky Haze */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-[#E11D48]/15 via-[#881337]/10 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#FFC800]/5 rounded-full blur-[150px]" />

      {/* 2. LAYER 1: DRIFTING CARTOON CLOUDS (Slow Ambient Layer) */}
      <div className="absolute top-8 inset-x-[-15%] w-[130%] h-96 opacity-25 animate-drift-slow pointer-events-none">
        <svg viewBox="0 0 1600 400" className="w-full h-full fill-none">
          {/* Cloud Formation A */}
          <path
            d="M100 220 Q160 160 250 180 Q320 120 420 150 Q510 130 580 200 Q650 220 620 270 Q450 300 280 290 Q120 280 100 220 Z"
            fill="#FFFFFF"
            opacity="0.5"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Cloud Formation B */}
          <path
            d="M850 180 Q920 110 1020 130 Q1100 80 1210 110 Q1300 100 1370 160 Q1440 210 1390 260 Q1220 290 1050 280 Q880 270 850 180 Z"
            fill="#FFFFFF"
            opacity="0.45"
            stroke="#000000"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* LAYER 2: DRIFTING CARTOON CLOUDS (Faster Lower Layer) */}
      <div className="absolute top-36 inset-x-[-20%] w-[140%] h-80 opacity-35 animate-drift-fast pointer-events-none">
        <svg viewBox="0 0 1600 350" className="w-full h-full fill-none">
          {/* Cloud Formation C */}
          <path
            d="M380 150 Q450 90 560 110 Q640 60 740 90 Q820 80 880 140 Q940 180 900 230 Q750 260 600 250 Q440 240 380 150 Z"
            fill="#FFF5EB"
            opacity="0.4"
            stroke="#E11D48"
            strokeWidth="1.5"
          />
          {/* Cloud Formation D */}
          <path
            d="M1150 160 Q1220 100 1320 120 Q1390 70 1480 100 Q1550 120 1590 170 Q1600 230 1540 250 Q1380 270 1250 260 Q1140 240 1150 160 Z"
            fill="#FFF5EB"
            opacity="0.35"
            stroke="#FFC800"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* 3. HOWRAH BRIDGE BACKGROUND (Cartoonish, Screen Blended & Semi-Transparent) */}
      <div className="absolute top-[28%] sm:top-[22%] inset-x-0 w-full h-[55vh] sm:h-[65vh] flex items-center justify-center pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
        <img
          src="/howrah_bridge_bg.jpg"
          alt="Howrah Bridge Comic Silhouette"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-110"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* 4. VECTOR SUSPENSION LIGHTS (Pulsing Amber & Crimson Dots along the Bridge Horizon) */}
      <div className="absolute top-[48%] inset-x-0 w-full h-12 flex justify-around items-center opacity-40 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#FFC800] animate-ping" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFC800] animate-ping" style={{ animationDelay: '1.2s' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-[#19D3F3] animate-pulse" style={{ animationDelay: '0.6s' }} />
        <span className="w-2 h-2 rounded-full bg-[#FFC800] animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      {/* 5. Delicate Kolkata Tech Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(225, 29, 72, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225, 29, 72, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

    </div>
  );
};
