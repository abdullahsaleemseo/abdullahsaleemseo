import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { jsonLdGraph, articleSchema } from '@/lib/schema';
import { articles, getArticle } from '@/content/insights';
import { getService } from '@/content/services';
import { person } from '@/content/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { ContentSections } from '@/components/ContentSections';
import { Reveal } from '@/components/Reveal';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}/`,
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const path = `/insights/${article.slug}/`;
  const related = articles.filter((a) => article.relatedArticles.includes(a.slug));
  const relatedServices = article.relatedServices
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const jsonLd = jsonLdGraph(
    articleSchema({
      title: article.title,
      description: article.description,
      path,
      datePublished: article.datePublished,
    })
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main">
        <Breadcrumbs
          items={[
            { name: 'Insights', path: '/insights/' },
            { name: article.title, path },
          ]}
        />
        <PageHero eyebrow={article.category} title={article.title} description={article.description}>
          <div className="flex items-center gap-3 text-sm text-pearl-faint">
            <span>
              Written by{' '}
              <a href="/about/" className="text-pearl-dim hover:text-lime transition-colors">
                {person.name}
              </a>
            </span>
            <span aria-hidden>·</span>
            <time dateTime={article.datePublished}>
              {new Date(article.datePublished).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </PageHero>

        <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <ContentSections sections={article.sections} />

          {(relatedServices.length > 0 || related.length > 0) && (
            <Reveal>
              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {relatedServices.length > 0 && (
                  <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                    <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                      Related services
                    </p>
                    <ul className="flex flex-col gap-3">
                      {relatedServices.map((s) => (
                        <li key={s.slug}>
                          <a href={`/services/${s.slug}/`} className="text-sm text-pearl-dim hover:text-lime transition-colors">
                            {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {related.length > 0 && (
                  <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                    <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                      Related insights
                    </p>
                    <ul className="flex flex-col gap-3">
                      {related.map((a) => (
                        <li key={a.slug}>
                          <a href={`/insights/${a.slug}/`} className="text-sm text-pearl-dim hover:text-lime transition-colors">
                            {a.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
