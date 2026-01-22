import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TerminalBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [lines, setLines] = useState([]);

  // Сценарий выполнения
  useEffect(() => {
    if (isInView) {
      const script = [
        { text: "whoami", cmd: true, delay: 500 },
        { text: "vadim_timakin", cmd: false, color: "text-green-400", delay: 800 },
        { text: "python3 optimize_career.py --target=BigTech", cmd: true, delay: 1500 },
        { text: "[INFO] Analyzing background...", cmd: false, color: "text-gray-400", delay: 2800 },
        { text: "[INFO] Removing academic fluff...", cmd: false, color: "text-gray-400", delay: 3600 },
        { text: "[INFO] Building System Design skills...", cmd: false, color: "text-blue-400", delay: 4400 },
        { text: "SUCCESS: Offer Received", cmd: false, color: "text-green-500 font-bold", delay: 5400 },
        { text: "Total Comp: 405,000 RUB/mo + Equity", cmd: false, color: "text-[#FF4F00] font-bold", delay: 6000 },
      ];

      let timeouts = [];
      let accumulatedDelay = 0;

      script.forEach((line, index) => {
        accumulatedDelay += line.delay || 500; // Базовая задержка или кастомная
        
        const timeout = setTimeout(() => {
          setLines((prev) => [...prev, line]);
        }, accumulatedDelay);
        
        timeouts.push(timeout);
      });

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-32 px-4 bg-[#F5F5F7] flex justify-center -mt-10 relative z-30">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl font-mono text-sm md:text-base bg-[#1e1e1e]"
        style={{ fontFamily: "Menlo, Monaco, 'Courier New', monospace" }}
      >
        
        {/* MACOS HEADER */}
        <div className="bg-[#2D2D2D] px-4 py-3 flex items-center border-b border-black/30 relative">
          {/* Светофор */}
          <div className="flex gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#D89E24]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
          </div>
          {/* Заголовок */}
          <div className="absolute inset-0 flex items-center justify-center text-[#999] text-xs font-medium">
            vadim — -zsh — 80x24
          </div>
        </div>

        {/* TERMINAL BODY */}
        <div className="p-6 text-gray-200 min-h-[350px]">
          {lines.map((line, i) => (
            <div key={i} className="mb-2">
              {line.cmd ? (
                <div className="flex gap-2">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-blue-400 font-bold">~</span>
                  <Typewriter text={line.text} />
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={line.color || "text-gray-200"}
                >
                  {line.text}
                </motion.div>
              )}
            </div>
          ))}
          
          {/* Active Cursor Line */}
          <div className="flex gap-2">
             <span className="text-green-500 font-bold">➜</span>
             <span className="text-blue-400 font-bold">~</span>
             <motion.span 
               animate={{ opacity: [0, 1, 0] }} 
               transition={{ repeat: Infinity, duration: 0.8 }}
               className="w-2.5 h-5 bg-gray-400 block"
             />
          </div>
        </div>

      </motion.div>
    </section>
  );
};

// Компонент для эффекта печатания
const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50); // Скорость печати
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default TerminalBlock;