import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, MessageCircle } from 'lucide-react';
import { RealTechBadge } from './TechLogos';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1b1b1e] border border-[#ff6600]/40 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Details"
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-gray-300 hover:text-white hover:border-[#ff6600] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-52 sm:h-72 w-full bg-[#0e0e11] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1e] via-[#1b1b1e]/40 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex items-center justify-between">
            <span className="text-xs font-mono-code font-bold tracking-wider text-[#00eefc] bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00eefc]/30 uppercase">
              {project.category}
            </span>
            {project.metrics && (
              <span className="text-xs font-semibold text-emerald-400 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-500/30">
                {project.metrics}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h3 className="text-xl sm:text-3xl font-heading font-extrabold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#e3bfb1] font-mono-code">{project.subtitle}</p>
          </div>

          <p className="text-[#e3bfb1] text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Metadata chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-[#0e0e11] border border-white/5 text-xs">
            <div>
              <span className="text-[#aa8a7d] block mb-0.5 sm:mb-1">Client</span>
              <span className="font-semibold text-white">{project.client || 'Confidential'}</span>
            </div>
            <div>
              <span className="text-[#aa8a7d] block mb-0.5 sm:mb-1">Year</span>
              <span className="font-semibold text-white">{project.year || '2024'}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#aa8a7d] block mb-0.5 sm:mb-1">Architect</span>
              <span className="font-semibold text-[#ff6600]">Muhammad Saqib</span>
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h4 className="text-xs font-mono-code font-bold text-[#aa8a7d] uppercase tracking-wider mb-2 sm:mb-3">
                Key Engineering &amp; Design Highlights
              </h4>
              <div className="space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#e5e1e6]">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6600] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono-code font-bold text-[#aa8a7d] uppercase tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <RealTechBadge key={tag} tag={tag} size="sm" />
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-3">
              <a
                href={project.liveUrl || PERSONAL_INFO.portfolioMirror}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors active:scale-95"
              >
                <span>Live Mirror</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold transition-colors border border-white/10 active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>

            <a
              href={`https://wa.me/923478936242?text=${encodeURIComponent(`Hi Saqib! I was checking out your project "${project.title}" and would like to build something similar.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-semibold shadow-glow-orange transition-colors active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Similar Build</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
