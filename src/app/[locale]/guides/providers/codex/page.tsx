import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers/codex.mdx';
import Fr from '@/content/fr/guides/providers/codex.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Codex CLI as AIDEN Provider — Workspace-Aware Code Generation', description: 'Configure Codex CLI as an AIDEN provider for generation, review and refinement with sandboxed execution.' },
    fr: { title: 'Codex CLI comme provider AIDEN — Generation de code workspace-aware', description: 'Configurer Codex CLI comme provider AIDEN pour generation, review et refinement avec execution sandboxee.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
