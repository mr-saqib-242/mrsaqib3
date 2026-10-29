import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Bot,
  Layers,
  PenTool,
  Award,
  Clapperboard,
  ArrowRight,
  X,
  Check,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';
import {
  ReactAtomLogo,
  SiFigma,
  SiTailwindcss,
  SiPostgresql,
} from './TechLogos';
import { SERVICES, PERSONAL_INFO } from '../data';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onContactClick: () => void;
  onExploreServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onContactClick,
  onExploreServices,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconType: string) => {
    switch (iconType) {
      case 'web':
        return <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6600]" />;
      case 'ai':
        return <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-[#00eefc]" />;
      case 'apps':
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffb596]" />;
      case 'react':
        return <ReactAtomLogo size={18} className="text-[#00d8ff]" />;
      case 'uiux':
        return <SiFigma size={16} className="text-[#f24e1e]" />;
      case 'tailwind':
        return <SiTailwindcss size={16} className="text-[#38bdf8]" />;
      case 'database':
        return <SiPostgresql size={16} className="text-[#4169e1]" />;
      case 'branding':
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#7df4ff]" />;
      case 'marketing':
        return <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#00eefc]" />;
      case 'motion':
      default:
        return <Clapperboard className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff6600]" />;
    }
  };

  return (
    <section id="services-and-solutions" className="w-full max-w-[1340px] mx-auto px-3 sm:px-6 md:px-12 py-12 sm:py-20 lg:py-24">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6"
        >
          <div className="flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-[11px] sm:text-xs text-[#00eefc] uppercase tracking-wider font-semibold">
                Comprehensive Capabilities
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#ff6600]/10 border border-[#ff6600]/25 text-[10px] font-mono-code text-[#ff6600]">
                10 Disciplines
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#e5e1e6] tracking-tight font-bold">
              Engineering &amp; Creative Solutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#aa8a7d] max-w-sm leading-relaxed">
            End-to-end technical execution—from wireframe to deployment, brand identity to video motion design.
          </p>
        </motion.div>

        {/* 2-Column Grid on Mobile, 3-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: (idx % 3) * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-3 sm:p-5 lg:p-7 rounded-xl sm:rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-md hover:bg-[#201f22] hover:border-[#ff6600]/30 hover:shadow-2xl transition-all flex flex-col justify-between group cursor-default"
            >
              <div className="flex flex-col gap-2.5 sm:gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#2a2a2d] flex items-center justify-center group-hover:bg-[#ff6600]/20 transition-colors shrink-0">
                    {getServiceIcon(service.iconType)}
                  </div>
                  <span className="font-mono-code text-[9px] sm:text-[11px] text-[#aa8a7d]">
                    {service.number} // {service.categoryCode}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-xs sm:text-base lg:text-lg font-bold text-[#e5e1e6] group-hover:text-white transition-colors line-clamp-2 leading-tight sm:leading-snug min-h-[2rem] sm:min-h-[2.5rem]">
                    {service.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs text-[#e3bfb1] leading-relaxed line-clamp-2 sm:line-clamp-3 mt-1 sm:mt-1.5">
                    {service.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded bg-[#201f22] text-[9px] sm:text-[10px] text-[#aa8a7d] font-mono-code border border-white/5 truncate max-w-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="mt-3 pt-2.5 sm:mt-5 sm:pt-3.5 border-t border-white/5 flex items-center justify-between gap-1">
                <button
                  onClick={() => setSelectedService(service)}
                  className="min-h-[36px] sm:min-h-[44px] text-[10px] sm:text-xs text-[#aa8a7d] hover:text-[#00eefc] transition-colors underline underline-offset-2 sm:underline-offset-4 cursor-pointer inline-flex items-center"
                >
                  Deliverables
                </button>

                <a
                  href={`https://wa.me/923478936242?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[36px] sm:min-h-[44px] inline-flex items-center gap-1 font-heading text-[10px] sm:text-xs font-semibold text-[#ff6600] hover:text-[#ffb596] transition-colors"
                >
                  <span className="hidden xs:inline sm:inline">Commission</span>
                  <span className="xs:hidden sm:hidden">Build</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Capabilities Matrix Callout Banner */}
        {onExploreServices && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#1b1b1e] via-[#201f22] to-[#1b1b1e] border border-[#ff6600]/30 shadow-xl"
          >
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-[#ff6600]/20 flex items-center justify-center text-[#ff6600] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">
                  Looking for our full 10-discipline capabilities matrix?
                </h4>
                <p className="text-xs text-[#e3bfb1]">
                  Explore all 10 services including AI automation, custom APIs, Tailwind architectures, motion graphics &amp; SEO.
                </p>
              </div>
            </div>
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,102,0,0.3)] transition-all shrink-0 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Service Deliverables Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#1b1b1e] border border-[#ff6600]/40 rounded-2xl p-5 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 pr-10">
              <div className="w-10 h-10 rounded-xl bg-[#2a2a2d] flex items-center justify-center shrink-0">
                {getServiceIcon(selectedService.iconType)}
              </div>
              <div>
                <span className="text-[11px] font-mono-code text-[#ff6600]">
                  {selectedService.number} // {selectedService.categoryCode}
                </span>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#e3bfb1] mb-5 sm:mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <h4 className="text-xs font-mono-code uppercase tracking-wider text-[#aa8a7d] mb-3">
              Included Deliverables
            </h4>
            <div className="space-y-2 mb-6 sm:mb-8">
              {selectedService.deliverables?.map((del, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#e5e1e6]">
                  <span className="w-4 h-4 rounded-full bg-[#ff6600]/20 flex items-center justify-center text-[#ff6600] shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{del}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedService(null)}
                className="min-h-[44px] px-4 py-2 rounded-lg border border-white/10 text-xs text-gray-300 hover:text-white cursor-pointer text-center"
              >
                Close
              </button>
              <a
                href={`https://wa.me/923478936242?text=${encodeURIComponent(selectedService.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#ff6600] text-white font-heading font-semibold text-xs shadow-glow-orange hover:bg-[#e65c00] transition-colors active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
