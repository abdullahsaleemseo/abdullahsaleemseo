export type Service = {
  slug: string;
  name: string;
  pillar: 'Local Discovery' | 'Organic Authority' | 'AI Discovery';
  shortSummary: string;
  heroStatement: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[] }[];
  capabilities: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'local-seo',
    name: 'Local SEO',
    pillar: 'Organic Authority',
    shortSummary: 'The foundation: making a business findable, credible, and rankable in its own market.',
    heroStatement: 'Local SEO is not a smaller version of SEO. It runs on a different set of signals.',
    intro: [
      'Local SEO is the practice of making a business visible to people searching nearby: someone typing "plumber near me," someone tapping a pin on Google Maps, someone asking their phone for the closest option that is actually open right now.',
      'It overlaps with traditional SEO, but it does not behave the same way. A national ecommerce brand competes on content depth and backlinks. A local business competes on proximity, profile completeness, review signals, and how consistently its name, address, and phone number show up across the web. Ranking a blog post and ranking a Map Pack listing are different problems with different levers.',
    ],
    sections: [
      {
        heading: 'How local search actually behaves',
        paragraphs: [
          'Google evaluates local results on three main factors: relevance, distance, and prominence. Relevance is whether a business matches what someone searched for. Distance is how close the business is to the searcher or the location implied in the search. Prominence is how well known and how well reviewed the business is, both online and off.',
          'None of those factors are things a website alone can fix. That is the part most people miss. A beautiful website with zero citations and an unclaimed Business Profile will lose to a plain website with a complete profile, consistent local citations, and steady reviews. Local SEO lives mostly off the website, even though the website still matters.',
        ],
      },
      {
        heading: 'The signals that actually move the needle',
        paragraphs: [
          'Google Business Profile completeness and activity. Citation consistency across directories (the same name, address, and phone number everywhere). Review volume, recency, and how the business responds to them. On-site local relevance signals: location-specific pages, schema markup, and content that actually addresses the local market instead of generic industry copy. Website authority and technical health, which still counts even though it is not the whole story.',
          'Most local SEO failures come from treating one of these in isolation. A GBP optimization with no citation cleanup underneath it will plateau. A citation campaign with an inconsistent NAP across old directories will actively work against the business.',
        ],
      },
      {
        heading: 'How I approach it',
        paragraphs: [
          'Every engagement starts with an audit: profile health, citation consistency, technical foundations, and a clear read on who is already ranking and why. From there, the plan is built around what is actually broken or missing for that specific business, not a generic checklist applied to every client.',
          'Execution follows a deliberate order. Profile and citation fixes come first because they tend to move visibility fastest. Technical and content work follows, since it compounds over months rather than weeks. Reporting stays honest: Map Pack visibility, keyword movement, and profile engagement, tracked monthly against what was actually planned.',
        ],
      },
    ],
    capabilities: [
      'Comprehensive local SEO audit',
      'Local keyword and competitor research',
      'Google Business Profile strategy',
      'Citation consistency and cleanup',
      'Locally relevant on-page content',
      'Monthly performance tracking',
    ],
    faqs: [
      {
        q: 'What does a Local SEO consultant actually do?',
        a: 'The short version: audits how a business currently shows up in local search, fixes what is broken or missing (profile, citations, technical foundations), and builds a strategy around what will move visibility for that specific business and market, then tracks whether it is working.',
      },
      {
        q: 'How long does Local SEO take to show results?',
        a: 'Profile and citation fixes can move visibility within the first few weeks. Competitive Map Pack rankings and durable organic authority usually take several months of consistent work, since Google is weighing prominence signals that build up over time.',
      },
      {
        q: 'Is Local SEO different from regular SEO?',
        a: 'Yes. Regular SEO competes across the entire web for a topic. Local SEO competes within a radius, and it is won or lost on Google Business Profile signals, citation consistency, and proximity relevance as much as on-site content.',
      },
    ],
    related: ['google-business-profile-optimization', 'google-maps-seo', 'local-seo-audits-strategy'],
  },
  {
    slug: 'google-business-profile-optimization',
    name: 'Google Business Profile Optimization',
    pillar: 'Local Discovery',
    shortSummary: 'The single highest-leverage asset in local search, set up and maintained properly.',
    heroStatement: 'A Google Business Profile is not a listing you fill out once. It is a live account that needs upkeep.',
    intro: [
      'Google Business Profile (GBP), still often called Google My Business, is the profile that shows up in the Map Pack and on Google Maps: hours, photos, reviews, posts, and the business description. For most local businesses, it is the first thing a potential customer actually sees, before the website ever loads.',
      'A large share of the local businesses I work with have a profile that was set up years ago, half-filled, in the wrong category, and never touched again. That alone is usually costing them visibility they could recover without touching the website.',
    ],
    sections: [
      {
        heading: 'What a complete profile actually includes',
        paragraphs: [
          'The primary and secondary categories, chosen deliberately rather than defaulted to whatever Google suggested first. Business description written for the customer, not stuffed with keywords. Services or products listed with real detail. Business hours kept current, including holiday hours. Photos that are recent, varied, and geotagged where it makes sense. Attributes filled in accurately (wheelchair accessible, appointment only, and so on).',
          'None of this is exotic. Most of it is just neglected. Profiles that get consistent attention (new photos, regular posts, prompt review responses) tend to outperform profiles that were set up once and abandoned, even when the underlying business is comparable.',
        ],
      },
      {
        heading: 'Reviews, without the shortcuts',
        paragraphs: [
          'Review volume and recency both factor into prominence. A strategy here is about making it easy and natural for real customers to leave reviews (the right ask at the right moment, a direct link, a short explanation of why it helps), and about responding to every review, good or bad, in a way that reflects well on the business.',
          'I do not buy reviews, generate fake reviews, or use review gating tactics that violate Google policy. Getting caught doing that puts the entire profile at risk of suspension, which is a far worse outcome than a slower, honest review strategy.',
        ],
      },
      {
        heading: 'Suspension and spam risk',
        paragraphs: [
          'Google suspends profiles for policy violations: keyword-stuffed business names, fake addresses, duplicate listings, and misuse of the review or Q&A system are the most common causes. Part of doing this properly is staying inside those guidelines, not testing how close to the line a client can get.',
          'Optimizing a profile correctly does not guarantee a Map Pack ranking. Nobody can promise that, since ranking also depends on competitors, review volume, distance, and factors outside any one business\'s control. What a properly optimized profile does is remove the reasons Google would rank a business below its actual quality.',
        ],
      },
    ],
    capabilities: [
      'Full profile setup and audit',
      'Category and attribute selection',
      'Business description and services',
      'Photo strategy and upload cadence',
      'Post scheduling and optimization',
      'Review response strategy',
      'Local business schema markup',
    ],
    faqs: [
      {
        q: 'Does optimizing my Google Business Profile guarantee a Map Pack ranking?',
        a: 'No. Nothing does. Optimization removes gaps that would otherwise hold a business back, and it strengthens the signals Google weighs, but ranking also depends on competitors, reviews, and distance, none of which any optimization can fully control.',
      },
      {
        q: 'Can I have more than one Google Business Profile for the same business?',
        a: 'Generally no, and doing so risks suspension. The exception is genuinely separate physical locations, each of which can have its own profile as long as the addresses are real and distinct.',
      },
      {
        q: 'What happens if my profile gets suspended?',
        a: 'It stops showing in search and Maps entirely until it is reinstated. Reinstatement means filing an appeal through Google and correcting whatever triggered the suspension, which can take anywhere from days to weeks depending on the case.',
      },
    ],
    related: ['local-seo', 'google-maps-seo', 'citation-building'],
  },
  {
    slug: 'google-maps-seo',
    name: 'Google Maps SEO',
    pillar: 'Local Discovery',
    shortSummary: 'Understanding, and working with, the three factors that actually decide the Map Pack.',
    heroStatement: 'The Map Pack is not a popularity contest. It is a relevance, distance, and prominence calculation, every time.',
    intro: [
      'Google Maps SEO is a narrower discipline than Local SEO overall, focused specifically on what determines the three, or occasionally more, businesses that show up in the Map Pack for a given search. It draws on the same signals as Local SEO broadly, but the priorities shift depending on how competitive the local market is.',
      'For a low-competition category in a small town, a complete profile and a handful of citations might be enough. For a competitive category in a major metro, prominence (reviews, links, mentions, overall online authority) starts to matter a lot more, and it takes longer to build.',
    ],
    sections: [
      {
        heading: 'Relevance, distance, and prominence in practice',
        paragraphs: [
          'Relevance means the profile and website clearly match what was searched. A roofing company categorized under "contractor" with no roofing-specific content is leaving relevance signals on the table, even if the business genuinely does roofing.',
          'Distance is mostly outside anyone\'s control since it is based on the searcher\'s actual location, but businesses with multiple genuine locations can capture more searches simply by being closer to more people. Prominence is the most competitive factor, and it is a mix of review signals, citation authority, backlinks, and general online visibility built over time.',
        ],
      },
      {
        heading: 'Where the website still matters',
        paragraphs: [
          'The Map Pack pulls from the Business Profile primarily, but Google still crawls the linked website to understand what the business does and how legitimate it is. A website with local schema markup, a genuinely local phone number, an address that matches the profile exactly, and content that speaks to the actual service area reinforces everything the profile is claiming.',
          'This is also where a lot of otherwise well-optimized profiles quietly lose ground: the website contradicts the profile (a different phone number, a stale address, generic content that could apply to any city) and Google has less reason to trust the listing.',
        ],
      },
      {
        heading: 'What actually moves rankings, and what does not',
        paragraphs: [
          'Consistent, real reviews move rankings. Citation consistency moves rankings. A technically sound, locally relevant website moves rankings, slowly. Keyword-stuffed business names and fake reviews can produce a short-term bump and a long-term suspension. There is no shortcut that outperforms doing the fundamentals correctly and consistently.',
        ],
      },
    ],
    capabilities: [
      'Map Pack ranking analysis',
      'Local keyword and intent research',
      'Relevance, distance, and prominence audit',
      'Review generation strategy',
      'Local content aligned to the service area',
      'Ongoing rank tracking',
    ],
    faqs: [
      {
        q: 'What is the difference between Local SEO and Google Maps SEO?',
        a: 'Google Maps SEO is a subset of Local SEO, focused specifically on the Map Pack. Local SEO broadly also covers organic local rankings outside the map results, which use an overlapping but not identical set of signals.',
      },
      {
        q: 'Can Local SEO improve my Google Maps visibility?',
        a: 'Yes, since Map Pack ranking draws directly on Local SEO fundamentals: profile completeness, citation consistency, reviews, and website relevance. Improving those improves both organic local rankings and Map Pack visibility together.',
      },
      {
        q: 'Why do my competitors outrank me on Google Maps even though my business is better?',
        a: 'Ranking is a relevance, distance, and prominence calculation, not a quality judgment. A competitor with more reviews, more consistent citations, or a location closer to more searchers can outrank a genuinely better business until those specific gaps are closed.',
      },
    ],
    related: ['google-business-profile-optimization', 'local-seo', 'technical-local-seo'],
  },
  {
    slug: 'citation-building',
    name: 'Citation Building & Local Links',
    pillar: 'Local Discovery',
    shortSummary: 'The trust infrastructure Google checks before it ranks anyone.',
    heroStatement: 'A citation is a mention of a business name, address, and phone number. Consistency is the entire game.',
    intro: [
      'A citation is any online mention of a business\'s name, address, and phone number, whether or not it links back to the website: a directory listing, a Chamber of Commerce page, an industry association, a data aggregator. Google cross-references these mentions as a trust signal. If the same business shows up with three different phone numbers across the web, that inconsistency reads as unreliable data, and it works against the business.',
      'Citation building is often the least glamorous part of local SEO, and also one of the most consistently effective, especially for businesses whose citation profile was never cleaned up after a move, a rebrand, or a phone number change.',
    ],
    sections: [
      {
        heading: 'NAP consistency, and why it breaks',
        paragraphs: [
          'NAP stands for name, address, and phone number. It breaks most often after a business moves, changes its legal name, switches phone providers, or gets listed automatically by a data aggregator using outdated information pulled from somewhere else. Each inconsistent listing is a small signal to Google that the data cannot be fully trusted.',
          'Cleanup means finding every existing citation, correcting the ones that are wrong, removing or merging duplicates, and making sure the core NAP data is identical everywhere it appears going forward.',
        ],
      },
      {
        heading: 'Where citations actually come from',
        paragraphs: [
          'General directories (the large, well-known platforms), industry-specific directories relevant to the business category, local directories tied to the city or region, and data aggregators that feed information out to dozens of smaller sites automatically. Quality matters more than volume. A handful of relevant, accurate citations on platforms Google actually trusts outperforms a hundred low-quality directory submissions.',
        ],
      },
      {
        heading: 'Local links versus citations',
        paragraphs: [
          'A citation does not have to link to the website to count. A local link is a citation that also passes authority, the way any backlink does. Local news mentions, sponsorships, Chamber of Commerce memberships, and partnerships with other local businesses tend to produce the most valuable local links, because they are genuinely tied to the business\'s real presence in its market rather than manufactured for SEO purposes.',
        ],
      },
    ],
    capabilities: [
      'NAP consistency audit and cleanup',
      'Duplicate listing identification and merging',
      'High-quality local and industry citations',
      'Data aggregator submissions',
      'Genuine local link opportunities',
      'Ongoing consistency monitoring',
    ],
    faqs: [
      {
        q: 'How many citations does a local business actually need?',
        a: 'There is no fixed number. What matters more is accuracy and relevance: the major directories, the directories specific to the industry, and a handful of genuinely local ones, all with identical NAP data. A smaller number of accurate, relevant citations beats a large number of low-quality ones.',
      },
      {
        q: 'What happens if my NAP data is inconsistent?',
        a: 'It weakens the trust signal Google uses to confirm a business is legitimate and accurately represented, which can hold back both Map Pack and organic local rankings even when everything else is in good shape.',
      },
    ],
    related: ['local-seo', 'google-business-profile-optimization', 'google-maps-seo'],
  },
  {
    slug: 'technical-local-seo',
    name: 'Technical & On-Page Local SEO',
    pillar: 'Organic Authority',
    shortSummary: 'The website-side foundation that supports everything the Business Profile is claiming.',
    heroStatement: 'A profile can only say so much. The website has to back it up.',
    intro: [
      'Technical and on-page local SEO covers everything on the website itself that reinforces local relevance: schema markup, localized landing pages, internal linking, page speed, and mobile usability. None of it replaces a strong Business Profile, but a weak website undercuts even the best profile.',
      'This tends to be the part of local SEO that gets skipped, mostly because it requires touching code and templates rather than filling out a form, but it is also where a lot of durable, compounding authority actually gets built.',
    ],
    sections: [
      {
        heading: 'Schema markup, used honestly',
        paragraphs: [
          'LocalBusiness schema gives search engines explicit, structured confirmation of the business name, address, phone number, hours, and service area, matching what is already on the Business Profile. It is a clarity signal, not a ranking trick, and it only helps when it accurately describes what is actually on the page.',
          'Adding fabricated review or rating schema to try to force star ratings into search results violates Google\'s structured data guidelines and can trigger a manual action. Schema should describe real, visible content, nothing more.',
        ],
      },
      {
        heading: 'Localized landing pages, done without doorway pages',
        paragraphs: [
          'A business genuinely serving multiple distinct service areas can benefit from a dedicated page per area, but only if each page has real, differentiated content: what that market actually needs, how the service applies there, and any locally relevant context. Pages that are the same template with the city name swapped are doorway pages, and Google treats them as a quality problem, not a strength.',
          'The right number of local pages is however many the business can genuinely support with unique, useful content. For most single-location businesses, that is one strong local page, not ten thin ones.',
        ],
      },
      {
        heading: 'Site speed, mobile, and internal linking',
        paragraphs: [
          'Most local searches happen on mobile, often from someone standing outside deciding whether to walk in. A slow-loading site or a broken mobile layout costs conversions directly, independent of ranking. Internal linking that connects service pages, the homepage, and any location pages with clear, descriptive anchor text also helps Google understand the site\'s structure and what each page is actually about.',
        ],
      },
    ],
    capabilities: [
      'LocalBusiness schema markup',
      'Site speed and Core Web Vitals review',
      'Mobile usability audit',
      'Internal linking architecture',
      'Genuinely differentiated local landing pages',
      'Crawlability and indexing checks',
    ],
    faqs: [
      {
        q: 'Do I need a separate page for every city I serve?',
        a: 'Only if each page can carry genuinely unique, useful content. A handful of well-developed area pages beats a large number of thin, near-identical ones, both for users and for how Google evaluates the site.',
      },
      {
        q: 'Does schema markup improve rankings by itself?',
        a: 'Schema helps search engines understand a page more precisely, and it can influence how a result is displayed, but it does not replace the underlying content or guarantee a ranking improvement on its own.',
      },
    ],
    related: ['local-seo', 'ai-search-optimization', 'local-seo-audits-strategy'],
  },
  {
    slug: 'local-seo-audits-strategy',
    name: 'Local SEO Audits & Strategy',
    pillar: 'Organic Authority',
    shortSummary: 'A clear, honest read on where a business actually stands, and a plan built around it.',
    heroStatement: 'Most local SEO problems are visible in an audit before a single change gets made.',
    intro: [
      'An audit is the starting point for every engagement, not a formality before the "real work" begins. It is where the actual priorities get set: which fixes will move visibility fastest, which will take longer to pay off, and which parts of the current setup are already solid and do not need attention.',
      'A strategy without an audit underneath it is a guess. Two businesses in the same industry can have completely different priority lists depending on what is already broken, what the competition looks like, and how much of the fundamentals are already in place.',
    ],
    sections: [
      {
        heading: 'What the audit actually covers',
        paragraphs: [
          'Google Business Profile completeness and category accuracy. Citation consistency across the web. Review volume, recency, and response history. Website technical health: speed, mobile usability, crawlability, indexing. On-page local relevance and existing content quality. A read on who is currently ranking in the Map Pack and organically, and why.',
        ],
      },
      {
        heading: 'Competitor analysis, without the vague benchmarking',
        paragraphs: [
          'Competitor analysis here means looking at the businesses actually outranking the client for their priority searches, and identifying the specific, concrete reasons: more reviews, more consistent citations, stronger website relevance, longer online history. The point is not a generic "here is what your competitors are doing" report. It is finding the specific gaps worth closing first.',
        ],
      },
      {
        heading: 'From audit to strategy',
        paragraphs: [
          'The strategy that comes out of an audit is specific to what was found: which levers matter most for this business, in this category, in this market. Execution follows a deliberate sequence, usually profile and citation fixes first since they tend to move fastest, then technical and content work that compounds over months.',
          'Monthly performance tracking keeps the strategy honest against what was actually planned: what is moving, what is not, and what changes as a result. A strategy that never gets revisited against real data is not a strategy, it is a guess with a deadline.',
        ],
      },
    ],
    capabilities: [
      'Full local SEO audit',
      'Competitor gap analysis',
      'Custom strategy built around audit findings',
      'Prioritized execution roadmap',
      'Monthly performance tracking and reporting',
    ],
    faqs: [
      {
        q: 'How do you measure the success of Local SEO work?',
        a: 'Against the metrics that actually matter for local: Map Pack visibility, local keyword rankings, profile engagement, and the quality of citation and review signals, tracked monthly against what the strategy set out to achieve.',
      },
      {
        q: 'What does an audit actually deliver?',
        a: 'A clear picture of profile health, citation consistency, technical foundations, and where the business stands against the competitors it is actually losing visibility to, along with a prioritized list of what to fix first.',
      },
    ],
    related: ['local-seo', 'google-business-profile-optimization', 'citation-building'],
  },
  {
    slug: 'ai-search-optimization',
    name: 'AI Search Optimization (GEO & AEO)',
    pillar: 'AI Discovery',
    shortSummary: 'Structuring a business so ChatGPT, Gemini, and Perplexity can accurately recommend it.',
    heroStatement: 'AI search does not run on a separate ranking system. It runs on the same foundation, read differently.',
    intro: [
      'Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) describe how a business becomes understandable, and citable, to AI systems: ChatGPT, Gemini, Perplexity, and Google\'s AI Overviews. When someone asks one of these tools for a local recommendation, the answer is being synthesized from information the model has crawled, indexed, or retrieved, not from a ranked list of links.',
      'This is a genuinely new layer on top of search, but it is not a separate discipline built on secret techniques. The same foundational signals that support strong traditional SEO (clear entity information, structured data, consistent business details, genuinely helpful content, real authority) are exactly what AI systems rely on to decide who to cite and recommend.',
    ],
    sections: [
      {
        heading: 'What actually feeds an AI recommendation',
        paragraphs: [
          'Consistent, structured business information across the web, the same NAP consistency that matters for traditional local SEO. Clear entity signals: schema markup, a well-defined Google Business Profile, and consistent descriptions of what the business does and where. Genuinely helpful, first-party content that answers real questions, since AI systems favor sources that resolve a query clearly over sources that are vague or promotional.',
          'Reputation and citation-worthiness: mentions across other sites, reviews, and any third-party sources that reinforce the business is real, established, and trustworthy. None of this is exotic. It overlaps heavily with what already makes a business rank well in traditional search.',
        ],
      },
      {
        heading: 'What this is not',
        paragraphs: [
          'It is not a guarantee of appearing in a ChatGPT answer, and no one can honestly promise that. AI systems change frequently, draw from different sources depending on the query, and are not transparent about their exact retrieval process. Anyone promising guaranteed AI search rankings is selling something that does not exist.',
          'It is also not a separate ranking system requiring an entirely different strategy. Google\'s own guidance is consistent on this point: the foundational SEO principles that support traditional search also support AI-assisted search features. The work is an extension of solid local SEO, not a replacement for it.',
        ],
      },
      {
        heading: 'How I approach it in practice',
        paragraphs: [
          'Structured data that accurately describes the business (LocalBusiness, Service, and Person schema where appropriate). Content written to directly answer the questions a customer, or an AI system on their behalf, would actually ask. Consistent entity information across the Business Profile, the website, and third-party citations. Visibility tracking with tools built for this specifically, including AthenaHQ, to understand how and whether AI systems are surfacing the business.',
        ],
      },
    ],
    capabilities: [
      'Entity and structured data strategy',
      'AI-readable content structuring',
      'Consistent cross-platform business information',
      'Answer-focused content for common customer questions',
      'AI search visibility tracking (AthenaHQ)',
    ],
    faqs: [
      {
        q: 'How does AI search change local visibility?',
        a: 'It adds a layer where the answer is synthesized rather than a list of links, but it draws on the same underlying signals as traditional local search: clear entity information, structured data, consistency, and genuinely helpful content. Strengthening those helps both.',
      },
      {
        q: 'Can you guarantee my business shows up in ChatGPT answers?',
        a: 'No, and any claim to guarantee that is not credible. AI systems are not transparent about retrieval, and results vary by query and by model. The realistic goal is strengthening the signals that make a business more likely to be understood and cited, not a guaranteed placement.',
      },
      {
        q: 'Is GEO different from AEO?',
        a: 'They overlap significantly. GEO generally refers to optimizing for generative AI systems broadly, while AEO focuses on being the direct answer to a specific question. In practice, for a local business, the work supporting both is largely the same: clear entities, structured data, and genuinely helpful content.',
      },
    ],
    related: ['local-seo', 'technical-local-seo', 'google-business-profile-optimization'],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
