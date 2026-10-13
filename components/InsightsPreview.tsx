import { articles } from '@/content/insights';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function InsightsPreview() {
  const featured = articles.slice(0, 3);

  return (
    <section className="relative py-24 sm:py-32 border-t border-graphite-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Insights"
          title="A working knowledge base, not a content mill."
          description="Written from direct experience running Local SEO engagements, not assembled from a keyword list."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.06}>
              <a
                href={`/insights/${article.slug}/`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-graphite-border bg-graphite/50 p-6 transition-colors duration-300 hover:border-lime/40 hover:bg-graphite-soft"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-label uppercase text-lime">{article.category}</span>
                  <h3 className="mt-3 font-display text-lg text-pearl tracking-tight group-hover:text-lime transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-pearl-dim leading-relaxed">{article.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <a
            href="/insights/"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm text-lime hover:text-lime-soft transition-colors"
          >
            Browse all insights <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
