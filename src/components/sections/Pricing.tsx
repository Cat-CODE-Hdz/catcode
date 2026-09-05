import { useTranslation } from 'react-i18next';
import { usePricingTabs } from '../../hooks/usePricingTabs';
import { pricingCategories } from '../../data/pricing';

export function Pricing() {
  const { t } = useTranslation();
  const { activeTab, switchTab } = usePricingTabs('custom');

  const tabs = pricingCategories.map((cat) => ({
    id: cat.id,
    label: t(`pricing.categories.${cat.id}.label`),
  }));

  const getTabData = (catId: string) => {
    const catData = t(`pricing.categories.${catId}`, { returnObjects: true }) as any;
    return catData;
  };

  return (
    <section className="w-full bg-[#F5F4F2] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="precios" aria-labelledby="pricing-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-10">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
            <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
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

        {pricingCategories.map((cat) => (
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
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{getTabData(cat.id).title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{getTabData(cat.id).subtitle}</p>
              </div>
              {cat.id === 'custom' && (
                <span className="font-mono text-xs text-neutral-500 font-semibold uppercase">{t('pricing.setup')}</span>
              )}
            </div>

            {cat.id === 'full' ? (
              <div className="max-w-3xl bg-black text-white p-unit-10 rounded-3xl relative shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-neutral-700">
                <span className="absolute -top-3.5 right-8 bg-white text-black font-mono uppercase px-3 py-1 rounded-full font-bold tracking-wider shadow-md" style={{ fontSize: '10px' }} aria-hidden="true">
                  {getTabData(cat.id).plans.full.badge}
                </span>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">{getTabData(cat.id).plans.full.name}</span>
                  <div className="text-display-xl-mobile md:text-display-xl font-bold text-white mt-2">
                    {cat.plans[0].monthlyPrice}<span className="font-headline-sm text-headline-sm font-normal text-neutral-400">/mes</span>
                  </div>
                  <p className="font-body-lg text-body-lg text-neutral-300 mt-unit-4 mb-unit-6">
                    {cat.plans[0].description}
                  </p>
                  <div className="space-y-unit-3 pt-unit-6 pb-unit-8 text-neutral-200 font-body-md text-body-md border-t border-neutral-800">
                    {cat.plans[0].features?.map((feature) => (
                      <div key={feature} className="flex items-center gap-unit-3">
                        <span className="material-symbols-outlined text-emerald-400" style={{ fontSize: '20px' }} aria-hidden="true">check_circle</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <a className="inline-flex items-center justify-center w-full h-[54px] px-unit-6 rounded-xl bg-white hover:bg-neutral-100 text-black font-mono text-sm uppercase tracking-wider font-bold transition-all shadow-md active:scale-[0.99]" href="#contacto">
                  {getTabData(cat.id).plans.full.cta} →
                </a>
              </div>
            ) : (
              <div className={`grid gap-unit-6 ${cat.id === 'social' ? 'grid-cols-1 md:grid-cols-2 max-w-4xl' : 'grid-cols-1 md:grid-cols-3'}`}>
                {cat.plans.map((plan, planIndex) => {
                  const planData = getTabData(cat.id).plans[Object.keys(getTabData(cat.id).plans)[planIndex]];
                  return (
                    <div
                      key={plan.name}
                      className={`bg-white p-unit-8 rounded-2xl flex flex-col justify-between transition-all ${
                        plan.highlighted
                          ? 'border-2 border-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] relative'
                          : 'border border-neutral-300/80 shadow-sm hover:border-black/30'
                      }`}
                    >
                      {planData.badge && (
                        <span className="absolute -top-3 right-6 bg-black text-white font-mono uppercase px-3 py-1 rounded-full font-bold tracking-wider" style={{ fontSize: '10px' }} aria-hidden="true">
                          {planData.badge}
                        </span>
                      )}
                      <div>
                        <div className="flex items-center justify-between font-mono text-xs mb-3 text-neutral-500">
                          <span className={`font-semibold uppercase tracking-wider ${plan.highlighted ? 'text-black font-bold' : 'text-black'}`}>
                            {planData.name}
                          </span>
                          {plan.tier && <span className={plan.highlighted ? 'text-black font-semibold' : ''}>{plan.tier}</span>}
                        </div>
                        <div className="font-headline-md text-[34px] font-extrabold text-primary tracking-tight">
                          {plan.setupPrice || plan.monthlyPrice.replace('/mes', '')}
                          {!plan.setupPrice && <span className="font-mono text-xs font-normal text-neutral-500">/mes</span>}
                          {plan.setupPrice && <span className="font-mono text-xs font-normal text-neutral-500"> setup</span>}
                        </div>
                        {plan.setupPrice && (
                          <div className={`font-mono text-xs mt-1 ${plan.highlighted ? 'text-neutral-800 font-bold' : 'text-neutral-600 font-medium'}`}>
                            + {plan.monthlyPrice}
                          </div>
                        )}
                        {plan.features && (
                          <div className="font-body-md text-body-md text-primary font-semibold mt-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
                            {plan.features[0]}
                          </div>
                        )}
                        <p className="font-body-md text-body-md text-on-surface-variant mt-unit-6 border-t border-neutral-100 pt-4">
                          {plan.description}
                        </p>
                      </div>
                      <a
                        className={`mt-unit-8 inline-flex items-center justify-center h-12 px-unit-5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold transition-colors ${
                          plan.highlighted
                            ? 'bg-black hover:bg-neutral-800 text-white'
                            : 'bg-neutral-100 hover:bg-neutral-200 text-primary border border-neutral-300/70'
                        }`}
                        href="#contacto"
                      >
                        {planData.cta} →
                      </a>
                    </div>
                  );
                })}
              </div>
            )}

            {cat.note && (
              <div className="mt-unit-6 p-4 rounded-xl bg-neutral-200/80 border border-neutral-300/70 text-on-surface-variant font-mono text-xs flex items-center gap-2.5">
                <span className="material-symbols-outlined text-black" style={{ fontSize: '16px' }} aria-hidden="true">info</span>
                <span>{getTabData(cat.id).note}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
