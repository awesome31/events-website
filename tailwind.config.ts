import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)", // Warm purple-
        secondary: "var(--color-secondary)", // Soft Yellow
        accent: "var(--color-accent)", // Deep Purple
        background: "var(--color-background)", // Off-white
        text: "var(--color-text)", // Dark for readability
      },
    },
    fontFamily: {
      sans: ["var(--font-poppins)"],
    },
  },
  plugins: [],
} satisfies Config;
