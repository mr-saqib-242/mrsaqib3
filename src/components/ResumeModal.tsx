import React from 'react';
import { X, Download, Briefcase, GraduationCap, Code2, Award, MessageCircle, Mail } from 'lucide-react';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiPostgresql,
  ReactAtomLogo,
} from './TechLogos';
import { PERSONAL_INFO, TECH_BADGES } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onContactClick }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#1b1b1e] border border-[#ff6600]/40 rounded-3xl p-5 sm:p-8 shadow-2xl my-6 sm:my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close CV Preview"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 border border-white/10 text-gray-400 hover:text-white hover:border-[#ff6600] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="border-b border-white/10 pb-5 mb-5 sm:pb-6 sm:mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono-code font-bold tracking-widest text-[#ff6600] uppercase">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[#aa8a7d]">· Saqib Visuals</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#e5e1e6]">
            {PERSONAL_INFO.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#ffb596] mt-1 font-mono-code">
            {PERSONAL_INFO.role} · {PERSONAL_INFO.location}
          </p>
          <p className="text-[11px] sm:text-xs text-[#aa8a7d] mt-1 font-mono-code break-all">
            {PERSONAL_INFO.email} · {PERSONAL_INFO.whatsappNumber} · mrsaqib242.vercel.app
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-5 sm:space-y-6 text-xs sm:text-sm text-[#e3bfb1]">
          {/* Summary */}
          <div>
            <h4 className="font-heading text-xs sm:text-sm font-bold text-[#e5e1e6] uppercase tracking-wider mb-2">
              Profile Summary
            </h4>
            <p className="text-xs text-[#e3bfb1] leading-relaxed">
              17-year-old passionate full-stack developer and creative technologist from Faisalabad, Pakistan. Over 3 years of hands-on production experience designing, engineering, and launching 40+ high-performance web systems, AI pipelines, and creative branding projects for international clients.
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Briefcase className="w-4 h-4 text-[#ff6600]" />
              <span className="font-heading text-sm">Selected Experience</span>
            </div>
            <div className="space-y-3 sm:space-y-4 pl-3.5 sm:pl-4 border-l border-white/10">
              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <h4 className="font-semibold text-white text-xs sm:text-sm">Founder &amp; Lead Architect</h4>
                  <span className="text-[11px] text-[#aa8a7d] font-mono-code">2022 — Present</span>
                </div>
                <p className="text-xs text-[#ff6600] font-mono-code mb-1">Saqib Visuals</p>
                <p className="text-xs text-[#aa8a7d] leading-relaxed">
                  Delivered 40+ production web applications, AI automations, and e-commerce platforms. Architected performant client portals using Next.js, React, Tailwind, and LLM integrations.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap justify-between items-baseline gap-1">
                  <h4 className="font-semibold text-white text-xs sm:text-sm">Full-Stack &amp; AI Engineer</h4>
                  <span className="text-[11px] text-[#aa8a7d] font-mono-code">2023 — 2024</span>
                </div>
                <p className="text-xs text-[#00eefc] font-mono-code mb-1">Synthetix AI Copilot Project</p>
                <p className="text-xs text-[#aa8a7d] leading-relaxed">
                  Engineered multi-agent autonomous document analysis pipelines with FastAPI, Pinecone vector indexing, and Next.js 14 frontends.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-3">
              <Code2 className="w-4 h-4 text-[#00eefc]" />
              <span className="font-heading text-sm">Key Technologies &amp; Tools</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {TECH_BADGES.map((badge) => {
                const getBadgeIcon = (name: string) => {
                  if (name.includes('React')) return <ReactAtomLogo size={16} className="text-[#00d8ff]" />;
                  if (name.includes('Next')) return <SiNextdotjs size={16} className="text-white" />;
                  if (name.includes('Tailwind')) return <SiTailwindcss size={16} className="text-[#38bdf8]" />;
                  if (name.includes('Node') || name.includes('FastAPI')) return <SiNodedotjs size={16} className="text-[#5fa04e]" />;
                  if (name.includes('AI')) return <SiPython size={16} className="text-[#ffde57]" />;
                  if (name.includes('Figma')) return <SiFigma size={16} className="text-[#f24e1e]" />;
                  if (name.includes('PostgreSQL')) return <SiPostgresql size={16} className="text-[#4169e1]" />;
                  return <Code2 className="w-4 h-4 text-[#ffb596]" />;
                };

                return (
                  <div key={badge.name} className="p-2.5 rounded-xl bg-[#0e0e11] border border-white/5 flex items-start gap-2 hover:border-white/15 transition-colors">
                    <div className="p-1 rounded-md bg-white/5 shrink-0 mt-0.5">
                      {getBadgeIcon(badge.name)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className={`block text-xs font-semibold truncate ${badge.color}`}>{badge.name}</span>
                      <span className="text-[10px] text-[#aa8a7d] truncate">{badge.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-white/10">
          <button
            onClick={onClose}
            className="min-h-[44px] px-4 py-2 rounded-xl border border-white/10 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            Close
          </button>

          <div className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-[#ff6600]/40 text-xs font-semibold text-white hover:bg-[#ff6600]/10 transition-all cursor-pointer active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#ff6600]" />
              <span>Print / PDF</span>
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-xs font-semibold text-white transition-colors shadow-glow-orange active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
