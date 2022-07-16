/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2024',
        secondary: '#3375EF',
        tertiary: '#42A8F5',
      }
    },
  },
  plugins: [],
}
