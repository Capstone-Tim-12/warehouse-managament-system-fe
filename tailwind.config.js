/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        "cloud-burst": {
          50: "#E8EBEF",
          100: "#dde9f0",
          200: "#aec7d6",
          300: "#86a7bf",
          400: "#43688f",
          500: "#17345f",
          600: "#132c54",
          700: "#0d2147",
          800: "#081738",
          900: "#05102b",
          950: "#02081c",
        },
        crusta: {
          50: "#fffbf5",
          100: "#fff8eb",
          200: "#ffeacc",
          300: "#ffd9ad",
          400: "#ffae70",
          500: "#ff7733",
          600: "#e66529",
          700: "#bf4d1d",
          800: "#993612",
          900: "#73240a",
          950: "#4a1304",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
