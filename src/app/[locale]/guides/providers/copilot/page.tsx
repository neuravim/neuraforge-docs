import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers/copilot.mdx';
import Fr from '@/content/fr/guides/providers/copilot.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'GitHub Copilot as NeuraForge Provider — Free with Your Subscription', description: 'GitHub Copilot as NeuraForge provider: zero cost, ideal fallback for quick fixes.' },
    fr: { title: 'GitHub Copilot comme provider NeuraForge — Gratuit avec votre abonnement', description: 'GitHub Copilot comme provider NeuraForge : cout zero, ideal en fallback pour les quick fixes.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
