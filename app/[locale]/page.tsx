import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/sections/Philosophy';
import ServicesOverview from '@/components/sections/ServicesOverview';
import Method from '@/components/sections/Method';
import NetworkNote from '@/components/sections/NetworkNote';
import GeographicReach from '@/components/sections/GeographicReach';
import ContactCta from '@/components/sections/ContactCta';

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