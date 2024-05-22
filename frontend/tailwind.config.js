/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    colors: {
      'light': 'var(--bg-light)',
      'blue': 'var(--bg-blue)',
      'dark': 'var(--bg-dark)',
      'white': 'var(--bg-white)',
      'transparent': 'transparent',
      //fonts
      'font-light': 'var(--font-light)',
      'font-dark': 'var(--font-dark)',
      'font-white': 'var(--font-white)',
      //border
      'primary': 'var(--border-primary)',
      'secondary': 'var(--bg-blue)',
      //others
      'hover': 'var(--hover-light)',
      'hover-dark': 'var(--hover-dark)',
      'sky-500': 'var(--bg-blue)',
      'sky-100': 'var(--bg-light)',

    },
    extend: {},
  },
  plugins: [],
}

