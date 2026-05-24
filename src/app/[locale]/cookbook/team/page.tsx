import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/cookbook/team.mdx';
import Fr from '@/content/fr/cookbook/team.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'NeuraForge for Teams — From 5 to 50 Developers', description: 'Deploy NeuraForge for teams: shared Git rules, Git workflow, 30-min onboarding, adoption metrics.' },
    fr: { title: 'NeuraForge en equipe — De 5 a 50 developpeurs', description: 'Deployer NeuraForge en equipe : regles partagees Git, workflow Git, onboarding 30 min, metriques.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
