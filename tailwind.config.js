/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{js,jsx,ts,tsx}"],
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
        "light-white": "#b2b9eb",
        "white-gray": "#959595",
        "dark-gray": "#4d4d4d",
        "sky-blue": "#00b5d8",
        "dark-blue": "#03045e",
        "light-blue": "#ddf9ff",
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
