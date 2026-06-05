/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#f97316", // Orange
          secondary: "#0f172a", // Dark Blue
        },
      },
    },
  },
  plugins: [],
};
