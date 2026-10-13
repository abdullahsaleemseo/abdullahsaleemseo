import { proof } from '@/content/site';
import { Reveal } from './Reveal';

export function Proof() {
  return (
    <section className="relative py-20 sm:py-28 border-t border-graphite-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {proof.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-t border-lime/30 pt-6">
                <p className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-none tracking-tightest text-pearl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-pearl-dim">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
