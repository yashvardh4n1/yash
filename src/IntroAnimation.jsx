import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CherryBlossoms from './CherryBlossoms';

/**
 * Bankai Cinematic Intro Sequence
 * Distinct sequential scenes:
 * 1. Black (0 - 1.3s)
 * 2. Katana Appearance (1.3 - 2.8s)
 * 3. Bankai Activation - Drop into floor & ripples (2.8 - 4.2s)
 * 4. First Solitary Petal (4.2 - 5.2s)
 * 5. Senbonzakura Awakening - Ribbon current (5.2 - 6.6s)
 * 6. Petal Wave Climax (6.6 - 7.6s)
 * 7. BANKAI & SENBONZAKURA Title Reveal (7.6 - 9.2s) - EXCLUSIVE, NO overlap with Yash Vardhan
 * 8. Petals Part to reveal YASH VARDHAN & Portfolio (9.4 - 10.8s)
 */
export default function IntroAnimation({ onComplete }) {
  const [step, setStep] = useState(1);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(2), 1300), // Sword appears
      setTimeout(() => {
        setStep(3); // Sword descends
        setTimeout(() => setRipples([1, 2, 3]), 750); // Water ripples at surface impact
      }, 2800),
      setTimeout(() => setStep(4), 4200), // First solitary petal
      setTimeout(() => setStep(5), 5200), // Senbonzakura awakening current
      setTimeout(() => setStep(6), 6600), // Petal wave surge
      setTimeout(() => setStep(7), 7600), // BANKAI / SENBONZAKURA title only
      setTimeout(() => setStep(8), 9400), // Bankai title gone -> Petals part to reveal Yash Vardhan
      setTimeout(() => onComplete(), 10800), // Complete transition to portfolio
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    onComplete();
  };

  // Determine Cherry Blossom phase based on current step
  let petalPhase = 'calm';
  if (step === 3) petalPhase = 'gathering';
  else if (step === 4) petalPhase = 'single';
  else if (step === 5) petalPhase = 'current';
  else if (step === 6) petalPhase = 'wave';
  else if (step === 7) petalPhase = 'gathering';
  else if (step === 8) petalPhase = 'parting';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#070709] overflow-hidden select-none"
    >
      {/* Subtle atmospheric vignette and mist */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(28,25,23,0.35)_0%,rgba(7,7,9,1)_85%)]" />

      {/* Skip Intro Button */}
      <div className="absolute top-6 right-8 z-50">
        <button
          onClick={handleSkip}
          className="group flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest text-stone-400 hover:text-white bg-stone-900/70 hover:bg-stone-800/90 border border-stone-800 hover:border-pink-500/40 rounded-full transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <span>SKIP INTRO</span>
          <span className="text-pink-400 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* Cherry Blossom continuous canvas particle system */}
      {step >= 3 && (
        <CherryBlossoms
          mode="intro"
          phase={petalPhase}
          className="z-20"
          opacity={step === 8 ? 0.6 : 1}
        />
      )}

      {/* SCENE 2 & 3: The Minimalist Katana */}
      <AnimatePresence>
        {step >= 2 && step <= 3 && (
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={
              step === 2
                ? { opacity: 1, y: 0 }
                : {
                    opacity: [1, 1, 0.4, 0],
                    y: [0, 60, 200, 260],
                    scaleY: [1, 0.95, 0.6, 0.1],
                  }
            }
            transition={
              step === 2
                ? { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
                : { duration: 1.3, ease: [0.4, 0, 0.2, 1] }
            }
            className="absolute z-10 flex flex-col items-center pointer-events-none"
          >
            {/* Minimalist Original Katana Silhouette */}
            <svg
              width="60"
              height="380"
              viewBox="0 0 60 380"
              fill="none"
              className="drop-shadow-[0_0_20px_rgba(244,114,182,0.3)]"
            >
              {/* Kashira / Pommel */}
              <rect x="27.5" y="10" width="5" height="4" rx="1.5" fill="#52525b" />
              {/* Tsuka / Hilt */}
              <rect x="28" y="14" width="4" height="66" rx="2" fill="#18181b" />
              <line x1="28" y1="24" x2="32" y2="28" stroke="#3f3f46" strokeWidth="0.8" />
              <line x1="28" y1="36" x2="32" y2="40" stroke="#3f3f46" strokeWidth="0.8" />
              <line x1="28" y1="48" x2="32" y2="52" stroke="#3f3f46" strokeWidth="0.8" />
              <line x1="28" y1="60" x2="32" y2="64" stroke="#3f3f46" strokeWidth="0.8" />
              <line x1="28" y1="72" x2="32" y2="76" stroke="#3f3f46" strokeWidth="0.8" />

              {/* Tsuba (Circular Handguard with delicate petals motif) */}
              <ellipse cx="30" cy="83" rx="11" ry="3.5" fill="#27272a" stroke="#71717a" strokeWidth="0.75" />
              <circle cx="30" cy="83" r="1.5" fill="#f472b6" fillOpacity="0.8" />

              {/* Habaki (Blade collar) */}
              <rect x="28.5" y="86.5" width="3" height="6" fill="#a1a1aa" />

              {/* Blade */}
              <path
                d="M29 92.5 V340 Q29 358 30 365 Q31 358 31 92.5 Z"
                fill="url(#katanaBladeGradient)"
              />

              {/* Blade Edge Shinogi reflection line */}
              <line x1="30" y1="94" x2="30" y2="355" stroke="#ffffff" strokeWidth="0.75" strokeOpacity="0.9" />

              {/* Light sheen animation across blade */}
              <motion.line
                x1="29.5"
                y1="95"
                x2="30.5"
                y2="140"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ y1: 95, y2: 125, opacity: 0 }}
                animate={{ y1: [95, 340], y2: [125, 360], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="katanaBladeGradient" x1="29" y1="92" x2="31" y2="92" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#52525b" />
                  <stop offset="0.5" stopColor="#e4e4e7" />
                  <stop offset="1" stopColor="#3f3f46" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCENE 3: Impact Ripples at the bottom ground plane */}
      {step === 3 && (
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center justify-center">
          {ripples.map((id) => (
            <motion.div
              key={id}
              initial={{ width: 0, height: 0, opacity: 0.95, scaleY: 0.35 }}
              animate={{
                width: [0, 260 + id * 90],
                height: [0, 90 + id * 35],
                opacity: [0.95, 0],
              }}
              transition={{
                duration: 2.0,
                delay: (id - 1) * 0.25,
                ease: 'easeOut',
              }}
              className="absolute rounded-full border border-pink-300/70 shadow-[0_0_25px_rgba(244,114,182,0.5)]"
            />
          ))}

          {/* Central impact luminescence */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 2, 4.5], opacity: [1, 0.8, 0] }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 via-white to-pink-300 blur-md"
          />
        </div>
      )}

      {/* SCENE 4: First Solitary Petal Callout */}
      {step === 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="absolute z-30 font-jp text-stone-500 text-sm tracking-[0.5em] select-none"
        >
          微風
        </motion.div>
      )}

      {/* SCENE 7: BANKAI & SENBONZAKURA TITLE ONLY (Explicitly separated: step === 7) */}
      <AnimatePresence>
        {step === 7 && (
          <motion.div
            key="bankai-title-group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)', transition: { duration: 0.6 } }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 flex flex-col items-center text-center px-4"
          >
            {/* Japanese Whisper: 散れ */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-jp text-pink-300/90 text-2xl md:text-3xl mb-3 font-light tracking-[0.5em]"
            >
              散れ
            </motion.p>

            {/* BANKAI */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white tracking-[0.3em] uppercase drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)]"
            >
              BANKAI
            </motion.h1>

            {/* Glowing Accent Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent my-3.5"
            />

            {/* SENBONZAKURA */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-base font-mono tracking-[0.45em] text-pink-200/90 uppercase"
            >
              SENBONZAKURA
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCENE 8: PETALS PART & REVEAL YASH VARDHAN (Explicitly separated: step === 8, Bankai title gone) */}
      <AnimatePresence>
        {step === 8 && (
          <motion.div
            key="yash-reveal-group"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-30 flex flex-col items-center text-center px-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-pink-300/90 mb-3">
              PORTFOLIO AWAKENING
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-wider mb-4 drop-shadow-[0_2px_25px_rgba(244,114,182,0.3)]">
              YASH VARDHAN
            </h2>
            <p className="text-sm md:text-lg text-stone-200 font-light tracking-widest max-w-lg">
              B.Tech Student <span className="text-pink-400 mx-2">•</span> AI & Technology Enthusiast
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-32 h-[2px] bg-stone-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 10.8, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-pink-400 to-pink-200"
        />
      </div>
    </motion.div>
  );
}
