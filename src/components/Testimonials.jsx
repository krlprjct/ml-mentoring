import React, { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

const Testimonials = memo(() => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Анимация: Окно -> Фулл -> Окно
  // 0-15%: Расширяется
  // 85-100%: Сужается обратно
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ["3rem", "0rem", "0rem", "3rem"]);

  // Скролл контента
  const x = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "-75%"]);

  const cases = [
    {
      name: "Maks Golb",
      role: "Senior Data Scientist",
      result: "Пробил 400к+",
      desc: "Взял менторство, чтобы пробить потолок по зарплате. Вадим убрал лишнее, сфокусировал на важном. Сейчас уже общаемся как партнеры.",
      bg: "bg-[#111]",
      tag: "Level Up"
    },
    {
      name: "Анонимно",
      role: "Junior ML (19 лет)",
      result: "Оффер 350к",
      desc: "Залетал с нуля в 19 лет. Жестко ботал месяц по программе. Работу нашел на третьей неделе. Вадим помог объяснить опыт без трудовой.",
      bg: "bg-[#111]",
      tag: "С нуля"
    },
    {
      name: "Алексей В.",
      role: "Backend -> ML",
      result: "x2 Зарплата",
      desc: "Думал, будет сложно с математикой, но Вадим дал инженерный подход. System Design сессии — это то, что реально продает тебя в Бигтех.",
      bg: "bg-[#111]",
      tag: "Switch"
    },
    {
      isLink: true,
      link: "https://t.me/vsadnik_reviews"
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#F3F3F1]">
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Анимированное окно */}
        <motion.div 
          style={{ scale, borderRadius }}
          className="relative w-full h-full bg-[#050505] text-white overflow-hidden shadow-2xl z-10"
        >
          <div className="h-full flex flex-col justify-center">
            
            <div className="px-6 md:px-20 mb-8 md:mb-0 shrink-0">
               <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-[2px] bg-[#FF4F00]"></span>
                  <span className="text-[#FF4F00] font-bold text-xs uppercase tracking-widest">Отзывы</span>
               </div>
               <h2 className="text-5xl md:text-8xl font-bold leading-none">
                 Real <span className="text-[#FF4F00]">Cases.</span>
               </h2>
            </div>

            <div className="w-full pl-6 md:pl-20 mt-12 overflow-visible">
              <motion.div style={{ x }} className="flex gap-6 w-max">
                {cases.map((item, i) => (
                  <div 
                    key={i} 
                    className={`relative w-[85vw] md:w-[600px] h-[50vh] md:h-[500px] p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between shrink-0 transition-transform hover:scale-[1.01] border border-white/10 ${item.isLink ? 'bg-[#FF4F00]' : item.bg}`}
                  >
                     {item.isLink ? (
                       <a href={item.link} target="_blank" className="h-full flex flex-col justify-center items-center text-center cursor-pointer">
                          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#FF4F00] mb-6">
                             <ArrowRight size={40} />
                          </div>
                          <h3 className="text-4xl font-bold mb-4">Читать все <br/> отзывы</h3>
                          <p className="opacity-90 text-lg">Перейти в Telegram канал</p>
                       </a>
                     ) : (
                       <>
                         <Quote className="absolute top-10 right-10 text-white/10" size={60} />
                         <div>
                            <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-6 bg-white/5">
                               {item.tag}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold mb-2">{item.result}</h3>
                            <p className="text-white/40 text-sm uppercase tracking-widest">{item.role}</p>
                         </div>
                         <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light mt-4">
                            "{item.desc}"
                         </p>
                         <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF4F00] to-[#555]"></div>
                            <div className="font-bold">{item.name}</div>
                         </div>
                       </>
                     )}
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Testimonials;