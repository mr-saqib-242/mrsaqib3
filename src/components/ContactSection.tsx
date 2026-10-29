import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Handshake, Mail, Copy, Check, Send, Phone, MapPin, Globe, Sparkles } from 'lucide-react';
import { SiWhatsapp, SiGithub, SiInstagram } from './TechLogos';
import { SAQIB_PORTRAIT, PERSONAL_INFO } from '../data';
import { ContactFormState } from '../types';

export const ContactSection: React.FC = () => {
  const [copiedToast, setCopiedToast] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    projectType: 'Website Development',
    budget: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // Send via WhatsApp or show confirmation
    const waText = `Hi Saqib! My name is ${formData.name} (${formData.email}). I'm reaching out regarding ${formData.projectType}. Budget: ${formData.budget || 'Open'}. Project details: ${formData.message}`;
    const waUrl = `https://wa.me/923478936242?text=${encodeURIComponent(waText)}`;
    
    // Open in new tab and mark submitted
    window.open(waUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full max-w-[1340px] mx-auto px-4 md:px-12 py-14 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl bg-[#201f22] p-5 sm:p-10 lg:p-14 shadow-2xl overflow-hidden border border-white/5"
      >
        {/* Accent Glow Backdrop */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#ff6600]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12">
          {/* Left info column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 sm:gap-6 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2a2a2d] w-fit border border-white/5">
              <Handshake className="w-4 h-4 text-[#ff6600]" />
              <span className="font-mono-code text-[11px] text-[#ffdbcd] uppercase tracking-wider font-semibold">
                Instant Availability
              </span>
            </div>

            <h2 className="font-heading text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#e5e1e6] tracking-tight font-extrabold leading-tight">
              Have a project in mind?<br />
              <span className="text-[#ff6600]">Let's build something amazing together.</span>
            </h2>

            <p className="text-xs sm:text-base text-[#e3bfb1] leading-relaxed">
              Whether you need a cutting-edge web application, an AI workflow integrated, or an unforgettable brand presence, my direct lines are open.
            </p>

            {/* Direct Connect Profile Strip */}
            <div className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-md">
              <div className="relative shrink-0">
                <img
                  src={SAQIB_PORTRAIT}
                  alt="Muhammad Saqib"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover object-top border border-[#ff6600]/50 shadow-[0_0_12px_rgba(255,102,0,0.3)]"
                />
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#1b1b1e]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-white text-sm sm:text-base truncate">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-[#ff6600]/20 text-[#ffb596] border border-[#ff6600]/30 shrink-0">
                    DIRECT
                  </span>
                </div>
                <span className="text-xs text-[#aa8a7d]">Founder, {PERSONAL_INFO.brand}</span>
                <span className="text-[11px] font-mono-code text-[#00eefc] mt-0.5">
                  Replies typically in &lt;15 mins on WhatsApp
                </span>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#aa8a7d]">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#1b1b1e] border border-white/5">
                <MapPin className="w-4 h-4 text-[#ffb952] shrink-0" />
                <span className="text-[#e5e1e6] truncate">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#1b1b1e] border border-white/5">
                <Globe className="w-4 h-4 text-[#00eefc] shrink-0" />
                <span className="text-[#e5e1e6] truncate">UTC+5 (Global Sync)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Direct Contact Cards & Quick Inquiry */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4 sm:gap-5 w-full lg:w-[420px]"
          >
            {/* WhatsApp Card */}
            <a
              id="contact-whatsapp-card"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 min-h-[52px] rounded-xl bg-[#1b1b1e] hover:bg-[#2a2a2d] border border-white/5 hover:border-[#25d366]/40 transition-all flex items-center justify-between group shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#25d366]/10 flex items-center justify-center text-[#25d366] group-hover:scale-110 transition-transform border border-[#25d366]/25 shrink-0">
                  <SiWhatsapp className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] sm:text-[11px] text-[#aa8a7d] font-mono-code uppercase">
                      WhatsApp Direct
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
                  </div>
                  <span className="font-mono-code text-xs sm:text-sm text-[#e5e1e6] font-semibold">
                    {PERSONAL_INFO.whatsappNumber}
                  </span>
                </div>
              </div>
              <Send className="w-4 h-4 text-[#aa8a7d] group-hover:text-[#25d366] transition-colors" />
            </a>

            {/* Email Card with Copy Trigger */}
            <div
              id="contact-email-card"
              onClick={handleCopyEmail}
              className="p-3.5 sm:p-4 min-h-[52px] rounded-xl bg-[#1b1b1e] hover:bg-[#2a2a2d] border border-white/5 hover:border-[#ff6600]/40 transition-all flex items-center justify-between group cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2d] flex items-center justify-center text-[#ff6600] group-hover:scale-105 transition-transform shrink-0 border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-[11px] text-[#aa8a7d] font-mono-code uppercase">
                    Direct Email
                  </span>
                  <span className="font-mono-code text-xs sm:text-sm text-[#e5e1e6] font-semibold truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Copy Email Address"
                className="shrink-0 text-[#aa8a7d] group-hover:text-[#ff6600] transition-colors p-2"
              >
                {copiedToast ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Toast feedback for copy */}
            <div
              id="copied-toast"
              className={`transition-opacity duration-300 font-mono-code text-xs text-[#00eefc] text-center ${
                copiedToast ? 'opacity-100' : 'opacity-0 h-0 pointer-events-none'
              }`}
            >
              ✓ Email address copied to clipboard!
            </div>

            {/* Quick Dispatch Form */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#1b1b1e] border border-white/5">
              <h3 className="font-heading text-sm font-semibold text-[#e5e1e6] mb-3">
                Send a Direct Project Brief
              </h3>

              {formSubmitted ? (
                <div className="text-center py-6">
                  <div className="w-10 h-10 rounded-full bg-[#ff6600]/20 text-[#ff6600] flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-semibold text-white">Message Dispatched!</p>
                  <p className="text-[11px] text-[#aa8a7d] mt-1">
                    Opening direct chat on WhatsApp with Muhammad Saqib.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 text-xs text-[#ff6600] underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0e0e11] border border-white/10 text-[#e5e1e6] placeholder-[#aa8a7d] focus:outline-none focus:border-[#ff6600] text-sm"
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0e0e11] border border-white/10 text-[#e5e1e6] placeholder-[#aa8a7d] focus:outline-none focus:border-[#ff6600] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-2.5 py-2.5 rounded-lg bg-[#0e0e11] border border-white/10 text-[#e5e1e6] focus:outline-none focus:border-[#ff6600] text-xs"
                    >
                      <option value="Website Development">Web Development</option>
                      <option value="AI Integration & Automation">AI Automation</option>
                      <option value="React Full-Stack App">Full-Stack App</option>
                      <option value="UI/UX Product Design">UI/UX Design</option>
                      <option value="Branding & Motion">Branding & Motion</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Budget ($)"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0e0e11] border border-white/10 text-[#e5e1e6] placeholder-[#aa8a7d] focus:outline-none focus:border-[#ff6600] text-sm"
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Brief details of your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0e0e11] border border-white/10 text-[#e5e1e6] placeholder-[#aa8a7d] focus:outline-none focus:border-[#ff6600] text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[44px] py-2.5 px-4 rounded-lg bg-[#ff6600] hover:bg-[#e65c00] text-white font-heading font-semibold text-xs shadow-glow-orange flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp / Direct Line</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
