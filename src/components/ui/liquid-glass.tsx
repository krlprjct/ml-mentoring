"use client";
import React from "react";
import { cn } from "../../lib/utils";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Глобальный фильтр (нужен один раз на странице)
export const GlassFilter: React.FC = () => (
  <svg style={{ display: "none" }}>
    <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
      <feTurbulence type="fractalNoise" baseFrequency="0.001 0.005" numOctaves="1" seed="17" result="turbulence" />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
      <feDisplacementMap in="SourceGraphic" in2="softMap" scale="20" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
);

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("relative overflow-hidden cursor-pointer transition-all duration-700 group", className)}
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        ...style,
      }}
    >
      {/* Слои стекла */}
      <div
        className="absolute inset-0 z-0 opacity-40 rounded-[inherit]"
        style={{
          backdropFilter: "blur(8px)",
          filter: "url(#glass-distortion)",
        }}
      />
      <div className="absolute inset-0 z-10 bg-white/40 rounded-[inherit] border border-white/50" />
      
      {/* Контент */}
      <div className="relative z-30">{children}</div>
    </div>
  );
};