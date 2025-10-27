/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // example, replace with Figma hex
        secondary: "#F59E0B",
        accent: "#10B981",
        // add all colors from Figma here
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Figma font
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
