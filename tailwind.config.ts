import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        background: "#f9fafb",
        foreground: "#111827",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["Fira Code", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
