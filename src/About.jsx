import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Code, Cpu, Workflow, Compass } from 'lucide-react';

const EXPLORING_TOPICS = [
  {
    name: 'AI',
    desc: 'Machine learning fundamentals & neural networks',
    icon: Brain,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
  },
  {
    name: 'Generative AI',
    desc: 'LLMs, prompt engineering & multimodal pipelines',
    icon: Sparkles,
    color: 'text-pink-500',
    bg: 'bg-rose-50',
  },
  {
    name: 'Web Development',
    desc: 'React, Vite, modern Tailwind, & responsive UIs',
    icon: Code,
    color: 'text-stone-800',
    bg: 'bg-stone-100',
  },
  {
    name: 'Programming',
    desc: 'Algorithmic problem solving, Python & JavaScript',
    icon: Cpu,
    color: 'text-stone-800',
    bg: 'bg-stone-100',
  },
  {
    name: 'Digital Productivity',
    desc: 'Workflow automation, structured notes & digital systems',
    icon: Workflow,
    color: 'text-stone-700',
    bg: 'bg-pink-50/60',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-pink-600 uppercase">
            <span>01 // PROFILE</span>
            <span className="w-8 h-px bg-pink-300" />
            <span className="font-jp text-stone-400">自己紹介</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-950 tracking-tight">
            ABOUT ME
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 bg-white rounded-2xl border border-stone-200/80 shadow-xs relative overflow-hidden">
              {/* Subtle Sakura corner flourish */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-100/50 to-transparent pointer-events-none rounded-tr-2xl" />

              <p className="text-lg md:text-xl text-stone-800 leading-relaxed font-normal">
                I’m <span className="font-semibold text-stone-950">Yash Vardhan</span>, a B.Tech
                student at <span className="text-pink-700 font-medium">JECRC University</span> with a
                growing interest in artificial intelligence, web development and modern digital tools.
              </p>

              <p className="mt-4 text-stone-600 leading-relaxed">
                I enjoy experimenting with new technologies, turning ideas into practical projects
                and continuously improving my technical skills. My journey is anchored in the Japanese
                philosophy of <em>Kaizen</em> (改善)—small, deliberate, daily refinements that compound
                into mastery.
              </p>

              {/* Quick Info Grid */}
              <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div>
                  <span className="text-stone-400 block mb-1">LOCATION</span>
                  <span className="text-stone-800 font-medium">Jaipur, India</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">UNIVERSITY</span>
                  <span className="text-stone-800 font-medium">JECRC University</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">ACADEMIC STAGE</span>
                  <span className="text-stone-800 font-medium">B.Tech 1st Year</span>
                </div>
              </div>
            </div>

            {/* Philosophy quote pill */}
            <div className="p-5 rounded-xl bg-pink-50/60 border border-pink-200/50 flex items-start gap-3.5">
              <Compass className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" />
              <div className="text-xs text-stone-700 leading-relaxed">
                <span className="font-semibold text-stone-900 block font-mono mb-1">
                  DESIGN & CODE ETHOS
                </span>
                Restraint is more powerful than excess. Clean, purposeful software designed with clarity,
                speed, and elegance in mind.
              </div>
            </div>
          </div>

          {/* Currently Exploring Card */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-white rounded-2xl border border-stone-200/80 shadow-xs relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  <h3 className="font-mono text-xs font-semibold tracking-widest text-stone-900 uppercase">
                    CURRENTLY EXPLORING
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-200/50">
                  Active
                </span>
              </div>

              <div className="space-y-3">
                {EXPLORING_TOPICS.map((topic) => {
                  const Icon = topic.icon;
                  return (
                    <motion.div
                      key={topic.name}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                      className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-pink-100"
                    >
                      <div className={`p-2 rounded-lg ${topic.bg} ${topic.color} shrink-0 mt-0.5`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-stone-900 group-hover:text-pink-600 transition-colors">
                            {topic.name}
                          </h4>
                        </div>
                        <p className="text-xs text-stone-500 mt-0.5 leading-snug">
                          {topic.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
