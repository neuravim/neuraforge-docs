import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/agents.mdx';
import Fr from '@/content/fr/guides/agents.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: '7 NeuraForge Agents — Your Complete AI Dev Team', description: 'Lead, Analyst, Planner, Dev, Security Reviewer, QA, DocOps: 7 specialized agents collaborating via structured pipeline.' },
    fr: { title: 'Les 7 agents NeuraForge — Votre equipe dev IA complete', description: 'Lead, Analyst, Planner, Dev, Security Reviewer, QA, DocOps : 7 agents specialises qui collaborent via un pipeline structure.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
