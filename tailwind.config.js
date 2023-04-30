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
      ape_dark_purple: "#271351",
      ape_dark_purple2: "#211045",
      ape_dark: "#150A2B",
      ape_blue: "#4D94FF",
      ape_yellow: "#EBC500",
      ape_red: "#D8524C",
      ape_green_dark: "#0FB494",
      ape_green_light: "#1FC09F",
      ape_white: "#ffffff",
      ape_transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
