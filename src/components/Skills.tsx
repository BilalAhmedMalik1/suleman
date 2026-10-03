import { motion } from 'framer-motion';
import {
  Code2, Globe, Wrench, Brain, type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { Reveal } from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Wrench,
  Brain,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-500/5 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-400 mb-3">
            02 — Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            Skills & Technologies
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <Reveal key={category.title} delay={idx * 0.1}>
                <div className="group glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-400 group-hover:bg-accent-500/20 transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-white text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-ink-800/80 border border-ink-600 text-gray-300 hover:border-accent-500/40 hover:text-accent-400 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
