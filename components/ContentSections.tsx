import { Reveal } from './Reveal';

export function ContentSections({
  sections,
}: {
  sections: { heading: string; paragraphs: string[] }[];
}) {
  return (
    <div className="flex flex-col gap-14 sm:gap-16">
      {sections.map((section, i) => (
        <Reveal key={section.heading} delay={i * 0.04}>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl text-pearl tracking-tight mb-5">
              {section.heading}
            </h2>
            <div className="flex flex-col gap-4">
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-[15px] sm:text-base leading-relaxed text-pearl-dim text-balance">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
