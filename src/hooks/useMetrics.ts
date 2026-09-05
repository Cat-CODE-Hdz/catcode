import { useState, useEffect, useCallback } from 'react';
import staticMetrics from '../data/metrics.json';

interface Metrics {
  performance: number;
  seo: number;
  fcp: string;
  lcp: string;
  fetchedAt: string;
  source: 'static' | 'pagespeed' | 'fallback';
}

const isDev = import.meta.env.DEV;
const CACHE_KEY = 'catcode_metrics';
const CACHE_TTL = 60 * 60 * 1000; // 1 hora
const COOLDOWN = 5 * 60 * 1000; // 5 min entre fetches

const initialMetrics: Metrics = {
  ...staticMetrics,
  source: staticMetrics.source as Metrics['source'],
};

function log(msg: string, data?: unknown) {
  if (!isDev) return;
  const ts = new Date().toLocaleTimeString();
  if (data !== undefined) {
    console.log(`%c[${ts}] [metrics] ${msg}`, 'color: #34d399; font-weight: bold', data);
  } else {
    console.log(`%c[${ts}] [metrics] ${msg}`, 'color: #34d399; font-weight: bold');
  }
}

function logWarn(msg: string, data?: unknown) {
  if (!isDev) return;
  const ts = new Date().toLocaleTimeString();
  if (data !== undefined) {
    console.warn(`%c[${ts}] [metrics] ${msg}`, 'color: #fbbf24; font-weight: bold', data);
  } else {
    console.warn(`%c[${ts}] [metrics] ${msg}`, 'color: #fbbf24; font-weight: bold');
  }
}

function getCachedMetrics(): Metrics | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw) as Metrics;
    const age = Date.now() - new Date(cached.fetchedAt).getTime();
    if (age > CACHE_TTL) {
      log(`  Caché expirado (${Math.round(age / 60000)} min old)`);
      return null;
    }
    log(`  Caché válido (${Math.round(age / 60000)} min old)`);
    return cached;
  } catch {
    return null;
  }
}

function setCachedMetrics(metrics: Metrics) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(metrics));
  } catch {
    // localStorage lleno o no disponible
  }
}

function canFetch(): boolean {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return true;
    const cached = JSON.parse(raw) as Metrics;
    const age = Date.now() - new Date(cached.fetchedAt).getTime();
    return age > COOLDOWN;
  } catch {
    return true;
  }
}

async function fetchPageSpeedMetrics(): Promise<Metrics | null> {
  try {
    log('→ Fetching PageSpeed API...');
    const url = window.location.href;
    log(`  URL: ${url}`);

    const params = new URLSearchParams([
      ['url', url],
      ['strategy', 'mobile'],
      ['category', 'PERFORMANCE'],
      ['category', 'SEO'],
    ]);

    const res = await fetch(
      `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`
    );

    if (!res.ok) {
      logWarn(`✗ Error ${res.status} ${res.statusText}`);
      return null;
    }

    log('✓ 200 OK');
    const data = await res.json();
    const lighthouse = data.lighthouseResult;

    const metrics: Metrics = {
      performance: Math.round(lighthouse.categories.performance.score * 100),
      seo: Math.round(lighthouse.categories.seo.score * 100),
      fcp: lighthouse.audits['first-contentful-paint']?.displayValue || '—',
      lcp: lighthouse.audits['largest-contentful-paint']?.displayValue || '—',
      fetchedAt: new Date().toISOString(),
      source: 'pagespeed',
    };

    log('✓ Métricas:', metrics);
    return metrics;
  } catch (err) {
    logWarn('✗ Fetch falló:', err);
    return null;
  }
}

export function useMetrics() {
  const [metrics, setMetrics] = useState<Metrics>(initialMetrics);
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const refetch = useCallback(async (force = false) => {
    if (!force && !canFetch()) {
      log('Cooldown activo, usando caché');
      const cached = getCachedMetrics();
      if (cached) {
        setMetrics(cached);
        setIsLive(true);
      }
      return;
    }

    log('Iniciando refetch...');
    setIsLoading(true);

    const live = await fetchPageSpeedMetrics();

    if (live) {
      setMetrics(live);
      setIsLive(true);
      setCachedMetrics(live);
      log('✓ Métricas actualizadas y guardadas en caché');
    } else {
      logWarn('✗ Sin datos live, usando fallback/caché');
      const cached = getCachedMetrics();
      if (cached) {
        setMetrics(cached);
        setIsLive(true);
      }
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    log('Hook montado');
    const cached = getCachedMetrics();
    if (cached) {
      log('Usando métricas del caché:', cached);
      setMetrics(cached);
      setIsLive(true);
    } else {
      log('Sin caché, fetch inicial...');
      refetch();
    }
  }, [refetch]);

  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.on('vite:beforeUpdate', () => {
        log('◆ HMR detectado');
        if (canFetch()) {
          refetch();
        } else {
          log('Cooldown activo, skip HMR fetch');
        }
      });
    }
  }, [refetch]);

  return { metrics, isLive, isLoading, refetch: () => refetch(true) };
}
