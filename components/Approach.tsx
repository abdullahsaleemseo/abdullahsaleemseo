import { approach } from '@/content/site';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Approach() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-graphite-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The Approach"
          title="Every engagement follows the same discipline."
          description="The same discipline applies to every engagement, from the first audit to ongoing measurement. See how it plays out in practice on the Work page."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08}>
              <div className="relative pl-6 border-l border-graphite-border h-full">
                <span className="font-mono text-xs text-lime tracking-label">{step.index}</span>
                <h3 className="mt-4 font-display text-xl sm:text-2xl text-pearl tracking-tight">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pearl-dim text-balance">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
