import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Monitor,
  Video,
  Palette,
  Terminal,
  Calculator,
  MessageCircle,
  Clock,
  ShieldCheck,
  Send,
  Globe,
  Brain,
  Search,
  Database,
  Smartphone,
  Check,
  FileCode,
  TrendingUp,
  Zap,
  RotateCcw,
  Flag,
  Share2,
} from 'lucide-react';
import {
  ReactAtomLogo,
  SiFigma,
  SiTailwindcss,
  SiPostgresql,
  SiWhatsapp,
} from './TechLogos';
import { PERSONAL_INFO } from '../data';

interface ServicesSolutionsPageProps {
  onContactClick: () => void;
  onNavigateHome: () => void;
}

type ServiceCategory = 'all' | 'dev' | 'ai' | 'design' | 'growth';

interface ServiceDefinition {
  id: string;
  code: string;
  category: 'dev' | 'ai' | 'design' | 'growth';
  title: string;
  description: string;
  turnaround: string;
  icon: React.ReactNode;
  tags: string[];
  badge?: string;
  whatsappMessage: string;
  accentColor: string;
}

export const ServicesSolutionsPage: React.FC<ServicesSolutionsPageProps> = ({
  onContactClick,
  onNavigateHome,
}) => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');

  // Interactive Project Cost Estimator state
  const [projectTier, setProjectTier] = useState<'starter' | 'professional' | 'enterprise'>('professional');
  const [includeAI, setIncludeAI] = useState(true);
  const [includeBranding, setIncludeBranding] = useState(true);
  const [rushDelivery, setRushDelivery] = useState(false);

  const calculateEstimate = () => {
    let base = projectTier === 'starter' ? 250 : projectTier === 'professional' ? 550 : 1200;
    if (includeAI) base += 200;
    if (includeBranding) base += 150;
    if (rushDelivery) base += 100;
    return base;
  };

  const servicesList: ServiceDefinition[] = [
    {
      id: 'srv-01',
      code: 'SRV-01',
      category: 'dev',
      title: 'Premium Website Development',
      description:
        'Bespoke digital architecture crafted with semantic hygiene, lighthouse scores above 98%, and instantaneous edge load speeds across all modern browsers.',
      turnaround: '4-10 Days',
      icon: <Globe className="w-6 h-6 text-[#ff6600]" />,
      tags: ['HTML5 Semantic', 'Zero-Bloat', 'SSR & Edge'],
      whatsappMessage: "Hello Saqib, I'm interested in Premium Website Development",
      accentColor: '#ff6600',
    },
    {
      id: 'srv-02',
      code: 'SRV-02',
      category: 'dev',
      title: 'Responsive Web Applications',
      description:
        'Adaptive user interfaces built mobile-first with complex touch controls, offline caching capabilities, and fluid dynamic layouts tailored for every screen form factor.',
      turnaround: '2-3 Weeks',
      icon: <Smartphone className="w-6 h-6 text-[#00eefc]" />,
      tags: ['PWA Enabled', 'Touch-Gesture UX', 'Fluid Breakpoints'],
      whatsappMessage: "Hello Saqib, I'm interested in Responsive Web Applications",
      accentColor: '#00eefc',
    },
    {
      id: 'srv-03',
      code: 'SRV-03',
      category: 'ai',
      badge: 'NEURAL-SPEC',
      title: 'AI Integration & Automation',
      description:
        'Autonomous agent pipelines, OpenAI/Anthropic/Gemini model integrations, context-aware customer chatbots, and automated webhook chains that remove manual overhead.',
      turnaround: '5-12 Days',
      icon: <Brain className="w-6 h-6 text-[#ffb952]" />,
      tags: ['Custom GPT & Gemini', 'Vector Embeddings', 'Workflow Nodes'],
      whatsappMessage: "Hello Saqib, I'm interested in AI Integration and Automation",
      accentColor: '#ffb952',
    },
    {
      id: 'srv-04',
      code: 'SRV-04',
      category: 'dev',
      title: 'React.js & Modern JavaScript',
      description:
        'Scalable Single Page Applications (SPAs) with robust state topologies (Zustand/Redux), dynamic routing, reusable design system modules, and memoized rendering.',
      turnaround: '1-3 Weeks',
      icon: <ReactAtomLogo size={24} className="text-[#00d8ff]" />,
      tags: ['React 19', 'TypeScript Core', 'Modular Architecture'],
      whatsappMessage: "Hello Saqib, I'm interested in React.js Development",
      accentColor: '#00d8ff',
    },
    {
      id: 'srv-05',
      code: 'SRV-05',
      category: 'design',
      title: 'UI/UX Design Systems',
      description:
        'Human-centered research transformed into high-fidelity Figma components, interactive micro-prototypes, accessibility audits (WCAG AA), and design handoff specs.',
      turnaround: '5-8 Days',
      icon: <SiFigma className="w-6 h-6 text-[#f24e1e]" />,
      tags: ['Figma Auto-Layout', 'Design Tokens', 'Wireframing'],
      whatsappMessage: "Hello Saqib, I'm interested in UI/UX Design Services",
      accentColor: '#f24e1e',
    },
    {
      id: 'srv-06',
      code: 'SRV-06',
      category: 'dev',
      title: 'Tailwind CSS Architecture',
      description:
        'Pixel-perfect utility-first styling with customized brand configs, fluid typographic clamps, dark-mode switches, and zero unused CSS bundle output.',
      turnaround: '3-6 Days',
      icon: <SiTailwindcss className="w-6 h-6 text-[#38bdf8]" />,
      tags: ['Custom Tokens', 'JIT Optimizer', 'Strict Theme Config'],
      whatsappMessage: "Hello Saqib, I'm interested in Tailwind CSS Styling",
      accentColor: '#38bdf8',
    },
    {
      id: 'srv-07',
      code: 'SRV-07',
      category: 'dev',
      title: 'Database & REST APIs',
      description:
        'Secure backend services with resilient schema designs in PostgreSQL, MongoDB, or Firebase, shielded by JWT authorization and encrypted database transactions.',
      turnaround: '1-2 Weeks',
      icon: <SiPostgresql className="w-6 h-6 text-[#4169e1]" />,
      tags: ['PostgreSQL / Supabase', 'RESTful CRUD', 'JWT Auth'],
      whatsappMessage: "Hello Saqib, I'm interested in Database and API Architecture",
      accentColor: '#4169e1',
    },
    {
      id: 'srv-08',
      code: 'SRV-08',
      category: 'design',
      title: 'Video Editing & Motion',
      description:
        'Dynamic visual storytelling tailored for TikTok, Reels, and YouTube. Includes rhythmic cuts, kinetic typography, Foley sound design, and color grading.',
      turnaround: '24-72 Hours',
      icon: <Video className="w-6 h-6 text-[#ffb952]" />,
      tags: ['Premiere Pro & AE', 'Kinetic Titles', 'Viral Pacing'],
      whatsappMessage: "Hello Saqib, I'm interested in Video Editing and Reels",
      accentColor: '#ffb952',
    },
    {
      id: 'srv-09',
      code: 'SRV-09',
      category: 'design',
      title: 'Graphic Design & Branding',
      description:
        'Uncompromising brand identity guidelines, memorable vector emblems, advertising collateral, 3D social kits, and visual assets built to command industry authority.',
      turnaround: '4-7 Days',
      icon: <Palette className="w-6 h-6 text-[#ffb596]" />,
      tags: ['Identity Systems', 'Vector Precision', 'Asset Packages'],
      whatsappMessage: "Hello Saqib, I'm interested in Branding and Graphic Design",
      accentColor: '#ffb596',
    },
  ];

  const filteredServices =
    activeFilter === 'all'
      ? servicesList
      : servicesList.filter((s) => s.category === activeFilter);

  const filterButtons: { id: ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: 10 },
    { id: 'dev', label: 'Engineering & Code', count: 5 },
    { id: 'ai', label: 'AI & Automation', count: 1 },
    { id: 'design', label: 'Design & Motion', count: 3 },
    { id: 'growth', label: 'SEO & Scale', count: 1 },
  ];

  return (
    <div id="services-page" className="w-full pt-20 bg-[#131316] text-[#e5e1e6] min-h-screen">
      {/* Top Atmospheric Grid Scrim */}
      <section className="relative w-full overflow-hidden bg-[#131316] py-12 md:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(255,102,0,0.18),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(0,238,252,0.12),transparent_50%)]" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col gap-6">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 text-xs font-mono-code text-[#ff6600] hover:text-[#ffb596] transition-colors cursor-pointer group px-3 py-1.5 rounded-lg bg-[#2a2a2d] border border-white/5"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                <span>Return to Main View</span>
              </button>
              <span className="px-3 py-1 rounded-full bg-[#2a2a2d] font-mono-code text-[11px] text-[#ff6600] tracking-widest uppercase border border-white/5">
                CAPABILITIES // 010 MATRIX
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
              <span className="font-mono-code text-xs text-[#aa8a7d]">
                2026 DEPLOYMENT PROTOCOL
              </span>
            </div>
          </div>

          {/* Page Headings with Editorial Asymmetry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mt-4">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#e5e1e6] tracking-tight font-extrabold leading-tight">
                High-Impact Services &amp; <br />
                <span className="text-[#ff6600] drop-shadow-[0_0_24px_rgba(255,102,0,0.35)]">
                  Digital Solutions
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#e3bfb1] max-w-2xl leading-relaxed">
                From modern web apps to AI automation and creative branding — everything you need to scale your digital presence with surgical engineering and cinematic precision.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <div className="p-4 rounded-xl bg-[#1b1b1e] border border-white/5 shadow-md flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono-code text-xs text-[#aa8a7d]">
                    ENGINEERING DISCIPLINE
                  </span>
                  <span className="font-heading text-base font-bold text-[#00eefc]">
                    Full-Stack &amp; Creative
                  </span>
                </div>
                <Brain className="w-7 h-7 text-[#00eefc]" />
              </div>

              <div className="p-4 rounded-xl bg-[#1b1b1e] border border-white/5 shadow-md flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-mono-code text-xs text-[#aa8a7d]">
                    GLOBAL AVAILABILITY
                  </span>
                  <span className="font-heading text-base font-bold text-[#ff6600]">
                    Pakistan &amp; Remote Global
                  </span>
                </div>
                <Globe className="w-7 h-7 text-[#ff6600]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Interactive Capability Dashboard */}
      <section className="w-full bg-[#0e0e11] py-12 relative border-y border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#201f22] p-2 sm:p-2.5 rounded-2xl border border-white/5">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {filterButtons.map((btn) => {
                const isActive = activeFilter === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setActiveFilter(btn.id)}
                    className={`px-3.5 sm:px-4 py-2 min-h-[40px] rounded-xl text-xs font-heading font-medium transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? 'bg-[#ff6600] text-white font-bold shadow-[0_0_15px_rgba(255,102,0,0.4)]'
                        : 'bg-[#2a2a2d] text-[#e3bfb1] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{btn.label}</span>
                    <span
                      className={`text-[10px] font-mono-code px-1.5 py-0.2 rounded-full ${
                        isActive ? 'bg-black/30 text-white' : 'bg-black/20 text-[#aa8a7d]'
                      }`}
                    >
                      {btn.count}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0e0e11] text-[#e3bfb1] border border-white/5 shrink-0">
              <Zap className="w-4 h-4 text-[#00eefc]" />
              <span className="font-mono-code text-xs text-[#00eefc]">
                READY-TO-BUILD // FAST PROTO
              </span>
            </div>
          </div>

          {/* 10 Core Services Grid -> 2 Grid on Mobile, 3 Grid on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 lg:gap-6">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="group p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-[#1b1b1e] hover:bg-[#201f22] border border-white/5 hover:border-[#ff6600]/40 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                <div className="flex flex-col gap-2.5 sm:gap-4">
                  <div className="flex items-start justify-between">
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#2a2a2d] flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform shrink-0">
                      {srv.icon}
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {srv.badge ? (
                        <span className="font-mono-code text-[10px] sm:text-xs text-[#ffb952] font-semibold tracking-wider">
                          {srv.badge}
                        </span>
                      ) : (
                        <span className="font-mono-code text-[9px] sm:text-xs text-[#aa8a7d]">{srv.code}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <h3 className="font-heading text-xs sm:text-base lg:text-lg font-bold text-[#e5e1e6] group-hover:text-[#ff6600] transition-colors line-clamp-2 leading-tight min-h-[2rem] sm:min-h-[2.5rem]">
                      {srv.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#e3bfb1] leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {srv.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5 sm:pt-1">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-[#2a2a2d] font-mono-code text-[9px] sm:text-[11px] text-[#e5e1e6] border border-white/5 truncate max-w-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 sm:mt-6 sm:pt-4 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1 sm:gap-2 bg-[#0e0e11] -mx-3 -mb-3 sm:-mx-5 sm:-mb-5 lg:-mx-6 lg:-mb-6 p-2.5 sm:p-4 border-t border-white/5 rounded-b-xl sm:rounded-b-2xl">
                  <span className="font-mono-code text-[9px] sm:text-xs text-[#00eefc]">
                    {srv.turnaround}
                  </span>
                  <a
                    href={`https://wa.me/923478936242?text=${encodeURIComponent(srv.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white group-hover:text-[#25d366] font-heading text-[10px] sm:text-xs font-semibold transition-colors"
                  >
                    <SiWhatsapp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25d366]" />
                    <span className="hidden xs:inline sm:inline">Book Stack</span>
                    <span className="xs:hidden sm:hidden">Book</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
              </div>
            ))}

            {/* 10. Digital Marketing & SEO (Special Featured Full-Width Card) */}
            {(activeFilter === 'all' || activeFilter === 'growth') && (
              <div className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#1b1b1e] hover:bg-[#201f22] border border-[#00eefc]/30 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden col-span-2 lg:col-span-3">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#2a2a2d] flex items-center justify-center text-[#00eefc] border border-white/5">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono-code text-xs text-[#aa8a7d]">
                          SRV-10 // STRATEGIC SCALE
                        </span>
                        <h3 className="font-heading text-xl font-bold text-[#e5e1e6]">
                          Digital Marketing &amp; Technical SEO Optimization
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#e3bfb1] max-w-3xl leading-relaxed">
                      Comprehensive organic visibility strategies combining technical on-page audits, schema structure generation, core web vitals speed tuning, and Google Analytics 4 tracking loops to guarantee conversion-led ROI.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-[11px] text-[#00eefc] border border-white/5">
                        JSON-LD Schemas
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-[11px] text-[#e5e1e6] border border-white/5">
                        Vitals 100/100
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-[11px] text-[#ff6600] border border-white/5">
                        CRO Funnels
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-[11px] text-[#ffb952] border border-white/5">
                        GA4 &amp; Hotjar
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-3 bg-[#0e0e11] p-5 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-between font-mono-code text-xs text-[#aa8a7d]">
                      <span>AUDIT METRIC</span>
                      <span className="text-[#00eefc]">BENCHMARK</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#e5e1e6]">Lighthouse Speed</span>
                      <span className="font-mono-code text-[#ff6600] font-bold">99 / 100</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-[#e5e1e6]">SERP Indexing</span>
                      <span className="font-mono-code text-[#00eefc] font-bold">&lt; 48 Hours</span>
                    </div>
                    <a
                      href="https://wa.me/923478936242?text=Hello%20Saqib,%20I'm%20interested%20in%20SEO%20and%20Digital%20Marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-2 py-2.5 px-4 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-center font-heading font-semibold text-xs transition-all shadow-[0_0_15px_rgba(255,102,0,0.3)]"
                    >
                      Request Growth Audit
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Editorial Visual Showcase: Engineering In Action */}
      <section className="w-full bg-[#131316] py-16">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono-code text-xs text-[#ff6600] tracking-widest uppercase">
              // THE SAQIB STANDARD
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#e5e1e6] font-bold leading-tight">
              Crafting Experiences That Leave No Room For Average.
            </h2>
            <p className="text-xs sm:text-sm text-[#e3bfb1] leading-relaxed">
              Every deliverable is engineered with obsessive attention to craft. From zero-layout-shift frontends to synchronized brand kits, my process eliminates friction so your product launches ahead of competitors.
            </p>

            {/* Inline Data Visualizer (SVG) */}
            <div className="p-5 rounded-2xl bg-[#1b1b1e] border border-white/5 flex flex-col gap-3 shadow-md mt-2">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold">
                <span className="text-white">Average Project Performance Metric</span>
                <span className="text-[#ff6600] font-mono-code font-bold">99.4%</span>
              </div>

              {/* Clean Inline SVG Bar Chart */}
              <svg className="w-full h-12 text-[#ff6600]" fill="none" viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-[#353438]" height="16" rx="2" width="30" x="0" y="24" />
                <rect className="fill-[#353438]" height="24" rx="2" width="30" x="40" y="16" />
                <rect className="fill-[#353438]" height="32" rx="2" width="30" x="80" y="8" />
                <rect className="fill-[#353438]" height="26" rx="2" width="30" x="120" y="14" />
                <rect className="fill-[#ff6600]" height="36" rx="2" width="30" x="160" y="4" />
                <rect className="fill-[#00eefc]" height="38" rx="2" width="30" x="200" y="2" />
                <rect className="fill-[#ffb596]" height="40" rx="2" width="30" x="240" y="0" />
                <rect className="fill-[#ffb952]" height="34" rx="2" width="20" x="280" y="6" />
              </svg>

              <div className="flex justify-between text-[10px] font-mono-code text-[#aa8a7d]">
                <span>DISCOVERY</span>
                <span>PROTOTYPE</span>
                <span>CODE</span>
                <span>OPTIMIZATION</span>
              </div>
            </div>
          </div>

          {/* Photographic Collage Representing Capabilities */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 group border border-white/5">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="A dark moody high-tech development studio workstation with neon ambient glow in orange and cyan, displaying abstract glowing code on curved ultra-wide monitors"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv_a3ue5BMth-3iCbdqkn-kXJdKFpZHveDteQ95BQNFQSAwvT-B9qUBQ3aDGv6dQ_uk1RweKsvqFwf4oBC7A1IZvOj7Eh53i7ZPiIoj58FOqJVbYmLGvNAXJAsnk8vZX1vkQnrrzBnV5eNE0GJ69bPNhoc_X6YORC61BEWE8Iz5Xz_tqWpofDNj84UQ9pSWXgeeW8VqnI3HRfS8rIOMVCjctdgS27DqAF49lY3leutx5X-4gqyp2Fz"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent flex items-end p-4">
                <span className="font-mono-code text-xs text-[#00eefc] font-semibold">
                  Full-Stack Architecture
                </span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-72 sm:-mt-6 group border border-white/5">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Creative media editing workspace with glowing waveform visualizations, color grading consoles in dark room with amber backlighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpfRVq5UtTqbik3F41fCHPg0AW7N5f63g3NLcyoCNPYOFdsxJwzBkSm6RezMYf0MUimBwbURZOsrP0pbTIfJTateZPNFkW1tSsrjlllf7Mgn0sRCzM45hB_L2NIafa4ZMrBgTtjbBi1q4Ij8-XF12uvtJMzQJRUCKaHKr40UgEkd3adz09rA-b84BvK6mlnvSLEgoaVK1GXa9Fut40myj6Qg3Z6ZNIqSUXzqSNZWNNGDv2eDnfsSdC"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent flex items-end p-4">
                <span className="font-mono-code text-xs text-[#ff6600] font-semibold">
                  Cinematic Motion &amp; 3D
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Process (4-Step Architecture) */}
      <section className="w-full bg-[#0e0e11] py-16 relative border-y border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="font-mono-code text-xs text-[#00eefc] tracking-widest uppercase">
              // PIPELINE EXECUTION
            </span>
            <h2 className="font-heading text-3xl font-bold text-white">
              The 4-Step Engineering Cycle
            </h2>
            <p className="text-xs sm:text-sm text-[#e3bfb1]">
              Predictable milestones with zero ambiguity. Every phase contains rigorous checkpoint reviews to ensure your business objectives are achieved without delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col p-6 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-md relative group hover:bg-[#201f22] transition-all overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 bg-[#0e0e11] -mx-6 -mt-6 p-4 rounded-t-2xl border-b border-white/5">
                <span className="font-mono-code text-xl text-[#ff6600] font-bold">01 //</span>
                <Search className="w-5 h-5 text-[#ff6600]" />
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">
                Discovery &amp; Strategy
              </h3>
              <p className="text-xs text-[#e3bfb1] mb-6 leading-relaxed">
                In-depth alignment on target KPIs, user persona validation, competitor landscape mapping, and architectural blueprinting.
              </p>
              <div className="mt-auto pt-2 flex flex-col gap-1.5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> Scope Definition
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> Tech Stack Selection
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col p-6 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-md relative group hover:bg-[#201f22] transition-all overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 bg-[#0e0e11] -mx-6 -mt-6 p-4 rounded-t-2xl border-b border-white/5">
                <span className="font-mono-code text-xl text-[#00eefc] font-bold">02 //</span>
                <Palette className="w-5 h-5 text-[#00eefc]" />
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">
                UI/UX &amp; Prototyping
              </h3>
              <p className="text-xs text-[#e3bfb1] mb-6 leading-relaxed">
                Translating strategic vision into interactive low-to-high fidelity interactive wireframes, component libraries, and visual guidelines.
              </p>
              <div className="mt-auto pt-2 flex flex-col gap-1.5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> Figma Prototypes
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> User Flow Mapping
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col p-6 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-md relative group hover:bg-[#201f22] transition-all overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 bg-[#0e0e11] -mx-6 -mt-6 p-4 rounded-t-2xl border-b border-white/5">
                <span className="font-mono-code text-xl text-[#ffb952] font-bold">03 //</span>
                <Terminal className="w-5 h-5 text-[#ffb952]" />
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">
                Development &amp; AI
              </h3>
              <p className="text-xs text-[#e3bfb1] mb-6 leading-relaxed">
                Writing performant, modular codebases with modern frameworks, backend endpoint integrations, and AI autonomous agent logic.
              </p>
              <div className="mt-auto pt-2 flex flex-col gap-1.5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> Clean Git Commits
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> API &amp; Model Wiring
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col p-6 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-md relative group hover:bg-[#201f22] transition-all overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 bg-[#0e0e11] -mx-6 -mt-6 p-4 rounded-t-2xl border-b border-white/5">
                <span className="font-mono-code text-xl text-[#ffb596] font-bold">04 //</span>
                <Sparkles className="w-5 h-5 text-[#ffb596]" />
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">
                QA, Launch &amp; Support
              </h3>
              <p className="text-xs text-[#e3bfb1] mb-6 leading-relaxed">
                Rigorous cross-device stress testing, seamless deployment via Vercel edge infrastructure, and dedicated ongoing optimization.
              </p>
              <div className="mt-auto pt-2 flex flex-col gap-1.5 border-t border-white/5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> Vercel / Edge Deploy
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#aa8a7d]">
                  <Check className="w-3 h-3 text-[#00eefc]" /> Post-Launch Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Engagement Models */}
      <section className="w-full bg-[#131316] py-16 md:py-20">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-10">
          <div className="text-center flex flex-col items-center gap-2 max-w-2xl mx-auto">
            <span className="font-mono-code text-xs text-[#ff6600] uppercase tracking-widest">
              // COLLABORATION VECTORS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-bold">
              Transparent Engagement Models
            </h2>
            <p className="text-xs sm:text-sm text-[#e3bfb1]">
              Flexible contractual frameworks calibrated for fast-moving founders, agencies, and enterprise ventures. No surprises or hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Model 1: Project-Based */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-xl flex flex-col justify-between hover:bg-[#201f22] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-xs text-[#00eefc]">
                    FIXED MILESTONE
                  </span>
                  <Flag className="w-5 h-5 text-[#aa8a7d]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Project-Based</h3>
                  <p className="text-xs text-[#e3bfb1] mt-1.5 leading-relaxed">
                    Perfect for well-defined scopes like full website overhauls, custom web apps, or brand identity launches.
                  </p>
                </div>
                <div className="py-3 flex flex-col gap-2.5 border-t border-white/5">
                  {[
                    'Milestone-based deliverable releases',
                    'Full source code & design asset ownership',
                    '30-day post-launch warranty & tweaks',
                    'Structured roadmap with delivery guarantees',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#e5e1e6]">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6600] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/923478936242?text=Hello%20Saqib,%20I'd%20like%20to%20quote%20a%20Fixed%20Project-Based%20Engagement"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#2a2a2d] hover:bg-white/10 text-white text-center font-heading font-semibold text-xs border border-white/5 transition-all mt-6 cursor-pointer"
              >
                Get Scope Assessment
              </a>
            </div>

            {/* Model 2: Dedicated Retainer (Featured) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#201f22] border-2 border-[#ff6600] shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ff6600] text-white px-4 py-1 font-mono-code text-[10px] font-bold rounded-bl-xl shadow-md uppercase">
                MOST POPULAR
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-xs text-[#ff6600]">
                    MONTHLY PARTNER
                  </span>
                  <RotateCcw className="w-5 h-5 text-[#ff6600]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Retainer / Freelance</h3>
                  <p className="text-xs text-[#e3bfb1] mt-1.5 leading-relaxed">
                    Dedicated weekly engineering and creative hours directly embedded in your team Slack or Discord.
                  </p>
                </div>
                <div className="py-3 flex flex-col gap-2.5 border-t border-white/5">
                  {[
                    'Priority sprint backlog allocation',
                    'Daily standup & direct async sync',
                    'Full-stack web + video + graphics combined',
                    'Cancel or pause with 14-day notice',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#e5e1e6]">
                      <CheckCircle2 className="w-4 h-4 text-[#00eefc] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/923478936242?text=Hello%20Saqib,%20I'm%20interested%20in%20a%20Monthly%20Retainer%20Partnership"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white text-center font-heading font-semibold text-xs shadow-[0_0_20px_rgba(255,102,0,0.4)] transition-all mt-6 cursor-pointer"
              >
                Reserve Retainer Slot
              </a>
            </div>

            {/* Model 3: Quick Turnaround Sprint */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1b1b1e] border border-white/5 shadow-xl flex flex-col justify-between hover:bg-[#201f22] transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-md bg-[#2a2a2d] font-mono-code text-xs text-[#ffb952]">
                    RAPID IMPACT
                  </span>
                  <Zap className="w-5 h-5 text-[#ffb952]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Quick Sprints</h3>
                  <p className="text-xs text-[#e3bfb1] mt-1.5 leading-relaxed">
                    Ultra-fast 48 to 72-hour design, code debugging, or video editing sprints to unblock urgent client commitments.
                  </p>
                </div>
                <div className="py-3 flex flex-col gap-2.5 border-t border-white/5">
                  {[
                    'Emergency 48-hr kickoff',
                    'Direct 1-on-1 sprint coordination',
                    'Focused execution on critical bottleneck',
                    'Immediate deployment to staging/production',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#e5e1e6]">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6600] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://wa.me/923478936242?text=Hello%20Saqib,%20I%20need%20an%20Emergency%20Quick%20Sprint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#2a2a2d] hover:bg-white/10 text-white text-center font-heading font-semibold text-xs border border-white/5 transition-all mt-6 cursor-pointer"
              >
                Initiate Rapid Sprint
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Cost Estimator */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 w-full">
        <div className="p-5 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#1b1b1e] to-[#201f22] border border-[#ff6600]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#ff6600]" />
                <span className="font-mono-code text-xs text-[#ff6600] uppercase tracking-wider font-semibold">
                  INTERACTIVE QUOTE ESTIMATOR
                </span>
              </div>

              <h2 className="font-heading text-xl xs:text-2xl sm:text-3xl font-bold text-white">
                Customize Your Project Scope
              </h2>
              <p className="text-xs sm:text-sm text-[#e3bfb1]">
                Configure parameters to get an instant realistic estimate for full design, code delivery, and deployment.
              </p>

              {/* Tier Selection */}
              <div>
                <label className="block text-xs font-mono-code text-[#aa8a7d] mb-2 uppercase">
                  Select Project Scale:
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
                  {[
                    { id: 'starter', label: 'Starter', desc: 'Landing / Portfolio' },
                    { id: 'professional', label: 'Pro Full-Stack', desc: 'Web App & APIs' },
                    { id: 'enterprise', label: 'Enterprise', desc: 'Custom AI Engine' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setProjectTier(t.id as any)}
                      className={`p-3 min-h-[56px] rounded-xl text-left border transition-all cursor-pointer ${
                        projectTier === t.id
                          ? 'bg-[#ff6600]/20 border-[#ff6600] text-white shadow-[0_0_12px_rgba(255,102,0,0.25)]'
                          : 'bg-[#2a2a2d] border-white/5 text-[#e3bfb1] hover:bg-white/5'
                      }`}
                    >
                      <div className="font-bold text-xs">{t.label}</div>
                      <div className="text-[10px] text-[#aa8a7d] mt-0.5">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-code text-[#aa8a7d] uppercase">
                  Add-on Modules:
                </label>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-2.5">
                  <button
                    onClick={() => setIncludeAI(!includeAI)}
                    className={`w-full sm:w-auto px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs font-mono-code border transition-all flex items-center justify-start gap-2 cursor-pointer ${
                      includeAI
                        ? 'bg-[#00eefc]/20 border-[#00eefc] text-[#00eefc]'
                        : 'bg-[#2a2a2d] border-white/5 text-[#aa8a7d]'
                    }`}
                  >
                    <span>{includeAI ? '✓' : '+'}</span>
                    <span>AI Model Integration (+$200)</span>
                  </button>

                  <button
                    onClick={() => setIncludeBranding(!includeBranding)}
                    className={`w-full sm:w-auto px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs font-mono-code border transition-all flex items-center justify-start gap-2 cursor-pointer ${
                      includeBranding
                        ? 'bg-[#ffb952]/20 border-[#ffb952] text-[#ffb952]'
                        : 'bg-[#2a2a2d] border-white/5 text-[#aa8a7d]'
                    }`}
                  >
                    <span>{includeBranding ? '✓' : '+'}</span>
                    <span>Branding &amp; Visual Identity (+$150)</span>
                  </button>

                  <button
                    onClick={() => setRushDelivery(!rushDelivery)}
                    className={`w-full sm:w-auto px-3.5 py-2.5 min-h-[44px] rounded-xl text-xs font-mono-code border transition-all flex items-center justify-start gap-2 cursor-pointer ${
                      rushDelivery
                        ? 'bg-[#ff6600]/20 border-[#ff6600] text-[#ff6600]'
                        : 'bg-[#2a2a2d] border-white/5 text-[#aa8a7d]'
                    }`}
                  >
                    <span>{rushDelivery ? '✓' : '+'}</span>
                    <span>Rush Turnaround (+$100)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Estimated Quote Card */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#0e0e11] border border-white/10 flex flex-col justify-between gap-5 sm:gap-6 shadow-xl">
              <div>
                <span className="font-mono-code text-xs text-[#aa8a7d] uppercase tracking-wider">
                  ESTIMATED INVESTMENT
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-heading text-3xl xs:text-4xl sm:text-5xl font-extrabold text-[#ff6600]">
                    ${calculateEstimate()}
                  </span>
                  <span className="text-xs text-[#aa8a7d]">USD (Est.)</span>
                </div>
                <p className="text-xs text-[#e3bfb1] mt-2">
                  Includes full source code, lifetime deployment assistance, and 30-day post-launch warranty.
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <a
                  href={`https://wa.me/923478936242?text=Hello%20Muhammad%20Saqib!%20I%20used%20your%20portfolio%20estimator%20for%20a%20${projectTier}%20tier%20project%20(Estimated%20$${calculateEstimate()}).%20Let's%20discuss!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#ff6600] hover:bg-[#e65c00] text-white font-heading font-semibold text-xs shadow-[0_0_20px_rgba(255,102,0,0.4)] transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Lock in Quote on WhatsApp</span>
                </a>

                <button
                  onClick={onContactClick}
                  className="w-full min-h-[46px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2a2a2d] hover:bg-white/10 text-[#e5e1e6] font-heading font-semibold text-xs border border-white/5 transition-colors cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4 text-[#ffb596]" />
                  <span>Send Formal Inquiry</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Guarantee & Tech Cloud Strip */}
      <section className="w-full bg-[#0e0e11] py-8 border-y border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2a2a2d] flex items-center justify-center text-[#00eefc] shrink-0 border border-white/5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold text-white">
                100% Quality &amp; Clean Code Guarantee
              </h4>
              <p className="text-xs text-[#e3bfb1]">
                Validated by modern linting standards, semantic HTML, and zero technical debt.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['REACT', 'NEXT.JS', 'TAILWIND', 'NODE', 'OPENAI', 'FIGMA', 'TYPESCRIPT', 'VERCEL'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#1b1b1e] font-mono-code text-[11px] text-[#aa8a7d] border border-white/5"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="w-full bg-[#131316] py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="p-8 md:p-12 rounded-2xl bg-[#201f22] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Ambient Radial Glow in Banner */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#ff6600]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#00eefc]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-3 max-w-xl text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-[#2a2a2d] border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
                <span className="font-mono-code text-[11px] text-[#00eefc]">
                  ACTIVE PROTOCOL: ACCEPTING CLIENTS
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
                Ready to start your project? Let's discuss your scope.
              </h2>
              <p className="text-xs sm:text-sm text-[#e3bfb1]">
                Connect directly with Muhammad Saqib via WhatsApp for immediate response or submit your project requirements via our brief form.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full lg:w-auto">
              {/* WhatsApp Direct Link */}
              <a
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#ff6600] text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(255,102,0,0.45)] hover:shadow-[0_0_36px_rgba(255,102,0,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                href="https://wa.me/923478936242?text=Hello%20Saqib,%20I'm%20ready%20to%20discuss%20a%20project"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp (+92 347 8936242)</span>
              </a>

              {/* Project Inquiry Form Route */}
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#2a2a2d] hover:bg-white/10 text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 border border-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#ffb596]" />
                <span>Submit Scope Brief</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
