import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer({ onReplayIntro }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white pt-16 pb-12 px-6 overflow-hidden">
      {/* Subtle Sakura-pink divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-display font-bold text-base text-stone-900 tracking-wider">
              YASH VARDHAN
            </span>
            <span className="hanko-seal text-[9px]">印</span>
          </div>
          <p className="text-xs text-stone-500 font-mono">
            B.Tech Student <span className="text-pink-400">•</span> AI & Technology Enthusiast
          </p>
        </div>

        {/* Center: Japanese phrase */}
        <div className="text-center font-jp text-xs text-stone-400 tracking-[0.3em]">
          日々精進 <span className="text-pink-300 text-[10px]">🌸</span> 一期一会
        </div>

        {/* Controls: Replay Bankai Intro & Back to Top */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayIntro}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-600 hover:text-pink-600 bg-stone-50 hover:bg-pink-50 border border-stone-200/70 hover:border-pink-300 rounded-full transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Replay Bankai</span>
          </button>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-stone-400 gap-2">
        <span>© 2026 Yash Vardhan. All rights reserved.</span>
        <span>Designed with Japanese Minimalism × Senbonzakura</span>
      </div>
    </footer>
  );
}
