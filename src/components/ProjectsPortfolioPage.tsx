import React, { useState } from 'react';
import {
  Briefcase,
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  ArrowRight,
  Code,
  Eye,
  Filter,
} from 'lucide-react';
import { RealTechBadge } from './TechLogos';
import { PROJECTS, PERSONAL_INFO } from '../data';
import { Project } from '../types';

interface ProjectsPortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onNavigateHome: () => void;
  onContactClick: () => void;
}

export const ProjectsPortfolioPage: React.FC<ProjectsPortfolioPageProps> = ({
  onSelectProject,
  onNavigateHome,
  onContactClick,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack & Web' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'creative', label: 'Creative & UI/UX' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (selectedFilter === 'fullstack') return p.category.toLowerCase().includes('full') || p.category.toLowerCase().includes('web');
          if (selectedFilter === 'ai') return p.category.toLowerCase().includes('ai') || p.tags.some(t => t.toLowerCase().includes('ai'));
          if (selectedFilter === 'ecommerce') return p.category.toLowerCase().includes('commerce') || p.tags.some(t => t.toLowerCase().includes('commerce'));
          if (selectedFilter === 'creative') return p.category.toLowerCase().includes('creative') || p.category.toLowerCase().includes('ui');
          return true;
        });

  return (
    <div id="portfolio-page" className="w-full pt-20 bg-[#131316] text-[#e5e1e6] min-h-screen">
      {/* Ambient Lighting */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-[650px] h-[650px] bg-[#ff6600]/10 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#00eefc]/5 blur-[130px] pointer-events-none rounded-full" />

        {/* Page Top Breadcrumb */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 pt-6 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff6600] hover:text-[#ffb596] transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Return to Main View</span>
          </button>

          <span className="text-xs font-mono-code text-[#aa8a7d]">
            PRODUCTION BUILDS ARCHIVE // {PROJECTS.length} ENTRIES
          </span>
        </div>

        {/* Header Hero */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 pt-6 pb-14 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="font-mono-code text-xs font-semibold text-[#00eefc] uppercase tracking-widest px-3 py-1 rounded bg-[#2a2a2d] w-fit border border-white/5">
                SHOWCASE &amp; CASE STUDIES
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Selected Works &amp;{' '}
                <span className="text-[#ff6600] drop-shadow-[0_0_24px_rgba(255,102,0,0.3)]">
                  Production Deployments
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#e3bfb1]">
                Real-world web platforms, neural automation systems, and visual commerce experiences built by Muhammad Saqib.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none p-1.5 rounded-xl bg-[#0e0e11] border border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-3.5 py-2 min-h-[40px] rounded-lg text-xs font-mono-code transition-all cursor-pointer shrink-0 ${
                    selectedFilter === cat.id
                      ? 'bg-[#ff6600] text-white font-bold shadow-[0_0_12px_rgba(255,102,0,0.4)]'
                      : 'text-[#aa8a7d] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Projects Grid */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl bg-[#1b1b1e] border border-white/5 overflow-hidden hover:border-[#ff6600]/40 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Image Preview Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="relative h-52 sm:h-64 w-full overflow-hidden bg-[#0e0e11] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-80" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-[#0e0e11]/80 backdrop-blur-md text-[11px] font-mono-code text-[#00eefc] border border-white/10">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#ff6600] text-white text-xs font-heading font-semibold shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-2">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#ff6600] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#e3bfb1] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                  {project.tags.map((tag) => (
                    <RealTechBadge key={tag} tag={tag} size="xs" />
                  ))}
                </div>

                {/* Actions Footer */}
                <div className="pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="min-h-[44px] text-xs font-heading font-semibold text-[#ff6600] hover:text-[#ffb596] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1 sm:gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-[#aa8a7d] hover:text-white hover:bg-white/5 transition-colors"
                        title="Source Code"
                        aria-label="Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-[#00eefc] hover:text-white hover:bg-white/5 transition-colors"
                        title="Live Deployment"
                        aria-label="Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commission Banner */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 py-16 w-full">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#1b1b1e] via-[#201f22] to-[#1b1b1e] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-2xl font-bold text-white">
              Have an Idea You Want Engineered?
            </h3>
            <p className="text-xs sm:text-sm text-[#e3bfb1]">
              Whether it's a scalable SaaS, an AI automation agent, or a luxury portfolio, let's ship it.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-heading font-semibold shadow-glow-orange transition-all cursor-pointer whitespace-nowrap"
          >
            Start Your Project With Muhammad Saqib
          </button>
        </div>
      </section>
    </div>
  );
};
