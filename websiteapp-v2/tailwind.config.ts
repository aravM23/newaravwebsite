import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAF9F6",
          secondary: "#F0EDE8",
        },
        text: {
          primary: "#1A1715",
          secondary: "#78716C",
        },
        accent: {
          DEFAULT: "#B45309",
          light: "#D97706",
        },
        border: {
          DEFAULT: "#E7E5E0",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        // "mono" slot is now the same sans — labels are differentiated by
        // letter-spacing/size (see .font-mono in globals.css), not a 2nd family
        mono: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        heading: ["clamp(1.5rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        subheading: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.35" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
