import { createContentPage } from '@/lib/create-content-page';
import En from '@/content/en/guides/modes.mdx';
import Fr from '@/content/fr/guides/modes.mdx';

const page = createContentPage({
  content: { en: En, fr: Fr },
  metadata: {
    en: { title: '3 NeuraForge Modes — Flash, Standard, Enterprise', description: 'Which mode to choose? Flash for bug fixes (30s), Standard for features (2h), Enterprise for critical projects.' },
    fr: { title: 'Les 3 modes NeuraForge — Flash, Standard, Enterprise', description: 'Quel mode choisir ? Flash pour les bug fixes, Standard pour les features, Enterprise pour les projets critiques.' },
  },
});

export const generateStaticParams = page.generateStaticParams;
export const generateMetadata = page.generateMetadata;
export default page.Page;
