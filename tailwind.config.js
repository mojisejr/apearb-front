/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobileS: "375px",
      tabletS: "768px",
      tabletM: "1024px",
      labtop: "1440px",
      desktop: "1920px",
      desktopM: "2330px",
    },
    colors: {
      pepe_green1: "#20451A",
      pepe_white: "#fff",
      pepe_black: "#000",
      pepe_nothing: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
