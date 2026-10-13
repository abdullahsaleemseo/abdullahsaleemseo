'use client';

import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/hooks';

export function HeroPortrait() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px]">
      {/* Ambient theme-color glow behind the cutout, ties it into the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-full bg-lime/[0.12] blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-obsidian-raised/40 blur-[60px]"
      />

      {/* Search intelligence rings, visible around the figure since there is no frame */}
      <svg
        aria-hidden
        viewBox="0 0 500 500"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
      >
        <motion.circle
          cx="250"
          cy="250"
          r="210"
          fill="none"
          stroke="rgba(198,255,74,0.14)"
          strokeWidth="1"
          strokeDasharray="2 7"
          initial={false}
          animate={reduced ? undefined : { rotate: 360 }}
          transition={reduced ? undefined : { duration: 90, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '250px 250px' }}
        />
        <circle cx="250" cy="250" r="248" fill="none" stroke="rgba(244,242,236,0.05)" strokeWidth="1" />
        <circle cx="250" cy="40" r="4" fill="#08090A" stroke="#C6FF4A" strokeWidth="1.5" />
        <circle cx="460" cy="250" r="4" fill="#08090A" stroke="#C6FF4A" strokeWidth="1.5" />
        <circle cx="250" cy="460" r="4" fill="#08090A" stroke="#C6FF4A" strokeWidth="1.5" />
        <circle cx="40" cy="250" r="4" fill="#08090A" stroke="#C6FF4A" strokeWidth="1.5" />
      </svg>

      {/* The cutout portrait itself: no box, no border, just the figure with a
          lime rim-glow and a dark contact shadow so it reads as part of the scene. */}
      <div className="relative aspect-square w-full">
        <img
          src="/images/abdullah-saleem-portrait.9ae6111b4a.png"
          alt="Abdullah Saleem, Local SEO strategist"
          className="relative z-10 h-full w-full object-contain object-bottom mask-fade-b"
          style={{
            filter:
              'drop-shadow(0 0 40px rgba(198,255,74,0.28)) drop-shadow(0 0 90px rgba(198,255,74,0.14)) drop-shadow(0 30px 40px rgba(0,0,0,0.55)) saturate(0.9) contrast(1.06) brightness(0.97)',
          }}
          width={1254}
          height={1254}
        />
        {/* Fine grain directly over the figure, matching the rest of the site */}
        <div
          aria-hidden
          className="absolute inset-0 z-20 bg-grain opacity-[0.05] mix-blend-overlay mask-fade-b"
        />
      </div>

      <div className="relative z-20 mx-auto -mt-2 w-fit whitespace-nowrap rounded-full border border-graphite-border bg-obsidian/80 px-4 py-1.5 backdrop-blur-sm">
        <span className="font-mono text-[10px] tracking-label uppercase text-pearl-dim">Lahore, Pakistan</span>
      </div>
    </div>
  );
}
