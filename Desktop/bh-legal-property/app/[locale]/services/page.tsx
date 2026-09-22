import { use } from "react";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const serviceKeys = [
  'legal',
  'contract',
  'realEstate',
  'administrative',
  'assetProtection',
  'coordination',
  'dispute'
];

export default function ServicesPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);
  const t = useTranslations('servicesPage');

  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>

      <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 max-w-3xl leading-tight">
        {t('title')}
      </h1>

      <p className="text-base md:text-lg text-on-surface-variant mt-8 max-w-3xl leading-relaxed">
        {t('intro')}
      </p>

      <div className="grid grid-cols-1 gap-10 mt-16">
        {serviceKeys.map((key) => (
          <article key={key} className="border hairline p-8 md:p-10 bg-surface-container">
            <h2 className="font-display text-2xl text-primary">
              {t(`items.${key}.title`)}
            </h2>
            <p className="text-sm uppercase tracking-wide3 text-accent mt-3">
              {t(`items.${key}.subtitle`)}
            </p>
            <p className="text-base text-on-surface-variant mt-6 leading-relaxed max-w-3xl">
              {t(`items.${key}.description`)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}