import { useTranslations } from 'next-intl';

const steps = ['analysis', 'strategy', 'coordination'];

export default function Method() {
  const t = useTranslations('method');
  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>
      <h2 className="font-display text-3xl md:text-4xl mt-6 max-w-2xl">{t('title')}</h2>
      <div className="grid md:grid-cols-3 gap-12 mt-16">
        {steps.map((s, i) => (
          <div key={s} className="border-t hairline pt-6">
            <span className="font-display text-4xl text-tertiary">0{i + 1}</span>
            <h3 className="font-display text-xl mt-4">{t(`steps.${s}.title`)}</h3>
            <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">{t(`steps.${s}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}