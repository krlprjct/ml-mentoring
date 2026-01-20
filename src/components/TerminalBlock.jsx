import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Check } from 'lucide-react';
import WindowHeader from './ui/WindowHeader'; // Импортируем умную шапку

const TerminalBlock = () => {
  const [step, setStep] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setStep((prev) => (prev < 4 ? prev + 1 : prev));
      }, 1200);
      return () => clearInterval(timer);
    }
  }, [start]);

  return (
    <section className="py-24 px-4 bg-[#F3F3F1] flex justify-center -mt-10 rounded-t-[3rem] relative z-30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        onViewportEnter={() => setStart(true)}
        className="w-full max-w-4xl bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden font-mono text-sm md:text-base border border-black/10 transform transition-all hover:scale-[1.01] duration-500"
      >
        
        {/* УМНАЯ ШАПКА (Win/Mac) */}
        <WindowHeader title="career_optimization.ipynb" />

        {/* Тело терминала */}
        <div className="p-6 md:p-8 text-white/80 space-y-6">
          
          <div className="flex gap-4 opacity-100">
             <div className="text-[#27C93F] mt-1 shrink-0"><Play size={14} fill="currentColor" /></div>
             <div className="w-full">
                <div className="bg-[#2D2D2D]/50 p-4 rounded-lg border border-white/5 mb-2 relative group">
                   <span className="text-[#C678DD]">import</span> career <span className="text-[#C678DD]">as</span> success<br/>
                   <span className="text-[#C678DD]">from</span> vadim_mentorship <span className="text-[#C678DD]">import</span> Roadmap, BigTech_Offer
                </div>
             </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={step >= 1 ? { opacity: 1 } : {}}
            className="flex gap-4"
          >
             <div className="text-[#27C93F] mt-1 shrink-0"><Play size={14} fill="currentColor" /></div>
             <div className="w-full">
                <div className="bg-[#2D2D2D]/50 p-4 rounded-lg border border-white/5 mb-2">
                   <span className="text-[#7f848e]"># Start optimization</span><br/>
                   student = <span className="text-[#61AFEF]">Roadmap</span>(level=<span className="text-[#98C379]">'Zero_to_Hero'</span>)<br/>
                   offer = student.<span className="text-[#61AFEF]">get_offer</span>()
                </div>
                
                <div className="mt-4 font-mono text-xs md:text-sm pl-2 border-l-2 border-white/10 space-y-2">
                   {step >= 2 && <div className="text-white/60">[INFO] Removing academic fluff... Done.</div>}
                   {step >= 3 && <div className="text-white/60">[INFO] Mock interviews passed: 100%</div>}
                   
                   {step >= 4 && (
                     <motion.div 
                       initial={{ scale: 0.9, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ type: "spring" }}
                       className="mt-6 p-4 rounded bg-[#1A1A1A] border border-[#27C93F]/50 text-white flex items-center justify-between"
                     >
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-[#27C93F] flex items-center justify-center text-black">
                                <Check size={14} strokeWidth={4} />
                            </div>
                            <div>
                                <div className="font-bold text-[#27C93F] text-xs uppercase tracking-wider">Success</div>
                                <div className="text-sm">Offer Accepted</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-white/40 uppercase tracking-widest">Total Comp</div>
                            <div className="font-bold text-lg">405,000 RUB</div>
                        </div>
                     </motion.div>
                   )}
                </div>
             </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default TerminalBlock;