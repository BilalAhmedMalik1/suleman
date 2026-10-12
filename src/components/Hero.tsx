import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FolderOpen, Download, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';

export function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-600/8 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '1.5s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/0 to-ink-950" />
      </div>

      <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
          </span>
          {personalInfo.statusBadge}
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent-400 mb-6"
        >
          <Sparkles className="inline-block mr-2 -mt-0.5" size={14} />
          {personalInfo.role}
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient mb-6"
        >
          {personalInfo.heroHeading}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          {personalInfo.heroSubheading}
        </motion.p>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.heroIntro}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="group flex items-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-400 text-ink-950 font-semibold rounded-xl transition-all hover:scale-[1.02] hover:glow"
          >
            <FolderOpen size={18} />
            View My Work
            <ArrowDown className="ml-1 group-hover:translate-y-0.5 transition-transform" size={16} />
          </button>
          <a
            href={personalInfo.resumeUrl}
            download
            className="group flex items-center gap-2 px-6 py-3.5 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all hover:scale-[1.02]"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center justify-center gap-4"
        >
          <SocialIcon href="https://github.com/sulyeman" label="GitHub">
            <Github size={20} />
          </SocialIcon>
          <SocialIcon href={socialLinks.linkedin} label="LinkedIn">
            <Linkedin size={20} />
          </SocialIcon>
          <SocialIcon href={`mailto:${socialLinks.email}`} label="Email">
            <Mail size={20} />
          </SocialIcon>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-xl glass hover:bg-white/10 hover:text-accent-400 text-gray-400 transition-all hover:scale-110"
    >
      {children}
    </a>
  );
}
