import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/troubleshooting.mdx';
import Fr from '@/content/fr/guides/troubleshooting.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Troubleshooting NeuraForge — Quick Fixes for Common Issues', description: 'Quick solutions: command not found, no provider, budget exceeded, circuit breaker, blocked feature.' },
    fr: { title: 'Troubleshooting NeuraForge — Solutions rapides aux problemes courants', description: 'Solutions rapides : command not found, no provider, budget exceeded, circuit breaker, feature bloquee.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
