/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brioni: ['Brioni Text Pro', 'sans-serif'],
      },
      colors: {
        'primary-600': '#70c8f2',
        'primary-700': '#60b8e2',
        black: '#1c1c1c',
      },
    },
  },
  plugins: [],
};
