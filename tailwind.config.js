/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firasans: ["Fira Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        blackMain: "#150B2B",
        blackSecondary:"#282828",
        grayMain: "#736D80",
        graySeconday:"#F3F3F4",
        grayTertiary:"#878787",
        greenMain:"#0BE58A"
      },
    },
  },
  plugins: [require("daisyui")],
};
