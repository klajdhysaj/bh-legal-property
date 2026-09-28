import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function ContactCta() {
  const t = useTranslations('contactCta');
  const locale = useLocale();

  return (
    <section className="bg-surface-container border-t hairline">
      <div className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32 text-center">
        <span className="section-label">{t('kicker')}</span>

        <h2 className="font-display text-3xl md:text-4xl mt-6 max-w-2xl mx-auto">
          {t('title')}
        </h2>

        <p className="text-base md:text-lg text-on-surface-variant mt-6 max-w-xl mx-auto">
          {t('description')}
        </p>

        <Link href={`/${locale}/contact`} className="btn-primary inline-block mt-10">
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}