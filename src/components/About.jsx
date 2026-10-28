import React from 'react';
import { content } from '../content';
import { SectionHeader } from './SectionHeader';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeader
        pill="ABOUT THE EVENT"
        line1="MORE THAN A HACKATHON."
        line2="KOLKATA-LEVEL HUSTLE."
        accentColor="text-[#FFE600]"
        description="A residential sprint designed for serious builders. Over 72 hours, 10 selected teams live together at AIC Techno, building real software and pitching to active investors."
      />

      {/* Convergence Stat Cards (72H · 10 TEAMS · 3 TRACKS · ₹0 TO APPLY) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { num: "72H", label: "INTENSE SPRINT", color: "text-[#FFE600]", icon: "⚡" },
          { num: "10", label: "FINALIST TEAMS", color: "text-[#19D3F3]", icon: "🏆" },
          { num: "03", label: "MISSION TRACKS", color: "text-[#FF2E93]", icon: "🎯" },
          { num: "₹0", label: "FREE ENTRY & STAY", color: "text-[#7CFF3A]", icon: "🎫" },
        ].map((stat, i) => (
          <div
            key={i}
            className="comic-card p-6 text-center group"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className={`text-4xl sm:text-6xl font-bebas ${stat.color} leading-none mb-1`}>
              {stat.num}
            </div>
            <div className="text-xs font-mono font-bold tracking-wider text-[#F4F0FF]/70 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Host Organizers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {content.about.hosts.map((host, idx) => (
          <div
            key={idx}
            className="comic-card p-6 hover:border-[#19D3F3] transition-colors"
          >
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-black/60 text-[#19D3F3] border border-[#19D3F3]/30 uppercase tracking-widest">
              {host.role}
            </span>
            <h3 className="text-2xl font-bebas text-[#F4F0FF] mt-3 mb-2 tracking-wide">
              {host.name}
            </h3>
            <p className="text-sm font-poppins text-[#F4F0FF]/75 leading-relaxed">
              {host.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Kolkata Heritage Banner */}
      <div className="comic-card p-5 mb-6 border-l-4 border-l-[#FF2E93]">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🏛️</span>
          <span className="font-bebas text-lg text-[#FF2E93] tracking-wider">THE KOLKATA EDGE</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "🌉", label: "Howrah Bridge spirit" },
            { icon: "🚊", label: "Heritage tram culture" },
            { icon: "☕", label: "Adda & chai wisdom" },
            { icon: "🎬", label: "Satyajit Ray's legacy" },
            { icon: "📚", label: "Bengal Renaissance heritage" },
            { icon: "🔍", label: "Feluda's deductive logic" },
            { icon: "🎭", label: "Tollywood storytelling" },
            { icon: "🥟", label: "Midnight shingara energy" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#F4F0FF]/75">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Byomkesh Speech Bubble */}
      <div className="comic-speech-bubble flex items-center gap-3">
        <span className="text-2xl flex-shrink-0">📜</span>
        <div className="text-xs sm:text-sm font-poppins text-[#F4F0FF]">
          <span className="text-[#19D3F3] font-bold">BYOMKESH DEDUCTION: </span>
          "Truth in venture building is simple: do customers genuinely want what you are coding? That is what the AIC Techno sprint will reveal."
        </div>
      </div>
    </section>
  );
};
