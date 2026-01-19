import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';

const GlassButton = memo(({ text, href = "#", dark = false }) => (
  <a href={href} className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg z-20 ${
    dark ? 'bg-white text-black hover:bg-[#E5E5E5]' : 'bg-[#1A1A1A] text-white hover:bg-[#FF4F00]'
  }`}>
    {text}
    <ArrowRight size={16} />
  </a>
));

export default GlassButton;