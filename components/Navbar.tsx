'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { person, nav, links } from '@/content/site';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pt-4 sm:pt-5">
        {/* Same max-width and horizontal padding as every page section below,
            so the logo and Hire Me edges line up exactly with the content. */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <nav
            aria-label="Primary"
            className={`flex w-full items-center justify-between rounded-full px-4 sm:px-5 py-2.5 transition-all duration-500 ease-luxe ${
              scrolled ? 'glass shadow-card' : 'bg-transparent border border-transparent'
            }`}
          >
            <a
              href="/"
              className="flex min-w-0 items-center gap-2.5 font-display text-pearl text-[15px] tracking-tight"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime text-obsidian font-semibold text-sm">
                {person.initial}
              </span>
              <span className="hidden truncate sm:inline">{person.name}</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[13px] tracking-wide text-pearl-dim hover:text-pearl transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-[13px] font-medium text-obsidian transition-transform duration-300 ease-luxe hover:-translate-y-0.5"
              >
                Hire Me <span aria-hidden>↗</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? 'Close menu' : 'Open menu'}
                className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-pearl"
              >
                <div className="relative h-3.5 w-4">
                  <span
                    className={`absolute left-0 top-0 h-[1.5px] w-full bg-pearl transition-transform duration-300 ease-luxe ${open ? 'translate-y-[6.5px] rotate-45' : ''}`}
                  />
                  <span
                    className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-pearl transition-transform duration-300 ease-luxe ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 font-display text-[clamp(2rem,10vw,3rem)] text-pearl border-b border-graphite-border"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                href={links.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-medium text-obsidian"
              >
                Hire Me on Upwork <span aria-hidden>↗</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
