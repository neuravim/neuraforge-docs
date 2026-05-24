import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/cookbook/migration-bmad.mdx';
import Fr from '@/content/fr/cookbook/migration-bmad.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Migration from BMAD to NeuraForge — Equivalence Table', description: 'Migrate from BMAD: from 12h to 30 min, from 31K to 8K tokens. Agent equivalences, migration steps.' },
    fr: { title: 'Migration BMAD vers NeuraForge — Tableau d\'equivalences', description: 'Migrer de BMAD vers NeuraForge : de 12h a 30 min, de 31K a 8K tokens.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
