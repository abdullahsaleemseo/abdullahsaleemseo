import { finalCta, links } from '@/content/site';
import { MagneticLink } from './MagneticLink';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 sm:py-40 border-t border-graphite-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[900px] -translate-x-1/2 translate-y-1/3 rounded-full bg-lime/10 blur-[150px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center lg:px-10">
        <Reveal>
          <h2 className="font-display font-medium text-[clamp(2.1rem,8vw,5.5rem)] leading-[0.98] tracking-tightest text-pearl text-balance break-words">
            {finalCta.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 text-pearl-dim text-base sm:text-lg">{finalCta.sub}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <MagneticLink href={links.upwork} variant="primary" ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)">
              {finalCta.cta}
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
