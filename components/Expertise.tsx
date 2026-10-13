'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { expertise } from '@/content/site';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Expertise() {
  const [active, setActive] = useState(0);
  const current = expertise[active];

  return (
    <section id="expertise" className="relative py-24 sm:py-32 border-t border-graphite-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Expertise"
          title="Five disciplines. One outcome: found first."
          description="Each service reinforces the others. Select one to see what it actually includes."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* List */}
          <div className="flex flex-col border-t border-graphite-border">
            {expertise.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-expanded={active === i}
                className="group flex items-center justify-between gap-4 border-b border-graphite-border py-5 text-left transition-colors duration-300"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-pearl-faint">
                    0{i + 1}
                  </span>
                  <span
                    className={`font-display text-xl sm:text-2xl tracking-tight transition-colors duration-300 ${
                      active === i ? 'text-lime' : 'text-pearl group-hover:text-pearl/80'
                    }`}
                  >
                    {item.name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`shrink-0 text-lg transition-transform duration-300 ${active === i ? 'rotate-45 text-lime' : 'text-pearl-faint'}`}
                >
                  +
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="relative min-h-[280px] rounded-2xl border border-graphite-border bg-graphite/60 p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-pearl-dim text-base leading-relaxed text-balance">
                  {current.summary}
                </p>
                <ul className="mt-7 flex flex-col gap-3.5">
                  {current.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-[15px] text-pearl/90">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime" />
                      {cap}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/services/${current.slug}/`}
                  className="mt-7 inline-flex w-fit items-center gap-2 text-sm text-lime hover:text-lime-soft transition-colors"
                >
                  Full service details <span aria-hidden>↗</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <a
              href="/services/"
              className="inline-flex w-fit items-center gap-2 text-sm text-pearl-dim hover:text-pearl transition-colors"
            >
              View all services <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
