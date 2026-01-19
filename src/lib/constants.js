// src/lib/constants.js

// Анимация появления
export const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

// Анимация для Hero (параллакс)
export const HERO_ANIM = {
  center: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8 }
  },
  left: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  },
  right: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, delay: 0.3 }
  }
};

// Общие настройки
export const TRANSITION = { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] };