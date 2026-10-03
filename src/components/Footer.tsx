import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { footerText, socialLinks, personalInfo } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-ink-700 relative">
      <div className="mx-auto max-w-5xl px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold tracking-tight text-white hover:text-accent-400 transition-colors"
          >
            {personalInfo.name}
            <span className="text-accent-500">.</span>
          </button>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg glass hover:bg-white/10 hover:text-accent-400 text-gray-400 transition-all hover:scale-110"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg glass hover:bg-white/10 hover:text-accent-400 text-gray-400 transition-all hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="p-2.5 rounded-lg glass hover:bg-white/10 hover:text-accent-400 text-gray-400 transition-all hover:scale-110"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">{footerText}</p>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group fixed bottom-6 right-6 z-40 p-3 rounded-xl glass-strong text-gray-400 hover:text-accent-400 hover:scale-110 transition-all shadow-lg shadow-black/30"
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
