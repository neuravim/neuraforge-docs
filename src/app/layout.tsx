import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = process.env.SITE_URL || 'https://neuraforge.neuravim.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NeuraForge — AI-Driven Engineering CLI Framework',
    template: '%s | NeuraForge Docs',
  },
  description:
    'Orchestrate 7 specialized AI agents (Analyst, Planner, Dev, Security Reviewer, QA...) via CLI. 3 adaptive modes, multi-provider (Claude, Gemini, Copilot), enterprise integration. Open source.',
  keywords: [
    'NeuraForge',
    'AI development',
    'CLI framework',
    'AI agents',
    'Claude Code',
    'Gemini CLI',
    'GitHub Copilot',
    'developer tools',
    'AI engineering',
    'code generation',
    'enterprise AI',
    'multi-provider AI',
    'orchestration IA',
    'developpement assiste IA',
  ],
  authors: [{ name: 'Astrolyn' }],
  creator: 'Astrolyn',
  openGraph: {
    type: 'website',
    siteName: 'NeuraForge Documentation',
    title: 'NeuraForge — AI-Driven Engineering CLI Framework',
    description:
      'Orchestrate 7 specialized AI agents via CLI. From bug fix in 30s to enterprise architecture. Open source, multi-provider.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraForge — AI-Driven Engineering CLI',
    description:
      'Orchestrate 7 specialized AI agents via CLI. From bug fix in 30s to enterprise architecture.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'NeuraForge',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Windows, macOS, Linux',
              description:
                'Open source CLI framework to orchestrate specialized AI agents for enterprise software development.',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              author: { '@type': 'Organization', name: 'Astrolyn' },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('neuraforge-theme');
                if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
