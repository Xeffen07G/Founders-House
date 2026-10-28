/**
 * ICONIC KOLKATA LEGENDS & DETECTIVE SQUAD (SVG Cartoon Network Style)
 * Featuring beloved fictional & real Kolkata icons:
 * 1. Feluda (Pradosh C. Mitter) — Charismatic tall sleuth in white kurta with sharp gaze and notebook.
 * 2. Byomkesh Bakshi — The Satyanweshi (Truth-Seeker) in dhoti-kurta, magnifying glass & pipe.
 * 3. Topshe (Tapesh) — Feluda's eager cousin & chronicler with camera/notebook.
 * 4. Jatayu (Lalmohan Ganguly) — Thriller writer in safari suit with green Ambassador taxi miniature.
 * 5. Professor Shonku — Eccentric scientist in lab coat with Annihilin ray gadget.
 * 6. Tenida (Bhadreshwar Sen) — The tall, fearless leader of Potoldanga adda holding a giant samosa.
 * 7. Chai Chintu — Sector V tapri chai master with steaming earthen kulhad.
 * 8. Tram Didi — Confident Kolkata tram conductor steering the route.
 */

export const mascots = {
  // 1. Feluda (Pradosh C. Mitter) — Sharp, tall, charismatic sleuth
  feluda: (size = 140) => `
    <svg width="${size}" height="${size * 1.3}" viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="198" rx="42" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Crisp White Pajama -->
      <rect x="58" y="145" width="18" height="46" rx="4" fill="#F8EFDD" stroke="#000000" stroke-width="3.5"/>
      <rect x="84" y="145" width="18" height="46" rx="4" fill="#F8EFDD" stroke="#000000" stroke-width="3.5"/>
      <!-- Black Leather Shoes -->
      <ellipse cx="64" cy="192" rx="14" ry="7" fill="#1A1F36" stroke="#000000" stroke-width="3"/>
      <ellipse cx="98" cy="192" rx="14" ry="7" fill="#1A1F36" stroke="#000000" stroke-width="3"/>

      <!-- Iconic Yellow/Gold Kurta (Panjabi) -->
      <path d="M46 88 L114 88 L118 152 H42 Z" fill="#FFE600" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
      <line x1="80" y1="88" x2="80" y2="124" stroke="#000000" stroke-width="2.5"/>
      <circle cx="80" cy="98" r="2.5" fill="#FF2E93"/>
      <circle cx="80" cy="110" r="2.5" fill="#FF2E93"/>

      <!-- Sleuth Shawl draped over shoulder -->
      <path d="M44 90 C35 115 40 145 42 165 C52 165 62 160 62 135 Z" fill="#19D3F3" stroke="#000000" stroke-width="3.5"/>

      <!-- Head & Sharp Jawline -->
      <ellipse cx="80" cy="52" rx="30" ry="34" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <!-- Neat Classic Hair Parting -->
      <path d="M50 48 C48 20 68 14 80 14 C96 14 112 24 110 48 C104 32 90 28 80 30 C64 32 54 40 50 48 Z" fill="#14192C" stroke="#000000" stroke-width="3.5"/>

      <!-- Piercing Intellect Eyes -->
      <ellipse cx="70" cy="50" rx="5" ry="6" fill="#000000"/>
      <circle cx="72" cy="48" r="1.5" fill="#FFFFFF"/>
      <ellipse cx="90" cy="50" rx="5" ry="6" fill="#000000"/>
      <circle cx="92" cy="48" r="1.5" fill="#FFFFFF"/>
      <!-- Sharp Eyebrows -->
      <path d="M62 42 Q70 38 78 42" stroke="#000000" stroke-width="3" stroke-linecap="round"/>
      <path d="M82 42 Q90 38 98 42" stroke="#000000" stroke-width="3" stroke-linecap="round"/>

      <!-- Calm Confident Smile -->
      <path d="M72 68 Q80 74 88 68" stroke="#000000" stroke-width="3" stroke-linecap="round"/>

      <!-- Left Hand with Iconic Blue Diary (Topshe's record book) -->
      <rect x="100" y="112" width="22" height="30" rx="3" transform="rotate(15 100 112)" fill="#19D3F3" stroke="#000000" stroke-width="3"/>
      <line x1="104" y1="120" x2="116" y2="123" stroke="#000000" stroke-width="2"/>

      <!-- Right Hand ready with deduction gesture -->
      <circle cx="34" cy="120" r="8" fill="#FAD1A7" stroke="#000000" stroke-width="2.5"/>
    </svg>
  `,

  // 2. Byomkesh Bakshi — The Satyanweshi (Truth-Seeker) with round glasses & dhoti
  byomkesh: (size = 140) => `
    <svg width="${size}" height="${size * 1.3}" viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="198" rx="42" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Traditional Bengali Pleated Dhoti -->
      <path d="M52 145 Q64 185 64 190 Q80 185 80 145 Q80 185 96 190 Q96 185 108 145 Z" fill="#F4F0FF" stroke="#000000" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M78 145 L78 190" stroke="#FF2E93" stroke-width="2" stroke-dasharray="3 3"/>
      <!-- Kolhapuri / Leather Chappals -->
      <ellipse cx="64" cy="194" rx="12" ry="5" fill="#8C4A1E" stroke="#000000" stroke-width="2.5"/>
      <ellipse cx="96" cy="194" rx="12" ry="5" fill="#8C4A1E" stroke="#000000" stroke-width="2.5"/>

      <!-- Cream / Khadi Kurta -->
      <path d="M48 88 L112 88 L116 148 H44 Z" fill="#F8EFDD" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
      
      <!-- Folded Brown Tweed Shawl -->
      <path d="M44 90 Q80 125 116 90 L112 118 Q80 140 48 118 Z" fill="#8C4A1E" stroke="#000000" stroke-width="3.5"/>

      <!-- Head & Classic Round Spectacles -->
      <ellipse cx="80" cy="52" rx="30" ry="32" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <!-- Wavy slick back 1930s Kolkata hair -->
      <path d="M52 46 C52 22 66 16 80 16 C94 16 108 22 108 46 C102 34 92 30 80 30 C68 30 58 34 52 46 Z" fill="#1A132F" stroke="#000000" stroke-width="3.5"/>

      <!-- Round Golden Spectacles -->
      <circle cx="68" cy="52" r="13" fill="#19D3F3" fill-opacity="0.3" stroke="#FFE600" stroke-width="3.5"/>
      <circle cx="92" cy="52" r="13" fill="#19D3F3" fill-opacity="0.3" stroke="#FFE600" stroke-width="3.5"/>
      <circle cx="68" cy="52" r="13" fill="none" stroke="#000000" stroke-width="2"/>
      <circle cx="92" cy="52" r="13" fill="none" stroke="#000000" stroke-width="2"/>
      <line x1="81" y1="52" x2="79" y2="52" stroke="#000000" stroke-width="3"/>
      <!-- Eyes -->
      <circle cx="70" cy="52" r="4.5" fill="#000000"/>
      <circle cx="72" cy="50" r="1.5" fill="#FFFFFF"/>
      <circle cx="94" cy="52" r="4.5" fill="#000000"/>
      <circle cx="96" cy="50" r="1.5" fill="#FFFFFF"/>

      <!-- Thoughtful smile -->
      <path d="M72 70 Q80 76 88 70" stroke="#000000" stroke-width="3" stroke-linecap="round"/>

      <!-- Big Magnifying Glass in Hand -->
      <g transform="translate(105, 82) rotate(22)">
        <line x1="20" y1="35" x2="35" y2="58" stroke="#8C4A1E" stroke-width="6" stroke-linecap="round"/>
        <circle cx="15" cy="22" r="18" fill="#19D3F3" fill-opacity="0.35" stroke="#FFE600" stroke-width="4"/>
        <circle cx="15" cy="22" r="18" fill="none" stroke="#000000" stroke-width="2.5"/>
        <path d="M8 15 Q14 10 20 15" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // 3. Topshe (Tapesh) — Feluda's eager cousin & chronicler with camera & pen
  topshe: (size = 120) => `
    <svg width="${size}" height="${size * 1.25}" viewBox="0 0 150 190" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="75" cy="180" rx="38" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Trousers & Sneakers -->
      <rect x="56" y="135" width="16" height="38" rx="3" fill="#1A1F36" stroke="#000000" stroke-width="3"/>
      <rect x="78" y="135" width="16" height="38" rx="3" fill="#1A1F36" stroke="#000000" stroke-width="3"/>
      <ellipse cx="60" cy="174" rx="12" ry="6" fill="#FF2E93" stroke="#000000" stroke-width="2.5"/>
      <ellipse cx="90" cy="174" rx="12" ry="6" fill="#FF2E93" stroke="#000000" stroke-width="2.5"/>

      <!-- Bright Cyan Shirt -->
      <rect x="44" y="85" width="62" height="52" rx="8" fill="#19D3F3" stroke="#000000" stroke-width="3.5"/>
      <!-- Vintage Camera on Neck Strap -->
      <path d="M58 85 L70 108 L82 85" stroke="#000000" stroke-width="2" fill="none"/>
      <rect x="64" y="104" width="22" height="16" rx="3" fill="#FFE600" stroke="#000000" stroke-width="2"/>
      <circle cx="75" cy="112" r="4.5" fill="#14192C" stroke="#000000" stroke-width="1.5"/>

      <!-- Young Expressive Face -->
      <ellipse cx="75" cy="50" rx="26" ry="28" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <!-- Curly Messy Teen Hair -->
      <path d="M48 44 C44 22 62 16 75 16 C88 16 104 22 102 44 Z" fill="#14192C" stroke="#000000" stroke-width="3"/>

      <!-- Big Curious Eyes -->
      <circle cx="66" cy="48" r="5" fill="#000000"/>
      <circle cx="67" cy="46" r="1.5" fill="#FFFFFF"/>
      <circle cx="84" cy="48" r="5" fill="#000000"/>
      <circle cx="85" cy="46" r="1.5" fill="#FFFFFF"/>
      <path d="M68 62 Q75 68 82 62" stroke="#000000" stroke-width="3" stroke-linecap="round"/>

      <!-- Chronicler Notepad in Hand -->
      <rect x="94" y="112" width="24" height="32" rx="3" transform="rotate(12 94 112)" fill="#FFFFFF" stroke="#000000" stroke-width="2.5"/>
      <line x1="98" y1="120" x2="112" y2="123" stroke="#14192C" stroke-width="2"/>
      <line x1="99" y1="127" x2="110" y2="129" stroke="#14192C" stroke-width="2"/>
    </svg>
  `,

  // 4. Jatayu (Lalmohan Ganguly) — Thriller novelist in safari suit with green Ambassador taxi
  jatayu: (size = 130) => `
    <svg width="${size}" height="${size * 1.25}" viewBox="0 0 160 190" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="180" rx="46" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Round Cheerful Belly in Lime Safari Suit -->
      <ellipse cx="80" cy="122" rx="42" ry="38" fill="#7CFF3A" stroke="#000000" stroke-width="4"/>
      <!-- Safari Pockets -->
      <rect x="52" y="106" width="16" height="16" rx="2" fill="#65D62B" stroke="#000000" stroke-width="2"/>
      <rect x="92" y="106" width="16" height="16" rx="2" fill="#65D62B" stroke="#000000" stroke-width="2"/>
      <!-- Buttons -->
      <circle cx="80" cy="98" r="2.5" fill="#000000"/>
      <circle cx="80" cy="116" r="2.5" fill="#000000"/>
      <circle cx="80" cy="134" r="2.5" fill="#000000"/>

      <!-- Round Face & Double Chin -->
      <ellipse cx="80" cy="54" rx="30" ry="28" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <!-- Bald Crown with Side Ringlets -->
      <path d="M52 52 C52 28 62 26 80 26 C98 26 108 28 108 52" stroke="#000000" stroke-width="3.5" fill="none"/>
      <ellipse cx="50" cy="54" rx="5" ry="10" fill="#2D3748" stroke="#000000" stroke-width="2"/>
      <ellipse cx="110" cy="54" rx="5" ry="10" fill="#2D3748" stroke="#000000" stroke-width="2"/>

      <!-- Trademark Bengali Brush Moustache -->
      <path d="M66 66 Q80 76 94 66 Q80 70 66 66 Z" fill="#1A202C" stroke="#000000" stroke-width="2"/>

      <!-- Fountain Pen tucked behind ear -->
      <rect x="106" y="36" width="4" height="22" rx="2" transform="rotate(25 106 36)" fill="#FF2E93" stroke="#000000" stroke-width="2"/>

      <!-- Thriller Novel ("Prakhor Rudrer...") in Hand -->
      <rect x="18" y="110" width="26" height="34" rx="3" transform="rotate(-15 18 110)" fill="#FF2E93" stroke="#000000" stroke-width="2.5"/>
      <text x="22" y="130" font-size="6" font-family="sans-serif" font-weight="900" fill="#FFE600" transform="rotate(-15 18 110)">BLOOD</text>
    </svg>
  `,

  // 5. Professor Shonku — Giridih deep-tech inventor with Annihilin ray gadget
  professorShonku: (size = 130) => `
    <svg width="${size}" height="${size * 1.25}" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="186" rx="42" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Victorian Woolen Vest & Trousers -->
      <rect x="52" y="88" width="56" height="65" rx="6" fill="#9B5CFF" stroke="#000000" stroke-width="3.5"/>
      <rect x="56" y="145" width="18" height="38" rx="3" fill="#14192C" stroke="#000000" stroke-width="3"/>
      <rect x="86" y="145" width="18" height="38" rx="3" fill="#14192C" stroke="#000000" stroke-width="3"/>

      <!-- Distinguished White French Beard & Hair -->
      <ellipse cx="80" cy="54" rx="28" ry="28" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <path d="M48 46 C42 22 58 14 80 14 C102 14 118 22 112 46 Z" fill="#E2E8F0" stroke="#000000" stroke-width="3"/>
      <!-- French Beard -->
      <path d="M72 70 Q80 88 88 70 Z" fill="#E2E8F0" stroke="#000000" stroke-width="2"/>

      <!-- Wire-rimmed spectacles & sharp eyes -->
      <circle cx="70" cy="52" r="10" fill="#19D3F3" fill-opacity="0.3" stroke="#000000" stroke-width="2"/>
      <circle cx="90" cy="52" r="10" fill="#19D3F3" fill-opacity="0.3" stroke="#000000" stroke-width="2"/>
      <line x1="80" y1="52" x2="80" y2="52" stroke="#000000" stroke-width="2"/>
      <circle cx="70" cy="52" r="3.5" fill="#000000"/>
      <circle cx="90" cy="52" r="3.5" fill="#000000"/>

      <!-- Annihilin Ray Weapon / Invention in Hand -->
      <g transform="translate(108, 90) rotate(15)">
        <rect x="4" y="12" width="24" height="8" rx="2" fill="#19D3F3" stroke="#000000" stroke-width="2"/>
        <circle cx="28" cy="16" r="6" fill="#FFE600" stroke="#000000" stroke-width="2"/>
        <line x1="34" y1="16" x2="44" y2="16" stroke="#7CFF3A" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>
  `,

  // 6. Tenida (Bhadreshwar Sen) — Fearless leader of Potoldanga adda holding a giant samosa
  tenida: (size = 130) => `
    <svg width="${size}" height="${size * 1.25}" viewBox="0 0 160 195" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="182" rx="44" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Red / Pink Casual Kurta -->
      <path d="M48 88 L112 88 L116 148 H44 Z" fill="#FF2E93" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
      <rect x="56" y="145" width="18" height="34" rx="3" fill="#F8EFDD" stroke="#000000" stroke-width="3"/>
      <rect x="86" y="145" width="18" height="34" rx="3" fill="#F8EFDD" stroke="#000000" stroke-width="3"/>

      <!-- Fearless Big-Nosed Face (Classic Tenida signature!) -->
      <ellipse cx="80" cy="54" rx="30" ry="30" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <!-- The Famous Nose -->
      <path d="M78 48 Q88 56 76 64" stroke="#000000" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- Messy adda hair -->
      <path d="M48 48 C44 20 62 16 80 16 C98 16 114 20 112 48 Z" fill="#14192C" stroke="#000000" stroke-width="3"/>

      <!-- Wide Boisterous Laugh -->
      <path d="M66 68 Q80 82 94 68 Z" fill="#1A202C" stroke="#000000" stroke-width="2"/>
      <circle cx="68" cy="46" r="4.5" fill="#000000"/>
      <circle cx="92" cy="46" r="4.5" fill="#000000"/>

      <!-- Giant Shingara (Samosa) in Hand ("Dey shingara!") -->
      <polygon points="112,118 132,102 128,132" fill="#FFE600" stroke="#000000" stroke-width="3"/>
      <circle cx="124" cy="118" r="2" fill="#8C4A1E"/>
    </svg>
  `,

  // 7. Chai Chintu — Tapri master with steaming earthen kulhad
  chaiChintu: (size = 120) => `
    <svg width="${size}" height="${size * 1.2}" viewBox="0 0 150 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="75" cy="172" rx="38" ry="7" fill="#000000" opacity="0.4"/>
      <rect x="45" y="80" width="60" height="50" rx="8" fill="#FFE600" stroke="#000000" stroke-width="3.5"/>
      <line x1="45" y1="95" x2="105" y2="95" stroke="#000000" stroke-width="3"/>
      <line x1="45" y1="110" x2="105" y2="110" stroke="#000000" stroke-width="3"/>

      <ellipse cx="75" cy="48" rx="26" ry="26" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <circle cx="66" cy="46" r="5" fill="#000000"/>
      <circle cx="67" cy="44" r="1.5" fill="#FFFFFF"/>
      <circle cx="84" cy="46" r="5" fill="#000000"/>
      <circle cx="85" cy="44" r="1.5" fill="#FFFFFF"/>
      <path d="M68 60 Q75 68 82 60" stroke="#000000" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M48 42 C44 20 62 18 75 16 C90 18 106 22 102 42 Z" fill="#1A1F36" stroke="#000000" stroke-width="3"/>

      <g transform="translate(100, 75)">
        <path d="M4 14 L8 34 C8 36 24 36 24 34 L28 14 Z" fill="#C8442F" stroke="#000000" stroke-width="2.5"/>
        <ellipse cx="16" cy="14" rx="12" ry="4" fill="#D97706" stroke="#000000" stroke-width="2"/>
        <path d="M12 8 Q16 2 12 -4" stroke="#F4F0FF" stroke-width="2" stroke-linecap="round" fill="none"/>
        <path d="M20 10 Q24 4 20 -2" stroke="#FFE600" stroke-width="2" stroke-linecap="round" fill="none"/>
      </g>
    </svg>
  `,

  // 8. Tram Didi — Confident conductor
  tramDidi: (size = 130) => `
    <svg width="${size}" height="${size * 1.25}" viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="186" rx="42" ry="7" fill="#000000" opacity="0.4"/>
      <rect x="48" y="90" width="64" height="60" rx="8" fill="#19D3F3" stroke="#000000" stroke-width="4"/>
      <rect x="42" y="90" width="14" height="6" fill="#FFE600" stroke="#000000" stroke-width="2"/>
      <rect x="104" y="90" width="14" height="6" fill="#FFE600" stroke="#000000" stroke-width="2"/>

      <ellipse cx="80" cy="54" rx="28" ry="28" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <circle cx="112" cy="46" r="12" fill="#1A1F36" stroke="#000000" stroke-width="3"/>
      <circle cx="112" cy="46" r="5" fill="#FF2E93"/>
      <path d="M52 42 Q80 26 108 42 Z" fill="#162744" stroke="#000000" stroke-width="3.5"/>
      <rect x="48" y="40" width="64" height="7" rx="2" fill="#FFE600" stroke="#000000" stroke-width="2.5"/>

      <ellipse cx="70" cy="54" rx="5" ry="6" fill="#000000"/>
      <circle cx="71" cy="52" r="1.5" fill="#FFFFFF"/>
      <ellipse cx="90" cy="54" rx="5" ry="6" fill="#000000"/>
      <circle cx="91" cy="52" r="1.5" fill="#FFFFFF"/>
      <path d="M72 68 Q80 74 88 68" stroke="#000000" stroke-width="3" stroke-linecap="round" fill="none"/>
    </svg>
  `,

  // 9. Satyajit Ray — Master Filmmaker & Visual Storyteller
  satyajitRay: (size = 140) => `
    <svg width="${size}" height="${size * 1.3}" viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <ellipse cx="80" cy="198" rx="44" ry="7" fill="#000000" opacity="0.45"/>
      <!-- Trousers & Dress Shoes -->
      <rect x="58" y="145" width="18" height="46" rx="3" fill="#14192C" stroke="#000000" stroke-width="3.5"/>
      <rect x="84" y="145" width="18" height="46" rx="3" fill="#14192C" stroke="#000000" stroke-width="3.5"/>
      <ellipse cx="64" cy="192" rx="14" ry="7" fill="#0B0A16" stroke="#000000" stroke-width="3"/>
      <ellipse cx="98" cy="192" rx="14" ry="7" fill="#0B0A16" stroke="#000000" stroke-width="3"/>

      <!-- Classic Long Kurta / Beige Khadi Panjabi -->
      <path d="M46 88 L114 88 L118 152 H42 Z" fill="#F4F0FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
      <line x1="80" y1="88" x2="80" y2="124" stroke="#000000" stroke-width="2.5"/>
      <circle cx="80" cy="98" r="2.5" fill="#19D3F3"/>
      <circle cx="80" cy="110" r="2.5" fill="#19D3F3"/>

      <!-- Director's Shawl (Terracotta / Orange-Brown) -->
      <path d="M44 90 C36 115 38 145 42 165 C52 165 60 155 60 135 Z" fill="#FF2E93" stroke="#000000" stroke-width="3.5"/>

      <!-- Head & Distinguished Tall Bone Structure -->
      <ellipse cx="80" cy="50" rx="28" ry="34" fill="#FAD1A7" stroke="#000000" stroke-width="3.5"/>
      <!-- Characteristic Sleek Back Hair -->
      <path d="M52 46 C50 18 68 12 80 12 C96 12 110 20 108 46 C102 28 92 24 80 24 C66 24 56 32 52 46 Z" fill="#14192C" stroke="#000000" stroke-width="3.5"/>

      <!-- Heavy Brow & Visionary Eyes -->
      <ellipse cx="70" cy="48" rx="5" ry="5.5" fill="#000000"/>
      <circle cx="72" cy="46" r="1.5" fill="#FFFFFF"/>
      <ellipse cx="90" cy="48" rx="5" ry="5.5" fill="#000000"/>
      <circle cx="92" cy="46" r="1.5" fill="#FFFFFF"/>
      <!-- Thick Distinguished Eyebrows -->
      <path d="M62 40 Q70 35 78 40" stroke="#000000" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M82 40 Q90 35 98 40" stroke="#000000" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Strong Nose & Calm Charismatic Expression -->
      <path d="M80 46 L82 58 L76 61" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <path d="M72 69 Q80 74 88 69" stroke="#000000" stroke-width="3" stroke-linecap="round"/>

      <!-- Director's Viewfinder / Clapperboard in Hand -->
      <g transform="translate(104, 110) rotate(12)">
        <rect x="0" y="8" width="34" height="26" rx="2" fill="#0B0A16" stroke="#FFE600" stroke-width="2.5"/>
        <!-- Clapper top stick with black & yellow stripes -->
        <rect x="0" y="0" width="34" height="8" rx="1.5" fill="#FFE600" stroke="#000000" stroke-width="2"/>
        <line x1="8" y1="0" x2="14" y2="8" stroke="#000000" stroke-width="2.5"/>
        <line x1="18" y1="0" x2="24" y2="8" stroke="#000000" stroke-width="2.5"/>
        <line x1="28" y1="0" x2="34" y2="8" stroke="#000000" stroke-width="2.5"/>
        <text x="6" y="24" font-size="7" font-family="monospace" font-weight="900" fill="#FFE600">SCENE 1</text>
      </g>
    </svg>
  `,

  // 10. Kolkata Yellow Taxi (Classic Ambassador)
  yellowTaxi: (size = 150) => `
    <svg width="${size}" height="${size * 0.6}" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <!-- Shadow -->
      <ellipse cx="100" cy="112" rx="85" ry="6" fill="#000000" opacity="0.5"/>
      <!-- Wheels -->
      <circle cx="50" cy="98" r="16" fill="#05040A" stroke="#000000" stroke-width="3"/>
      <circle cx="50" cy="98" r="7" fill="#F4F0FF" stroke="#000000" stroke-width="2"/>
      <circle cx="150" cy="98" r="16" fill="#05040A" stroke="#000000" stroke-width="3"/>
      <circle cx="150" cy="98" r="7" fill="#F4F0FF" stroke="#000000" stroke-width="2"/>

      <!-- Ambassador Car Body (Iconic Yellow) -->
      <path d="M20 86 Q16 70 32 68 L50 68 L70 38 L140 38 L165 68 L185 72 Q194 80 190 92 L172 92 Q168 84 150 84 Q132 84 128 92 L72 92 Q68 84 50 84 Q32 84 28 92 Z" fill="#FFE600" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>

      <!-- Windows & Windshield -->
      <path d="M72 43 L100 43 L100 66 L55 66 Z" fill="#19D3F3" fill-opacity="0.35" stroke="#000000" stroke-width="2.5"/>
      <path d="M104 43 L136 43 L158 66 L104 66 Z" fill="#19D3F3" fill-opacity="0.35" stroke="#000000" stroke-width="2.5"/>

      <!-- Roof TAXI Light Sign -->
      <rect x="94" y="26" width="28" height="12" rx="3" fill="#19D3F3" stroke="#000000" stroke-width="2.5"/>
      <text x="98" y="35" font-size="7" font-family="sans-serif" font-weight="900" fill="#05040A">TAXI</text>

      <!-- Headlight & Chrome Bumper -->
      <circle cx="186" cy="78" r="6" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>
      <rect x="180" y="86" width="12" height="6" rx="2" fill="#E2E8F0" stroke="#000000" stroke-width="2"/>
      <rect x="14" y="86" width="10" height="6" rx="2" fill="#E2E8F0" stroke="#000000" stroke-width="2"/>
    </svg>
  `,

  // 11. Kolkata Hand-pulled / Cycle Rickshaw
  cycleRickshaw: (size = 140) => `
    <svg width="${size}" height="${size * 0.9}" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <!-- Shadow -->
      <ellipse cx="85" cy="142" rx="70" ry="5" fill="#000000" opacity="0.45"/>
      
      <!-- Big Spoked Wheels -->
      <circle cx="44" cy="116" r="24" fill="none" stroke="#FFE600" stroke-width="3.5"/>
      <circle cx="44" cy="116" r="5" fill="#000000"/>
      <line x1="44" y1="92" x2="44" y2="140" stroke="#FFE600" stroke-width="2"/>
      <line x1="20" y1="116" x2="68" y2="116" stroke="#FFE600" stroke-width="2"/>
      <line x1="27" y1="99" x2="61" y2="133" stroke="#FFE600" stroke-width="2"/>
      <line x1="27" y1="133" x2="61" y2="99" stroke="#FFE600" stroke-width="2"/>

      <!-- Front Small Wheel -->
      <circle cx="138" cy="122" r="18" fill="none" stroke="#FFE600" stroke-width="3"/>
      <circle cx="138" cy="122" r="4" fill="#000000"/>

      <!-- Rickshaw Metal Frame -->
      <path d="M44 116 L88 116 L120 100 L138 122" stroke="#000000" stroke-width="3.5" fill="none"/>
      <line x1="120" y1="100" x2="124" y2="78" stroke="#000000" stroke-width="3"/>

      <!-- Passenger Canopy / Hood (Vibrant Pink & Cyan Striped) -->
      <path d="M26 62 Q50 36 82 54 L84 94 L24 94 Z" fill="#FF2E93" stroke="#000000" stroke-width="3.5"/>
      <path d="M42 45 Q60 40 76 56 L76 94 L42 94 Z" fill="#19D3F3" opacity="0.65"/>
      <rect x="22" y="90" width="64" height="8" rx="2" fill="#FFE600" stroke="#000000" stroke-width="2"/>

      <!-- Rickshaw Puller Figure -->
      <ellipse cx="114" cy="62" rx="10" ry="12" fill="#FAD1A7" stroke="#000000" stroke-width="2.5"/>
      <path d="M106 58 C104 46 118 44 122 58 Z" fill="#14192C"/>
      <rect x="108" y="74" width="16" height="24" rx="4" fill="#F4F0FF" stroke="#000000" stroke-width="2.5"/>
      <line x1="120" y1="84" x2="132" y2="78" stroke="#FAD1A7" stroke-width="3.5" stroke-linecap="round"/>
    </svg>
  `,

  // 12. Kolkata Heritage Tram (Classic Green & Cream Streetcar)
  tramCar: (size = 160) => `
    <svg width="${size}" height="${size * 0.6}" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <!-- Shadow -->
      <ellipse cx="110" cy="124" rx="100" ry="5" fill="#000000" opacity="0.45"/>

      <!-- Tram Overhead Pantograph / Pole -->
      <path d="M110 32 L120 10 L135 10 L145 32" stroke="#000000" stroke-width="3" fill="none"/>
      <line x1="115" y1="8" x2="140" y2="8" stroke="#FFE600" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Tram Body: Top Half Cream/White, Bottom Half Vintage Green/Teal -->
      <rect x="20" y="32" width="180" height="74" rx="8" fill="#1B5E3F" stroke="#000000" stroke-width="3.5"/>
      <rect x="20" y="32" width="180" height="38" rx="6" fill="#F4F0FF" stroke="#000000" stroke-width="3.5"/>

      <!-- Yellow Route Plate -->
      <rect x="75" y="24" width="70" height="12" rx="3" fill="#FFE600" stroke="#000000" stroke-width="2"/>
      <text x="82" y="33" font-size="7" font-family="monospace" font-weight="900" fill="#000000">#26 ESPLANADE</text>

      <!-- Windows Strip -->
      <rect x="30" y="40" width="18" height="24" rx="2" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>
      <rect x="54" y="40" width="22" height="24" rx="2" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>
      <rect x="82" y="40" width="22" height="24" rx="2" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>
      <rect x="116" y="40" width="22" height="24" rx="2" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>
      <rect x="144" y="40" width="22" height="24" rx="2" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>
      <rect x="172" y="40" width="18" height="24" rx="2" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>

      <!-- Center Entrance Door -->
      <rect x="100" y="40" width="14" height="60" rx="1" fill="#2A7A55" stroke="#000000" stroke-width="2"/>
      <line x1="107" y1="40" x2="107" y2="100" stroke="#000000" stroke-width="2"/>

      <!-- Red Accent Belt Line -->
      <line x1="20" y1="70" x2="200" y2="70" stroke="#E11D48" stroke-width="3"/>

      <!-- Headlight on front & back -->
      <circle cx="24" cy="84" r="5" fill="#FFE600" stroke="#000000" stroke-width="2"/>
      <circle cx="196" cy="84" r="5" fill="#FFE600" stroke="#000000" stroke-width="2"/>

      <!-- Steel Rail Wheels & Under-carriage -->
      <rect x="40" y="106" width="34" height="12" rx="2" fill="#0B0A16" stroke="#000000" stroke-width="2.5"/>
      <circle cx="48" cy="116" r="7" fill="#8C8C8C" stroke="#000000" stroke-width="2"/>
      <circle cx="66" cy="116" r="7" fill="#8C8C8C" stroke="#000000" stroke-width="2"/>

      <rect x="146" y="106" width="34" height="12" rx="2" fill="#0B0A16" stroke="#000000" stroke-width="2.5"/>
      <circle cx="154" cy="116" r="7" fill="#8C8C8C" stroke="#000000" stroke-width="2"/>
      <circle cx="172" cy="116" r="7" fill="#8C8C8C" stroke="#000000" stroke-width="2"/>
    </svg>
  `,

  // 13. Kolkata Auto-Rickshaw (Classic Green & Yellow 3-Wheeler)
  autoRickshaw: (size = 140) => `
    <svg width="${size}" height="${size * 0.7}" viewBox="0 0 170 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="filter drop-shadow-sticker">
      <!-- Shadow -->
      <ellipse cx="85" cy="112" rx="72" ry="5" fill="#000000" opacity="0.45"/>

      <!-- Rear Wheel -->
      <circle cx="46" cy="98" r="14" fill="#0B0A16" stroke="#000000" stroke-width="3"/>
      <circle cx="46" cy="98" r="5" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>

      <!-- Front Wheel -->
      <circle cx="132" cy="98" r="12" fill="#0B0A16" stroke="#000000" stroke-width="3"/>
      <circle cx="132" cy="98" r="4" fill="#FFFFFF" stroke="#000000" stroke-width="2"/>

      <!-- Auto Body: Yellow Canopy on Top, Green Bottom -->
      <path d="M25 80 L32 40 L65 30 L115 30 L135 60 L145 80 L140 92 L25 92 Z" fill="#1B5E3F" stroke="#000000" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M30 46 L65 32 L115 32 L132 58 L85 58 L30 58 Z" fill="#FFC800" stroke="#000000" stroke-width="3"/>

      <!-- Front Windshield -->
      <polygon points="105,36 128,58 98,58 92,36" fill="#19D3F3" fill-opacity="0.4" stroke="#000000" stroke-width="2"/>

      <!-- Passenger Open Window Cutout -->
      <rect x="42" y="46" width="38" height="24" rx="4" fill="#0B0A16" stroke="#000000" stroke-width="2"/>

      <!-- Front Headlight & Mudguard -->
      <circle cx="146" cy="74" r="5" fill="#FFE600" stroke="#000000" stroke-width="2"/>
      <path d="M120 86 Q135 78 144 86" stroke="#000000" stroke-width="3.5" fill="none"/>
    </svg>
  `
};
