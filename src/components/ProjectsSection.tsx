import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { RealTechBadge } from './TechLogos';
import { PROJECTS, PERSONAL_INFO } from '../data';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const categories = ['All', 'AI & Full-Stack', 'E-Commerce & UX', 'Brand & Motion'];

  return (
    <section id="projects" className="w-full bg-[#0e0e11] py-16 sm:py-24 shadow-inner border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 md:px-12 flex flex-col gap-10 sm:gap-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono-code text-xs text-[#ffb596] uppercase tracking-wider font-semibold">
              Curated Production Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#e5e1e6] tracking-tight font-bold">
              Featured Flagship Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full sm:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                id={`project-filter-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-2 min-h-[40px] shrink-0 rounded-lg text-xs font-mono-code transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#ff6600] text-white font-bold shadow-[0_0_15px_rgba(255,102,0,0.4)] scale-105'
                    : 'bg-[#1b1b1e] text-[#aa8a7d] hover:text-[#e5e1e6] hover:bg-[#2a2a2d] border border-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3 Feature Case Study Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                id={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-2xl bg-[#201f22] border border-white/5 flex flex-col overflow-hidden shadow-lg group hover:border-[#ff6600]/30 transition-colors cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                {/* Thumbnail */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#2a2a2d]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201f22] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0e0e11]/80 backdrop-blur-md border border-white/10">
                    <span className="font-mono-code text-[11px] text-[#00eefc]">
                      {project.category}
                    </span>
                  </div>
                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md bg-[#0e0e11]/80 backdrop-blur-sm border border-emerald-500/20 text-[11px] font-mono-code text-emerald-400">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1 justify-between">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-[#e5e1e6] group-hover:text-[#ff6600] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#e3bfb1] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                      {project.tags.map((tag) => (
                        <RealTechBadge key={tag} tag={tag} />
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2a2a2d] text-[#e5e1e6] group-hover:bg-[#ff6600] group-hover:text-white font-heading font-semibold text-xs transition-all w-full justify-center cursor-pointer shadow-sm group-hover:shadow-[0_0_15px_rgba(255,102,0,0.3)] active:scale-95"
                    >
                      <span>Explore Architecture</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Mirror Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/5 text-xs text-[#aa8a7d] text-center sm:text-left"
        >
          <span>Verified production builds by Muhammad Saqib</span>
          <a
            href={PERSONAL_INFO.portfolioMirror}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-[#ffb596] hover:text-[#ff6600] transition-colors"
          >
            <span>View All Works &amp; Case Studies on Vercel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
