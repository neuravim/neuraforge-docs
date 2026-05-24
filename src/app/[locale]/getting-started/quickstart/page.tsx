import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/getting-started/quickstart.mdx';
import Fr from '@/content/fr/getting-started/quickstart.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Quickstart — Your First AI Feature in 5 Minutes', description: 'Create an Express project, run neuraforge flash, and watch AI generate code and tests. 5-minute tutorial.' },
    fr: { title: 'Quickstart — Votre premiere feature IA en 5 minutes', description: 'Creez un projet Express, lancez neuraforge flash, et regardez l\'IA generer le code et les tests.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
