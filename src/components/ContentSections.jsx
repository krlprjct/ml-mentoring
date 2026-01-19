import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, ArrowRight, Plus, Minus, Check, Users, BookOpen, MessageCircle } from 'lucide-react';
import GlassButton from './ui/GlassButton';
import { TRANSITION, FADE_UP } from '../lib/constants';

// --- MANIFESTO (Обо мне + Структура) ---
export const Manifesto = memo(() => (
  <section id="manifesto" className="py-32 px-4 md:px-8 max-w-[1200px] mx-auto content-visibility-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      <motion.div {...FADE_UP} transition={TRANSITION} className="md:col-span-4">
        <span className="text-[#FF4F00] font-bold text-xs uppercase tracking-widest">01 // Профиль</span>
        <h2 className="text-4xl font-serif mt-4 mb-6">Senior ML <br/> в 21 год.</h2>
        
        {/* Карточка регалий */}
        <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm space-y-4">
           <div>
              <div className="text-xs text-black/40 uppercase tracking-widest font-bold">Опыт</div>
              <div className="font-bold text-lg">6+ лет (Qlan, Точка, Альфа)</div>
           </div>
           <div>
              <div className="text-xs text-black/40 uppercase tracking-widest font-bold">Награды</div>
              <div className="font-bold text-lg">ODS Awards Winner '21</div>
           </div>
           <div>
              <div className="text-xs text-black/40 uppercase tracking-widest font-bold">Kaggle</div>
              <div className="font-bold text-lg">Competitions Master</div>
           </div>
        </div>
      </motion.div>

      <div className="md:col-span-8">
        <motion.p {...FADE_UP} transition={TRANSITION} className="text-2xl md:text-3xl font-light leading-tight text-black mb-8">
          Я не просто учу кодить. Я готовлю <span className="font-medium">инженерную элиту</span>.
          <br/> <span className="text-black/40">Моя задача — помочь тебе стать лучшим в лучшем направлении.</span>
        </motion.p>
        
        <div className="h-[1px] w-full bg-black/10 my-8"></div>
        
        <motion.p {...FADE_UP} transition={{ ...TRANSITION, delay: 0.2 }} className="text-lg text-black/60 leading-relaxed max-w-3xl mb-12">
          Я прошел путь от школьника, решающего Kaggle, до Lead позиций в Бигтехе. 
          Я знаю все шорткаты. Мое менторство — это не курс в записи. Это экосистема:
        </motion.p>

        {/* 4 Столпа (из картинки "Структура") */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             { title: "Роадмап", desc: "Адаптивная программа. Теория, практика, мок-собесы.", icon: <Zap size={20} /> },
             { title: "Канал & Гайды", desc: "Авторские материалы, размышления, рынок труда.", icon: <BookOpen size={20} /> },
             { title: "Личное Менторство", desc: "Я на связи. Отвечаю на вопросы, поддерживаю, валидирую.", icon: <Star size={20} /> },
             { title: "Сообщество", desc: "Закрытый клуб. Еженедельные созвоны, база знаний, нетворк.", icon: <Users size={20} /> },
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 * i }}
               className="p-6 bg-white rounded-3xl border border-black/5 hover:border-[#FF4F00]/30 transition-colors"
             >
                <div className="w-10 h-10 rounded-full bg-[#F3F3F1] flex items-center justify-center text-[#FF4F00] mb-4">
                   {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-black/50">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  </section>
));

