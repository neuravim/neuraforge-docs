import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/providers/custom-api.mdx';
import Fr from '@/content/fr/guides/providers/custom-api.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'Custom API Provider — LiteLLM, Ollama, Azure, OpenAI', description: 'Connect any LLM to NeuraForge via OpenAI-compatible API. LiteLLM, Ollama, Azure, OpenAI direct.' },
    fr: { title: 'Provider API custom — LiteLLM, Ollama, Azure, OpenAI', description: 'Branchez n\'importe quel LLM sur NeuraForge via API OpenAI-compatible.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
