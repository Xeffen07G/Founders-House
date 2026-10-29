import React from 'react';
import { content } from '../content';
import { mascots } from '../assets/characters/mascots';

export const Venue = () => {
  return (
    <section id="venue" className="relative w-full py-12 sm:py-24 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center z-10">
      
      {/* Top Header Row matching convergence1.tech layout */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 mb-6 sm:mb-12 relative z-30">
        
        {/* Left Side: Speech / Description Box */}
        <div className="w-full md:w-[55%] lg:w-[60%] flex justify-start order-2 md:order-1">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 sm:p-8 rounded-2xl sm:rounded-[20px] relative w-full h-full flex flex-col justify-center shadow-[4px_4px_0px_#000]">
            <p className="font-comic text-sm sm:text-lg lg:text-xl text-[#FFF9F2]/90 leading-relaxed">
              <span className="block mb-2 sm:mb-3">
                Welcome to the home of Founders' House. The{" "}
                <span className="text-[#FFC800] drop-shadow-[0_0_8px_rgba(255,200,0,0.6)] uppercase tracking-wider font-bold">
                  AIC Techno (Atal Incubation Centre)
                </span>{" "}
                grounds have been unlocked.
              </span>
              <span className="block text-white/70 text-xs sm:text-base">
                Navigate the illustrated cartoon satellite territory below to discover where the ultimate 72-hour Kolkata hackathon showdown will take place at Offbeat CCU, 36F Topsia Road!
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Pill + Massive Heading */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-start md:items-end text-left md:text-right order-1 md:order-2">
          {/* Pill Badge */}
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 sm:px-4 py-1 sm:py-1.5 mb-2 sm:mb-4 backdrop-blur-md">
            <span className="font-bebas text-sm sm:text-base tracking-widest uppercase text-white">
              The Arena
            </span>
          </div>

          {/* Huge Bebas Title */}
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-widest leading-[0.9] uppercase select-none drop-shadow-[4px_4px_0px_#000]">
            <span className="block text-white/90">THE ADDA</span>
            <span className="block text-[#E11D48] mt-0 sm:mt-1 lg:mt-2">TERRITORY.</span>
          </h2>
        </div>
      </div>

      {/* Full-width Wide Stylized Animated Cartoon Satellite Map (convergence1.tech Titan Map aesthetic) */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
        <a
          href="https://maps.google.com/?q=Offbeat+CCU+36F+Topsia+Road+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video sm:aspect-[4/3] md:aspect-[21/9] rounded-2xl sm:rounded-[20px] border-2 border-black bg-[#160309] group overflow-hidden cursor-pointer shadow-[6px_6px_0px_#000]"
        >
          {/* CARTOON SATELLITE SVG CANVAS */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              viewBox="0 0 1400 600"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* City Terrain Gradients */}
                <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4A0E1A" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#25050C" stopOpacity="0.9"/>
                  <stop offset="100%" stopColor="#120205" stopOpacity="1"/>
                </radialGradient>
                <linearGradient id="bypassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#374151"/>
                  <stop offset="50%" stopColor="#4B5563"/>
                  <stop offset="100%" stopColor="#1F2937"/>
                </linearGradient>
                <linearGradient id="flyoverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B7280"/>
                  <stop offset="100%" stopColor="#374151"/>
                </linearGradient>
                <pattern id="streetGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E11D48" strokeWidth="0.75" opacity="0.12"/>
                </pattern>
                <pattern id="dotMatrix" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#FFC800" opacity="0.12"/>
                </pattern>
              </defs>

              {/* Background Earth/Urban Base */}
              <rect width="1400" height="600" fill="url(#cityGlow)"/>
              <rect width="1400" height="600" fill="url(#streetGrid)"/>
              <rect width="1400" height="600" fill="url(#dotMatrix)"/>

              {/* Distant River Wetland / Lake Curve (East Kolkata Wetlands area near Topsia) */}
              <path
                d="M1000 0 Q1120 180 1200 320 T1400 500 L1400 0 Z"
                fill="#0A1E2F"
                opacity="0.65"
              />
              <path
                d="M1000 0 Q1120 180 1200 320 T1400 500"
                stroke="#19D3F3"
                strokeWidth="3"
                fill="none"
                opacity="0.4"
                strokeDasharray="8 4"
              />

              {/* Urban Building Blocks (Isometric Cartoon Style) */}
              {/* Sector 1: Park Circus Blocks (West) */}
              <g fill="#2A0812" stroke="#000000" strokeWidth="2" opacity="0.8">
                <rect x="60" y="80" width="70" height="55" rx="6"/>
                <rect x="150" y="60" width="85" height="70" rx="6"/>
                <rect x="70" y="160" width="60" height="80" rx="6"/>
                <rect x="150" y="150" width="75" height="90" rx="6"/>
                <rect x="80" y="270" width="90" height="65" rx="6"/>
                <rect x="190" y="260" width="65" height="75" rx="6"/>
              </g>

              {/* Sector 2: Science City Complex (South-West) */}
              <g opacity="0.85">
                {/* Science City Space Odyssey Geodesic Dome */}
                <circle cx="340" cy="450" r="48" fill="#1C0509" stroke="#19D3F3" strokeWidth="3"/>
                <circle cx="340" cy="450" r="32" fill="#E11D48" fillOpacity="0.25" stroke="#FFC800" strokeWidth="2"/>
                <line x1="292" y1="450" x2="388" y2="450" stroke="#19D3F3" strokeWidth="1.5"/>
                <line x1="340" y1="402" x2="340" y2="498" stroke="#19D3F3" strokeWidth="1.5"/>
                <text x="340" y="520" textAnchor="middle" fill="#19D3F3" fontSize="12" fontFamily="monospace" fontWeight="bold">SCIENCE CITY</text>
              </g>

              {/* Sector 3: Topsia / Tangra Neighborhood Blocks */}
              <g fill="#1F050C" stroke="#000000" strokeWidth="2" opacity="0.75">
                <rect x="520" y="60" width="80" height="65" rx="6"/>
                <rect x="620" y="50" width="90" height="75" rx="6"/>
                <rect x="500" y="380" width="95" height="80" rx="6"/>
                <rect x="620" y="390" width="110" height="70" rx="6"/>
                <rect x="940" y="260" width="85" height="80" rx="6"/>
                <rect x="1050" y="250" width="95" height="95" rx="6"/>
              </g>

              {/* MAJOR ARTERIAL ROADS (Cartoon Curved Highway Rails) */}
              
              {/* EM BYPASS (High-speed 6-lane North-South Spine) */}
              <g>
                <path
                  d="M480 -20 Q440 200 420 340 T380 620"
                  stroke="#1E293B"
                  strokeWidth="48"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M480 -20 Q440 200 420 340 T380 620"
                  stroke="#334155"
                  strokeWidth="40"
                  fill="none"
                />
                {/* Yellow Center Divider Dashes */}
                <path
                  d="M480 -20 Q440 200 420 340 T380 620"
                  stroke="#FFC800"
                  strokeWidth="3.5"
                  fill="none"
                  strokeDasharray="16 14"
                />
                {/* White Shoulder Edges */}
                <path
                  d="M480 -20 Q440 200 420 340 T380 620"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.4"
                />
                <text x="460" y="80" fill="#FFC800" fontSize="13" fontFamily="monospace" fontWeight="bold" transform="rotate(-15 460 80)">EM BYPASS (NORTH ➔)</text>
              </g>

              {/* MAA FLYOVER (Elevated Viaduct Spanning Across East-West) */}
              <g>
                <path
                  d="M0 240 Q400 220 720 200 T1400 160"
                  stroke="#000000"
                  strokeWidth="36"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d="M0 240 Q400 220 720 200 T1400 160"
                  stroke="url(#flyoverGrad)"
                  strokeWidth="30"
                  fill="none"
                />
                <path
                  d="M0 240 Q400 220 720 200 T1400 160"
                  stroke="#E11D48"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="12 12"
                />
                <text x="140" y="215" fill="#FFFFFF" fontSize="12" fontFamily="monospace" fontWeight="bold">MAA FLYOVER (➔ AIRPORT / SECTOR V)</text>
              </g>

              {/* TOPSIA ROAD (Direct Arterial to Offbeat CCU) */}
              <g>
                <path
                  d="M430 260 L750 340 L880 380"
                  stroke="#374151"
                  strokeWidth="24"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M430 260 L750 340 L880 380"
                  stroke="#E11D48"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="8 8"
                />
                <text x="540" y="325" fill="#19D3F3" fontSize="11" fontFamily="monospace" fontWeight="bold">TOPSIA ROAD</text>
              </g>

              {/* AIC TECHNO @ OFFBEAT CCU COMPOUND (Hero Target Complex) */}
              <g id="offbeat-complex">
                {/* Soft Campus Ambient Glow */}
                <circle cx="760" cy="310" r="130" fill="#E11D48" fillOpacity="0.22" filter="blur(16px)"/>
                
                {/* Outer Compound Ground */}
                <rect x="660" y="220" width="200" height="150" rx="20" fill="#25050E" stroke="#FFC800" strokeWidth="4"/>
                
                {/* Offbeat Building Structure (Main Incubation Block) */}
                <rect x="680" y="240" width="160" height="90" rx="14" fill="#E11D48" stroke="#000000" strokeWidth="3.5"/>
                
                {/* Windows Strip (Cartoon Block Lights) */}
                <rect x="696" y="255" width="22" height="18" rx="3" fill="#FFC800"/>
                <rect x="728" y="255" width="22" height="18" rx="3" fill="#FFC800"/>
                <rect x="760" y="255" width="22" height="18" rx="3" fill="#19D3F3"/>
                <rect x="792" y="255" width="22" height="18" rx="3" fill="#FFC800"/>

                <rect x="696" y="285" width="22" height="18" rx="3" fill="#19D3F3"/>
                <rect x="728" y="285" width="22" height="18" rx="3" fill="#FFC800"/>
                <rect x="760" y="285" width="22" height="18" rx="3" fill="#FFC800"/>
                <rect x="792" y="285" width="22" height="18" rx="3" fill="#19D3F3"/>

                {/* Building Entrance & Roof Flag */}
                <rect x="744" y="315" width="32" height="15" rx="3" fill="#000000"/>
                <polygon points="760,225 785,215 760,205" fill="#FFC800"/>
                <line x1="760" y1="205" x2="760" y2="240" stroke="#000000" strokeWidth="2.5"/>

                {/* Building Label Plate */}
                <rect x="675" y="340" width="170" height="22" rx="6" fill="#000000" stroke="#FFC800" strokeWidth="2"/>
                <text x="760" y="355" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="900" letterSpacing="1">
                  OFFBEAT CCU · 36F
                </text>
              </g>

              {/* Kolkata Heritage Tram Route Line (Illustrated Rail with Stops) */}
              <g opacity="0.85">
                <path
                  d="M100 480 Q450 420 850 460 T1400 480"
                  stroke="#19D3F3"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="14 6"
                />
                <circle cx="280" cy="452" r="5" fill="#FFC800"/>
                <circle cx="680" cy="442" r="5" fill="#FFC800"/>
                <circle cx="1080" cy="468" r="5" fill="#FFC800"/>
                <text x="140" y="470" fill="#19D3F3" fontSize="10" fontFamily="monospace" fontWeight="bold">TRAM TRACK #26</text>
              </g>

              {/* LANDMARK CALLOUT PINS */}
              {/* Howrah Bridge Pin (West Direction) */}
              <g transform="translate(40, 400)">
                <circle cx="18" cy="18" r="16" fill="#1C0509" stroke="#E11D48" strokeWidth="2"/>
                <text x="18" y="22" textAnchor="middle" fill="#FFC800" fontSize="12">🌉</text>
                <text x="42" y="16" fill="#FFF9F2" fontSize="11" fontFamily="monospace" fontWeight="bold">HOWRAH BRIDGE</text>
                <text x="42" y="28" fill="#E11D48" fontSize="9" fontFamily="monospace">7 KM WEST ➔</text>
              </g>

              {/* Park Circus 7-Point Crossing Pin */}
              <g transform="translate(60, 20)">
                <circle cx="18" cy="18" r="14" fill="#1C0509" stroke="#FFC800" strokeWidth="2"/>
                <text x="18" y="22" textAnchor="middle" fill="#19D3F3" fontSize="11">📍</text>
                <text x="40" y="16" fill="#FFF9F2" fontSize="10" fontFamily="monospace" fontWeight="bold">PARK CIRCUS</text>
                <text x="40" y="27" fill="#FFC800" fontSize="8" fontFamily="monospace">2 KM ➔</text>
              </g>

              {/* Salt Lake Sector V Gateway Pin */}
              <g transform="translate(1120, 40)">
                <circle cx="18" cy="18" r="14" fill="#1C0509" stroke="#19D3F3" strokeWidth="2"/>
                <text x="18" y="22" textAnchor="middle" fill="#19D3F3" fontSize="11">💻</text>
                <text x="40" y="16" fill="#FFF9F2" fontSize="10" fontFamily="monospace" fontWeight="bold">SECTOR V TECH HUB</text>
                <text x="40" y="27" fill="#19D3F3" fontSize="8" fontFamily="monospace">IT CORRIDOR ➔</text>
              </g>
            </svg>
          </div>

          {/* ANIMATED CARTOON VEHICLES DRIVING ALONG THE ROADS */}
          
          {/* Animated Kolkata Yellow Ambassador Taxi driving along EM Bypass */}
          <div className="absolute top-0 left-[28%] pointer-events-none z-10 animate-drive-taxi">
            <div
              className="transform scale-75 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              dangerouslySetInnerHTML={{ __html: mascots.yellowTaxi ? mascots.yellowTaxi(85) : '' }}
            />
          </div>

          {/* Animated Kolkata Auto-Rickshaw on Maa Flyover */}
          <div className="absolute top-[28%] left-0 pointer-events-none z-10 animate-drive-auto">
            <div
              className="transform scale-75 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              dangerouslySetInnerHTML={{ __html: mascots.autoRickshaw ? mascots.autoRickshaw(75) : '' }}
            />
          </div>

          {/* Animated Kolkata Cycle Rickshaw crossing Topsia Road */}
          <div className="absolute top-[48%] right-0 pointer-events-none z-10 animate-drive-rickshaw">
            <div
              className="transform scale-75 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              dangerouslySetInnerHTML={{ __html: mascots.cycleRickshaw ? mascots.cycleRickshaw(75) : '' }}
            />
          </div>

          {/* Animated Kolkata Heritage Tram on Tramline */}
          <div className="absolute bottom-4 left-1/4 pointer-events-none z-10 animate-tram-glow hidden md:block">
            <div
              className="transform scale-75 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
              dangerouslySetInnerHTML={{ __html: mascots.tramCar ? mascots.tramCar(110) : '' }}
            />
          </div>

          {/* 360° Rotating Radar Sweep Arc originating from Offbeat CCU */}
          <div className="absolute top-[48%] left-[54%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
            <svg className="w-80 h-80 opacity-40 animate-radar-sweep" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="radarArc" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFC800" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#E11D48" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M100 100 L100 0 A100 100 0 0 1 180 40 Z" fill="url(#radarArc)"/>
            </svg>
          </div>

          {/* THE BOUNCING TITAN-STYLE LOCATION PIN (Pointed directly at Offbeat CCU) */}
          <div className="absolute top-[48%] left-[54%] transform -translate-x-1/2 -translate-y-16 sm:-translate-y-24 md:-translate-y-28 flex flex-col items-center pointer-events-none z-30 animate-bounce">
            
            {/* Concentric Sonar Ring Waves */}
            <div className="absolute -top-4 w-28 h-28 rounded-full border-2 border-[#E11D48] animate-sonar-ping pointer-events-none" />

            {/* Glowing Map Pin Icon */}
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14 text-[#E11D48] drop-shadow-[0_0_16px_rgba(225,29,72,1)]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>

            {/* Floating Title Banner */}
            <div className="mt-1 px-4 py-1.5 bg-[#120205] border-2 border-black rounded-full shadow-[4px_4px_0px_#000] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48]" />
              <span className="font-bebas text-xs sm:text-base font-bold tracking-[0.2em] text-white uppercase whitespace-nowrap">
                OFFBEAT CCU
              </span>
            </div>

            <span className="font-mono text-[9px] sm:text-[11px] text-[#FFC800] font-bold tracking-widest mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] uppercase">
              36F TOPSIA ROAD · KOLKATA 700039
            </span>
          </div>

          {/* Bottom Satellite Telemetry Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 pointer-events-none z-20">
            <span className="px-3 py-1 rounded bg-[#0B0204]/90 border border-white/20 text-[#FFC800] font-bold shadow-[2px_2px_0px_#000]">
              📍 22.5415° N, 88.3888° E · TOPSIA HQ
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded bg-[#E11D48] text-white font-extrabold shadow-[2px_2px_0px_#000]">
              CLICK MAP TO OPEN LIVE GOOGLE NAVIGATION ↗
            </span>
          </div>
        </a>
      </div>

      {/* Character Quote at Bottom (Exact convergence1.tech Robin quote structure) */}
      <div className="mt-4 sm:mt-8 flex justify-center px-2 sm:px-4 w-full">
        <p className="font-comic text-[11px] sm:text-base md:text-xl text-[#FFC800] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center">
          "If we get lost along the EM Bypass, I'm blaming Topshe's notebook directions entirely."{" "}
          <span className="text-[#E11D48] font-bold ml-1 sm:ml-2">· FELUDA</span>
        </p>
      </div>
    </section>
  );
};
