import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, IBM_Plex_Mono } from 'next/font/google';
import { MotionConfig } from 'framer-motion';
import './globals.css';
import { CustomCursor } from '@/components/CustomCursor';
import { GrainOverlay } from '@/components/GrainOverlay';
import { meta, person, links } from '@/content/site';
import { personSchema, websiteSchema, jsonLdGraph } from '@/lib/schema';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: meta.title,
    template: `%s | ${person.name}`,
  },
  description: meta.description,
  keywords: [
    'Local SEO',
    'Google Business Profile',
    'Google Maps SEO',
    'GEO',
    'Generative Engine Optimization',
    'AEO',
    'Answer Engine Optimization',
    'AI Search Optimization',
    person.name,
  ],
  authors: [{ name: person.name, url: links.upwork }],
  creator: person.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: meta.siteUrl,
    title: meta.title,
    description: meta.description,
    siteName: `${person.name} | Local SEO Strategist`,
  },
  twitter: {
    card: 'summary_large_image',
    title: meta.title,
    description: meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = jsonLdGraph(personSchema(), websiteSchema());

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body bg-obsidian text-pearl antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          <CustomCursor />
          <GrainOverlay />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
