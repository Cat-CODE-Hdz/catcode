import { useTranslation } from 'react-i18next';

const icons = ['signal_cellular_nodata', 'history_toggle_off', 'schedule'];

export function Problem() {
  const { t } = useTranslation();

  const problems = [
    { num: '01', icon: icons[0], metricColor: 'text-red-600' },
    { num: '02', icon: icons[1], metricColor: 'text-amber-600' },
    { num: '03', icon: icons[2], metricColor: 'text-red-600' },
  ];

  return (
    <section className="w-full bg-[#F4F3F1] py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="problema" aria-labelledby="problem-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-unit-12 gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-unit-3">
              <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
              <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
                {t('problem.sectionLabel')}
              </span>
            </div>
            <h2 id="problem-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
              {t('problem.title')}
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 pb-1">
            {t('problem.ref')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-6">
          {problems.map((problem, index) => {
            const problemData = t(`problem.problems.${index}`, { returnObjects: true }) as any;
            return (
              <div key={problem.num} className="bg-white p-unit-8 rounded-2xl border border-neutral-300/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-black/30 transition-all">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200 font-mono text-xs text-neutral-500">
                    <span className="font-semibold text-black">{problem.num} — {problemData.category}</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-600 font-mono" style={{ fontSize: '10px' }}>
                      {problemData.badge}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-unit-4">{problemData.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{problemData.description}</p>
                </div>
                <div className="pt-unit-8 mt-4 border-t border-neutral-100 flex items-center justify-between text-on-surface-variant font-mono" style={{ fontSize: '11px' }}>
                  <span className="flex items-center gap-1.5 text-neutral-700">
                    <span className="material-symbols-outlined" style={{ fontSize: '17px' }} aria-hidden="true">{problem.icon}</span>
                    {problemData.status}
                  </span>
                  <span className={`${problem.metricColor} font-semibold`}>{problemData.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-unit-10 bg-black text-white p-unit-8 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-unit-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 shrink-0" aria-hidden="true" />
            <p className="font-headline-sm text-[21px] font-medium tracking-tight text-white">
              {t('problem.cta')}
            </p>
          </div>
          <a className="inline-flex items-center gap-2 text-white font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-xl bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-500 transition-all shrink-0" href="#solucion">
            {t('problem.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
}