import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  ExternalLink,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Send,
  Rocket,
  Layers,
  DollarSign,
  Check,
  ChevronDown,
  Terminal,
  Instagram,
  Video,
  Globe,
  Zap,
  ArrowUpRight,
  Sparkles,
  Lock,
  Timer,
  HelpCircle,
} from 'lucide-react';
import { SAQIB_PORTRAIT, PERSONAL_INFO } from '../data';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactInfo: '',
    serviceRequired: '',
    budgetTier: '',
    projectDetails: '',
    requireNda: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // first open by default

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Muhammad Saqib!\n` +
      `My name is: ${formData.fullName || 'Prospective Client'}\n` +
      `Contact: ${formData.contactInfo || 'Not specified'}\n` +
      `Service: ${formData.serviceRequired || 'Full-Stack Project'}\n` +
      `Budget Tier: ${formData.budgetTier || 'Flexible'}\n` +
      `NDA Required: ${formData.requireNda ? 'Yes' : 'No'}\n` +
      `Project Scope: ${formData.projectDetails || 'I would like to discuss an upcoming project.'}`
    );
    window.open(`https://wa.me/923478936242?text=${text}`, '_blank');
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      contactInfo: '',
      serviceRequired: '',
      budgetTier: '',
      projectDetails: '',
      requireNda: false,
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is the turnaround time for a website or web app?',
      a1: 'Standard responsive portfolio, landing pages, or high-conversion business websites typically deploy within 5 to 10 business days.',
      a2: 'Complex Full Stack web applications, custom CMS solutions, and integrated SaaS dashboards generally range from 2 to 5 weeks, incorporating iterative sprint reviews and staging test environments.',
    },
    {
      q: 'Do you provide ongoing maintenance and security updates?',
      a1: 'Yes. Every project includes a 30-day post-launch warranty with bug-fixing, optimization, and zero downtime support at no extra charge.',
      a2: 'Retainer maintenance plans are also available for continuous security patches, feature expansions, database indexing, and serverless infrastructure audits.',
    },
    {
      q: 'Can we integrate AI capabilities into an existing application?',
      a1: 'Absolutely. I specialize in retrofitting legacy or existing stacks (React, Next.js, Node, Python, Laravel) with customized LLMs, automated retrieval-augmented generation (RAG) pipelines, OpenAI/Anthropic/Gemini APIs, and algorithmic document vectorization.',
      a2: 'Integration is non-disruptive, utilizing resilient microservices and secure edge middleware.',
    },
    {
      q: 'What are the payment milestones and contract terms?',
      a1: 'Standard contracts operate on milestone-based disbursements: 40% upfront deposit upon architectural sign-off, 30% midway after functional staging prototype demo, and 30% final balance upon source code handover and production deployment.',
      a2: 'Payments accepted via Bank Wire (PKR/USD/EUR), Payoneer, Wise, and Escrow platforms.',
    },
  ];

  return (
    <div id="contact-page" className="w-full pt-20 bg-[#131316] text-[#e5e1e6] min-h-screen">
      {/* Top Ambient Glow Backdrop */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-r from-[#ff6600]/20 via-[#ce8800]/15 to-[#00eefc]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 flex flex-col gap-6">
          {/* Breadcrumb / Top Navigation bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff6600] hover:text-[#ffb596] transition-colors cursor-pointer group px-3 py-1.5 rounded-lg bg-[#2a2a2d] border border-white/5"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Return to Main View</span>
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2a2a2d] shadow-sm border border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
              <span className="font-mono-code text-xs text-[#00eefc] tracking-widest uppercase">
                SYSTEM COMM // DIRECT CHANNEL
              </span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-3xl">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#e5e1e6] tracking-tight font-extrabold leading-tight">
                Let's Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb596] via-[#ff6600] to-[#ffb952]">
                  Amazing
                </span>{' '}
                Together
              </h1>
              <p className="text-base sm:text-lg text-[#e3bfb1] max-w-2xl leading-relaxed">
                Have a high-stakes project in mind, need autonomous AI integrations, or ready to elevate your visual identity? Connect directly with algorithmic precision.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#1b1b1e] shadow-md border border-white/5 backdrop-blur-md shrink-0">
              <div className="w-12 h-12 rounded-lg bg-[#2a2a2d] flex items-center justify-center text-[#00eefc]">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono-code text-[11px] text-[#aa8a7d] uppercase tracking-wider">
                  CLIENT RESPONSE VELOCITY
                </span>
                <span className="font-heading text-base font-bold text-[#e5e1e6]">
                  Under 2-4 Hours
                </span>
              </div>
            </div>
          </div>

          {/* Main Grid: Master Identity & INQUIRY_TRANSMISSION.IO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4 items-start">
            {/* Left Column: 5 Cols */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Master Identity Card */}
              <div className="relative overflow-hidden rounded-2xl bg-[#1b1b1e] p-6 sm:p-8 shadow-xl border border-white/5 flex flex-col gap-4">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-[#ff6600]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono-code text-xs text-[#ff6600] uppercase tracking-widest">
                      MASTER IDENTITY
                    </span>
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[#e5e1e6]">
                      Muhammad Saqib
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-[#2a2a2d] text-[#e3bfb1] font-mono-code text-xs border border-white/5">
                    PK-FS-242
                  </div>
                </div>

                {/* Portrait of Muhammad Saqib */}
                <div className="flex items-center gap-4 p-3 rounded-xl bg-[#201f22] border border-white/5">
                  <div className="relative shrink-0">
                    <img
                      src={SAQIB_PORTRAIT}
                      alt="Muhammad Saqib"
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover object-top border border-[#ff6600]/50 shadow-md"
                    />
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#201f22]" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-heading font-bold text-white text-base truncate">
                      Muhammad Saqib
                    </span>
                    <span className="text-xs text-[#ffb596] font-mono-code truncate">
                      Founder, Saqib Visuals
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono-code flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available for Projects
                    </span>
                  </div>
                </div>

                <p className="font-heading text-sm text-[#ffb952] font-semibold">
                  Saqib Visuals — Where Creativity Meets Technology
                </p>

                <div className="flex flex-col gap-2.5 mt-1">
                  {/* Direct Phone */}
                  <a
                    href="tel:+923478936242"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#201f22] hover:bg-[#2a2a2d] transition-all border border-white/5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2a2a2d] group-hover:bg-[#ff6600] text-[#e3bfb1] group-hover:text-white flex items-center justify-center transition-colors">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono-code text-[#aa8a7d]">Direct Phone</span>
                        <span className="font-mono-code text-xs sm:text-sm text-[#e5e1e6] font-semibold group-hover:text-[#ffb596] transition-colors">
                          +92 347 8936242
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#aa8a7d] group-hover:text-[#ffb596] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href="https://wa.me/923478936242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#201f22] hover:bg-[#2a2a2d] transition-all border border-white/5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2a2a2d] group-hover:bg-[#00eefc] text-[#e3bfb1] group-hover:text-black flex items-center justify-center transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono-code text-[#aa8a7d]">WhatsApp Direct</span>
                        <span className="font-mono-code text-xs sm:text-sm text-[#e5e1e6] font-semibold group-hover:text-[#00eefc] transition-colors">
                          +92 347 8936242
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-[#00eefc]/20 text-[#00eefc] font-semibold uppercase border border-[#00eefc]/30">
                      Instant Link
                    </span>
                  </a>

                  {/* Email Inquiry */}
                  <a
                    href="mailto:mrsaqib242242@gmail.com"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#201f22] hover:bg-[#2a2a2d] transition-all border border-white/5 shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#2a2a2d] group-hover:bg-[#ffb952] text-[#e3bfb1] group-hover:text-black shrink-0 flex items-center justify-center transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[11px] font-mono-code text-[#aa8a7d]">Email Inquiry</span>
                        <span className="font-mono-code text-xs text-[#e5e1e6] font-semibold truncate group-hover:text-[#ffb952] transition-colors">
                          mrsaqib242242@gmail.com
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#aa8a7d] group-hover:text-[#ffb952] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>

                  {/* Live Production Portfolio */}
                  <a
                    href="https://mrsaqib242.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-xl bg-[#201f22] hover:bg-[#2a2a2d] transition-all border border-white/5 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#2a2a2d] group-hover:bg-[#ff6600] text-[#e3bfb1] group-hover:text-white flex items-center justify-center transition-colors">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono-code text-[#aa8a7d]">Live Production Portfolio</span>
                        <span className="font-mono-code text-xs text-[#e5e1e6] font-semibold group-hover:text-[#ff6600] transition-colors">
                          mrsaqib242.vercel.app
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#aa8a7d] group-hover:text-[#ff6600] transition-all" />
                  </a>

                  {/* Operational Base */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#201f22] border border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-[#2a2a2d] text-[#ffb952] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono-code text-[#aa8a7d]">Operational Base</span>
                      <span className="text-xs sm:text-sm text-[#e5e1e6] font-semibold">
                        Faisalabad, Punjab, Pakistan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Availability Protocol */}
                <div className="mt-1 p-4 rounded-xl bg-[#0e0e11] border border-white/5 flex items-start gap-3 shadow-inner">
                  <ShieldCheck className="w-5 h-5 text-[#00eefc] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-mono-code text-[11px] text-[#00eefc] uppercase tracking-wider font-semibold">
                      Availability Protocol
                    </span>
                    <p className="text-xs text-[#e3bfb1] mt-0.5 leading-relaxed">
                      Available globally for high-impact freelance projects, technical consulting, and dedicated engineering contracts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Network Coordinates Social Matrix */}
              <div className="flex flex-col gap-3 p-6 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-xs text-[#aa8a7d] uppercase tracking-widest">
                    NETWORK COORDINATES
                  </span>
                  <span className="text-xs font-mono-code text-[#ff6600] font-semibold">
                    Social Matrix
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                  {/* WhatsApp */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl bg-[#201f22] hover:bg-[#00eefc]/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <MessageCircle className="w-4 h-4 text-[#00eefc]" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#aa8a7d] group-hover:text-[#00eefc]" />
                    </div>
                    <span className="text-xs font-semibold text-[#e5e1e6] mt-2">WhatsApp</span>
                    <span className="font-mono-code text-[10px] text-[#aa8a7d] truncate">{PERSONAL_INFO.whatsappNumber}</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl bg-[#201f22] hover:bg-[#ff6600]/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <Instagram className="w-4 h-4 text-[#ff6600]" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#aa8a7d] group-hover:text-[#ff6600]" />
                    </div>
                    <span className="text-xs font-semibold text-[#e5e1e6] mt-2">Instagram</span>
                    <span className="font-mono-code text-[10px] text-[#aa8a7d] truncate">{PERSONAL_INFO.instagramHandle}</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href={PERSONAL_INFO.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl bg-[#201f22] hover:bg-[#00eefc]/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <Video className="w-4 h-4 text-[#00eefc]" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#aa8a7d] group-hover:text-[#00eefc]" />
                    </div>
                    <span className="text-xs font-semibold text-[#e5e1e6] mt-2">TikTok</span>
                    <span className="font-mono-code text-[10px] text-[#aa8a7d] truncate">{PERSONAL_INFO.tiktokHandle}</span>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {/* Facebook */}
                  <a
                    href={PERSONAL_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl bg-[#201f22] hover:bg-[#ffb596]/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <Globe className="w-4 h-4 text-[#ffb596]" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#aa8a7d] group-hover:text-[#ffb596]" />
                    </div>
                    <span className="text-xs font-semibold text-[#e5e1e6] mt-2">Facebook</span>
                    <span className="font-mono-code text-[10px] text-[#aa8a7d] truncate">Muhammad Saqib</span>
                  </a>

                  {/* Snapchat */}
                  <a
                    href={PERSONAL_INFO.snapchatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl bg-[#201f22] hover:bg-[#ffb952]/10 border border-white/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <Zap className="w-4 h-4 text-[#ffb952]" />
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#aa8a7d] group-hover:text-[#ffb952]" />
                    </div>
                    <span className="text-xs font-semibold text-[#e5e1e6] mt-2">Snapchat</span>
                    <span className="font-mono-code text-[10px] text-[#aa8a7d] truncate">{PERSONAL_INFO.snapchatHandle}</span>
                  </a>

                  {/* Secure Protocol */}
                  <div className="flex flex-col justify-center items-center p-3 rounded-xl bg-[#2a2a2d] text-center border border-white/5">
                    <span className="font-mono-code text-[10px] text-[#aa8a7d]">SECURE PROTOCOL</span>
                    <span className="font-mono-code text-xs text-[#00eefc] font-semibold mt-1">
                      TLS 1.3 Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Preview Box */}
              <div className="overflow-hidden rounded-2xl bg-[#1b1b1e] shadow-xl p-2 border border-white/5 flex flex-col gap-2">
                <div
                  className="w-full h-44 bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-3"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuApw5aqeeoPKGnWQmFz--iBG_irU3HpqzQZRbwTooqTsMKgNOdHgzFU9d21oCSh1xgsLDV1izMCTVtAQLz0e7-EEhCM_Gmvgf2e3eyZyiTrnU-A585WfhdY7wvgwllgZDZ7_sRL5yyfuIiG5f3YxGYl_Bh7xnUnTHWSfN47qwFxi1Vjc6ddgnk2MoKS-SnkoHlY5bqfN9hKt0vr2G-zQ2wJszrdCnpVAnvz0tH5EnKLy8zhV87o9_RT')`,
                  }}
                >
                  <div className="px-3 py-1.5 rounded-lg bg-[#0e0e11]/90 backdrop-blur-md flex items-center gap-2 border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6600]" />
                    <span className="font-mono-code text-xs text-[#e5e1e6] font-semibold">
                      31.4504° N, 73.1350° E
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 7 Cols (INQUIRY_TRANSMISSION.IO) */}
            <div className="lg:col-span-7 flex flex-col relative">
              <div className="relative overflow-hidden rounded-2xl bg-[#1b1b1e] p-6 sm:p-8 md:p-10 shadow-2xl border border-white/10 backdrop-blur-2xl">
                {/* Header Dots & Transmission Code */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#00eefc]" />
                    <span className="ml-2 font-mono-code text-xs text-[#aa8a7d]">
                      INQUIRY_TRANSMISSION.IO
                    </span>
                  </div>
                  <span className="font-mono-code text-xs text-[#00eefc] px-2.5 py-0.5 rounded-md bg-[#00eefc]/10 border border-[#00eefc]/20">
                    v2.4 Active Dispatch
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl text-[#e5e1e6] font-bold mb-1.5">
                  Dispatch Your Vision
                </h2>
                <p className="text-xs sm:text-sm text-[#e3bfb1] mb-6 leading-relaxed">
                  Detail your technical demands or creative specifications. Receive an architectural roadmap and exact estimate promptly.
                </p>

                {/* Main Submission Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-code text-xs text-[#e3bfb1] uppercase tracking-wider" htmlFor="fullName">
                        Your Name *
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#aa8a7d]">
                          <ShieldCheck className="w-4 h-4" />
                        </span>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Alexander Vance"
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e0e11] text-[#e5e1e6] placeholder:text-[#aa8a7d]/60 text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-[#ff6600] transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Email or WhatsApp */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-code text-xs text-[#e3bfb1] uppercase tracking-wider" htmlFor="contactInfo">
                        Email or WhatsApp *
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#aa8a7d]">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          id="contactInfo"
                          type="text"
                          required
                          value={formData.contactInfo}
                          onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                          placeholder="name@company.com or +1..."
                          className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#0e0e11] text-[#e5e1e6] placeholder:text-[#aa8a7d]/60 text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-[#ff6600] transition-all shadow-inner"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Required */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-code text-xs text-[#e3bfb1] uppercase tracking-wider" htmlFor="serviceSelect">
                        Service Required *
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#aa8a7d] pointer-events-none">
                          <Layers className="w-4 h-4" />
                        </span>
                        <select
                          id="serviceSelect"
                          required
                          value={formData.serviceRequired}
                          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                          className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#0e0e11] text-[#e5e1e6] text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-[#ff6600] transition-all appearance-none shadow-inner cursor-pointer"
                        >
                          <option value="" disabled>Select target discipline...</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Responsive Web App">Responsive Web App</option>
                          <option value="AI Integration & Automation">AI Integration & Automation</option>
                          <option value="UI/UX Design Systems">UI/UX Design Systems</option>
                          <option value="Video Editing & Motion Graphics">Video Editing & Motion Graphics</option>
                          <option value="Full Stack End-to-End Project">Full Stack End-to-End Project</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#aa8a7d] absolute right-3 pointer-events-none" />
                      </div>
                    </div>

                    {/* Estimated Budget */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-mono-code text-xs text-[#e3bfb1] uppercase tracking-wider" htmlFor="budgetTier">
                        Estimated Budget ($ / PKR) *
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 text-[#aa8a7d] pointer-events-none">
                          <DollarSign className="w-4 h-4" />
                        </span>
                        <select
                          id="budgetTier"
                          required
                          value={formData.budgetTier}
                          onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                          className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-[#0e0e11] text-[#e5e1e6] text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-[#ff6600] transition-all appearance-none shadow-inner cursor-pointer"
                        >
                          <option value="" disabled>Specify investment bracket...</option>
                          <option value="< $500 / < 140K PKR">&lt; $500 / &lt; 140K PKR</option>
                          <option value="$500 - $1,500 / 140K - 420K PKR">$500 - $1,500 / 140K - 420K PKR</option>
                          <option value="$1,500 - $5,000 / 420K - 1.4M PKR">$1,500 - $5,000 / 420K - 1.4M PKR</option>
                          <option value="$5,000+ / 1.4M+ PKR (Enterprise)">$5,000+ / 1.4M+ PKR (Enterprise)</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#aa8a7d] absolute right-3 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono-code text-xs text-[#e3bfb1] uppercase tracking-wider" htmlFor="projectDetails">
                      Project Scope &amp; Mission Parameters *
                    </label>
                    <textarea
                      id="projectDetails"
                      required
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell me about your product goals, timeline, core features, or visual requirements..."
                      className="w-full p-3 rounded-xl bg-[#0e0e11] text-[#e5e1e6] placeholder:text-[#aa8a7d]/60 text-xs sm:text-sm border border-white/5 focus:outline-none focus:border-[#ff6600] transition-all resize-y shadow-inner"
                    />
                  </div>

                  {/* NDA Checkbox & Review Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.requireNda}
                        onChange={(e) => setFormData({ ...formData, requireNda: e.target.checked })}
                        className="w-4 h-4 rounded bg-[#0e0e11] border-white/10 text-[#ff6600] focus:ring-0 cursor-pointer"
                      />
                      <span className="text-xs text-[#e3bfb1]">
                        Require Mutual NDA Prior to Deep Dive
                      </span>
                    </label>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a2a2d] border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00eefc]" />
                      <span className="font-mono-code text-[11px] text-[#e5e1e6]">
                        Direct Review by Muhammad Saqib
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-heading font-semibold text-sm shadow-[0_0_24px_rgba(255,102,0,0.45)] hover:shadow-[0_0_36px_rgba(255,102,0,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>Send Message &amp; Inquire</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 mt-1">
                    <Timer className="w-4 h-4 text-[#00eefc]" />
                    <span className="font-mono-code text-xs text-[#00eefc] font-medium">
                      Guaranteed response within 2-4 hours across all timezones
                    </span>
                  </div>
                </form>

                {/* Interactive Success Overlay */}
                {submitted && (
                  <div
                    id="successOverlay"
                    className="absolute inset-0 bg-[#1b1b1e]/98 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center z-20 transition-all"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00eefc]/20 text-[#00eefc] flex items-center justify-center mb-4 border border-[#00eefc]/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#e5e1e6] mb-2">
                      Inquiry Successfully Queued!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#e3bfb1] max-w-md mb-6 leading-relaxed">
                      Your dispatch has been delivered directly to Muhammad Saqib's terminal. Expect a reply within 2-4 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00eefc] hover:bg-[#00dbe9] text-black font-heading font-bold text-xs shadow-md hover:scale-105 transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Instant WhatsApp Follow-up</span>
                      </button>
                      <button
                        onClick={handleResetForm}
                        className="px-5 py-2.5 rounded-xl bg-[#2a2a2d] hover:bg-white/10 text-[#e5e1e6] font-mono-code text-xs transition-all cursor-pointer border border-white/5"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="w-full py-16 md:py-20 bg-[#0e0e11] border-y border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#ff6600]" />
                <span className="font-mono-code text-xs text-[#ff6600] uppercase tracking-wider">
                  PROTOCOL CLARIFICATIONS
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#e5e1e6] font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#e3bfb1] max-w-md leading-relaxed">
              Transparent operational workflows, engagement mechanics, and system delivery timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#1b1b1e] p-6 shadow-md border border-white/5 hover:bg-[#201f22] transition-all cursor-pointer flex flex-col justify-between"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex items-start justify-between gap-4 select-none">
                    <span className="flex items-start gap-3 font-heading text-base font-bold text-[#e5e1e6]">
                      <span className="font-mono-code text-xs text-[#ff6600] shrink-0 mt-0.5">
                        0{idx + 1} //
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#aa8a7d] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#ff6600]' : ''
                      }`}
                    />
                  </div>

                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-[#e3bfb1] flex flex-col gap-2 leading-relaxed">
                      <p>{faq.a1}</p>
                      <p>{faq.a2}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Urgent Deployment CTA Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#201f22] via-[#2a2a2d] to-[#201f22] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ff6600] text-white flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,102,0,0.4)]">
                <Zap className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#e5e1e6]">
                  Urgent or Time-Critical Deployment?
                </h3>
                <p className="text-xs sm:text-sm text-[#e3bfb1]">
                  Bypass the inbox and open an instant WhatsApp audio/text channel.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/923478936242?text=Hi%20Saqib,%20I%20have%20an%20urgent%20project%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00eefc] hover:bg-[#00dbe9] text-black font-heading font-bold text-xs sm:text-sm shadow-lg hover:shadow-[0_0_24px_rgba(0,238,252,0.5)] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Priority Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
