/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1330",
          50: "#eef0f7",
          100: "#d6dbec",
          200: "#adb7d9",
          300: "#8493c6",
          400: "#5b6fb3",
          500: "#3a4a94",
          600: "#2a3874",
          700: "#1c2856",
          800: "#121b3d",
          900: "#0b1330",
          950: "#070c1e",
        },
        gold: {
          DEFAULT: "#c8a24d",
          50: "#faf6ea",
          100: "#f2e7c6",
          200: "#e6d19a",
          300: "#dbbb6e",
          400: "#d1ac57",
          500: "#c8a24d",
          600: "#a9803a",
          700: "#82612d",
          800: "#5c4420",
          900: "#3a2b14",
        },
        ivory: "#faf7f0",
        blush: "#f4ece3",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'Jost'", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 19, 48, 0.25)",
        gold: "0 0 0 1px rgba(200,162,77,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: 0.55 },
          "100%": { transform: "scale(1)", opacity: 0 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        ripple: "ripple 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
