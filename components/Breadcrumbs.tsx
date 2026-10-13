import { breadcrumbSchema, jsonLdGraph } from '@/lib/schema';

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const full = [{ name: 'Home', path: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="relative pt-24 sm:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph(breadcrumbSchema(full))) }}
      />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-5 pt-6 font-mono text-[11px] tracking-wide text-pearl-faint sm:px-8 lg:px-10">
        {full.map((item, i) => {
          const isLast = i === full.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {isLast ? (
                <span aria-current="page" className="text-pearl-dim">
                  {item.name}
                </span>
              ) : (
                <a href={item.path} className="hover:text-lime transition-colors">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
