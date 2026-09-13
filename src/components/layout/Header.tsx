import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('header.nav.whatWeDo'), href: '#solucion', path: 'que-hacemos' },
    { label: t('header.nav.howItWorks'), href: '#como-funciona', path: 'como-funciona' },
    { label: t('header.nav.pricing'), href: '#precios', path: 'precios' },
    { label: t('header.nav.examples'), href: '#portfolio', path: 'ejemplos' },
    { label: t('header.nav.faq'), href: '#faq', path: 'faq' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Saltar al contenido principal
      </a>
      <header className="fixed top-7 left-0 right-0 z-50 transition-all duration-200" role="banner">
        <div className="max-w-[1280px] mx-auto px-2 sm:px-4 md:px-gutter-desktop">
          <div className="h-14 sm:h-16 px-3 sm:px-5 rounded-2xl glass-spec border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a className="flex items-center gap-1.5 sm:gap-2.5 group" href="#" aria-label="CAT CODE - Inicio">
                <img
                  src="/icono catcode.png"
                  alt="CAT CODE"
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="font-headline-sm text-[14px] sm:text-[19px] tracking-tight font-bold text-primary flex items-center gap-2">
                  CAT CODE
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] group-hover:scale-125 transition-transform duration-200"></span>
                </span>
              </a>
              <nav className="hidden md:flex items-center gap-unit-6" aria-label="Navegación principal">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    className="font-label-md text-label-md text-on-surface-variant hover:text-black transition-colors duration-150 relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-unit-3">
              <button
                onClick={toggleLanguage}
                className="h-8 sm:h-9 px-2 sm:px-3 rounded-xl bg-neutral-100 border border-neutral-200 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:bg-neutral-200 transition-colors"
                type="button"
                aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </button>
              <a
                className="relative group inline-flex items-center justify-center h-9 sm:h-10 px-3 sm:px-unit-5 rounded-xl bg-black hover:bg-neutral-900 text-white font-label-md text-label-md tracking-normal transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.12)] active:scale-95"
                href="#contacto"
              >
                <span className="flex items-center gap-1.5 font-medium">
                  {t('header.start')} <span className="transition-transform duration-150 group-hover:translate-x-0.5 hidden sm:inline" aria-hidden="true">→</span>
                </span>
              </a>

              <button
                className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-800"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }} aria-hidden="true">
                  {mobileOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
          {mobileOpen && (
            <nav id="mobile-nav" className="md:hidden mt-2 p-4 rounded-2xl glass-spec border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)]" aria-label="Navegación móvil">
              <div className="flex flex-col gap-unit-4">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    className="font-label-md text-label-md text-on-surface-variant hover:text-black transition-colors duration-150"
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
