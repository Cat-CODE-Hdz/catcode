import { lazy, Suspense } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';

const Problem = lazy(() => import('./components/sections/Problem').then(m => ({ default: m.Problem })));
const Solution = lazy(() => import('./components/sections/Solution').then(m => ({ default: m.Solution })));
const HowItWorks = lazy(() => import('./components/sections/HowItWorks').then(m => ({ default: m.HowItWorks })));
const WhatIncludes = lazy(() => import('./components/sections/WhatIncludes').then(m => ({ default: m.WhatIncludes })));
const Pricing = lazy(() => import('./components/sections/Pricing').then(m => ({ default: m.Pricing })));
const Portfolio = lazy(() => import('./components/sections/Portfolio').then(m => ({ default: m.Portfolio })));
const WhyCatCode = lazy(() => import('./components/sections/WhyCatCode').then(m => ({ default: m.WhyCatCode })));
const FAQ = lazy(() => import('./components/sections/FAQ').then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import('./components/sections/CTA').then(m => ({ default: m.CTA })));

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="w-full pt-28 bg-surface-container-lowest">
        <div className="flex flex-col w-full">
          <Hero />
          <Suspense fallback={null}>
            <Problem />
            <Solution />
            <HowItWorks />
            <WhatIncludes />
            <Pricing />
            <Portfolio />
            <WhyCatCode />
            <FAQ />
            <CTA />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
