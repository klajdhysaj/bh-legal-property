import type { Metadata } from 'next';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const servicesSeo = {
  en: {
    title: 'Legal, Contract & Real-Estate Consulting in Zürich | BH Legal & Property',
    description:
      'Explore legal, contract, real-estate, administrative, asset-protection, professional-coordination and dispute-management consulting in Zürich.',
  },
  fr: {
    title: 'Conseil juridique, contractuel et immobilier à Zurich | BH Legal & Property',
    description:
      'Découvrez nos services de conseil juridique, contractuel, immobilier, administratif, patrimonial et de coordination professionnelle à Zurich.',
  },
  it: {
    title: 'Consulenza legale, contrattuale e immobiliare a Zurigo | BH Legal & Property',
    description:
      'Scopri i servizi di consulenza legale, contrattuale, immobiliare, amministrativa, patrimoniale e di coordinamento professionale a Zurigo.',
  },
  de: {
    title: 'Rechts-, Vertrags- und Immobilienberatung in Zürich | BH Legal & Property',
    description:
      'Entdecken Sie Beratung zu rechtlichen, vertraglichen, immobilienbezogenen, administrativen und vermögensbezogenen Angelegenheiten in Zürich.',
  },
} as const;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const seo = servicesSeo[locale as keyof typeof servicesSeo] ?? servicesSeo.en;
  const base = 'https://bh.zuerich';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${base}/${locale}/services`,
      languages: {
        en: `${base}/en/services`,
        fr: `${base}/fr/services`,
        it: `${base}/it/services`,
        de: `${base}/de/services`,
      },
    },
  };
}

const serviceKeys = [
  'legal',
  'contract',
  'realEstate',
  'administrative',
  'assetProtection',
  'coordination',
  'dispute'
];

export default function ServicesPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(props.params);

  setRequestLocale(locale);
  const t = useTranslations('servicesPage');

  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/75" />

        <div className="relative z-10 max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
          <span className="section-label">{t('kicker')}</span>

          <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 max-w-3xl leading-tight">
            {t('title')}
          </h1>

          <p className="text-base md:text-lg text-on-surface-variant mt-8 max-w-3xl leading-relaxed">
            {t('intro')}
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-10">
          {serviceKeys.map((key) => (
            <article
              key={key}
              className="border hairline p-8 md:p-10 bg-surface-container"
            >
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
    </>
  );
}