import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const LEARNING_AREAS = [
  'Programming',
  'Computer Science fundamentals',
  'Web Development',
  'Artificial Intelligence',
  'Problem Solving',
  'Digital Technologies',
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-stone-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-pink-600 uppercase">
            <span>02 // ACADEMICS</span>
            <span className="w-8 h-px bg-pink-300" />
            <span className="font-jp text-stone-400">学歴</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-950 tracking-tight">
            EDUCATION
          </h2>
        </div>

        {/* Minimalist Japanese Scroll Timeline */}
        <div className="relative pl-8 md:pl-12 border-l-2 border-stone-200/90 space-y-12">
          {/* Scroll Pin Marker */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-pink-400 shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          </div>

          {/* Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl border border-stone-200/80 shadow-xs relative"
          >
            {/* Top decorative scroll header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200/60 flex items-center justify-center text-pink-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-stone-950">
                      B.Tech (Bachelor of Technology)
                    </h3>
                    <span className="hanko-seal text-[10px]">学</span>
                  </div>
                  <p className="text-sm font-semibold text-pink-700 font-mono tracking-wide">
                    JECRC UNIVERSITY
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end text-xs font-mono text-stone-500">
                <span className="inline-flex items-center gap-1.5 text-stone-700 bg-stone-100 px-3 py-1 rounded-full font-medium">
                  <Calendar className="w-3.5 h-3.5 text-pink-500" />
                  1st Year (Current)
                </span>
                <span className="inline-flex items-center gap-1 mt-1 text-stone-400">
                  <MapPin className="w-3 h-3" />
                  Jaipur, Rajasthan, India
                </span>
              </div>
            </div>

            {/* Overview */}
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
              Currently pursuing my undergraduate engineering degree with a focus on modern software
              engineering, core computer systems, and computational thinking. Establishing strong
              foundational skills across algorithmic logic, web technologies, and machine intelligence.
            </p>

            {/* Relevant learning areas */}
            <div>
              <div className="flex items-center gap-2 mb-3.5">
                <BookOpen className="w-4 h-4 text-pink-500" />
                <h4 className="font-mono text-xs font-semibold tracking-wider text-stone-800 uppercase">
                  RELEVANT LEARNING AREAS
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {LEARNING_AREAS.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50/80 border border-stone-200/60 hover:border-pink-300 hover:bg-pink-50/40 transition-colors text-xs text-stone-700 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
