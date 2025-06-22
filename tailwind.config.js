/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mpf-red': '#7C0A02',
        'mpf-gold': '#C49A3D',
        'mpf-black': '#221313',
        'mpf-white': '#F4F4F4',
        'mpf-beige': '#E1CFA5',
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
