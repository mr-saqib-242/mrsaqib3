import React from 'react';
import { motion } from 'motion/react';
import { Brain, Monitor, Sparkles, Gauge, Palette, ArrowRight } from 'lucide-react';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  ReactAtomLogo,
} from './TechLogos';
import { PERSONAL_INFO, PILLARS } from '../data';

interface AboutSectionProps {
  onContactClick: () => void;
  onOpenAboutSkillsPage?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onContactClick,
  onOpenAboutSkillsPage,
}) => {
  const getPillarIcon = (iconType: string) => {
    switch (iconType) {
      case 'devices':
        return <Monitor className="w-6 h-6 text-[#ffb596]" />;
      case 'ai':
        return <Sparkles className="w-6 h-6 text-[#00eefc]" />;
      case 'speed':
        return <Gauge className="w-6 h-6 text-[#ffb952]" />;
      case 'palette':
      default:
        return <Palette className="w-6 h-6 text-[#ff6600]" />;
    }
  };

  return (
    <section id="about-and-skills" className="w-full bg-[#0e0e11] py-16 sm:py-24 shadow-inner border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 md:px-12 flex flex-col gap-10 sm:gap-16 relative z-10">
        {/* Split Concept Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2 font-mono-code text-xs text-[#ffb596] uppercase tracking-wider">
              <Brain className="w-4 h-4 text-[#ff6600]" />
              <span>Mission Statement</span>
            </div>
            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#e5e1e6] tracking-tight font-bold leading-tight">
              Turn Ideas Into Professional Digital Products That Make An Impact.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#2a2a2d] border border-white/5 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6600]/10 rounded-full blur-xl pointer-events-none" />
            <div className="text-xs font-mono-code text-[#ffb952] mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <span>🎯 CORE MISSION</span>
            </div>
            <p className="text-xs sm:text-base text-[#e3bfb1] italic leading-relaxed">
              "{PERSONAL_INFO.mission}"
            </p>
            <span className="block mt-3 font-mono-code text-xs text-[#ff6600] font-semibold">
              — {PERSONAL_INFO.name} • {PERSONAL_INFO.brand}
            </span>
          </motion.div>
        </div>

        {/* 4 Pillars of Engineering & Creative Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              id={`pillar-${pillar.id}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-5 sm:p-6 rounded-2xl bg-[#201f22] border border-white/5 flex flex-col gap-3 sm:gap-4 shadow-md hover:bg-[#2a2a2d] hover:border-white/15 transition-colors group cursor-default"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0e0e11] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff6600]/15 transition-all border border-white/5">
                {getPillarIcon(pillar.iconType)}
              </div>
              <h3 className="font-heading text-base sm:text-lg text-[#e5e1e6] font-semibold group-hover:text-white transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#e3bfb1] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Stack Strip with Real-Looking React Atom Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="p-4 sm:p-5 rounded-2xl bg-[#1b1b1e] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00d8ff]/10 border border-[#00d8ff]/25 flex items-center justify-center shrink-0">
              <ReactAtomLogo size={18} className="text-[#00d8ff]" />
            </div>
            <div>
              <span className="font-heading font-semibold text-xs sm:text-sm text-white block">
                Primary Frontend &amp; Full-Stack Architecture
              </span>
              <span className="text-[11px] font-mono-code text-[#aa8a7d]">
                Engineered with React 19, TypeScript &amp; Next.js ecosystem
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { name: 'React 19', icon: <ReactAtomLogo size={14} className="text-[#00d8ff]" />, color: 'text-[#00d8ff] border-[#00d8ff]/30' },
              { name: 'Next.js', icon: <SiNextdotjs size={13} className="text-white" />, color: 'text-white border-white/20' },
              { name: 'TypeScript', icon: <SiTypescript size={13} className="text-[#3178c6]" />, color: 'text-[#3178c6] border-[#3178c6]/30' },
              { name: 'Tailwind CSS', icon: <SiTailwindcss size={13} className="text-[#38bdf8]" />, color: 'text-[#38bdf8] border-[#38bdf8]/30' },
              { name: 'Node.js', icon: <SiNodedotjs size={13} className="text-[#5fa04e]" />, color: 'text-[#5fa04e] border-[#5fa04e]/30' },
              { name: 'Python', icon: <SiPython size={13} className="text-[#ffde57]" />, color: 'text-[#ffde57] border-[#ffde57]/30' },
            ].map((t) => (
              <span
                key={t.name}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2a2a2d] border text-xs font-mono-code ${t.color}`}
              >
                {t.icon}
                <span>{t.name}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Explore Dedicated Page Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1b1b1e] to-[#201f22] border border-[#ff6600]/30 shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
        >
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ff6600]/20 border border-[#ff6600]/40 flex items-center justify-center text-[#ff6600] shrink-0 mt-0.5 sm:mt-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="font-heading font-bold text-xs sm:text-sm text-white flex flex-wrap items-center gap-2">
                <span>Want to see my full 4-year origin story &amp; technical repertoire?</span>
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#00eefc]/20 text-[#00eefc] border border-[#00eefc]/30">
                  NEW PAGE
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#aa8a7d] mt-1">
                Explore interactive proficiency meters, milestones timeline, and Faisalabad global hub.
              </span>
            </div>
          </div>

          <button
            onClick={onOpenAboutSkillsPage}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-xs font-heading font-semibold shadow-glow-orange transition-all cursor-pointer shrink-0 active:scale-95"
          >
            <span>Open About &amp; Skills Page</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Quick Contact Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-end"
        >
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff6600] hover:text-[#ffb596] transition-colors cursor-pointer group"
          >
            <span>Have a vision that aligns with our pillars?</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

