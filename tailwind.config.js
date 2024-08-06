/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF9800",
        orangePeel: "#ffa202",
        gray1: "#2D2F31",
        gray2: "#2E3235",
        gray3: "#666666",
        lightGray: "#F7F9FA",
      },
    },
  },
  plugins: [],
};
