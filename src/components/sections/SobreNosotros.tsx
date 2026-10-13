import { useTranslation } from 'react-i18next';

export function SobreNosotros() {
  const { t } = useTranslation();

  const facts = t('about.facts', { returnObjects: true }) as Array<{ label: string; value: string; desc: string }>;
  const values = t('about.values', { returnObjects: true }) as Array<{ name: string; desc: string }>;

  return (
    <section className="w-full bg-white py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="nosotros" aria-labelledby="about-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-unit-3">
              <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
                {t('about.sectionLabel')}
              </span>
            </div>
            <h2 id="about-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold mb-unit-6">
              {t('about.title')}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-unit-6">
              {t('about.description')}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              {t('about.tagline')}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-unit-6">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-[#F4F3F1] p-unit-6 rounded-2xl border border-neutral-300/70 card-hover-lift">
                <div className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold mb-2">{fact.label}</div>
                <div className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight">{fact.value}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">{fact.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-unit-16">
          <div className="flex items-center gap-2 mb-unit-6">
            <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('about.valuesTitle')}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-unit-6">
            {values.map((value) => (
              <div key={value.name} className="bg-white p-unit-6 rounded-2xl border border-neutral-300/70 shadow-sm card-hover-lift">
                <div className="font-headline-sm text-xl font-bold text-primary mb-2">{value.name}</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
