import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F9F7F2",
        tertiary: "#D1D1CF",
        accent: "#5E7A7D",
        surface: "#fbf9fb",
        "surface-container": "#efedef",
        "on-surface": "#1b1b1d",
        "on-surface-variant": "#44474d",
        outline: "#75777e",
        "outline-variant": "#c5c6cd",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        wide2: "0.04em",
        wide3: "0.08em",
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
};
export default config;