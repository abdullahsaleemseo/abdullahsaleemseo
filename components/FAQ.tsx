import { faq } from '@/content/site';
import { FAQList } from './FAQList';

export function FAQ() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-graphite-border">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <FAQList items={faq} />
      </div>
    </section>
  );
}
