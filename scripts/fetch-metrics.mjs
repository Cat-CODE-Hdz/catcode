import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const METRICS_PATH = resolve(__dirname, '../src/data/metrics.json');

function loadEnvLocal() {
  const envPath = resolve(__dirname, '../.env.local');
  if (!existsSync(envPath)) return;
  const content = readFileSync(envPath, 'utf-8');
  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...valueParts] = trimmed.split('=');
    if (key && !process.env[key]) {
      process.env[key] = valueParts.join('=').trim();
    }
  }
}

loadEnvLocal();

const SITE_URL = process.env.SITE_URL || 'https://cat-code-hdz.github.io/catcode/';
const API_KEY = process.env.PAGESPEED_API_KEY || '';

console.log(`[metrics] SITE_URL: ${SITE_URL}`);
console.log(`[metrics] API_KEY configured: ${API_KEY ? 'YES' : 'NO (rate limited)'}`);

async function fetchMetrics() {
  console.log(`[metrics] Fetching PageSpeed insights for ${SITE_URL}...`);

  const params = new URLSearchParams([
    ['url', SITE_URL],
    ['strategy', 'mobile'],
    ['category', 'PERFORMANCE'],
    ['category', 'SEO'],
  ]);
  if (API_KEY) params.set('key', API_KEY);

  const res = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`
  );

  if (!res.ok) {
    throw new Error(`PageSpeed API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const lighthouse = data.lighthouseResult;

  const performance = Math.round(lighthouse.categories.performance.score * 100);
  const seo = Math.round(lighthouse.categories.seo.score * 100);
  const fcp = lighthouse.audits['first-contentful-paint']?.displayValue || '—';
  const lcp = lighthouse.audits['largest-contentful-paint']?.displayValue || '—';

  const metrics = {
    performance,
    seo,
    fcp,
    lcp,
    fetchedAt: new Date().toISOString(),
    source: 'pagespeed',
  };

  console.log(`[metrics] Performance: ${performance} | SEO: ${seo} | FCP: ${fcp} | LCP: ${lcp}`);

  return metrics;
}

function getFallbackMetrics() {
  if (existsSync(METRICS_PATH)) {
    return JSON.parse(readFileSync(METRICS_PATH, 'utf-8'));
  }
  return {
    performance: 99,
    seo: 100,
    fcp: '0.4s',
    lcp: '0.8s',
    fetchedAt: new Date().toISOString(),
    source: 'static',
  };
}

async function main() {
  let metrics;
  try {
    metrics = await fetchMetrics();
  } catch (err) {
    console.warn(`[metrics] PageSpeed fetch failed, using fallback: ${err.message}`);
    metrics = getFallbackMetrics();
    metrics.source = 'fallback';
  }

  writeFileSync(METRICS_PATH, JSON.stringify(metrics, null, 2) + '\n');
  console.log(`[metrics] Saved to ${METRICS_PATH}`);
}

main();
