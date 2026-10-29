import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Venue } from './components/Venue';
import { About } from './components/About';
import { Tracks } from './components/Tracks';
import { Route } from './components/Route';
import { Awards } from './components/Awards';
import { Squad } from './components/Squad';
import { Sponsors } from './components/Sponsors';
import { Archives } from './components/Archives';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SoundToggle } from './components/SoundToggle';
import { BackgroundSkyline } from './components/BackgroundSkyline';

// Code-split dedicated Scoreboard page so it doesn't block the main landing page
const ScoreboardPage = lazy(() =>
  import('./pages/ScoreboardPage').then((m) => ({ default: m.ScoreboardPage }))
);

export default function App() {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash;
    return (hash === '#/scoreboard' || hash === '#/score' || hash === '#scoreboard')
      ? 'scoreboard'
      : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/scoreboard' || hash === '#/score' || hash === '#scoreboard') {
        setRoute('scoreboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToBase = () => {
    window.location.hash = '#hero';
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#120205] text-[#FFF9F2] font-body selection:bg-[#E11D48] selection:text-white relative">
      {/* Ambient Cartoon Howrah Bridge & Drifting Clouds Background */}
      <BackgroundSkyline />

      {/* Floating Pill Sticky Navbar */}
      <Navbar currentRoute={route} onNavigate={(r) => setRoute(r)} />

      {route === 'scoreboard' ? (
        /* DEDICATED SCOREBOARD PAGE (Code-split, loaded on demand) */
        <Suspense fallback={<div className="min-h-screen bg-[#120205]" />}>
          <ScoreboardPage onBack={handleBackToBase} />
        </Suspense>
      ) : (
        /* SPACIOUS LANDING PAGE (Free of heavy scoreboard clutter) */
        <main className="relative z-10 space-y-12 sm:space-y-20">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. The Venue (The Adda at Offbeat CCU) */}
          <Venue />

          {/* 3. About (The Origin Story with Seated Feluda Mascot) */}
          <About />

          {/* 4. Tracks (Curated Problem Tracks) */}
          <Tracks />

          {/* 5. The Route (Kolkata Tram Roadmap) */}
          <Route />

          {/* 6. Awards (Awesome Prizes & Grants) */}
          <Awards />

          {/* 7. The Squad (Mentors, Jury, Organizers) */}
          <Squad />

          {/* 8. Sponsors (Backed By Industry Leaders) */}
          <Sponsors />

          {/* 9. Archives (The Kolkata Energy) */}
          <Archives />

          {/* 10. FAQ (Common Queries) */}
          <FAQ />
        </main>
      )}

      {/* Footer */}
      <Footer />

      {/* Floating Yellow Sound Toggle (Bottom-Right) */}
      <SoundToggle />
    </div>
  );
}
