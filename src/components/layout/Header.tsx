'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const breadcrumbs = buildBreadcrumbs(pathname, locale);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('neuraforge-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.removeItem('neuraforge-theme');
    }
  };

  const switchLocale = () => {
    const otherLocale = locale === 'en' ? 'fr' : 'en';
    const newPath = pathname.replace(`/${locale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between h-14 px-6"
      style={{
        background: 'var(--neuraforge-bg-primary)',
        borderBottom: '1px solid var(--neuraforge-border)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav className="flex items-center gap-1.5 text-sm">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <span style={{ color: 'var(--neuraforge-text-muted)' }} className="text-xs">/</span>
            )}
            <Link
              href={crumb.href}
              className="no-underline transition-colors"
              style={{
                color:
                  i === breadcrumbs.length - 1
                    ? 'var(--neuraforge-text-primary)'
                    : 'var(--neuraforge-text-muted)',
                fontSize: '0.875rem',
              }}
            >
              {crumb.label}
            </Link>
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <kbd
          className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md"
          style={{
            background: 'var(--neuraforge-bg-secondary)',
            color: 'var(--neuraforge-text-muted)',
            border: '1px solid var(--neuraforge-border)',
          }}
        >
          Ctrl+K
        </kbd>

        <button
          onClick={switchLocale}
          className="p-1.5 rounded-md transition-colors cursor-pointer text-xs font-semibold"
          style={{
            color: 'var(--neuraforge-text-muted)',
            background: 'transparent',
            border: 'none',
          }}
          aria-label="Switch language"
        >
          {locale === 'en' ? 'FR' : 'EN'}
        </button>

        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-md transition-colors cursor-pointer"
          style={{
            color: 'var(--neuraforge-text-muted)',
            background: 'transparent',
            border: 'none',
          }}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>

        <a
          href="https://github.com/neuravim/neuraforge-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm no-underline transition-colors"
          style={{ color: 'var(--neuraforge-text-muted)' }}
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function buildBreadcrumbs(pathname: string, locale: string): Array<{ label: string; href: string }> {
  const crumbs = [{ label: 'NeuraForge', href: `/${locale}` }];

  if (pathname === `/${locale}` || pathname === `/${locale}/`) return crumbs;

  // Remove the locale prefix and split
  const withoutLocale = pathname.replace(`/${locale}`, '');
  const parts = withoutLocale.split('/').filter(Boolean);

  let path = `/${locale}`;
  for (const part of parts) {
    path += `/${part}`;
    crumbs.push({
      label: part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      href: path,
    });
  }

  return crumbs;
}
