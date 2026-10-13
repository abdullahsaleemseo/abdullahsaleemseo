import { workCategories } from '@/content/work';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function WorkPreview() {
  const featured = workCategories.slice(0, 3);

  return (
    <section id="work" className="relative py-24 sm:py-32 border-t border-graphite-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="What the work actually looks like."
          description="No fabricated case studies. This is the work organized honestly by category, with the full breakdown on the Work page."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                <span className="font-mono text-[10px] tracking-label uppercase text-lime">{cat.focus}</span>
                <h3 className="mt-3 font-display text-lg text-pearl tracking-tight">{cat.title}</h3>
                <p className="mt-3 text-sm text-pearl-dim leading-relaxed">{cat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <a
            href="/work/"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm text-lime hover:text-lime-soft transition-colors"
          >
            See the full breakdown <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
