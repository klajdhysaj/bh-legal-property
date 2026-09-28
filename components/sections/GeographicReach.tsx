import { useTranslations } from 'next-intl';

export default function GeographicReach() {
  const t = useTranslations('geoReach');

  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>
      <h2 className="font-display text-3xl md:text-4xl mt-6 max-w-2xl">
        {t('title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="border hairline p-8">
          <h3 className="font-display text-xl">{t('switzerland')}</h3>
        </div>
        <div className="border hairline p-8">
          <h3 className="font-display text-xl">{t('italy')}</h3>
        </div>
      </div>

      <p className="text-base md:text-lg text-on-surface-variant mt-8 max-w-2xl">
        {t('note')}
      </p>
    </section>
  );
}