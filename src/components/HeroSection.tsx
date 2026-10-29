import React from 'react';
import { motion } from 'motion/react';
import { Terminal, MessageCircle, Download, MapPin, Zap, Code2, Rocket, Award, Headphones, Sparkles } from 'lucide-react';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiFigma,
  ReactAtomLogo,
} from './TechLogos';
import { SAQIB_PORTRAIT, CYBER_UI_PREVIEW, PERSONAL_INFO, STATS } from '../data';

interface HeroSectionProps {
  onProjectsClick: () => void;
  onOpenResume: () => void;
  onAboutClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onProjectsClick,
  onOpenResume,
  onAboutClick,
}) => {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-20">
      {/* Top Ambient Glow Orbs */}
      <div className="absolute -top-32 -left-20 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#ff6600]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-64 -right-20 w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-[#00eefc]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-[1340px] mx-auto px-3.5 sm:px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Text & Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-4 sm:gap-5"
          >
            {/* Monospace Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#2a2a2d] w-fit shadow-sm border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
                <span className="font-mono-code text-[10px] sm:text-[11px] text-[#7df4ff] uppercase tracking-widest font-semibold">
                  {PERSONAL_INFO.role}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#ff6600]/10 border border-[#ff6600]/20 text-[#ff6600] font-mono-code text-[10px] sm:text-[11px]">
                <span>✨ {PERSONAL_INFO.brand}</span>
              </div>
            </div>

            {/* Main Typography Stack */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h1 className="font-heading text-3xl xs:text-4xl sm:text-6xl md:text-[64px] md:leading-[68px] text-[#e5e1e6] tracking-tight font-extrabold leading-tight">
                Muhammad <span className="text-[#ffb596]">Saqib</span>
              </h1>
              <div className="font-heading text-base xs:text-lg sm:text-2xl md:text-3xl font-semibold text-[#e3bfb1] leading-snug">
                <span>Building Modern Digital Experiences with</span>
                <span className="block text-[#ff6600] drop-shadow-[0_0_24px_rgba(255,102,0,0.5)] font-bold">
                  Innovation, Creativity &amp; Technology.
                </span>
              </div>
            </div>

            {/* Bio & Mission Pitch */}
            <div className="flex flex-col gap-2 max-w-xl">
              <p className="text-xs sm:text-base text-[#e3bfb1]/90 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-[11px] sm:text-sm font-semibold text-[#00eefc] font-mono-code">
                🎯 Mission: {PERSONAL_INFO.simpleMission}
              </p>
            </div>

            {/* Interactive Action Buttons - Optimized for Mobile Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 pt-2">
              <button
                id="hero-explore-work-btn"
                onClick={onProjectsClick}
                className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] rounded-xl bg-[#ff6600] text-white font-heading font-semibold text-xs sm:text-sm shadow-[0_0_24px_rgba(255,102,0,0.45)] hover:shadow-[0_0_36px_rgba(255,102,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 shrink-0" />
                <span className="truncate">Explore Selected Work</span>
              </button>

              {onAboutClick && (
                <button
                  id="hero-about-page-btn"
                  onClick={onAboutClick}
                  className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-xl bg-[#2a2a2d] text-white hover:bg-[#ff6600] border border-white/10 hover:border-[#ff6600] shadow-sm hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] active:scale-[0.98] transition-all text-xs sm:text-sm font-semibold cursor-pointer group"
                >
                  <Zap className="w-4 h-4 text-[#00eefc] group-hover:text-white transition-colors shrink-0" />
                  <span>About &amp; Skills</span>
                  <span className="text-[9px] sm:text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#00eefc]/20 text-[#00eefc] group-hover:bg-black/30 group-hover:text-white">
                    PAGE
                  </span>
                </button>
              )}

              <a
                id="hero-whatsapp-btn"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2.5 sm:py-3 min-h-[44px] rounded-xl bg-[#1b1b1e] text-[#00eefc] hover:text-[#e5e1e6] hover:bg-[#2a2a2d] border border-white/5 shadow-sm active:scale-[0.98] transition-all text-xs sm:text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#00eefc] shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="col-span-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-xl bg-[#1b1b1e] text-[#e3bfb1] hover:bg-[#2a2a2d] border border-white/5 transition-colors text-xs sm:text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#ffb596] shrink-0" />
                <span className="truncate">Resume CV</span>
              </button>
            </div>

            {/* Micro Location Meta */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-1 text-[#e3bfb1] font-mono-code text-[10px] sm:text-xs">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ffb952] shrink-0" />
                <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</span>
              </span>
              <span className="text-[#39393c]">•</span>
              <span className="flex items-center gap-1 text-[#7df4ff]">
                <Zap className="w-3.5 h-3.5 text-[#00eefc] shrink-0" />
                <span>Open to Global Contracts</span>
              </span>
            </div>
          </motion.div>

          {/* Right: Direct Cinematic Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center w-full"
          >
            {/* Ambient Multi-Layer Aura Glow behind image */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#ff6600]/30 via-[#ff9900]/15 to-[#00eefc]/25 rounded-[36px] blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-36 sm:w-44 h-36 sm:h-44 bg-[#00eefc]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-36 sm:w-44 h-36 sm:h-44 bg-[#ff6600]/25 rounded-full blur-2xl pointer-events-none" />

            {/* Direct Image Frame Container */}
            <div className="relative w-full max-w-[310px] xs:max-w-[350px] sm:max-w-[420px] rounded-[24px] sm:rounded-[32px] p-2 sm:p-2.5 bg-gradient-to-b from-white/20 via-white/5 to-[#1b1b1e]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(255,102,0,0.2)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9),0_0_65px_rgba(255,102,0,0.35)] transition-all duration-500 group">
              {/* Inner Picture Container - 100% Direct Image with NO text overlay, NO frame on top */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[18px] sm:rounded-[26px] overflow-hidden bg-[#0e0e11] shadow-inner border border-white/5">
                <img
                  src={SAQIB_PORTRAIT}
                  alt="Muhammad Saqib - Founder & Architect, Saqib Visuals"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-[1.02] group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
                />
              </div>

              {/* Minimal Clean Exterior Status Strip Below Image (Outside image, strictly no text on top of image) */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-[#0e0e11]/80 backdrop-blur-md border border-white/5 flex items-center justify-between font-mono-code text-xs">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-[10px] xs:text-[11px] sm:text-xs text-white font-semibold truncate">Available for Contracts</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-[#ff6600] font-semibold shrink-0 ml-1">
                  Saqib Visuals
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Experience Stat Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
        >
          <motion.div
            whileHover={{ y: -4 }}
            className="p-3.5 sm:p-5 rounded-2xl bg-[#201f22] border border-white/5 shadow-md flex flex-col gap-1 hover:border-[#ff6600]/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl xs:text-3xl sm:text-4xl text-[#ffb596] font-bold">
                {STATS[0].value}
              </span>
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6600]" />
            </div>
            <span className="font-heading text-xs sm:text-sm text-[#e5e1e6] font-semibold">
              {STATS[0].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#aa8a7d]">{STATS[0].subtitle}</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-3.5 sm:p-5 rounded-2xl bg-[#201f22] border border-white/5 shadow-md flex flex-col gap-1 hover:border-[#00eefc]/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl xs:text-3xl sm:text-4xl text-[#00eefc] font-bold">
                {STATS[1].value}
              </span>
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#00eefc]" />
            </div>
            <span className="font-heading text-xs sm:text-sm text-[#e5e1e6] font-semibold">
              {STATS[1].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#aa8a7d]">{STATS[1].subtitle}</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-3.5 sm:p-5 rounded-2xl bg-[#201f22] border border-white/5 shadow-md flex flex-col gap-1 hover:border-[#ffb952]/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl xs:text-3xl sm:text-4xl text-[#ffb952] font-bold">
                {STATS[2].value}
              </span>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffb952]" />
            </div>
            <span className="font-heading text-xs sm:text-sm text-[#e5e1e6] font-semibold">
              {STATS[2].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#aa8a7d]">{STATS[2].subtitle}</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-3.5 sm:p-5 rounded-2xl bg-[#201f22] border border-white/5 shadow-md flex flex-col gap-1 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-2xl xs:text-3xl sm:text-4xl text-[#e5e1e6] font-bold">
                {STATS[3].value}
              </span>
              <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffdbcd]" />
            </div>
            <span className="font-heading text-xs sm:text-sm text-[#e5e1e6] font-semibold">
              {STATS[3].label}
            </span>
            <span className="text-[10px] sm:text-xs text-[#aa8a7d]">{STATS[3].subtitle}</span>
          </motion.div>
        </motion.div>

        {/* Real-Looking Tech Stack Ecosystem Showcase Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-[#16161a]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-white/5 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00d8ff]/10 border border-[#00d8ff]/30 flex items-center justify-center">
                <ReactAtomLogo size={20} className="text-[#00d8ff]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-heading font-bold text-white text-xs sm:text-sm">
                    Core Engineering Tech Stack
                  </h4>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#00d8ff]/15 text-[#00d8ff] border border-[#00d8ff]/25 font-semibold">
                    REACT 19
                  </span>
                </div>
                <span className="text-[11px] font-mono-code text-[#aa8a7d]">
                  Official real-looking brand libraries &amp; frameworks
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono-code text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Production-Ready &amp; Scalable</span>
            </div>
          </div>

          {/* Real Logos Grid */}
          <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-2.5 sm:gap-3">
            {[
              {
                name: 'React 19',
                category: 'Frontend UI',
                color: 'text-[#00d8ff]',
                bg: 'hover:border-[#00d8ff]/40 hover:bg-[#00d8ff]/5',
                icon: <ReactAtomLogo size={24} className="text-[#00d8ff]" />,
              },
              {
                name: 'Next.js 15',
                category: 'Full-Stack SSR',
                color: 'text-white',
                bg: 'hover:border-white/40 hover:bg-white/5',
                icon: <SiNextdotjs size={22} className="text-white" />,
              },
              {
                name: 'TypeScript',
                category: 'Type Safety',
                color: 'text-[#3178c6]',
                bg: 'hover:border-[#3178c6]/40 hover:bg-[#3178c6]/5',
                icon: <SiTypescript size={22} className="text-[#3178c6]" />,
              },
              {
                name: 'Tailwind CSS',
                category: 'Styling',
                color: 'text-[#38bdf8]',
                bg: 'hover:border-[#38bdf8]/40 hover:bg-[#38bdf8]/5',
                icon: <SiTailwindcss size={22} className="text-[#38bdf8]" />,
              },
              {
                name: 'Node.js',
                category: 'Runtime',
                color: 'text-[#5fa04e]',
                bg: 'hover:border-[#5fa04e]/40 hover:bg-[#5fa04e]/5',
                icon: <SiNodedotjs size={22} className="text-[#5fa04e]" />,
              },
              {
                name: 'Python',
                category: 'AI & Data',
                color: 'text-[#ffde57]',
                bg: 'hover:border-[#ffde57]/40 hover:bg-[#ffde57]/5',
                icon: <SiPython size={22} className="text-[#3776ab]" />,
              },
              {
                name: 'PostgreSQL',
                category: 'Database',
                color: 'text-[#4169e1]',
                bg: 'hover:border-[#4169e1]/40 hover:bg-[#4169e1]/5',
                icon: <SiPostgresql size={22} className="text-[#4169e1]" />,
              },
              {
                name: 'Figma',
                category: 'Design System',
                color: 'text-[#f24e1e]',
                bg: 'hover:border-[#f24e1e]/40 hover:bg-[#f24e1e]/5',
                icon: <SiFigma size={22} className="text-[#f24e1e]" />,
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className={`p-2.5 sm:p-3 rounded-xl bg-[#1b1b1e] border border-white/5 flex flex-col items-center text-center gap-1.5 transition-all duration-300 group cursor-default shadow-sm ${tech.bg}`}
              >
                <div className="w-9 h-9 rounded-lg bg-[#2a2a2d] flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="font-heading font-semibold text-xs text-[#e5e1e6] whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono-code text-[#aa8a7d] whitespace-nowrap">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
