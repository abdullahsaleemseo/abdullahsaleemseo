import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { person, links, socials } from '@/content/site';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { MagneticLink } from '@/components/MagneticLink';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch about a Local SEO project. The fastest way to start a conversation is on Upwork.',
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact/' }]} />
        <PageHero
          eyebrow="Contact"
          title="Start with a conversation, not a form."
          description="The fastest and most direct way to reach me is on Upwork, where every past engagement is already reviewed and rated."
        />

        <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <Reveal>
            <div className="rounded-2xl border border-graphite-border bg-graphite/50 p-8 sm:p-10">
              <p className="font-display text-2xl text-pearl tracking-tight mb-2">{person.name}</p>
              <p className="text-sm text-pearl-dim">{person.roleLong}</p>
              <p className="mt-1 text-sm text-pearl-faint">{person.location}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <MagneticLink href={links.upwork} variant="primary" ariaLabel="Hire Abdullah Saleem on Upwork (opens in new tab)">
                  Hire Me on Upwork
                </MagneticLink>
                <a
                  href={`mailto:${person.email}`}
                  className="text-sm text-pearl-dim underline decoration-graphite-border underline-offset-4 hover:text-lime hover:decoration-lime transition-colors"
                >
                  {person.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10">
              <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">
                Professional profiles
              </p>
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-pearl-dim hover:text-lime transition-colors"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
