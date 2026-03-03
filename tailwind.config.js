/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "honda-red": "#CC0000",
        "neon-blue": "#00f3ff",
        carbon: "#1a1a1a",
      },
    },
  },
  plugins: [],
};