import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, ArrowUp, Globe } from 'lucide-react';
import {
  SiWhatsapp,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiSnapchat,
  SiGithub,
  ReactAtomLogo,
} from './TechLogos';
import { SAQIB_LOGO, SAQIB_PORTRAIT, PERSONAL_INFO } from '../data';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavigate) {
      const page = targetId === 'projects' ? 'projects-and-portfolio' : targetId;
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="w-full bg-[#0e0e11] border-t border-white/5 shadow-[0_-1px_12px_rgba(0,0,0,0.2)]">
      <div className="max-w-[1340px] mx-auto px-4 md:px-12 pt-16 pb-24 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={SAQIB_PORTRAIT}
                  alt="Muhammad Saqib"
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#ff6600]/50 shadow-md"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0e0e11]" />
              </div>
              <img
                src={SAQIB_LOGO}
                alt="Saqib Visuals Logo"
                referrerPolicy="no-referrer"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-heading text-lg font-semibold text-[#e5e1e6] leading-none">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono-code text-[11px] text-[#aa8a7d]">
                  {PERSONAL_INFO.brand}
                </span>
              </div>
            </div>

            <p className="font-heading text-sm text-[#ffb596]">
              {PERSONAL_INFO.brandTagline || "Where Creativity Meets Technology."}
            </p>

            <p className="text-xs text-[#e3bfb1] max-w-sm leading-relaxed">
              Building Modern Digital Experiences with Innovation, Creativity &amp; Technology. Full-Stack Developer, AI Enthusiast &amp; Creative Visual Artist based in Faisalabad, Pakistan.
            </p>

            {/* Social Icons Strip with Real Brand Icons */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp: +92 347 8936242"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-[#1b1b1e] flex items-center justify-center text-[#e3bfb1] hover:text-[#25d366] hover:bg-[#25d366]/10 hover:border-[#25d366]/30 transition-all border border-white/5 active:scale-95 group"
              >
                <SiWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub: Muhammad Saqib"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-[#1b1b1e] flex items-center justify-center text-[#e3bfb1] hover:text-white hover:bg-white/10 hover:border-white/30 transition-all border border-white/5 active:scale-95 group"
              >
                <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram: @mr_saqib242"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-[#1b1b1e] flex items-center justify-center text-[#e3bfb1] hover:text-[#e4405f] hover:bg-[#e4405f]/10 hover:border-[#e4405f]/30 transition-all border border-white/5 active:scale-95 group"
              >
                <SiInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok: @mr_saqib_242"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-[#1b1b1e] flex items-center justify-center text-[#e3bfb1] hover:text-[#00f2fe] hover:bg-[#00f2fe]/10 hover:border-[#00f2fe]/30 transition-all border border-white/5 active:scale-95 group"
              >
                <SiTiktok className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook: Muhammad Saqib"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-[#1b1b1e] flex items-center justify-center text-[#e3bfb1] hover:text-[#1877f2] hover:bg-[#1877f2]/10 hover:border-[#1877f2]/30 transition-all border border-white/5 active:scale-95 group"
              >
                <SiFacebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.snapchatUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
                title="Snapchat: mrsaqib242"
                className="min-w-[44px] min-h-[44px] rounded-xl bg-[#1b1b1e] flex items-center justify-center text-[#e3bfb1] hover:text-[#fffc00] hover:bg-[#fffc00]/10 hover:border-[#fffc00]/30 transition-all border border-white/5 active:scale-95 group"
              >
                <SiSnapchat className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-mono-code text-xs text-[#aa8a7d] uppercase tracking-wider font-semibold">
              Quick Navigation
            </span>
            <div className="flex flex-col gap-1.5 sm:gap-2.5">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="min-h-[40px] text-xs text-[#e3bfb1] hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#aa8a7d]" />
                <span>Home</span>
              </a>
              <a
                href="#about-and-skills"
                onClick={(e) => handleLinkClick(e, 'about-and-skills')}
                className="min-h-[40px] text-xs text-[#e3bfb1] hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#aa8a7d]" />
                <span>About &amp; Skills</span>
              </a>
              <a
                href="#services-and-solutions"
                onClick={(e) => handleLinkClick(e, 'services-and-solutions')}
                className="min-h-[40px] text-xs text-[#e3bfb1] hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#aa8a7d]" />
                <span>Services &amp; Solutions</span>
              </a>
              <a
                href="#projects"
                onClick={(e) => handleLinkClick(e, 'projects')}
                className="min-h-[40px] text-xs text-[#e3bfb1] hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#aa8a7d]" />
                <span>Projects &amp; Portfolio</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="min-h-[40px] text-xs text-[#e3bfb1] hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronRight className="w-3.5 h-3.5 text-[#aa8a7d]" />
                <span>Contact &amp; Hire</span>
              </a>
            </div>
          </div>

          {/* Col 3: Direct Contact Details */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono-code text-xs text-[#aa8a7d] uppercase tracking-wider font-semibold">
              Direct Contact Details
            </span>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1b1b1e] border border-white/5">
                <Mail className="w-4 h-4 text-[#ff6600] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#aa8a7d]">Email Inquiries</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono-code text-xs text-[#e5e1e6] hover:text-[#ff6600] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1b1b1e] border border-white/5">
                <Phone className="w-4 h-4 text-[#00eefc] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#aa8a7d]">Phone / WhatsApp</span>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-code text-xs text-[#e5e1e6] hover:text-[#00eefc] transition-colors"
                  >
                    {PERSONAL_INFO.whatsappNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1b1b1e] border border-white/5">
                <MapPin className="w-4 h-4 text-[#ffb952] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#aa8a7d]">Location</span>
                  <span className="text-xs text-[#e5e1e6]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#1b1b1e] border border-white/5">
                <Globe className="w-4 h-4 text-[#ffb596] mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-code text-[#aa8a7d]">Portfolio Mirror</span>
                  <a
                    href={PERSONAL_INFO.portfolioMirror}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-code text-xs text-[#e5e1e6] hover:text-[#ffb596] transition-colors"
                  >
                    mrsaqib242.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Status */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#aa8a7d]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>
              © 2025 Muhammad Saqib ({PERSONAL_INFO.brand}). All rights reserved.
            </p>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1b1b1e] border border-white/10 text-[11px] font-mono-code text-[#e5e1e6]">
              <ReactAtomLogo size={13} className="text-[#00d8ff]" />
              <span>React 19 &amp; TypeScript</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono-code text-[11px] text-[#aa8a7d]">
              <span>STATUS // ONLINE</span>
              <div className="w-2 h-2 rounded-full bg-[#00eefc] animate-ping" />
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-7 h-7 rounded-lg bg-[#1b1b1e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff6600] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
