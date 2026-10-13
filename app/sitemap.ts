import type { MetadataRoute } from 'next';
import { meta } from '@/content/site';
import { services } from '@/content/services';
import { articles } from '@/content/insights';

const staticRoutes = ['/', '/about/', '/services/', '/work/', '/insights/', '/locations/', '/contact/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${meta.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${meta.siteUrl}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${meta.siteUrl}/insights/${a.slug}/`,
    lastModified: new Date(a.datePublished),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries];
}
