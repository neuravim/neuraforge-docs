import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/why-neuraforge.mdx';
import Fr from '@/content/fr/guides/pourquoi-neuraforge.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: {
      title: 'Why NeuraForge — Usage, Control and WildFly Migration',
      description:
        'A practical guide to using NeuraForge, reducing hidden coordination costs, and understanding why WildFly to Spring Boot migration is a strong enterprise use case.',
    },
    fr: {
      title: 'Pourquoi NeuraForge — Usage, controle et migration WildFly',
      description:
        "Un guide concret pour utiliser NeuraForge, reduire les couts caches de coordination et comprendre le cas enterprise WildFly vers Spring Boot.",
    },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
