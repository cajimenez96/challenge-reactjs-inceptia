/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors: {
      'bg-light': 'var(--bg-light)',
      'bg-blue': 'var(--bg-blue)',
      'bg-dark': 'var(--bg-dark)',
      'bg-white': 'var(--bg-white)',
      'font-light': 'var(--font-light)',
      'font-dark': 'var(--font-dark)',
      'font-white': 'var(--font-white)',
      'border-primary': 'var(--border-primary)',
      'border-secondary': 'var(--bg-blue)',
      'transparent': 'transparent',
      'hover': 'var(--bg-terciary-hover)'
    },
    extend: {},
  },
  plugins: [],
}

