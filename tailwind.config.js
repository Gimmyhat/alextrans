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
        gray: {
          100: '#F3F4F6', // Light gray for backgrounds
          300: '#D1D5DB', // Slightly darker gray for borders
          500: '#6B7280', // Medium gray for text
          700: '#374151', // Darker gray for headings/accents
          900: '#111827', // Very dark gray/almost black
        },
      },
    },
  },
  plugins: [],
};