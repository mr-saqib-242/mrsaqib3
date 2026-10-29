import React from 'react';
import { Sparkles } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiPostgresql,
  SiFastapi,
  SiGithub,
  SiVite,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiDocker,
  SiPrisma,
  SiGit,
  SiVercel,
  SiGraphql,
  SiFirebase,
  SiSupabase,
  SiRedux,
  SiExpress,
  SiStripe,
  SiWhatsapp,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiSnapchat,
} from 'react-icons/si';

export {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiFigma,
  SiPostgresql,
  SiFastapi,
  SiGithub,
  SiVite,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiDocker,
  SiPrisma,
  SiGit,
  SiVercel,
  SiGraphql,
  SiFirebase,
  SiSupabase,
  SiRedux,
  SiExpress,
  SiStripe,
  SiWhatsapp,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiSnapchat,
};

export const ReactAtomLogo: React.FC<{ className?: string; size?: number }> = ({
  className = "w-6 h-6 text-[#00d8ff]",
  size = 24,
}) => {
  return (
    <SiReact
      size={size}
      className={`${className} animate-[spin_12s_linear_infinite] drop-shadow-[0_0_12px_rgba(0,216,255,0.6)]`}
    />
  );
};

export interface TechMeta {
  name: string;
  icon: React.ReactNode;
  brandColor: string;
  bgColor: string;
  borderColor: string;
}

