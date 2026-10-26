import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '../../lib/whatsapp';
import { track } from '../../lib/analytics';

type FieldName = 'name' | 'business' | 'email' | 'plan';

interface FormState {
  name: string;
  business: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
  consent: boolean;
}

const initialState: FormState = {
  name: '',
  business: '',
  email: '',
  phone: '',
  plan: '',
  message: '',
  consent: false,
};

export function Contacto() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<FieldName | 'consent', string>>>({});
  const [sent, setSent] = useState(false);

  const setField = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<FieldName | 'consent', string>> = {};
    if (!form.name.trim()) next.name = t('contact.errors.required');
    if (!form.business.trim()) next.business = t('contact.errors.required');
    if (!form.email.trim()) next.email = t('contact.errors.required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = t('contact.errors.email');
    if (!form.plan) next.plan = t('contact.errors.required');
    if (!form.consent) next.consent = t('contact.errors.consent');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      t('contact.message.intro'),
      `${t('contact.fields.name')}: ${form.name}`,
      `${t('contact.fields.business')}: ${form.business}`,
      `${t('contact.fields.email')}: ${form.email}`,
    ];
    if (form.phone.trim()) lines.push(`${t('contact.fields.phone')}: ${form.phone}`);
    lines.push(`${t('contact.fields.plan')}: ${form.plan}`);
    if (form.message.trim()) lines.push(`${t('contact.fields.message')}: ${form.message}`);
    return lines.join('\n');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    track('form_submit', { plan: form.plan });
    window.open(whatsappUrl(buildMessage()), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const inputClass = (hasError?: string) =>
    `w-full h-12 px-4 rounded-xl bg-white border text-[15px] text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/60 transition-colors ${
      hasError ? 'border-red-400' : 'border-neutral-300/80 hover:border-neutral-400'
    }`;

  const labelClass = 'block font-mono text-[11px] uppercase tracking-wider font-semibold text-neutral-600 mb-2';

  return (
    <section className="w-full bg-[#F5F4F2] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="contacto" aria-labelledby="contact-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-unit-3">
              <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
                {t('contact.sectionLabel')}
              </span>
            </div>
            <h2 id="contact-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold mb-unit-4">
              {t('contact.title')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-unit-8">
              {t('contact.subtitle')}
            </p>

            <div className="bg-black text-white rounded-2xl p-unit-6 border border-neutral-800 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800 font-mono text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-[#FFB800] amber-pulse" aria-hidden="true" />
                  {t('contact.channels.title')}
                </span>
                <span className="text-[#FFB800] font-semibold">{t('contact.channels.response')}</span>
              </div>
              <p className="font-body-md text-body-md text-neutral-300 mb-unit-5">
                {t('contact.channels.whatsapp')}
              </p>
              <a
                className="inline-flex items-center justify-center w-full h-12 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md active:scale-[0.99] btn-amber-glow"
                href={whatsappUrl(t('cta.whatsapp.message'))}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => track('whatsapp_click', { from: 'contacto' })}
              >
                {t('cta.whatsapp.button')} <span className="text-[#FFB800] ml-1.5">→</span>
              </a>
              <div className="mt-unit-5 pt-unit-4 border-t border-neutral-800">
                <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">{t('contact.channels.emailLabel')}</p>
                <a
                  className="font-body-md text-body-md text-white hover:text-[#FFB800] transition-colors underline underline-offset-4 decoration-neutral-600"
                  href="mailto:info@catcode.es"
                  onClick={() => track('email_click', { from: 'contacto' })}
                >
                  info@catcode.es
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-white rounded-2xl border border-[#FFB800]/60 p-unit-10 text-center shadow-sm" role="status" aria-live="polite">
                <span className="material-symbols-outlined text-[#FFB800] mb-unit-4 block" style={{ fontSize: '44px' }} aria-hidden="true">check_circle</span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-3">{t('contact.success.title')}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-6">{t('contact.success.body')}</p>
                <a
                  className="inline-flex items-center justify-center h-12 px-unit-6 rounded-xl bg-black hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors"
                  href={whatsappUrl(t('cta.whatsapp.message'))}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {t('cta.whatsapp.button')} <span className="text-[#FFB800] ml-1.5">→</span>
                </a>
              </div>
            ) : (
              <form className="bg-white rounded-2xl border border-neutral-200/90 p-unit-8 shadow-sm" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-unit-5">
                  <div>
                    <label className={labelClass} htmlFor="contact-name">{t('contact.fields.name')}</label>
                    <input
                      className={inputClass(errors.name)}
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setField('name', e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name && <p id="contact-name-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="contact-business">{t('contact.fields.business')}</label>
                    <input
                      className={inputClass(errors.business)}
                      id="contact-business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      value={form.business}
                      onChange={(e) => setField('business', e.target.value)}
                      aria-invalid={Boolean(errors.business)}
                      aria-describedby={errors.business ? 'contact-business-error' : undefined}
                    />
                    {errors.business && <p id="contact-business-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">{errors.business}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="contact-email">{t('contact.fields.email')}</label>
                    <input
                      className={inputClass(errors.email)}
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setField('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    />
                    {errors.email && <p id="contact-email-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="contact-phone">{t('contact.fields.phone')}</label>
                    <input
                      className={inputClass()}
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setField('phone', e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="contact-plan">{t('contact.fields.plan')}</label>
                    <select
                      className={`${inputClass(errors.plan)} appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] pr-10`}
                      id="contact-plan"
                      name="plan"
                      value={form.plan}
                      onChange={(e) => setField('plan', e.target.value)}
                      aria-invalid={Boolean(errors.plan)}
                      aria-describedby={errors.plan ? 'contact-plan-error' : undefined}
                    >
                      <option value="">{t('contact.planPlaceholder')}</option>
                      <option value="CUSTOM">{t('contact.planOptions.custom')}</option>
                      <option value="WEEKLY">{t('contact.planOptions.weekly')}</option>
                      <option value="SOCIAL">{t('contact.planOptions.social')}</option>
                      <option value="FULL">{t('contact.planOptions.full')}</option>
                      <option value={t('contact.planOptions.unsure')}>{t('contact.planOptions.unsure')}</option>
                    </select>
                    {errors.plan && <p id="contact-plan-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">{errors.plan}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="contact-message">{t('contact.fields.message')}</label>
                    <textarea
                      className="w-full min-h-28 p-4 rounded-xl bg-white border border-neutral-300/80 hover:border-neutral-400 text-[15px] text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/60 transition-colors resize-y"
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setField('message', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-unit-6 pt-unit-5 border-t border-neutral-100">
                  <label className="flex items-start gap-3 cursor-pointer" htmlFor="contact-consent">
                    <input
                      className="mt-1 w-4 h-4 accent-black shrink-0"
                      id="contact-consent"
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => setField('consent', e.target.checked)}
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{t('contact.consent')}</span>
                  </label>
                  {errors.consent && <p id="contact-consent-error" className="mt-1.5 text-xs text-red-600 font-medium" role="alert">{errors.consent}</p>}
                </div>

                <button
                  className="mt-unit-6 inline-flex items-center justify-center w-full sm:w-auto h-[54px] px-unit-8 rounded-xl bg-black hover:bg-neutral-800 text-white font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25)] active:scale-[0.98] btn-amber-glow"
                  type="submit"
                >
                  {t('contact.submit')} <span className="text-[#FFB800] ml-1.5">→</span>
                </button>
                <p className="mt-unit-4 font-body-sm text-body-sm text-on-surface-variant">{t('contact.privacyNote')}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
