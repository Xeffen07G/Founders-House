import React from 'react';
import { content } from '../content';

export const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0A] border-t-4 border-black pt-16 pb-12 overflow-hidden">
      
      {/* Footer Columns */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/10">
        
        {/* Col 1: Logo & Tagline */}
        <div className="max-w-md">
          <div className="mb-4">
            <img
              src="/founders_house_logo.webp"
              alt="Founders' House Kolkata Edition 1.0"
              width="833"
              height="833"
              className="h-16 w-auto object-contain"
              loading="lazy"
            />
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

        {/* Col 2: Contact & Socials */}
        <div>
          <h5 className="font-bebas text-sm text-[#E11D48] uppercase tracking-widest mb-3">
            CONNECT
          </h5>
          <ul className="flex flex-col gap-2.5 text-xs font-mono">
            <li>
              <a
                href="https://mail.google.com/mail/?extsrc=mailto&url=mailto:official.hultprize.tiu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white hover:text-[#FFC800] transition-colors flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0 fill-current text-white/70 group-hover:text-[#FFC800] transition-colors" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="truncate">{content.event.email}</span>
              </a>
            </li>
            <li>
              <a
                href={content.event.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white hover:text-[#E11D48] transition-colors flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0 fill-current text-white/70 group-hover:text-[#E11D48] transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@hustlers_tiu</span>
              </a>
            </li>
            <li>
              <a
                href={content.event.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-white hover:text-[#0077B5] transition-colors flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0 fill-current text-white/70 group-hover:text-[#0077B5] transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
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
      </div>
    </footer>
  );
};
