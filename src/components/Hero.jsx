import React, { useState, useEffect } from 'react';
import { content } from '../content';
import { mascots } from '../assets/characters/mascots';

export const Hero = () => {
  // Live Countdown targeting 18 Dec 2026 (exact style from convergence1.tech)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date('2026-12-18T09:00:00+05:30').getTime();
    const updateCountdown = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((diff % (1000 * 60)) / 1000)
        });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Radial Crimson & Terracotta Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-b from-[#881337]/50 via-[#4C0519]/30 to-transparent rounded-full blur-[110px] pointer-events-none z-0"></div>

      {/* Floating Kolkata elements */}
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none z-0 text-6xl animate-pulse hidden lg:block">🚊</div>
      <div className="absolute bottom-40 left-8 opacity-15 pointer-events-none z-0 text-4xl hidden lg:block" style={{ animation: 'bobSlow 4s ease-in-out infinite' }}>🛺</div>

      {/* Hero Header Area */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Pill Tag (Kolkata Red & White style) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C0509] border border-[#E11D48]/80 text-[#FFF9F2] text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-[3px_3px_0px_#000]">
          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse"></span>
          KOLKATA'S PREMIER 72-HOUR RESIDENTIAL HACKATHON
        </div>

        {/* Huge Convergence-style BEBAS NEUE Title in Kolkata Red & Pure White */}
        <div className="relative mb-3 inline-block">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bebas uppercase tracking-wide text-[#FFFFFF] select-none drop-shadow-[5px_5px_0px_#000000] leading-[0.9]">
            FOUNDERS'{" "}
            <span className="text-[#E11D48]">HOUSE</span>
          </h1>

          {/* Comic sticker badge in Kolkata Yellow */}
          <div className="absolute -top-6 -right-4 sm:-right-10 bg-[#FFC800] text-black font-bebas text-sm sm:text-base px-3 py-1 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] transform rotate-12">
            EDITION 1.0
          </div>
        </div>

        {/* Bengali subtitle */}
        <div className="text-sm sm:text-base font-mono text-[#E11D48] font-bold mb-2 tracking-wider">
          ফাউন্ডার্স হাউস · লাল-সাদা কলকাতা সংস্করণ
        </div>

        {/* Subtitle / Tagline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#FFF9F2]/90 font-poppins font-medium leading-relaxed mb-6">
          Kolkata's most relentless 72-hour startup sprint. 10 elite squads live on-site at AIC Techno, crack raw mentor problems, build real products, and pitch live to venture syndicates — where Feluda's deductions meet Satyajit Ray's cinematic vision.
        </p>

        {/* Live Countdown Timer in Red, White & Gold */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[#1C0509] border-2 border-black shadow-[5px_5px_0px_#000] mb-8">
          <div className="flex flex-col items-center">
            <span className="font-bebas text-3xl sm:text-4xl text-[#FFFFFF] leading-none">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Days</span>
          </div>
          <span className="font-bebas text-2xl text-[#E11D48] mb-3">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bebas text-3xl sm:text-4xl text-[#E11D48] leading-none">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Hours</span>
          </div>
          <span className="font-bebas text-2xl text-[#E11D48] mb-3">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bebas text-3xl sm:text-4xl text-[#FFC800] leading-none">
              {String(timeLeft.mins).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Mins</span>
          </div>
          <span className="font-bebas text-2xl text-[#E11D48] mb-3">:</span>
          <div className="flex flex-col items-center">
            <span className="font-bebas text-3xl sm:text-4xl text-[#FFFFFF] leading-none">
              {String(timeLeft.secs).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-mono text-[#FFF9F2]/60 uppercase tracking-widest mt-1">Secs</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={content.event.applyLink}
            className="inline-flex items-center justify-center gap-2 bg-[#E11D48] hover:bg-[#BE123C] text-white font-poppins font-extrabold text-sm py-3 px-7 rounded-full border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            <span>REGISTER NOW</span>
            <span className="text-xs bg-black text-[#FFC800] px-2 py-0.5 rounded-full font-mono">
              ₹0 ENTRY
            </span>
          </a>

          <a
            href={content.event.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-poppins font-bold text-sm py-3 px-7 rounded-full border-2 border-white shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:-translate-y-0.5 transition-all"
          >
            JOIN COMMUNITY ↗
          </a>
        </div>

        {/* Character Dialogue Box — Feluda speaks */}
        <div className="max-w-2xl mx-auto comic-speech-bubble flex items-center gap-3.5 text-left mb-4">
          <span className="text-2xl flex-shrink-0">🔍</span>
          <div className="text-xs sm:text-sm font-poppins font-medium text-[#FFF9F2]">
            <span className="text-[#FFC800] font-bold">FELUDA SPEAKS: </span>
            "No slides without code. At Founders' House, we demand authentic customer proof and working terminals before you face the jury."
          </div>
        </div>

        {/* Satyajit Ray dialogue */}
        <div className="max-w-2xl mx-auto comic-speech-bubble flex items-center gap-3.5 text-left mb-6" style={{ boxShadow: '4px 4px 0px #E11D48' }}>
          <span className="text-2xl flex-shrink-0">🎬</span>
          <div className="text-xs sm:text-sm font-poppins font-medium text-[#FFF9F2]">
            <span className="text-[#E11D48] font-bold">SATYAJIT RAY'S DIRECTION: </span>
            "Every frame of your pitch must tell a story. The audience should feel your product, not just see it. That is cinema. That is entrepreneurship."
          </div>
        </div>

        {/* Event Meta Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {["18–20 DEC 2026", "AIC TECHNO, KOLKATA", "10 FINALIST TEAMS", "PAN-INDIA STUDENTS"].map((chip, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-[#1C0509] border border-white/20 text-xs font-mono font-bold tracking-wider text-[#FFF9F2]/80 shadow-[2px_2px_0px_#000]"
            >
              ✦ {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Skyline & Cartoon Characters (Kolkata Legends) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-12 px-4">
        <div className="relative h-60 sm:h-72 border-b-4 border-black overflow-hidden flex items-end justify-between">
          
          {/* Realistic Silhouette & Detailed Steel Truss of Howrah Bridge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 pointer-events-none opacity-90 overflow-hidden">
            <svg viewBox="0 0 1000 240" className="w-full h-full fill-none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="bridgeSteel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#19D3F3" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#E11D48" stopOpacity="0.6"/>
                </linearGradient>
                <linearGradient id="waterReflection" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1C0509" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0B0204" stopOpacity="1"/>
                </linearGradient>
              </defs>

              {/* Water base line representing the Hooghly River */}
              <rect x="0" y="200" width="1000" height="40" fill="url(#waterReflection)"/>
              <line x1="0" y1="200" x2="1000" y2="200" stroke="#E11D48" strokeWidth="2" strokeDasharray="8 6" opacity="0.6"/>

              {/* Distant Kolkata Skyline & Victoria Memorial Dome in Background */}
              <path d="M470 200 L470 185 Q500 155 530 185 L530 200 Z" fill="#2E070F" stroke="#E11D48" strokeWidth="1" opacity="0.5"/>
              <line x1="500" y1="155" x2="500" y2="142" stroke="#FFC800" strokeWidth="1.5" opacity="0.6"/>
              {/* Church of St. Paul spire silhouette */}
              <polygon points="445,200 450,165 455,200" fill="#2E070F" opacity="0.4"/>

              {/* MAIN CANTILEVER TOWERS (Realistic Double Portal Structure) */}
              {/* West Cantilever Tower (Howrah Side) */}
              <path d="M150 200 L180 30 L220 30 L250 200" stroke="url(#bridgeSteel)" strokeWidth="3.5" fill="none"/>
              <line x1="160" y1="140" x2="240" y2="140" stroke="#19D3F3" strokeWidth="2"/>
              <line x1="170" y1="90" x2="230" y2="90" stroke="#19D3F3" strokeWidth="2"/>
              <line x1="180" y1="30" x2="220" y2="30" stroke="#FFC800" strokeWidth="3"/>
              {/* Internal Cross Lattice Bracing on West Tower */}
              <line x1="160" y1="140" x2="230" y2="90" stroke="#19D3F3" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8"/>
              <line x1="240" y1="140" x2="170" y2="90" stroke="#19D3F3" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8"/>
              <line x1="170" y1="90" x2="220" y2="30" stroke="#19D3F3" strokeWidth="1.5" opacity="0.8"/>
              <line x1="230" y1="90" x2="180" y2="30" stroke="#19D3F3" strokeWidth="1.5" opacity="0.8"/>
              <line x1="150" y1="200" x2="240" y2="140" stroke="#19D3F3" strokeWidth="1.5" opacity="0.5"/>
              <line x1="250" y1="200" x2="160" y2="140" stroke="#19D3F3" strokeWidth="1.5" opacity="0.5"/>

              {/* East Cantilever Tower (Kolkata Side) */}
              <path d="M750 200 L780 30 L820 30 L850 200" stroke="url(#bridgeSteel)" strokeWidth="3.5" fill="none"/>
              <line x1="760" y1="140" x2="840" y2="140" stroke="#19D3F3" strokeWidth="2"/>
              <line x1="770" y1="90" x2="830" y2="90" stroke="#19D3F3" strokeWidth="2"/>
              <line x1="780" y1="30" x2="820" y2="30" stroke="#FFC800" strokeWidth="3"/>
              {/* Internal Cross Lattice on East Tower */}
              <line x1="760" y1="140" x2="830" y2="90" stroke="#19D3F3" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8"/>
              <line x1="840" y1="140" x2="770" y2="90" stroke="#19D3F3" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.8"/>
              <line x1="770" y1="90" x2="820" y2="30" stroke="#19D3F3" strokeWidth="1.5" opacity="0.8"/>
              <line x1="830" y1="90" x2="780" y2="30" stroke="#19D3F3" strokeWidth="1.5" opacity="0.8"/>
              <line x1="750" y1="200" x2="840" y2="140" stroke="#19D3F3" strokeWidth="1.5" opacity="0.5"/>
              <line x1="850" y1="200" x2="760" y2="140" stroke="#19D3F3" strokeWidth="1.5" opacity="0.5"/>

              {/* SUSPENDED MAIN SPAN (The iconic parabolic steel arch) */}
              <path d="M220 30 C340 70, 420 115, 500 120 C580 115, 660 70, 780 30" stroke="#FFFFFF" strokeWidth="3" fill="none"/>
              {/* Anchor Backstays */}
              <path d="M180 30 L60 200" stroke="url(#bridgeSteel)" strokeWidth="3"/>
              <path d="M820 30 L940 200" stroke="url(#bridgeSteel)" strokeWidth="3"/>

              {/* Steel Webbing & Vertical Suspender Cables */}
              {[
                { x1: 260, y1: 52, y2: 200 },
                { x1: 300, y1: 72, y2: 200 },
                { x1: 340, y1: 90, y2: 200 },
                { x1: 380, y1: 104, y2: 200 },
                { x1: 420, y1: 114, y2: 200 },
                { x1: 460, y1: 119, y2: 200 },
                { x1: 500, y1: 120, y2: 200 },
                { x1: 540, y1: 119, y2: 200 },
                { x1: 580, y1: 114, y2: 200 },
                { x1: 620, y1: 104, y2: 200 },
                { x1: 660, y1: 90, y2: 200 },
                { x1: 700, y1: 72, y2: 200 },
                { x1: 740, y1: 52, y2: 200 },
              ].map((c, i) => (
                <g key={i}>
                  <line x1={c.x1} y1={c.y1} x2={c.x1} y2={c.y2} stroke="#19D3F3" strokeWidth="1.5" opacity="0.75"/>
                  {i % 2 === 0 && (
                    <line x1={c.x1} y1={c.y1} x2={c.x1 + 40} y2={c.y2} stroke="#E11D48" strokeWidth="1" strokeDasharray="2 2" opacity="0.6"/>
                  )}
                </g>
              ))}

              {/* Anchor Spans Diagonal Lattice */}
              <line x1="140" y1="100" x2="100" y2="200" stroke="#19D3F3" strokeWidth="1.2" opacity="0.6"/>
              <line x1="860" y1="100" x2="900" y2="200" stroke="#19D3F3" strokeWidth="1.2" opacity="0.6"/>

              {/* Continuous Roadway Deck */}
              <line x1="40" y1="200" x2="960" y2="200" stroke="#FFFFFF" strokeWidth="4"/>
              <line x1="40" y1="205" x2="960" y2="205" stroke="#000000" strokeWidth="6"/>

              {/* Glowing Bridge Streetlights along the Arch & Towers */}
              <circle cx="180" cy="30" r="4" fill="#FFC800" className="animate-pulse"/>
              <circle cx="220" cy="30" r="4" fill="#FFC800" className="animate-pulse"/>
              <circle cx="340" cy="90" r="3" fill="#E11D48"/>
              <circle cx="500" cy="120" r="4.5" fill="#FFC800" className="animate-pulse"/>
              <circle cx="660" cy="90" r="3" fill="#E11D48"/>
              <circle cx="780" cy="30" r="4" fill="#FFC800" className="animate-pulse"/>
              <circle cx="820" cy="30" r="4" fill="#FFC800" className="animate-pulse"/>
            </svg>
          </div>

          {/* Kolkata Detective & Legend Squad */}
          <div className="relative z-20 flex justify-between w-full items-end pb-2">
            {/* Feluda & Topshe */}
            <div className="flex items-end gap-1">
              <div
                className="mascot-bob cursor-pointer"
                dangerouslySetInnerHTML={{ __html: mascots.feluda(95) }}
                title="Feluda — Chief Deductor"
              />
              <div
                className="hidden sm:block mascot-bob"
                style={{ animationDelay: '0.8s' }}
                dangerouslySetInnerHTML={{ __html: mascots.topshe(75) }}
                title="Topshe — Scribe"
              />
            </div>

            {/* Satyajit Ray & Tenida */}
            <div className="hidden md:flex items-end gap-2">
              {mascots.satyajitRay && (
                <div
                  className="mascot-bob"
                  style={{ animationDelay: '0.3s' }}
                  dangerouslySetInnerHTML={{ __html: mascots.satyajitRay(85) }}
                  title="Satyajit Ray — Filmmaker"
                />
              )}
              <div
                className="mascot-bob"
                style={{ animationDelay: '1.2s' }}
                dangerouslySetInnerHTML={{ __html: mascots.tenida(80) }}
                title="Tenida — Potoldanga Leader"
              />
              <div
                className="mascot-bob"
                style={{ animationDelay: '0.4s' }}
                dangerouslySetInnerHTML={{ __html: mascots.chaiChintu(70) }}
                title="Chai Chintu — Tapri Anchor"
              />
            </div>

            {/* Byomkesh Bakshi & Jatayu */}
            <div className="flex items-end gap-1">
              <div
                className="hidden sm:block mascot-bob"
                style={{ animationDelay: '1.5s' }}
                dangerouslySetInnerHTML={{ __html: mascots.jatayu(80) }}
                title="Jatayu — Thriller Novelist"
              />
              <div
                className="mascot-bob cursor-pointer"
                style={{ animationDelay: '0.6s' }}
                dangerouslySetInnerHTML={{ __html: mascots.byomkesh(95) }}
                title="Byomkesh Bakshi — Satyanweshi"
              />
            </div>
          </div>
        </div>

        {/* Animated Kolkata Street Parade — Rich Cartoon SVG Taxi, Rickshaw, Tram & Auto */}
        <div className="relative h-16 w-full overflow-hidden border-t-2 border-black bg-[#120205]/60">
          
          {/* Animated Kolkata Yellow Taxi (Left to Right) */}
          <div className="absolute bottom-1 left-0 taxi-scroller">
            <div
              className="transform hover:scale-110 transition-transform cursor-pointer"
              dangerouslySetInnerHTML={{ __html: mascots.yellowTaxi ? mascots.yellowTaxi(110) : '' }}
              title="Classic Kolkata Ambassador Yellow Taxi"
            />
          </div>

          {/* Animated Kolkata Cycle Rickshaw (Right to Left) */}
          <div className="absolute bottom-1 right-0 rickshaw-scroller hidden sm:block">
            <div
              className="transform hover:scale-110 transition-transform cursor-pointer"
              dangerouslySetInnerHTML={{ __html: mascots.cycleRickshaw ? mascots.cycleRickshaw(100) : '' }}
              title="Authentic Kolkata Cycle Rickshaw"
            />
          </div>

          {/* Animated Kolkata Auto-Rickshaw (Right to Left with offset) */}
          <div className="absolute bottom-1 right-1/4 rickshaw-scroller hidden md:block" style={{ animationDelay: '9s' }}>
            <div
              className="transform hover:scale-110 transition-transform cursor-pointer"
              dangerouslySetInnerHTML={{ __html: mascots.autoRickshaw ? mascots.autoRickshaw(95) : '' }}
              title="Kolkata Green & Yellow Auto-Rickshaw"
            />
          </div>

          {/* Animated Kolkata Heritage Tram #26 (Gentle slow scroll across the bottom) */}
          <div className="absolute bottom-1 left-1/3 tram-scroller hidden lg:block">
            <div
              className="transform hover:scale-105 transition-transform cursor-pointer"
              dangerouslySetInnerHTML={{ __html: mascots.tramCar ? mascots.tramCar(135) : '' }}
              title="Kolkata Heritage Tramway #26"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
