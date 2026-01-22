import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import TerminalBlock from './components/TerminalBlock';
import Expectations from './components/Expectations';
import Testimonials from './components/Testimonials';
import { Manifesto, Results, Pricing, FAQ, Footer } from './components/ContentSections';

const Separator = () => <div className="w-full h-[1px] bg-black/5" />;

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main className="font-sans text-[#1A1A1A] bg-[#F3F3F1] selection:bg-[#FF4F00] selection:text-white">
      <Navbar />
      
      <Hero />
      <Separator />
      
      <Manifesto />
      {/* Убрал разделитель здесь, чтобы шло потоком */}
      
      <Results />
      
      <Expectations />
      
      <Roadmap />
      <TerminalBlock />
      <Testimonials />
      
      <FAQ />
      <Separator /> {/* Тут нужен разделитель перед ценами */}
      
      <Pricing />
      
      <Footer />
    </main>
  );
}