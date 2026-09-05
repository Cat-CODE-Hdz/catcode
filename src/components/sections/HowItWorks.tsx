import { useTranslation } from 'react-i18next';

export function HowItWorks() {
  const { t } = useTranslation();

  const steps = ['01', '02', '03'];

  return (
    <section className="w-full bg-[#F7F6F4] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="como-funciona" aria-labelledby="howtitle-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-16">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
            <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
              {t('howItWorks.sectionLabel')}
            </span>
          </div>
            <h2 id="howtitle-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('howItWorks.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-8 relative">
          {steps.map((num, index) => {
            const stepData = t(`howItWorks.steps.${index}`, { returnObjects: true }) as any;
            return (
              <div key={num} className="bg-white p-unit-8 rounded-2xl border border-neutral-300/70 shadow-sm relative group hover:border-black/30 transition-all">
                <div className="font-mono text-xs font-bold text-neutral-400 mb-6 flex items-center justify-between">
                  <span className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-black border border-neutral-200">
                    {stepData.num}
                  </span>
                  <span>{stepData.phase}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-3 tracking-tight">{stepData.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{stepData.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}