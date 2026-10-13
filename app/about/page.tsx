import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { jsonLdGraph, profilePageSchema } from '@/lib/schema';
import { person, links, toolkit, proof } from '@/content/site';
import { aboutContent } from '@/content/about';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { MagneticLink } from '@/components/MagneticLink';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description:
    'Abdullah Saleem is a Local SEO and Google Business Profile specialist based in Lahore, Pakistan, working remotely with local businesses on Local SEO, Google Maps visibility, and AI search optimization.',
  path: '/about/',
});

export default function AboutPage() {
  const jsonLd = jsonLdGraph(profilePageSchema());

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main">
        <Breadcrumbs items={[{ name: 'About', path: '/about/' }]} />
        <PageHero eyebrow="About" title={aboutContent.heroStatement} />

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px] lg:gap-10">
            <div className="flex flex-col gap-16">
              <Reveal>
                <div className="flex flex-col gap-4 max-w-3xl">
                  {aboutContent.intro.map((p, i) => (
                    <p key={i} className="text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight mb-5">
                    {aboutContent.philosophy.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {aboutContent.philosophy.paragraphs.map((p, i) => (
                      <p key={i} className="text-[15px] sm:text-base leading-relaxed text-pearl-dim text-balance">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="max-w-3xl">
                  <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight mb-5">
                    {aboutContent.approachDetail.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {aboutContent.approachDetail.paragraphs.map((p, i) => (
                      <p key={i} className="text-[15px] sm:text-base leading-relaxed text-pearl-dim text-balance">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="max-w-3xl">
                  <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight mb-5">
                    {aboutContent.credibility.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {aboutContent.credibility.paragraphs.map((p, i) => (
                      <p key={i} className="text-[15px] sm:text-base leading-relaxed text-pearl-dim text-balance">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
                    {proof.stats.map((stat) => (
                      <div key={stat.label} className="border-t border-lime/30 pt-4">
                        <p className="font-display text-2xl sm:text-3xl text-pearl tracking-tightest">{stat.value}</p>
                        <p className="mt-1.5 text-xs text-pearl-dim">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="flex flex-col gap-8">
              <Reveal>
                <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                  <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                    {person.name}
                  </p>
                  <p className="text-sm text-pearl-dim">{person.roleLong}</p>
                  <p className="mt-2 text-sm text-pearl-faint">{person.location}</p>
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-4 inline-block text-sm text-pearl-dim underline decoration-graphite-border underline-offset-4 hover:text-lime hover:decoration-lime transition-colors"
                  >
                    {person.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-6">
                  <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                    {aboutContent.toolkitIntro}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {toolkit.map((tool) => (
                      <li key={tool} className="flex items-start gap-2.5 text-sm text-pearl/90">
                        <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
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
