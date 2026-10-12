import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar({ onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section detection
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-hidden"
          aria-label="Yash Vardhan Home"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-stone-900 text-white font-display font-bold text-sm tracking-wider group-hover:bg-stone-800 transition-colors">
            <span>YV</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-pink-400 border-2 border-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-semibold tracking-wider text-stone-900 group-hover:text-pink-600 transition-colors">
              YASH VARDHAN
            </span>
            <span className="text-[10px] tracking-widest text-stone-400 font-mono -mt-0.5">
              PORTFOLIO 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-mono tracking-widest transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-stone-950 font-semibold'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-pink-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Replay Bankai Intro */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onReplayIntro}
            title="Replay Bankai Opening Animation"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-600 hover:text-pink-700 bg-stone-100/80 hover:bg-pink-50 border border-stone-200/80 hover:border-pink-300 rounded-full transition-all duration-200 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>BANKAI INTRO</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onReplayIntro}
            aria-label="Replay Bankai Animation"
            className="p-2 text-stone-600 hover:text-pink-600 hover:bg-stone-100 rounded-lg transition-colors"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 text-stone-800 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[60px] bg-[#faf9f6]/95 backdrop-blur-xl border-b border-stone-200/80 p-6 shadow-xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-mono tracking-widest ${
                      isActive
                        ? 'bg-pink-50 text-stone-900 font-semibold border-l-2 border-pink-400'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-pink-500 text-xs">●</span>}
                  </motion.a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-stone-200/60 flex items-center justify-between">
                <span className="text-xs font-mono text-stone-500">Replay Bankai Opening</span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-pink-700 bg-pink-50 border border-pink-200 rounded-full"
                >
                  <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                  <span>PLAY</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
