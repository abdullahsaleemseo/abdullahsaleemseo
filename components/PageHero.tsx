import { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-lime/[0.08] blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-label uppercase text-lime mb-5">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display font-medium text-[clamp(2.1rem,6.5vw,4.4rem)] leading-[1.02] tracking-tightest text-pearl text-balance max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
