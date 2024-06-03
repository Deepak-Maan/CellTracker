/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl2": "32px",
        "4xl2": "40px",
        xxl: "64px",
      },
      container: {
        center: true,
        padding: "12px",
      },
      backgroundImage: {
        "header-bg": "url('./assets/images/home/webp/header-bg.webp')",
      },
      colors: {
        lightWhite: "#b2b9eb",
        whiteGray: "#959595",
        darkGray: "#4d4d4d",
        skyBlue: "#00b5d8",
        darkBlue: "#03045e",
        lightBlue: "#ddf9ff",
      },

      lineHeight: {
        xs1: "26px",
        sm1: "33px",
        lg1: "38px",
        xl1: "48px",
        xxl2: "64px",
      },
    },
  },
  plugins: [],
};
