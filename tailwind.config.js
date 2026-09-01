/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#111111",
          soft: "#1b1a18",
        },
        ivory: "#F3EFE8",
        stone: "#A8A39A",
        bronze: {
          DEFAULT: "#A78B68",
          light: "#c3a980",
          dark: "#8a7154",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1440px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        expandLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 1.1s ease forwards",
        expandLine: "expandLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
