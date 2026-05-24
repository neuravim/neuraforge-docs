import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/getting-started/installation.mdx';
import Fr from '@/content/fr/getting-started/installation.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Install NeuraForge — Complete Guide in 3 Steps', description: 'Install NeuraForge CLI in 3 minutes: Node.js 20+, AI provider, and neuraforge init. Guide with troubleshooting.' },
    fr: { title: 'Installation NeuraForge — Guide complet en 3 etapes', description: 'Installez NeuraForge CLI en 3 minutes : Node.js 20+, provider IA, et neuraforge init. Guide avec troubleshooting.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
