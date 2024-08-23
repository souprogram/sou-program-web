/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        brioni: ['Brioni Text Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans'],
        roboto: ['Roboto', 'sans'],
        lato: ['Lato', 'sans'],
      },
      colors: {
        'primary-400': '#7cecff',
        'primary-500': '#7ee0ff',
        'primary-600': '#70c8f2',
        'primary-700': '#60b8e2',
        black: '#1c1c1c',
      },
    },
  },
  plugins: [],
};
