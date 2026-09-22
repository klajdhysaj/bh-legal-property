import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  return (
    <footer className="bg-primary text-secondary mt-32">
      <div className="max-w-container mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-lg tracking-wide2 mb-4">BH Legal & Property</p>
          <p className="text-sm text-tertiary leading-relaxed max-w-xs">{t('tagline')}</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="section-label text-tertiary">{t('navigation')}</span>
          <Link href={`/${locale}/about`} className="text-sm hover:text-accent">{t('about')}</Link>
          <Link href={`/${locale}/services`} className="text-sm hover:text-accent">{t('services')}</Link>
          <Link href={`/${locale}/network`} className="text-sm hover:text-accent">{t('network')}</Link>
          <Link href={`/${locale}/contact`} className="text-sm hover:text-accent">{t('contact')}</Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="section-label text-tertiary">{t('legal')}</span>
          <Link href={`/${locale}/legal-notice`} className="text-sm hover:text-accent">{t('legalNotice')}</Link>
          <p className="text-xs text-tertiary leading-relaxed mt-4">{t('disclaimer')}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 md:px-16 py-6 text-xs text-tertiary flex justify-between max-w-container mx-auto">
        <span>© {new Date().getFullYear()} BH Legal & Property</span>
        <span>Beniamin Hysaj</span>
      </div>
    </footer>
  );
}