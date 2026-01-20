import React, { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ArrowUpRight, Star } from 'lucide-react';

const Testimonials = memo(() => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // 1. Анимация Масштаба (Окно -> Фуллскрин -> Окно)
  const scale = useTransform(scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [0.9, 1, 1, 0.9]
  );

  // 2. Анимация Скругления (Круглое -> Квадратное -> Круглое)
  const borderRadius = useTransform(scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    ["3rem", "0rem", "0rem", "3rem"]
  );

  // 3. Горизонтальный скролл контента внутри
  const x = useTransform(scrollYProgress, 
    [0.15, 0.85], 
    ["0%", "-65%"]
  );

  // 4. Прозрачность для входа/выхода
  const opacity = useTransform(scrollYProgress, 
    [0, 0.05, 0.95, 1], 
    [0.5, 1, 1, 0]
  );

  const cases = [
    {
      name: "Maks Golb",
      role: "Senior Data Scientist",
      result: "Пробил 400к+",
      desc: "Взял менторство, чтобы пробить потолок по зарплате. Лучшая роадмапа, что я видел. Вадим убрал лишнее, сфокусировал на важном. Сейчас уже общаемся как партнеры по выходу из найма.",
      color: "bg-[#1A1A1A]",
      tag: "Level Up"
    },
    {
      name: "Анонимно",
      role: "Junior ML Engineer (19 лет)",
      result: "Оффер 350к",
      desc: "Залетал с нуля в 19 лет. Жестко ботал месяц по программе, потом мок-интервью. Работу нашел на третьей неделе. Вадим помог объяснить опыт без трудовой так, что вопросов не возникло.",
      color: "bg-[#252525]",
      tag: "С нуля"
    },
    {
      name: "Алексей В.",
      role: "Backend -> ML",
      result: "x2 Зарплата",
      desc: "Перекатывался из бэкенда. Думал, будет сложно с математикой, но Вадим дал именно инженерный подход. System Design сессии — это то, что реально продает тебя на собесах в Бигтех.",
      color: "bg-[#1A1A1A]",
      tag: "Switch"
    },
    {
      name: "Telegram Channel",
      role: "@vsadnik_reviews",
      result: "Все отзывы",
      desc: "Еще десятки историй успеха, скриншоты офферов и живое общение в моем канале. Заходи, читай, проверяй.",
      color: "bg-[#FF4F00]",
      isLink: true
    }
  ];

  return (
    // Высота 400vh дает время на анимацию расширения и скролла
    <section ref={targetRef} className="relative h-[400vh] bg-[#F3F3F1]">
      
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* АНИМИРОВАННОЕ ОКНО */}
        <motion.div 
          style={{ scale, borderRadius, opacity }}
          className="relative w-full h-full md:w-[95%] md:h-[95%] bg-[#050505] text-white overflow-hidden shadow-2xl border border-white/5"
        >
          
          {/* Фон внутри карточки */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,79,0,0.1),transparent_50%)] pointer-events-none"></div>

          {/* КОНТЕНТ ВНУТРИ ОКНА */}
          <div className="h-full flex flex-col justify-center">
            
            {/* Заголовок (тоже чуть сдвигается) */}
            <div className="px-8 md:px-20 mb-12 md:mb-0">
               <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-[2px] bg-[#FF4F00]"></span>
                  <span className="text-[#FF4F00] font-bold text-xs uppercase tracking-widest">Истории Успеха</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-bold leading-none">
                 Real <span className="text-[#FF4F00]">Cases.</span>
               </h2>
            </div>

            {/* ЛЕНТА ОТЗЫВОВ */}
            <div className="flex items-center w-full overflow-hidden pl-8 md:pl-20 mt-12">
              <motion.div 
                style={{ x }} 
                className="flex gap-8 w-max"
              >
                {cases.map((item, i) => (
                  <div 
                    key={i} 
                    className={`relative w-[85vw] md:w-[600px] h-[50vh] md:h-[500px] p-10 md:p-14 rounded-[2.5rem] flex flex-col justify-between shrink-0 transition-transform hover:scale-[1.02] border border-white/5 ${item.color}`}
                  >
                     {item.isLink ? (
                       // Карточка-ссылка
                       <div className="h-full flex flex-col justify-center items-center text-center">
                          <Star size={64} className="mb-6 text-white" fill="currentColor" />
                          <h3 className="text-4xl font-bold mb-4">Читать все отзывы</h3>
                          <p className="opacity-80 text-lg mb-8 max-w-sm">Больше пруфов и историй в Telegram канале</p>
                          <a href="https://t.me/vsadnik_reviews" target="_blank" className="bg-white text-[#FF4F00] px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                             Перейти в канал
                          </a>
                       </div>
                     ) : (
                       // Карточка отзыва
                       <>
                         <div className="absolute top-10 right-10 opacity-20">
                            <Quote size={60} />
                         </div>
                         
                         <div>
                            <div className="flex gap-3 mb-6">
                               <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#FF4F00]">{item.tag}</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-bold mb-2">{item.result}</h3>
                            <p className="text-white/40 text-sm uppercase tracking-widest">{item.role}</p>
                         </div>

                         <div className="mt-8">
                            <p className="text-lg md:text-xl leading-relaxed text-white/80 font-light">
                               "{item.desc}"
                            </p>
                         </div>

                         <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF4F00] to-[#993300]"></div>
                            <div className="font-bold">{item.name}</div>
                         </div>
                       </>
                     )}
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* Индикатор скролла */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
             <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
             <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
          </div>

        </motion.div>
      </div>
    </section>
  );
});

export default Testimonials;