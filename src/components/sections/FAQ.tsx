import { useTranslation } from 'react-i18next';
import { useFaqAccordion } from '../../hooks/useFaqAccordion';

export function FAQ() {
  const { t } = useTranslation();
  const { openIndex, toggle } = useFaqAccordion();

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="faq">
      <div className="max-w-4xl mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="mb-unit-16 text-left">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-1.5 h-1.5 bg-black" />
            <span className="font-mono uppercase tracking-widest text-neutral-500 font-semibold" style={{ fontSize: '11px' }}>
              {t('faq.sectionLabel')}
            </span>
          </div>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-unit-3">
          {items.map((index) => {
            const itemData = t(`faq.items.${index}`, { returnObjects: true }) as any;
            return (
              <div key={itemData.question} className="bg-[#FAF9F7] rounded-xl p-unit-6 border border-neutral-200/90 hover:border-black/30 transition-all">
                <button
                  className="w-full flex items-center justify-between text-left gap-unit-4 font-headline-sm text-lg text-primary font-semibold"
                  onClick={() => toggle(index)}
                  type="button"
                >
                  <span>{itemData.question}</span>
                  <span
                    className="material-symbols-outlined transition-transform duration-200 text-neutral-500 shrink-0"
                    style={{
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className="mt-unit-4 pt-unit-4 text-on-surface-variant font-body-md text-body-md border-t border-neutral-200/80"
                  style={{ display: openIndex === index ? 'block' : 'none' }}
                >
                  {itemData.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}