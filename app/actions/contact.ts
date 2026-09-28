'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().trim().min(2, 'nameTooShort').max(100, 'nameTooLong'),
  email: z.string().trim().email('invalidEmail'),
  subject: z.string().trim().min(2, 'subjectTooShort').max(150, 'subjectTooLong'),
  message: z.string().trim().min(10, 'messageTooShort').max(2000, 'messageTooLong'),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: 'validationError',
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = parsed.data;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL ?? 'contact@bh.zuerich';

  try {
    const { error } = await resend.emails.send({
      from: 'BH Legal & Property <enquiries@bh.zuerich>', // TEMPORARY — swap to enquiries@bh.zuerich once domain is verified
      to: recipient,
      replyTo: email,
      subject: `New enquiry: ${subject}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nThis message was submitted via the BH Legal & Property website contact form. Reply directly to respond to the sender.`,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: 'serverError' };
    }

    return { success: true, message: 'success' };
  } catch (err) {
    console.error('Contact form submission failed:', err);
    return { success: false, message: 'serverError' };
  }
}