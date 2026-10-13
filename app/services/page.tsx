import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { services } from '@/content/services';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { MagneticLink } from '@/components/MagneticLink';
import { links } from '@/content/site';

export const metadata: Metadata = buildMetadata({
  title: 'Local SEO Services',
  description:
    'Local SEO, Google Business Profile optimization, Google Maps SEO, citation building, technical local SEO, and AI search optimization, presented as one connected system rather than a menu of add-ons.',
  path: '/services/',
});

const pillars: { name: string; index: string; description: string }[] = [
  {
    index: '01',
    name: 'Local Discovery',
    description: 'Where a business gets found first: the Map Pack, the profile, the trust signals underneath it.',
  },
  {
    index: '02',
    name: 'Organic Authority',
    description: 'The foundation underneath the map pin: audits, strategy, and a technically sound website.',
  },
  {
    index: '03',
    name: 'AI Discovery',
    description: 'Where search is heading: structuring information so generative engines understand and recommend the business.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Breadcrumbs items={[{ name: 'Services', path: '/services/' }]} />
        <PageHero
          eyebrow="Services"
          title="One connected system, presented as seven specific services."
          description="Each service below solves a specific, real problem. None of them work in isolation, which is why every page links to the services it actually depends on."
        />

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          {pillars.map((pillar) => {
            const pillarServices = services.filter((s) => s.pillar === pillar.name);
            return (
              <div key={pillar.name} className="mb-16 last:mb-0">
                <Reveal>
                  <div className="flex items-baseline gap-4 border-b border-graphite-border pb-5">
                    <span className="font-mono text-xs text-lime tracking-label">{pillar.index}</span>
                    <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight">{pillar.name}</h2>
                  </div>
                  <p className="mt-4 max-w-xl text-sm text-pearl-dim leading-relaxed">{pillar.description}</p>
                </Reveal>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pillarServices.map((service, i) => (
                    <Reveal key={service.slug} delay={i * 0.05}>
                      <a
                        href={`/services/${service.slug}/`}
                        className="group flex h-full flex-col justify-between rounded-2xl border border-graphite-border bg-graphite/50 p-6 transition-colors duration-300 hover:border-lime/40 hover:bg-graphite-soft"
                      >
                        <div>
                          <h3 className="font-display text-lg text-pearl tracking-tight group-hover:text-lime transition-colors">
                            {service.name}
                          </h3>
                          <p className="mt-3 text-sm text-pearl-dim leading-relaxed">{service.shortSummary}</p>
                        </div>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm text-lime">
                          View service <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                        </span>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}

          <Reveal>
            <div className="mt-8 flex flex-col items-start gap-6 rounded-2xl border border-graphite-border bg-graphite/40 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-pearl tracking-tight">
                  Not sure which service applies to your business?
                </h2>
                <p className="mt-2 text-sm text-pearl-dim max-w-lg">
                  Every engagement starts with an audit, which is usually the fastest way to find out.
                </p>
              </div>
              <MagneticLink href={links.upwork} variant="primary" ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)">
                Hire Me on Upwork
              </MagneticLink>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
