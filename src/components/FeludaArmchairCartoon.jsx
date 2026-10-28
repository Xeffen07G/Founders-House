import React, { useState } from 'react';

export const FeludaArmchairCartoon = ({ className = '', quote = "Bhabte shuru koro. Magojastro holo shobcheye boro weapon." }) => {
  const [activeTab, setActiveTab] = useState('cartoon'); // 'cartoon' | 'photo'

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      
      {/* Cartoon / Archive Photo Toggle Switch */}
      <div className="flex items-center gap-2 mb-4 z-20">
        <button
          onClick={() => setActiveTab('cartoon')}
          className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider transition-all border-2 border-black ${
            activeTab === 'cartoon'
              ? 'bg-[#E11D48] text-white shadow-[2px_2px_0px_#000]'
              : 'bg-[#1C0509] text-white/60 hover:text-white'
          }`}
        >
          ✦ CARTOON SLEUTH
        </button>
        <button
          onClick={() => setActiveTab('photo')}
          className={`px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider transition-all border-2 border-black ${
            activeTab === 'photo'
              ? 'bg-[#FFC800] text-black shadow-[2px_2px_0px_#000]'
              : 'bg-[#1C0509] text-white/60 hover:text-white'
          }`}
        >
          📷 RAY ARCHIVE
        </button>
      </div>

      <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] flex justify-center items-end">
        
        {/* COMIC SPEECH BUBBLE (Convergence Signature Element) */}
        <div className="absolute -top-12 sm:-top-14 right-2 sm:-right-4 z-30 max-w-[240px] sm:max-w-[280px] bg-[#FFFFFF] text-black p-3.5 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000] animate-bounce-subtle">
          <p className="font-comic text-xs sm:text-sm font-bold leading-snug">
            "{quote}"
          </p>
          <div className="flex items-center justify-between mt-2 pt-1 border-t border-black/20">
            <span className="font-mono text-[10px] text-[#E11D48] font-extrabold uppercase tracking-wider">
              PRADOSH C. MITTER (FELUDA)
            </span>
            <span className="text-xs">🕵️‍♂️</span>
          </div>
          {/* Speech bubble pointer notch */}
          <div className="absolute -bottom-2.5 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-black transform rotate-45" />
        </div>

        {activeTab === 'photo' ? (
          /* Archive Photo Mode with Comic Frame */
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[6px_6px_0px_#000] bg-[#1C0509] p-3 max-w-[320px]">
            <img
              src="/feluda_armchair_photo.png"
              alt="Feluda in Armchair (Satyajit Ray archive)"
              className="w-full h-auto rounded-xl object-cover grayscale contrast-125"
            />
            <div className="mt-2 text-center font-mono text-[11px] text-[#FFC800] font-bold tracking-widest uppercase">
              SATYAJIT RAY'S MASTER SLEUTH · 21 RAJANI SEN ROAD
            </div>
          </div>
        ) : (
          /* Vector Cartoon Mode: Faithfully recreating Feluda in his retro armchair with Charminar & smoke */
          <div className="relative w-full flex justify-center">
            
            {/* Animated Smoke Layers drifting from Charminar cigarette */}
            <div className="absolute top-[18%] left-[28%] sm:left-[30%] pointer-events-none z-30">
              <svg className="w-16 h-28 overflow-visible" viewBox="0 0 60 120" fill="none">
                {/* Smoke Wave 1 */}
                <path
                  d="M20 110 C15 90, 30 70, 15 50 C5 35, 25 20, 18 5"
                  stroke="#E2E8F0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="animate-curl-smoke opacity-70"
                  style={{ filter: 'blur(1px)' }}
                />
                {/* Smoke Wave 2 (delayed) */}
                <path
                  d="M20 110 C25 95, 10 75, 22 55 C32 40, 15 25, 25 10"
                  stroke="#CBD5E1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-curl-smoke-delayed opacity-50"
                  style={{ filter: 'blur(1.5px)' }}
                />
                {/* Smoke Puff */}
                <circle cx="20" cy="110" r="2" fill="#FFFFFF" className="animate-ping opacity-60" />
              </svg>
            </div>

            {/* THE COMPLETE SVG ILLUSTRATION */}
            <svg
              className="w-full h-auto max-h-[480px] drop-shadow-[8px_8px_0px_#000000]"
              viewBox="0 0 420 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Armchair fabric gradient */}
                <linearGradient id="armchairGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E2A63B" />
                  <stop offset="50%" stopColor="#C88820" />
                  <stop offset="100%" stopColor="#96610E" />
                </linearGradient>

                {/* Shawl Olive Green Gradient */}
                <linearGradient id="shawlGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5E7852" />
                  <stop offset="50%" stopColor="#4A6140" />
                  <stop offset="100%" stopColor="#32442B" />
                </linearGradient>

                {/* Skin tone gradient */}
                <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F9CF9E" />
                  <stop offset="100%" stopColor="#DF9F6B" />
                </linearGradient>

                {/* Red Glowing Ember */}
                <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF275" />
                  <stop offset="40%" stopColor="#FF3B30" />
                  <stop offset="100%" stopColor="#990000" />
                </radialGradient>
              </defs>

              {/* 1. Floor Cast Shadow */}
              <ellipse cx="210" cy="485" rx="150" ry="22" fill="#000000" opacity="0.55" />

              {/* 2. Armchair Backrest Frame & Padding */}
              {/* Back Legs (angled) */}
              <path d="M120 400 L95 475 L108 478 L134 400 Z" fill="#20150E" stroke="#000000" strokeWidth="3" />
              <path d="M300 400 L325 475 L312 478 L286 400 Z" fill="#20150E" stroke="#000000" strokeWidth="3" />

              {/* Armchair Main Backrest (Retro Mid-Century Wingback) */}
              <path
                d="M105 180 C105 145 130 120 170 115 L250 115 C290 120 315 145 315 180 L310 320 C310 340 290 350 250 350 L170 350 C130 350 110 340 110 320 Z"
                fill="url(#armchairGrad)"
                stroke="#000000"
                strokeWidth="4"
              />
              {/* Backrest Seams / Tufting Lines */}
              <line x1="160" y1="130" x2="160" y2="330" stroke="#000000" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
              <line x1="210" y1="125" x2="210" y2="335" stroke="#000000" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
              <line x1="260" y1="130" x2="260" y2="330" stroke="#000000" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />

              {/* Armchair Seat Cushion */}
              <path
                d="M95 320 C95 305 125 300 210 300 C295 300 325 305 325 320 L330 375 C330 395 300 405 210 405 C120 405 90 395 90 375 Z"
                fill="#C88820"
                stroke="#000000"
                strokeWidth="4"
              />

              {/* Left Armrest (Viewer's Left) */}
              <path
                d="M85 240 C85 220 105 215 120 225 L120 345 C105 355 85 345 85 325 Z"
                fill="#DE9E35"
                stroke="#000000"
                strokeWidth="3.5"
              />

              {/* Right Armrest (Viewer's Right) */}
              <path
                d="M300 225 C315 215 335 220 335 240 L335 325 C335 345 315 355 300 345 Z"
                fill="#DE9E35"
                stroke="#000000"
                strokeWidth="3.5"
              />

              {/* Front Wooden Legs */}
              <path d="M110 380 L88 480 L102 482 L128 385 Z" fill="#2E1B10" stroke="#000000" strokeWidth="3.5" />
              <path d="M310 385 L332 482 L318 480 L292 380 Z" fill="#2E1B10" stroke="#000000" strokeWidth="3.5" />

              {/* =================================================== */}
              {/* FELUDA'S BODY & CLOTHING */}
              {/* =================================================== */}

              {/* 3. Left Leg (Straight down, wearing white pyjama) */}
              <path
                d="M175 360 L185 440 L210 440 L215 365 Z"
                fill="#F7F3E8"
                stroke="#000000"
                strokeWidth="3.5"
              />
              {/* Pyjama creases */}
              <path d="M190 385 Q198 405 194 425" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

              {/* Left Foot in Bengali Leather Chappal */}
              <path d="M188 440 L180 472 C180 477 215 477 218 472 L212 440 Z" fill="url(#skinGrad)" stroke="#000000" strokeWidth="3" />
              {/* Chappal Sole & Straps */}
              <ellipse cx="198" cy="475" rx="18" ry="6" fill="#1C1410" stroke="#000000" strokeWidth="2.5" />
              <path d="M185 468 Q198 460 210 468" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" />
              <circle cx="198" cy="466" r="2.5" fill="#C88820" />

              {/* 4. Right Leg (CROSSED OVER LEFT KNEE - Signature Pose) */}
              {/* Thigh going across */}
              <path
                d="M170 340 C170 340 235 345 265 375 C250 405 210 400 170 375 Z"
                fill="#FAF6ED"
                stroke="#000000"
                strokeWidth="3.5"
              />
              {/* Lower leg crossed horizontally/hanging */}
              <path
                d="M265 375 C275 390 280 415 275 435 C260 440 248 425 245 405 C240 395 245 385 265 375 Z"
                fill="#EDE4D0"
                stroke="#000000"
                strokeWidth="3.5"
              />
              {/* Right Foot in Leather Chappal (casual dangle) */}
              <g transform="rotate(15 265 445)">
                <path d="M255 430 L250 455 C250 460 275 460 278 455 L272 430 Z" fill="url(#skinGrad)" stroke="#000000" strokeWidth="3" />
                <ellipse cx="264" cy="458" rx="15" ry="5" fill="#1C1410" stroke="#000000" strokeWidth="2.5" />
                <path d="M254 453 Q264 447 274 453" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
              </g>

              {/* 5. Kurta Torso & Folds */}
              <path
                d="M165 190 L255 190 L260 350 L160 350 Z"
                fill="#FAF6ED"
                stroke="#000000"
                strokeWidth="3.5"
              />

              {/* 6. Iconic Olive-Green Chador (Shawl draped across chest & shoulders) */}
              <path
                d="M140 180 C155 165 260 165 280 185 C290 215 285 270 260 290 C230 305 180 300 150 275 C135 245 130 205 140 180 Z"
                fill="url(#shawlGrad)"
                stroke="#000000"
                strokeWidth="4"
              />
              {/* Dark Shawl Trim & Gold Border Stripe (As in photo) */}
              <path
                d="M145 200 C180 205 240 210 275 205"
                stroke="#1B2616"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M145 200 C180 205 240 210 275 205"
                stroke="#FFC800"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Shawl fold shadows */}
              <path d="M160 220 Q200 240 245 235" stroke="#253520" strokeWidth="3" strokeLinecap="round" />
              <path d="M165 250 Q205 268 250 260" stroke="#253520" strokeWidth="2.5" strokeLinecap="round" />

              {/* 7. Left Arm (resting comfortably on Left Armrest) */}
              <path
                d="M270 190 C290 215 315 240 315 270 L300 275 C295 245 275 220 255 200 Z"
                fill="#FAF6ED"
                stroke="#000000"
                strokeWidth="3"
              />
              {/* Left Hand fingers draped on armrest */}
              <path
                d="M312 268 C318 275 320 288 316 295 C310 297 304 290 302 280 Z"
                fill="url(#skinGrad)"
                stroke="#000000"
                strokeWidth="2.5"
              />

              {/* 8. Right Arm (Bent up with Charminar cigarette!) */}
              <path
                d="M145 190 C125 215 110 240 110 265 L125 268 C128 245 145 220 160 200 Z"
                fill="#FAF6ED"
                stroke="#000000"
                strokeWidth="3"
              />
              {/* Forearm angled upwards toward chin */}
              <path
                d="M112 265 C115 240 120 220 135 200 L148 206 C136 226 130 245 126 268 Z"
                fill="url(#skinGrad)"
                stroke="#000000"
                strokeWidth="3"
              />
              {/* Right Hand Holding Cigarette */}
              <circle cx="138" cy="195" r="9" fill="url(#skinGrad)" stroke="#000000" strokeWidth="2.5" />
              <path d="M142 190 L152 184" stroke="url(#skinGrad)" strokeWidth="4" strokeLinecap="round" />
              <path d="M142 194 L154 189" stroke="url(#skinGrad)" strokeWidth="4" strokeLinecap="round" />

              {/* The Charminar Cigarette */}
              <rect x="146" y="180" width="22" height="4.5" rx="1.5" transform="rotate(-25 146 180)" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
              {/* Amber glowing tip */}
              <circle cx="166" cy="170" r="3.5" fill="url(#emberGlow)" stroke="#FFC800" strokeWidth="1" />
              <circle cx="166" cy="170" r="6" fill="#FF3B30" opacity="0.3" className="animate-ping" />

              {/* =================================================== */}
              {/* 9. FELUDA'S HEAD & FACIAL FEATURES (Satyajit Ray Sketch) */}
              {/* =================================================== */}
              {/* Neck */}
              <path d="M195 140 L195 170 L225 170 L225 140 Z" fill="url(#skinGrad)" stroke="#000000" strokeWidth="3" />
              
              {/* Head Base */}
              <path
                d="M185 95 C185 65 200 55 215 55 C230 55 245 65 245 95 C245 125 235 145 210 145 C190 145 185 125 185 95 Z"
                fill="url(#skinGrad)"
                stroke="#000000"
                strokeWidth="3.5"
              />

              {/* Sharp Sculpted Jawline & Chin */}
              <path d="M188 115 L205 140 L222 135 L242 110" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Satyajit Ray's Iconic Slicked Back Hair with Side Parting */}
              <path
                d="M182 90 C180 50 195 38 215 38 C238 38 252 50 250 90 C242 68 230 62 215 64 C195 64 188 75 182 90 Z"
                fill="#15121E"
                stroke="#000000"
                strokeWidth="3.5"
              />
              {/* Hair Gloss Highlight */}
              <path d="M205 45 Q220 42 235 48" stroke="#3730A3" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
              <path d="M192 60 Q205 55 212 58" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

              {/* Keen Observant Detective Eyes */}
              {/* Left Eye */}
              <ellipse cx="202" cy="92" rx="4.5" ry="3.5" fill="#000000" />
              <circle cx="203" cy="91" r="1.2" fill="#FFFFFF" />
              {/* Right Eye */}
              <ellipse cx="225" cy="90" rx="4.5" ry="3.5" fill="#000000" />
              <circle cx="226" cy="89" r="1.2" fill="#FFFFFF" />

              {/* Sharp Dark Eyebrows */}
              <path d="M195 85 Q204 80 210 84" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M220 83 Q228 80 234 85" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" />

              {/* Distinctive Straight Nose */}
              <path d="M214 85 L215 108 L222 108" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

              {/* Calm, Confident Half-Smirk */}
              <path d="M205 120 Q215 124 225 120" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Ear */}
              <path d="M184 92 C180 95 180 105 186 108" stroke="#000000" strokeWidth="2.5" fill="url(#skinGrad)" />

              {/* Badge Overlay */}
              <g transform="translate(145, 480)">
                <rect x="0" y="0" width="130" height="24" rx="12" fill="#120205" stroke="#FFC800" strokeWidth="2" />
                <text x="65" y="16" fill="#FFF9F2" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="2">
                  MAGOJASTRO 72H
                </text>
              </g>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
