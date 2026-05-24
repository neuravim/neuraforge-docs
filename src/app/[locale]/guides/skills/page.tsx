import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/skills.mdx';
import Fr from '@/content/fr/guides/skills.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'NeuraForge Skills Marketplace — 19 Official Skills, Packs & Registry', description: 'Install skills on demand from the marketplace: security (OWASP, secrets), compliance (GDPR, HIPAA), frameworks (NestJS, React), and more. Skill packs for instant team setup.' },
    fr: { title: 'Marketplace Skills NeuraForge — 19 Skills Officiels, Packs & Registry', description: 'Installez des skills a la demande : securite (OWASP, secrets), compliance (RGPD, HIPAA), frameworks (NestJS, React) et plus. Skill packs pour configurer une equipe en une commande.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
