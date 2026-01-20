import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import TerminalBlock from './components/TerminalBlock';
import Expectations from './components/Expectations';
import Testimonials from './components/Testimonials'; // <--- НОВОЕ
import { Manifesto, Results, Pricing, FAQ, Footer } from './components/ContentSections';

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
      <Manifesto />
      <Results />
      <Expectations />
      <Roadmap />
      <TerminalBlock />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </main>
  );
}