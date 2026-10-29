import React from 'react';

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
                Explore the 3D isometric cartoon satellite territory below to see where the 72-hour startup sprint takes place at Offbeat CCU, 36F Topsia Road — right on the shores of Dhopar Pukur Lake along the EM Bypass!
              </span>
            </p>
          </div>
        </div>

        {/* Right Side: Massive Heading */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-start md:items-end text-left md:text-right order-1 md:order-2">
          {/* Huge Bebas Title */}
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-white tracking-widest leading-[0.9] uppercase select-none drop-shadow-[4px_4px_0px_#000]">
            <span className="block text-white/90">THE ADDA</span>
            <span className="block text-[#E11D48] mt-0 sm:mt-1 lg:mt-2">TERRITORY.</span>
          </h2>
        </div>
      </div>

      {/* Full-width Wide 3D Animated Isometric Satellite Map (Convergence 1.0 Style) */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
        <a
          href="https://maps.google.com/?q=Offbeat+CCU+36F+Topsia+Road+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video sm:aspect-[4/3] md:aspect-[21/9] rounded-2xl sm:rounded-[20px] border-2 border-black bg-[#0F071D] group overflow-hidden cursor-pointer shadow-[6px_6px_0px_#000]"
          title="Click to open live Google Maps directions to AIC Techno (Offbeat CCU)"
        >
          {/* CSS Animation Keyframes for 3D Isometric Map */}
          <style>{`
            /* Southbound Traffic (Lane 1: Top-Right to Bottom-Left) */
            @keyframes taxiSouth1 {
              0% { transform: translate(1118px, -40px) rotate(-23.2deg); opacity: 0; }
              4% { opacity: 1; }
              96% { opacity: 1; }
              100% { transform: translate(818px, 660px) rotate(-23.2deg); opacity: 0; }
            }
            @keyframes carSouth2 {
              0% { transform: translate(1118px, -40px) rotate(-23.2deg); opacity: 0; }
              4% { opacity: 1; }
              96% { opacity: 1; }
              100% { transform: translate(818px, 660px) rotate(-23.2deg); opacity: 0; }
            }

            /* Northbound Traffic (Lane 2: Bottom-Left to Top-Right) */
            @keyframes cabNorth1 {
              0% { transform: translate(782px, 650px) rotate(156.8deg); opacity: 0; }
              4% { opacity: 1; }
              96% { opacity: 1; }
              100% { transform: translate(1082px, -50px) rotate(156.8deg); opacity: 0; }
            }
            @keyframes sedanNorth2 {
              0% { transform: translate(782px, 650px) rotate(156.8deg); opacity: 0; }
              4% { opacity: 1; }
              96% { opacity: 1; }
              100% { transform: translate(1082px, -50px) rotate(156.8deg); opacity: 0; }
            }

            /* Floating 3D Location Pin */
            @keyframes pinFloat3D {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-11px); }
            }

            /* Sonar Radar Wave Rings */
            @keyframes sonarWaveRing {
              0% { r: 10px; opacity: 0.95; stroke-width: 2.5px; }
              100% { r: 85px; opacity: 0; stroke-width: 0.5px; }
            }

            /* Water Shimmer */
            @keyframes lakeWaterShimmer {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.75; }
            }

            /* Rooftop String Lights */
            @keyframes cafeRooftopBlink {
              0%, 100% { opacity: 0.45; }
              50% { opacity: 0.95; }
            }

            .anim-taxi-south-1 { animation: taxiSouth1 7s linear infinite; }
            .anim-car-south-2 { animation: carSouth2 7s linear infinite; animation-delay: 3.5s; }
            .anim-cab-north-1 { animation: cabNorth1 8s linear infinite; }
            .anim-sedan-north-2 { animation: cabNorth1 8s linear infinite; animation-delay: 4s; }
            .anim-pin-3d { animation: pinFloat3D 2.6s ease-in-out infinite; }
            .anim-sonar-wave-1 { animation: sonarWaveRing 2.6s cubic-bezier(0, 0.2, 0.8, 1) infinite; }
            .anim-sonar-wave-2 { animation: sonarWaveRing 2.6s cubic-bezier(0, 0.2, 0.8, 1) infinite; animation-delay: 1.3s; }
            .anim-lake-shimmer { animation: lakeWaterShimmer 3.5s ease-in-out infinite; }
            .anim-rooftop-lights { animation: cafeRooftopBlink 2s ease-in-out infinite; }
          `}</style>

          {/* 3D Isometric SVG Canvas */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              viewBox="0 0 1400 620"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* 3D Night Sky & Ground Gradients */}
                <radialGradient id="isoGroundGlow" cx="45%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#1E0E38"/>
                  <stop offset="50%" stopColor="#140826"/>
                  <stop offset="100%" stopColor="#0A0314"/>
                </radialGradient>

                {/* Sunken Lake Depth Gradient */}
                <linearGradient id="lakeDepth" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#051930"/>
                  <stop offset="50%" stopColor="#092B4F"/>
                  <stop offset="100%" stopColor="#0E3D6E"/>
                </linearGradient>

                {/* 3D Lake Embankment Concrete Shadow */}
                <linearGradient id="embankmentShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#120A21"/>
                  <stop offset="100%" stopColor="#251442"/>
                </linearGradient>

                {/* EM Bypass Highway 3D Asphalt Gradient */}
                <linearGradient id="highway3D" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#170C2E"/>
                  <stop offset="50%" stopColor="#28154D"/>
                  <stop offset="100%" stopColor="#170C2E"/>
                </linearGradient>

                {/* Car Headlight Projection Cone */}
                <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFE600" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#FFE600" stopOpacity="0"/>
                </linearGradient>

                {/* Streetlight Radial Light Cones */}
                <radialGradient id="streetlightPool" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFE600" stopOpacity="0.35"/>
                  <stop offset="55%" stopColor="#FFE600" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#FFE600" stopOpacity="0"/>
                </radialGradient>

                {/* 3D Building Rooftop Gradients */}
                <linearGradient id="offbeatRoof" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BE123C"/>
                  <stop offset="60%" stopColor="#881337"/>
                  <stop offset="100%" stopColor="#4C0519"/>
                </linearGradient>
                <linearGradient id="techRoofCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F0FF"/>
                  <stop offset="100%" stopColor="#0284C7"/>
                </linearGradient>
                <linearGradient id="techRoofPink" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EC4899"/>
                  <stop offset="100%" stopColor="#9D174D"/>
                </linearGradient>

                {/* Isometric Grid Tile */}
                <pattern id="isoGridLines" width="60" height="34.64" patternUnits="userSpaceOnUse">
                  <path d="M 0 17.32 L 30 0 L 60 17.32 L 30 34.64 Z" fill="none" stroke="#6D28D9" strokeWidth="0.5" opacity="0.12"/>
                </pattern>
              </defs>

              {/* 1. 3D ISOMETRIC GROUND PLANE */}
              <rect width="1400" height="620" fill="url(#isoGroundGlow)"/>
              <rect width="1400" height="620" fill="url(#isoGridLines)"/>

              {/* 2. DHOPAR PUKUR LAKE (With 3D Sunken Embankment Depth) */}
              <g id="dhopar-pukur-3d">
                {/* 3D Embankment Drop Shadow Wall (Gives genuine depth to the lake) */}
                <path
                  d="M -20 -20 
                     L 430 -20 
                     C 410 90, 370 160, 340 220 
                     C 310 280, 390 320, 430 370 
                     C 470 420, 400 530, 280 580 
                     C 200 610, 90 635, -20 640 Z"
                  fill="url(#embankmentShadow)"
                  stroke="#381D61"
                  strokeWidth="4"
                />

                {/* Sunken Water Surface (Shifted down & right for 3D depth) */}
                <path
                  d="M -20 -10 
                     L 418 -10 
                     C 398 96, 358 166, 328 226 
                     C 298 286, 378 326, 418 376 
                     C 458 426, 388 536, 268 586 
                     C 188 616, 78 640, -20 645 Z"
                  fill="url(#lakeDepth)"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  opacity="0.95"
                />

                {/* 3D Concrete Embankment Rim Highlight */}
                <path
                  d="M 430 -20 C 410 90, 370 160, 340 220 C 310 280, 390 320, 430 370 C 470 420, 400 530, 280 580"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="2.5"
                  opacity="0.6"
                />

                {/* Shimmering Water Ripples */}
                <g className="anim-lake-shimmer" fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="14 8" opacity="0.4">
                  <path d="M 40 70 Q 140 60 240 75 T 340 65" />
                  <path d="M 60 150 Q 150 135 220 155 T 300 145" />
                  <path d="M 30 230 Q 120 220 210 235 T 280 225" />
                  <path d="M 50 310 Q 150 300 240 320 T 320 305" />
                  <path d="M 30 390 Q 130 380 220 400 T 300 385" />
                  <path d="M 20 470 Q 110 460 200 480 T 260 470" />
                </g>

                {/* 3D Wooden Lake Pier / Jetty extending into water */}
                <g transform="translate(320, 260) rotate(-25)">
                  {/* Pier Deck */}
                  <polygon points="0,0 60,0 55,22 -5,22" fill="#78350F" stroke="#000" strokeWidth="1.5"/>
                  {/* Wooden Planks */}
                  <line x1="15" y1="0" x2="10" y2="22" stroke="#451A03" strokeWidth="1.5"/>
                  <line x1="30" y1="0" x2="25" y2="22" stroke="#451A03" strokeWidth="1.5"/>
                  <line x1="45" y1="0" x2="40" y2="22" stroke="#451A03" strokeWidth="1.5"/>
                  {/* 3D Mooring Posts */}
                  <circle cx="58" cy="2" r="3" fill="#D97706" stroke="#000" strokeWidth="1"/>
                  <circle cx="53" cy="20" r="3" fill="#D97706" stroke="#000" strokeWidth="1"/>
                </g>

                {/* 3D Spherical Tree Clumps (Spheres with 3D shadow and highlight) */}
                <g opacity="0.9">
                  {/* Tree 1 */}
                  <circle cx="355" cy="170" r="14" fill="#065F46" />
                  <circle cx="351" cy="166" r="10" fill="#10B981" />
                  {/* Tree 2 */}
                  <circle cx="340" cy="280" r="15" fill="#065F46" />
                  <circle cx="336" cy="276" r="11" fill="#10B981" />
                  {/* Tree 3 */}
                  <circle cx="385" cy="330" r="16" fill="#065F46" />
                  <circle cx="380" cy="325" r="12" fill="#10B981" />
                  {/* Tree 4 */}
                  <circle cx="430" cy="400" r="17" fill="#065F46" />
                  <circle cx="425" cy="395" r="13" fill="#10B981" />
                  {/* Tree 5 */}
                  <circle cx="380" cy="480" r="18" fill="#065F46" />
                  <circle cx="375" cy="475" r="14" fill="#10B981" />
                  {/* Tree 6 */}
                  <circle cx="280" cy="570" r="16" fill="#065F46" />
                  <circle cx="276" cy="566" r="12" fill="#10B981" />
                </g>
              </g>

              {/* 3. TOPSIA ROAD (3D Approach Street) */}
              <g id="topsia-road-3d">
                <path
                  d="M 260 640 Q 420 540 540 450 L 630 390"
                  stroke="#170C2E"
                  strokeWidth="34"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 260 640 Q 420 540 540 450 L 630 390"
                  stroke="#26144A"
                  strokeWidth="28"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 260 640 Q 420 540 540 450 L 630 390"
                  stroke="#00F0FF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="6 6"
                  opacity="0.6"
                />

                {/* 3D Streetlamp Poles with Glowing Pools on Topsia Road */}
                <g>
                  {/* Lamp 1 */}
                  <circle cx="360" cy="570" r="32" fill="url(#streetlightPool)" />
                  <line x1="380" y1="580" x2="380" y2="555" stroke="#FFE600" strokeWidth="2.5" />
                  <circle cx="380" cy="554" r="3" fill="#FFE600" />
                  {/* Lamp 2 */}
                  <circle cx="480" cy="490" r="32" fill="url(#streetlightPool)" />
                  <line x1="500" y1="500" x2="500" y2="475" stroke="#FFE600" strokeWidth="2.5" />
                  <circle cx="500" cy="474" r="3" fill="#FFE600" />
                </g>
              </g>

              {/* 4. BISWA BANGLA SARANI (EM BYPASS - 3D 6-Lane Highway) */}
              <g id="em-bypass-3d-highway">
                {/* 3D Road Base Embankment */}
                <path
                  d="M 1100 -40 L 800 660"
                  stroke="#120724"
                  strokeWidth="86"
                  fill="none"
                />
                {/* 3D Asphalt Highway Deck */}
                <path
                  d="M 1100 -40 L 800 660"
                  stroke="url(#highway3D)"
                  strokeWidth="80"
                  fill="none"
                />
                {/* 3D Outer Highway Curbs (Glowing Neon Purple) */}
                <path
                  d="M 1060 -40 L 760 660"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 1140 -40 L 840 660"
                  stroke="#7C3AED"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                {/* Double Yellow Dividing Centerline */}
                <path
                  d="M 1098 -40 L 798 660"
                  stroke="#FFE600"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="16 12"
                />
                <path
                  d="M 1102 -40 L 802 660"
                  stroke="#FFE600"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="16 12"
                />
                {/* Lane Divider Dashes (White) */}
                <path
                  d="M 1080 -40 L 780 660"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="12 18"
                  opacity="0.45"
                />
                <path
                  d="M 1120 -40 L 820 660"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="12 18"
                  opacity="0.45"
                />

                {/* 3D Streetlamp Poles Standing Upright with Light Cones */}
                <g>
                  {/* Streetlamp 1 */}
                  <circle cx="1060" cy="50" r="45" fill="url(#streetlightPool)" />
                  <line x1="1040" y1="50" x2="1040" y2="20" stroke="#FFE600" strokeWidth="2.5"/>
                  <circle cx="1040" cy="19" r="3" fill="#FFE600"/>
                  {/* Streetlamp 2 */}
                  <circle cx="1010" cy="170" r="45" fill="url(#streetlightPool)" />
                  <line x1="990" y1="170" x2="990" y2="140" stroke="#FFE600" strokeWidth="2.5"/>
                  <circle cx="990" cy="139" r="3" fill="#FFE600"/>
                  {/* Streetlamp 3 */}
                  <circle cx="960" cy="290" r="45" fill="url(#streetlightPool)" />
                  <line x1="940" y1="290" x2="940" y2="260" stroke="#FFE600" strokeWidth="2.5"/>
                  <circle cx="940" cy="259" r="3" fill="#FFE600"/>
                  {/* Streetlamp 4 */}
                  <circle cx="910" cy="410" r="45" fill="url(#streetlightPool)" />
                  <line x1="890" y1="410" x2="890" y2="380" stroke="#FFE600" strokeWidth="2.5"/>
                  <circle cx="890" cy="379" r="3" fill="#FFE600"/>
                  {/* Streetlamp 5 */}
                  <circle cx="860" cy="530" r="45" fill="url(#streetlightPool)" />
                  <line x1="840" y1="530" x2="840" y2="500" stroke="#FFE600" strokeWidth="2.5"/>
                  <circle cx="840" cy="499" r="3" fill="#FFE600"/>
                </g>
              </g>

              {/* 5. 3D ISOMETRIC NEIGHBORHOOD BUILDINGS (Convergence 1.0 Aesthetic) */}
              <g id="isometric-city-blocks">
                
                {/* Building Block 1: 3D Innovation Tech Tower (Top-Right / Tangra) */}
                <g transform="translate(1220, 110)">
                  {/* Left Wall (Shadow) */}
                  <polygon points="0,50 -50,22 -50,-35 0,-8" fill="#1E0B38" stroke="#000" strokeWidth="1.5"/>
                  {/* Right Wall (Lit) */}
                  <polygon points="0,50 60,18 60,-40 0,-8" fill="#3D1A6D" stroke="#000" strokeWidth="1.5"/>
                  {/* Roof Slab */}
                  <polygon points="0,-8 -50,-35 10,-68 60,-40" fill="url(#techRoofPink)" stroke="#EC4899" strokeWidth="2"/>
                  {/* Glowing Windows */}
                  <polygon points="-40,10 -15,24 -15,14 -40,0" fill="#00F0FF"/>
                  <polygon points="-40,-12 -15,2 -15,-8 -40,-22" fill="#FFE600"/>
                  <polygon points="12,38 48,18 48,8 12,28" fill="#00F0FF"/>
                  <polygon points="12,18 48,-2 48,-12 12,8" fill="#FFE600"/>
                </g>

                {/* Building Block 2: 3D Warehouse / Industrial Shed with Pitched Roof */}
                <g transform="translate(1210, 290)">
                  <polygon points="0,40 -60,10 -60,-30 0,0" fill="#241042" stroke="#000" strokeWidth="1.5"/>
                  <polygon points="0,40 70,8 70,-32 0,0" fill="#381B64" stroke="#000" strokeWidth="1.5"/>
                  <polygon points="0,0 -60,-30 10,-60 70,-32" fill="#4C1D95" stroke="#7C3AED" strokeWidth="1.5"/>
                  {/* Roof Ventilator Caps */}
                  <polygon points="5,-45 15,-40 10,-55 0,-50" fill="#00F0FF"/>
                  <polygon points="25,-35 35,-30 30,-45 20,-40" fill="#00F0FF"/>
                </g>

                {/* Building Block 3: 3D Sports Court (Like Convergence 1.0 Basketball Court!) */}
                <g transform="translate(1210, 440)">
                  <polygon points="0,25 -55,0 15,-35 70,-10" fill="#065F46" stroke="#10B981" strokeWidth="2"/>
                  {/* Court markings */}
                  <line x1="-25" y1="12" x2="42" y2="-22" stroke="#FFFFFF" strokeWidth="1" opacity="0.8"/>
                  <ellipse cx="8" cy="-5" rx="10" ry="6" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.8"/>
                </g>

                {/* Building Block 4: Cute 3D Row Houses along South (Topsia West) */}
                <g transform="translate(490, 520)">
                  <polygon points="0,30 -35,12 -35,-15 0,3" fill="#1C0D30" stroke="#000" strokeWidth="1.5"/>
                  <polygon points="0,30 40,10 40,-17 0,3" fill="#311754" stroke="#000" strokeWidth="1.5"/>
                  <polygon points="0,3 -35,-15 5,-32 40,-17" fill="url(#techRoofCyan)" stroke="#00F0FF" strokeWidth="1.5"/>
                  <rect x="8" y="8" width="6" height="6" fill="#FFE600" />
                  <rect x="22" y="1" width="6" height="6" fill="#FFE600" />
                </g>

                {/* Building Block 5: North-West Villa Block */}
                <g transform="translate(480, 80)">
                  <polygon points="0,35 -40,15 -40,-15 0,5" fill="#1C0D30" stroke="#000" strokeWidth="1.5"/>
                  <polygon points="0,35 45,12 45,-18 0,5" fill="#311754" stroke="#000" strokeWidth="1.5"/>
                  <polygon points="0,5 -40,-15 5,-35 45,-18" fill="url(#techRoofPink)" stroke="#EC4899" strokeWidth="1.5"/>
                  <rect x="8" y="10" width="7" height="7" fill="#00F0FF" />
                  <rect x="24" y="2" width="7" height="7" fill="#FFE600" />
                </g>
              </g>

              {/* 6. AIC TECHNO @ OFFBEAT CCU (Main 3D Architectural Showpiece) */}
              <g id="offbeat-ccu-3d-campus">
                
                {/* 3D Paved Courtyard Platform */}
                <polygon
                  points="470,260 700,140 850,290 620,440"
                  fill="#1C0E33"
                  stroke="#7C3AED"
                  strokeWidth="3"
                />

                {/* 3D Parking Bays with Miniature Parked Cars */}
                <g opacity="0.85">
                  <line x1="510" y1="280" x2="540" y2="300" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
                  <line x1="535" y1="268" x2="565" y2="288" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
                  <line x1="560" y1="256" x2="590" y2="276" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
                  {/* 3D Parked Mini Cars */}
                  <g transform="translate(522, 285) rotate(-30)">
                    <rect x="-4" y="-7" width="8" height="14" rx="2" fill="#FFE600" stroke="#000" strokeWidth="1"/>
                    <rect x="-3" y="-3" width="6" height="5" rx="1" fill="#00F0FF"/>
                  </g>
                  <g transform="translate(547, 273) rotate(-30)">
                    <rect x="-4" y="-7" width="8" height="14" rx="2" fill="#00F0FF" stroke="#000" strokeWidth="1"/>
                    <rect x="-3" y="-3" width="6" height="5" rx="1" fill="#000"/>
                  </g>
                  <g transform="translate(572, 261) rotate(-30)">
                    <rect x="-4" y="-7" width="8" height="14" rx="2" fill="#E11D48" stroke="#000" strokeWidth="1"/>
                    <rect x="-3" y="-3" width="6" height="5" rx="1" fill="#FFF"/>
                  </g>
                </g>

                {/* 3D MULTI-TIER OFFBEAT CCU BUILDING */}
                <g transform="translate(660, 240)">
                  
                  {/* --- TIER 1: GROUND GLASS PODIUM --- */}
                  {/* Left Facade */}
                  <polygon points="0,110 -110,48 -110,-12 0,50" fill="#220B38" stroke="#000" strokeWidth="2.5"/>
                  {/* Right Facade */}
                  <polygon points="0,110 120,42 120,-18 0,50" fill="#3C1A5C" stroke="#000" strokeWidth="2.5"/>
                  {/* Podium Roof */}
                  <polygon points="0,50 -110,-12 10,-72 120,-18" fill="#581C87" stroke="#7C3AED" strokeWidth="2"/>

                  {/* Ground Entrance Canopy & Glass Lobby */}
                  <polygon points="-25,95 25,67 25,82 -25,110" fill="#00F0FF" opacity="0.9"/>
                  <polygon points="-15,85 15,68 35,80 5,97" fill="#FFE600" stroke="#000" strokeWidth="1"/>

                  {/* --- TIER 2: MAIN TOWER BLOCK (Rising 3D) --- */}
                  <g transform="translate(5, -45)">
                    {/* Left Wall (Deep Crimson) */}
                    <polygon points="0,65 -85,18 -85,-75 0,-28" fill="#9F1239" stroke="#000" strokeWidth="3"/>
                    {/* Right Wall (Violet Modern Glass) */}
                    <polygon points="0,65 95,12 95,-80 0,-28" fill="#4A1D6D" stroke="#000" strokeWidth="3"/>
                    {/* Rooftop Slab (Home of Café Offbeat Up There) */}
                    <polygon points="0,-28 -85,-75 10,-120 95,-80" fill="url(#offbeatRoof)" stroke="#FFE600" strokeWidth="3"/>

                    {/* Panoramic Windows on Left Wall */}
                    <g fill="#00F0FF">
                      <polygon points="-75,-45 -45,-28 -45,-15 -75,-32"/>
                      <polygon points="-35,-22 -5,-5 -5,8 -35,-9"/>
                      <polygon points="-75,-15 -45,2 -45,15 -75,-2" fill="#FFE600"/>
                      <polygon points="-35,8 -5,25 -5,38 -35,21" fill="#FFE600"/>
                    </g>

                    {/* Panoramic Windows on Right Wall */}
                    <g fill="#00F0FF">
                      <polygon points="12,-18 45,-36 45,-23 12,-5"/>
                      <polygon points="55,-42 85,-58 85,-45 55,-29"/>
                      <polygon points="12,12 45,-6 45,7 12,25" fill="#FF007F"/>
                      <polygon points="55,-12 85,-28 85,-15 55,1" fill="#FF007F"/>
                    </g>

                    {/* --- TIER 3: CAFÉ OFFBEAT UP THERE (Rooftop Lounge) --- */}
                    {/* Fairy String Lights across the rooftop */}
                    <path
                      d="M -70 -70 Q -30 -90 10 -110 T 80 -78"
                      stroke="#FFE600"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4 6"
                      className="anim-rooftop-lights"
                    />

                    {/* 3D Cafe Tables with Umbrellas */}
                    {/* Table 1: Cyan Umbrella */}
                    <g transform="translate(-40, -65)">
                      <line x1="0" y1="0" x2="0" y2="-12" stroke="#FFF" strokeWidth="1.5"/>
                      <circle cx="0" cy="-12" r="9" fill="#00F0FF" stroke="#000" strokeWidth="1.5"/>
                      <circle cx="0" cy="-12" r="3" fill="#FFE600"/>
                    </g>
                    {/* Table 2: Yellow Umbrella */}
                    <g transform="translate(15, -92)">
                      <line x1="0" y1="0" x2="0" y2="-12" stroke="#FFF" strokeWidth="1.5"/>
                      <circle cx="0" cy="-12" r="10" fill="#FFE600" stroke="#000" strokeWidth="1.5"/>
                      <circle cx="0" cy="-12" r="3" fill="#E11D48"/>
                    </g>
                    {/* Table 3: Pink Umbrella */}
                    <g transform="translate(50, -70)">
                      <line x1="0" y1="0" x2="0" y2="-12" stroke="#FFF" strokeWidth="1.5"/>
                      <circle cx="0" cy="-12" r="9" fill="#FF007F" stroke="#000" strokeWidth="1.5"/>
                      <circle cx="0" cy="-12" r="3" fill="#00F0FF"/>
                    </g>

                    {/* Illuminated Rooftop Neon Sign */}
                    <rect x="-35" y="-120" width="70" height="15" rx="3" fill="#000" stroke="#FFE600" strokeWidth="1.5"/>
                    <text x="0" y="-109" textAnchor="middle" fill="#FFE600" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="1">
                      OFFBEAT
                    </text>
                  </g>
                </g>

                {/* 3D FLOATING HERO LOCATION PIN (Above Offbeat CCU) */}
                <g transform="translate(665, 120)">
                  {/* Concentric Expanding Sonar Wave Rings */}
                  <circle cx="0" cy="0" r="10" fill="none" stroke="#00F0FF" className="anim-sonar-wave-1" />
                  <circle cx="0" cy="0" r="10" fill="none" stroke="#FFE600" className="anim-sonar-wave-2" />
                  <circle cx="0" cy="0" r="7" fill="#00F0FF" />

                  {/* 3D Pin with Vertical Float Animation */}
                  <g className="anim-pin-3d" transform="translate(0, -18)">
                    {/* 3D Cyan Pin Body with Glow */}
                    <path
                      d="M 0 -70 
                         C -24 -70, -40 -54, -40 -32 
                         C -40 -10, 0 0, 0 0 
                         C 0 0, 40 -10, 40 -32 
                         C 40 -54, 24 -70, 0 -70 Z"
                      fill="#00F0FF"
                      stroke="#000000"
                      strokeWidth="3.5"
                      style={{ filter: 'drop-shadow(0 0 16px rgba(0, 240, 255, 0.95))' }}
                    />
                    <circle cx="0" cy="-35" r="13" fill="#0E061A" stroke="#FFE600" strokeWidth="2.5" />
                    <text x="0" y="-30" textAnchor="middle" fill="#FFE600" fontSize="14" fontWeight="bold">✦</text>

                    {/* Top Callout Badge */}
                    <g transform="translate(0, -82)">
                      <rect
                        x="-140"
                        y="-26"
                        width="280"
                        height="32"
                        rx="8"
                        fill="#0A0314"
                        stroke="#00F0FF"
                        strokeWidth="2.5"
                        style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.95))' }}
                      />
                      <text
                        x="0"
                        y="-6"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontFamily="monospace"
                        fontWeight="900"
                        fontSize="12"
                        letterSpacing="1"
                      >
                        AIC TECHNO @ OFFBEAT CCU
                      </text>
                      <polygon points="0,6 -6,0 6,0" fill="#00F0FF" />
                    </g>
                  </g>
                </g>
              </g>

              {/* 7. 3D ISOMETRIC TAXIS & CARS (Fitted strictly to the road lanes) */}
              
              {/* SOUTHBOUND LANE 1 (Moving from Top-Right down to Bottom-Left) */}
              
              {/* Car 1: Iconic Kolkata Yellow Ambassador Taxi */}
              <g className="anim-taxi-south-1">
                {/* 3D Isometric Taxi Graphic */}
                <g>
                  {/* Ground Shadow */}
                  <ellipse cx="0" cy="2" rx="14" ry="7" fill="#000000" opacity="0.6"/>
                  {/* Forward Headlight Beam on Asphalt */}
                  <polygon points="-7,14 7,14 20,65 -20,65" fill="url(#headlightBeam)" opacity="0.65"/>
                  {/* Lower Yellow Body */}
                  <rect x="-8" y="-14" width="16" height="28" rx="4" fill="#EAB308" stroke="#000000" strokeWidth="1.5"/>
                  {/* Wheels */}
                  <rect x="-10" y="-11" width="2" height="6" rx="1" fill="#000"/>
                  <rect x="8" y="-11" width="2" height="6" rx="1" fill="#000"/>
                  <rect x="-10" y="5" width="2" height="6" rx="1" fill="#000"/>
                  <rect x="8" y="5" width="2" height="6" rx="1" fill="#000"/>
                  {/* Headlights */}
                  <circle cx="-5" cy="13" r="2" fill="#FFFFFF"/>
                  <circle cx="5" cy="13" r="2" fill="#FFFFFF"/>
                  {/* Windshield Glass */}
                  <polygon points="-6,-3 6,-3 5,6 -5,6" fill="#00F0FF" opacity="0.85"/>
                  {/* Cab Roof */}
                  <rect x="-6" y="-10" width="12" height="13" rx="2" fill="#CA8A04"/>
                  {/* Black Checker Strip on Taxi side */}
                  <rect x="-6" y="-5" width="12" height="2" fill="#000000"/>
                  {/* White TAXI Roof Sign */}
                  <rect x="-4" y="-8" width="8" height="3" rx="1" fill="#FFFFFF" stroke="#000" strokeWidth="0.5"/>
                </g>
              </g>

              {/* Car 2: Southbound Crimson Roadster */}
              <g className="anim-car-south-2">
                <g>
                  <ellipse cx="0" cy="2" rx="13" ry="6" fill="#000000" opacity="0.6"/>
                  <polygon points="-6,13 6,13 18,60 -18,60" fill="url(#headlightBeam)" opacity="0.6"/>
                  <rect x="-7" y="-13" width="14" height="26" rx="4" fill="#E11D48" stroke="#000000" strokeWidth="1.5"/>
                  <circle cx="-5" cy="12" r="2" fill="#FFFFFF"/>
                  <circle cx="5" cy="12" r="2" fill="#FFFFFF"/>
                  <polygon points="-5,-3 5,-3 4,5 -4,5" fill="#FFFFFF" opacity="0.85"/>
                  <rect x="-5" y="-9" width="10" height="11" rx="2" fill="#9F1239"/>
                </g>
              </g>

              {/* NORTHBOUND LANE 2 (Moving from Bottom-Left up to Top-Right) */}
              
              {/* Car 3: Northbound Cyan Tech Cab */}
              <g className="anim-cab-north-1">
                <g>
                  <ellipse cx="0" cy="2" rx="14" ry="7" fill="#000000" opacity="0.6"/>
                  <polygon points="-7,14 7,14 20,65 -20,65" fill="url(#headlightBeam)" opacity="0.65"/>
                  <rect x="-8" y="-14" width="16" height="28" rx="4" fill="#00F0FF" stroke="#000000" strokeWidth="1.5"/>
                  <circle cx="-5" cy="13" r="2" fill="#FFFFFF"/>
                  <circle cx="5" cy="13" r="2" fill="#FFFFFF"/>
                  <polygon points="-6,-3 6,-3 5,6 -5,6" fill="#000000" opacity="0.85"/>
                  <rect x="-6" y="-10" width="12" height="13" rx="2" fill="#0284C7"/>
                </g>
              </g>

              {/* Car 4: Northbound White Sedan */}
              <g className="anim-sedan-north-2">
                <g>
                  <ellipse cx="0" cy="2" rx="13" ry="6" fill="#000000" opacity="0.6"/>
                  <polygon points="-6,13 6,13 18,60 -18,60" fill="url(#headlightBeam)" opacity="0.6"/>
                  <rect x="-7" y="-13" width="14" height="26" rx="4" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5"/>
                  <circle cx="-5" cy="12" r="2" fill="#FFFFFF"/>
                  <circle cx="5" cy="12" r="2" fill="#FFFFFF"/>
                  <polygon points="-5,-3 5,-3 4,5 -4,5" fill="#1E0E38" opacity="0.85"/>
                  <rect x="-5" y="-9" width="10" height="11" rx="2" fill="#CBD5E1"/>
                </g>
              </g>

              {/* 8. GOOGLE MAPS STYLE LANDMARK CALLOUT PILLS (Convergence 1.0 exact look) */}
              
              {/* Landmark 1: Dhopar Pukur Lake */}
              <g transform="translate(160, 240)">
                <rect x="0" y="0" width="180" height="28" rx="14" fill="#0B132B" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#00F0FF" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">🌊</text>
                <text x="30" y="18" fill="#FFF9F2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Dhopar Pukur Lake
                </text>
              </g>

              {/* Landmark 2: Café Offbeat Up There (Rooftop) */}
              <g transform="translate(565, 80)">
                <rect x="0" y="0" width="200" height="28" rx="14" fill="#1C0A2A" stroke="#FFE600" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#FFE600" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">☕</text>
                <text x="30" y="18" fill="#FFE600" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Café Offbeat Up There
                </text>
              </g>

              {/* Landmark 3: Biswa Bangla Sarani (EM Bypass) */}
              <g transform="translate(980, 80) rotate(-23.2)">
                <rect x="0" y="0" width="190" height="26" rx="13" fill="#140A26" stroke="#FFE600" strokeWidth="1.5" />
                <circle cx="13" cy="13" r="7" fill="#FFE600" />
                <text x="13" y="17" textAnchor="middle" fontSize="9">🛣️</text>
                <text x="28" y="17" fill="#FFE600" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  BISWA BANGLA SARANI
                </text>
              </g>

              {/* Landmark 4: Topsia Tech District */}
              <g transform="translate(1190, 240)">
                <rect x="0" y="0" width="180" height="28" rx="14" fill="#16082B" stroke="#A855F7" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#A855F7" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">🏢</text>
                <text x="30" y="18" fill="#FFF9F2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Topsia Tech District
                </text>
              </g>

              {/* Landmark 5: Topsia Road Entrance */}
              <g transform="translate(290, 520)">
                <rect x="0" y="0" width="145" height="26" rx="13" fill="#100824" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="13" cy="13" r="7" fill="#00F0FF" />
                <text x="13" y="17" textAnchor="middle" fontSize="9">📍</text>
                <text x="28" y="17" fill="#FFF9F2" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  36F Topsia Road
                </text>
              </g>

            </svg>
          </div>

          {/* Bottom Satellite Telemetry Bar */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90 pointer-events-none z-20">
            <span className="px-3 py-1.5 rounded-full bg-[#0E061A]/95 border border-[#00F0FF]/40 text-[#00F0FF] font-bold shadow-[2px_2px_0px_#000] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span>22.5415° N, 88.3888° E · TOPSIA HQ · OFFBEAT CCU</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E11D48] text-white font-extrabold shadow-[2px_2px_0px_#000] hover:scale-105 transition-transform">
              <span>OPEN GOOGLE MAPS DIRECTIONS</span>
              <span>↗</span>
            </span>
          </div>
        </a>
      </div>

      {/* Character Quote at Bottom (convergence1.tech aesthetic) */}
      <div className="mt-4 sm:mt-8 flex justify-center px-2 sm:px-4 w-full">
        <p className="font-comic text-[11px] sm:text-base md:text-xl text-[#FFC800] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center">
          "If we get lost along the EM Bypass, I'm blaming Topshe's notebook directions entirely."{" "}
          <span className="text-[#E11D48] font-bold ml-1 sm:ml-2">· FELUDA</span>
        </p>
      </div>
    </section>
  );
};