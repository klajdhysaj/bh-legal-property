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
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur border-b hairline">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 md:px-16 py-5">
        <Link href={`/${locale}`} className="font-display text-lg md:text-xl tracking-wide2 text-primary">
          BH <span className="text-accent">Legal & Property</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm uppercase tracking-wide3 text-on-surface-variant hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
        <button className="lg:hidden text-sm uppercase tracking-wide3" onClick={() => setOpen(!open)}>
          {open ? t('close') : t('menu')}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t hairline px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm uppercase tracking-wide3" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}