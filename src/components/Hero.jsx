import React, { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassButton from './ui/GlassButton';
import { TRANSITION, FADE_UP } from '../lib/constants';

const Hero = memo(() => {
  const { scrollY } = useScroll();
  
  // Параллакс:
  // Двигаем меньше пикселей (до -60px), чтобы браузеру было легче
  const y1 = useTransform(scrollY, [0, 500], [0, -60]); 
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="min-h-screen relative pt-60 pb-20 px-4 flex flex-col items-center bg-[#F3F3F1] overflow-hidden content-visibility-auto">
      
      {/* 1. ТЕКСТ */}
      <div className="text-center z-10 relative mb-12 max-w-4xl mx-auto mt-4">
        <motion.h1 
          {...FADE_UP}
          transition={{ ...TRANSITION, delay: 0.1 }}
          className="text-[clamp(3.5rem,9vw,8rem)] font-extrabold tracking-tight leading-[0.9] text-black mb-8"
        >
          Architect <br />
          <span className="font-serif italic font-medium text-black/70">Your Career</span>
        </motion.h1>
        
        <motion.p 
          {...FADE_UP}
          transition={{ ...TRANSITION, delay: 0.2 }}
          className="text-xl text-black/50 font-medium max-w-lg mx-auto leading-relaxed mb-10"
        >
          Менторство уровня Senior ML Engineer. <br/>
          Без воды. Только хардкор и офферы.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...TRANSITION, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
           <GlassButton text="Start Journey" href="https://t.me/vsadnikwork" />
        </motion.div>
      </div>

      {/* 2. СЦЕНА (ОПТИМИЗИРОВАННАЯ) */}
      <div className="relative w-full max-w-[900px] h-[600px] mt-8 hidden md:block perspective-[1000px] transform-gpu">
        
        {/* ЦЕНТР (Статичный фундамент) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            // will-change-transform - ВАЖНО, чтобы не лагало при появлении
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[380px] h-[520px] bg-white rounded-[3rem] shadow-2xl z-10 border border-white/60 overflow-hidden will-change-transform"
        >
           <div className="w-full h-full bg-gradient-to-b from-[#F9F9F9] to-[#E5E5E5] relative flex items-center justify-center">
              <div className="text-center opacity-30">
                  <div className="w-32 h-32 bg-black/5 rounded-full blur-2xl mb-4 mx-auto"></div>
                  <span className="text-sm font-bold uppercase tracking-widest border border-black/20 px-4 py-2 rounded-lg">
                    3D Object
                  </span>
              </div>
           </div>
        </motion.div>

        {/* ЛЕВАЯ КАРТОЧКА (Движется быстрее) */}
        <motion.div 
            style={{ y: y1 }}
            // КЛЮЧЕВОЙ ФИКС: will-change-transform заставляет браузер держать слой в видеокарте
            className="absolute left-0 top-32 w-[300px] bg-[#1A1A1A] text-white p-8 rounded-[2.5rem] shadow-xl z-20 will-change-transform"
        >
           <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF4F00] mb-6">Средний Оффер</div>
           <div className="text-6xl font-sans font-extrabold mb-2 tracking-tighter">405к</div>
           <div className="text-xs opacity-60 font-medium uppercase tracking-wide">Net / Месяц</div>
        </motion.div>

        {/* ПРАВАЯ КАРТОЧКА (Движется медленнее) */}
        <motion.div 
            style={{ y: y2 }}
            // КЛЮЧЕВОЙ ФИКС: will-change-transform
            className="absolute right-0 top-20 w-[300px] bg-white p-8 rounded-[2.5rem] shadow-xl z-20 border border-black/5 will-change-transform"
        >
           <div className="flex justify-between items-start mb-8">
              <span className="px-3 py-1 rounded-full bg-[#F3F3F1] text-[10px] font-bold uppercase">Top 0.1%</span>
              <Star className="fill-[#FF4F00] text-[#FF4F00]" size={24} />
           </div>
           <h3 className="text-2xl font-bold leading-none mb-2">Kaggle Master</h3>
           <p className="text-xs font-bold uppercase tracking-widest text-black/40">Global Rank</p>
        </motion.div>

      </div>
    </section>
  );
});

export default Hero;