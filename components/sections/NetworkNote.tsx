import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function NetworkNote() {
  const t = useTranslations('networkNote');
  const locale = useLocale();

  return (
    <section className="bg-primary text-secondary">
      <div className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label text-accent">{t('kicker')}</span>
          <h2 className="font-display text-3xl md:text-4xl mt-6">{t('title')}</h2>
          <p className="text-base md:text-lg text-tertiary mt-6 leading-relaxed">
            {t('description')}
          </p>
          <Link
            href={`/${locale}/network`}
            className="btn-secondary border-tertiary text-secondary hover:text-accent hover:border-accent inline-block mt-8"
          >
            {t('cta')}
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-4 text-sm uppercase tracking-wide3 text-tertiary">
          {[
            'lawyers',
            'notaries',
            'taxAdvisers',
            'accountants',
            'fiduciaries',
            'mediators',
            'valuers',
            'engineers',
            'architects',
            'surveyors'
          ].map((profession) => (
            <li key={profession} className="border-b border-white/10 pb-3">
              {t(`professions.${profession}`)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}