import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        extenda: ["var(--font-extenda)", "Arial", "sans-serif"],
        apple: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "system-ui", "sans-serif"],
        "gt-america": ["var(--font-gt-america)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: {
          DEFAULT: "#ffffff",
          subtle: "#f8f8f8",
          elevated: "#f0f0f0",
        },
        foreground: {
          DEFAULT: "#181818",
          muted: "rgba(24, 24, 24, 0.6)",
          subtle: "rgba(24, 24, 24, 0.4)",
        },
        accent: {
          DEFAULT: "#0099ff",
          muted: "#0077cc",
          subtle: "#004d80",
        },
        border: {
          DEFAULT: "rgba(24, 24, 24, 0.1)",
          hover: "rgba(24, 24, 24, 0.2)",
        },
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "body-xl": ["1.25rem", { lineHeight: "1.7" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "content": "65ch",
        "content-wide": "75ch",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.45, 0, 0.55, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.86, 0, 0.2, 1.01) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
