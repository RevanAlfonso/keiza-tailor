import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Portfolio } from './components/sections/Portfolio';
import { HowToOrder } from './components/sections/HowToOrder';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';
import { FloatingWhatsApp } from './components/features/FloatingWhatsApp';
import { BackToTop } from './components/features/BackToTop';
import { SEO } from './components/SEO';

function App() {
  return (
    <>
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <HowToOrder />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}

export default App;
