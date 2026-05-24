import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/memory.mdx';
import Fr from '@/content/fr/guides/memory.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'NeuraForge Memory Governance — Scoped Task, Session, Project and User Memory', description: 'Understand NeuraForge scoped memory governance: precedence, read/write policies, lifecycles, summarization and safe defaults.' },
    fr: { title: 'Gouvernance mémoire NeuraForge — Scopes task, session, project et user', description: 'Comprendre la gouvernance mémoire NeuraForge : précédence, politiques read/write, cycles de vie, summarization et défauts sûrs.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
