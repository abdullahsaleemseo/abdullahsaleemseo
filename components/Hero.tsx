'use client';

import { motion } from 'framer-motion';
import { hero, links } from '@/content/site';
import { HeroPortrait } from './HeroPortrait';
import { MagneticLink } from './MagneticLink';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-lime/10 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[11px] tracking-label uppercase text-lime mb-6"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-pearl text-[clamp(1.05rem,2.6vw,1.5rem)] tracking-tight mb-1.5"
          >
            {hero.nameLine}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-pearl-dim text-sm sm:text-base mb-5"
          >
            {hero.titleLine}
          </motion.p>

          <h1 className="font-display font-medium text-[clamp(1.95rem,9.5vw,6.2rem)] leading-[0.98] tracking-tightest text-pearl break-words">
            <span className="sr-only">
              {hero.nameLine}, {hero.titleLine}.{' '}
            </span>
            {hero.headline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="block overflow-hidden"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-lg text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticLink href={links.upwork} variant="primary" ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)">
              {hero.ctaPrimary}
            </MagneticLink>
            <MagneticLink href="#stack" variant="secondary" external={false} ariaLabel="Explore the Local Search Stack">
              {hero.ctaSecondary}
            </MagneticLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroPortrait />
        </motion.div>
      </div>
    </section>
  );
}
