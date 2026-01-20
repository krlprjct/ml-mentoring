import React, { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react'; // Добавь ArrowRight в импорт
import ScrambleText from './ui/ScrambleText'; // ИМПОРТ
import MagneticButton from './ui/MagneticButton'; // ИМПОРТ
import { TRANSITION, FADE_UP } from '../lib/constants';

const Hero = memo(() => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, -60]); 
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section className="min-h-screen relative pt-44 pb-20 px-4 flex flex-col items-center bg-[#F3F3F1] overflow-hidden content-visibility-auto">
      
      {/* 1. ТЕКСТ */}
      <div className="text-center z-10 relative mb-12 max-w-4xl mx-auto mt-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-extrabold tracking-tight leading-[0.9] text-black">
                {/* ЭФФЕКТ ШИФРА */}
                <ScrambleText text="Architect" /> <br />
                <span className="font-serif italic font-medium text-black/70">Your Career</span>
            </h1>
        </motion.div>
        
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
          className="flex justify-center"
        >
           {/* МАГНИТНАЯ КНОПКА */}
           <MagneticButton>
                <a href="https://t.me/vsadnikwork" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#1A1A1A] text-white font-bold text-sm tracking-wide shadow-2xl hover:bg-[#FF4F00] transition-colors">
                    Start Journey <ArrowRight size={16} />
                </a>
           </MagneticButton>
        </motion.div>
      </div>

      {/* 2. СЦЕНА (Осталась без изменений, она уже топ) */}
      <div className="relative w-full max-w-[900px] h-[550px] mt-8 hidden md:block perspective-[1000px] transform-gpu">
         {/* ... тот же код с графиком ... */}
         {/* ЕСЛИ НУЖНО, Я МОГУ ПРОДУБЛИРОВАТЬ КОД СЦЕНЫ, НО ОН ТАКОЙ ЖЕ */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[400px] h-[500px] bg-white rounded-[3rem] shadow-2xl z-10 border border-white/60 overflow-hidden will-change-transform"
        >
           <div className="w-full h-full bg-[#FAFAFA] relative p-8 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-[10px] font-mono text-black/30">TRAINING_MODEL_V2</div>
              </div>
              <div className="flex-1 relative border-l border-b border-black/5">
                 <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path d="M0,300 C50,250 100,100 150,80 C200,60 250,150 350,20" fill="none" stroke="#FF4F00" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }} />
                    <motion.path d="M0,300 C50,250 100,100 150,80 C200,60 250,150 350,20 L350,350 L0,350 Z" fill="url(#gradient)" opacity="0.2" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ duration: 2, delay: 0.5 }} />
                    <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#FF4F00" /><stop offset="100%" stopColor="white" stopOpacity="0" /></linearGradient></defs>
                 </svg>
              </div>
           </div>
        </motion.div>

        <motion.div style={{ y: y1 }} initial={{ opacity: 0, x: -50, rotate: -6 }} animate={{ opacity: 1, x: 0, rotate: -3 }} transition={{ duration: 1, delay: 0.2 }} className="absolute left-0 top-32 w-[300px] bg-[#1A1A1A] text-white p-8 rounded-[2.5rem] shadow-xl z-20 will-change-transform hover:rotate-0 transition-transform duration-500 hover:scale-105">
           <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF4F00] mb-6">Средний Оффер</div>
           <div className="text-6xl font-sans font-extrabold mb-2 tracking-tighter">405к</div>
           <div className="text-xs opacity-60 font-medium uppercase tracking-wide">Net / Месяц</div>
        </motion.div>

        <motion.div style={{ y: y2 }} initial={{ opacity: 0, x: 50, rotate: 6 }} animate={{ opacity: 1, x: 0, rotate: 3 }} transition={{ duration: 1, delay: 0.3 }} className="absolute right-0 top-20 w-[300px] bg-white p-8 rounded-[2.5rem] shadow-xl z-20 border border-black/5 will-change-transform hover:rotate-0 transition-transform duration-500 hover:scale-105">
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