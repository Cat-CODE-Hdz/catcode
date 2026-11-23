import { useTranslation } from 'react-i18next';
import { useFaqAccordion } from '../../hooks/useFaqAccordion';
import { Reveal } from '../ui/Reveal';

export function FAQ() {
  const { t } = useTranslation();
  const { openIndex, toggle } = useFaqAccordion(0);

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const left = items.slice(0, 5);
  const right = items.slice(5);

  const renderItem = (index: number) => {
    const itemData = t(`faq.items.${index}`, { returnObjects: true }) as {
      question: string;
      answer: string;
    };
    const isOpen = openIndex === index;
    const buttonId = `faq-btn-${index}`;
    const panelId = `faq-panel-${index}`;

    return (
      <div
        className={`faq-item group relative overflow-hidden rounded-2xl border p-unit-5 md:p-unit-6 transition-all duration-300 ${
          isOpen
            ? 'is-open border-[#FFB800]/70 bg-white shadow-[0_14px_34px_-18px_rgba(0,0,0,0.25)]'
            : 'border-neutral-200/90 bg-[#FAF9F7] hover:-translate-y-0.5 hover:border-[#FFB800]/50 hover:bg-white'
        }`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-[3px] bg-[#FFB800] origin-top transition-transform duration-300 ${
            isOpen ? 'scale-y-100' : 'scale-y-0'
          }`}
          aria-hidden="true"
        />
        <h3>
          <button
            id={buttonId}
            className="w-full flex items-start justify-between text-left gap-unit-4"
            onClick={() => toggle(index)}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
          >
            <span
              className={`font-mono text-[10px] leading-5 font-semibold tracking-wider shrink-0 transition-colors duration-200 ${
                isOpen ? 'text-[#B88600]' : 'text-neutral-400'
              }`}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="flex-1 font-headline-sm text-base md:text-lg text-primary font-semibold leading-snug">
              {itemData.question}
            </span>
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
              aria-hidden={!isOpen}
              className="mt-unit-4 pt-unit-4 pl-unit-10 text-on-surface-variant font-body-md text-body-md border-t border-neutral-200/80"
            >
              <div className="faq-answer-body">{itemData.answer}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-surface-container-lowest py-unit-20 md:py-unit-24 border-b border-black/[0.06]" id="faq" aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="mb-unit-16 text-left">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="section-dot w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('faq.sectionLabel')}
            </span>
          </div>
          <h2 id="faq-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('faq.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-unit-6 gap-y-unit-3 items-start">
          <div className="space-y-unit-3">
            {left.map((index) => (
              <Reveal key={index} delay={(index % 5) * 45}>
                {renderItem(index)}
              </Reveal>
            ))}
          </div>
          <div className="space-y-unit-3">
            {right.map((index) => (
              <Reveal key={index} delay={(index % 5) * 45}>
                {renderItem(index)}
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="mt-unit-10">
          <div className="rounded-2xl bg-black text-white p-unit-6 md:p-unit-8 flex flex-col md:flex-row md:items-center justify-between gap-unit-4">
            <div>
              <p className="font-headline-sm text-lg font-bold">{t('faq.ctaTitle')}</p>
              <p className="text-sm text-neutral-400 mt-1">{t('faq.ctaText')}</p>
            </div>
            <a
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-white hover:bg-neutral-200 text-black text-sm font-semibold transition-all active:scale-95 shrink-0"
              href="#contacto"
            >
              {t('faq.ctaButton')} <span className="text-[#B88600] ml-2">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
