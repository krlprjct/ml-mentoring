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
        // Убрали розовый оттенок. Теперь это чистый, холодный серый.
        bg: '#F5F5F7',         
        // Глубокий черный
        black: '#050505',      
        surface: '#FFFFFF',
        // Вернули электрический оранжевый (как у Linear/Yapay)
        accent: '#FF4F00',     
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