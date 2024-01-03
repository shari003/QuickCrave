/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
      }
    },
  },
  plugins: [],
}