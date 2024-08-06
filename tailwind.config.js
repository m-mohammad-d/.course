/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF9800",
        gray1: "#2D2F31",
        gray2: "#2E3235",
      },
    },
  },
  plugins: [],
};
