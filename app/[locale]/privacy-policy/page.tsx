import {useTranslations} from 'next-intl';

export default function PrivacyPolicyPage() {
  const t = useTranslations('privacyPolicyPage');
  const link = (text: React.ReactNode, address: string) => (
    <a href={`mailto:${address}`} className="underline hover:text-accent">
      {text}
    </a>
  );

  return (
    <main className="max-w-container mx-auto px-6 md:px-16 py-16">
      <article className="max-w-3xl space-y-10 leading-relaxed">
        <header className="space-y-4">
          <h1 className="font-display text-4xl">{t('title')}</h1>
          <p>{t('intro')}</p>
          <p className="text-sm text-tertiary">{t('draftWarning')}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('controllerTitle')}</h2>
          <p>
            BH legal &amp; property von Beniamin Hysaj<br />
            Europaallee 41<br />
            8004 Zürich, Switzerland<br />
            {t.rich('controllerEmail', {
              email: (chunks) => link(chunks, 'info@bh.zuerich')
            })}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('informationTitle')}</h2>
          <p>{t('formData')}</p>
          <p>{t('directEmail')}</p>
          <p>{t('technicalData')}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('providersTitle')}</h2>
          <p>{t('vercel')}</p>
          <p>
            {t.rich('resend', {
              email: (chunks) => link(chunks, 'contact@bh.zuerich')
            })}
          </p>
          <p>{t('mifaweb')}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('abroadTitle')}</h2>
          <p>{t('abroad')}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('retentionTitle')}</h2>
          <p>{t('retention')}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('cookiesTitle')}</h2>
          <p>{t('cookies')}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('requestsTitle')}</h2>
          <p>
            {t.rich('requests', {
              email: (chunks) => link(chunks, 'info@bh.zuerich')
            })}
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl">{t('enquiriesTitle')}</h2>
          <p>{t('enquiries')}</p>
        </section>
      </article>
    </main>
  );
}