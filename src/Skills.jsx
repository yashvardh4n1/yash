import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCode,
  Palette,
  Terminal,
  Code2,
  Brain,
  Sparkles,
  Globe,
  Sliders,
} from 'lucide-react';

const SKILLS = [
  {
    name: 'HTML',
    desc: 'Semantic structure, accessible markup, modern SEO principles, and clean document outlines.',
    icon: FileCode,
    category: 'Frontend Core',
  },
  {
    name: 'CSS',
    desc: 'Responsive design, Tailwind CSS, flexbox/grid architectures, and fluid animations.',
    icon: Palette,
    category: 'Styling & Design',
  },
  {
    name: 'JavaScript',
    desc: 'Modern ES6+ syntax, asynchronous programming, DOM manipulation, and interactive state management.',
    icon: Terminal,
    category: 'Language',
  },
  {
    name: 'Python',
    desc: 'Clean scripting, data structures, automation utilities, and foundational logic for AI pipelines.',
    icon: Code2,
    category: 'Language & Logic',
  },
  {
    name: 'Artificial Intelligence',
    desc: 'Core principles of machine intelligence, algorithms, pattern recognition, and model architectures.',
    icon: Brain,
    category: 'Specialization',
  },
  {
    name: 'Generative AI',
    desc: 'Prompt design, LLM integration, generative workflows, and agentic reasoning experimentation.',
    icon: Sparkles,
    category: 'Emerging Tech',
  },
  {
    name: 'Web Development',
    desc: 'Component-driven frontend engineering with React, Vite tooling, and fast Jamstack deployment.',
    icon: Globe,
    category: 'Full Systems',
  },
  {
    name: 'Digital Productivity',
    desc: 'Structured digital knowledge systems, markdown documentation, and workflow optimization.',
    icon: Sliders,
    category: 'Workflow & Tools',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-pink-600 uppercase">
            <span>03 // CAPABILITIES</span>
            <span className="w-8 h-px bg-pink-300" />
            <span className="font-jp text-stone-400">技術</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-950 tracking-tight">
            SKILLS & TECHNOLOGIES
          </h2>
          <p className="mt-3 text-stone-500 text-sm md:text-base max-w-xl">
            Practical skills developed through coursework, active coding experiments, and independent projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 bg-white rounded-2xl border border-stone-200/80 hover:border-pink-300/80 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-pink-100/50 flex flex-col justify-between"
              >
                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Category and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
                      {skill.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-stone-50 group-hover:bg-pink-50 border border-stone-100 group-hover:border-pink-200/80 flex items-center justify-center text-stone-700 group-hover:text-pink-600 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-base font-display font-bold text-stone-900 group-hover:text-pink-700 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                {/* Subtle bottom detail */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-stone-600">
                  <span>Proficiency</span>
                  <span className="text-pink-500 font-medium">Applied</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
