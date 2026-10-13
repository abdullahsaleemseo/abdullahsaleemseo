'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { stack } from '@/content/site';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function LocalSearchStack() {
  const [active, setActive] = useState(0);

  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The Local Search Stack"
          title="One connected system, not three separate services."
          description="Local visibility, organic authority, and AI discovery aren't independent projects. They reinforce each other, and this is how they fit together."
        />

        {/* Desktop: interactive layered panels */}
        <div className="mt-16 hidden lg:flex h-[420px] gap-3" role="tablist" aria-label="The Local Search Stack layers">
          {stack.map((layer, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${layer.id}`}
                id={`tab-${layer.id}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                animate={{ flex: isActive ? 3.2 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border p-8 text-left transition-colors duration-500 ${
                  isActive ? 'border-lime/40 bg-graphite-soft' : 'border-graphite-border bg-graphite/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-lime tracking-label">{layer.index}</span>
                  <span
                    aria-hidden
                    className={`h-2 w-2 rounded-full transition-colors duration-500 ${isActive ? 'bg-lime' : 'bg-pearl-faint'}`}
                  />
                </div>

                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-pearl mb-4 tracking-tight">
                    {layer.name}
                  </h3>

                  <motion.p
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-pearl-dim text-sm leading-relaxed max-w-sm overflow-hidden"
                  >
                    {layer.description}
                  </motion.p>

                  <motion.ul
                    id={`panel-${layer.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${layer.id}`}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: isActive ? 0.15 : 0, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-5 flex flex-col gap-2 overflow-hidden"
                  >
                    {isActive &&
                      layer.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-pearl/90">
                          <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-lime" />
                          {item}
                        </li>
                      ))}
                  </motion.ul>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile / tablet: vertical storytelling */}
        <div className="mt-14 flex flex-col lg:hidden">
          {stack.map((layer, i) => (
            <Reveal key={layer.id} delay={i * 0.05}>
              <div className="relative flex gap-5 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-lime/40 font-mono text-xs text-lime">
                    {layer.index}
                  </span>
                  {i < stack.length - 1 && (
                    <span aria-hidden className="mt-2 w-px flex-1 bg-graphite-border" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-2xl text-pearl tracking-tight">{layer.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-pearl-dim text-balance">
                    {layer.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-pearl/90">
                        <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-lime" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
