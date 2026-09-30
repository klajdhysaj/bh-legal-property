import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Method from '@/components/sections/Method';
import NetworkNote from '@/components/sections/NetworkNote';
import GeographicReach from '@/components/sections/GeographicReach';
import ContactCta from '@/components/sections/ContactCta';

const homeSeo = {
  en: {
    title: 'Legal & Property Consulting in Zürich | BH Legal & Property',
    description:
       'Zürich-based legal, asset and property consulting for individuals, businesses and investors. Coordinated support for matters in Switzerland and internationally.',
  },
  fr: {
    title: 'Conseil juridique et immobilier à Zurich | BH Legal & Property',
    description:
    'Basé à Zurich, BH Legal & Property accompagne particuliers, entreprises et investisseurs dans leurs projets juridiques, patrimoniaux et immobiliers.',
  },
  it: {
    title: 'Consulenza legale e immobiliare a Zurigo | BH Legal & Property',
    description:
      'Con sede a Zurigo, BH Legal & Property affianca privati, imprese e investitori in questioni legali, patrimoniali e immobiliari.',
  },
  de: {
    title: 'Rechts- und Immobilienberatung in Zürich | BH Legal & Property',
    description:
      'BH Legal & Property mit Sitz in Zürich begleitet Privatpersonen, Unternehmen und Investoren bei rechtlichen, vermögensbezogenen und immobilienbezogenen Anliegen.',
  },
} as const;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const seo = homeSeo[locale as keyof typeof homeSeo] ?? homeSeo.en;
  const base = 'https://bh.zuerich';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        fr: `${base}/fr`,
        it: `${base}/it`,
        de: `${base}/de`,
      },
    },
  };
}

export default async function HomePage(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;

  const {
    locale
  } = params;

  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Philosophy />
      <ServicesOverview />
      <Method />
      <NetworkNote />
      <GeographicReach />
      <ContactCta />
    </>
  );
}