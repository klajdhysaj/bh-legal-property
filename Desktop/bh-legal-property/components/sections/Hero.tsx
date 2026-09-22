import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  return (
    <section className="relative border-b hairline">
      <div className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-40 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label">{t('kicker')}</span>
          <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 leading-tight">
            {t('line1')}<br />{t('line2')}<br />{t('line3')}
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant mt-8 max-w-md">
            {t('intro')}
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={`/${locale}/contact`} className="btn-primary">{t('ctaContact')}</Link>
            <Link href={`/${locale}/services`} className="btn-secondary">{t('ctaServices')}</Link>
          </div>
        </div>
        {/* Placeholder for hero image - replace src when asset is available */}
        <div className="relative aspect-[4/5] bg-surface-container border hairline">
          <img src="/images/hero/hero-main.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}