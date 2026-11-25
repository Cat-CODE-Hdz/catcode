import { useTranslation } from 'react-i18next';
import { usePricingTabs } from '../../hooks/usePricingTabs';
import { pricingCategories } from '../../data/pricing';
import type { PricingPlan } from '../../data/pricing';
import { track } from '../../lib/analytics';

interface PlanText {
  name: string;
  cta: string;
  badge?: string;
  tier?: string;
  description: string;
  features?: string[];
}

interface CategoryText {
  title: string;
  subtitle: string;
  note?: string;
  plans: Record<string, PlanText>;
}

export function Pricing() {
  const { t } = useTranslation();
  const { activeTab, switchTab } = usePricingTabs('custom');

  const getCategoryText = (categoryId: string) =>
    t(`pricing.categories.${categoryId}`, { returnObjects: true }) as CategoryText;

  const tabs = [
    { id: 'custom', label: t('pricing.categories.custom.label') },
    { id: 'services', label: t('pricing.servicesTab') },
  ];

  const customCategory = pricingCategories.find((category) => category.id === 'custom')!;
  const customText = getCategoryText('custom');

  const services = pricingCategories
    .filter((category) => category.id !== 'custom')
    .map((category) => {
      const text = getCategoryText(category.id);
      const plan = category.plans[0];

      return { category, text, plan, planText: text.plans[plan.id] };
    });

  const renderStandardCard = (
    categoryId: string,
    plan: PricingPlan,
    planText: PlanText,
    highlighted: boolean,
  ) => {
    const price = plan.oneTime ?? plan.setup ?? plan.monthly;
    const suffix = plan.oneTime
      ? t('pricing.oneTimeSuffix')
      : plan.setup
        ? t('pricing.setupSuffix')
        : t('pricing.monthSuffix');

    return (
      <div
        key={plan.id}
        className={`bg-white p-unit-8 rounded-2xl flex flex-col justify-between transition-all card-hover-lift ${
          highlighted
            ? 'border-2 border-black shadow-[0_12px_30px_rgba(0,0,0,0.06)] relative'
            : 'border border-neutral-300/80 shadow-sm hover:border-[#FFB800]/60'
        }`}
      >
        <div>
          {planText.badge && (
            <span className="inline-block mb-3 bg-black text-[#FFB800] border border-[#FFB800]/40 font-mono text-[10px] uppercase px-3 py-1 rounded-full font-bold tracking-wider shadow-sm">
              {planText.badge}
            </span>
          )}
          <div className="flex items-center justify-between font-mono text-xs mb-3 text-neutral-500">
            <span className={`font-semibold uppercase tracking-wider ${highlighted ? 'text-black font-bold' : 'text-black'}`}>
              {planText.name}
            </span>
            {planText.tier && <span className={highlighted ? 'text-[#FFB800] font-bold' : ''}>{planText.tier}</span>}
          </div>
          <div className="font-headline-md text-[34px] font-extrabold text-primary tracking-tight">
            €{price}
            <span className="font-mono text-xs font-normal text-neutral-500">{suffix}</span>
          </div>
          {plan.setup && plan.monthly ? (
            <div className={`font-mono text-xs mt-1 ${highlighted ? 'text-neutral-800 font-bold' : 'text-neutral-600 font-medium'}`}>
              + €{plan.monthly}{t('pricing.monthSuffix')}
            </div>
          ) : null}
          {planText.features?.[0] && (
            <div className="font-body-md text-body-md text-primary font-semibold mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FFB800]" aria-hidden="true" />
              {planText.features[0]}
            </div>
          )}
          <p className="font-body-md text-body-md text-on-surface-variant mt-unit-6 border-t border-neutral-100 pt-4">
            {planText.description}
          </p>
          {planText.features && planText.features.length > 1 && (
            <ul className="mt-unit-4 space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              {planText.features.slice(1).map((feature) => (
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
            highlighted
              ? 'bg-black hover:bg-neutral-800 text-white btn-amber-glow'
              : 'bg-neutral-100 hover:bg-neutral-200 text-primary border border-neutral-300/70 hover:border-[#FFB800]'
          }`}
          href="#contacto"
          onClick={() => track('pricing_cta', { category: categoryId, plan: plan.id })}
        >
          {planText.cta} <span className="text-[#FFB800] ml-1.5">→</span>
        </a>
      </div>
    );
  };

  const renderFullCard = (plan: PricingPlan, planText: PlanText) => (
    <div
      key={plan.id}
      className="bg-black text-white p-unit-8 rounded-2xl flex flex-col justify-between transition-all card-hover-lift border border-neutral-700 shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:border-[#FFB800]/80"
    >
      <div>
        {planText.badge && (
          <span className="badge-glow inline-block mb-3 bg-[#FFB800] text-black font-mono text-[10px] uppercase px-3 py-1 rounded-full font-bold tracking-wider shadow-md">
            {planText.badge}
          </span>
        )}
        <div className="font-mono text-xs uppercase tracking-wider font-semibold text-neutral-300">
          {planText.name}
        </div>
        <div className="font-headline-md text-[34px] font-extrabold text-white tracking-tight mt-3">
          €{plan.monthly}
          <span className="font-mono text-xs font-normal text-neutral-400">{t('pricing.monthSuffix')}</span>
        </div>
        <p className="font-body-md text-body-md text-neutral-300 mt-unit-6 border-t border-neutral-800 pt-4">
          {planText.description}
        </p>
        {planText.features && (
          <ul className="mt-unit-4 space-y-2 font-body-sm text-body-sm text-neutral-200">
            {planText.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#FFB800] shrink-0" style={{ fontSize: '18px' }} aria-hidden="true">
                  check_circle
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      <a
        className="mt-unit-8 inline-flex items-center justify-center h-12 px-unit-5 rounded-xl bg-white hover:bg-neutral-100 text-black font-mono text-xs uppercase tracking-wider font-bold transition-all active:scale-[0.99] btn-amber-glow"
        href="#contacto"
        onClick={() => track('pricing_cta', { category: 'full', plan: plan.id })}
      >
        {planText.cta} <span className="text-[#FFB800] ml-1.5">→</span>
      </a>
    </div>
  );

  return (
    <section className="w-full bg-[#F5F4F2] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="precios" aria-labelledby="pricing-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-10">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="section-dot w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
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

        <div
          id="panel-custom"
          role="tabpanel"
          aria-labelledby="tab-custom"
          className={`flex-col ${activeTab === 'custom' ? 'flex' : 'hidden'}`}
          tabIndex={0}
        >
          <div className="mb-unit-8 pb-4 border-b border-neutral-300/70 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{customText.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{customText.subtitle}</p>
            </div>
            <span className="font-mono text-xs text-neutral-500 font-semibold uppercase">{t('pricing.setup')}</span>
          </div>

          <div className="grid gap-unit-6 grid-cols-1 md:grid-cols-3">
            {customCategory.plans.map((plan) =>
              renderStandardCard('custom', plan, customText.plans[plan.id], Boolean(plan.highlighted)),
            )}
          </div>

          {customText.note && (
            <div className="mt-unit-6 p-4 rounded-xl bg-neutral-200/80 border border-neutral-300/70 text-on-surface-variant font-mono text-xs flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#FFB800]" style={{ fontSize: '16px' }} aria-hidden="true">
                info
              </span>
              <span>{customText.note}</span>
            </div>
          )}
        </div>

        <div
          id="panel-services"
          role="tabpanel"
          aria-labelledby="tab-services"
          className={`flex-col ${activeTab === 'services' ? 'flex' : 'hidden'}`}
          tabIndex={0}
        >
          <div className="mb-unit-8 pb-4 border-b border-neutral-300/70">
            <h3 className="font-headline-sm text-headline-sm font-bold text-primary">{t('pricing.servicesTitle')}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('pricing.servicesSubtitle')}</p>
          </div>

          <div className="grid gap-unit-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {services.map(({ category, plan, planText }) =>
              category.id === 'full'
                ? renderFullCard(plan, planText)
                : renderStandardCard(category.id, plan, planText, false),
            )}
          </div>

          {services.some((service) => service.text.note) && (
            <div className="mt-unit-6 space-y-3">
              {services.map(({ category, text, planText }) =>
                text.note ? (
                  <div
                    key={category.id}
                    className="p-4 rounded-xl bg-neutral-200/80 border border-neutral-300/70 text-on-surface-variant font-body-sm text-body-sm flex items-start gap-2.5"
                  >
                    <span className="material-symbols-outlined text-[#FFB800] shrink-0" style={{ fontSize: '16px' }} aria-hidden="true">
                      info
                    </span>
                    <span>
                      <strong className="text-black">{planText.name}:</strong> {text.note}
                    </span>
                  </div>
                ) : null,
              )}
            </div>
          )}
        </div>

        <div className="mt-unit-8 p-unit-6 rounded-2xl bg-white border border-neutral-300/80">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-4">
            {t('pricing.addons.title')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {(t('pricing.addons.items', { returnObjects: true }) as Array<{ name: string; price: string }>).map((item) => (
              <div key={item.name} className="flex items-baseline justify-between gap-3 p-3 rounded-xl bg-neutral-100/70 border border-neutral-200">
                <span className="font-body-sm text-body-sm text-primary">{item.name}</span>
                <span className="font-mono text-xs font-bold text-primary whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-unit-6 text-center font-mono text-xs text-on-surface-variant">
          {t('pricing.taxNote')}
        </p>
      </div>
    </section>
  );
}
