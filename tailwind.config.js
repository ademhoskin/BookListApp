/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}", "./index.html"],
  purge: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        helve: ['"Helvetica Neue"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
