import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';
import { FeludaArmchairCartoon } from './FeludaArmchairCartoon';

export const About = () => {
  return (
    <section id="about" className="py-28 sm:py-36 px-4 max-w-7xl mx-auto">
      <SectionHeader
        pill="ABOUT THE EVENT"
        line1="MORE THAN A HACKATHON."
        line2="KOLKATA LEVEL HUSTLE."
        accentColor="text-[#E11D48]"
        description="A 72 hour residential sprint designed for serious builders. 10 curated teams live together at AIC Techno (Offbeat CCU), building real software with 24/7 mentorship and pitching to active venture investors."
      />

      {/* Main 2-Column Showcase: Origin Story (Left) + Seated Feluda Mascot in Armchair (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
        
        {/* Left Column: Mission Narrative & Core Stats */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Narrative Comic Card */}
          <div className="comic-card p-6 sm:p-8 bg-[#1C0509] border-2 border-black shadow-[6px_6px_0px_#000]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">☕</span>
              <span className="font-bebas text-sm sm:text-base tracking-[0.2em] text-[#FFC800] uppercase">
                THE 72 HOUR RESIDENTIAL PHILOSOPHY
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bebas text-white mb-4 tracking-wide leading-tight">
              WHERE INTELLECT MEETS RELENTLESS EXECUTION.
            </h3>

            <p className="font-poppins text-sm sm:text-base text-white/80 leading-relaxed mb-4">
              Kolkata has always been the intellectual capital, home to Satyajit Ray's timeless detectives, revolutionary writers, and world class polymaths. <strong className="text-white">Founders' House</strong> channels that deep analytical DNA into high velocity technology startups.
            </p>

            <p className="font-poppins text-xs sm:text-sm text-white/70 leading-relaxed">
              Organized by <strong className="text-[#FFC800]">Hult Prize at TIU</strong> and hosted at the state of the art incubation hub <strong className="text-[#E11D48]">AIC Techno (Offbeat CCU)</strong>, this is not a sleep deprived gimmick. It is an incubator grade gauntlet for founders who want to build companies that last.
            </p>
          </div>

          {/* 4 Convergence-Style Stat Badges with Generous Gaps */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "72H", label: "INTENSE RESIDENTIAL", color: "text-[#FFC800]", icon: "⚡" },
              { num: "10", label: "CURATED TEAMS", color: "text-[#E11D48]", icon: "🏆" },
              { num: "03", label: "CASE TRACKS", color: "text-[#19D3F3]", icon: "🎯" },
              { num: "₹0", label: "FREE ENTRY & STAY", color: "text-[#7CFF3A]", icon: "🎫" },
            ].map((stat, i) => (
              <div
                key={i}
                className="comic-card p-5 text-center bg-[#1C0509] hover:-translate-y-1 transition-transform"
              >
                <div className="text-2xl mb-1.5">{stat.icon}</div>
                <div className={`text-3xl sm:text-5xl font-bebas ${stat.color} leading-none mb-1.5`}>
                  {stat.num}
                </div>
                <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white/70 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Cartoon Illustration of Feluda in Armchair (Convergence Style) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <FeludaArmchairCartoon
            quote="Bhabte shuru koro. Magojastro holo shobcheye boro weapon."
            className="w-full"
          />
        </div>

      </div>

      {/* Host Organizers Grid (AIC Techno + Hult Prize at TIU) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {content.about.hosts.map((host, idx) => (
          <div
            key={idx}
            className="comic-card p-7 sm:p-8 bg-[#1C0509] hover:border-[#E11D48] transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/60 text-[#FFC800] border border-[#FFC800]/30 uppercase tracking-widest">
                {host.role}
              </span>
              <span className="text-xl">🤝</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bebas text-white mb-3 tracking-wide">
              {host.name}
            </h3>
            
            <p className="text-sm font-poppins text-white/75 leading-relaxed">
              {host.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Kolkata Cultural Edge Strip */}
      <div className="comic-card p-6 sm:p-8 bg-[#1C0509] border-l-4 border-l-[#E11D48]">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🏛️</span>
          <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wider">
            THE KOLKATA VANTAGE POINT
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "🌉", label: "Howrah Bridge resilience", desc: "Cantilever steel engineering that never bows" },
            { icon: "🚊", label: "Heritage tram patience", desc: "Zero emission steady momentum through traffic" },
            { icon: "☕", label: "Adda debate culture", desc: "Rigorous stress testing of ideas over chai" },
            { icon: "🎬", label: "Satyajit Ray aesthetics", desc: "Clarity, proportion, and purposeful storytelling" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#120205] border border-black/80">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <div className="font-bebas text-sm sm:text-base text-[#FFC800] mb-1">
                {item.label}
              </div>
              <p className="font-poppins text-[11px] text-white/60 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
