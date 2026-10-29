import React from 'react';
import { content } from '../content';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0D0103] border-t-4 border-black pt-16 pb-12 overflow-hidden">
      
      {/* Footer Columns */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1: Logo & Tagline */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-9 h-9 rounded-full bg-[#E11D48] border-2 border-black flex items-center justify-center font-bebas text-white text-base font-bold shadow-[2px_2px_0px_#000]">
              FH
            </span>
            <span className="font-bebas text-xl tracking-wider text-[#FFFFFF]">
              FOUNDERS' <span className="text-[#E11D48]">HOUSE</span>
            </span>
          </div>

          <p className="text-base font-bebas text-white mb-2">
            {content.event.tagline}
          </p>
          <p className="text-sm font-mono text-white/70 max-w-sm mb-3">
            {content.event.subline} · Kolkata, Eastern India.
          </p>

          {/* Kolkata pride line */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#E11D48] font-bold">
            <span>🏛️</span>
            <span>City of Joy · The Cultural Capital</span>
          </div>
        </div>

        {/* Col 2: Organizers & Venue */}
        <div>
          <h5 className="font-bebas text-sm text-[#FFC800] uppercase tracking-widest mb-3">
            COLLABORATION
          </h5>
          <ul className="flex flex-col gap-2 text-xs font-mono text-white/80">
            <li>✦ Organized by Hult Prize at TIU</li>
            <li>✦ Venue: AIC Techno (Offbeat CCU)</li>
            <li>✦ 36F, Topsia Road, Kolkata 700039</li>
            <li>✦ 18 to 20 December 2026</li>
          </ul>

          <h5 className="font-bebas text-sm text-[#7CFF3A] uppercase tracking-widest mb-3 mt-6">
            KOLKATA LANDMARKS
          </h5>
          <ul className="flex flex-col gap-2 text-xs font-mono text-white/60">
            <li>🌉 Near Howrah Bridge</li>
            <li>🚊 Tram Route accessible</li>
            <li>☕ Indian Coffee House tradition</li>
            <li>🎬 Satyajit Ray's city</li>
          </ul>
        </div>

        {/* Col 3: Contact & Socials */}
        <div>
          <h5 className="font-bebas text-sm text-[#E11D48] uppercase tracking-widest mb-3">
            CONNECT
          </h5>
          <ul className="flex flex-col gap-2.5 text-xs font-mono">
            <li>
              <a
                href={`mailto:${content.event.email}`}
                className="text-white hover:text-[#FFC800] transition-colors flex items-center gap-1.5"
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
                className="text-white hover:text-[#E11D48] transition-colors flex items-center gap-1.5"
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
                className="text-white hover:text-[#19D3F3] transition-colors flex items-center gap-1.5"
              >
                <span>💼</span>
                <span>Hult Prize TIU</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/50 gap-4">
        <span>
          © 2026 Founders' House · Organized by Hult Prize at TIU & AIC Techno.
        </span>
        <span className="text-[#FFC800] font-bold">
          BUILD WITH COURAGE · MAGOJASTRO 72H
        </span>
      </div>
    </footer>
  );
};
