/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    colors: {
      'bg-primary': 'var(--bg-primary)',
      'bg-secondary': 'var(--bg-secondary)',
      'bg-box': 'var(--bg-box)',
      'font-primary': 'var(--font-primary)',
      'font-secondary': 'var(--font-secondary)',
      'border-primary': 'var(--border-primary)',
      'border-secondary': 'var(--bg-secondary)'
    },
    extend: {},
  },
  plugins: [],
}

