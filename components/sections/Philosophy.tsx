import { useTranslations } from 'next-intl';

export default function Philosophy() {
  const t = useTranslations('philosophy');
  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>
      <p className="font-display text-2xl md:text-3xl leading-relaxed mt-6 max-w-3xl text-primary">
        {t('statement')}
      </p>
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <p className="text-base md:text-lg text-on-surface-variant">{t('paragraph1')}</p>
        <p className="text-base md:text-lg text-on-surface-variant">{t('paragraph2')}</p>
      </div>
    </section>
  );
}