/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Дорогой светлый фон (Bone)
        bg: '#F2F2F0',         
        // Мягкий черный (Obsidian) вместо #000
        black: '#080808',      
        surface: '#111111',
        // НОВЫЙ АКЦЕНТ: International Orange (более красный и плотный)
        // Был: #FF4F00 (вырвиглаз) -> Стало: #EB440F (инженерный)
        accent: '#EB440F',     
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontSize: {
        'display': 'clamp(3.5rem, 8vw, 7.5rem)',
      }
    },
  },
  plugins: [],
}