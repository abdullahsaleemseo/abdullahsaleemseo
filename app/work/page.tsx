import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { links } from '@/content/site';
import { workIntro, workCategories } from '@/content/work';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { MagneticLink } from '@/components/MagneticLink';

export const metadata: Metadata = buildMetadata({
  title: 'Selected Work',
  description:
    'The categories of Local SEO work performed across 100+ projects: Google Business Profile cleanup, citation consistency, technical local SEO, and AI search structuring.',
  path: '/work/',
});

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Breadcrumbs items={[{ name: 'Work', path: '/work/' }]} />
        <PageHero eyebrow="Selected Work" title={workIntro.heading} />

        <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-10">
          <Reveal>
            <div className="flex flex-col gap-4 max-w-3xl mb-16">
              {workIntro.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col">
            {workCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-6 border-t border-graphite-border py-10 lg:grid-cols-[220px_1fr_220px] lg:gap-10">
                  <div>
                    <span className="font-mono text-xs text-lime tracking-label">{cat.focus}</span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl text-pearl tracking-tight mb-3">
                      {cat.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-pearl-dim text-balance">{cat.description}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-label uppercase text-pearl-faint mb-3">Methods</p>
                    <ul className="flex flex-col gap-2">
                      {cat.methods.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-sm text-pearl/90">
                          <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-graphite-border bg-graphite/40 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-pearl tracking-tight">
                  Want to talk through what this looks like for your business?
                </h2>
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
