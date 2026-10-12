import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, X, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const PROJECTS = [
  {
    id: '01',
    title: 'Personal Portfolio Website',
    tagline: 'Japanese Minimalism × Senbonzakura × Developer Showcase',
    description:
      'A modern personal portfolio designed to showcase my skills, projects and learning journey.',
    fullDescription:
      'Engineered with React, Vite, and Tailwind CSS. Features an original 8-scene cinematic Bankai intro inspired by Byakuya Kuchiki & Senbonzakura, high-performance canvas particle system with low ambient footprint, responsive navigation, and accessible semantic markup.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Original 8-scene cinematic Bankai sequence with zero copyrighted media',
      'Dual-mode HTML5 Canvas Sakura particle engine with mouse deflection',
      'Minimalist Japanese typography & Hanko seal design accents',
      'Fully responsive & accessible across all mobile & desktop viewports',
    ],
    github: 'https://github.com',
    liveUrl: '#',
    status: 'Live & Active',
    accent: 'from-pink-500/10 via-rose-500/5 to-transparent',
  },
  {
    id: '02',
    title: 'AI Website Project',
    tagline: 'Practical Artificial Intelligence & Prompt Exploration',
    description:
      'An experimental web project exploring practical applications of artificial intelligence.',
    fullDescription:
      'Explores real-time LLM interaction, dynamic prompt evaluation, and AI-assisted web interfaces. Demonstrates how developers can augment everyday tools using conversational intelligence, natural language parsing, and structured output formatting.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
    features: [
      'Interactive natural language prompt workbench',
      'Context-aware query suggestions & structured response cards',
      'Lightweight client-side processing & API response caching',
      'Clean minimalist dark/light contrast interface',
    ],
    github: 'https://github.com',
    liveUrl: '#',
    status: 'In Development',
    accent: 'from-purple-500/10 via-pink-500/5 to-transparent',
  },
  {
    id: '03',
    title: 'Student Productivity Project',
    tagline: 'Workflow Architecture & Academic Sprint Tracker',
    description:
      'A productivity-focused project designed to help students organize tasks, learning and digital workflows.',
    fullDescription:
      'Designed to solve academic task fragmentation. Combines study sprint tracking, curriculum milestone maps, and digital resource linking into a clutter-free dashboard built for focused university learning.',
    technologies: ['JavaScript', 'Web Development', 'Productivity Tools'],
    features: [
      'Visual timeline for university assignment sprints & exams',
      'Distraction-free focus timer inspired by the Pomodoro method',
      'Local storage persistence for offline task management',
      'Keyboard shortcuts for rapid note organization',
    ],
    github: 'https://github.com',
    liveUrl: '#',
    status: 'Prototype',
    accent: 'from-stone-500/10 via-pink-500/5 to-transparent',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 relative bg-stone-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-pink-600 uppercase">
            <span>04 // WORKS</span>
            <span className="w-8 h-px bg-pink-300" />
            <span className="font-jp text-stone-400">制作実績</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-950 tracking-tight">
            SELECTED PROJECTS
          </h2>
          <p className="mt-3 text-stone-500 text-sm md:text-base max-w-xl">
            Selected works demonstrating modern frontend implementation, AI experimentation, and clean user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col justify-between p-8 bg-white rounded-2xl border border-stone-200/80 hover:border-pink-300 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-pink-100/40"
            >
              {/* Background gradient hint */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-light text-stone-300 group-hover:text-pink-500 transition-colors">
                    {project.id}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-stone-100 text-stone-600 border border-stone-200/60">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-display font-bold text-stone-950 group-hover:text-pink-700 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-mono text-pink-600 mb-4 font-medium">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  "{project.description}"
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200/60 text-[11px] font-mono text-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-stone-900 group-hover:text-pink-600 transition-colors cursor-pointer"
                >
                  <span>VIEW PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-500 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-stone-400 hover:text-stone-900 transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-sm font-light text-pink-600">
                  {selectedProject.id} //
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                  {selectedProject.status}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-pink-600 mb-6 font-medium">
                {selectedProject.tagline}
              </p>

              {/* Full Description */}
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                {selectedProject.fullDescription}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  Key Highlights & Architecture
                </h4>
                <div className="space-y-2">
                  {selectedProject.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                      <Check className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 mb-2.5">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-stone-100 text-stone-800 text-xs font-mono border border-stone-200/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-stone-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-stone-200 text-xs font-mono text-stone-600 hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  CLOSE
                </button>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-mono tracking-wider hover:bg-stone-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW GITHUB REPO</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
