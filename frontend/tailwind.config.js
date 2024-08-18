/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
      animation: {
        'marquee-scroll': 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [],
};
