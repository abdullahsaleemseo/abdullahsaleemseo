import { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto' : ''}>
      <Reveal>
        <p className="font-mono text-[11px] tracking-label uppercase text-lime mb-4 sm:mb-5">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-medium text-[clamp(1.9rem,5.5vw,3.75rem)] leading-[1.05] tracking-tightest text-pearl text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 sm:mt-6 max-w-xl text-pearl-dim text-[15px] sm:text-base leading-relaxed text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
