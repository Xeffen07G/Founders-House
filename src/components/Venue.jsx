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
                Explore the illustrated animated satellite map below to see exactly where the 72-hour startup sprint takes place at Offbeat CCU, 36F Topsia Road — nestled right between Dhopar Pukur Lake and the EM Bypass!
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

      {/* Full-width Wide Animated Isometric Satellite Map (Convergence 1.0 Style) */}
      <div className="w-full max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
        <a
          href="https://maps.google.com/?q=Offbeat+CCU+36F+Topsia+Road+Kolkata"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full aspect-video sm:aspect-[4/3] md:aspect-[21/9] rounded-2xl sm:rounded-[20px] border-2 border-black bg-[#0E061A] group overflow-hidden cursor-pointer shadow-[6px_6px_0px_#000]"
          title="Click to open live Google Maps directions to AIC Techno (Offbeat CCU)"
        >
          {/* CSS Animation Keyframes for the Interactive Map */}
          <style>{`
            @keyframes carSouth {
              0% { transform: translate(0, 0); opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { transform: translate(-230px, 660px); opacity: 0; }
            }
            @keyframes carNorth {
              0% { transform: translate(0, 0); opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { transform: translate(230px, -660px); opacity: 0; }
            }
            @keyframes metroSlide {
              0% { transform: translate(0, 0); opacity: 0; }
              5% { opacity: 1; }
              95% { opacity: 1; }
              100% { transform: translate(-220px, 640px); opacity: 0; }
            }
            @keyframes waterPulse {
              0%, 100% { opacity: 0.25; transform: scale(1); }
              50% { opacity: 0.65; transform: scale(1.02); }
            }
            @keyframes pinBob {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-9px); }
            }
            @keyframes sonarRing {
              0% { r: 8px; opacity: 0.9; stroke-width: 2.5px; }
              100% { r: 75px; opacity: 0; stroke-width: 0.5px; }
            }
            @keyframes lightBlink {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 0.85; }
            }
            .anim-car-south-1 { animation: carSouth 8s linear infinite; }
            .anim-car-south-2 { animation: carSouth 8s linear infinite; animation-delay: 4s; }
            .anim-car-north-1 { animation: carNorth 9s linear infinite; }
            .anim-car-north-2 { animation: carNorth 9s linear infinite; animation-delay: 4.5s; }
            .anim-metro { animation: metroSlide 11s linear infinite; }
            .anim-water { animation: waterPulse 4s ease-in-out infinite; transform-origin: 200px 300px; }
            .anim-pin { animation: pinBob 2.6s ease-in-out infinite; }
            .anim-sonar-1 { animation: sonarRing 2.6s cubic-bezier(0, 0.2, 0.8, 1) infinite; }
            .anim-sonar-2 { animation: sonarRing 2.6s cubic-bezier(0, 0.2, 0.8, 1) infinite; animation-delay: 1.3s; }
            .anim-lights { animation: lightBlink 2.2s ease-in-out infinite; }
          `}</style>

          {/* SVG Canvas (1400x620) */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              viewBox="0 0 1400 620"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Midnight Cyberpunk Gradients */}
                <radialGradient id="nightBackdrop" cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="#1B0C33"/>
                  <stop offset="50%" stopColor="#120624"/>
                  <stop offset="100%" stopColor="#080312"/>
                </radialGradient>

                {/* Lake Dhopar Pukur Water Gradient */}
                <linearGradient id="lakeWater" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06182D"/>
                  <stop offset="60%" stopColor="#0A2744"/>
                  <stop offset="100%" stopColor="#0D375C"/>
                </linearGradient>

                {/* Lake Shore Glow */}
                <linearGradient id="shoreGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#05D9E8" stopOpacity="0"/>
                </linearGradient>

                {/* Highway Asphalt Gradient */}
                <linearGradient id="highwayAsphalt" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#170D29"/>
                  <stop offset="50%" stopColor="#25163D"/>
                  <stop offset="100%" stopColor="#170D29"/>
                </linearGradient>

                {/* Metro Viaduct Gradient */}
                <linearGradient id="metroViaduct" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2E1B4E"/>
                  <stop offset="50%" stopColor="#4A2B7B"/>
                  <stop offset="100%" stopColor="#2E1B4E"/>
                </linearGradient>

                {/* Offbeat CCU Roof Gradient */}
                <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E11D48"/>
                  <stop offset="60%" stopColor="#9F1239"/>
                  <stop offset="100%" stopColor="#4C0519"/>
                </linearGradient>

                {/* Streetlight Radial Light Pools */}
                <radialGradient id="streetGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFE600" stopOpacity="0.32"/>
                  <stop offset="60%" stopColor="#FFE600" stopOpacity="0.12"/>
                  <stop offset="100%" stopColor="#FFE600" stopOpacity="0"/>
                </radialGradient>

                {/* Car Headlight Beam */}
                <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFE600" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#FFE600" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="headlightBeamNorth" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FFE600" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#FFE600" stopOpacity="0"/>
                </linearGradient>

                {/* Subtle City Grid Pattern */}
                <pattern id="isoGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#6D28D9" strokeWidth="0.6" opacity="0.12"/>
                </pattern>
              </defs>

              {/* 1. Base Terrain & Night City Grid */}
              <rect width="1400" height="620" fill="url(#nightBackdrop)"/>
              <rect width="1400" height="620" fill="url(#isoGrid)"/>

              {/* 2. DHOPAR PUKUR LAKE (Real Geography: West / North-West Lake) */}
              <g id="dhopar-pukur-reservoir">
                {/* Organic Lake Basin matching Google Maps satellite shoreline */}
                <path
                  d="M -20 -20 
                     L 420 -20 
                     C 400 90, 360 160, 330 220 
                     C 300 280, 380 320, 420 370 
                     C 460 420, 390 530, 270 580 
                     C 190 610, 80 635, -20 640 Z"
                  fill="url(#lakeWater)"
                  stroke="#00F0FF"
                  strokeWidth="2.5"
                  opacity="0.95"
                />

                {/* Shoreline wetland green buffer */}
                <path
                  d="M 420 -20 C 400 90, 360 160, 330 220 C 300 280, 380 320, 420 370 C 460 420, 390 530, 270 580"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="6"
                  opacity="0.35"
                />

                {/* Animated Shimmering Water Waves */}
                <g className="anim-water" fill="none" stroke="#00F0FF" strokeWidth="1.5" opacity="0.4" strokeDasharray="16 10">
                  <path d="M 40 80 Q 140 70 240 85 T 340 75" />
                  <path d="M 60 160 Q 150 145 220 165 T 300 155" />
                  <path d="M 30 240 Q 120 230 210 245 T 280 235" />
                  <path d="M 50 320 Q 150 310 240 330 T 320 315" />
                  <path d="M 30 400 Q 130 390 220 410 T 310 395" />
                  <path d="M 20 480 Q 110 470 200 490 T 260 480" />
                </g>

                {/* Lush Cartoon Tree Clumps along the Lake Bank */}
                <g fill="#1F1138" stroke="#10B981" strokeWidth="1.5" opacity="0.85">
                  <circle cx="340" cy="180" r="14"/>
                  <circle cx="355" cy="195" r="12"/>
                  <circle cx="320" cy="270" r="13"/>
                  <circle cx="335" cy="285" r="15"/>
                  <circle cx="380" cy="335" r="14"/>
                  <circle cx="410" cy="355" r="13"/>
                  <circle cx="430" cy="410" r="15"/>
                  <circle cx="395" cy="470" r="16"/>
                  <circle cx="350" cy="530" r="17"/>
                  <circle cx="280" cy="570" r="15"/>
                </g>
              </g>

              {/* 3. TOPSIA ROAD & FEEDER STREETS (Connecting into Offbeat Campus) */}
              <g id="topsia-road-network">
                {/* Secondary arterial: Topsia Road */}
                <path
                  d="M 260 640 Q 420 540 540 450 L 650 380"
                  stroke="#1E1236"
                  strokeWidth="32"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 260 640 Q 420 540 540 450 L 650 380"
                  stroke="#382061"
                  strokeWidth="26"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 260 640 Q 420 540 540 450 L 650 380"
                  stroke="#00F0FF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="6 6"
                  opacity="0.6"
                />

                {/* Streetlight light pools on Topsia Road */}
                <circle cx="360" cy="570" r="32" fill="url(#streetGlow)" />
                <circle cx="480" cy="490" r="32" fill="url(#streetGlow)" />
                <circle cx="580" cy="420" r="32" fill="url(#streetGlow)" />
              </g>

              {/* 4. BISWA BANGLA SARANI (EM BYPASS - 6-Lane High Speed Spine) */}
              <g id="em-bypass-highway">
                {/* Outer Road Bed */}
                <path
                  d="M 1080 -30 L 850 650"
                  stroke="#160B29"
                  strokeWidth="76"
                  fill="none"
                />
                {/* Asphalt Surface */}
                <path
                  d="M 1080 -30 L 850 650"
                  stroke="url(#highwayAsphalt)"
                  strokeWidth="68"
                  fill="none"
                />
                {/* Neon Curbs */}
                <path
                  d="M 1044 -30 L 814 650"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.7"
                />
                <path
                  d="M 1116 -30 L 886 650"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  fill="none"
                  opacity="0.7"
                />
                {/* Double Yellow Dividing Centerline */}
                <path
                  d="M 1079 -30 L 849 650"
                  stroke="#FFE600"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="16 12"
                />
                <path
                  d="M 1082 -30 L 852 650"
                  stroke="#FFE600"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="16 12"
                />
                {/* Lane Divider Dashes (White) */}
                <path
                  d="M 1062 -30 L 832 650"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="12 18"
                  opacity="0.45"
                />
                <path
                  d="M 1098 -30 L 868 650"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="12 18"
                  opacity="0.45"
                />

                {/* Streetlight light cones along EM Bypass */}
                <circle cx="1060" cy="50" r="42" fill="url(#streetGlow)" />
                <circle cx="1010" cy="180" r="42" fill="url(#streetGlow)" />
                <circle cx="960" cy="310" r="42" fill="url(#streetGlow)" />
                <circle cx="910" cy="440" r="42" fill="url(#streetGlow)" />
                <circle cx="860" cy="570" r="42" fill="url(#streetGlow)" />
              </g>

              {/* 5. RITWIK GHATAK METRO VIADUCT & STATION (Overhead Metro Line) */}
              <g id="ritwik-ghatak-metro">
                {/* Elevated Viaduct Track running parallel to EM Bypass */}
                <path
                  d="M 1160 -30 L 930 650"
                  stroke="url(#metroViaduct)"
                  strokeWidth="28"
                  fill="none"
                />
                {/* Dual Metro Steel Rails */}
                <path
                  d="M 1155 -30 L 925 650"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 1165 -30 L 935 650"
                  stroke="#00F0FF"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />

                {/* Viaduct Support Concrete Pillars */}
                <circle cx="1145" cy="20" r="6" fill="#4C1D95" stroke="#000" strokeWidth="1.5"/>
                <circle cx="1100" cy="140" r="6" fill="#4C1D95" stroke="#000" strokeWidth="1.5"/>
                <circle cx="1055" cy="260" r="6" fill="#4C1D95" stroke="#000" strokeWidth="1.5"/>
                <circle cx="1010" cy="380" r="6" fill="#4C1D95" stroke="#000" strokeWidth="1.5"/>
                <circle cx="965" cy="500" r="6" fill="#4C1D95" stroke="#000" strokeWidth="1.5"/>

                {/* Ritwik Ghatak Metro Station Platform Structure (M) */}
                <g transform="translate(1015, 300) rotate(-19)">
                  {/* Platform Canopy Base */}
                  <rect x="-18" y="-70" width="36" height="140" rx="8" fill="#1E0E3E" stroke="#00F0FF" strokeWidth="2.5" />
                  {/* Illuminated Station Skylight Strip */}
                  <rect x="-8" y="-55" width="16" height="110" rx="4" fill="#00F0FF" opacity="0.65" />
                  {/* Station Logo Badge */}
                  <circle cx="0" cy="0" r="14" fill="#000000" stroke="#FFE600" strokeWidth="2" />
                  <text x="0" y="5" textAnchor="middle" fill="#FFE600" fontSize="13" fontWeight="bold" fontFamily="monospace">M</text>
                </g>
              </g>

              {/* 6. SURROUNDING ISOMETRIC NEIGHBORHOODS (Tangra / Topsia / Nirman Plant) */}
              <g id="surrounding-buildings" opacity="0.85">
                {/* East side: Nirman Concrete & Industrial District */}
                <g transform="translate(1200, 160)">
                  <polygon points="0,30 45,0 90,30 45,60" fill="#2E1B4E" stroke="#000" strokeWidth="2"/>
                  <polygon points="0,30 45,60 45,110 0,80" fill="#1C0E33" stroke="#000" strokeWidth="2"/>
                  <polygon points="45,60 90,30 90,80 45,110" fill="#3B2266" stroke="#000" strokeWidth="2"/>
                  {/* Windows */}
                  <rect x="55" y="65" width="8" height="8" fill="#FFE600"/>
                  <rect x="70" y="55" width="8" height="8" fill="#FFE600"/>
                  <rect x="55" y="85" width="8" height="8" fill="#00F0FF"/>
                </g>

                <g transform="translate(1220, 320)">
                  <polygon points="0,25 40,0 80,25 40,50" fill="#24133F" stroke="#000" strokeWidth="2"/>
                  <polygon points="0,25 40,50 40,90 0,65" fill="#150926" stroke="#000" strokeWidth="2"/>
                  <polygon points="40,50 80,25 80,65 40,90" fill="#301A52" stroke="#000" strokeWidth="2"/>
                  <rect x="50" y="55" width="7" height="7" fill="#FF007F"/>
                  <rect x="65" y="45" width="7" height="7" fill="#00F0FF"/>
                </g>

                {/* West / Topsia side buildings */}
                <g transform="translate(480, 520)">
                  <polygon points="0,20 35,0 70,20 35,40" fill="#2A1647" stroke="#000" strokeWidth="2"/>
                  <polygon points="0,20 35,40 35,75 0,55" fill="#1A0D2E" stroke="#000" strokeWidth="2"/>
                  <polygon points="35,40 70,20 70,55 35,75" fill="#371E5C" stroke="#000" strokeWidth="2"/>
                  <rect x="42" y="45" width="6" height="6" fill="#FFE600"/>
                </g>

                <g transform="translate(480, 80)">
                  <polygon points="0,25 40,0 80,25 40,50" fill="#2A1647" stroke="#000" strokeWidth="2"/>
                  <polygon points="0,25 40,50 40,90 0,65" fill="#1A0D2E" stroke="#000" strokeWidth="2"/>
                  <polygon points="40,50 80,25 80,65 40,90" fill="#371E5C" stroke="#000" strokeWidth="2"/>
                  <rect x="50" y="55" width="8" height="8" fill="#00F0FF"/>
                  <rect x="65" y="45" width="8" height="8" fill="#FFE600"/>
                </g>
              </g>

              {/* 7. AIC TECHNO @ OFFBEAT CCU COMPOUND (Main Hero Complex) */}
              <g id="offbeat-ccu-campus">
                {/* Compound Paved Ground (Peninsula jutting between Lake and Highway) */}
                <polygon
                  points="450,230 690,140 820,290 590,440"
                  fill="#1C0E33"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                />

                {/* Parking stalls with miniature cars parked */}
                <g opacity="0.8">
                  <line x1="490" y1="260" x2="520" y2="280" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
                  <line x1="510" y1="250" x2="540" y2="270" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
                  <line x1="530" y1="240" x2="560" y2="260" stroke="#00F0FF" strokeWidth="1" strokeDasharray="3 3"/>
                  {/* Parked miniature cars */}
                  <rect x="500" y="258" width="14" height="8" rx="2" fill="#FFE600" transform="rotate(30 500 258)"/>
                  <rect x="520" y="248" width="14" height="8" rx="2" fill="#00F0FF" transform="rotate(30 520 248)"/>
                  <rect x="540" y="238" width="14" height="8" rx="2" fill="#E11D48" transform="rotate(30 540 238)"/>
                </g>

                {/* MAIN OFFBEAT CCU 3D ISOMETRIC BUILDING */}
                <g transform="translate(560, 200)">
                  {/* Left Facade (Deep Crimson / Maroon) */}
                  <polygon
                    points="0,80 120,140 120,220 0,160"
                    fill="#881337"
                    stroke="#000000"
                    strokeWidth="3"
                  />
                  {/* Right Facade (Dark Violet Modern Tech Glass) */}
                  <polygon
                    points="120,140 230,80 230,160 120,220"
                    fill="#3B1C5A"
                    stroke="#000000"
                    strokeWidth="3"
                  />
                  {/* Rooftop Slab (Home of Café Offbeat Up There) */}
                  <polygon
                    points="0,80 110,20 230,80 120,140"
                    fill="url(#roofGrad)"
                    stroke="#FFC800"
                    strokeWidth="3"
                  />

                  {/* Panoramic Illuminated Windows on Left Facade */}
                  <g fill="#00F0FF" opacity="0.9">
                    <polygon points="15,100 45,115 45,130 15,115" />
                    <polygon points="55,120 85,135 85,150 55,135" />
                    <polygon points="15,125 45,140 45,155 15,140" fill="#FFE600" />
                    <polygon points="55,145 85,160 85,175 55,160" fill="#FFE600" />
                  </g>

                  {/* Panoramic Illuminated Windows on Right Facade */}
                  <g fill="#00F0FF" opacity="0.9">
                    <polygon points="135,135 170,115 170,130 135,150" />
                    <polygon points="185,110 215,90 215,105 185,125" />
                    <polygon points="135,160 170,140 170,155 135,175" fill="#FF2E93" />
                    <polygon points="185,135 215,115 215,130 185,150" fill="#FF2E93" />
                  </g>

                  {/* Entrance Door & Lobby Canopy */}
                  <polygon points="100,210 135,228 135,215 100,197" fill="#00F0FF"/>

                  {/* ROOFTOP: CAFÉ OFFBEAT UP THERE DETAILS */}
                  {/* String lights along rooftop perimeter */}
                  <path
                    d="M 10 75 Q 60 45 110 25 T 220 75"
                    stroke="#FFE600"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4 6"
                    className="anim-lights"
                  />
                  {/* Rooftop Cafe Tables & Umbrellas */}
                  <circle cx="80" cy="70" r="8" fill="#FFE600" stroke="#000" strokeWidth="1.5"/>
                  <circle cx="140" cy="75" r="9" fill="#00F0FF" stroke="#000" strokeWidth="1.5"/>
                  <circle cx="110" cy="95" r="8" fill="#FF007F" stroke="#000" strokeWidth="1.5"/>
                  <circle cx="165" cy="95" r="8" fill="#FFE600" stroke="#000" strokeWidth="1.5"/>

                  {/* Building Nameplate */}
                  <rect x="40" y="175" width="130" height="20" rx="4" fill="#000000" stroke="#FFE600" strokeWidth="1.5"/>
                  <text x="105" y="189" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="monospace" letterSpacing="1">
                    AIC TECHNO · OFFBEAT
                  </text>
                </g>
              </g>

              {/* 8. ANIMATED CARTOON VEHICLES DRIVING ALONG ROADS */}
              
              {/* Car 1: Southbound Yellow Ambassador Taxi along EM Bypass */}
              <g className="anim-car-south-1" transform="translate(1060, 0)">
                <g transform="rotate(110)">
                  {/* Headlight beam casting light ahead */}
                  <polygon points="-8,16 8,16 22,70 -22,70" fill="url(#headlightBeam)" />
                  {/* Car body */}
                  <rect x="-8" y="-14" width="16" height="28" rx="4" fill="#FFE600" stroke="#000" strokeWidth="1.5" />
                  {/* Windshields */}
                  <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#00F0FF" />
                  {/* Headlight bulbs */}
                  <circle cx="-6" cy="14" r="2" fill="#FFF" />
                  <circle cx="6" cy="14" r="2" fill="#FFF" />
                </g>
              </g>

              {/* Car 2: Southbound Crimson Roadster along EM Bypass */}
              <g className="anim-car-south-2" transform="translate(1060, 0)">
                <g transform="rotate(110)">
                  <polygon points="-7,15 7,15 18,65 -18,65" fill="url(#headlightBeam)" />
                  <rect x="-7" y="-13" width="14" height="26" rx="4" fill="#E11D48" stroke="#000" strokeWidth="1.5" />
                  <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#FFF" />
                  <circle cx="-5" cy="13" r="2" fill="#FFF" />
                  <circle cx="5" cy="13" r="2" fill="#FFF" />
                </g>
              </g>

              {/* Car 3: Northbound Cyan Cab along EM Bypass */}
              <g className="anim-car-north-1" transform="translate(860, 620)">
                <g transform="rotate(-70)">
                  <polygon points="-8,16 8,16 20,70 -20,70" fill="url(#headlightBeam)" />
                  <rect x="-8" y="-14" width="16" height="28" rx="4" fill="#00F0FF" stroke="#000" strokeWidth="1.5" />
                  <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#000" />
                  <circle cx="-6" cy="14" r="2" fill="#FFF" />
                  <circle cx="6" cy="14" r="2" fill="#FFF" />
                </g>
              </g>

              {/* Car 4: Northbound White Sedan along EM Bypass */}
              <g className="anim-car-north-2" transform="translate(860, 620)">
                <g transform="rotate(-70)">
                  <polygon points="-7,15 7,15 18,65 -18,65" fill="url(#headlightBeam)" />
                  <rect x="-7" y="-13" width="14" height="26" rx="4" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
                  <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#1E0E3E" />
                  <circle cx="-5" cy="13" r="2" fill="#FFF" />
                  <circle cx="5" cy="13" r="2" fill="#FFF" />
                </g>
              </g>

              {/* Car 5: Yellow Ambassador Taxi turning into Topsia Road */}
              <g transform="translate(420, 520) rotate(-40)">
                <polygon points="-7,14 7,14 16,55 -16,55" fill="url(#headlightBeam)" />
                <rect x="-7" y="-13" width="14" height="26" rx="4" fill="#FFE600" stroke="#000" strokeWidth="1.5" />
                <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#00F0FF" />
              </g>

              {/* 9. ANIMATED STREAMLINED METRO TRAIN (Gliding on elevated viaduct) */}
              <g className="anim-metro" transform="translate(1150, 0)">
                <g transform="rotate(110)">
                  {/* Coach 1 (Lead engine) */}
                  <rect x="-7" y="24" width="14" height="42" rx="5" fill="#E2E8F0" stroke="#4C1D95" strokeWidth="1.5"/>
                  <rect x="-5" y="52" width="10" height="10" rx="2" fill="#00F0FF"/>
                  <rect x="-5" y="32" width="10" height="14" rx="2" fill="#00F0FF"/>
                  {/* Headlight beam */}
                  <polygon points="-6,66 6,66 18,120 -18,120" fill="url(#headlightBeam)" opacity="0.6"/>

                  {/* Coach 2 (Middle) */}
                  <rect x="-7" y="-22" width="14" height="42" rx="4" fill="#CBD5E1" stroke="#4C1D95" strokeWidth="1.5"/>
                  <rect x="-5" y="-14" width="10" height="12" rx="2" fill="#00F0FF"/>
                  <rect x="-5" y="4" width="10" height="12" rx="2" fill="#00F0FF"/>

                  {/* Coach 3 (Rear) */}
                  <rect x="-7" y="-68" width="14" height="42" rx="5" fill="#94A3B8" stroke="#4C1D95" strokeWidth="1.5"/>
                  <rect x="-5" y="-60" width="10" height="12" rx="2" fill="#00F0FF"/>
                  <rect x="-5" y="-42" width="10" height="12" rx="2" fill="#00F0FF"/>
                </g>
              </g>

              {/* 10. GOOGLE MAPS STYLE LANDMARK CALLOUT PILLS (Convergence 1.0 exact look) */}
              
              {/* Landmark 1: Dhopar Pukur Lake */}
              <g transform="translate(170, 240)">
                <rect x="0" y="0" width="180" height="28" rx="14" fill="#0B132B" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#00F0FF" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">🌊</text>
                <text x="30" y="18" fill="#FFF9F2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Dhopar Pukur Lake
                </text>
              </g>

              {/* Landmark 2: Café Offbeat Up There (Rooftop) */}
              <g transform="translate(560, 150)">
                <rect x="0" y="0" width="200" height="28" rx="14" fill="#1C0A2A" stroke="#FFE600" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#FFE600" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">☕</text>
                <text x="30" y="18" fill="#FFE600" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Café Offbeat Up There
                </text>
              </g>

              {/* Landmark 3: Ritwik Ghatak Metro Station */}
              <g transform="translate(980, 470)">
                <rect x="0" y="0" width="210" height="28" rx="14" fill="#140A26" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#00F0FF" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">🚇</text>
                <text x="30" y="18" fill="#FFF9F2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Ritwik Ghatak Metro (M)
                </text>
              </g>

              {/* Landmark 4: Biswa Bangla Sarani (EM Bypass) */}
              <g transform="translate(970, 80) rotate(-19)">
                <rect x="0" y="0" width="190" height="26" rx="13" fill="#140A26" stroke="#FFE600" strokeWidth="1.5" />
                <circle cx="13" cy="13" r="7" fill="#FFE600" />
                <text x="13" y="17" textAnchor="middle" fontSize="9">🛣️</text>
                <text x="28" y="17" fill="#FFE600" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  BISWA BANGLA SARANI
                </text>
              </g>

              {/* Landmark 5: Nirman Concrete & Tech Hub */}
              <g transform="translate(1190, 270)">
                <rect x="0" y="0" width="180" height="28" rx="14" fill="#16082B" stroke="#A855F7" strokeWidth="1.5" />
                <circle cx="14" cy="14" r="8" fill="#A855F7" />
                <text x="14" y="18" textAnchor="middle" fontSize="10">🏭</text>
                <text x="30" y="18" fill="#FFF9F2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Nirman Industrial Park
                </text>
              </g>

              {/* Landmark 6: Topsia Road Entrance */}
              <g transform="translate(290, 520)">
                <rect x="0" y="0" width="145" height="26" rx="13" fill="#100824" stroke="#00F0FF" strokeWidth="1.5" />
                <circle cx="13" cy="13" r="7" fill="#00F0FF" />
                <text x="13" y="17" textAnchor="middle" fontSize="9">📍</text>
                <text x="28" y="17" fill="#FFF9F2" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                  36F Topsia Road
                </text>
              </g>

              {/* 11. CENTRAL HERO VENUE PIN (Floating directly over Offbeat CCU) */}
              <g transform="translate(680, 250)">
                {/* Expanding Sonar / Radar Rings */}
                <circle cx="0" cy="0" r="10" fill="none" stroke="#00F0FF" className="anim-sonar-1" />
                <circle cx="0" cy="0" r="10" fill="none" stroke="#E11D48" className="anim-sonar-2" />
                <circle cx="0" cy="0" r="8" fill="#00F0FF" />

                {/* Floating Map Pin with gentle bob animation */}
                <g className="anim-pin" transform="translate(0, -15)">
                  {/* Glowing Location Pin Shape */}
                  <path
                    d="M 0 -70 
                       C -22 -70, -38 -54, -38 -32 
                       C -38 -10, 0 0, 0 0 
                       C 0 0, 38 -10, 38 -32 
                       C 38 -54, 22 -70, 0 -70 Z"
                    fill="#00F0FF"
                    stroke="#000000"
                    strokeWidth="3.5"
                    style={{ filter: 'drop-shadow(0 0 16px rgba(0, 240, 255, 0.9))' }}
                  />
                  {/* Pin Inner Dot */}
                  <circle cx="0" cy="-35" r="13" fill="#0E061A" stroke="#FFC800" strokeWidth="2.5" />
                  <text x="0" y="-30" textAnchor="middle" fill="#FFC800" fontSize="14" fontWeight="bold">✦</text>

                  {/* Main Target Venue Label Box */}
                  <g transform="translate(0, -82)">
                    <rect
                      x="-135"
                      y="-26"
                      width="270"
                      height="32"
                      rx="8"
                      fill="#0C0418"
                      stroke="#00F0FF"
                      strokeWidth="2.5"
                      style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.9))' }}
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