import { useTranslations } from 'next-intl';

export default function GeographicReach() {
  const t = useTranslations('geoReach');

  const locations = [
    t('switzerland'),
    t('italy'),
    t('albania'),
    t('monaco')
  ];

  return (
    <section className="max-w-container mx-auto px-6 py-24 md:px-16 md:py-32">
      <span className="section-label">{t('kicker')}</span>

      <h2 className="mt-6 max-w-2xl font-display text-3xl md:text-4xl">
        {t('title')}
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {locations.map((location) => (
          <div key={location} className="border hairline p-8">
            <h3 className="font-display text-xl">{location}</h3>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-base text-on-surface-variant md:text-lg">
        {t('note')}
      </p>
    </section>
  );
}