import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-400 mb-3">
            04 — Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            Education
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-ink-600 to-transparent md:-translate-x-px" />

          {education.map((entry, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-ink-950 md:-translate-x-1.5 -translate-x-1.5 top-1 z-10">
                  <div className="absolute inset-0 rounded-full bg-accent-400 animate-ping opacity-40" />
                </div>

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="glass rounded-2xl p-6 hover:border-accent-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-400">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">
                          {entry.degree}
                        </h3>
                        <p className="text-sm text-gray-500">{entry.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-mono text-gray-400">
                        {entry.startYear} — {entry.endYear}
                      </span>
                      {entry.current && (
                        <span className="px-2.5 py-0.5 text-xs rounded-full bg-accent-500/15 text-accent-400 font-medium border border-accent-500/20">
                          Currently Studying
                        </span>
                      )}
                    </div>

                    {/* Coursework */}
                    <div className="pt-4 border-t border-ink-700">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={14} className="text-gray-500" />
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                          Relevant Coursework
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {entry.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 text-xs rounded-lg bg-ink-800/80 border border-ink-600 text-gray-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
