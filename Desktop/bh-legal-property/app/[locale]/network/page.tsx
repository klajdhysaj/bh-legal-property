import { use } from "react";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const professions = [
  'lawyers',
  'notaries',
  'taxAdvisers',
  'accountants',
  'fiduciaries',
  'mediators',
  'valuers',
  'engineers',
  'architects',
  'surveyors',
  'technicalConsultants'
];

export default function NetworkPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);
  const t = useTranslations('networkPage');

  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>

      <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 max-w-3xl leading-tight">
        {t('title')}
      </h1>

      <p className="text-base md:text-lg text-on-surface-variant mt-8 max-w-3xl leading-relaxed">
        {t('intro')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-16 border-t hairline">
        {professions.map((profession) => (
          <div
            key={profession}
            className="border-b hairline py-6 flex items-center justify-between"
          >
            <span className="text-base text-primary">
              {t(`professions.${profession}`)}
            </span>
            <span className="text-accent text-sm">+</span>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-surface-container border hairline p-8 md:p-12 max-w-3xl">
        <h2 className="font-display text-2xl text-primary">
          {t('coordination.title')}
        </h2>
        <p className="text-base text-on-surface-variant mt-5 leading-relaxed">
          {t('coordination.description')}
        </p>
      </div>
    </section>
  );
}