import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/reference/artefacts.mdx';
import Fr from '@/content/fr/reference/artefacts.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'NeuraForge Artefacts — The 7 Generated File Types', description: 'Brief, spec, stories, review, change-summary, ADR, quality report. Markdown with YAML frontmatter.' },
    fr: { title: 'Artefacts NeuraForge — Les 7 types de fichiers generes', description: 'Brief, spec, stories, review, change-summary, ADR, quality report. Markdown avec frontmatter YAML.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
