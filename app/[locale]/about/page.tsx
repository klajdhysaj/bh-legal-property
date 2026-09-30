import type { Metadata } from 'next';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const aboutSeo = {
  en: {
    title: 'About BH Legal & Property | Zürich Consulting Company',
    description:
      'Learn about BH Legal & Property, a Zürich-based consulting company supporting individuals, businesses and investors with legal, asset and real-estate matters.',
  },
  fr: {
    title: 'À propos de BH Legal & Property | Société de conseil à Zurich',
    description:
      'Découvrez BH Legal & Property, une société de conseil basée à Zurich qui accompagne particuliers, entreprises et investisseurs dans les questions juridiques, patrimoniales et immobilières.',
  },
  it: {
    title: 'Chi è BH Legal & Property | Società di consulenza a Zurigo',
    description:
      'Scopri BH Legal & Property, società di consulenza con sede a Zurigo che affianca privati, imprese e investitori in questioni legali, patrimoniali e immobiliari.',
  },
  de: {
    title: 'Über BH Legal & Property | Beratungsgesellschaft in Zürich',
    description:
      'Erfahren Sie mehr über BH Legal & Property, eine Beratungsgesellschaft mit Sitz in Zürich für Privatpersonen, Unternehmen und Investoren in rechtlichen, vermögensbezogenen und immobilienbezogenen Angelegenheiten.',
  },
} as const;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const seo = aboutSeo[locale as keyof typeof aboutSeo] ?? aboutSeo.en;
  const base = 'https://bh.zuerich';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${base}/${locale}/about`,
      languages: {
        en: `${base}/en/about`,
        fr: `${base}/fr/about`,
        it: `${base}/it/about`,
        de: `${base}/de/about`,
      },
    },
  };
}

export default function AboutPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(props.params);

  setRequestLocale(locale);
  const t = useTranslations('aboutPage');

  return (
    <>
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/about-main.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/75" />

        <div className="relative z-10 max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
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
        </div>
      </section>

      <section className="max-w-container mx-auto px-6 md:px-16 py-20 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
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
    </>
  );
}