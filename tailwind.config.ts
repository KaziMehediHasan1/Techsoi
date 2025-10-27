import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        secondary: "var(--secondary)",
        success: {
          light: "var(--success-lightHover)",
          active: "var(--success-active)",
          dark: "var(--success-darkHover)",
        },
        danger: {
          light: "var(--dangerLightHover)",
          active: "var(--dangerActive)",
          dark: "var(--dangerDarkHover)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      lineHeight: {
        base: "var(--leading)", 
        tight: "1.2",
        loose: "1.8",
      },
    },
  },
  plugins: [],
};

export default config;
