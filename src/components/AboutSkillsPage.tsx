import React, { useState, useEffect } from 'react';
import {
  Code,
  Layers,
  Sparkles,
  Rocket,
  Monitor,
  Terminal,
  Cpu,
  Palette,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  MessageCircle,
  Camera,
  Music,
  Globe,
  Bell,
  Fingerprint,
  Send,
  ArrowRight,
  ShieldCheck,
  Zap,
  Handshake,
  Check
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiPython,
  SiFigma,
  ReactAtomLogo,
} from './TechLogos';
import { SAQIB_PORTRAIT, PERSONAL_INFO, TIMELINE_MILESTONES, SKILL_CATEGORIES, VALUE_PROPOSITIONS } from '../data';

interface AboutSkillsPageProps {
  onContactClick: () => void;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateServices: () => void;
}

export const AboutSkillsPage: React.FC<AboutSkillsPageProps> = ({
  onContactClick,
  onNavigateHome,
  onNavigateProjects,
  onNavigateServices,
}) => {
  const [faisalabadTime, setFaisalabadTime] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  // Real-time Faisalabad Clock (UTC+5)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setFaisalabadTime(formatter.format(now));
      } catch (err) {
        setFaisalabadTime('08:00 PM PKT');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-[#ff6600]" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-[#00eefc]" />;
      case 'smart_toy':
        return <Cpu className="w-5 h-5 text-[#ffb952]" />;
      case 'rocket_launch':
      default:
        return <Rocket className="w-5 h-5 text-white" />;
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'devices':
        return <Terminal className="w-6 h-6 text-[#ff6600]" />;
      case 'dns':
        return <Layers className="w-6 h-6 text-[#00eefc]" />;
      case 'psychology':
        return <Sparkles className="w-6 h-6 text-[#ffb952]" />;
      case 'palette':
      default:
        return <Palette className="w-6 h-6 text-[#ffb596]" />;
    }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'devices_fold':
        return <Terminal className="w-6 h-6 text-[#ff6600]" />;
      case 'speed':
        return <Zap className="w-6 h-6 text-[#ff6600]" />;
      case 'cleaning_services':
        return <Code className="w-6 h-6 text-[#ff6600]" />;
      case 'auto_awesome':
        return <Sparkles className="w-6 h-6 text-[#ff6600]" />;
      case 'neurology':
        return <Cpu className="w-6 h-6 text-[#ff6600]" />;
      case 'handshake':
        return <Handshake className="w-6 h-6 text-[#ff6600]" />;
      case 'verified_user':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#ff6600]" />;
    }
  };

  const getSkillBrandIcon = (skillName: string) => {
    if (skillName.includes('React')) {
      return <ReactAtomLogo size={16} className="text-[#00d8ff]" />;
    }
    if (skillName.includes('JavaScript')) {
      return <SiJavascript size={14} className="text-[#f7df1e]" />;
    }
    if (skillName.includes('HTML5')) {
      return <SiHtml5 size={14} className="text-[#e34f26]" />;
    }
    if (skillName.includes('Tailwind')) {
      return <SiTailwindcss size={14} className="text-[#38bdf8]" />;
    }
    if (skillName.includes('Node')) {
      return <SiNodedotjs size={14} className="text-[#5fa04e]" />;
    }
    if (skillName.includes('REST API')) {
      return <SiFastapi size={14} className="text-[#009688]" />;
    }
    if (skillName.includes('Database')) {
      return <SiPostgresql size={14} className="text-[#4169e1]" />;
    }
    if (skillName.includes('Python')) {
      return <SiPython size={14} className="text-[#3776ab]" />;
    }
    if (skillName.includes('Figma')) {
      return <SiFigma size={14} className="text-[#f24e1e]" />;
    }
    if (skillName.includes('AI') || skillName.includes('LLM')) {
      return <Sparkles className="w-3.5 h-3.5 text-[#ffb952]" />;
    }
    return <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6600]" />;
  };

  const filteredCategories =
    activeCategoryFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategoryFilter);

  return (
    <div id="about-skills-page" className="w-full pt-20 bg-[#131316] text-[#e5e1e6] min-h-screen">
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#ff6600]/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-[#00eefc]/5 blur-[120px] pointer-events-none rounded-full" />

        {/* Page Top Breadcrumb Bar */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 pt-6 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff6600] hover:text-[#ffb596] transition-colors cursor-pointer group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>Return to Main View</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-mono-code text-[#aa8a7d]">
              Faisalabad Local Time: <strong className="text-white">{faisalabadTime || 'UTC+5'}</strong>
            </span>
          </div>
        </div>

        {/* Intro Banner & Profile Identity Grid */}
        <section className="max-w-[1340px] mx-auto px-3.5 sm:px-6 md:px-12 pt-4 sm:pt-6 pb-12 sm:pb-16 w-full">
          {/* Breadcrumb / Overline */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="font-mono-code text-[11px] sm:text-xs font-semibold text-[#00eefc] uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded bg-[#2a2a2d] border border-white/5">
              PRODIGY // ARCHITECT
            </span>
            <span className="font-mono-code text-[11px] sm:text-xs text-[#aa8a7d]">
              LOC: {PERSONAL_INFO.coordinates}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Typography Statement */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h1 className="font-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#e5e1e6] tracking-tight font-extrabold leading-tight">
                About{' '}
                <span className="text-[#ff6600] inline-block drop-shadow-[0_0_20px_rgba(255,102,0,0.3)]">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              <p className="font-heading text-lg xs:text-xl sm:text-2xl text-[#ffb952] leading-snug font-semibold">
                {PERSONAL_INFO.role}
              </p>

              <div className="p-4 rounded-xl bg-[#1b1b1e] border border-white/5 space-y-2">
                <span className="font-mono-code text-xs text-[#ff6600] font-semibold block">👨‍💻 WHO I AM</span>
                <p className="text-xs sm:text-sm text-[#e3bfb1] leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="pt-2 border-t border-white/5 flex items-start gap-2">
                  <span className="text-[#00eefc] font-bold text-xs font-mono-code shrink-0">🎯 MISSION:</span>
                  <span className="text-xs text-white font-semibold italic">
                    "{PERSONAL_INFO.simpleMission}"
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-2">
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#1b1b1e] border border-white/5 shadow-sm text-[11px] sm:text-xs font-mono-code">
                  <span className="text-[#ff6600] font-bold">✓</span>
                  <span className="text-[#e5e1e6]">SAQIB VISUALS FOUNDER</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#1b1b1e] border border-white/5 shadow-sm text-[11px] sm:text-xs font-mono-code">
                  <Zap className="w-3.5 h-3.5 text-[#00eefc]" />
                  <span className="text-[#e5e1e6]">17 YR PRODIGY</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#1b1b1e] border border-white/5 shadow-sm text-[11px] sm:text-xs font-mono-code">
                  <Code className="w-3.5 h-3.5 text-[#ffb952]" />
                  <span className="text-[#e5e1e6]">FULL-STACK &amp; AI</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff6600] text-white text-xs font-heading font-semibold shadow-[0_0_20px_rgba(255,102,0,0.35)] hover:shadow-[0_0_28px_rgba(255,102,0,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2a2a2d] hover:bg-white/10 text-[#e5e1e6] text-xs font-heading font-semibold border border-white/10 transition-colors cursor-pointer min-h-[44px]"
                >
                  <Send className="w-4 h-4 text-[#ffb596]" />
                  <span>Send Direct Inquiry</span>
                </button>
              </div>
            </div>

            {/* Master Profile Card */}
            <div className="lg:col-span-5 w-full">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#201f22] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-3.5 sm:gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6600]/15 blur-2xl rounded-full pointer-events-none" />

                {/* Direct Portrait Showcase - 100% clean image */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#0e0e11] shadow-inner group">
                  <img
                    src={SAQIB_PORTRAIT}
                    alt="Muhammad Saqib - Saqib Visuals"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-[1.03] transition-transform duration-700 ease-out select-none"
                  />
                </div>

                {/* Identity & Status Strip - Placed cleanly BELOW the image */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1b1b1e] border border-white/5 font-mono-code text-xs">
                  <div>
                    <span className="font-heading font-bold text-white text-sm block leading-tight">
                      {PERSONAL_INFO.name}
                    </span>
                    <span className="text-[11px] text-[#00eefc]">
                      {PERSONAL_INFO.brand}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#ff6600] flex items-center justify-center shadow-[0_0_12px_rgba(255,102,0,0.4)]">
                      <Terminal className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading font-bold text-sm text-[#e5e1e6]">
                        {PERSONAL_INFO.brand}
                      </span>
                      <span className="font-mono-code text-[10px] text-[#aa8a7d]">
                        PRIMARY SPECS // SYSTEM
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#00eefc] bg-[#353438] px-3 py-1 rounded-full flex items-center gap-1.5 border border-[#00eefc]/20">
                    <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
                    ACTIVE
                  </span>
                </div>

                {/* Specs list */}
                <div className="space-y-2 text-xs font-mono-code">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#1b1b1e] border border-white/5">
                    <span className="text-[#aa8a7d] flex items-center gap-2">
                      <Fingerprint className="w-3.5 h-3.5 text-[#ff6600]" /> Age Metric
                    </span>
                    <span className="text-[#ff6600] font-bold">17 Years (Prodigy Developer)</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#1b1b1e] border border-white/5">
                    <span className="text-[#aa8a7d] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#00eefc]" /> Headquarters
                    </span>
                    <span className="text-[#e5e1e6] font-medium">{PERSONAL_INFO.location}</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#1b1b1e] border border-white/5">
                    <span className="text-[#aa8a7d] flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-[#ffb952]" /> Live Cloud Hub
                    </span>
                    <a
                      className="text-[#00eefc] hover:underline flex items-center gap-1 transition-all"
                      href={PERSONAL_INFO.portfolioMirror}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>mrsaqib242.vercel.app</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#1b1b1e] border border-white/5">
                    <span className="text-[#aa8a7d] flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#ffb596]" /> Contract Availability
                    </span>
                    <span className="text-[#00eefc] font-semibold">OPEN FOR FREELANCE</span>
                  </div>
                </div>

                {/* Visual Portrait Snippet */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-md mt-1 border border-white/10 group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Futuristic cybernetic workspace of 17-year-old creative developer Muhammad Saqib in Faisalabad, Pakistan"
                    src={PERSONAL_INFO.prodigyWorkspaceImage}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-[#0e0e11]/40 to-transparent flex items-end p-4">
                    <p className="font-mono-code text-[11px] text-[#e5e1e6] tracking-wider">
                      PRECISION EXECUTION // HYPER OPTIMIZED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Detailed Story & Milestones Timeline */}
      <section className="w-full bg-[#0e0e11] py-20 relative border-t border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="font-mono-code text-xs font-semibold text-[#ff6600] uppercase tracking-wider">
                // ORIGIN &amp; TRAJECTORY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#e5e1e6] font-bold tracking-tight">
                My Journey &amp; Mission
              </h2>
              <p className="text-sm sm:text-base text-[#e3bfb1]">
                From discovering syntax at early teens to establishing a studio providing international engineering and design value.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#1b1b1e] border border-white/5 max-w-md shadow-md">
              <p className="text-xs sm:text-sm text-[#e5e1e6] italic leading-relaxed">
                “{PERSONAL_INFO.bio} My mission is simple: Turn ideas into professional digital products that make an impact.”
              </p>
            </div>
          </div>

          {/* Chronological Visual Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {TIMELINE_MILESTONES.map((m) => (
              <div
                key={m.year}
                className="flex flex-col p-6 rounded-2xl bg-[#1b1b1e] border border-white/5 hover:border-white/20 hover:bg-[#201f22] transition-all shadow-md relative group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-4xl text-[#5a4136] group-hover:text-[#ff6600] transition-colors font-extrabold">
                    {m.year}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#2a2a2d] flex items-center justify-center border border-white/5">
                    {getMilestoneIcon(m.iconName)}
                  </div>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#e5e1e6] mb-2">
                  {m.title}
                </h3>

                <p className="text-xs text-[#e3bfb1] leading-relaxed mb-4">
                  {m.description}
                </p>

                <div className="mt-auto pt-3 border-t border-white/5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6600]" />
                  <span className="font-mono-code text-[11px] text-[#aa8a7d]">
                    {m.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Studio Workroom Ambient Visual */}
          <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              alt="High-tech digital creator setup of Muhammad Saqib in Faisalabad, Pakistan"
              src={PERSONAL_INFO.studioWorkroomImage}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e11] via-[#0e0e11]/80 to-transparent flex flex-col justify-center p-8 sm:p-12 max-w-lg">
              <span className="font-mono-code text-xs text-[#ff6600] uppercase tracking-wider font-semibold">
                // CODING PHILOSOPHY
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl text-white font-bold mt-2">
                Speed, Reliability, No Bloatware
              </h3>
              <p className="text-xs sm:text-sm text-[#e3bfb1] mt-2 leading-relaxed">
                Every line of code is measured against execution latency, readability, accessibility, and modern maintainability standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Tech Stack & Skills Matrix */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono-code text-xs font-semibold text-[#00eefc] uppercase tracking-wider">
                // HARDWARE &amp; SOFTWARE REPERTOIRE
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#e5e1e6] font-bold tracking-tight">
              Tech Stack &amp; Skills Matrix
            </h2>
            <p className="text-sm sm:text-base text-[#e3bfb1] max-w-2xl">
              Curated proficiency across the contemporary full-stack spectrum, machine intelligence endpoints, and creative design suites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#0e0e11] border border-white/5">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'creative', label: 'Creative & Visuals' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all cursor-pointer ${
                  activeCategoryFilter === tab.id
                    ? 'bg-[#ff6600] text-white font-bold shadow-[0_0_12px_rgba(255,102,0,0.4)]'
                    : 'text-[#aa8a7d] hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Quadrant Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#201f22] border border-white/5 shadow-lg flex flex-col justify-between hover:border-white/15 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#2a2a2d] border border-white/5 flex items-center justify-center">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#e5e1e6]">
                        {cat.title}
                      </h3>
                      <span className="font-mono-code text-[11px] text-[#aa8a7d]">
                        {cat.subtitle}
                      </span>
                    </div>
                  </div>
                  <span className={`font-mono-code text-sm font-bold ${cat.accentColor}`}>
                    {cat.avgScore}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#e3bfb1] mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Progress Meters */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center font-mono-code text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-[#2a2a2d] border border-white/5 flex items-center justify-center shrink-0">
                            {getSkillBrandIcon(skill.name)}
                          </div>
                          <span className="text-[#e5e1e6] font-medium">{skill.name}</span>
                        </div>
                        <span className={`font-semibold ${cat.accentColor}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#353438] overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${cat.barColor}`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges Pill List */}
              <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-white/5">
                {cat.badges.map((b) => (
                  <span
                    key={b}
                    className="text-[11px] font-mono-code px-3 py-1 rounded-full bg-[#2a2a2d] border border-white/5 text-[#e5e1e6]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 'Why Work With Me' Core Values Section */}
      <section className="w-full bg-[#1b1b1e] py-20 relative border-t border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12">
          {/* Section Title Header */}
          <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto mb-14">
            <span className="font-mono-code text-xs font-semibold text-[#ff6600] uppercase tracking-widest">
              // THE VALUE PROPOSITION
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#e5e1e6] font-bold tracking-tight">
              Why Work With Me
            </h2>
            <p className="text-sm sm:text-base text-[#e3bfb1]">
              Built on precision, rapid delivery cycles, and elite visual communication. Here is what you receive on every engagement:
            </p>
          </div>

          {/* 7 Cards Mosaic / Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VALUE_PROPOSITIONS.map((val) => (
              <div
                key={val.id}
                className={`p-6 rounded-2xl bg-[#201f22] border border-white/5 hover:border-white/15 hover:bg-[#2a2a2d] transition-all shadow-sm flex flex-col gap-3 group hover:-translate-y-1 ${
                  val.doubleWidth ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#2a2a2d] flex items-center justify-center group-hover:bg-[#ff6600] group-hover:text-white transition-colors border border-white/5">
                  {getValueIcon(val.iconName)}
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00eefc] shrink-0" />
                  <h3 className="font-heading text-base font-bold text-[#e5e1e6]">
                    {val.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#e3bfb1] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Global Location & Direct Connect Hub */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coordinates Container */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono-code text-xs font-semibold text-[#00eefc] uppercase tracking-wider">
              // HEADQUARTERS COORDINATES
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#e5e1e6]">
              Faisalabad to the World
            </h2>
            <p className="text-sm text-[#e3bfb1] leading-relaxed">
              Collaborating asynchronously and in real-time across US, European, Middle-Eastern, and Asian timezones.
            </p>

            {/* Dynamic Map Element */}
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
              <img
                src={PERSONAL_INFO.mapImage}
                alt="Map representing Faisalabad Pakistan"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0e0e11]/90 backdrop-blur-md flex items-center justify-between border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono-code">
                  <MapPin className="w-4 h-4 text-[#ff6600]" />
                  <span className="text-white font-semibold">FAISALABAD // PK (+05:00 UTC)</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono-code text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{faisalabadTime || 'ONLINE'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels Matrix & CTA Hub */}
          <div className="lg:col-span-7 flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-[#201f22] border border-white/10 shadow-2xl">
            <div className="flex flex-col gap-1">
              <span className="font-mono-code text-xs font-semibold text-[#ff6600] uppercase tracking-widest">
                // INSTANT CONNECTION
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">
                Let's Build Something Extraordinary
              </h3>
              <p className="text-xs sm:text-sm text-[#e3bfb1]">
                Reach out through your preferred social channel or initiate a direct chat on WhatsApp for rapid turnaround.
              </p>
            </div>

            {/* Social Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Direct */}
              <a
                className="flex items-center gap-3 p-4 rounded-xl bg-[#2a2a2d] hover:bg-[#ff6600] hover:text-white transition-all group shadow-sm border border-white/5"
                href={PERSONAL_INFO.whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e0e11] flex items-center justify-center text-[#00eefc] group-hover:bg-black/30 group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-bold text-[#e5e1e6] group-hover:text-white">
                    WhatsApp Direct
                  </span>
                  <span className="font-mono-code text-xs text-[#aa8a7d] group-hover:text-white/80">
                    {PERSONAL_INFO.whatsappNumber}
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                className="flex items-center gap-3 p-4 rounded-xl bg-[#2a2a2d] hover:bg-[#ff6600] hover:text-white transition-all group shadow-sm border border-white/5"
                href={PERSONAL_INFO.instagramUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e0e11] flex items-center justify-center text-[#ff6600] group-hover:bg-black/30 group-hover:text-white transition-colors">
                  <Camera className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-bold text-[#e5e1e6] group-hover:text-white">
                    Instagram
                  </span>
                  <span className="font-mono-code text-xs text-[#aa8a7d] group-hover:text-white/80">
                    {PERSONAL_INFO.instagramHandle}
                  </span>
                </div>
              </a>

              {/* TikTok */}
              <a
                className="flex items-center gap-3 p-4 rounded-xl bg-[#2a2a2d] hover:bg-[#ff6600] hover:text-white transition-all group shadow-sm border border-white/5"
                href={PERSONAL_INFO.tiktokUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e0e11] flex items-center justify-center text-[#00eefc] group-hover:bg-black/30 group-hover:text-white transition-colors">
                  <Music className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-bold text-[#e5e1e6] group-hover:text-white">
                    TikTok
                  </span>
                  <span className="font-mono-code text-xs text-[#aa8a7d] group-hover:text-white/80">
                    {PERSONAL_INFO.tiktokHandle}
                  </span>
                </div>
              </a>

              {/* Facebook */}
              <a
                className="flex items-center gap-3 p-4 rounded-xl bg-[#2a2a2d] hover:bg-[#ff6600] hover:text-white transition-all group shadow-sm border border-white/5"
                href={PERSONAL_INFO.facebookUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e0e11] flex items-center justify-center text-[#ffb596] group-hover:bg-black/30 group-hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-bold text-[#e5e1e6] group-hover:text-white">
                    Facebook
                  </span>
                  <span className="font-mono-code text-xs text-[#aa8a7d] group-hover:text-white/80">
                    {PERSONAL_INFO.facebookName}
                  </span>
                </div>
              </a>

              {/* Snapchat */}
              <a
                className="sm:col-span-2 flex items-center gap-3 p-4 rounded-xl bg-[#2a2a2d] hover:bg-[#ff6600] hover:text-white transition-all group shadow-sm border border-white/5"
                href={PERSONAL_INFO.snapchatUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0e0e11] flex items-center justify-center text-[#ffb952] group-hover:bg-black/30 group-hover:text-white transition-colors">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-sm font-bold text-[#e5e1e6] group-hover:text-white">
                    Snapchat Channel
                  </span>
                  <span className="font-mono-code text-xs text-[#aa8a7d] group-hover:text-white/80">
                    {PERSONAL_INFO.snapchatHandle}
                  </span>
                </div>
              </a>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff6600] text-white font-heading font-semibold text-xs shadow-[0_0_24px_rgba(255,102,0,0.45)] hover:shadow-[0_0_36px_rgba(255,102,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Initiate Project Inquiry</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#353438] hover:bg-white/10 text-[#e5e1e6] hover:text-[#ff6600] transition-all font-mono-code text-xs cursor-pointer border border-white/5"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <span>Copy Email: {PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>

              <a
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-transparent hover:bg-white/5 text-[#00eefc] transition-all font-mono-code text-xs border border-[#00eefc]/30"
                href={PERSONAL_INFO.portfolioMirror}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>mrsaqib242.vercel.app</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Switch-Bar to other views */}
      <section className="w-full bg-[#0e0e11] py-8 border-t border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-code text-[#aa8a7d]">Continue Exploring:</span>
            <button
              onClick={onNavigateProjects}
              className="text-xs font-heading font-semibold text-[#ff6600] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>Projects &amp; Portfolio</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <span className="text-white/20">•</span>
            <button
              onClick={onNavigateServices}
              className="text-xs font-heading font-semibold text-[#00eefc] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>Services &amp; Solutions</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-mono-code text-[#aa8a7d] hover:text-white transition-colors cursor-pointer"
          >
            ↑ Back to Top
          </button>
        </div>
      </section>
    </div>
  );
};
