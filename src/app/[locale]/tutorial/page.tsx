import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { Card } from '@/components/ui/Card';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Tutorial — Construire une todo-app avec NeuraForge de A a Z',
  description:
    'Apprenez NeuraForge en construisant une vraie API todo-app. Du setup au deploiement, decouvrez les 3 modes, 6 agents IA, et tous les outils en 5 chapitres pratiques.',
  keywords: [
    'NeuraForge tutorial',
    'AI development tutorial',
    'CLI AI agents',
    'todo app tutorial',
    'Claude Code tutorial',
    'AI assisted development',
    'developer workflow automation',
  ],
};

export default async function TutorialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div>
      <h1>Tutorial : construire une todo-app avec NeuraForge</h1>
      <p style={{ color: 'var(--neuraforge-text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
        Oubliez la theorie. Dans ce tutorial, vous allez <strong>construire une vraie API</strong> —
        un gestionnaire de taches — en utilisant NeuraForge du premier <code>init</code> jusqu&apos;aux
        metriques finales. Chaque chapitre ajoute une couche, chaque commande est executable.
        A la fin, vous maitriserez les 3 modes, les 6 agents, et tous les outils du quotidien.
      </p>
      <p style={{ color: 'var(--neuraforge-text-muted)', marginTop: '0.5rem' }}>
        Temps total estime : 30-45 minutes de lecture active. Zero prerequis NeuraForge.
      </p>

      <div className="grid gap-4 mt-8">
        <Card
          href={`/${locale}/tutorial/setup`}
          title="Chapitre 1 — Le terrain de jeu"
          description="Installer NeuraForge, initialiser le projet, et comprendre ce que vous avez entre les mains. 5 minutes pour etre operationnel."
          icon="🏗️"
        />
        <Card
          href={`/${locale}/tutorial/flash`}
          title="Chapitre 2 — Premier reflexe : le mode flash"
          description="Un bug? Une petite feature? Flash regle ca en 2 minutes. Vous allez voir pourquoi c'est addictif."
          icon="⚡"
        />
        <Card
          href={`/${locale}/tutorial/standard`}
          title="Chapitre 3 — Construire pour de vrai : le mode standard"
          description="4 agents collaborent pour livrer un CRUD complet. Analyst, Planner, Dev, QA — la chaine de montage en action."
          icon="🔧"
        />
        <Card
          href={`/${locale}/tutorial/enterprise`}
          title="Chapitre 4 — Quand la securite compte : le mode enterprise"
          description="Authentification JWT avec approbation humaine, DocOps, et audit trail. Pour les projets ou on ne plaisante pas."
          icon="🏢"
        />
        <Card
          href={`/${locale}/tutorial/toolbox`}
          title="Chapitre 5 — La boite a outils du quotidien"
          description="Status, metriques, retex, skills, resume, abort — tout ce qui fait d'NeuraForge un compagnon de dev, pas juste un generateur de code."
          icon="🧰"
        />
      </div>

      <div style={{
        marginTop: '2rem',
        padding: '1.25rem',
        borderRadius: 'var(--neuraforge-radius-lg)',
        background: 'var(--neuraforge-accent-primary-light)',
        border: '1px solid var(--neuraforge-accent-primary)',
      }}>
        <p style={{ margin: 0, color: 'var(--neuraforge-text-primary)' }}>
          <strong>Le projet fil rouge</strong> — Tout au long de ce tutorial, on construit <code>todo-api</code>,
          une API REST Express + TypeScript. Chaque chapitre ajoute une feature. A la fin, vous aurez
          un projet complet <em>et</em> la maitrise d&apos;NeuraForge. Deux pour le prix d&apos;un.
        </p>
      </div>
    </div>
  );
}
