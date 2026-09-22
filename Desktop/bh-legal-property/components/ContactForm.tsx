'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';

const initialState: ContactFormState = { success: false, message: '' };

function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations('contactPage');

  return (
    <button type="submit" className="btn-primary" disabled={pending} aria-busy={pending}>
      {pending ? t('status.sending') : t('form.submit')}
    </button>
  );
}

export default function ContactForm() {
  const t = useTranslations('contactPage');
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <div className="border hairline bg-surface-container p-8 md:p-10" role="status">
        <p className="text-primary text-base leading-relaxed">{t('status.success')}</p>
      </div>
    );
  }

  const fieldError = (field: string) => state.errors?.[field]?.[0];

  return (
    <form action={formAction} className="border hairline bg-surface-container p-8 md:p-10 space-y-6" noValidate>
      {state.message === 'serverError' && (
        <p className="text-sm text-error" role="alert">{t('status.serverError')}</p>
      )}
      {state.message === 'validationError' && (
        <p className="text-sm text-error" role="alert">{t('status.validationError')}</p>
      )}

      <div>
        <label htmlFor="name" className="block text-sm text-primary mb-2">
          {t('form.name')}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full border hairline bg-secondary px-4 py-3 text-primary outline-none"
          placeholder={t('placeholders.name')}
          aria-invalid={!!fieldError('name')}
          aria-describedby={fieldError('name') ? 'name-error' : undefined}
        />
        {fieldError('name') && (
          <p id="name-error" className="text-xs text-error mt-1">{t(`status.${fieldError('name')}` as any)}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-primary mb-2">
          {t('form.email')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full border hairline bg-secondary px-4 py-3 text-primary outline-none"
          placeholder={t('placeholders.email')}
          aria-invalid={!!fieldError('email')}
          aria-describedby={fieldError('email') ? 'email-error' : undefined}
        />
        {fieldError('email') && (
          <p id="email-error" className="text-xs text-error mt-1">{t(`status.${fieldError('email')}` as any)}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-primary mb-2">
          {t('form.subject')}
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full border hairline bg-secondary px-4 py-3 text-primary outline-none"
          placeholder={t('placeholders.subject')}
          aria-invalid={!!fieldError('subject')}
          aria-describedby={fieldError('subject') ? 'subject-error' : undefined}
        />
        {fieldError('subject') && (
          <p id="subject-error" className="text-xs text-error mt-1">{t(`status.${fieldError('subject')}` as any)}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-primary mb-2">
          {t('form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          className="w-full border hairline bg-secondary px-4 py-3 text-primary outline-none resize-none"
          placeholder={t('placeholders.message')}
          aria-invalid={!!fieldError('message')}
          aria-describedby={fieldError('message') ? 'message-error' : undefined}
        />
        {fieldError('message') && (
          <p id="message-error" className="text-xs text-error mt-1">{t(`status.${fieldError('message')}` as any)}</p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}