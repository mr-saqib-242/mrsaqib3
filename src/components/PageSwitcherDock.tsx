import React from 'react';
import { Home, User, Layers, Briefcase, Mail, Sparkles } from 'lucide-react';
import { PageId } from '../types';

interface PageSwitcherDockProps {
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const PageSwitcherDock: React.FC<PageSwitcherDockProps> = ({
  currentPage,
  onNavigate,
}) => {
  const pages: { id: PageId; label: string; shortLabel: string; icon: React.ReactNode; isNew?: boolean }[] = [
    {
      id: 'home',
      label: 'Home',
      shortLabel: 'Home',
      icon: <Home className="w-4 h-4" />,
    },
    {
      id: 'about-and-skills',
      label: 'About & Skills',
      shortLabel: 'About',
      icon: <User className="w-4 h-4" />,
      isNew: true,
    },
    {
      id: 'services-and-solutions',
      label: 'Services & Solutions',
      shortLabel: 'Services',
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: 'projects-and-portfolio',
      label: 'Projects & Portfolio',
      shortLabel: 'Projects',
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 'contact',
      label: 'Contact',
      shortLabel: 'Contact',
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <div
      id="floating-page-dock"
      className="fixed bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100vw-16px)] max-w-[420px] sm:w-auto sm:max-w-fit pointer-events-auto"
    >
      <div className="flex items-center justify-between sm:justify-start gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-[#0e0e11]/95 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
        {pages.map((page) => {
          const isActive = currentPage === page.id;
          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={`relative flex-1 sm:flex-initial min-h-[44px] px-1 xs:px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-heading font-medium transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-2 cursor-pointer active:scale-95 ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff6600] to-[#ff771a] text-white font-bold shadow-[0_0_20px_rgba(255,102,0,0.45)]'
                  : 'text-[#aa8a7d] hover:text-[#e5e1e6] hover:bg-white/5'
              }`}
              title={page.label}
              aria-label={page.label}
            >
              <div className="relative flex items-center justify-center">
                <span className={isActive ? 'text-white' : 'text-[#aa8a7d]'}>
                  {page.icon}
                </span>

                {/* Mobile subtle notification indicator for new page */}
                {page.isNew && (
                  <span className="sm:hidden absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00eefc] shadow-[0_0_8px_#00eefc]" />
                )}
              </div>

              {/* Text label */}
              <span className="hidden sm:inline whitespace-nowrap text-xs">{page.label}</span>
              <span className={`sm:hidden text-[10px] leading-tight font-medium tracking-tight ${isActive ? 'text-white font-semibold' : 'text-[#aa8a7d]'}`}>
                {page.shortLabel}
              </span>

              {/* Desktop NEW badge */}
              {page.isNew && (
                <span
                  className={`hidden sm:inline text-[9px] font-mono-code px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider ${
                    isActive
                      ? 'bg-black/40 text-white'
                      : 'bg-[#00eefc]/20 text-[#00eefc] border border-[#00eefc]/30'
                  }`}
                >
                  NEW
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
