import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100));
      setShowScrollTop(latest > 0.12);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Ambient Glow Scroll Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
        <motion.div
          style={{ scaleX }}
          className="h-full bg-gradient-to-r from-[#ff6600] via-[#ffb596] to-[#00eefc] origin-left shadow-[0_0_12px_rgba(255,102,0,0.8)]"
        />
      </div>

      {/* Floating Scroll-to-Top with Circular Progress Ring */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          y: showScrollTop ? 0 : 20,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        transition={{ duration: 0.25 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1b1b1e]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#e5e1e6] hover:text-[#ff6600] hover:border-[#ff6600]/50 shadow-2xl transition-all cursor-pointer group active:scale-95 hover:scale-105"
      >
        {/* SVG Circular Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-white/10"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="24"
            cy="24"
            r="20"
            className="stroke-[#ff6600] transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={2 * Math.PI * 20}
            strokeDashoffset={2 * Math.PI * 20 * (1 - scrollPercent / 100)}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />

        {/* Hover percentage tooltip */}
        <span className="absolute -top-8 px-2 py-0.5 rounded bg-[#0e0e11] border border-white/10 text-[10px] font-mono-code text-[#ffb596] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          {scrollPercent}%
        </span>
      </motion.button>
    </>
  );
};
