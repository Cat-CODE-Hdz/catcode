import { useTranslation } from 'react-i18next';

const icons = ['language', 'post_add', 'share', 'build_circle'];

export function WhatIncludes() {
  const { t } = useTranslation();

  const columns = [0, 1, 2, 3];

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="que-incluye">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-16">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-1.5 h-1.5 bg-black" />
            <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
              {t('whatIncludes.sectionLabel')}
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('whatIncludes.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-unit-6">
          {columns.map((colIndex) => {
            const colData = t(`whatIncludes.columns.${colIndex}`, { returnObjects: true }) as any;
            return (
              <div key={colData.title} className="bg-[#FAF9F7] p-unit-8 rounded-2xl border border-neutral-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-unit-6 pb-4 border-b border-neutral-200/80">
                  <div className="flex items-center gap-unit-2">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '22px' }}>{icons[colIndex]}</span>
                    <h3 className="font-headline-sm text-xl font-bold text-primary tracking-tight">{colData.title}</h3>
                  </div>
                  <span className="font-mono uppercase text-neutral-400" style={{ fontSize: '10px' }}>{colData.count}</span>
                </div>
                <ul className="space-y-unit-3 font-body-md text-body-md text-on-surface-variant">
                  {colData.items.map((item: string) => (
                    <li key={item} className="flex items-center gap-unit-3 py-1 border-b border-neutral-100">
                      <span className="w-1.5 h-1.5 bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}