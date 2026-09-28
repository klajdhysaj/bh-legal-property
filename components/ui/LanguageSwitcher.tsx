'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (target: string) => {
    const segments = pathname.split('/');
    segments[1] = target;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-wide3">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          <button
            onClick={() => switchTo(l)}
            className={l === locale ? 'text-primary font-medium' : 'text-outline hover:text-accent'}
          >
            {l}
          </button>
          {i < locales.length - 1 && <span className="mx-2 text-outline-variant">/</span>}
        </span>
      ))}
    </div>
  );
}