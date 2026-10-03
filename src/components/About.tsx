import { motion } from 'framer-motion';
import { BookOpen, Check } from 'lucide-react';
import { aboutContent } from '@/data/portfolio';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-400 mb-3">
            01 — About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            {aboutContent.heading}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Text */}
          <div className="md:col-span-2 space-y-6">
            {aboutContent.paragraphs.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg text-gray-400 leading-relaxed">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 pt-4">
                {aboutContent.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1.5 text-sm rounded-lg glass text-gray-300 hover:text-accent-400 hover:border-accent-500/30 transition-colors"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Currently learning */}
          <div className="md:col-span-1">
            <Reveal delay={0.2}>
              <div className="glass rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen size={18} className="text-accent-400" />
                  <h3 className="font-semibold text-white">Currently Learning</h3>
                </div>
                <ul className="space-y-3">
                  {aboutContent.currentlyLearning.map((tech, i) => (
                    <motion.li
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <Check size={14} className="text-accent-500" />
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
