/** @type {import('tailwindcss').Config} */
module.exports = {
mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  purge: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'helve': ['"Helvetica Neue"', 'sans-serif']
      }
      },
  },
  plugins: [],
}