import { useTranslation } from 'react-i18next';

type LegalItem = { label: string; text: string };

export function Legal() {
  const { t } = useTranslation();

  const blocks = [
    { id: 'legal', titleKey: 'legal.aviso.title', items: t('legal.aviso.items', { returnObjects: true }) as LegalItem[] },
    { id: 'privacidad', titleKey: 'legal.privacidad.title', items: t('legal.privacidad.items', { returnObjects: true }) as LegalItem[] },
    { id: 'cookies', titleKey: 'legal.cookies.title', items: t('legal.cookies.items', { returnObjects: true }) as LegalItem[] },
  ];

  return (
    <section className="w-full bg-[#F4F3F1] py-unit-20 md:py-unit-24 border-t border-black/[0.06]" aria-labelledby="legal-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-12">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('legal.sectionLabel')}
            </span>
          </div>
          <h2 id="legal-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('legal.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-unit-8">
          {blocks.map((block) => (
            <div
              key={block.id}
              id={block.id}
              className="bg-white p-unit-8 rounded-2xl border border-neutral-300/70 shadow-sm scroll-mt-32"
            >
              <h3 className="font-headline-sm text-xl font-bold text-primary mb-unit-6">{t(block.titleKey)}</h3>
              <dl className="space-y-5">
                {block.items.map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold mb-1">
                      {item.label}
                    </dt>
                    <dd className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{item.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
