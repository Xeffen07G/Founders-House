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
          <div className="rounded-2xl border-4 border-black overflow-hidden shadow-sticker-lg bg-[#070B1A] relative h-[420px] sm:h-[480px] flex flex-col justify-between group">
            
            {/* Top Interactive Controls Bar */}
            <div className="relative z-30 flex items-center justify-between p-3.5 bg-[#0B0204]/90 backdrop-blur-md border-b-2 border-black">
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
                /* ANIMATED SATELLITE RADAR VIEW (Matching convergence1.tech style with immersive satellite imagery) */
                <a
                  href="https://maps.google.com/?q=Offbeat+CCU+36F+Topsia+Road+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-full overflow-hidden cursor-pointer"
                >
                  {/* High-res Satellite Texture with Smooth Drift Animation */}
                  <div
                    className="absolute -inset-6 bg-cover bg-center animate-map-drift transition-transform duration-700 group-hover:scale-110 filter contrast-125 saturate-125 brightness-90"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')`
                    }}
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120205] via-[#120205]/40 to-[#120205]/70 group-hover:via-[#120205]/20 transition-colors duration-500" />

                  {/* Satellite Grid Scanlines Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-25"
                    style={{
                      backgroundImage: `linear-gradient(rgba(225, 29, 72, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(225, 29, 72, 0.2) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Glowing Laser Scanline Sweeping Vertically */}
                  <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-[#E11D48]/40 to-transparent pointer-events-none animate-map-scan" />

                  {/* Animated Radar Sweep Overlay */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <svg className="w-96 h-96 opacity-60 animate-radar-sweep" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E11D48" stopOpacity="0.7"/>
                          <stop offset="100%" stopColor="#E11D48" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M100 100 L100 0 A100 100 0 0 1 180 40 Z" fill="url(#sweepGrad)"/>
                    </svg>
                  </div>

                  {/* High-Tech Tactical HUD Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Corner Crosshairs */}
                    <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[#E11D48]"></div>
                    <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[#E11D48]"></div>
                    <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-[#E11D48]"></div>
                    <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-[#E11D48]"></div>

                    {/* Compass North Indicator */}
                    <div className="absolute top-4 right-14 px-2 py-0.5 rounded bg-black/80 border border-white/20 font-mono text-[9px] text-[#FFC800] font-bold">
                      ▲ N · HDG 018°
                    </div>

                    {/* Central Animated Target Pinpoint (Matching Convergence 1.0 bounce & sonar pulse) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      
                      {/* Concentric Sonar Rings */}
                      <div className="relative flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full border-2 border-[#E11D48] animate-sonar-ping"></div>
                        <div className="absolute w-16 h-16 rounded-full border border-dashed border-[#FFC800] animate-spin"></div>
                        <div className="absolute w-8 h-8 rounded-full bg-[#E11D48]/30 border border-[#E11D48] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#FFC800] animate-pulse"></div>
                        </div>
                      </div>

                      {/* Bouncing Map Pointer Icon (Exact Convergence 1.0 Style) */}
                      <div className="animate-bounce flex flex-col items-center -mt-6">
                        <svg
                          className="w-10 h-10 sm:w-12 sm:h-12 text-[#E11D48] drop-shadow-[0_0_12px_rgba(225,29,72,0.9)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        {/* Floating Identification Pill */}
                        <div className="mt-1 px-3 py-1 bg-[#120205] border-2 border-black rounded-full shadow-[3px_3px_0px_#000] flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping"></span>
                          <span className="font-bebas text-xs sm:text-sm font-bold tracking-wider text-white whitespace-nowrap">
                            AIC TECHNO (OFFBEAT CCU HQ)
                          </span>
                        </div>

                        <span className="font-mono text-[10px] text-[#FFC800] font-bold tracking-widest mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] uppercase">
                          36F TOPSIA ROAD · SECTOR EM BYPASS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Click to Navigate Callout Banner */}
                  <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-[#E11D48] text-white font-mono text-[10px] font-bold tracking-wider shadow-[2px_2px_0px_#000] flex items-center gap-1.5 animate-pulse">
                    <span>⚡ CLICK SATELLITE TO LAUNCH GPS ROUTE</span>
                    <span>↗</span>
                  </div>
                </a>
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
