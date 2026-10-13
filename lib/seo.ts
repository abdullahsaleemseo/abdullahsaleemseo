import type { Metadata } from 'next';
import { meta, person } from '@/content/site';

export function pageUrl(path: string) {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${meta.siteUrl}${clean}`;
}

export function buildMetadata({
  title,
  description,
  path,
  ogImagePath,
}: {
  title: string;
  description: string;
  path: string;
  ogImagePath?: string;
}): Metadata {
  const url = pageUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: `${person.name} | Local SEO Strategist`,
      ...(ogImagePath ? { images: [{ url: pageUrl(ogImagePath) }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
