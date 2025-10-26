/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mpf-blue': '#1b2128',
        'mpf-black': '#221313',
        'mpf-white': '#F4F4F4',
        'mpf-green': '#36645d',
      },
      fontFamily: {
        morganite: ['Morganite', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
};
