import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';
import { Card } from '@/components/ui/Card';
import { Terminal } from '@/components/ui/Terminal';
import { AgentFlow } from '@/components/ui/AgentFlow';
import { NeuraForgeLogo } from '@/components/ui/NeuraForgeLogo';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'NeuraForge — Your AI Agents Code, Analyze and Review For You'
      : 'NeuraForge — Vos agents IA codent, analysent et reviewent a votre place',
    description: isEn
      ? 'Open source CLI framework orchestrating 7 AI agents (Analyst, Planner, Dev, Security Reviewer, QA, DocOps). Multi-provider: Claude, Gemini, Copilot. From bug fix in 30s to enterprise project.'
      : 'Framework CLI open source orchestrant 7 agents IA, dont Security Reviewer. Multi-provider : Claude, Gemini, Copilot. Du bug fix en 30s au projet enterprise.',
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center pt-8">
        <div className="flex justify-center mb-6">
          <NeuraForgeLogo size={64} />
        </div>
        <span
          className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{
            background: 'var(--neuraforge-bg-secondary)',
            color: 'var(--neuraforge-accent-primary)',
            border: '1px solid var(--neuraforge-border)',
          }}
        >
          {t.badge}
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          style={{ color: 'var(--neuraforge-text-primary)' }}
        >
          {t.title_line1}
          <br />
          <span style={{ color: 'var(--neuraforge-accent-primary)' }}>{t.title_line2}</span>
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto mb-2"
          style={{ color: 'var(--neuraforge-text-muted)' }}
        >
          {t.description}
        </p>
        <p
          className="text-lg font-semibold max-w-2xl mx-auto"
          style={{ color: 'var(--neuraforge-text-primary)' }}
        >
          {t.description_bold}
        </p>
      </section>

      {/* Terminal demo */}
      <section>
        <Terminal title={t.terminal_title}>
          {`$ npm install -g @neuravim/neuraforge
$ cd my-project && neuraforge init
NeuraForge  Project scanned: node, typescript, react, vitest
NeuraForge  Config created: .neuraforge/neuraforge.config.yaml
$ neuraforge flash "Add a GET /health endpoint that returns { status: ok }"
NeuraForge  Mode: flash (2 agents)
NeuraForge  Lead analyzing request...
NeuraForge  Dev generating code...
NeuraForge  Created: src/routes/health.ts
NeuraForge  Created: tests/health.test.ts
NeuraForge  Feature completed in 28s`}
        </Terminal>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { value: '7', label: t.stats.agents },
          { value: '3', label: t.stats.modes },
          { value: '5+', label: t.stats.providers },
          { value: '~8K', label: t.stats.tokens },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-xl"
            style={{
              background: 'var(--neuraforge-bg-card)',
              border: '1px solid var(--neuraforge-border)',
            }}
          >
            <div
              className="text-2xl font-bold"
              style={{ color: 'var(--neuraforge-accent-primary)' }}
            >
              {stat.value}
            </div>
            <div className="text-xs mt-1" style={{ color: 'var(--neuraforge-text-muted)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Modes */}
      <section>
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: 'var(--neuraforge-text-primary)' }}
        >
          {t.modes_title}
        </h2>
        <p
          className="text-center text-sm mb-8"
          style={{ color: 'var(--neuraforge-text-muted)' }}
        >
          {t.modes_subtitle}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: t.flash_title,
              desc: t.flash_desc,
              color: '#d97706',
            },
            {
              title: t.standard_title,
              desc: t.standard_desc,
              color: '#e85d04',
            },
            {
              title: t.enterprise_title,
              desc: t.enterprise_desc,
              color: '#7c3aed',
            },
          ].map((mode) => (
            <div
              key={mode.title}
              className="p-5 rounded-xl"
              style={{
                background: 'var(--neuraforge-bg-card)',
                border: '1px solid var(--neuraforge-border)',
                borderTop: `3px solid ${mode.color}`,
              }}
            >
              <h3
                className="font-semibold text-sm mb-2"
                style={{ color: 'var(--neuraforge-text-primary)' }}
              >
                {mode.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--neuraforge-text-muted)' }}>
                {mode.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent flow */}
      <section>
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: 'var(--neuraforge-text-primary)' }}
        >
          {t.agents_title}
        </h2>
        <p
          className="text-center text-sm mb-6"
          style={{ color: 'var(--neuraforge-text-muted)' }}
        >
          {t.agents_subtitle}
        </p>
        <AgentFlow />
      </section>

      {/* Why section */}
      <section>
        <h2
          className="text-2xl font-bold text-center mb-2"
          style={{ color: 'var(--neuraforge-text-primary)' }}
        >
          {t.why_title}
        </h2>
        <p
          className="text-center text-sm mb-8"
          style={{ color: 'var(--neuraforge-text-muted)' }}
        >
          {t.why_subtitle}
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {t.why_items.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl"
              style={{
                background: 'var(--neuraforge-bg-card)',
                border: '1px solid var(--neuraforge-border)',
              }}
            >
              <h3
                className="font-semibold text-sm mb-1"
                style={{ color: 'var(--neuraforge-text-primary)' }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--neuraforge-text-muted)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--neuraforge-text-primary)' }}
        >
          {t.cta_title}
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--neuraforge-text-muted)' }}>
          {t.cta_subtitle}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card
            href={`/${locale}/getting-started/installation`}
            title={t.cta_install}
            description={t.cta_install_desc}
          />
          <Card
            href={`/${locale}/getting-started/quickstart`}
            title={t.cta_quickstart}
            description={t.cta_quickstart_desc}
          />
          <Card
            href={`/${locale}/getting-started/first-feature`}
            title={t.cta_feature}
            description={t.cta_feature_desc}
          />
        </div>
      </section>
    </div>
  );
}
