import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers/gemini.mdx';
import Fr from '@/content/fr/guides/providers/gemini.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Gemini CLI as NeuraForge Provider — 1M Tokens, Fast Code', description: 'Configure Gemini CLI: OAuth Google, API key, 1M token window, auto routing for code generation.' },
    fr: { title: 'Gemini CLI comme provider NeuraForge — 1M tokens, code rapide', description: 'Configurez Gemini CLI : OAuth Google, API key, fenetre 1M tokens, routage auto.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
