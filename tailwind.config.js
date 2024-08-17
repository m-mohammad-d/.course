/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: "#FF9800", // Main orange
        darkOrange: "#FB8C00", // Hover orange
        orangePeel: "#FFA202", // Accent orange

        // Secondary colors
        darkBlue: "#2D3A4A", // Dark blue
        teal: "#00796B", // Teal

        // Neutral grays
        darkGray: "#2D2F31", // Dark gray for backgrounds or containers
        mediumGray: "#3C4B57", // Medium gray for text and icons
        textGray: "#666666", // Light gray for text
        backgroundGray: "#F7F9FA", // Light gray for backgrounds

        // Accent colors
        accentYellow: "#FFC107", // Accent yellow
        deepBlue: "#0D47A1", // Deep blue for links/buttons
        softWhite: "#FAFAFA", // Soft white background
      },
    },
  },
  plugins: [],
};
