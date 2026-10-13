import staticMetrics from '../data/metrics.json';

export interface Metrics {
  performance: number | null;
  seo: number | null;
  fcp: string;
  lcp: string;
  fetchedAt: string;
  source: 'pagespeed' | 'unavailable';
}

const metrics: Metrics = {
  performance: staticMetrics.performance ?? null,
  seo: staticMetrics.seo ?? null,
  fcp: staticMetrics.fcp,
  lcp: staticMetrics.lcp,
  fetchedAt: staticMetrics.fetchedAt,
  source: staticMetrics.source === 'pagespeed' ? 'pagespeed' : 'unavailable',
};

export function useMetrics() {
  return {
    metrics,
    isLive: metrics.source === 'pagespeed',
    isLoading: false,
    refetch: () => {},
  };
}
