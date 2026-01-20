import React, { useState, useEffect, memo } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SPRING_TRANSITION = { 
  type: "spring", 
  stiffness: 200, 
  damping: 25, 
  mass: 0.5 
};

const Navbar = memo(() => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Проверяем мобилку
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 && !isScrolled) setIsScrolled(true);
    else if (latest < 50 && isScrolled) setIsScrolled(false);
  });

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        layout
        transition={SPRING_TRANSITION}
        className={`pointer-events-auto rounded-full border flex items-center overflow-hidden backdrop-blur-xl ${
          isScrolled 
            ? "bg-white/90 border-black/10 shadow-2xl p-1.5 gap-1.5" 
            : "bg-[#F3F3F1]/80 border-black/5 shadow-sm p-2 gap-2"
        }`}
      >
        
        {/* 1. ЛОГОТИП */}
        <motion.div
          layout="position"
          transition={SPRING_TRANSITION}
          className={`flex items-center justify-center font-bold text-xs uppercase tracking-wider rounded-full whitespace-nowrap overflow-hidden ${
            // На мобилке ВСЕГДА "VT" (маленький), на десктопе меняется
            (isScrolled || isMobile)
              ? "bg-[#1A1A1A] text-white w-9 h-9" 
              : "bg-[#1A1A1A] text-white px-5 h-10" 
          }`}
        >
          <motion.span 
            key={(isScrolled || isMobile) ? "short" : "full"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {(isScrolled || isMobile) ? "VT" : "Vadim Timakin"}
          </motion.span>
        </motion.div>

        {/* 2. ССЫЛКИ (Скрыты на мобилке всегда) */}
        <AnimatePresence>
          {!isScrolled && !isMobile && (
            <motion.div
              layout
              initial={{ opacity: 0, width: 0, scale: 0.9 }}
              animate={{ opacity: 1, width: "auto", scale: 1 }}
              exit={{ opacity: 0, width: 0, scale: 0.9 }}
              transition={SPRING_TRANSITION}
              className="flex items-center overflow-hidden origin-left"
              style={{ whiteSpace: 'nowrap' }}
            >
              <div className="flex gap-1 px-2">
                {['Манифест', 'Результаты', 'Путь', 'Тарифы'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase() === 'манифест' ? 'manifesto' : item.toLowerCase() === 'результаты' ? 'results' : item.toLowerCase() === 'путь' ? 'roadmap' : 'pricing'}`} 
                    className="px-3 py-2 rounded-full text-[10px] font-bold uppercase hover:bg-white transition-colors text-black/70"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. CTA КНОПКА */}
        <motion.a 
          layout="position"
          transition={SPRING_TRANSITION}
          href="https://t.me/vsadnikwork" 
          className={`flex items-center justify-center rounded-full text-white hover:bg-black transition-colors bg-[#FF4F00] overflow-hidden relative ${
             isScrolled ? "pl-4 pr-4 h-9" : "w-10 h-10"
          }`}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {isScrolled ? (
              <motion.span
                key="text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
              >
                Подать заявку
              </motion.span>
            ) : (
              <motion.div
                key="icon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.a>

      </motion.nav>
    </div>
  );
});

export default Navbar;