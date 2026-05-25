'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;
    const elements = main.querySelectorAll('h2, h3');
    const items: TOCItem[] = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));
    setHeadings(items);
    setActiveId('');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <nav
      className="hidden xl:block sticky top-20 w-56 max-h-[calc(100vh-6rem)] overflow-y-auto text-sm"
      aria-label="Table of contents"
    >
      <h4
        className="text-[11px] font-semibold uppercase tracking-wider mb-3"
        style={{ color: 'var(--neuraforge-text-muted)' }}
      >
        Sur cette page
      </h4>
      <ul className="space-y-0.5" style={{ borderLeft: '1px solid var(--neuraforge-border)' }}>
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? '1.25rem' : '0.75rem' }}>
            <a
              href={`#${h.id}`}
              className="block py-1 transition-colors text-xs no-underline"
              style={{
                color:
                  activeId === h.id
                    ? 'var(--neuraforge-accent-primary)'
                    : 'var(--neuraforge-text-muted)',
                fontWeight: activeId === h.id ? 500 : 400,
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
