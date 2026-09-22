import { use } from "react";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function AboutPage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = use(props.params);

  const {
    locale
  } = params;

  setRequestLocale(locale);
  const t = useTranslations('aboutPage');

  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>

      <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 max-w-3xl leading-tight">
        {t('title')}
      </h1>

      <div className="grid md:grid-cols-2 gap-12 mt-14">
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          {t('intro1')}
        </p>
        <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
          {t('intro2')}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {['prevention', 'clarity', 'coordination'].map((item) => (
          <div key={item} className="border hairline p-8 bg-surface-container">
            <h2 className="font-display text-xl text-primary">
              {t(`principles.${item}.title`)}
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mt-4">
              {t(`principles.${item}.description`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}