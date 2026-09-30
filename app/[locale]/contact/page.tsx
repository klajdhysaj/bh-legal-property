import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';

const contactSeo = {
  en: {
    title: 'Contact BH Legal & Property in Zürich | BH Legal & Property',
    description:
      'Contact BH Legal & Property in Zürich for an initial discussion about legal, asset, property or administrative matters. Do not send confidential or urgent information.',
  },
  fr: {
    title: 'Contacter BH Legal & Property à Zurich | BH Legal & Property',
    description:
      'Contactez BH Legal & Property à Zurich pour un premier échange concernant des questions juridiques, patrimoniales, immobilières ou administratives. N’envoyez aucune information confidentielle ou urgente.',
  },
  it: {
    title: 'Contatta BH Legal & Property a Zurigo | BH Legal & Property',
    description:
      'Contatta BH Legal & Property a Zurigo per un primo confronto su questioni legali, patrimoniali, immobiliari o amministrative. Non inviare informazioni riservate o urgenti.',
  },
  de: {
    title: 'Kontakt zu BH Legal & Property in Zürich | BH Legal & Property',
    description:
      'Kontaktieren Sie BH Legal & Property in Zürich für ein erstes Gespräch zu rechtlichen, vermögensbezogenen, immobilienbezogenen oder administrativen Angelegenheiten. Bitte keine vertraulichen oder dringenden Informationen senden.',
  },
} as const;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const seo = contactSeo[locale as keyof typeof contactSeo] ?? contactSeo.en;
  const base = 'https://bh.zuerich';

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${base}/${locale}/contact`,
      languages: {
        en: `${base}/en/contact`,
        fr: `${base}/fr/contact`,
        it: `${base}/it/contact`,
        de: `${base}/de/contact`,
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contactPage');

  return (
    <section className="max-w-container mx-auto px-6 md:px-16 py-24 md:py-32">
      <span className="section-label">{t('kicker')}</span>

      <h1 className="font-display text-4xl md:text-5xl text-primary mt-6 max-w-3xl leading-tight">
        {t('title')}
      </h1>

      <p className="text-base md:text-lg text-on-surface-variant mt-8 max-w-3xl leading-relaxed">
        {t('intro')}
      </p>

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 mt-16">
        <ContactForm />

        <aside className="border hairline bg-primary text-secondary p-8 md:p-10">
          <h2 className="font-display text-2xl">{t('info.title')}</h2>
          <p className="text-tertiary leading-relaxed mt-5">
            {t('info.description')}
          </p>

          <div className="mt-8 space-y-5 text-sm">
            <div>
              <p className="text-accent uppercase tracking-wide3">{t('info.emailLabel')}</p>
              <p className="mt-2">contact@bh.zuerich</p>
            </div>

            <div>
              <p className="text-accent uppercase tracking-wide3">Address</p>
              <p className="mt-2">
                BH Legal & Property<br />
                Europaallee 41<br />
                8004 Zürich<br />
                Switzerland
              </p>
            </div>

            <div>
              <p className="text-accent uppercase tracking-wide3">{t('info.noticeLabel')}</p>
              <p className="mt-2 text-tertiary">{t('info.noticeValue')}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}