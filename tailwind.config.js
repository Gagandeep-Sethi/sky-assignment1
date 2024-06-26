/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        grace: ["Covered By Your Grace", "cursive"],
        manrope: ["Manrope", "sans-serif"],
        switzer: ["Switzer", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
