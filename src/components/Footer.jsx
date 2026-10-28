import React from 'react';
import { content } from '../content';
import { mascots } from '../assets/characters/mascots';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0D0103] border-t-4 border-black pt-20 pb-12 overflow-hidden">
      
      {/* Wide Illustration of Kolkata Legend Squad gathered on the Hooghly */}
      <div className="max-w-6xl mx-auto px-4 mb-16 relative">
        <div className="relative h-44 sm:h-56 border-b-2 border-neonCyan/40 flex items-end justify-around pb-2">
          
          {/* Bridge Silhouette in Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <svg viewBox="0 0 800 160" className="w-full h-full fill-none stroke-neonCyan" strokeWidth="2">
              <path d="M50 140 L200 40 L260 140 H540 L600 40 L750 140" />
              <path d="M50 140 Q400 70 750 140" stroke="#FFE600" />
              {/* Victoria Memorial dome */}
              <path d="M360 145 Q400 110 440 145" stroke="#9B5CFF" strokeWidth="1.5" opacity="0.3" />
              <line x1="400" y1="110" x2="400" y2="98" stroke="#9B5CFF" strokeWidth="1" opacity="0.3"/>
            </svg>
          </div>

          {/* Kolkata Legends: Byomkesh, Feluda, Satyajit Ray, Topshe, Jatayu, Shonku, Tenida, Chintu, Tram Didi */}
          <div
            className="mascot-bob"
            dangerouslySetInnerHTML={{ __html: mascots.byomkesh(80) }}
            title="Byomkesh Bakshi"
          />
          <div
            className="mascot-bob"
            style={{ animationDelay: '0.5s' }}
            dangerouslySetInnerHTML={{ __html: mascots.feluda(85) }}
            title="Feluda"
          />
          {mascots.satyajitRay && (
            <div
              className="hidden sm:block mascot-bob"
              style={{ animationDelay: '0.7s' }}
              dangerouslySetInnerHTML={{ __html: mascots.satyajitRay(80) }}
              title="Satyajit Ray"
            />
          )}
          <div
            className="hidden sm:block mascot-bob"
            style={{ animationDelay: '1.0s' }}
            dangerouslySetInnerHTML={{ __html: mascots.topshe(70) }}
            title="Topshe"
          />
          <div
            className="hidden sm:block mascot-bob"
            style={{ animationDelay: '0.4s' }}
            dangerouslySetInnerHTML={{ __html: mascots.jatayu(75) }}
            title="Jatayu"
          />
          <div
            className="mascot-bob"
            style={{ animationDelay: '1.4s' }}
            dangerouslySetInnerHTML={{ __html: mascots.professorShonku(75) }}
            title="Professor Shonku"
          />
          <div
            className="hidden md:block mascot-bob"
            style={{ animationDelay: '0.8s' }}
            dangerouslySetInnerHTML={{ __html: mascots.tenida(75) }}
            title="Tenida"
          />
          <div
            className="mascot-bob"
            style={{ animationDelay: '1.2s' }}
            dangerouslySetInnerHTML={{ __html: mascots.chaiChintu(65) }}
            title="Chai Chintu"
          />
          <div
            className="hidden sm:block mascot-bob"
            style={{ animationDelay: '1.6s' }}
            dangerouslySetInnerHTML={{ __html: mascots.tramDidi(75) }}
            title="Tram Didi"
          />
        </div>
      </div>

      {/* Kolkata Street Scene Separator */}
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <div className="flex items-center justify-center gap-6 text-xs font-mono text-[#F4F0FF]/40">
          <span>🚊 TRAM LINE</span>
          <span className="w-32 h-px bg-gradient-to-r from-transparent via-[#19D3F3]/30 to-transparent"></span>
          <span>🚕 YELLOW TAXI</span>
          <span className="w-32 h-px bg-gradient-to-r from-transparent via-[#FFE600]/30 to-transparent"></span>
          <span className="hidden sm:inline">🛺 RICKSHAW</span>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1: Logo & Tagline */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-[#E11D48] border-2 border-black flex items-center justify-center font-display text-white text-sm font-extrabold shadow-sticker">
              FH
            </span>
            <span className="font-display text-lg tracking-wider text-[#FFFFFF]">
              FOUNDERS' <span className="text-[#E11D48]">HOUSE</span>
            </span>
          </div>

          <p className="text-base font-display text-creamText mb-2">
            {content.event.tagline}
          </p>
          <p className="text-sm font-mono text-creamText/70 max-w-sm mb-3">
            {content.event.subline} · Kolkata, Eastern India.
          </p>

          {/* Kolkata pride line */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#E11D48]">
            <span>🏛️</span>
            <span>City of Joy · Since 1690 · The Cultural Capital</span>
          </div>
        </div>

        {/* Col 2: Organizers & Venue */}
        <div>
          <h5 className="font-display text-xs text-neonCyan uppercase tracking-widest mb-3">
            COLLABORATION
          </h5>
          <ul className="flex flex-col gap-2 text-xs font-mono text-creamText/80">
            <li>✦ Hult Prize at TIU</li>
            <li>✦ AIC Techno India University</li>
            <li>✦ EM-4, Sector V, Salt Lake, Kolkata</li>
            <li>✦ 18–20 December 2026</li>
          </ul>

          <h5 className="font-display text-xs text-neonLime uppercase tracking-widest mb-3 mt-6">
            KOLKATA LANDMARKS
          </h5>
          <ul className="flex flex-col gap-2 text-xs font-mono text-creamText/60">
            <li>🌉 Near Howrah Bridge</li>
            <li>🚊 Tram Route accessible</li>
            <li>☕ Indian Coffee House tradition</li>
            <li>🎬 Satyajit Ray's city</li>
          </ul>
        </div>

        {/* Col 3: Contact & Socials */}
        <div>
          <h5 className="font-display text-xs text-neonPink uppercase tracking-widest mb-3">
            CONNECT
          </h5>
          <ul className="flex flex-col gap-2.5 text-xs font-mono">
            <li>
              <a
                href={`mailto:${content.event.email}`}
                className="text-creamText hover:text-neonYellow transition-colors flex items-center gap-1.5"
              >
                <span>✉</span>
                <span className="truncate">{content.event.email}</span>
              </a>
            </li>
            <li>
              <a
                href={content.event.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creamText hover:text-neonPink transition-colors flex items-center gap-1.5"
              >
                <span>📸</span>
                <span>@hustlers_tiu</span>
              </a>
            </li>
            <li>
              <a
                href={content.event.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creamText hover:text-neonCyan transition-colors flex items-center gap-1.5"
              >
                <span>💼</span>
                <span>Hult Prize TIU</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-creamText/50 gap-4">
        <span>
          © 2026 Founders' House · Organized by Hult Prize at TIU & AIC Techno.
        </span>
        <span className="text-neonYellow">
          কলকাতা · সত্যান্বেষী ও মগজাস্ত্র · BUILD WITH COURAGE
        </span>
      </div>
    </footer>
  );
};
