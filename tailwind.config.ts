import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        bone: "#f5f0e8",
        paper: "#fffaf2",
        ember: "#c84a31",
        fern: "#33665a",
        brass: "#b58b45"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(21, 21, 21, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
