import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/cookbook/brownfield.mdx';
import Fr from '@/content/fr/cookbook/brownfield.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Brownfield — Integrate NeuraForge into an Existing Project', description: 'Guide to add NeuraForge to a production project: auto scan, convention rules, Java/Spring, Node/Express examples.' },
    fr: { title: 'Brownfield — Integrer NeuraForge dans un projet existant', description: 'Guide pour ajouter NeuraForge a un projet en production : scan automatique, regles de conventions.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
