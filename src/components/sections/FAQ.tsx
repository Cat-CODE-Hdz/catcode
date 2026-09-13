import { useTranslation } from 'react-i18next';
import { useFaqAccordion } from '../../hooks/useFaqAccordion';

export function FAQ() {
  const { t } = useTranslation();
  const { openIndex, toggle } = useFaqAccordion();

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="faq" aria-labelledby="faq-title">
      <div className="max-w-4xl mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="mb-unit-16 text-left">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('faq.sectionLabel')}
            </span>
          </div>
          <h2 id="faq-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-unit-3" id="faq-accordion" role="list">
          {items.map((index) => {
            const itemData = t(`faq.items.${index}`, { returnObjects: true }) as any;
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={itemData.question} className={`faq-item bg-[#FAF9F7] rounded-xl p-unit-6 border border-neutral-200/90 hover:border-[#FFB800]/60 transition-all duration-200 ${isOpen ? 'is-open' : ''}`} role="listitem">
                <h3>
                  <button
                    id={buttonId}
                    className="w-full flex items-center justify-between text-left gap-unit-4 font-headline-sm text-lg text-primary font-semibold"
                    onClick={() => toggle(index)}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{itemData.question}</span>
                    <span
                      className="material-symbols-outlined faq-chevron transition-transform duration-300 text-neutral-500 shrink-0"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </button>
                </h3>
                <div className="faq-answer-container">
                  <div className="overflow-hidden">
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="mt-unit-4 pt-unit-4 text-on-surface-variant font-body-md text-body-md border-t border-neutral-200/80"
                    >
                      {itemData.answer}
                    </div>
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