// --- RESULTS (Обновленные цифры) ---
export const Results = memo(() => (
  <section id="results" className="py-48 px-4 bg-white rounded-t-[4rem] relative z-20 -mt-10 shadow-[0_-50px_100px_rgba(0,0,0,0.02)] content-visibility-auto">
    <div className="max-w-[1400px] mx-auto">
       <div className="mb-24 px-4 relative">
          <motion.h2 
            {...FADE_UP} 
            transition={TRANSITION} 
            className="text-[clamp(4rem,12vw,9rem)] font-bold leading-[0.8] text-[#F3F3F1] absolute -top-20 left-0 -z-10 select-none"
          >
            Результаты
          </motion.h2>
          
          <motion.div {...FADE_UP} transition={TRANSITION}>
             <span className="text-[#FF4F00] font-bold text-xs uppercase tracking-widest block mb-4">Статистика</span>
             <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-none text-black">
               Твердые <br/> <span className="text-black/30">Факты.</span>
             </h2>
          </motion.div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Рекорд */}
          <motion.div {...FADE_UP} transition={TRANSITION} className="bg-[#F3F3F1] rounded-[3rem] p-12 min-h-[400px] relative overflow-hidden group hover:bg-[#EAEAEA] transition-colors">
             <div className="relative z-10">
                <span className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase">Скорость</span>
                <div className="text-[10rem] font-extrabold leading-none tracking-tighter text-black mt-8">1.5</div>
                <div className="text-2xl font-medium mt-4">Месяца до оффера</div>
                <p className="text-black/40 mt-2 text-sm uppercase tracking-widest">Рекорд с нуля</p>
             </div>
             <Zap className="absolute right-8 bottom-8 text-black/5 w-64 h-64" />
          </motion.div>

          <div className="flex flex-col gap-8">
             {/* Офферы */}
             <motion.div {...FADE_UP} transition={{ ...TRANSITION, delay: 0.2 }} className="bg-black text-white rounded-[3rem] p-12 flex-1 relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                   <div className="flex justify-between items-end mb-4">
                      <div>
                        <div className="text-5xl md:text-7xl font-bold">405к</div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Средний оффер</div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#FF4F00]">650к</div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Максимальный</div>
                      </div>
                   </div>
                   <div className="h-[1px] bg-white/20 w-full mb-4"></div>
                   <div className="flex gap-2 flex-wrap">
                      {['300к мин.', 'РФ / Удаленка', 'Валюта'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white/70">{tag}</span>
                      ))}
                   </div>
                </div>
             </motion.div>
             
             {/* Грейд */}
             <motion.div {...FADE_UP} transition={{ ...TRANSITION, delay: 0.3 }} className="bg-[#FF4F00] text-white rounded-[3rem] p-12 flex-1 relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                   <div className="text-4xl font-bold mb-2">Senior Grade</div>
                   <div className="opacity-80 text-sm font-bold uppercase tracking-widest mb-6">Цель обучения</div>
                   <p className="text-sm text-white/80 max-w-sm">
                      Мы целимся не в стажировки за 50к, а в полноценные позиции. 18 лет — минимальный возраст трудоустройства.
                   </p>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  </section>
));

