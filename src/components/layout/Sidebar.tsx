'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getNavigation, type NavSection } from '@/lib/navigation';
import { AidenLogo } from '@/components/ui/AidenLogo';

const sectionIcons: Record<string, string> = {
  rocket: '🚀',
  book: '📖',
  terminal: '⌨️',
  code: '🧑‍🍳',
};

export function Sidebar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigation = getNavigation(locale);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg"
        style={{ background: 'var(--aiden-bg-card)', border: '1px solid var(--aiden-border)' }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 overflow-y-auto transition-transform md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'var(--aiden-bg-sidebar)',
          borderRight: '1px solid var(--aiden-border)',
        }}
      >
        <div className="p-5">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-8 no-underline">
            <AidenLogo size={32} />
            <div>
              <span className="font-bold text-sm" style={{ color: 'var(--aiden-text-primary)' }}>
                NeuraForge
              </span>
              <span className="ml-1.5 text-xs" style={{ color: 'var(--aiden-text-muted)' }}>
                v0.7.0
              </span>
            </div>
          </Link>

          <nav className="space-y-6">
            {navigation.map((section) => (
              <SidebarSection
                key={section.title}
                section={section}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>
      </aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

function SidebarSection({
  section,
  pathname,
}: {
  section: NavSection;
  pathname: string;
}) {
  return (
    <div>
      <h3
        className="text-[11px] font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
        style={{ color: 'var(--aiden-text-muted)' }}
      >
        <span>{sectionIcons[section.icon] ?? '📄'}</span>
        {section.title}
      </h3>
      <ul className="space-y-0.5">
        {section.items.map((item) => {
          const isActive = pathname === item.href;
          const isChildActive = item.children?.some((c) => pathname === c.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-3 py-1.5 rounded-md text-[13px] transition-all no-underline"
                style={{
                  color: isActive || isChildActive
                    ? 'var(--aiden-accent-primary)'
                    : 'var(--aiden-text-secondary)',
                  background: isActive ? 'var(--aiden-accent-primary-light)' : 'transparent',
                  fontWeight: isActive || isChildActive ? 500 : 400,
                }}
              >
                {item.title}
              </Link>
              {item.children && (isActive || isChildActive || pathname.startsWith(item.href + '/')) && (
                <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-[var(--aiden-border)] pl-2">
                  {item.children.map((child) => {
                    const isSubActive = pathname === child.href;
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-2 py-1 rounded-md text-[12px] transition-all no-underline"
                          style={{
                            color: isSubActive
                              ? 'var(--aiden-accent-primary)'
                              : 'var(--aiden-text-muted)',
                            background: isSubActive ? 'var(--aiden-accent-primary-light)' : 'transparent',
                            fontWeight: isSubActive ? 500 : 400,
                          }}
                        >
                          {child.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
