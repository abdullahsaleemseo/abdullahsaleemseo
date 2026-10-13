'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function FAQList({
  eyebrow = 'FAQ',
  title = 'Common questions, answered directly.',
  items,
  defaultOpen = 0,
}: {
  eyebrow?: string;
  title?: string;
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  if (!items.length) return null;

  return (
    <div>
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="mt-14 flex flex-col">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <div className="border-b border-graphite-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl text-pearl tracking-tight text-balance">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-xl text-lime transition-transform duration-300 ease-luxe ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-2xl text-[15px] leading-relaxed text-pearl-dim text-balance">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
