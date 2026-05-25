'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getNavigation } from '@/lib/navigation';

function getLocaleFromPath(pathname: string): string {
  const match = pathname.match(/^\/(en|fr)(\/|$)/);
  return match ? match[1] : 'en';
}

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  const allItems = useMemo(() => {
    const nav = getNavigation(locale);
    return nav.flatMap((section) =>
      section.items.map((item) => ({
        ...item,
        section: section.title,
      })),
    );
  }, [locale]);

  const filtered = query
    ? allItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.section.toLowerCase().includes(query.toLowerCase()),
      )
    : allItems;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (!open) return;
      if (e.key === 'Escape') {
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        router.push(filtered[selectedIndex].href);
        setOpen(false);
        setQuery('');
      }
    },
    [open, filtered, selectedIndex, router],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!open) return null;

  const placeholder = locale === 'fr' ? 'Rechercher dans la documentation...' : 'Search documentation...';
  const noResults = locale === 'fr' ? 'Aucun resultat pour' : 'No results for';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div
        className="fixed inset-0 bg-black/30"
        onClick={() => setOpen(false)}
      />
      <div
        className="relative w-full max-w-lg rounded-xl overflow-hidden"
        style={{
          background: 'var(--neuraforge-bg-card)',
          border: '1px solid var(--neuraforge-border)',
          boxShadow: 'var(--neuraforge-shadow-lg)',
        }}
      >
        <div className="flex items-center px-4" style={{ borderBottom: '1px solid var(--neuraforge-border)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neuraforge-text-muted)" strokeWidth="2" strokeLinecap="round" className="shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-3 py-3.5 text-sm bg-transparent outline-none"
            style={{ color: 'var(--neuraforge-text-primary)' }}
          />
        </div>
        <div className="max-h-72 overflow-y-auto">
          {filtered.map((item, i) => (
            <button
              key={item.href}
              onClick={() => {
                router.push(item.href);
                setOpen(false);
                setQuery('');
              }}
              className="w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors cursor-pointer"
              style={{
                background:
                  i === selectedIndex ? 'var(--neuraforge-bg-hover)' : 'transparent',
                color: 'var(--neuraforge-text-secondary)',
              }}
            >
              <span style={{ color: i === selectedIndex ? 'var(--neuraforge-text-primary)' : 'var(--neuraforge-text-secondary)' }}>
                {item.title}
              </span>
              <span className="text-xs" style={{ color: 'var(--neuraforge-text-muted)' }}>
                {item.section}
              </span>
            </button>
          ))}
          {filtered.length === 0 && (
            <p
              className="px-4 py-6 text-sm text-center"
              style={{ color: 'var(--neuraforge-text-muted)' }}
            >
              {noResults} &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
