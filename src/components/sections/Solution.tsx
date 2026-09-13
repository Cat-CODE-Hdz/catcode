import { useTranslation } from 'react-i18next';

export function Solution() {
  const { t } = useTranslation();

  const solutions = [
    { num: '01', priceExtra: '+ €19/mes' },
    { num: '02' },
    { num: '03' },
    { num: '04', badge: 'RECOMENDADO' },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="solucion" aria-labelledby="solution-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-16">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('solution.sectionLabel')}
            </span>
          </div>
            <h2 id="solution-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('solution.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-6">
          {solutions.map((sol, index) => {
            const solData = t(`solution.solutions.${index}`, { returnObjects: true }) as any;
            const isHighlighted = solData.badge === 'RECOMENDADO';
            return (
              <div
                key={sol.num}
                className={`relative group p-unit-8 rounded-2xl flex flex-col justify-between transition-all duration-200 card-hover-lift ${
                  isHighlighted
                    ? 'bg-black text-white shadow-[0_15px_35px_rgba(0,0,0,0.3)] border border-neutral-700 hover:border-[#FFB800]/70'
                    : 'bg-white border border-neutral-200/90 shadow-sm hover:border-[#FFB800]/60'
                }`}
              >
                {solData.badge && (
                  <div className="absolute -top-3.5 right-6 bg-[#FFB800] text-black font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-lg tracking-wider">
                    {solData.badge}
                  </div>
                )}
                <div className="relative">
                  <div className={`font-mono text-[10px] uppercase tracking-widest mb-2 font-semibold ${isHighlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {solData.num} / {solData.category}
                  </div>
                  <div className="font-headline-sm text-2xl font-bold mb-1" style={{ color: isHighlighted ? 'white' : undefined }}>
                    {solData.name}
                  </div>
                  <div className={`font-label-md text-label-md font-medium mb-unit-4 ${isHighlighted ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {solData.subtitle}
                  </div>
                  <p className={`font-body-md text-body-md mb-unit-6 ${isHighlighted ? 'text-neutral-400' : 'text-on-surface-variant'}`}>
                    {solData.description}
                  </p>
                </div>
                <div className={`pt-unit-6 border-t ${isHighlighted ? 'border-neutral-800' : 'border-neutral-100'}`}>
                  <div className={`font-mono text-[11px] uppercase tracking-wider ${isHighlighted ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {t('solution.investment')}
                  </div>
                  <div className={`font-headline-sm text-2xl font-extrabold mt-1 ${isHighlighted ? 'text-[#FFB800]' : 'text-primary'}`}>
                    {solData.price}
                    {solData.priceExtra && (
                      <span className="font-body-sm text-body-sm font-normal text-neutral-500 block sm:inline">
                        {solData.priceExtra}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}