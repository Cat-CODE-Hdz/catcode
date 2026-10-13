import { useTranslation } from 'react-i18next';
import { usePricingTabs } from '../../hooks/usePricingTabs';
import { pricingCategories } from '../../data/pricing';
import { track } from '../../lib/analytics';

export function Pricing() {
  const { t } = useTranslation();
  const { activeTab, switchTab } = usePricingTabs('custom');

  const tabs = pricingCategories.map((cat) => ({
    id: cat.id,
    label: t(`pricing.categories.${cat.id}.label`),
  }));

  const getTabData = (catId: string) => {
    return t(`pricing.categories.${catId}`, { returnObjects: true }) as any;
  };

  return (
    <section className="w-full bg-[#F5F4F2] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="precios" aria-labelledby="pricing-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-10">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('pricing.sectionLabel')}
            </span>
          </div>
          <h2 id="pricing-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('pricing.title')}
          </h2>
        </div>

        <div
          className="p-1.5 bg-neutral-200/80 rounded-2xl max-w-fit mb-unit-10 border border-neutral-300/80 shadow-inner flex flex-wrap gap-1"
          role="tablist"
          aria-label="Categorías de planes"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-150 ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-100/50'
              }`}
              onClick={() => switchTab(tab.id)}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {pricingCategories.map((cat) => {
          const tabData = getTabData(cat.id);
          const planKeys = Object.keys(tabData.plans);
          const note = tabData.note;

          return (
            <div
              key={cat.id}
              id={`panel-${cat.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${cat.id}`}
              className={`flex-col ${activeTab === cat.id ? 'flex' : 'hidden'}`}
              tabIndex={0}
            >
              <div className="mb-unit-8 pb-4 border-b border-neutral-300/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{tabData.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{tabData.subtitle}</p>
                </div>
                {cat.id === 'custom' && (
                  <span className="font-mono text-xs text-neutral-500 font-semibold uppercase">{t('pricing.setup')}</span>
                )}
              </div>

              {cat.id === 'full' ? (
                <div className="max-w-3xl bg-black text-white p-unit-10 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-neutral-700 card-hover-lift hover:border-[#FFB800]/80">
                  <span className="absolute -top-3.5 right-8 bg-[#FFB800] text-black font-mono text-[10px] uppercase px-3 py-1 rounded-full font-bold tracking-wider shadow-md" aria-hidden="true">
                    {tabData.plans.full.badge}
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">{tabData.plans.full.name}</span>
                    <div className="text-display-xl-mobile md:text-display-xl font-bold text-white mt-2">
                      €{cat.plans[0].monthly}<span className="font-headline-sm text-headline-sm font-normal text-neutral-400">{t('pricing.monthSuffix')}</span>
                    </div>
                    <p className="font-body-lg text-body-lg text-neutral-300 mt-unit-4 mb-unit-6">
                      {tabData.plans.full.description}
                    </p>
                    <div className="space-y-unit-3 pt-unit-6 pb-unit-8 text-neutral-200 font-body-md text-body-md border-t border-neutral-800">
                      {tabData.plans.full.features.map((feature: string) => (
                        <div key={feature} className="flex items-center gap-unit-3">
                          <span className="material-symbols-outlined text-[#FFB800]" style={{ fontSize: '20px' }} aria-hidden="true">check_circle</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <a className="inline-flex items-center justify-center w-full h-[54px] px-unit-6 rounded-xl bg-white hover:bg-neutral-100 text-black font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-md active:scale-[0.99] btn-amber-glow" href="#contacto" onClick={() => track('pricing_cta', { category: 'full', plan: 'full' })}>
                    {tabData.plans.full.cta} <span className="text-[#FFB800] ml-1.5">→</span>
                  </a>
                </div>
              ) : (
                <div className="grid gap-unit-6 grid-cols-1 md:grid-cols-3">
                  {cat.plans.map((plan, planIndex) => {
                    const planData = tabData.plans[planKeys[planIndex]];
                    return (
                      <div
                        key={plan.id}
                        className={`bg-white p-unit-8 rounded-2xl flex flex-col justify-between transition-all card-hover-lift ${
                          plan.highlighted
                            ? 'border-2 border-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] relative'
                            : 'border border-neutral-300/80 shadow-sm hover:border-[#FFB800]/60'
                        }`}
                      >
                        <div>
                          {planData.badge && (
                            <span className="inline-block mb-3 bg-black text-[#FFB800] border border-[#FFB800]/40 font-mono text-[10px] uppercase px-3 py-1 rounded-full font-bold tracking-wider shadow-sm">
                              {planData.badge}
                            </span>
                          )}
                          <div className="flex items-center justify-between font-mono text-xs mb-3 text-neutral-500">
                            <span className={`font-semibold uppercase tracking-wider ${plan.highlighted ? 'text-black font-bold' : 'text-black'}`}>
                              {planData.name}
                            </span>
                            {planData.tier && <span className={plan.highlighted ? 'text-[#FFB800] font-bold' : ''}>{planData.tier}</span>}
                          </div>
                          <div className="font-headline-md text-[34px] font-extrabold text-primary tracking-tight">
                            €{plan.setup ?? plan.monthly}
                            <span className="font-mono text-xs font-normal text-neutral-500">
                              {plan.setup ? t('pricing.setupSuffix') : t('pricing.monthSuffix')}
                            </span>
                          </div>
                          {plan.setup && (
                            <div className={`font-mono text-xs mt-1 ${plan.highlighted ? 'text-neutral-800 font-bold' : 'text-neutral-600 font-medium'}`}>
                              + €{plan.monthly}{t('pricing.monthSuffix')}
                            </div>
                          )}
                          {planData.features?.[0] && (
                            <div className="font-body-md text-body-md text-primary font-semibold mt-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-[#FFB800]" aria-hidden="true" />
                              {planData.features[0]}
                            </div>
                          )}
                          <p className="font-body-md text-body-md text-on-surface-variant mt-unit-6 border-t border-neutral-100 pt-4">
                            {planData.description}
                          </p>
                          {planData.features?.length > 1 && (
                            <ul className="mt-unit-4 space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                              {planData.features.slice(1).map((feature: string) => (
                                <li key={feature} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-[#FFB800] mt-1.5 shrink-0" aria-hidden="true" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <a
                          className={`mt-unit-8 inline-flex items-center justify-center h-12 px-unit-5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-colors ${
                            plan.highlighted
                              ? 'bg-black hover:bg-neutral-800 text-white btn-amber-glow'
                              : 'bg-neutral-100 hover:bg-neutral-200 text-primary border border-neutral-300/70 hover:border-[#FFB800]'
                          }`}
                          href="#contacto"
                          onClick={() => track('pricing_cta', { category: cat.id, plan: plan.id })}
                        >
                          {planData.cta} {plan.highlighted && <span className="text-[#FFB800] ml-1">→</span>}
                          {!plan.highlighted && ' →'}
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}

              {note && (
                <div className="mt-unit-6 p-4 rounded-xl bg-neutral-200/80 border border-neutral-300/70 text-on-surface-variant font-mono text-xs flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#FFB800]" style={{ fontSize: '16px' }} aria-hidden="true">info</span>
                  <span>{note}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
