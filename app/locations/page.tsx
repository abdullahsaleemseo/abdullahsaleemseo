import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { links } from '@/content/site';
import { locationsContent } from '@/content/locations';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { MagneticLink } from '@/components/MagneticLink';

export const metadata: Metadata = buildMetadata({
  title: 'Locations & Remote Local SEO',
  description:
    'Abdullah Saleem works remotely from Lahore, Pakistan with local businesses in their own market. No fabricated city offices, no location spam, just an honest explanation of how remote Local SEO works.',
  path: '/locations/',
});

export default function LocationsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Breadcrumbs items={[{ name: 'Locations', path: '/locations/' }]} />
        <PageHero eyebrow="Locations" title={locationsContent.heading} />

        <div className="mx-auto max-w-3xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-4 mb-14">
              {locationsContent.intro.map((p, i) => (
                <p key={i} className="text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mb-14">
              <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight mb-5">
                {locationsContent.howLocalWorksRemotely.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {locationsContent.howLocalWorksRemotely.paragraphs.map((p, i) => (
                  <p key={i} className="text-[15px] sm:text-base leading-relaxed text-pearl-dim text-balance">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-16">
              <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight mb-5">
                {locationsContent.serviceAreaNote.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {locationsContent.serviceAreaNote.paragraphs.map((p, i) => (
                  <p key={i} className="text-[15px] sm:text-base leading-relaxed text-pearl-dim text-balance">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <MagneticLink href={links.upwork} variant="primary" ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)">
              Hire Me on Upwork
            </MagneticLink>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
