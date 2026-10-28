import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Venue } from './components/Venue';
import { About } from './components/About';
import { Tracks } from './components/Tracks';
import { Route } from './components/Route';
import { Scoreboard } from './components/Scoreboard';
import { Awards } from './components/Awards';
import { Squad } from './components/Squad';
import { Sponsors } from './components/Sponsors';
import { Archives } from './components/Archives';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SoundToggle } from './components/SoundToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-[#120205] text-[#FFF9F2] font-body selection:bg-[#E11D48] selection:text-white">
      {/* Floating Pill Sticky Navbar */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. The Venue (The Adda) */}
        <Venue />

        {/* 3. About (The Origin Story) */}
        <About />

        {/* 4. Tracks (Mission Tracks) */}
        <Tracks />

        {/* 5. The Route (Roadmap / Tram Line) */}
        <Route />

        {/* 6. Scoreboard (Founder Points / Stock Exchange) */}
        <Scoreboard />

        {/* 7. Awards (Awesome Prizes / Josh Awards) */}
        <Awards />

        {/* 8. The Squad (Mentors, Jury, Organizers) */}
        <Squad />

        {/* 9. Sponsors (Powered By Great Teams) */}
        <Sponsors />

        {/* 10. Archives (The Energy) */}
        <Archives />

        {/* 11. FAQ (Ask The Adda) */}
        <FAQ />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Yellow Sound Toggle (Bottom-Right) */}
      <SoundToggle />
    </div>
  );
}
