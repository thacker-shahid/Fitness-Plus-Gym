/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base palette
        base: {
          950: '#0a0a0a',
          900: '#0f0f0f',
          800: '#161616',
          700: '#1e1e1e',
          600: '#262626',
        },
        // Red accent palette
        accent: {
          DEFAULT: '#e11d2a',
          light: '#ff2d3f',
          dark: '#b91020',
          glow: '#ff4655',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Oswald"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(225, 29, 42, 0.55)',
        'glow-lg': '0 0 70px -10px rgba(225, 29, 42, 0.65)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 30px -8px rgba(225,29,42,0.5)' },
          '50%': { boxShadow: '0 0 55px -6px rgba(225,29,42,0.85)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
