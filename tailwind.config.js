/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        blue: {
          700: '#0B4F8C',
          800: '#083C6A',
          900: '#052B4D',
        },
      },
    },
  },
  plugins: [],
};