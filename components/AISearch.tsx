'use client';

import { motion } from 'framer-motion';
import { aiFlow, toolkit } from '@/content/site';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { usePrefersReducedMotion } from '@/lib/hooks';

export function AISearch() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative py-24 sm:py-32 border-t border-graphite-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.06] blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="AI Search Intelligence"
          title="Where does your business appear when Google isn't the one answering?"
          description="AI Overviews, ChatGPT, and Perplexity don't crawl a ranking. They synthesize an answer, and getting recommended means being structured for understanding, not just indexing."
        />

        {/* Flow */}
        <div className="mt-16 flex flex-col gap-0 sm:flex-row sm:items-center sm:justify-between">
          {aiFlow.map((step, i) => (
            <Reveal key={step} delay={i * 0.08} className="flex items-center sm:flex-col sm:text-center">
              <div className="flex items-center gap-4 sm:flex-col sm:gap-3">
                <motion.div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-lime/40 bg-graphite-soft font-mono text-xs text-lime"
                  animate={reduced ? undefined : { boxShadow: ['0 0 0px rgba(198,255,74,0)', '0 0 22px rgba(198,255,74,0.35)', '0 0 0px rgba(198,255,74,0)'] }}
                  transition={reduced ? undefined : { duration: 3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                >
                  0{i + 1}
                </motion.div>
                <span className="font-display text-lg sm:text-xl text-pearl tracking-tight">{step}</span>
              </div>
              {i < aiFlow.length - 1 && (
                <span
                  aria-hidden
                  className="mx-4 hidden h-px flex-1 bg-gradient-to-r from-lime/40 to-graphite-border sm:mx-0 sm:mt-7 sm:block sm:h-px sm:w-full"
                />
              )}
            </Reveal>
          ))}
        </div>

        {/* Toolkit */}
        <Reveal delay={0.2}>
          <div className="mt-20 rounded-2xl border border-graphite-border bg-graphite/50 p-8 sm:p-10">
            <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-5">
              Working Toolkit
            </p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {toolkit.map((tool) => (
                <li key={tool} className="flex items-center gap-2 text-sm text-pearl/90">
                  <span aria-hidden className="h-1 w-1 rounded-full bg-lime" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
