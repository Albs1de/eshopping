/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#005A7D",
        cartbg: "#F0F0F0",
        carttext: "#00425C",
        btncolor: "#36819E",
        btnprimary: "#00527E",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
