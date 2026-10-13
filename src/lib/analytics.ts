type EventParams = Record<string, string | number | boolean>;

const GA_ID = String(import.meta.env.VITE_GA_MEASUREMENT_ID ?? '').trim();

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const analyticsEnabled = GA_ID.length > 0;

let started = false;

export function initAnalytics() {
  if (!analyticsEnabled || started || typeof document === 'undefined') return;
  started = true;

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag = gtag;

  // Consent Mode v2: denegado por defecto → medición sin cookies ni identificadores persistentes
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });

  gtag('js', new Date());
  gtag('config', GA_ID, {
    send_page_view: true,
    storage: 'none',
    cookie_domain: 'none',
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.id = 'ga4-script';
  document.head.appendChild(script);

  if (import.meta.env.DEV) console.debug('[analytics] GA4 iniciado (cookieless):', GA_ID);
}

export function track(event: string, params: EventParams = {}) {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', event, params);
  }
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params, ts: Date.now() });
  window.gtag?.('event', event, params);
}
