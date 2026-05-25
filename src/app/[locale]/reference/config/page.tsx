import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/reference/config.mdx';
import Fr from '@/content/fr/reference/config.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Configuration Reference — Full neuraforge.config.yaml Schema', description: 'Exhaustive schema: providers CLI and API, routing, token budget, pipeline, security.' },
    fr: { title: 'Reference Configuration — Schema complet neuraforge.config.yaml', description: 'Schema exhaustif : providers CLI et API, routing, budget tokens, pipeline, securite.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
