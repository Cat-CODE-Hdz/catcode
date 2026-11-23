import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFaqAccordion } from '../../hooks/useFaqAccordion';
import { PlusToggle } from '../ui/PlusToggle';

type LegalItem = { label: string; text: string };

const blockIds = ['legal', 'privacidad', 'cookies'];

export function Legal() {
  const { t } = useTranslation();
  const { openIndex, toggle, setOpenIndex } = useFaqAccordion(0);

  const blocks = [
    { id: 'legal', titleKey: 'legal.aviso.title', items: t('legal.aviso.items', { returnObjects: true }) as LegalItem[] },
    { id: 'privacidad', titleKey: 'legal.privacidad.title', items: t('legal.privacidad.items', { returnObjects: true }) as LegalItem[] },
    { id: 'cookies', titleKey: 'legal.cookies.title', items: t('legal.cookies.items', { returnObjects: true }) as LegalItem[] },
  ];

  useEffect(() => {
    const openFromHash = () => {
      const index = blockIds.indexOf(window.location.hash.slice(1));
      if (index >= 0) setOpenIndex(index);
    };

    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, [setOpenIndex]);

  return (
    <section className="w-full bg-[#F4F3F1] py-unit-20 md:py-unit-24 border-t border-black/[0.06]" aria-labelledby="legal-title">
      <div className="max-w-[1280px] mx-auto px-gutter-mobile md:px-gutter-desktop">
        <div className="max-w-3xl mb-unit-12">
          <div className="flex items-center gap-2 mb-unit-3">
            <span className="section-dot w-2 h-2 bg-[#FFB800] rounded-none" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-500 font-semibold">
              {t('legal.sectionLabel')}
            </span>
          </div>
          <h2 id="legal-title" className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight font-bold">
            {t('legal.title')}
          </h2>
        </div>

        <div className="w-full space-y-unit-4">
          {blocks.map((block, index) => {
            const isOpen = openIndex === index;
            const buttonId = `legal-btn-${block.id}`;
            const panelId = `legal-panel-${block.id}`;

            return (
              <div
                key={block.id}
                id={block.id}
                className={`faq-item bg-white p-unit-8 rounded-2xl border border-neutral-300/70 shadow-sm scroll-mt-32 transition-all duration-200 hover:border-[#FFB800]/60 ${isOpen ? 'is-open' : ''}`}
              >
                <h3>
                  <button
                    id={buttonId}
                    className="w-full flex items-center justify-between text-left gap-unit-4 font-headline-sm text-xl font-bold text-primary"
                    onClick={() => toggle(index)}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{t(block.titleKey)}</span>
                    <PlusToggle open={isOpen} className="shrink-0" />
                  </button>
                </h3>
                <div className="faq-answer-container">
                  <div className="overflow-hidden">
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      className="mt-unit-6 pt-unit-6 border-t border-neutral-200"
                    >
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
