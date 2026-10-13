import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata, pageUrl } from '@/lib/seo';
import { jsonLdGraph, serviceSchema } from '@/lib/schema';
import { services, getService } from '@/content/services';
import { links } from '@/content/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { ContentSections } from '@/components/ContentSections';
import { FAQList } from '@/components/FAQList';
import { Reveal } from '@/components/Reveal';
import { MagneticLink } from '@/components/MagneticLink';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.name,
    description: service.shortSummary,
    path: `/services/${service.slug}/`,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter((s) => service.related.includes(s.slug));
  const path = `/services/${service.slug}/`;

  const jsonLd = jsonLdGraph(
    serviceSchema({ name: service.name, description: service.shortSummary, path })
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main">
        <Breadcrumbs
          items={[
            { name: 'Services', path: '/services/' },
            { name: service.name, path },
          ]}
        />
        <PageHero eyebrow={service.pillar} title={service.heroStatement}>
          <MagneticLink href={links.upwork} variant="primary" ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)">
            Hire Me on Upwork
          </MagneticLink>
        </PageHero>

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px] lg:gap-10">
            <div>
              <Reveal>
                <div className="flex flex-col gap-4 max-w-3xl mb-14">
                  {service.intro.map((p, i) => (
                    <p key={i} className="text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <ContentSections sections={service.sections} />

              {service.faqs.length > 0 && (
                <div className="mt-16">
                  <FAQList eyebrow="FAQ" title="Questions worth answering directly" items={service.faqs} defaultOpen={null} />
                </div>
              )}
            </div>

            <aside className="flex flex-col gap-8">
              <Reveal>
                <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                  <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                    What this includes
                  </p>
                  <ul className="flex flex-col gap-3">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-sm text-pearl/90">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {related.length > 0 && (
                <Reveal delay={0.08}>
                  <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                    <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                      Related services
                    </p>
                    <ul className="flex flex-col gap-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <a
                            href={`/services/${r.slug}/`}
                            className="text-sm text-pearl-dim hover:text-lime transition-colors"
                          >
                            {r.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.14}>
                <MagneticLink
                  href={links.upwork}
                  variant="primary"
                  className="w-full justify-center"
                  ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)"
                >
                  Hire Me on Upwork
                </MagneticLink>
              </Reveal>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
