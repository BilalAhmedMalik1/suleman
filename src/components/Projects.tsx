import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, FolderGit2 } from 'lucide-react';
import { projects, allProjectsUrl } from '@/data/portfolio';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-400 mb-3">
            03 — Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-12">
            Featured Projects
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.12}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href={allProjectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-white font-medium rounded-xl transition-all hover:scale-[1.02]"
            >
              <FolderGit2 size={18} />
              View All Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-accent-500/30 transition-colors"
    >
      {/* Thumbnail placeholder */}
      <div className="relative h-44 bg-gradient-to-br from-ink-800 to-ink-850 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent" />
        <Github
          size={40}
          className="text-ink-500 group-hover:text-accent-500/50 transition-colors"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-accent-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-ink-800/80 border border-ink-600 text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-ink-700">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent-400 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-sm transition-colors ${
              project.liveUrl === '#'
                ? 'text-gray-600 cursor-default pointer-events-none'
                : 'text-gray-400 hover:text-accent-400'
            }`}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
