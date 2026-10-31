import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundSkyline } from './components/BackgroundSkyline';
import { StickyMobilePill } from './components/StickyMobilePill';

// Direct imports for instant paint, immediate functionality, and zero-delay navigation
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

// Code-split dedicated Scoreboard page so it doesn't block the main landing page
const ScoreboardPage = lazy(() =>
  import('./pages/ScoreboardPage').then((m) => ({ default: m.ScoreboardPage }))
);

export default function App() {
  const [route, setRoute] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    return (hash === '#/scoreboard' || hash === '#/score' || hash === '#scoreboard')
      ? 'scoreboard'
      : 'home';
  });

  // Always reset scroll to top on reload when on the landing page, and prevent browser restoring scroll to middle sections
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const isScoreboard = (hash === '#/scoreboard' || hash === '#/score' || hash === '#scoreboard');

    if (!isScoreboard) {
      // Clear any anchor hash so reload always opens cleanly at the top (Home)
      if (hash && hash !== '' && hash !== '#') {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  // Handle hash navigation between routes (landing page vs scoreboard)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/scoreboard' || hash === '#/score' || hash === '#scoreboard') {
        setRoute('scoreboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setRoute('home');
        if (hash === '' || hash === '#' || hash === '#hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBackToBase = () => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (targetRoute) => {
    setRoute(targetRoute);
  };

  return (
    <div className="min-h-screen bg-[#120205] text-[#FFF9F2] font-body selection:bg-[#E11D48] selection:text-white relative">
      {/* Ambient Cartoon Howrah Bridge & Drifting Clouds Background */}
      <BackgroundSkyline />

      {/* Floating Pill Sticky Navbar */}
      <Navbar currentRoute={route} onNavigate={handleNavigate} />

      {/* Floating Sticky Mobile Registration & Google Calendar Pill */}
      <StickyMobilePill />

      {route === 'scoreboard' ? (
        /* DEDICATED SCOREBOARD PAGE (Code-split, loaded on demand) */
        <Suspense fallback={<div className="min-h-screen bg-[#120205]" />}>
          <ScoreboardPage onBack={handleBackToBase} />
        </Suspense>
      ) : (
        /* INSTANT HIGH-PERFORMANCE LANDING PAGE (Immediately functional on load & reload) */
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
    </div>
  );
}
