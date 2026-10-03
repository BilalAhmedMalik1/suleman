import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Reveal } from './Reveal';

export function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative glass-strong rounded-3xl p-10 md:p-16 text-center overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent-500/10 rounded-full blur-[100px] -z-10" />

            <div className="inline-flex p-4 rounded-2xl bg-accent-500/10 text-accent-400 mb-6">
              <FileText size={28} />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Want to know more?
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Take a closer look at my education, skills, projects, and experience.
            </p>

            <a
              href={personalInfo.resumeUrl}
              download
              className="group inline-flex items-center gap-2 px-7 py-4 bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold rounded-xl transition-all hover:scale-[1.03] hover:glow"
            >
              <Download
                size={20}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              Download Resume
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
