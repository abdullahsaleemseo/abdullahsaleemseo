'use client';

import { useRef, useState, MouseEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';

export function MagneticLink({
  href,
  children,
  className,
  variant = 'primary',
  external = true,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const base =
    variant === 'primary'
      ? 'bg-lime text-obsidian hover:shadow-glow'
      : 'glass text-pearl hover:border-lime/40';

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.4 }}
      className={`group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ease-luxe ${base} ${className ?? ''}`}
    >
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </motion.a>
  );
}
