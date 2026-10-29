import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundSkyline } from './components/BackgroundSkyline';

// Code-split below-the-fold sections to crush Total Blocking Time (TBT) and eliminate DOM bloat on initial load
const Venue = lazy(() => import('./components/Venue').then(m => ({ default: m.Venue })));
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Tracks = lazy(() => import('./components/Tracks').then(m => ({ default: m.Tracks })));
const Route = lazy(() => import('./components/Route').then(m => ({ default: m.Route })));
const Awards = lazy(() => import('./components/Awards').then(m => ({ default: m.Awards })));
const Squad = lazy(() => import('./components/Squad').then(m => ({ default: m.Squad })));
const Sponsors = lazy(() => import('./components/Sponsors').then(m => ({ default: m.Sponsors })));
const Archives = lazy(() => import('./components/Archives').then(m => ({ default: m.Archives })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const SoundToggle = lazy(() => import('./components/SoundToggle').then(m => ({ default: m.SoundToggle })));

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
          {/* 1. Hero Section (Above the fold - instant paint, zero blocking) */}
          <Hero />

          {/* Below-the-fold sections: Streamed lazily so initial main thread TBT is near 0ms */}
          <Suspense fallback={<div className="min-h-[400px]" />}>
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
          </Suspense>
        </main>
      )}

      {/* Footer & Floating Controls (Loaded lazily) */}
      <Suspense fallback={null}>
        <Footer />
        <SoundToggle />
      </Suspense>
    </div>
  );
}
