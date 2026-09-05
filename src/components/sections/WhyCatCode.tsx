import { useTranslation } from 'react-i18next';

export function WhyCatCode() {
  const { t } = useTranslation();

  const criteria = [0, 1, 2];

  return (
    <section className="w-full bg-[#F4F3F1] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="por-que-catcode" aria-labelledby="why-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-16">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
            <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
              {t('whyCatCode.sectionLabel')}
            </span>
          </div>
            <h2 id="why-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('whyCatCode.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-8 mb-unit-12">
          {criteria.map((index) => {
            const itemData = t(`whyCatCode.criteria.${index}`, { returnObjects: true }) as any;
            return (
              <div key={itemData.num} className="bg-white p-unit-8 rounded-2xl border border-neutral-300/70 shadow-sm">
                <div className="font-mono text-xs text-neutral-400 font-bold mb-4">CRITERIO {itemData.num}</div>
                <div className="font-headline-sm text-xl font-bold text-primary mb-unit-3">{itemData.title}</div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{itemData.description}</p>
              </div>
            );
          })}
        </div>

        <div className="p-unit-8 rounded-2xl bg-white border border-neutral-300/70 text-center max-w-2xl mx-auto shadow-sm">
          <p className="font-headline-sm text-xl text-primary font-medium tracking-tight">
            {t('whyCatCode.cta')}
          </p>
        </div>
      </div>
    </section>
  );
}