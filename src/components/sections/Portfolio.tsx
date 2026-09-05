import { useTranslation } from 'react-i18next';

const imgData = [
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZXdTAiPJd9q2LBEXXK6gDn9kZ3_srRuiFbLZLyEtIrpSV9v2m2TgHyM3NVEC_vQYe3oTq5-rEJiYKbJKHPYmPSg-ZzPNmLFjrbDM8PVCH4iNppX0fhpbc_MvyXdTLbRIAuSgMH-Z_GqlGg0cT9BwVGtaqfwvm1F38VbfqEWNBFMgiN1B1lk5Eyrx6ngpNQzDeKUz2rICS9Zbu6EpXSM8sXg9tzqKPIOhP-vXWmekFvdeQVn3xTi82',
    imgAlt: 'A modern minimalist restaurant interior in Madrid with warm architectural lighting, dark stone tables, elegant linen tableware, subtle typographic accents, clean composition, high-end editorial photography with sharp contrast',
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADVTNi844US5afwgqxdbGsgro9wRr14K0pCqNC69BVx1WQwB0UHzOh8Ojoxj5M3rBP10JW1Dgq7yz4ZDgypR3bN8DPhz9IRJ3KbG2VufTIZ1n2GS5eYgaaVdRG2qRoztv7tqLA8pze1gKJoSw5R9XIWGBmzmlkMQPawpsK4R2RZdUQOHMTJ5ax2pwFI938hAYR28XdHq_Cd-Q7CPbVn_fumETfvl7tCnIw45zPhvyIyj-KoA0NDdQ1',
    imgAlt: 'A bright contemporary beauty and wellness aesthetic clinic interior in Valencia with neutral off-white concrete textures, organic archway details, soft natural daylight, minimalist glass bottles, calm and balanced editorial style',
  },
  {
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBD0-1offX7g45Pp9XQ0ereGh6MHQ8rZEXEuT2VATD422xcCbOEkQ5wp2e79yPpMZNKFHu3WdalrgjuExdbd7fqhvjAoSjRhm6jSXV3xhdC0rzNiBeE44D4ZKFYN0UdIvTRk0lKKWRdZl9QEBWVBK9mBWddUr_mW5JiduUWuuqrsl-sfuzmQ0H3ZI-G-2-qkr9eqlAniCEMBCK7O66hbxyzWV-YKHdoPzU_rj6IzFiLNbnsQSm5xM6N',
    imgAlt: 'Rugged scenic coastal cliffs and foggy green landscape in Basque Country near Bilbao, an outdoor expedition van parked subtly on the horizon, cool natural lighting, stark cinematic editorial atmosphere, refined muted tone palette',
  },
];

export function Portfolio() {
  const { t } = useTranslation();

  const items = [0, 1, 2];

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="portfolio">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-16">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-1.5 h-1.5 bg-black" />
            <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
              {t('portfolio.sectionLabel')}
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold mb-unit-2">
            {t('portfolio.title')}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{t('portfolio.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-8">
          {items.map((index) => {
            const itemData = t(`portfolio.items.${index}`, { returnObjects: true }) as any;
            const img = imgData[index];
            return (
              <div key={itemData.name} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm flex flex-col justify-between group hover:border-black/40 hover:shadow-xl transition-all duration-300">
                <div>
                  <div className="px-4 py-2.5 bg-neutral-100 border-b border-neutral-200 flex items-center justify-between font-mono text-neutral-500" style={{ fontSize: '10px' }}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-300" />
                      <span className="w-2 h-2 rounded-full bg-neutral-300" />
                      <span className="w-2 h-2 rounded-full bg-neutral-300" />
                    </div>
                    <span>{itemData.domain}</span>
                    <span className="text-neutral-400">{itemData.resolution}</span>
                  </div>
                  <div className="w-full h-60 bg-neutral-100 overflow-hidden relative">
                    <img
                      alt={img.imgAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={img.imgSrc}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-unit-6">
                    <div className="flex items-center justify-between gap-unit-2 mb-unit-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">{itemData.category}</span>
                      <span className="font-mono px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-black font-semibold" style={{ fontSize: '10px' }}>
                        {itemData.badge}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-2xl font-bold text-primary mb-unit-3 tracking-tight">{itemData.name}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{itemData.description}</p>
                  </div>
                </div>
                <div className="px-unit-6 pb-unit-6 pt-2">
                  <a className="inline-flex items-center justify-center w-full h-11 rounded-xl bg-neutral-100 group-hover:bg-black group-hover:text-white text-black font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 border border-neutral-200 group-hover:border-black" href="#contacto">
                    {t('portfolio.cta')} {itemData.demoPath} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}