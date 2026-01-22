import React, { useRef, memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
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

  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);
  const smoothX = useSpring(rawX, { stiffness: 100, damping: 30, mass: 0.5 });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { 
      id: "01", 
      title: "Стратегия", 
      desc: "Созвон 1-1. Разбираем бэкграунд. Адаптируем роадмап лично под тебя.",
      tags: ["Onboarding"]
    },
    { 
      id: "02", 
      title: "Фундамент", 
      desc: "Python, Math, Stats. База, без которой не пройти собесы.",
      tags: ["Hard Skills"]
    },
    { 
      id: "03", 
      title: "Classic ML", 
      desc: "Scikit-learn, Deep Learning, Kaggle. Базовый и продвинутый уровни.",
      tags: ["ML Core"]
    },
    { 
      id: "04", 
      title: "Специализация", 
      desc: "Выбираем трек: CV, NLP, RecSys или GenAI. Углубленное изучение.",
      tags: ["Deep Dive"]
    },
    { 
      id: "05", 
      title: "Engineering", 
      desc: "SQL, Docker, System Design. Решаем рабочие задачи.",
      tags: ["Production"]
    },
    { 
      id: "06", 
      title: "Подготовка", 
      desc: "Резюме, Гайды, Мок-интервью с напарниками.",
      tags: ["Interview Prep"]
    },
    { 
      id: "07", 
      title: "Оффер", 
      desc: "Отклики, торги, рефералки. Поддержка на испытательном.",
      tags: ["Hired"]
    },
  ];

  return (
    <section ref={targetRef} id="roadmap" className="relative h-auto md:h-[300vh] bg-black transform-gpu">
      
      <div className="static md:sticky md:top-0 flex h-auto md:h-screen items-center overflow-hidden py-20 md:py-0">
        
        {/* ФОН */}
        <div className="absolute inset-0 bg-black pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,79,0,0.06),transparent_80%)]"></div>
        </div>

        <motion.div 
            style={{ x: isDesktop ? smoothX : 0 }} 
            className="flex md:gap-10 gap-4 px-6 md:pl-20 items-center w-full md:w-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide z-10 pb-8 md:pb-0"
        >
          
          {/* ЗАГОЛОВОК */}
          <div className="hidden md:block min-w-[35vw] pr-8 shrink-0">
             <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-accent"></span>
                {/* ИСПРАВЛЕНО: text-accent (чистый оранжевый) */}
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">Программа</span>
             </div>
             <h2 className="text-[clamp(4rem,7vw,7rem)] font-bold text-white leading-[0.9] mb-6">
               Путь <br/> <span className="font-serif italic text-white/50">Инженера.</span>
             </h2>
             <p className="text-white/60 text-xl max-w-sm leading-relaxed mb-8">
               От "Hello World" до оффера в BigTech. Практика, проекты, моки.
             </p>
             <div className="flex items-center gap-3 text-white/30 text-xs font-bold uppercase tracking-widest animate-pulse">
                Scroll <ArrowRight size={16} className="text-accent" />
             </div>
          </div>

          {/* КАРТОЧКИ */}
          {steps.map((step, i) => (
            <div 
                key={i} 
                className="relative w-[85vw] md:w-auto md:min-w-[35vw] h-[55vh] md:h-[60vh] flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-[#111] border border-white/10 group shrink-0 snap-center overflow-hidden transition-all duration-300
                hover:border-accent hover:shadow-[0_0_30px_rgba(255,79,0,0.15)]" // ИСПРАВЛЕНО: Solid border + Glow shadow
            >
               {/* Цифра */}
               <span className="absolute -right-4 -bottom-10 text-[8rem] md:text-[14rem] font-bold text-white/5 font-sans leading-none select-none group-hover:text-accent/10 transition-colors duration-500">
                 {step.id}
               </span>

               <div className="relative z-10">
                 <div className="flex flex-wrap gap-2 mb-8">
                    {step.tags.map((tag, t) => (
                      <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-white/50 text-[10px] uppercase tracking-widest bg-white/5 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                 </div>
                 <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{step.title}</h3>
                 <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-md">{step.desc}</p>
               </div>

               {/* Кнопка стрелки */}
               <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white mt-auto group-hover:bg-accent group-hover:border-accent transition-all duration-300 shadow-lg">
                  <ArrowRight size={24} />
               </div>
            </div>
          ))}
          
          <div className="min-w-[10vw] hidden md:block"></div>
        </motion.div>

        {/* ПРОГРЕСС БАР */}
        <div className="hidden md:block absolute bottom-10 left-20 right-20 h-[2px] bg-white/10 overflow-hidden rounded-full">
           <motion.div 
             style={{ width: progress }} 
             className="h-full bg-accent shadow-[0_0_15px_#FF4F00]"
           ></motion.div>
        </div>

      </div>
    </section>
  );
});

export default Roadmap;