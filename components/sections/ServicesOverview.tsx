import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const keys = ['legal', 'contract', 'realEstate', 'administrative', 'assetProtection', 'coordination'];

export default function ServicesOverview() {
  const t = useTranslations('servicesOverview');
  const locale = useLocale();
  return (
    <section className="bg-surface-container border-y hairline">
      <div className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
        <span className="section-label">{t('kicker')}</span>
        <h2 className="font-display text-3xl md:text-4xl mt-6 max-w-2xl">{t('title')}</h2>
        <div className="grid md:grid-cols-3 gap-px mt-16 border hairline">
          {keys.map((k) => (
            <div key={k} className="border hairline p-8 bg-secondary flex flex-col gap-4">
              <h3 className="font-display text-xl">{t(`items.${k}.title`)}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{t(`items.${k}.description`)}</p>
            </div>
          ))}
        </div>
        <Link href={`/${locale}/services`} className="btn-secondary inline-block mt-12">{t('viewAll')}</Link>
      </div>
    </section>
  );
}