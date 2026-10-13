// Single source of truth for homepage copy and site-wide identity.
// Every fact here is drawn directly from Abdullah's existing website, Upwork profile,
// and his own verified GitHub profile bio.
// No invented clients, stats, testimonials, or credentials.

const PRODUCTION_DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdullahsaleemseo.com';

export const person = {
  name: 'Abdullah Saleem',
  initial: 'A',
  role: 'Local SEO Expert',
  roleLong: 'Local SEO Expert, Google Maps & GMB Optimization, GEO & AEO Specialist',
  title: 'Local SEO & Search Strategist',
  email: 'seo.abdullahsaleem@gmail.com',
  location: 'Lahore, Pakistan',
  experienceYears: 5,
  projectsCompleted: '100+',
};

export const links = {
  upwork: 'https://www.upwork.com/freelancers/~01ab1656443430e479',
  github: 'https://github.com/abdullahsaleemseo',
  gitlab: 'https://gitlab.com/seo.abdullahsaleem',
  pinterest: 'https://www.pinterest.com/seoabdullahsaleem/',
  facebook: 'https://www.facebook.com/people/Abdullah-Saleem/100045716588911/',
  instagram: 'https://www.instagram.com/its_abdullah_saleem_official',
  twitter: 'https://twitter.com/shiekhmabdullah',
};

export const socials = [
  { label: 'Upwork', href: links.upwork },
  { label: 'GitHub', href: links.github },
  { label: 'GitLab', href: links.gitlab },
  { label: 'Instagram', href: links.instagram },
  { label: 'Twitter / X', href: links.twitter },
  { label: 'Pinterest', href: links.pinterest },
];

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const hero = {
  eyebrow: 'Local Search Intelligence',
  nameLine: 'ABDULLAH SALEEM',
  titleLine: 'Local SEO & Search Strategist',
  headline: ['LOCAL SEARCH.', 'REENGINEERED.'],
  sub: 'I help local businesses dominate Google Maps, clean up messy Business Profiles, and structure their online presence so both search engines and AI assistants recommend them first.',
  ctaPrimary: 'Hire Me on Upwork',
  ctaSecondary: 'Explore the Stack',
};

// THE LOCAL SEARCH STACK: signature section
export const stack = [
  {
    index: '01',
    id: 'discovery',
    name: 'Local Discovery',
    description:
      'Where a business gets found in the first place: the Map Pack, the profile, the proof that it’s real, open, and worth choosing.',
    items: ['Google Business Profile', 'Google Maps Ranking', 'Citations & NAP Consistency', 'Review Generation Strategy'],
  },
  {
    index: '02',
    id: 'authority',
    name: 'Organic Authority',
    description:
      'The foundation underneath the map pin: a site that’s technically sound, locally relevant, and built to earn rankings on merit.',
    items: ['Local SEO Audits', 'On-Page & Technical SEO', 'Schema Markup', 'Localized Landing Pages'],
  },
  {
    index: '03',
    id: 'ai-discovery',
    name: 'AI Discovery',
    description:
      'Where search is heading: structuring information so generative engines understand a business well enough to recommend it.',
    items: ['Generative Engine Optimization (GEO)', 'Answer Engine Optimization (AEO)', 'Entity & Brand Signals', 'AI Search Visibility'],
  },
];

// EXPERTISE: real services from the old site and Upwork, grouped for the homepage preview.
// Full detail lives in content/services.ts and renders at /services/[slug]/.
export const expertise = [
  {
    id: 'gmb',
    slug: 'google-business-profile-optimization',
    name: 'Google Business Profile',
    summary: 'Complete GMB/GBP setup, audit, and ongoing optimization.',
    capabilities: [
      'Full profile setup & optimization',
      'Category & attribute selection',
      'Posts scheduling & optimization',
      'Local business schema markup',
    ],
  },
  {
    id: 'audit',
    slug: 'local-seo-audits-strategy',
    name: 'Local SEO Audits & Strategy',
    summary: 'A clear-eyed read on where a business stands, and a plan to move it.',
    capabilities: [
      'Comprehensive local SEO audit',
      'Competitor analysis',
      'Custom local SEO strategy',
      'Monthly performance tracking',
    ],
  },
  {
    id: 'citations',
    slug: 'citation-building',
    name: 'Citation Building & Local Links',
    summary: 'The trust infrastructure search engines check before ranking anyone.',
    capabilities: [
      'NAP consistency cleanup',
      'High-quality local citations',
      'Local directory submissions',
      'Relevant local backlinks',
    ],
  },
  {
    id: 'maps',
    slug: 'google-maps-seo',
    name: 'Google Maps SEO',
    summary: 'Turning map visibility into calls, directions, and foot traffic.',
    capabilities: [
      'Maps ranking optimization',
      'Local keyword research',
      'Review generation strategy',
      'Localized content creation',
    ],
  },
  {
    id: 'geo',
    slug: 'ai-search-optimization',
    name: 'GEO & AEO',
    summary: 'Structuring a business’s data so AI engines cite it, not a competitor.',
    capabilities: [
      'Generative Engine Optimization for ChatGPT, Gemini & Perplexity',
      'Answer Engine Optimization',
      'Structured data for AI comprehension',
      'AI search visibility tracking (AthenaHQ)',
    ],
  },
];

