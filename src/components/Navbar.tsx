import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Terminal, MessageCircle, Instagram, Sparkles, Phone, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiReact } from 'react-icons/si';
import { SAQIB_LOGO, SAQIB_PORTRAIT, PERSONAL_INFO } from '../data';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onContactClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About & Skills', id: 'about-and-skills', isNew: true },
    { name: 'Services & Solutions', id: 'services-and-solutions' },
    { name: 'Projects & Portfolio', id: 'projects-and-portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#101014]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.8)] py-2.5 sm:py-3'
          : 'bg-[#131316]/75 backdrop-blur-xl border-b border-white/[0.05] py-3 sm:py-4'
      }`}
    >
      {/* Subtle ambient bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff6600]/30 to-transparent pointer-events-none" />

      <div className="h-12 sm:h-14 max-w-[1340px] mx-auto px-3.5 sm:px-6 md:px-12 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand & Identity - Clean, Never Truncated */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            id="nav-brand-link"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group text-left shrink-0"
          >
            {/* Saqib Portrait Avatar & Glowing Status */}
            <div className="relative shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] bg-gradient-to-tr from-[#ff6600] to-[#00eefc] shadow-[0_0_14px_rgba(255,102,0,0.35)] group-hover:shadow-[0_0_20px_rgba(255,102,0,0.6)] transition-all">
                <img
                  src={SAQIB_PORTRAIT}
                  alt="Muhammad Saqib"
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              {/* Radar Pulse Emerald Beacon */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#131316]" />
              </span>
            </div>

            {/* Brand Typography - Guaranteed NO Truncation */}
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight whitespace-nowrap group-hover:text-[#ffb596] transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff6600] group-hover:scale-125 transition-transform" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono-code text-[#ffb596] whitespace-nowrap">
                <span>{PERSONAL_INFO.brand}</span>
                <span className="text-[#59585c]">•</span>
                <span className="text-[#00eefc] font-medium hidden xs:inline">Arch &amp; Dev</span>
              </div>
            </div>
          </button>

          {/* Real-looking React Icon Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d8ff]/10 border border-[#00d8ff]/25 text-[#00d8ff] font-mono-code text-[11px] shadow-[0_0_15px_rgba(0,216,255,0.2)] shrink-0">
            <SiReact className="w-4 h-4 text-[#00d8ff] animate-[spin_10s_linear_infinite] drop-shadow-[0_0_6px_rgba(0,216,255,0.6)]" />
            <span className="font-semibold text-white tracking-wide">React 19</span>
          </div>

          {/* Compact Live Status Pill - Only on very wide screens so it never crowds */}
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono-code text-[11px] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Contracts</span>
          </div>
        </div>

        {/* Center Desktop Navigation - Floating Capsule Pill */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#16161a]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.name}
                id={`nav-${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative px-3.5 xl:px-4 py-1.5 text-xs font-heading transition-all duration-300 rounded-full flex items-center gap-1.5 cursor-pointer select-none ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-[#e3bfb1]/80 hover:text-white hover:bg-white/[0.07] font-medium'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6600] to-[#ff771a] shadow-[0_0_20px_rgba(255,102,0,0.5)] -z-10"
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">{link.name}</span>
                {link.isNew && (
                  <span
                    className={`relative z-10 text-[9px] font-mono-code px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-black/30 text-white'
                        : 'bg-[#00eefc]/20 text-[#00eefc] border border-[#00eefc]/30'
                    }`}
                  >
                    NEW
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick social links on desktop */}
          <div className="hidden md:flex items-center gap-1.5 text-[#e3bfb1]">
            <a
              id="nav-whatsapp-link"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Quick Link"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 hover:border-emerald-500/30 border border-white/5 transition-all flex items-center justify-center cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              id="nav-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-white/15 hover:text-white border border-white/5 transition-all flex items-center justify-center cursor-pointer"
              title="GitHub"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <a
              id="nav-instagram-link"
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30 border border-white/5 transition-all flex items-center justify-center cursor-pointer"
              title="Instagram @mr_saqib242"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Let's Talk CTA - Cyber Flame Gradient Button */}
          <button
            id="nav-lets-talk-btn"
            onClick={onContactClick}
            className="relative group overflow-hidden flex items-center gap-2 px-3.5 sm:px-5 py-2 min-h-[40px] rounded-full bg-gradient-to-r from-[#ff6600] via-[#ff771a] to-[#ff5500] hover:from-[#ff771a] hover:to-[#ff4400] text-white font-heading font-bold text-xs sm:text-sm shadow-[0_0_24px_rgba(255,102,0,0.45)] hover:shadow-[0_0_36px_rgba(255,102,0,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer border border-[#ff8833]/40 shrink-0"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="hidden xs:inline whitespace-nowrap">Let's Talk</span>
            <span className="xs:hidden">Talk</span>
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden min-w-[40px] min-h-[40px] p-2 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#e5e1e6] hover:bg-[#2a2a2d] hover:border-[#ff6600]/40 active:scale-95 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff6600]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Glass Drawer with Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 top-[56px] bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden relative z-50 bg-[#0e0e11]/98 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 py-5 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto"
            >
              <div className="flex flex-col space-y-2">
                {/* Profile Identity Strip in Drawer */}
                <div className="p-3 mb-2 rounded-xl bg-[#1b1b1e] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={SAQIB_PORTRAIT}
                      alt="Muhammad Saqib"
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover object-top border border-[#ff6600]/40"
                    />
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-white text-sm">
                        Muhammad Saqib
                      </span>
                      <span className="text-[11px] font-mono-code text-[#00eefc] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for contracts
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#00d8ff]/10 border border-[#00d8ff]/20 text-[#00d8ff] font-mono-code text-[10px]">
                    <SiReact className="w-3 h-3 animate-[spin_8s_linear_infinite]" />
                    <span>React 19</span>
                  </div>
                </div>

                {/* Navigation Items */}
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.name}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`text-sm font-medium min-h-[44px] py-2.5 px-3.5 rounded-xl text-left flex items-center justify-between transition-all active:scale-[0.98] ${
                        isActive
                          ? 'bg-[#ff6600] text-white font-bold shadow-[0_0_15px_rgba(255,102,0,0.4)]'
                          : 'text-[#e3bfb1] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="font-heading">{link.name}</span>
                      {link.isNew && (
                        <span className={`text-[10px] font-mono-code px-2 py-0.5 rounded-full font-bold ${
                          isActive ? 'bg-black/30 text-white' : 'bg-[#00eefc]/20 text-[#00eefc] border border-[#00eefc]/30'
                        }`}>
                          NEW
                        </span>
                      )}
                    </button>
                  );
                })}

                {/* Direct Connect Quick Action Bar */}
                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5 text-xs">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onContactClick();
                    }}
                    className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff6600] to-[#ff771a] text-white font-heading font-bold text-sm shadow-[0_0_20px_rgba(255,102,0,0.4)] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Let's Talk / Direct Hire</span>
                  </button>

                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#1b1b1e] border border-white/5 text-[#00eefc] hover:bg-[#2a2a2d] transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">WhatsApp</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#1b1b1e] border border-white/5 text-gray-200 hover:bg-[#2a2a2d] transition-colors"
                    >
                      <Terminal className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">GitHub</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#1b1b1e] border border-white/5 text-[#ffb596] hover:bg-[#2a2a2d] transition-colors"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
