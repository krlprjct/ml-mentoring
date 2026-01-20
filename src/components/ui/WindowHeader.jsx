import React, { useState, useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';

const WindowHeader = ({ title, className = "" }) => {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    // Простая проверка User Agent
    if (typeof navigator !== 'undefined') {
      setIsWindows(navigator.userAgent.includes('Win'));
    }
  }, []);

  if (isWindows) {
    // WINDOWS STYLE (Кнопки справа)
    return (
      <div className={`bg-[#1E1E1E] px-4 py-2 flex items-center justify-between border-b border-white/5 ${className}`}>
        <div className="text-white/40 text-xs font-mono flex items-center gap-2">
          {title}
        </div>
        <div className="flex items-center gap-4 text-white/40">
          <Minus size={12} className="hover:text-white cursor-pointer" />
          <Square size={10} className="hover:text-white cursor-pointer" />
          <X size={12} className="hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    );
  }

  // MACOS STYLE (Кнопки слева)
  return (
    <div className={`bg-[#2D2D2D] px-4 py-3 flex items-center justify-between border-b border-black/20 ${className}`}>
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
      </div>
      <div className="text-white/30 text-xs font-mono absolute left-1/2 -translate-x-1/2">
        {title}
      </div>
      <div className="w-10"></div>
    </div>
  );
};

export default WindowHeader;