/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": "'Work Sans'",
        "playfair-display": "'Playfair Display'",
      },
      colors: {
        colors: {
        primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d","950":"#052e16"}
      },
        white: "#fff",
        gray: {
          100: "#131313",
          200: "rgba(19, 19, 19, 0.05)",
          300: "rgba(19, 19, 19, 0.8)",
          400: "rgba(19, 19, 19, 0.15)",
          500: "rgba(19, 19, 19, 0.7)",
        },
        limegreen: {
          100: "#3dd924",
          200: "#23be0a",
          300: "rgba(61, 217, 36, 0.09)",
          400: "rgba(61, 217, 36, 0.05)",
          500: "rgba(35, 190, 10, 0.05)",
        },
        whitesmoke: "#f3f3f3",
        mediumturquoise: "#59c6d2",
        darkcyan: "#26949e",
        orange: {
          "100": "#ffac33",
          "200": "rgba(255, 172, 51, 0.15)",
        },
        chocolate: "rgba(204, 122, 0, 0.15)",
        dodgerblue: {
          "100": "#328eff",
          "200": "rgba(50, 142, 255, 0.15)",
        },
        cornflowerblue: "rgba(77, 168, 255, 0.15)",
        darkslategray: "rgba(71, 71, 71, 0.09)",
        mediumturquoise: "#59c6d2",
      },
      fontSize: {
        base: "16px",
        "5xl": "24px",
        lgi: "19px",
        xl: "20px",
        "37xl": "56px",
        "15xl": "34px",
        "26xl": "45px",
        lg: "18px",
        "9xl": "28px",
        inherit: "inherit",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
  },
  plugins: [require("daisyui")],
};
