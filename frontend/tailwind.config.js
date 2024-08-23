/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        brioni: ['Brioni Text Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans'],
      },
      colors: {
        primary: {
          100: '#f1fafe',
          200: '#d3eefb',
          300: '#bde6f9',
          400: '#9fdaf6',
          500: '#8dd3f5',
          600: '#70c8f2',
          700: '#66b6dc',
          800: '#508eac',
          900: '#3e6e85',
          950: '#2f5466',
        },
        black: '#1c1c1c',
      },
    },
  },
  plugins: [],
};
