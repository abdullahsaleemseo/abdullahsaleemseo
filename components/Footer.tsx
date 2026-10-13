import { person, socials, nav, links } from '@/content/site';
import { services } from '@/content/services';

export function Footer() {
  return (
    <footer className="relative border-t border-graphite-border py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl text-pearl tracking-tight">{person.name}</p>
            <p className="mt-1.5 text-sm text-pearl-dim">{person.title}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pearl-faint">
              Local SEO, Google Maps visibility, and AI search structuring for local businesses,
              built around what each business actually needs.
            </p>
            <a
              href={`mailto:${person.email}`}
              className="mt-4 inline-block text-sm text-pearl-dim underline decoration-graphite-border underline-offset-4 hover:text-lime hover:decoration-lime transition-colors"
            >
              {person.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">Services</p>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}/`} className="text-sm text-pearl-dim hover:text-pearl transition-colors">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">Explore</p>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-pearl-dim hover:text-pearl transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/locations/" className="text-sm text-pearl-dim hover:text-pearl transition-colors">
                  Locations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-label uppercase text-pearl-faint mb-4">Professional Profiles</p>
            <ul className="flex flex-col gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-pearl-dim hover:text-lime transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={links.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-[13px] font-medium text-obsidian transition-transform duration-300 ease-luxe hover:-translate-y-0.5"
            >
              Hire Me on Upwork <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-4 border-t border-graphite-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-pearl-faint">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p className="text-xs text-pearl-faint">Local SEO & AI Search Strategist</p>
        </div>
      </div>
    </footer>
  );
}
