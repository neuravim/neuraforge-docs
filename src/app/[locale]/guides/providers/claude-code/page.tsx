import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers/claude-code.mdx';
import Fr from '@/content/fr/guides/providers/claude-code.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Claude Code as NeuraForge Provider — Setup Guide', description: 'Configure Claude Code CLI as NeuraForge provider: OAuth, API key, slash commands, auto routing.' },
    fr: { title: 'Claude Code comme provider NeuraForge — Guide de configuration', description: 'Configurez Claude Code CLI comme provider NeuraForge : OAuth, API key, slash commands, routage auto.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
