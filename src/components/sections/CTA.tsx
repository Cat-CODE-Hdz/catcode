import { useTranslation } from 'react-i18next';
import { whatsappUrl } from '../../lib/whatsapp';
import { track } from '../../lib/analytics';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-black text-white py-unit-20 md:py-unit-32 relative overflow-hidden dark-grid-bg" id="empezar" aria-labelledby="cta-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-unit-16 items-center">
          <div className="lg:col-span-7 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-[#FFB800]/40 text-[#FFB800] font-mono uppercase tracking-widest mb-unit-8 shadow-sm" style={{ fontSize: '11px' }}>
              <span className="w-2 h-2 rounded-full bg-[#FFB800] ring-2 ring-[#FFB800]/30 amber-pulse" aria-hidden="true" />
              {t('cta.pill')}
            </div>
            <h2 id="cta-title" className="text-display-xl-mobile md:text-display-xl tracking-[-0.04em] font-extrabold text-white mb-unit-6 leading-[1.04]">
              {t('cta.title')}
            </h2>
            <p className="font-body-lg text-body-lg text-neutral-400 mb-unit-10 max-w-xl">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-unit-4 mb-unit-12">
              <a className="group inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-lg active:scale-95 btn-amber-glow" href="#contacto" onClick={() => track('cta_click', { from: 'cta', target: 'contacto' })}>
                {t('cta.ctaPrimary')}
                <span className="ml-2 text-[#FFB800] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a className="inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-sm uppercase tracking-wider font-medium border border-neutral-700 transition-all hover:border-[#FFB800]/60 active:scale-95" href="#portfolio">
                {t('cta.ctaSecondary')}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 max-w-xl w-full shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-[#FFB800] amber-pulse" aria-hidden="true" />
                  {t('cta.whatsapp.channel')}
                </span>
                <span className="text-[#FFB800] font-semibold">{t('cta.whatsapp.response')}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#FFB800] shrink-0 mt-0.5" style={{ fontSize: '24px' }} aria-hidden="true">chat</span>
                  <div className="font-mono text-sm text-neutral-200 italic">
                    "{t('cta.whatsapp.message')}"
                  </div>
                </div>
                <a
                  className="shrink-0 inline-flex items-center justify-center h-10 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md active:scale-95 btn-amber-glow"
                  href={whatsappUrl(t('cta.whatsapp.message'))}
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => track('whatsapp_click', { from: 'cta' })}
                >
                  {t('cta.whatsapp.button')}
                </a>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block lg:col-span-5" aria-hidden="true">
            <div className="absolute -inset-10 rounded-full bg-[#FFB800]/10 blur-3xl" />
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="rounded-2xl border border-neutral-700/70 bg-neutral-900/80 p-4 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-neutral-500">
                    {t('cta.compare.title')}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#FFB800]">
                    <span className="amber-pulse h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                    {t('cta.compare.live')}
                  </span>
                </div>

                <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-950/60 p-4">
                  <span className="inline-flex rounded-md bg-neutral-800 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-neutral-400">
                    {t('cta.compare.beforeLabel')}
                  </span>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="material-symbols-outlined text-neutral-600" style={{ fontSize: '22px' }}>visibility_off</span>
                    <div>
                      <div className="text-sm font-semibold text-neutral-400">{t('cta.compare.beforeTitle')}</div>
                      <div className="mt-0.5 text-[11px] leading-relaxed text-neutral-500">{t('cta.compare.beforeText')}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="h-1.5 w-2/3 rounded-full bg-neutral-800" />
                    <div className="h-1.5 w-1/2 rounded-full bg-neutral-800" />
                  </div>
                </div>

                <div className="compare-arrow relative z-10 -my-1.5 flex justify-center">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#FFB800]/40 bg-neutral-950 text-[#FFB800] shadow-lg">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
                  </span>
                </div>

                <div className="rounded-xl border border-[#FFB800]/50 bg-gradient-to-br from-[#FFB800]/15 via-neutral-900 to-neutral-900 p-4 shadow-[0_10px_40px_-12px_rgba(255,184,0,0.35)]">
                  <span className="inline-flex rounded-md bg-[#FFB800] px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-black">
                    {t('cta.compare.afterLabel')}
                  </span>
                  <div className="mt-3 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#FFB800]" style={{ fontSize: '22px' }}>check_circle</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t('cta.compare.afterTitle')}</div>
                      <div className="mt-0.5 text-[11px] leading-relaxed text-neutral-300">{t('cta.compare.afterText')}</div>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <span className="h-1.5 rounded-full bg-[#FFB800]" />
                    <span className="h-1.5 rounded-full bg-[#FFB800]/60" />
                    <span className="h-1.5 rounded-full bg-[#FFB800]/30" />
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="font-mono text-[9px] text-neutral-500">{t('cta.compare.footnote')}</span>
                  <span className="rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-[#FFB800]">
                    {t('cta.compare.sticker')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
