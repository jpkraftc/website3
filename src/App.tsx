import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Services from '@/components/Services';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import SiteFooter from '@/components/SiteFooter';

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default App;
