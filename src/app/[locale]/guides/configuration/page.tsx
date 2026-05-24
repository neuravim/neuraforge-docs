import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/configuration.mdx';
import Fr from '@/content/fr/guides/configuration.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'NeuraForge Configuration — 5 Levels, From 4 Lines to Full Control', description: '5 configuration levels: defaults, enterprise, project, feature, CLI flags. 4 YAML lines to start.' },
    fr: { title: 'Configuration NeuraForge — 5 niveaux, de 4 lignes a la maitrise totale', description: '5 niveaux de configuration. 4 lignes YAML suffisent pour demarrer.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
