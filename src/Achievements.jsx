import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, BookmarkCheck, Medal, Star, Clock } from 'lucide-react';

/**
 * ACHIEVEMENTS SECTION DATA
 * Easily editable data structure for Yash Vardhan to update as achievements are earned.
 */
const ACHIEVEMENT_CATEGORIES = [
  {
    id: 'certifications',
    title: 'CERTIFICATIONS',
    japanese: '資格認定',
    icon: BookmarkCheck,
    items: [
      {
        title: 'Coming Soon',
        organization: 'Under Active Pursuit',
        date: '2026',
        description: 'Industry-standard certifications in AI fundamentals and Web Development technologies.',
        status: 'In Progress',
      },
    ],
  },
  {
    id: 'hackathons',
    title: 'HACKATHONS',
    japanese: 'ハッカソン',
    icon: Trophy,
    items: [
      {
        title: 'Coming Soon',
        organization: 'National & University Hackathons',
        date: '2026',
        description: 'Collaborative development sprints tackling real-world problems with AI & Web tools.',
        status: 'Upcoming',
      },
    ],
  },
  {
    id: 'courses',
    title: 'COURSES',
    japanese: '受講講座',
    icon: Award,
    items: [
      {
        title: 'Coming Soon',
        organization: 'Online Learning & University Curriculum',
        date: '2025 – 2026',
        description: 'Deep dives into Data Structures, Algorithm Design, React Architectures, and Applied AI.',
        status: 'Enrolled',
      },
    ],
  },
  {
    id: 'awards',
    title: 'AWARDS',
    japanese: '受賞歴',
    icon: Medal,
    items: [
      {
        title: 'Coming Soon',
        organization: 'Academic & Technical Honors',
        date: '2026',
        description: 'Recognitions for academic excellence, innovation sprints, and project competitions.',
        status: 'Future Milestone',
      },
    ],
  },
  {
    id: 'other',
    title: 'OTHER ACHIEVEMENTS',
    japanese: 'その他',
    icon: Star,
    items: [
      {
        title: 'Coming Soon',
        organization: 'Open Source & Community',
        date: '2026',
        description: 'Contributions to developer communities, technical write-ups, and student tech societies.',
        status: 'Planned',
      },
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs tracking-[0.25em] text-pink-600 uppercase">
            <span>05 // MILESTONES</span>
            <span className="w-8 h-px bg-pink-300" />
            <span className="font-jp text-stone-400">実績</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-950 tracking-tight">
            ACHIEVEMENTS
          </h2>
          <p className="mt-3 text-stone-500 text-sm md:text-base max-w-xl">
            A structured roadmap of upcoming recognitions, certifications, and competitive hackathon milestones.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENT_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 bg-white rounded-2xl border border-stone-200/80 hover:border-pink-300 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-pink-50 text-pink-600">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs font-mono font-bold tracking-widest text-stone-900 uppercase">
                          {category.title}
                        </h3>
                        <span className="font-jp text-[10px] text-stone-400">
                          {category.japanese}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Items in category */}
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-3.5 rounded-xl bg-stone-50/80 border border-dashed border-stone-200"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-semibold text-stone-800">
                            {item.title}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200/60">
                            <Clock className="w-2.5 h-2.5" />
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 mb-2">
                          {item.organization}
                        </p>
                        <p className="text-[11px] text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>Year</span>
                  <span className="text-stone-700 font-medium">2026</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
