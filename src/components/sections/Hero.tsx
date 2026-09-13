import { useTranslation } from 'react-i18next';
import { useMetrics } from '../../hooks/useMetrics';

export function Hero() {
  const { t } = useTranslation();
  const { metrics, isLive, isLoading } = useMetrics();

  return (
    <section className="relative w-full bg-surface-container-lowest pt-unit-12 pb-unit-20 md:pt-unit-16 md:pb-unit-28 overflow-hidden noise-bg border-b border-black/[0.06]" id="hero" aria-labelledby="hero-title">
      <div className="absolute inset-0 pointer-events-none grid grid-cols-12 max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="border-l border-r border-black/[0.03] col-span-12 h-full" />
      </div>
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-[#FFB800]/40 text-neutral-900 font-mono text-[11px] font-semibold uppercase tracking-wider mb-unit-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] amber-pulse" aria-hidden="true" />
              {t('hero.pill')}
            </div>
            <h1 id="hero-title" className="text-display-xl-mobile md:text-display-xl text-black mb-unit-6 font-extrabold leading-[1.04]" style={{ letterSpacing: '-0.04em' }}>
              {t('hero.title')}
            </h1>
            <div className="space-y-unit-3 mb-unit-8 max-w-2xl">
              <p className="font-headline-sm text-headline-sm text-neutral-900 font-medium tracking-tight">
                {t('hero.subtitle')}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-normal">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-unit-4 w-full sm:w-auto">
              <a
                className="group inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-black hover:bg-neutral-800 text-white font-label-md text-[15px] font-medium transition-all duration-200 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25)] hover:shadow-none active:scale-[0.98] btn-amber-glow"
                href="#precios"
              >
                {t('hero.ctaPrimary')}
                <span className="ml-2 text-[#FFB800] transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                className="inline-flex items-center justify-center h-[54px] px-8 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 font-label-md text-[15px] font-medium border border-neutral-300/80 shadow-sm transition-all duration-200 active:scale-[0.98]"
                href="#portfolio"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

            <div className="lg:col-span-5 w-full">
            <div className="relative bg-neutral-950 text-white rounded-2xl p-5 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden" role="region" aria-label="Métricas del proyecto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/80 font-mono text-neutral-400" style={{ fontSize: '11px' }}>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" aria-hidden="true" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" aria-hidden="true" />
                </div>
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <img alt="CAT CODE" className="w-4 h-4 rounded-full object-contain" src="/catcode/catcode-icon.png" />
                  catcode.studio/live
                </span>
                <div className="flex items-center gap-2">
                  {isLive && (
                    <span className="text-[#FFB800] flex items-center gap-1" style={{ fontSize: '9px' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] inline-block amber-pulse" />
                      LIVE
                    </span>
                  )}
                  {isLoading && (
                    <span className="text-yellow-400 animate-pulse flex items-center gap-1" style={{ fontSize: '9px' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                      FETCHING
                    </span>
                  )}
                  <span className="text-[#FFB800] font-bold flex items-center gap-1" style={{ fontSize: '10px' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] inline-block amber-pulse" />
                    200 OK
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-neutral-900/90 rounded-xl p-4 border border-neutral-800">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <img alt="CAT CODE" className="w-4 h-4 rounded-full bg-neutral-800 object-contain" src="/catcode/catcode-icon.png" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" aria-hidden="true" />
                      {t('hero.terminal.architecture')}
                    </span>
                    <span className="text-neutral-500">{t('hero.terminal.tech')}</span>
                  </div>
                  <div className="font-headline-sm text-[18px] text-white font-semibold tracking-tight">{t('hero.terminal.projectName')}</div>
                  <p className="text-neutral-400 text-xs mt-1">{t('hero.terminal.deploy')}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 font-mono">
                  <div className="bg-neutral-900/70 p-3 rounded-xl border border-neutral-800 text-center hover:border-[#FFB800]/50 hover:bg-neutral-900 transition-all cursor-default group">
                    <div className="text-[10px] uppercase text-neutral-400 tracking-wider group-hover:text-neutral-300">{t('hero.terminal.performance')}</div>
                    <div className="text-lg font-bold text-[#FFB800] mt-0.5 metric-glow group-hover:scale-105 transition-transform">{metrics.performance}/100</div>
                  </div>
                  <div className="bg-neutral-900/70 p-3 rounded-xl border border-neutral-800 text-center hover:border-[#FFB800]/50 hover:bg-neutral-900 transition-all cursor-default group">
                    <div className="text-[10px] uppercase text-neutral-400 tracking-wider group-hover:text-neutral-300">{t('hero.terminal.loading')}</div>
                    <div className="text-lg font-bold text-white mt-0.5 group-hover:text-[#FFB800] transition-colors">{metrics.fcp}</div>
                  </div>
                  <div className="bg-neutral-900/70 p-3 rounded-xl border border-neutral-800 text-center hover:border-[#FFB800]/50 hover:bg-neutral-900 transition-all cursor-default group">
                    <div className="text-[10px] uppercase text-neutral-400 tracking-wider group-hover:text-neutral-300">{t('hero.terminal.indexing')}</div>
                    <div className="text-lg font-bold text-[#FFB800] mt-0.5 metric-glow group-hover:scale-105 transition-transform">SEO {metrics.seo}%</div>
                  </div>
                </div>
                <div className="bg-black/60 rounded-xl p-3.5 border border-neutral-800 font-mono leading-relaxed text-neutral-300" style={{ fontSize: '11px' }}>
                  <div className="text-neutral-500">// {t('hero.terminal.pipeline')}</div>
                  <div className="text-[#FFB800]">&gt; catcode.deploy({'{'} landing: true, social: '5_posts/wk' {'}'})<span className="blinking-cursor" /></div>
                  <div className="text-neutral-400 mt-1 flex items-center gap-1.5"><span className="text-[#FFB800] font-bold">✓</span> {t('hero.terminal.ssl')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-unit-16 w-full pt-unit-8 border-t border-black/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { num: '01', titleKey: 'hero.features.delivery.title', descKey: 'hero.features.delivery.desc' },
            { num: '02', titleKey: 'hero.features.noCommitment.title', descKey: 'hero.features.noCommitment.desc' },
            { num: '03', titleKey: 'hero.features.adapted.title', descKey: 'hero.features.adapted.desc' },
          ].map((item) => (
              <div key={item.num} className="bg-white/80 p-4 rounded-xl border border-black/[0.08] flex items-center gap-3.5 shadow-sm hover:border-[#FFB800]/60 card-hover-lift">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-black shrink-0 font-mono text-xs font-bold border border-neutral-200" aria-hidden="true">
                {item.num}
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-black font-bold">{t(item.titleKey)}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{t(item.descKey)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}