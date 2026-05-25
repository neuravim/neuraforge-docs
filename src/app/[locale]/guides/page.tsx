import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const hub = dict.hub.guides;
  return {
    title: hub.title,
    description: hub.description,
  };
}

const cardHrefs = [
  'why-neuraforge',
  'modes',
  'agents',
  'providers',
  'configuration',
  'memory',
  'rules-and-templates',
  'skills',
  'troubleshooting',
];

export default async function GuidesHub({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const hub = dict.hub.guides;

  return (
    <div>
      <h1
        className="text-3xl font-bold mb-3"
        style={{ color: 'var(--neuraforge-text-primary)' }}
      >
        {hub.title}
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--neuraforge-text-muted)' }}>
        {hub.description}
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {hub.cards.map((card, i) => (
          <Card
            key={cardHrefs[i]}
            href={`/${locale}/guides/${cardHrefs[i]}`}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}
