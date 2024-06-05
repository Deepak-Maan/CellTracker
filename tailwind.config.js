/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xl2": "28px",
        "3xl2": "32px",
        "4xl2": "40px",
        xxl: "64px",
      },
      container: {
        center: true,
        padding: "12px",
      },
      backgroundImage: {
        landingHeader:
          "url('/src/assets/images/landingPage/LandingHeroBg.png')",
        homeHeader: "url('/src/assets/images/homePage/heroBg.webp')",
        newsBg: "url('/src/assets/images/homePage/newsletterBg.webp')",
        companies: "url('./assets/images/homePage/CompniesBg.webp')",
      },
      colors: {
        lightWhite: "#b2b9eb",
        whiteGray: "#959595",
        darkGray: "#4d4d4d",
        lightGray: "#e5e5e5",
        lightGray2: "#e6e6ef",
        skyBlue: "#00b5d8",
        darkBlue: "#03045e",
        lightBlue: "#ddf9ff",
        lightSky: "#f2f5fa",
      },

      lineHeight: {
        xs1: "26px",
        sm1: "33px",
        lg1: "38px",
        xl1: "48px",
        xxl: "64px",
      },
    },
  },
  plugins: [],
};
