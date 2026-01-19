import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import { Manifesto, Results, Pricing, FAQ, Footer } from './components/ContentSections';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Выключаем на мобиле для скорости
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
    // overflow-x-hidden ГЛОБАЛЬНО, чтобы скролл не дергался
    <main className="font-sans text-[#1A1A1A] bg-[#F3F3F1] selection:bg-[#FF4F00] selection:text-white">
      <Navbar />
      <Hero />
      <Manifesto />
      <Results />
      <Roadmap />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}