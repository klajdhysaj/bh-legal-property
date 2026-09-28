import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero/hero-main.jpg')" }}
    >
      {/* Light overlay keeps the text readable over the photo */}
      <div className="absolute inset-0 bg-white/75" />

      <div className="relative z-10 max-w-container mx-auto min-h-[80vh] px-6 md:px-16 py-24 flex items-center">
        <div className="max-w-3xl">
          <span className="section-label">{t('kicker')}</span>

          <h1 className="font-display text-4xl md:text-6xl text-primary mt-6 leading-tight">
            {t('line1')}
            <br />
            {t('line2')}
            <br />
            {t('line3')}
          </h1>

          <p className="font-body text-base md:text-lg text-on-surface-variant mt-8 max-w-2xl">
            {t('intro')}
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t('ctaContact')}
            </Link>
            <Link href={`/${locale}/services`} className="btn-secondary">
              {t('ctaServices')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}