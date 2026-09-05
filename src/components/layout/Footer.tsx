import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const footerNavLinks = [
    { label: t('footer.nav.whatWeDo'), href: '#solucion', path: 'que-hacemos' },
    { label: t('footer.nav.howItWorks'), href: '#como-funciona', path: 'como-funciona' },
    { label: t('footer.nav.pricing'), href: '#precios', path: 'precios' },
    { label: t('footer.nav.examples'), href: '#portfolio', path: 'ejemplos' },
    { label: t('footer.nav.faq'), href: '#faq', path: 'faq' },
    { label: t('footer.nav.contact'), href: '#contacto', path: 'contacto' },
    { label: t('footer.nav.legal'), href: '#legal', path: 'legal' },
    { label: t('footer.nav.privacy'), href: '#privacidad', path: 'privacidad' },
    { label: t('footer.nav.cookies'), href: '#cookies', path: 'cookies' },
  ];

  return (
    <footer className="w-full bg-[#FAF9F7] border-t border-black/[0.08] py-unit-16">
      <div className="max-w-[1280px] mx-auto px-gutter-desktop">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-unit-8 pb-unit-12 border-b border-neutral-200">
          <div className="space-y-unit-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-black rounded-none rotate-45" />
              <span className="font-headline-sm text-xl font-bold tracking-tight text-primary">CAT CODE</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              {t('footer.description')}
            </p>
            <div className="font-mono text-neutral-400 pt-2" style={{ fontSize: '11px' }}>
              {t('footer.subtitle')}
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-unit-6 gap-y-unit-3 text-on-surface-variant font-mono text-xs">
            {footerNavLinks.map((link) => (
              <a key={link.path} className="hover:text-black transition-colors" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="pt-unit-8 flex flex-col md:flex-row items-center justify-between gap-unit-4 text-on-surface-variant font-mono text-xs">
          <p className="font-body-sm text-body-sm">{t('footer.copyright')}</p>
          <div className="flex items-center gap-2.5 bg-white px-3 py-1 rounded-full border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-black font-semibold" style={{ fontSize: '11px' }}>
              {t('footer.status')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}