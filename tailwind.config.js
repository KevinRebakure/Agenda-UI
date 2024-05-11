/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainBlue: "#387ADF",
      darkBlue: "#333A73",
      lightBlue: "#50C4ED",
      lightBlue1: "#e3f2fd",
      mainwhite: "#f6feff",
      "orange-50": "rgb(255 247 237)",
      iconred: "#ffccd5",
      iconblue: "#caf0f8",
      icongreen: "#c7f9cc",
      iconblack: "#4a4e69",
      iconbrown: "#ffedd8",
      iconpink: "#ffcad4",
      iconpurple: "#c8b6ff",
      calculatorbg: "#fffce6",
      maroon: "#7d1424",
    },
    extend: {
      spacing: {
        0.1: "0.125rem",
      },
      borderWidth: {
        bottom: "0.0625rem",
      },
      width: {
        pixel4aWidth: "23rem",
      },
      height: {
        pixel4aHeight: "37rem",
      },
    },
  },
  plugins: [],
};
