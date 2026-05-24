import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers.mdx';
import Fr from '@/content/fr/guides/providers.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'AI Providers — Claude, Gemini, Copilot, Ollama and More', description: 'Connect NeuraForge to Claude Code, Gemini CLI, Copilot, OpenCode or any LLM via API. Smart routing, token budget.' },
    fr: { title: 'Providers IA — Claude, Gemini, Copilot, Ollama et plus', description: 'Connectez NeuraForge a Claude Code, Gemini CLI, Copilot, OpenCode ou n\'importe quel LLM via API.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
