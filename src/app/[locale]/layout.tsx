import type { ReactNode } from 'react';
import { locales } from '@/i18n/config';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TableOfContents } from '@/components/layout/TableOfContents';
import { SearchModal } from '@/components/ui/SearchModal';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Sidebar locale={locale} />
      <SearchModal />
      <div className="md:ml-64">
        <Header locale={locale} />
        <div className="flex">
          <main className="flex-1 max-w-3xl mx-auto px-6 py-8 prose-neuraforge">
            {children}
            <Footer />
          </main>
          <TableOfContents />
        </div>
      </div>
    </>
  );
}
