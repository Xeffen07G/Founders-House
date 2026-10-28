/**
 * Inline Flat Cartoon Kolkata SVG Assets (all under 30KB, chunky outlines, flat cartoon style)
 * Includes: Howrah Bridge, Victoria Memorial, Yellow Ambassador Taxi, Tram, 
 * Hand-pulled Rickshaw, Kulhad Chai with Steam, Hooghly River Waves, Ferry, Fairy Lights.
 */

export const kolkataSVGs = {
  // 1. Fairylights strip across the top banner
  fairyLights: `
    <svg viewBox="0 0 1200 24" width="100%" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,8 Q75,18 150,8 Q225,18 300,8 Q375,18 450,8 Q525,18 600,8 Q675,18 750,8 Q825,18 900,8 Q975,18 1050,8 Q1125,18 1200,8" stroke="#1B3358" stroke-width="2" fill="none"/>
      <!-- Bulbs -->
      <g>
        <circle cx="75" cy="18" r="4.5" fill="#FFC20E" class="twinkle-dot"/>
        <circle cx="225" cy="18" r="4.5" fill="#C8442F" class="twinkle-dot"/>
        <circle cx="375" cy="18" r="4.5" fill="#2B6CB0" class="twinkle-dot"/>
        <circle cx="525" cy="18" r="4.5" fill="#FFC20E" class="twinkle-dot"/>
        <circle cx="675" cy="18" r="4.5" fill="#48BB78" class="twinkle-dot"/>
        <circle cx="825" cy="18" r="4.5" fill="#C8442F" class="twinkle-dot"/>
        <circle cx="975" cy="18" r="4.5" fill="#FFC20E" class="twinkle-dot"/>
        <circle cx="1125" cy="18" r="4.5" fill="#2B6CB0" class="twinkle-dot"/>
      </g>
    </svg>
  `,

  // 2. Yellow Ambassador Taxi (Chunky cartoon style, icon / button size & animation)
  ambassadorTaxi: (width = 90, height = 45) => `
    <svg width="${width}" height="${height}" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shadow -->
      <ellipse cx="50" cy="46" rx="42" ry="4" fill="#060C17" opacity="0.6"/>
      <!-- Main Taxi Body -->
      <path d="M12 36 L12 28 C12 28 15 22 24 20 L35 14 C40 10 65 10 74 14 L85 20 C92 22 94 28 94 36 L90 40 L16 40 Z" fill="#FFC20E" stroke="#0A1322" stroke-width="2.5" stroke-linejoin="round"/>
      <!-- White Checkerboard Taxi Stripe -->
      <path d="M13 28 H93 V32 H13 Z" fill="#FFFFFF" stroke="#0A1322" stroke-width="1.5"/>
      <line x1="23" y1="28" x2="23" y2="32" stroke="#0A1322" stroke-width="2"/>
      <line x1="33" y1="28" x2="33" y2="32" stroke="#0A1322" stroke-width="2"/>
      <line x1="43" y1="28" x2="43" y2="32" stroke="#0A1322" stroke-width="2"/>
      <line x1="53" y1="28" x2="53" y2="32" stroke="#0A1322" stroke-width="2"/>
      <line x1="63" y1="28" x2="63" y2="32" stroke="#0A1322" stroke-width="2"/>
      <line x1="73" y1="28" x2="73" y2="32" stroke="#0A1322" stroke-width="2"/>
      <line x1="83" y1="28" x2="83" y2="32" stroke="#0A1322" stroke-width="2"/>
      <!-- Windows -->
      <path d="M36 16 L28 22 H50 V15 H38 Z" fill="#152B4E" stroke="#0A1322" stroke-width="2"/>
      <path d="M54 15 V22 H72 L66 16 H54 Z" fill="#152B4E" stroke="#0A1322" stroke-width="2"/>
      <!-- Headlights & Bumper -->
      <circle cx="91" cy="34" r="3.5" fill="#FFF4BD" stroke="#0A1322" stroke-width="1.5"/>
      <rect x="88" y="38" width="6" height="4" rx="2" fill="#CBD5E0" stroke="#0A1322" stroke-width="1.5"/>
      <rect x="10" y="38" width="6" height="4" rx="2" fill="#CBD5E0" stroke="#0A1322" stroke-width="1.5"/>
      <!-- Taxi Roof Sign -->
      <rect x="46" y="8" width="14" height="6" rx="2" fill="#C8442F" stroke="#0A1322" stroke-width="1.5"/>
      <text x="53" y="13" font-size="4.5" font-family="sans-serif" font-weight="900" fill="#FFFFFF" text-anchor="middle">TAXI</text>
      <!-- Wheels -->
      <circle cx="28" cy="40" r="8" fill="#1A202C" stroke="#0A1322" stroke-width="2.5"/>
      <circle cx="28" cy="40" r="3.5" fill="#E2E8F0" stroke="#0A1322" stroke-width="1.5"/>
      <circle cx="76" cy="40" r="8" fill="#1A202C" stroke="#0A1322" stroke-width="2.5"/>
      <circle cx="76" cy="40" r="3.5" fill="#E2E8F0" stroke="#0A1322" stroke-width="1.5"/>
    </svg>
  `,

  // 3. Kolkata Tram (Blue & Cream historic tram)
  tram: (width = 90, height = 55) => `
    <svg width="${width}" height="${height}" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Overhead Pantograph / Pole -->
      <line x1="50" y1="5" x2="38" y2="15" stroke="#FFC20E" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="38" y1="15" x2="62" y2="15" stroke="#FFC20E" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="50" y1="2" x2="50" y2="6" stroke="#C8442F" stroke-width="3" stroke-linecap="round"/>
      <!-- Tram Body -->
      <rect x="8" y="15" width="84" height="34" rx="6" fill="#2B6CB0" stroke="#0A1322" stroke-width="2.5"/>
      <!-- Cream Mid-Band -->
      <rect x="8" y="27" width="84" height="12" fill="#F8EFDD" stroke="#0A1322" stroke-width="1.5"/>
      <!-- Destination Board in Bengali -->
      <rect x="34" y="17" width="32" height="6" rx="2" fill="#0A1322"/>
      <text x="50" y="21.5" font-size="4.5" font-family="'Space Grotesk', sans-serif" font-weight="800" fill="#FFC20E" text-anchor="middle">ESPLANADE</text>
      <!-- Windows -->
      <rect x="14" y="25" width="10" height="10" rx="2" fill="#0E1A2F" stroke="#0A1322" stroke-width="1.5"/>
      <rect x="28" y="25" width="10" height="10" rx="2" fill="#0E1A2F" stroke="#0A1322" stroke-width="1.5"/>
      <rect x="42" y="25" width="10" height="10" rx="2" fill="#0E1A2F" stroke="#0A1322" stroke-width="1.5"/>
      <rect x="56" y="25" width="10" height="10" rx="2" fill="#0E1A2F" stroke="#0A1322" stroke-width="1.5"/>
      <rect x="70" y="25" width="10" height="10" rx="2" fill="#0E1A2F" stroke="#0A1322" stroke-width="1.5"/>
      <!-- Wheels and Under-carriage -->
      <circle cx="24" cy="51" r="5" fill="#1A202C" stroke="#0A1322" stroke-width="2"/>
      <circle cx="36" cy="51" r="5" fill="#1A202C" stroke="#0A1322" stroke-width="2"/>
      <circle cx="64" cy="51" r="5" fill="#1A202C" stroke="#0A1322" stroke-width="2"/>
      <circle cx="76" cy="51" r="5" fill="#1A202C" stroke="#0A1322" stroke-width="2"/>
    </svg>
  `,

  // 4. Howrah Bridge (SVG stroke-dashoffset animated cantilever bridge)
  howrahBridge: `
    <svg viewBox="0 0 1000 240" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
      <!-- Glow Filter -->
      <defs>
        <filter id="bridgeGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#FFC20E" flood-opacity="0.3"/>
        </filter>
      </defs>
      
      <!-- Bridge Road Deck -->
      <rect x="40" y="185" width="920" height="14" rx="3" fill="#162744" stroke="#0A1322" stroke-width="3"/>
      <line x1="40" y1="192" x2="960" y2="192" stroke="#FFC20E" stroke-width="1.5" stroke-dasharray="8 8"/>
      
      <!-- Concrete Piers in River -->
      <path d="M180 185 L190 235 H270 L280 185 Z" fill="#0B1626" stroke="#0A1322" stroke-width="3"/>
      <path d="M720 185 L730 235 H810 L820 185 Z" fill="#0B1626" stroke="#0A1322" stroke-width="3"/>
      
      <!-- Cantilever Trusses (Drawn with SVG stroke) -->
      <g filter="url(#bridgeGlow)">
        <!-- West Pylon Tower -->
        <path class="bridge-stroke" d="M190 185 L230 40 L270 185" stroke="#FFC20E" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <line class="bridge-stroke" x1="230" y1="40" x2="230" y2="185" stroke="#FFC20E" stroke-width="3"/>
        <line class="bridge-stroke" x1="205" y1="110" x2="255" y2="110" stroke="#FFC20E" stroke-width="3"/>
        <line class="bridge-stroke" x1="190" y1="185" x2="255" y2="110" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="270" y1="185" x2="205" y2="110" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="205" y1="110" x2="230" y2="40" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="255" y1="110" x2="230" y2="40" stroke="#2B6CB0" stroke-width="2.5"/>

        <!-- East Pylon Tower -->
        <path class="bridge-stroke" d="M730 185 L770 40 L810 185" stroke="#FFC20E" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <line class="bridge-stroke" x1="770" y1="40" x2="770" y2="185" stroke="#FFC20E" stroke-width="3"/>
        <line class="bridge-stroke" x1="745" y1="110" x2="795" y2="110" stroke="#FFC20E" stroke-width="3"/>
        <line class="bridge-stroke" x1="730" y1="185" x2="795" y2="110" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="810" y1="185" x2="745" y2="110" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="745" y1="110" x2="770" y2="40" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="795" y1="110" x2="770" y2="40" stroke="#2B6CB0" stroke-width="2.5"/>

        <!-- Cantilever Main Suspension & Connecting Struts -->
        <path class="bridge-stroke" d="M50 185 Q130 130 230 40 Q500 125 770 40 Q870 130 950 185" stroke="#FFC20E" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        
        <!-- Center Arch Trusses -->
        <line class="bridge-stroke" x1="310" y1="185" x2="350" y2="82" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="390" y1="185" x2="350" y2="82" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="430" y1="185" x2="470" y2="110" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="500" y1="185" x2="500" y2="120" stroke="#FFC20E" stroke-width="3"/>
        <line class="bridge-stroke" x1="570" y1="185" x2="530" y2="110" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="610" y1="185" x2="650" y2="82" stroke="#2B6CB0" stroke-width="2.5"/>
        <line class="bridge-stroke" x1="690" y1="185" x2="650" y2="82" stroke="#2B6CB0" stroke-width="2.5"/>

        <!-- Fairy lights stringing along the bridge arch -->
        <g class="bridge-lights">
          <circle cx="230" cy="40" r="4" fill="#FFC20E" class="twinkle-dot"/>
          <circle cx="320" cy="72" r="3.5" fill="#F8EFDD" class="twinkle-dot"/>
          <circle cx="410" cy="98" r="3.5" fill="#FFC20E" class="twinkle-dot"/>
          <circle cx="500" cy="115" r="4.5" fill="#C8442F" class="twinkle-dot"/>
          <circle cx="590" cy="98" r="3.5" fill="#FFC20E" class="twinkle-dot"/>
          <circle cx="680" cy="72" r="3.5" fill="#F8EFDD" class="twinkle-dot"/>
          <circle cx="770" cy="40" r="4" fill="#FFC20E" class="twinkle-dot"/>
        </g>
      </g>
    </svg>
  `,

  // 5. Victoria Memorial (Chunky flat cartoon silhouette)
  victoriaMemorial: `
    <svg viewBox="0 0 400 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Main Base Plinth -->
      <rect x="30" y="130" width="340" height="25" rx="3" fill="#14243F" stroke="#0A1322" stroke-width="3"/>
      <!-- Lower Wing Colonnades -->
      <rect x="55" y="95" width="85" height="35" rx="2" fill="#1C3255" stroke="#0A1322" stroke-width="2.5"/>
      <rect x="260" y="95" width="85" height="35" rx="2" fill="#1C3255" stroke="#0A1322" stroke-width="2.5"/>
      <!-- Colonnade Pillars -->
      <line x1="70" y1="95" x2="70" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="90" y1="95" x2="90" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="110" y1="95" x2="110" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="125" y1="95" x2="125" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="275" y1="95" x2="275" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="295" y1="95" x2="295" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="315" y1="95" x2="315" y2="130" stroke="#0A1322" stroke-width="2"/>
      <line x1="330" y1="95" x2="330" y2="130" stroke="#0A1322" stroke-width="2"/>
      <!-- Central Hall Block -->
      <rect x="145" y="75" width="110" height="55" rx="3" fill="#F8EFDD" stroke="#0A1322" stroke-width="3"/>
      <!-- Triangular Pediment -->
      <polygon points="140,75 200,45 260,75" fill="#E2D4BD" stroke="#0A1322" stroke-width="3"/>
      <!-- Grand Central Dome -->
      <path d="M165 45 C165 15 235 15 235 45 Z" fill="#F8EFDD" stroke="#0A1322" stroke-width="3"/>
      <!-- Angel of Victory Finial on top of Dome -->
      <line x1="200" y1="15" x2="200" y2="4" stroke="#FFC20E" stroke-width="2.5"/>
      <circle cx="200" cy="4" r="3" fill="#FFC20E" stroke="#0A1322" stroke-width="1.5"/>
      <path d="M195 6 Q200 2 205 6" stroke="#FFC20E" stroke-width="2" fill="none"/>
      <!-- Corner Cupolas / Small Domes -->
      <path d="M85 95 C85 82 110 82 110 95 Z" fill="#F8EFDD" stroke="#0A1322" stroke-width="2"/>
      <path d="M290 95 C290 82 315 82 315 95 Z" fill="#F8EFDD" stroke="#0A1322" stroke-width="2"/>
    </svg>
  `,

  // 6. Steaming Kulhad Chai (Terracotta clay cup with animated swirling steam)
  kulhadChai: `
    <svg viewBox="0 0 120 140" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Rising Steam Lines -->
      <g>
        <path class="steam-path" d="M48 42 Q40 28 50 14 Q58 2 52 -10" stroke="#F8EFDD" stroke-width="3.5" stroke-linecap="round" opacity="0.75" fill="none"/>
        <path class="steam-path" d="M60 40 Q70 24 62 10 Q54 -4 64 -14" stroke="#FFC20E" stroke-width="3" stroke-linecap="round" opacity="0.6" fill="none"/>
        <path class="steam-path" d="M72 44 Q80 30 72 16 Q64 4 70 -6" stroke="#F8EFDD" stroke-width="3" stroke-linecap="round" opacity="0.7" fill="none"/>
      </g>
      <!-- Clay Saucer / Base -->
      <ellipse cx="60" cy="122" rx="38" ry="8" fill="#8F2A1A" stroke="#0A1322" stroke-width="2.5"/>
      <!-- Terracotta Kulhad Body -->
      <path d="M34 50 L42 115 C42 118 78 118 78 115 L86 50 Z" fill="#C8442F" stroke="#0A1322" stroke-width="3" stroke-linejoin="round"/>
      <!-- Earthen Texture Ridges -->
      <path d="M38 70 Q60 74 82 70" stroke="#A63321" stroke-width="2" fill="none"/>
      <path d="M40 90 Q60 94 80 90" stroke="#A63321" stroke-width="2" fill="none"/>
      <!-- Chai Surface Rim -->
      <ellipse cx="60" cy="50" rx="26" ry="7" fill="#E28945" stroke="#0A1322" stroke-width="3"/>
      <!-- Steaming Hot Tea Milk Swirl -->
      <ellipse cx="60" cy="50" rx="20" ry="4.5" fill="#D27632"/>
      <ellipse cx="58" cy="49" rx="12" ry="2.5" fill="#E8A366"/>
      <!-- Handcrafted Biscuit / Toast beside saucer -->
      <rect x="85" y="112" width="22" height="10" rx="2" transform="rotate(-12 85 112)" fill="#D4A373" stroke="#0A1322" stroke-width="2"/>
    </svg>
  `,

  // 7. Hooghly River Waves (Repeating seamless wave)
  riverWaves: `
    <svg viewBox="0 0 1000 60" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 30 Q125 10 250 30 T500 30 T750 30 T1000 30 V60 H0 Z" fill="#152B4E" opacity="0.85"/>
      <path d="M0 38 Q125 22 250 38 T500 38 T750 38 T1000 38 V60 H0 Z" fill="#0E1A2F"/>
      <!-- Golden Light Reflections on River -->
      <ellipse cx="240" cy="38" rx="35" ry="3" fill="#FFC20E" opacity="0.5"/>
      <ellipse cx="480" cy="42" rx="45" ry="3.5" fill="#FFC20E" opacity="0.6"/>
      <ellipse cx="740" cy="37" rx="40" ry="3" fill="#FFC20E" opacity="0.45"/>
    </svg>
  `,

  // 8. Hooghly River Ferry (Iconic wooden ferry boat)
  ferry: (width = 80, height = 35) => `
    <svg width="${width}" height="${height}" viewBox="0 0 80 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ferry Wooden Hull -->
      <path d="M8 22 L16 32 H64 L74 22 Z" fill="#C8442F" stroke="#0A1322" stroke-width="2" stroke-linejoin="round"/>
      <line x1="12" y1="26" x2="70" y2="26" stroke="#F8EFDD" stroke-width="2"/>
      <!-- Cabin Deck -->
      <rect x="22" y="10" width="36" height="12" rx="2" fill="#F8EFDD" stroke="#0A1322" stroke-width="2"/>
      <!-- Cabin Windows -->
      <rect x="26" y="13" width="5" height="5" fill="#12213A" stroke="#0A1322" stroke-width="1"/>
      <rect x="34" y="13" width="5" height="5" fill="#12213A" stroke="#0A1322" stroke-width="1"/>
      <rect x="42" y="13" width="5" height="5" fill="#12213A" stroke="#0A1322" stroke-width="1"/>
      <rect x="50" y="13" width="5" height="5" fill="#12213A" stroke="#0A1322" stroke-width="1"/>
      <!-- Funnel with tiny puff -->
      <rect x="38" y="4" width="4" height="6" fill="#2B6CB0" stroke="#0A1322" stroke-width="1.5"/>
      <circle cx="40" cy="2" r="2" fill="#CBD5E0" opacity="0.8"/>
    </svg>
  `,

  // 9. Hand-pulled Rickshaw (Cartoon flat style)
  rickshaw: (width = 75, height = 55) => `
    <svg width="${width}" height="${height}" viewBox="0 0 75 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- High Wooden Spokes Wheel -->
      <circle cx="28" cy="36" r="16" fill="none" stroke="#FFC20E" stroke-width="2.5"/>
      <circle cx="28" cy="36" r="4" fill="#C8442F" stroke="#0A1322" stroke-width="1.5"/>
      <line x1="28" y1="20" x2="28" y2="52" stroke="#FFC20E" stroke-width="1.5"/>
      <line x1="12" y1="36" x2="44" y2="36" stroke="#FFC20E" stroke-width="1.5"/>
      <line x1="17" y1="25" x2="39" y2="47" stroke="#FFC20E" stroke-width="1.5"/>
      <line x1="17" y1="47" x2="39" y2="25" stroke="#FFC20E" stroke-width="1.5"/>
      <!-- Passenger Carriage Seat & Hood -->
      <path d="M14 26 C14 12 34 12 36 26 Z" fill="#2B6CB0" stroke="#0A1322" stroke-width="2"/>
      <rect x="22" y="24" width="18" height="12" rx="2" fill="#C8442F" stroke="#0A1322" stroke-width="2"/>
      <!-- Pulling Shaft Poles extending forward -->
      <line x1="28" y1="36" x2="70" y2="38" stroke="#0A1322" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="28" y1="34" x2="68" y2="36" stroke="#C8442F" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 10. Kolkata Skyline Silhouette Divider (Rule #9: Skyline silhouette divider that changes per section)
  skylineDivider: (type = 'bridge-heritage') => `
    <svg viewBox="0 0 1200 60" width="100%" height="60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,60 L0,38 
               L60,38 L60,20 L80,12 L100,20 L100,38 
               L180,38 L210,10 L240,38 
               L320,38 L340,28 L360,28 L380,38 
               L460,38 L480,15 L500,8 L520,15 L540,38 
               L640,38 L670,22 L700,38 
               L800,38 L830,12 L860,38 
               L940,38 L960,25 L980,25 L1000,38 
               L1100,38 L1140,16 L1180,38 L1200,38 L1200,60 Z" 
            fill="#0A1322"/>
      <line x1="0" y1="38" x2="1200" y2="38" stroke="#FFC20E" stroke-width="1.5" opacity="0.3"/>
    </svg>
  `
};
