import { motion } from 'framer-motion';
import { journey } from '@/data/portfolio';
import { Reveal } from './Reveal';

export function Journey() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-400 mb-3">
            05 — Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            My Journey
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/50 via-ink-600 to-transparent" />

          {journey.map((milestone, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative flex gap-6 mb-8 last:mb-0">
                {/* Dot */}
                <div className="relative flex-shrink-0">
                  <div className="absolute left-4 top-2 w-3 h-3 rounded-full bg-accent-500 ring-4 ring-ink-950 -translate-x-1.5" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="glass rounded-2xl p-5 hover:border-accent-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        {milestone.title}
                      </h3>
                      <span className="text-sm font-mono text-accent-400">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