export function getTechMeta(tag: string, size = 14): TechMeta {
  const t = tag.toLowerCase().trim();

  if (t.includes('react')) {
    return {
      name: tag,
      icon: <SiReact size={size} className="text-[#00d8ff] animate-[spin_10s_linear_infinite]" />,
      brandColor: 'text-[#00d8ff]',
      bgColor: 'bg-[#00d8ff]/10',
      borderColor: 'border-[#00d8ff]/30 hover:border-[#00d8ff]',
    };
  }
  if (t.includes('next')) {
    return {
      name: tag,
      icon: <SiNextdotjs size={size} className="text-white" />,
      brandColor: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/20 hover:border-white',
    };
  }
  if (t.includes('typescript')) {
    return {
      name: tag,
      icon: <SiTypescript size={size} className="text-[#3178c6]" />,
      brandColor: 'text-[#3178c6]',
      bgColor: 'bg-[#3178c6]/10',
      borderColor: 'border-[#3178c6]/30 hover:border-[#3178c6]',
    };
  }
  if (t.includes('javascript') || t.includes('js') && !t.includes('next')) {
    return {
      name: tag,
      icon: <SiJavascript size={size} className="text-[#f7df1e]" />,
      brandColor: 'text-[#f7df1e]',
      bgColor: 'bg-[#f7df1e]/10',
      borderColor: 'border-[#f7df1e]/30 hover:border-[#f7df1e]',
    };
  }
  if (t.includes('tailwind')) {
    return {
      name: tag,
      icon: <SiTailwindcss size={size} className="text-[#38bdf8]" />,
      brandColor: 'text-[#38bdf8]',
      bgColor: 'bg-[#38bdf8]/10',
      borderColor: 'border-[#38bdf8]/30 hover:border-[#38bdf8]',
    };
  }
  if (t.includes('node')) {
    return {
      name: tag,
      icon: <SiNodedotjs size={size} className="text-[#5fa04e]" />,
      brandColor: 'text-[#5fa04e]',
      bgColor: 'bg-[#5fa04e]/10',
      borderColor: 'border-[#5fa04e]/30 hover:border-[#5fa04e]',
    };
  }
  if (t.includes('express')) {
    return {
      name: tag,
      icon: <SiExpress size={size} className="text-gray-300" />,
      brandColor: 'text-gray-300',
      bgColor: 'bg-white/5',
      borderColor: 'border-white/20 hover:border-white',
    };
  }
  if (t.includes('python')) {
    return {
      name: tag,
      icon: <SiPython size={size} className="text-[#3776ab]" />,
      brandColor: 'text-[#ffde57]',
      bgColor: 'bg-[#3776ab]/15',
      borderColor: 'border-[#3776ab]/30 hover:border-[#ffde57]',
    };
  }
  if (t.includes('fastapi')) {
    return {
      name: tag,
      icon: <SiFastapi size={size} className="text-[#05998b]" />,
      brandColor: 'text-[#05998b]',
      bgColor: 'bg-[#05998b]/10',
      borderColor: 'border-[#05998b]/30 hover:border-[#05998b]',
    };
  }
  if (t.includes('postgres') || t.includes('sql') || t.includes('database')) {
    return {
      name: tag,
      icon: <SiPostgresql size={size} className="text-[#4169e1]" />,
      brandColor: 'text-[#4169e1]',
      bgColor: 'bg-[#4169e1]/10',
      borderColor: 'border-[#4169e1]/30 hover:border-[#4169e1]',
    };
  }
  if (t.includes('mongo')) {
    return {
      name: tag,
      icon: <SiMongodb size={size} className="text-[#47a248]" />,
      brandColor: 'text-[#47a248]',
      bgColor: 'bg-[#47a248]/10',
      borderColor: 'border-[#47a248]/30 hover:border-[#47a248]',
    };
  }
  if (t.includes('ai') || t.includes('gpt') || t.includes('llm') || t.includes('neural') || t.includes('openai')) {
    return {
      name: tag,
      icon: <Sparkles size={size} className="text-[#10a37f]" />,
      brandColor: 'text-[#10a37f]',
      bgColor: 'bg-[#10a37f]/10',
      borderColor: 'border-[#10a37f]/30 hover:border-[#10a37f]',
    };
  }
  if (t.includes('figma') || t.includes('design') || t.includes('ui/ux')) {
    return {
      name: tag,
      icon: <SiFigma size={size} className="text-[#f24e1e]" />,
      brandColor: 'text-[#f24e1e]',
      bgColor: 'bg-[#f24e1e]/10',
      borderColor: 'border-[#f24e1e]/30 hover:border-[#f24e1e]',
    };
  }
  if (t.includes('docker')) {
    return {
      name: tag,
      icon: <SiDocker size={size} className="text-[#2496ed]" />,
      brandColor: 'text-[#2496ed]',
      bgColor: 'bg-[#2496ed]/10',
      borderColor: 'border-[#2496ed]/30 hover:border-[#2496ed]',
    };
  }
  if (t.includes('prisma')) {
    return {
      name: tag,
      icon: <SiPrisma size={size} className="text-[#2d3748]" />,
      brandColor: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/20 hover:border-white',
    };
  }
  if (t.includes('stripe')) {
    return {
      name: tag,
      icon: <SiStripe size={size} className="text-[#635bff]" />,
      brandColor: 'text-[#635bff]',
      bgColor: 'bg-[#635bff]/10',
      borderColor: 'border-[#635bff]/30 hover:border-[#635bff]',
    };
  }
  if (t.includes('firebase')) {
    return {
      name: tag,
      icon: <SiFirebase size={size} className="text-[#ffca28]" />,
      brandColor: 'text-[#ffca28]',
      bgColor: 'bg-[#ffca28]/10',
      borderColor: 'border-[#ffca28]/30 hover:border-[#ffca28]',
    };
  }
  if (t.includes('supabase')) {
    return {
      name: tag,
      icon: <SiSupabase size={size} className="text-[#3ecf8e]" />,
      brandColor: 'text-[#3ecf8e]',
      bgColor: 'bg-[#3ecf8e]/10',
      borderColor: 'border-[#3ecf8e]/30 hover:border-[#3ecf8e]',
    };
  }
  if (t.includes('redux')) {
    return {
      name: tag,
      icon: <SiRedux size={size} className="text-[#764abc]" />,
      brandColor: 'text-[#764abc]',
      bgColor: 'bg-[#764abc]/10',
      borderColor: 'border-[#764abc]/30 hover:border-[#764abc]',
    };
  }
  if (t.includes('git') || t.includes('github')) {
    return {
      name: tag,
      icon: <SiGithub size={size} className="text-gray-200" />,
      brandColor: 'text-gray-200',
      bgColor: 'bg-white/5',
      borderColor: 'border-white/20 hover:border-white',
    };
  }
  if (t.includes('vercel')) {
    return {
      name: tag,
      icon: <SiVercel size={size} className="text-white" />,
      brandColor: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/20 hover:border-white',
    };
  }
  if (t.includes('vite')) {
    return {
      name: tag,
      icon: <SiVite size={size} className="text-[#bd34fe]" />,
      brandColor: 'text-[#bd34fe]',
      bgColor: 'bg-[#bd34fe]/10',
      borderColor: 'border-[#bd34fe]/30 hover:border-[#bd34fe]',
    };
  }
  if (t.includes('html')) {
    return {
      name: tag,
      icon: <SiHtml5 size={size} className="text-[#e34f26]" />,
      brandColor: 'text-[#e34f26]',
      bgColor: 'bg-[#e34f26]/10',
      borderColor: 'border-[#e34f26]/30 hover:border-[#e34f26]',
    };
  }
  if (t.includes('css')) {
    return {
      name: tag,
      icon: <SiCss size={size} className="text-[#1572b6]" />,
      brandColor: 'text-[#1572b6]',
      bgColor: 'bg-[#1572b6]/10',
      borderColor: 'border-[#1572b6]/30 hover:border-[#1572b6]',
    };
  }
  if (t.includes('graphql')) {
    return {
      name: tag,
      icon: <SiGraphql size={size} className="text-[#e10098]" />,
      brandColor: 'text-[#e10098]',
      bgColor: 'bg-[#e10098]/10',
      borderColor: 'border-[#e10098]/30 hover:border-[#e10098]',
    };
  }

  // Fallback default
  return {
    name: tag,
    icon: <SiReact size={size} className="text-[#ff6600]" />,
    brandColor: 'text-[#e5e1e6]',
    bgColor: 'bg-[#2a2a2d]',
    borderColor: 'border-white/5 hover:border-[#ff6600]/40',
  };
}

export const RealTechBadge: React.FC<{
  tag: string;
  size?: 'xs' | 'sm';
  showIcon?: boolean;
}> = ({ tag, size = 'xs', showIcon = true }) => {
  const meta = getTechMeta(tag, size === 'xs' ? 12 : 14);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md font-mono-code transition-all duration-200 border ${
        size === 'xs' ? 'text-[11px]' : 'text-xs px-2.5 py-1'
      } ${meta.bgColor} ${meta.borderColor} ${meta.brandColor} shadow-sm group`}
    >
      {showIcon && <span className="shrink-0">{meta.icon}</span>}
      <span className="font-medium whitespace-nowrap">{tag}</span>
    </span>
  );
};