// APPROACH: process-driven section, not a fabricated case-study list.
export const approach = [
  {
    index: '01',
    name: 'Audit',
    description:
      'Every engagement starts with a comprehensive local SEO audit: profile health, citation consistency, technical foundations, and a clear read on the competitive map.',
  },
  {
    index: '02',
    name: 'Strategy',
    description:
      'Findings become a custom local SEO strategy, built around which levers matter most for this business, this category, this market, not a generic checklist.',
  },
  {
    index: '03',
    name: 'Execution',
    description:
      'GBP optimization, citation building, technical fixes, and content go live in a deliberate sequence, built for compounding results rather than short-lived spikes.',
  },
  {
    index: '04',
    name: 'Measurement',
    description:
      'Monthly performance tracking keeps the strategy honest: what’s moving, what isn’t, and what changes next.',
  },
];

// AI SEARCH INTELLIGENCE flow
export const aiFlow = ['Search', 'Understanding', 'Entity', 'Trust', 'Recommendation'];

export const toolkit = [
  'Google Search Console & Analytics',
  'Ahrefs / SEMrush',
  'Screaming Frog',
  'Local Citation & Rank Tracking Tools',
  'AthenaHQ (AI Search Tracking)',
];

export const proof = {
  stats: [
    { value: person.projectsCompleted, label: 'Local SEO Projects Completed' },
    { value: `${person.experienceYears}+`, label: 'Years in Local SEO & GMB Optimization' },
    { value: '5', label: 'Toolkit Platforms in Active Use' },
  ],
};

export const faq = [
  {
    q: 'How long does it take to see results from Local SEO?',
    a: 'Local SEO compounds rather than spikes. Profile and citation fixes can move visibility within the first few weeks, while competitive Map Pack rankings and organic authority typically build over several months of consistent work.',
  },
  {
    q: 'What’s the difference between regular SEO and Local SEO?',
    a: 'Regular SEO competes for rankings across the entire web. Local SEO competes for a specific radius. It lives or dies on Google Business Profile signals, citation consistency, and proximity relevance, not just content and links.',
  },
  {
    q: 'Do I need to be tech-savvy to work with you?',
    a: 'No. Audits, strategy, and reporting are communicated in plain language. The technical execution (schema, citations, profile architecture) is handled end to end.',
  },
  {
    q: 'How do you measure the success of your Local SEO work?',
    a: 'Monthly performance tracking against the metrics that actually matter for local: Map Pack visibility, local keyword rankings, profile engagement, and the quality of citation and review signals.',
  },
  {
    q: 'Can you help with multiple locations?',
    a: 'Yes. Multi-location businesses need consistent NAP data, individualized local landing pages, and per-location profile strategy, all of which is core to this work.',
  },
];

export const finalCta = {
  headline: ['YOUR NEXT SEARCH', 'ADVANTAGE STARTS HERE.'],
  sub: 'One conversation on Upwork is where it starts.',
  cta: 'Hire Me on Upwork',
};

export const meta = {
  title: 'Abdullah Saleem, Local SEO & AI Search Strategist',
  description:
    'Abdullah Saleem is a Local SEO expert specializing in Google Maps visibility, Google Business Profile optimization, and Generative and Answer Engine Optimization (GEO/AEO). He helps local businesses get recommended by both search engines and AI.',
  siteUrl: PRODUCTION_DOMAIN,
};
