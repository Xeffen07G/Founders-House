import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Venue = () => {
  return (
    <section id="venue" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill={content.venue.pill}
        line1={content.venue.headingLine1}
        line2={content.venue.headingLine2}
        accentColor="text-neonYellow"
        description={content.venue.desc}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Venue Information Glass Card */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="glass-card p-6 border-2 border-black shadow-sticker">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-neonLime animate-ping"></span>
              <span className="font-mono text-xs text-neonLime uppercase tracking-wider font-bold">
                PHYSICAL STAGING GROUND
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display text-creamText mb-2">
              {content.event.venueName}
            </h3>
            <p className="text-sm font-mono text-creamText/70 mb-4">
              {content.event.venueAddress}
            </p>

            <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-neonYellow mb-4">
              ✦ {content.event.dates} · 72 Hours Full Lock-in
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-neonCyan/20 border border-neonCyan text-neonCyan font-mono text-xs font-bold">
                Gate 2 Entry
              </span>
              <span className="px-3 py-1 rounded-full bg-neonPink/20 border border-neonPink text-neonPink font-mono text-xs font-bold">
                24x7 Chai Bar
              </span>
              <span className="px-3 py-1 rounded-full bg-neonLime/20 border border-neonLime text-neonLime font-mono text-xs font-bold">
                🚊 Tram Connected
              </span>
            </div>
          </div>

          {/* Funny Quote Card */}
          <div className="p-5 rounded-2xl bg-[#0B1126] border-2 border-neonYellow shadow-sticker text-creamText/90 font-medium italic text-sm">
            {content.venue.quote}
          </div>

          {/* Kolkata Vibes Card */}
          <div className="p-4 rounded-xl bg-[#0B0A16] border border-white/10 shadow-sticker">
            <div className="text-xs font-mono text-neonPink font-bold mb-2 uppercase tracking-wider">
              ✦ KOLKATA EXPERIENCE INCLUDED
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: "🚕", label: "Yellow Taxi Rides" },
                { icon: "☕", label: "Kulhad Chai Station" },
                { icon: "🥟", label: "Midnight Shingaras" },
                { icon: "🎵", label: "Rabindra Sangeet Vibes" },
                { icon: "🌉", label: "Howrah Bridge View" },
                { icon: "🎬", label: "Ray Film Screenings" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-creamText/70">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightweight SVG Cyber Map Vector of Salt Lake Sector V */}
        <div className="lg:col-span-7 relative">
          <div className="rounded-2xl border-4 border-black overflow-hidden shadow-sticker-lg bg-[#070B1A] relative h-[360px] sm:h-[420px] flex items-center justify-center p-6">
            
            {/* Sector V Map Grid */}
            <svg viewBox="0 0 600 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Radial Glow on Sector V */}
              <circle cx="340" cy="210" r="140" fill="#3B1A7A" fillOpacity="0.4" />
              <circle cx="340" cy="210" r="70" fill="#19D3F3" fillOpacity="0.1" />

              {/* Grid Lines */}
              <line x1="40" y1="80" x2="560" y2="80" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>
              <line x1="40" y1="160" x2="560" y2="160" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>
              <line x1="40" y1="240" x2="560" y2="240" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>
              <line x1="40" y1="320" x2="560" y2="320" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>

              <line x1="120" y1="40" x2="120" y2="360" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>
              <line x1="240" y1="40" x2="240" y2="360" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>
              <line x1="360" y1="40" x2="360" y2="360" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>
              <line x1="480" y1="40" x2="480" y2="360" stroke="#162344" strokeWidth="1.5" strokeDasharray="4 4"/>

              {/* Major Roads & Flyovers */}
              {/* EM Bypass / Ring */}
              <path d="M60 40 Q180 180 160 360" stroke="#2B3A67" strokeWidth="14" strokeLinecap="round" />
              <path d="M60 40 Q180 180 160 360" stroke="#FFE600" strokeWidth="2" strokeDasharray="6 6" />
              <text x="75" y="110" fill="#F4F0FF" opacity="0.6" fontSize="10" fontFamily="monospace">EM BYPASS</text>

              {/* Maa Flyover Axis */}
              <path d="M120 320 Q280 280 540 210" stroke="#2B3A67" strokeWidth="12" strokeLinecap="round" />
              <text x="210" y="325" fill="#F4F0FF" opacity="0.6" fontSize="10" fontFamily="monospace">MAA FLYOVER</text>

              {/* Salt Lake Sector V Ring */}
              <rect x="250" y="130" width="180" height="150" rx="20" fill="#0E1A38" stroke="#19D3F3" strokeWidth="2" />
              <text x="270" y="160" fill="#19D3F3" fontSize="11" fontWeight="bold" fontFamily="monospace">SALT LAKE SECTOR V</text>
              <text x="270" y="178" fill="#F4F0FF" opacity="0.7" fontSize="9" fontFamily="monospace">TECH EMBASSY ZONE</text>

              {/* AIC Techno Campus Compound */}
              <rect x="290" y="195" width="100" height="65" rx="10" fill="#FFE600" fillOpacity="0.15" stroke="#FFE600" strokeWidth="2.5" />
              
              {/* Metro Line & Stations */}
              <path d="M50 200 L250 200 L440 170 L550 170" stroke="#7CFF3A" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4"/>
              <circle cx="250" cy="200" r="5" fill="#7CFF3A" stroke="#000000" strokeWidth="2"/>
              <text x="210" y="222" fill="#7CFF3A" fontSize="9" fontFamily="monospace">SEALDAH METRO LINK</text>
              <circle cx="440" cy="170" r="5" fill="#7CFF3A" stroke="#000000" strokeWidth="2"/>
              <text x="445" y="162" fill="#7CFF3A" fontSize="9" fontFamily="monospace">SECTOR V STN</text>

              {/* Tram route */}
              <path d="M100 300 Q200 290 350 260" stroke="#19D3F3" strokeWidth="2" strokeDasharray="4 3" opacity="0.5"/>
              <text x="105" y="312" fill="#19D3F3" fontSize="8" fontFamily="monospace" opacity="0.5">TRAM LINE</text>

              {/* Iconic Taxi on EM Bypass */}
              <rect x="148" y="240" width="18" height="10" rx="3" fill="#FFE600" stroke="#000000" strokeWidth="1.5" />

              {/* Howrah Bridge indicator */}
              <text x="60" y="365" fill="#FF2E93" fontSize="8" fontFamily="monospace" opacity="0.6">← HOWRAH BRIDGE 8km</text>

              {/* Victoria Memorial indicator */}
              <text x="400" y="365" fill="#9B5CFF" fontSize="8" fontFamily="monospace" opacity="0.6">VICTORIA MEMORIAL →</text>
            </svg>

            {/* Glowing Custom Mascot Pin Over Map */}
            <div className="absolute top-[52%] left-[57%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
              <div className="px-3 py-1 bg-neonYellow border-2 border-black rounded-full font-display text-[10px] text-black shadow-sticker mb-1 font-bold animate-bounce">
                📍 AIC TECHNO HQ
              </div>
              <div className="w-7 h-7 rounded-full bg-neonPink border-2 border-black shadow-[0_0_25px_#FF2E93] flex items-center justify-center animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
              </div>
            </div>

            {/* Live GPS Coordinates Overlay */}
            <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded bg-black/80 border border-neonCyan/40 font-mono text-[10px] text-neonCyan">
              GPS: 22.5768° N, 88.4312° E · SECTOR V
            </div>

            {/* Kolkata badge */}
            <div className="absolute top-3 left-4 px-2.5 py-1 rounded bg-black/80 border border-neonYellow/40 font-mono text-[10px] text-neonYellow">
              🏛️ CITY OF JOY — কলকাতা
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
