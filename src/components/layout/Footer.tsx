'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavigation } from '@/lib/navigation';

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(en|fr)(\/|$)/);
  return match ? match[1] : 'en';
}

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const { prev, next } = getPrevNext(pathname, locale);

  const prevLabel = locale === 'fr' ? 'Precedent' : 'Previous';
  const nextLabel = locale === 'fr' ? 'Suivant' : 'Next';

  return (
    <footer className="mt-16 pt-8" style={{ borderTop: '1px solid var(--aiden-border)' }}>
      <div className="flex justify-between items-stretch gap-4">
        {prev ? (
          <Link
            href={prev.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all no-underline flex-1"
            style={{
              border: '1px solid var(--aiden-border)',
              background: 'var(--aiden-bg-card)',
            }}
          >
            <span style={{ color: 'var(--aiden-text-muted)' }}>&#8592;</span>
            <div>
              <div className="text-[11px]" style={{ color: 'var(--aiden-text-muted)' }}>{prevLabel}</div>
              <div style={{ color: 'var(--aiden-text-primary)' }}>{prev.title}</div>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={next.href}
            className="flex items-center justify-end gap-3 px-4 py-3 rounded-lg text-sm transition-all no-underline flex-1 text-right"
            style={{
              border: '1px solid var(--aiden-border)',
              background: 'var(--aiden-bg-card)',
            }}
          >
            <div>
              <div className="text-[11px]" style={{ color: 'var(--aiden-text-muted)' }}>{nextLabel}</div>
              <div style={{ color: 'var(--aiden-accent-primary)' }}>{next.title}</div>
            </div>
            <span style={{ color: 'var(--aiden-accent-primary)' }}>&#8594;</span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
      <p className="mt-8 mb-4 text-xs text-center" style={{ color: 'var(--aiden-text-muted)' }}>
        NeuraForge — AI-Driven Engineering v0.7.0
      </p>
    </footer>
  );
}

function getPrevNext(
  pathname: string,
  locale: string,
): {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
} {
  const nav = getNavigation(locale);
  const allItems = nav.flatMap((s) => s.items);
  const idx = allItems.findIndex((item) => item.href === pathname);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? allItems[idx - 1] : undefined,
    next: idx < allItems.length - 1 ? allItems[idx + 1] : undefined,
  };
}
