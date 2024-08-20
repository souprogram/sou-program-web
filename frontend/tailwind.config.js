/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        brioni: ['Brioni Text Pro', 'sans-serif'],
      },
      colors: {
        'primary-500': '#7fd8ff',
        'primary-600': '#70c8f2',
        'primary-700': '#60b8e2',
        black: '#1c1c1c',
      },
    },
  },
  plugins: [],
};
