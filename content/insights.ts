export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  datePublished: string;
  sections: { heading: string; paragraphs: string[] }[];
  relatedServices: string[];
  relatedArticles: string[];
};

export const categories = ['Local SEO', 'Google Business Profile', 'Google Maps', 'AI Search'];

export const articles: Article[] = [
  {
    slug: 'how-local-seo-actually-works',
    title: 'How Local SEO Actually Works',
    description:
      'A plain explanation of what actually determines local search visibility, without the recycled checklist filler most Local SEO content repeats.',
    category: 'Local SEO',
    datePublished: '2026-02-10',
    sections: [
      {
        heading: 'It is not one ranking',
        paragraphs: [
          'When a business owner says "I want to rank higher on Google," they usually mean one specific thing: showing up in the three-listing Map Pack for their main keyword. That is one outcome among several, and treating it as the only goal tends to produce narrow, short-lived results.',
          'A business also ranks (or fails to rank) in the regular organic results for local searches, in Google Maps itself when someone is browsing rather than searching a keyword, and increasingly in AI-generated answers that never show a traditional results page at all. Each of these draws on overlapping but not identical signals.',
        ],
      },
      {
        heading: 'The signals, in the order they usually matter',
        paragraphs: [
          'Google Business Profile completeness and activity carries more weight than most business owners expect, and it is the fastest thing to fix. Citation consistency (the same name, address, and phone number everywhere the business is mentioned online) is next, and it is almost always more broken than people realize, especially after a move or a phone number change.',
          'Reviews matter, both volume and recency, along with how a business responds to them. Website relevance and technical health matter too, but they compound slowly rather than producing a fast bump. None of these work in isolation. A technically excellent website with an unclaimed Business Profile will lose to a mediocre website with a complete, active profile and consistent citations.',
        ],
      },
      {
        heading: 'Why generic checklists underperform',
        paragraphs: [
          'Most "Local SEO checklist" content treats every business the same: claim your listing, get reviews, build citations, done. The problem is priority order. A business with 40 inconsistent citations from a decade of directory changes needs cleanup before it needs more citations. A business with a great profile but zero content addressing its actual service area needs different work entirely.',
          'That is what an audit is actually for: figuring out which of the general local SEO levers matter most for this specific business, right now, instead of applying all of them evenly and hoping something moves.',
        ],
      },
    ],
    relatedServices: ['local-seo', 'local-seo-audits-strategy'],
    relatedArticles: ['nap-consistency-local-citations', 'google-maps-ranking-factors'],
  },
  {
    slug: 'google-business-profile-foundation',
    title: 'Google Business Profile: The Foundation of Local Visibility',
    description:
      'Why a Google Business Profile matters more than most local businesses treat it, and what a genuinely complete profile actually includes.',
    category: 'Google Business Profile',
    datePublished: '2026-02-24',
    sections: [
      {
        heading: 'The first thing a customer actually sees',
        paragraphs: [
          'A meaningful share of local searches never make it to a website. Someone searches "dentist near me," sees the Map Pack, checks the hours and a couple of photos, and calls or gets directions without a single click to the site itself. The Business Profile is doing the job a homepage used to do.',
          'That makes it strange how often profiles are treated as a one-time setup task instead of a living asset. A profile filled out once in 2021 and never touched again is missing the activity signals Google now weighs: recent photos, regular posts, prompt review responses.',
        ],
      },
      {
        heading: 'What "complete" actually means',
        paragraphs: [
          'Primary and secondary categories chosen deliberately, not left at whatever Google auto-suggested. A business description written for an actual customer, not stuffed with every keyword the business wants to rank for. Services listed with real detail instead of one generic line. Hours kept current, including holidays, since incorrect hours actively damage trust when a customer shows up to a closed door.',
          'Photos matter more than most businesses assume, and not just quantity: recent, varied, and representative of what a customer will actually see. A profile with five-year-old stock-style photos reads as neglected even if the business itself is thriving.',
        ],
      },
      {
        heading: 'The suspension risk nobody mentions',
        paragraphs: [
          'Keyword-stuffed business names ("Joe\'s Plumbing - Best Plumber Chicago Emergency 24/7"), fake addresses, duplicate listings for the same location, and manipulated reviews are the most common causes of a profile getting suspended. A suspended profile disappears from search and Maps entirely until it is reinstated, which can take weeks.',
          'The businesses that get hit hardest are usually the ones that took a shortcut hoping to gain a temporary edge. A clean, honest, fully compliant profile is slower to build authority but does not carry that risk.',
        ],
      },
    ],
    relatedServices: ['google-business-profile-optimization', 'google-maps-seo'],
    relatedArticles: ['google-maps-ranking-factors', 'how-local-seo-actually-works'],
  },
  {
    slug: 'google-maps-ranking-factors',
    title: 'Google Maps Ranking Factors: Relevance, Distance, and Prominence',
    description:
      'What Google actually weighs when deciding which three businesses appear in the Map Pack, and why none of it is fixed by a single change.',
    category: 'Google Maps',
    datePublished: '2026-03-08',
    sections: [
      {
        heading: 'The three factors Google states directly',
        paragraphs: [
          'Google itself describes local ranking as a function of relevance, distance, and prominence. Relevance is whether a listing matches what was actually searched. Distance is how close the business is to the location implied in the search. Prominence is how well known the business is, based on information Google has about it from across the web.',
          'What makes this confusing for business owners is that only one of the three, relevance, is something a business can directly control through obvious changes. Distance is fixed by geography, and prominence takes sustained work across reviews, citations, and overall online presence to shift.',
        ],
      },
      {
        heading: 'Relevance is more specific than "having a website"',
        paragraphs: [
          'Relevance comes from category accuracy, business description detail, and how well the listed services match the search intent. A general contractor categorized broadly as "contractor" instead of specifically as "roofing contractor" is handing away relevance for roofing-specific searches, even while technically operating in that space.',
          'Website content reinforces this. A locally relevant page that actually addresses the service and the market performs better here than a generic services page that could apply to any city.',
        ],
      },
      {
        heading: 'Prominence is the slow one, and the one that gets skipped',
        paragraphs: [
          'Prominence draws on reviews (volume, recency, and rating), citation consistency and authority, backlinks, and general mentions across the web. It is also the factor most local SEO shortcuts try to game, through fake reviews or manipulated citations, and the one most likely to trigger a suspension when someone gets caught.',
          'Built honestly, prominence compounds. A business that consistently earns reviews, keeps its citations accurate, and builds genuine local mentions over months tends to hold its ranking more durably than one that spiked from a shortcut and then fell back once the shortcut stopped working or got penalized.',
        ],
      },
    ],
    relatedServices: ['google-maps-seo', 'google-business-profile-optimization'],
    relatedArticles: ['google-business-profile-foundation', 'nap-consistency-local-citations'],
  },
  {
    slug: 'nap-consistency-local-citations',
    title: 'NAP Consistency and Local Citations Explained',
    description:
      'Why the same business name, address, and phone number showing up differently across the web quietly holds back local rankings.',
    category: 'Local SEO',
    datePublished: '2026-03-22',
    sections: [
      {
        heading: 'A small inconsistency, a real cost',
        paragraphs: [
          'NAP stands for name, address, and phone number. A citation is any mention of that data online, whether or not it links to the website. When the same business shows up as "Smith Plumbing LLC" on one directory, "Smith Plumbing" on another, and with an old phone number on a third, Google is left cross-referencing conflicting data about a business that is claiming to be a single, consistent entity.',
          'This rarely happens on purpose. It accumulates: a business moves and updates its own website but not the dozen directories that auto-populated years earlier, or a phone number changes after switching providers, and the old number lingers everywhere it was ever listed.',
        ],
      },
      {
        heading: 'Where citations actually come from, and why some outweigh others',
        paragraphs: [
          'Large general directories, industry-specific directories relevant to the business category, local directories tied to the region, and data aggregators that automatically distribute information to smaller sites. Not all citations carry equal weight. A handful of accurate listings on platforms Google trusts outperforms dozens of low-quality directory submissions that add volume without adding credibility.',
        ],
      },
      {
        heading: 'Cleanup before expansion',
        paragraphs: [
          'The instinct for a lot of businesses is to build more citations to improve visibility. Usually the higher-leverage move is cleaning up the citations that already exist and are wrong, since inconsistent data actively undermines trust rather than sitting neutrally in the background. Fix the existing mess first, then build outward from an accurate foundation.',
        ],
      },
    ],
    relatedServices: ['citation-building', 'local-seo'],
    relatedArticles: ['how-local-seo-actually-works', 'google-maps-ranking-factors'],
  },
  {
    slug: 'generative-engine-optimization-local-businesses',
    title: 'What Generative Engine Optimization Means for Local Businesses',
    description:
      'A grounded look at GEO and AEO for local search, without the exaggerated claims that tend to surround anything labeled "AI SEO."',
    category: 'AI Search',
    datePublished: '2026-04-05',
    sections: [
      {
        heading: 'The question is changing, not just the interface',
        paragraphs: [
          'Someone searching for a local business used to type a query and pick from a list of links. Increasingly, they are asking ChatGPT, Perplexity, or Google\'s AI Overviews for a direct recommendation, and getting a synthesized answer instead of a list. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) describe the work of making a business understandable, and citable, within that synthesized answer.',
          'This is a real shift in how discovery happens, and it deserves a real strategy. It does not deserve the wave of "AI SEO" content promising guaranteed placement in ChatGPT results, since nobody, including the people selling that promise, has visibility into exactly how these systems choose what to cite.',
        ],
      },
      {
        heading: 'The overlap with fundamentals people already know',
        paragraphs: [
          'AI systems favor sources with clear, consistent entity information: a business that is described the same way, with the same details, across its Business Profile, its website, and third-party mentions. That is the same NAP consistency that has mattered for traditional local SEO for years, just read by a different kind of system.',
          'They also favor content that directly answers a question instead of talking around it, and sources that carry independent signals of trust: reviews, mentions, a real history online. Google\'s own guidance on this has been consistent: the foundational principles behind good SEO apply to AI-assisted search features too. There is no separate, secret ranking system underneath it.',
        ],
      },
      {
        heading: 'What is actually worth doing right now',
        paragraphs: [
          'Structured data that accurately reflects the business (schema markup, an accurate Business Profile). Content that answers the specific questions a customer would actually ask, written clearly enough that a model summarizing it would not distort the answer. Consistency across every place the business is described online. And tracking, since visibility here is hard to observe without dedicated tools; I use AthenaHQ alongside the usual local SEO stack to get a read on how AI systems are actually surfacing a given business, if at all.',
        ],
      },
    ],
    relatedServices: ['ai-search-optimization', 'technical-local-seo'],
    relatedArticles: ['how-local-seo-actually-works', 'nap-consistency-local-citations'],
  },
  {
    slug: 'local-seo-vs-traditional-seo',
    title: 'Local SEO vs Traditional SEO: What Actually Changes',
    description:
      'The two disciplines share a name and overlap in places, but they are won or lost on different signals entirely.',
    category: 'Local SEO',
    datePublished: '2026-04-19',
    sections: [
      {
        heading: 'Different competitions, different scoreboards',
        paragraphs: [
          'Traditional SEO competes for a topic across the entire web: the best, most authoritative, most comprehensive resource on a subject tends to win, regardless of where the publisher is physically located. Local SEO competes for a radius. A business three miles from the searcher, with a complete profile and consistent citations, can outrank a bigger, more authoritative competitor twenty miles away, because proximity and local relevance are part of the scoring, not just content quality.',
        ],
      },
      {
        heading: 'Where the tactics genuinely diverge',
        paragraphs: [
          'Content strategy for traditional SEO leans heavily on comprehensive, link-worthy resources. Local SEO leans more on Google Business Profile management, citation consistency, and review generation, none of which have an equivalent in traditional organic strategy. A national ecommerce brand does not need to worry about NAP consistency, because it does not have a physical presence tied to a specific address competing on distance.',
          'Backlinks still matter in both, but the type of link differs. Traditional SEO chases broad authority and topical relevance. Local SEO gets more value from links and mentions that are genuinely tied to the local market: a Chamber of Commerce listing, a local news mention, a sponsorship, over a generic guest post from an unrelated site.',
        ],
      },
      {
        heading: 'Where they still overlap',
        paragraphs: [
          'Technical health (site speed, mobile usability, crawlability) matters for both. Genuinely helpful content matters for both. And increasingly, the entity-based signals that support AI search visibility apply across both disciplines too. The mistake is assuming one skill set automatically transfers to the other. A strong traditional SEO background does not automatically produce Local SEO results, because the highest-leverage work sits in places, like the Business Profile, that traditional SEO does not touch at all.',
        ],
      },
    ],
    relatedServices: ['local-seo', 'local-seo-audits-strategy'],
    relatedArticles: ['how-local-seo-actually-works', 'generative-engine-optimization-local-businesses'],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
