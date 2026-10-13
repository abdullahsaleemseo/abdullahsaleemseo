import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { articles, categories } from '@/content/insights';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = buildMetadata({
  title: 'Insights',
  description:
    'A working knowledge base on Local SEO, Google Business Profile, Google Maps, and AI search, written from direct experience rather than recycled checklists.',
  path: '/insights/',
});

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Breadcrumbs items={[{ name: 'Insights', path: '/insights/' }]} />
        <PageHero
          eyebrow="Insights"
          title="A working knowledge base, not a content mill."
          description="Every article here exists because it explains something worth explaining properly, not because a keyword tool suggested the topic."
        />

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-graphite-border pb-6">
              {categories.map((cat) => (
                <span key={cat} className="font-mono text-[11px] tracking-label uppercase text-pearl-faint">
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.05}>
                <a
                  href={`/insights/${article.slug}/`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-graphite-border bg-graphite/50 p-6 transition-colors duration-300 hover:border-lime/40 hover:bg-graphite-soft"
                >
                  <div>
                    <span className="font-mono text-[10px] tracking-label uppercase text-lime">{article.category}</span>
                    <h2 className="mt-3 font-display text-lg text-pearl tracking-tight group-hover:text-lime transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm text-pearl-dim leading-relaxed">{article.description}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-lime">
                    Read <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
