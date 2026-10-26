import { useTranslation } from 'react-i18next';

export function Testimonios() {
  const { t } = useTranslation();
  const slots = [0, 1, 2];

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="testimonios" aria-labelledby="testimonials-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-12">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('testimonials.sectionLabel')}
            </span>
          </div>
          <h2 id="testimonials-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold mb-unit-2">
            {t('testimonials.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-6">
          {slots.map((index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-dashed border-neutral-300 p-unit-6 flex flex-col items-center justify-center text-center gap-unit-3 min-h-[180px]"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-neutral-300" style={{ fontSize: '32px' }}>format_quote</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
                {t('testimonials.slot')}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-unit-6 font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          {t('testimonials.note')}
        </p>
      </div>
    </section>
  );
}
