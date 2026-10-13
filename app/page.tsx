import { jsonLdGraph, profilePageSchema } from '@/lib/schema';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { LocalSearchStack } from '@/components/LocalSearchStack';
import { Expertise } from '@/components/Expertise';
import { Approach } from '@/components/Approach';
import { WorkPreview } from '@/components/WorkPreview';
import { AISearch } from '@/components/AISearch';
import { Proof } from '@/components/Proof';
import { InsightsPreview } from '@/components/InsightsPreview';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const jsonLd = jsonLdGraph(profilePageSchema());

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <LocalSearchStack />
        <Expertise />
        <Approach />
        <WorkPreview />
        <AISearch />
        <Proof />
        <InsightsPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
