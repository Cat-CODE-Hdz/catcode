import { TopBar } from './components/layout/TopBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { HowItWorks } from './components/sections/HowItWorks';
import { WhatIncludes } from './components/sections/WhatIncludes';
import { Pricing } from './components/sections/Pricing';
import { Portfolio } from './components/sections/Portfolio';
import { WhyCatCode } from './components/sections/WhyCatCode';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="w-full pt-28 bg-surface-container-lowest">
        <div className="flex flex-col w-full">
          <Hero />
          <Problem />
          <Solution />
          <HowItWorks />
          <WhatIncludes />
          <Pricing />
          <Portfolio />
          <WhyCatCode />
          <FAQ />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
