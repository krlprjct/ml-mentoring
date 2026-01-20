import React, { useRef, memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Roadmap = memo(() => {
  const targetRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // -90% идеально для 7 шагов
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  // Прогресс бар (0 -> 100%)
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { 
      id: "01", 
      title: "Стратегия", 
      desc: "Созвон 1-1. Разбираем бэкграунд. Адаптируем роадмап лично под тебя. Убираем лишнее.",
      tags: ["Onboarding", "Personal Plan"]
    },
    { 
      id: "02", 
      title: "Фундамент", 
      desc: "Python, Math, Statistics. База, без которой не пройти собесы. Частые вопросы и ошибки.",
      tags: ["Python", "Math"]
    },
    { 
      id: "03", 
      title: "Classic ML & DL", 
      desc: "Все библиотеки. Scikit-learn, Deep Learning, Kaggle. Базовый и продвинутый уровни.",
      tags: ["Sklearn", "PyTorch", "Kaggle"]
    },
    { 
      id: "04", 
      title: "Специализация", 
      desc: "Выбираем трек: CV, NLP, RecSys, Time Series или GenAI. Углубленное изучение.",
      tags: ["CV/NLP", "LLM", "RecSys"]
    },
    { 
      id: "05", 
      title: "Product & Eng", 
      desc: "SQL, Docker, A/B-тесты, System Design. Ты учишься решать рабочие задачи, а не только писать модели.",
      tags: ["Docker", "SQL", "SysDesign"]
    },
    { 
      id: "06", 
      title: "Подготовка", 
      desc: "Резюме под международный формат. Гайды по собесам. Мок-интервью с напарниками.",
      tags: ["Resume", "Mocks"]
    },
    { 
      id: "07", 
      title: "Оффер & Рост", 
      desc: "Отклики, торги, рефералки. Поддержка на испытательном сроке. Материалы для повышения грейда.",
      tags: ["Offer", "Support"]
    },
  ];

  return (
    <section 
        ref={targetRef} 
        id="roadmap" 
        // На десктопе 300vh (для скролла), на мобилке auto
        className="relative h-auto md:h-[300vh] bg-[#050505] transform-gpu"
    >
      
      <div className="static md:sticky md:top-0 flex h-auto md:h-screen items-center overflow-hidden py-20 md:py-0">
        
        <div className="absolute inset-0 bg-[#050505] pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,79,0,0.06),transparent_80%)]"></div>
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        </div>

        {/* МОБИЛЬНЫЙ ЗАГОЛОВОК */}
        <div className="md:hidden px-6 mb-8 w-full z-10">
           <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#FF4F00]"></span>
              <span className="text-[#FF4F00] font-bold text-xs uppercase tracking-[0.2em]">Программа</span>
           </div>
           <h2 className="text-4xl font-bold text-white leading-[0.9]">Путь <br/> Инженера.</h2>
        </div>

        {/* ЛЕНТА */}
        <motion.div 
            style={{ x: isDesktop ? x : 0 }} 
            className="flex md:gap-10 gap-4 px-6 md:pl-20 items-center w-full md:w-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide z-10"
        >
          
          {/* ДЕСКТОПНЫЙ ЗАГОЛОВОК */}
          <div className="hidden md:block min-w-[85vw] md:min-w-[35vw] pr-8 shrink-0">
             <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-[#FF4F00]"></span>
                <span className="text-[#FF4F00] font-bold text-xs uppercase tracking-[0.2em]">Программа</span>
             </div>
             <h2 className="text-[clamp(4rem,7vw,7rem)] font-bold text-white leading-[0.9] mb-6">
               Путь <br/> <span className="font-serif italic text-white/50">Инженера.</span>
             </h2>
             <p className="text-white/60 text-xl max-w-sm leading-relaxed mb-8">
               От "Hello World" до оффера в BigTech. Практика, проекты, моки.
             </p>
             <div className="flex items-center gap-3 text-white/30 text-xs font-bold uppercase tracking-widest animate-pulse">
                Scroll Down <ArrowRight size={16} className="rotate-90" />
             </div>
          </div>

          {/* КАРТОЧКИ */}
          {steps.map((step, i) => (
            <div 
                key={i} 
                className="relative min-w-[85vw] md:min-w-[35vw] h-[55vh] md:h-[60vh] flex flex-col justify-between p-10 rounded-[3rem] bg-[#111] border border-white/10 hover:border-[#FF4F00]/50 transition-colors duration-500 group shrink-0 snap-center overflow-hidden"
            >
               <span className="absolute -right-4 -bottom-10 text-[14rem] font-bold text-white/5 font-sans leading-none select-none group-hover:text-white/10 transition-colors duration-500">{step.id}</span>
               <div className="relative z-10">
                 <div className="flex flex-wrap gap-2 mb-8">
                    {step.tags.map((tag, t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-white/50 text-[10px] uppercase tracking-widest bg-white/5 group-hover:bg-[#FF4F00]/10 group-hover:text-[#FF4F00] group-hover:border-[#FF4F00]/20 transition-colors">{tag}</span>
                    ))}
                 </div>
                 <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
                 <p className="text-lg text-white/60 leading-relaxed max-w-md">{step.desc}</p>
               </div>
               <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#FF4F00] group-hover:border-[#FF4F00] transition-all duration-300 shadow-lg">
                  <ArrowRight size={24} />
               </div>
            </div>
          ))}
          
          <div className="min-w-[10vw] hidden md:block"></div>
        </motion.div>

        {/* ПРОГРЕСС БАР (Только десктоп) */}
        <div className="hidden md:block absolute bottom-10 left-20 right-20 h-[2px] bg-white/10 overflow-hidden rounded-full">
           <motion.div 
             style={{ width: progress }} 
             className="h-full bg-[#FF4F00] shadow-[0_0_10px_#FF4F00]"
           ></motion.div>
        </div>

      </div>
    </section>
  );
});

export default Roadmap;