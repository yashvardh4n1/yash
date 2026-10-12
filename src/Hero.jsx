import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle Japanese Minimalist Background Geometry */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center select-none overflow-hidden">
        {/* Subtle decorative kanji watermark */}
        <span className="font-jp text-[14rem] md:text-[22rem] font-bold text-stone-200/30 -z-10 tracking-widest translate-y-12">
          桜
        </span>

        {/* Minimal grid accents */}
        <div className="absolute top-1/4 left-8 text-stone-300 font-mono text-[10px] hidden md:block">
          + 26°55'N 75°49'E
        </div>
        <div className="absolute top-1/4 right-8 text-stone-300 font-mono text-[10px] hidden md:block">
          01 // ROOT
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-20 flex flex-col items-center">
        {/* Top Student & Location Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-stone-200/80 shadow-xs mb-8 backdrop-blur-xs"
        >
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
          <span className="font-mono text-xs text-stone-600 tracking-wider">
            B.Tech 1st Year <span className="text-stone-300">•</span> JECRC University
          </span>
          <span className="hanko-seal ml-1">印</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-stone-950 tracking-tight leading-[1.05] mb-6"
        >
          YASH VARDHAN
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl md:text-2xl font-mono text-pink-700 tracking-wide mb-6 font-medium"
        >
          B.Tech Student <span className="text-stone-400 font-light mx-2">|</span> AI & Technology Enthusiast
        </motion.p>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Building at the intersection of technology, artificial intelligence and the web.
          Passionate about crafting clean interfaces, exploring intelligent systems, and learning modern architectures.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-900 text-white rounded-xl text-xs font-mono tracking-widest hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-pink-200/50 cursor-pointer"
          >
            <span>VIEW PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <div className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-stone-800 border border-stone-200 hover:border-pink-300 hover:bg-pink-50/50 rounded-xl text-xs font-mono tracking-widest transition-all duration-300 cursor-pointer shadow-xs"
          >
            <span>CONTACT ME</span>
          </button>
        </motion.div>

        {/* Location & Quick Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex items-center gap-6 text-xs text-stone-400 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-pink-400" />
            Jaipur, India
          </span>
          <span className="text-stone-300">/</span>
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-stone-400" />
            React • AI • Web Dev
          </span>
        </motion.div>
      </div>

      {/* Subtle Scroll to Explore Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-stone-400 uppercase">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="text-stone-400 hover:text-pink-600 transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-pink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
