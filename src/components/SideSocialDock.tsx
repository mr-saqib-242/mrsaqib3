import React, { useState } from 'react';
import { Mail, Check, MessageCircle, Instagram, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const SideSocialDock: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <aside
      id="side-social-dock"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5 py-4 px-2.5 rounded-full border border-white/10 bg-[#1b1b1e]/90 backdrop-blur-md text-[#aa8a7d] shadow-2xl"
    >
      {/* WhatsApp */}
      <a
        id="dock-whatsapp"
        aria-label="WhatsApp"
        className="hover:text-[#00eefc] hover:scale-110 transition-all p-1 group relative"
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0e0e11] text-[11px] font-mono-code text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-lg">
          WhatsApp Direct
        </span>
      </a>

      {/* Instagram */}
      <a
        id="dock-instagram"
        aria-label="Instagram"
        className="hover:text-[#ff6600] hover:scale-110 transition-all p-1 group relative"
        href={PERSONAL_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <Instagram className="w-4 h-4" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0e0e11] text-[11px] font-mono-code text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-lg">
          Instagram {PERSONAL_INFO.instagramHandle}
        </span>
      </a>

      {/* GitHub */}
      <a
        id="dock-github"
        aria-label="GitHub"
        className="hover:text-white hover:scale-110 transition-all p-1 group relative"
        href={PERSONAL_INFO.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <Terminal className="w-4 h-4" />
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0e0e11] text-[11px] font-mono-code text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-lg">
          GitHub
        </span>
      </a>

      {/* Email / Copy */}
      <button
        id="dock-email-copy"
        onClick={handleCopyEmail}
        aria-label="Copy Email Address"
        className="hover:text-[#ff6600] hover:scale-110 transition-all p-1 group relative cursor-pointer"
        title={copied ? "Copied!" : "Copy Email"}
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-400" />
        ) : (
          <Mail className="w-4 h-4" />
        )}
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-[#0e0e11] text-[11px] font-mono-code text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-lg">
          {copied ? 'Copied to Clipboard!' : PERSONAL_INFO.email}
        </span>
      </button>
    </aside>
  );
};
