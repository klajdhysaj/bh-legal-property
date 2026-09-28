'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/network`, label: t('network') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-secondary/95 backdrop-blur">
      <div className="max-w-container mx-auto flex items-center justify-between gap-6 px-6 py-5 md:px-16">
        <Link
          href={`/${locale}`}
          className="shrink-0 whitespace-nowrap font-display text-lg tracking-wide2 text-primary xl:text-xl"
        >
          BH <span className="text-accent">Legal & Property</span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 2xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-xs uppercase tracking-wide3 text-on-surface-variant transition-colors hover:text-primary 2xl:text-sm"
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className="shrink-0 text-sm uppercase tracking-wide3 xl:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? t('close') : t('menu')}
        >
          {open ? t('close') : t('menu')}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-5 border-t hairline px-6 py-6 xl:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wide3"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}