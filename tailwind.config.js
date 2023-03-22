/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'goldcolor': '#DCCA87',
        'bgColor': '#040404',
        'dimBlack': '#AAAAAA',
        'subscribeBg': '#0C0C0C'
      },
    },
  },
  plugins: [],
}
