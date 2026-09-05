import { useTranslation } from 'react-i18next';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-black text-white py-unit-20 md:py-unit-32 relative overflow-hidden dark-grid-bg" id="contacto" aria-labelledby="cta-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-white font-mono uppercase tracking-widest mb-unit-8" style={{ fontSize: '11px' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/20" aria-hidden="true" />
            {t('cta.pill')}
          </div>
          <h2 id="cta-title" className="text-display-xl-mobile md:text-display-xl tracking-[-0.04em] font-extrabold text-white mb-unit-6 leading-[1.04]">
            {t('cta.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-neutral-400 mb-unit-10 max-w-xl">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-unit-4 mb-unit-12">
            <a className="group inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-lg active:scale-95" href="#contacto">
              {t('cta.ctaPrimary')}
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <a className="inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-sm uppercase tracking-wider font-medium border border-neutral-700 transition-all" href="#portfolio">
              {t('cta.ctaSecondary')}
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 max-w-xl w-full shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
                {t('cta.whatsapp.channel')}
              </span>
              <span className="text-neutral-500">{t('cta.whatsapp.response')}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-400 shrink-0 mt-0.5" style={{ fontSize: '24px' }} aria-hidden="true">chat</span>
                <div className="font-mono text-sm text-neutral-200 italic">
                  "{t('cta.whatsapp.message')}"
                </div>
              </div>
              <a
                className="shrink-0 inline-flex items-center justify-center h-10 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md active:scale-95"
                href="https://wa.me/?text=Hola%20CAT%20CODE,%20quiero%20mejorar%20la%20presencia%20digital%20de%20mi%20negocio."
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Enviar mensaje por WhatsApp (abre en nueva ventana)"
              >
                {t('cta.whatsapp.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}