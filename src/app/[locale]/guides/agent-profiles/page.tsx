import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/agent-profiles.mdx';
import Fr from '@/content/fr/guides/agent-profiles.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: {
      title: 'Agent Profiles & Domain Playbooks — Custom NeuraForge agents without a new runtime',
      description: 'Create custom agent profiles and domain playbooks, with a complete WildFly to Spring Boot migration example.',
    },
    fr: {
      title: 'Agent Profiles & Domain Playbooks — Agents NeuraForge sur mesure sans nouveau runtime',
      description: 'Creer des profils agents et playbooks metier, avec un exemple complet de migration WildFly vers Spring Boot.',
    },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
