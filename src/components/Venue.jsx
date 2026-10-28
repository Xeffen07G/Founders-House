import React, { useState } from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const Venue = () => {
  const [mapMode, setMapMode] = useState('satellite'); // 'satellite' | 'cyber'

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
                🚊 Tram & Taxi Linked
              </span>
            </div>
          </div>

          {/* Funny Quote Card */}
          <div className="p-5 rounded-2xl bg-[#1C0509] border-2 border-[#E11D48] shadow-sticker text-creamText/90 font-medium italic text-sm">
            {content.venue.quote}
          </div>

          {/* Kolkata Vibes Card */}
          <div className="p-4 rounded-xl bg-[#120205] border border-white/10 shadow-sticker">
            <div className="text-xs font-mono text-[#E11D48] font-bold mb-2 uppercase tracking-wider">
              ✦ KOLKATA EXPERIENCE INCLUDED
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: "🚕", label: "Yellow Taxi Rides" },
                { icon: "☕", label: "Kulhad Chai Station" },
                { icon: "🥟", label: "Midnight Shingaras" },
                { icon: "🎵", label: "Rabindra Sangeet Vibes" },
                { icon: "🌉", label: "Howrah Bridge Spirit" },
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

        {/* Dynamic & Immersive Map Container */}
        <div className="lg:col-span-7 relative">
          <div className="rounded-2xl border-4 border-black overflow-hidden shadow-sticker-lg bg-[#070B1A] relative h-[420px] sm:h-[460px] flex flex-col justify-between">
            
            {/* Top Interactive Controls Bar */}
            <div className="relative z-20 flex items-center justify-between p-3.5 bg-[#0B0204]/90 backdrop-blur-md border-b-2 border-black">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] animate-ping"></span>
                <span className="font-mono text-xs text-white font-extrabold tracking-wider">
                  RADAR: AIC TECHNO (OFFBEAT CCU)
                </span>
              </div>

              {/* Mode Toggle Pills */}
              <div className="flex items-center gap-1.5 bg-black/60 p-1 rounded-full border border-white/20">
                <button
                  type="button"
                  onClick={() => setMapMode('satellite')}
                  className={`px-3 py-1 rounded-full font-mono text-[10px] font-extrabold uppercase transition-all ${
                    mapMode === 'satellite'
                      ? 'bg-[#E11D48] text-white shadow-[2px_2px_0px_#000]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  🛰️ SATELLITE
                </button>
                <button
                  type="button"
                  onClick={() => setMapMode('cyber')}
                  className={`px-3 py-1 rounded-full font-mono text-[10px] font-extrabold uppercase transition-all ${
                    mapMode === 'cyber'
                      ? 'bg-[#FFC800] text-black shadow-[2px_2px_0px_#000]'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  🗺️ CYBER HUD
                </button>
              </div>
            </div>

            {/* MAP VIEW CONTAINER */}
            <div className="relative w-full h-full overflow-hidden">
              
              {mapMode === 'satellite' ? (
                /* LIVE INTERACTIVE SATELLITE / TERRAIN VIEW WITH ANIMATED RADAR SCANNER */
                <div className="relative w-full h-full">
                  <iframe
                    title="AIC Techno Offbeat CCU Satellite Location"
                    className="w-full h-full border-0 filter contrast-125 saturate-110"
                    src="https://maps.google.com/maps?q=Offbeat%20CCU%2C%2036%20F%2C%20Topsia%20Rd%2C%20Kolkata%2C%20700039&t=k&z=17&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                  />

                  {/* High-Tech Tactical HUD Overlay on Satellite View */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Corner Crosshairs */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#E11D48]"></div>
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#E11D48]"></div>
                    <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#E11D48]"></div>
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#E11D48]"></div>

                    {/* Scanning Line Sweep Effect */}
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#E11D48] to-transparent animate-pulse opacity-75"></div>

                    {/* Animated Target Reticle Pinpoint */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      {/* Pulse concentric rings */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-[#E11D48] animate-ping opacity-60"></div>
                        <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-[#FFC800] animate-spin"></div>
                        <div className="absolute w-4 h-4 rounded-full bg-[#E11D48] shadow-[0_0_20px_#E11D48] border-2 border-white"></div>
                      </div>

                      {/* Floating Target Identification Tag */}
                      <div className="mt-2 px-3 py-1 bg-[#120205] border-2 border-black rounded-lg shadow-sticker flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping"></span>
                        <span className="font-bebas text-xs text-white tracking-wider">
                          TARGET: AIC TECHNO (OFFBEAT CCU)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* CYBER HUD VECTOR RADAR VIEW */
                <div className="relative w-full h-full bg-[#0B0204] flex items-center justify-center p-4">
                  <svg viewBox="0 0 600 360" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Concentric Sonar Radar Circles */}
                    <circle cx="340" cy="180" r="150" stroke="#E11D48" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                    <circle cx="340" cy="180" r="100" stroke="#FFC800" strokeWidth="1" strokeDasharray="6 6" opacity="0.5" />
                    <circle cx="340" cy="180" r="50" stroke="#19D3F3" strokeWidth="1.5" opacity="0.6" />

                    {/* Radar Sweep Arc */}
                    <path d="M340 180 L440 80 A140 140 0 0 0 340 40 Z" fill="#E11D48" fillOpacity="0.15" />

                    {/* Grid Lines */}
                    <line x1="40" y1="80" x2="560" y2="80" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>
                    <line x1="40" y1="160" x2="560" y2="160" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>
                    <line x1="40" y1="240" x2="560" y2="240" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>

                    <line x1="120" y1="20" x2="120" y2="340" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>
                    <line x1="240" y1="20" x2="240" y2="340" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>
                    <line x1="360" y1="20" x2="360" y2="340" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>
                    <line x1="480" y1="20" x2="480" y2="340" stroke="#2E070F" strokeWidth="1.5" strokeDasharray="4 4"/>

                    {/* Major Road Arteries */}
                    {/* EM Bypass */}
                    <path d="M60 30 Q190 160 170 330" stroke="#374151" strokeWidth="16" strokeLinecap="round" />
                    <path d="M60 30 Q190 160 170 330" stroke="#FFC800" strokeWidth="2.5" strokeDasharray="6 6" />
                    <text x="80" y="90" fill="#FFF9F2" opacity="0.8" fontSize="10" fontFamily="monospace" fontWeight="bold">EM BYPASS</text>

                    {/* Maa Flyover Axis */}
                    <path d="M120 290 Q280 250 540 180" stroke="#374151" strokeWidth="14" strokeLinecap="round" />
                    <text x="210" y="295" fill="#FFF9F2" opacity="0.8" fontSize="10" fontFamily="monospace" fontWeight="bold">MAA FLYOVER</text>

                    {/* Topsia Road Connection */}
                    <path d="M220 100 L440 230" stroke="#E11D48" strokeWidth="8" strokeLinecap="round" opacity="0.7"/>
                    <text x="260" y="130" fill="#19D3F3" fontSize="10" fontFamily="monospace" fontWeight="bold">TOPSIA ROAD</text>

                    {/* Offbeat CCU Compound */}
                    <rect x="285" y="150" width="135" height="75" rx="12" fill="#E11D48" fillOpacity="0.25" stroke="#E11D48" strokeWidth="3" />
                    <text x="298" y="178" fill="#FFFFFF" fontSize="12" fontWeight="bold" fontFamily="monospace">OFFBEAT CCU</text>
                    <text x="298" y="196" fill="#FFC800" fontSize="9" fontFamily="monospace">36F TOPSIA ROAD</text>
                    <text x="298" y="212" fill="#19D3F3" fontSize="8" fontFamily="monospace">INCUBATION ARENA</text>

                    {/* Nearby Landmarks */}
                    {/* Science City */}
                    <circle cx="210" cy="240" r="16" fill="#1C0509" stroke="#19D3F3" strokeWidth="2.5"/>
                    <text x="175" y="270" fill="#19D3F3" fontSize="9" fontFamily="monospace" fontWeight="bold">SCIENCE CITY</text>

                    {/* Park Circus */}
                    <text x="360" y="325" fill="#9B5CFF" fontSize="9" fontFamily="monospace">PARK CIRCUS 2km →</text>
                    {/* Howrah Bridge */}
                    <text x="50" y="325" fill="#FFC800" fontSize="9" fontFamily="monospace">← HOWRAH BRIDGE 7km</text>

                    {/* Animated Ambassador Taxi on Bypass */}
                    <rect x="156" y="210" width="18" height="10" rx="3" fill="#FFC800" stroke="#000000" strokeWidth="1.5" />
                  </svg>

                  {/* Mascot Pin Target */}
                  <div className="absolute top-[48%] left-[58%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                    <div className="px-3 py-1 bg-[#FFC800] border-2 border-black rounded-full font-display text-[11px] text-black shadow-sticker mb-1 font-bold animate-bounce">
                      📍 AIC TECHNO HQ
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#E11D48] border-2 border-white shadow-[0_0_25px_#E11D48] flex items-center justify-center animate-pulse">
                      <span className="w-3 h-3 rounded-full bg-white"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom HUD Telemetry Strip */}
            <div className="relative z-20 flex items-center justify-between px-4 py-2 bg-[#0B0204]/90 backdrop-blur-md border-t-2 border-black font-mono text-[11px]">
              <div className="flex items-center gap-2 text-[#FFC800]">
                <span>🛰️ GPS: 22.5415° N, 88.3888° E</span>
                <span className="hidden sm:inline text-white/50">|</span>
                <span className="hidden sm:inline text-white/80">TOPSIA · EM BYPASS</span>
              </div>
              <a
                href="https://maps.google.com/?q=Offbeat+CCU+36F+Topsia+Road+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#E11D48] hover:text-white font-extrabold tracking-wider transition-colors"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
