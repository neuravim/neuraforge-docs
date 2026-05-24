import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/cookbook/ci-cd.mdx';
import Fr from '@/content/fr/cookbook/ci-cd.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: 'NeuraForge in CI/CD — GitHub Actions, GitLab CI, Metrics', description: 'Integrate NeuraForge in CI/CD: artefact validation, automatic metrics, non-interactive flash, dashboards.' },
    fr: { title: 'NeuraForge en CI/CD — GitHub Actions, GitLab CI, metriques', description: 'Integrez NeuraForge dans vos pipelines CI/CD : validation des artefacts, metriques automatiques.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
