import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ShieldCheck } from 'lucide-react';
import { FADE_UP, TRANSITION } from '../lib/constants';

const Expectations = memo(() => {
  return (
    <section className="py-24 px-4 bg-white relative z-10 rounded-t-[4rem] -mt-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
           {[
             { 
               icon: <Calendar size={24} />,
               title: "6 Месяцев", 
               desc: "Средний срок до оффера с нуля. В комфортном темпе, без выгорания.",
               color: "bg-[#F3F3F1]"
             },
             { 
               icon: <Clock size={24} />,
               title: "10ч / Неделю", 
               desc: "Можно совмещать с работой или учебой. Мы оптимизируем время.",
               color: "bg-[#1A1A1A] text-white"
             },
             { 
               icon: <ShieldCheck size={24} />,
               title: "Оплата за Результат", 
               desc: "Success Fee только после выхода на работу. Я заинтересован в твоем оффере.",
               color: "bg-[#F3F3F1]"
             }
           ].map((item, i) => (
             <motion.div 
               key={i}
               {...FADE_UP}
               transition={{ ...TRANSITION, delay: i * 0.1 }}
               className={`p-10 rounded-[2.5rem] flex flex-col justify-between min-h-[250px] ${item.color}`}
             >
                <div className="w-12 h-12 rounded-full border border-current opacity-20 flex items-center justify-center mb-6">
                   {item.icon}
                </div>
                <div>
                   <h3 className="text-4xl font-bold mb-3">{item.title}</h3>
                   <p className="opacity-60 text-lg leading-relaxed">{item.desc}</p>
                </div>
             </motion.div>
           ))}

        </div>
      </div>
    </section>
  );
});

export default Expectations;