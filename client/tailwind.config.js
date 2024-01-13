/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      screens: {
        'cust-break': '1150px', // Define your custom breakpoint
        'tab-break': '900px', // Define your custom breakpoint
      },
    },
  },
  plugins: [],
};
