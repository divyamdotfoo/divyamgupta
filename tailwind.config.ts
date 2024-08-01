import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-md": { max: "768px" },
        "max-lg": { max: "1024px" },
      },
      colors: {
        background: "var(--background)",
        color: "var(--color)",
        accentBackground: "var(--accent-background)",
      },
      animation: {
        reveal: "reveal 1s forwards cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        reveal: {
          to: {
            "clip-path": "inset(0 0 0 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
