import { person } from '@/content/site';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-graphite-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] tracking-label uppercase text-lime mb-6">
                About
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-medium text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.05] tracking-tightest text-pearl text-balance">
                Search didn&rsquo;t get simpler.
                <br />
                It got smarter. So did the strategy.
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <Reveal delay={0.1}>
              <p className="text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
                I&rsquo;m {person.name}, a Local SEO and Google Business Profile specialist. Over
                the past {person.experienceYears} years I&rsquo;ve worked with local businesses on
                the fundamentals that actually move visibility: clean, optimized profiles,
                consistent citations, and technically sound websites built for their market.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="text-[15px] sm:text-lg leading-relaxed text-pearl-dim text-balance">
                That work now extends further. Search is no longer just Google&rsquo;s ten blue
                links. It&rsquo;s Maps, AI Overviews, and ChatGPT or Perplexity answering a
                customer directly. I bridge traditional Local SEO with Generative and Answer
                Engine Optimization, so a business is structured to be understood and recommended
                everywhere someone might be looking.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <a
                href="/about/"
                className="inline-flex w-fit items-center gap-2 text-sm text-lime hover:text-lime-soft transition-colors"
              >
                Read the full story <span aria-hidden>↗</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