// --- FAQ COMPONENT (Новый) ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl md:text-2xl font-medium group-hover:text-[#FF4F00] transition-colors pr-8">{question}</span>
        <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all ${isOpen ? 'bg-[#FF4F00] border-[#FF4F00] text-white rotate-45' : 'bg-white text-black'}`}>
           <Plus size={16} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-lg text-black/60 pb-8 leading-relaxed max-w-3xl whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = memo(() => (
  <section className="py-32 pb-48 px-4 bg-[#F3F3F1]">
    <div className="max-w-[1000px] mx-auto">
       <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-8 block">Q&A</span>
       <h2 className="text-5xl font-bold mb-16">Частые вопросы</h2>
       
       <div>
          <FaqItem 
            question="Сколько времени занимает обучение?" 
            answer={`Все зависит от бэкграунда.\n\n— Первая работа: ~6 месяцев до оффера 400к+.\n— Апгрейд (для опытных): от нескольких недель.\n\nЯ не учу «вайбкодингу». Мы идем в комфортном, но эффективном темпе. Можно совмещать с фулл-тайм работой.`} 
          />
          <FaqItem 
            question="Нужен ли опыт в IT?" 
            answer={`Нет. Я помогаю изучить все с полного нуля (Python, Математика, База).\n\nНо я провожу отбор. Мне важна мотивация и умение учиться, а не диплом. Если готов пахать — результат будет.`} 
          />
          <FaqItem 
            question="Почему именно ML, а не Web/QA?" 
            answer={`ML — это социальный лифт. Высокие зарплаты, интересные задачи, дефицит кадров.\n\nМногие разработчики перекатываются в ML ради задач и денег. Сложность ML часто преувеличена. Это не магия, это инженерия.`} 
          />
          <FaqItem 
            question="Чем ты лучше курсов?" 
            answer={`1. Оплата за результат. Я получаю основные деньги ТОЛЬКО когда ты получил оффер.\n2. Актуальность. Курсы учат устаревшему. Я даю то, что спрашивают в BigTech прямо сейчас.\n3. Личный контакт. Никаких джуниор-кураторов. Только я и мои напарники-сеньоры.`} 
          />
          <FaqItem 
            question="Ты менторишь лично?" 
            answer={`Да. Я составляю роадмап, стратегию, валидирую резюме и отвечаю на вопросы.\n\nУ меня есть напарники (тоже опытные инженеры), которые помогают с мок-собеседованиями, чтобы ты получил максимум практики. Никаких «кураторов-выпускников».`} 
          />
       </div>
    </div>
  </section>
));

// --- PRICING (Обновленные цены) ---
export const Pricing = memo(() => (
  <section id="pricing" className="py-32 px-4 bg-white rounded-t-[4rem] relative z-20 -mt-40 shadow-[0_-50px_100px_rgba(0,0,0,0.02)] content-visibility-auto">
    <div className="max-w-[1400px] mx-auto text-center">
       <h2 className="text-[12vw] font-bold text-[#F3F3F1] select-none leading-none mb-[-3vw]">ТАРИФЫ</h2>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-4 md:px-12">
          
          {/* TIER 1 */}
          <div className="bg-[#F3F3F1] p-10 rounded-[3rem] text-left hover:scale-[1.02] transition-transform flex flex-col">
             <span className="text-xs font-bold uppercase tracking-widest opacity-50 block mb-6">С нуля</span>
             <h3 className="text-3xl font-bold mb-2">Start Career</h3>
             <p className="text-sm opacity-60 mb-8 h-10">Сопровождение до первой работы в ML</p>
             
             <div className="mt-auto">
               <div className="text-3xl font-bold mb-1">60,000 ₽</div>
               <div className="text-xs font-bold uppercase text-[#FF4F00] mb-1">+ 50% от 3 зарплат</div>
               <div className="text-[10px] opacity-50 mb-8">или 30к + 50% от 4 зарплат</div>
               <GlassButton text="Выбрать" href="https://t.me/vsadnikwork" dark />
             </div>
          </div>

          {/* TIER 2 */}
          <div className="bg-[#1A1A1A] text-white p-10 rounded-[3rem] text-left transform md:-translate-y-12 shadow-2xl relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 p-6 opacity-20"><Star size={80} /></div>
             <span className="text-xs font-bold uppercase tracking-widest text-[#FF4F00] block mb-6">Рекомендуем</span>
             <h3 className="text-3xl font-bold mb-2">Level Up</h3>
             <p className="text-sm opacity-60 mb-8 h-10">Апгрейд для Middle+ (новая работа)</p>
             
             <div className="mt-auto">
               <div className="text-3xl font-bold mb-1">60,000 ₽</div>
               <div className="text-xs font-bold uppercase text-[#FF4F00] mb-8">+ 40% от 3 зарплат</div>
               
               <ul className="space-y-2 mb-8 text-sm opacity-80">
                  <li className="flex gap-2"><Check size={16} className="text-[#FF4F00]"/> System Design</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#FF4F00]"/> Выход в BigTech</li>
               </ul>

               <button className="w-full py-4 rounded-full bg-[#FF4F00] text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Подать заявку</button>
             </div>
          </div>

          {/* TIER 3 */}
          <div className="bg-[#F3F3F1] p-10 rounded-[3rem] text-left hover:scale-[1.02] transition-transform flex flex-col">
             <span className="text-xs font-bold uppercase tracking-widest opacity-50 block mb-6">Разово</span>
             <h3 className="text-3xl font-bold mb-2">Consulting</h3>
             <p className="text-sm opacity-60 mb-8 h-10">Точечный разбор кейса / Mock-интервью</p>
             
             <div className="mt-auto">
               <div className="text-3xl font-bold mb-1">20,000 ₽</div>
               <div className="text-xs font-bold uppercase opacity-50 mb-8">за 1.5 часа</div>
               <GlassButton text="Забронировать" href="https://t.me/vsadnikwork" dark />
             </div>
          </div>
       </div>
       
       <p className="text-xs text-black/30 mt-12 max-w-2xl mx-auto">
          * Возможна оплата по СБП. Для иностранных граждан / валютных удаленок +20к к предоплате.
          <br/>Договор-оферта. ИП Тимакин В.В.
       </p>
    </div>
  </section>
));

export const Footer = memo(() => (
   <footer className="py-20 bg-white border-t border-black/5 relative z-20 content-visibility-auto">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-[#F3F3F1] text-[10px] font-bold uppercase tracking-widest text-black/50 mb-2">
                © 2026 Vadim Timakin
            </div>
            <div className="text-[10px] text-black/30 ml-1">
               ИНН 583522793753
            </div>
         </div>
         
         <div className="flex gap-4">
            {['Манифест', 'Результаты', 'Путь', 'Тарифы'].map((item, i) => (
              <a 
                key={i} 
                href={`#${item.toLowerCase() === 'манифест' ? 'manifesto' : item.toLowerCase() === 'результаты' ? 'results' : item.toLowerCase() === 'путь' ? 'roadmap' : 'pricing'}`} 
                className="text-xs font-bold uppercase hover:text-[#FF4F00] transition-colors"
              >
                {item}
              </a>
            ))}
         </div>

         <div className="flex gap-2">
            <a href="https://vadimtimakin.github.io" target="_blank" className="w-10 h-10 rounded-full bg-[#F3F3F1] flex items-center justify-center hover:bg-black hover:text-white transition-colors">
               <BookOpen size={16} />
            </a>
            <a href="https://t.me/vsadnikwork" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#FF4F00] transition-colors">
               Telegram <ArrowRight size={14} />
            </a>
         </div>
      </div>
   </footer>
));