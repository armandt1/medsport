import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        med: {
          ink: "#081521",
          navy: "#0D2233",
          blue: "#2F6BFF",
          aqua: "#35D4E6",
          sky: "#DDEEFF",
          ice: "#EEF7FA",
          cloud: "#F5F8FA"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(8,21,33,.12)",
        blue: "0 22px 70px rgba(47,107,255,.22)"
      }
    }
  },
  plugins: []
};

export default config;
