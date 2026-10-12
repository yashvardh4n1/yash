import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './IntroAnimation';
import CherryBlossoms from './CherryBlossoms';
import Navbar from './/Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  // Check if user has already experienced the Bankai intro during this browsing session
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hasSeenBankaiIntro') !== 'true';
    }
    return true;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenBankaiIntro', 'true');
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setShowIntro(true);
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-stone-900 overflow-x-hidden selection:bg-pink-100 selection:text-pink-900 font-sans">
      {/* Cinematic Bankai Intro Animation */}
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main Portfolio (ambient petals active after intro) */}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        {/* Subtle Ambient Cherry Blossoms in Background */}
        {!showIntro && (
          <CherryBlossoms mode="ambient" className="z-10 pointer-events-none" />
        )}

        {/* Global Navigation */}
        <Navbar onReplayIntro={handleReplayIntro} />

        {/* Main Content Sections */}
        <main className="relative z-20">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer onReplayIntro={handleReplayIntro} />
      </div>
    </div>
  );
}
