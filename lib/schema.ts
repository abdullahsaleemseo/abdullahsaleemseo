import { meta, person, links } from '@/content/site';
import { pageUrl } from './seo';

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': `${meta.siteUrl}/#person`,
    name: person.name,
    jobTitle: person.roleLong,
    email: `mailto:${person.email}`,
    url: meta.siteUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: person.location,
    },
    sameAs: [links.upwork, links.github, links.gitlab, links.instagram, links.twitter, links.pinterest, links.facebook],
    knowsAbout: [
      'Local SEO',
      'Google Business Profile Optimization',
      'Google Maps Ranking',
      'Technical SEO',
      'Generative Engine Optimization',
      'Answer Engine Optimization',
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${meta.siteUrl}/#website`,
    url: meta.siteUrl,
    name: `${person.name} | Local SEO Strategist`,
    description: meta.description,
    publisher: { '@id': `${meta.siteUrl}/#person` },
  };
}

export function profilePageSchema() {
  return {
    '@type': 'ProfilePage',
    '@id': `${meta.siteUrl}/#profilepage`,
    url: meta.siteUrl,
    mainEntity: { '@id': `${meta.siteUrl}/#person` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${pageUrl(path)}#service`,
    name,
    description,
    url: pageUrl(path),
    provider: { '@id': `${meta.siteUrl}/#person` },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide (remote)',
    },
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    '@type': 'Article',
    '@id': `${pageUrl(path)}#article`,
    headline: title,
    description,
    url: pageUrl(path),
    datePublished,
    dateModified: datePublished,
    author: { '@id': `${meta.siteUrl}/#person` },
    publisher: { '@id': `${meta.siteUrl}/#person` },
    mainEntityOfPage: pageUrl(path),
  };
}

export function jsonLdGraph(...nodes: object[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
