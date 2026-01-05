import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Font families
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      // Luxury Color Palette - Refined, muted, sophisticated
      colors: {
        // Primary backgrounds
        background: {
          DEFAULT: "#0a0a0a",
          subtle: "#111111",
          elevated: "#171717",
        },
        // Foreground text colors
        foreground: {
          DEFAULT: "#fafafa",
          muted: "#a1a1a1",
          subtle: "#737373",
        },
        // Accent - Warm neutral for understated elegance
        accent: {
          DEFAULT: "#d4d4d4",
          muted: "#a3a3a3",
          subtle: "#525252",
        },
        // Border colors
        border: {
          DEFAULT: "#262626",
          subtle: "#1a1a1a",
        },
      },
      // Typography - Editorial scale
      fontSize: {
        // Display sizes for hero
        "display-2xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        // Body text
        "body-xl": ["1.25rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-md": ["1rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", letterSpacing: "0" }],
        // Caption/label
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      // Spacing - Generous whitespace
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      // Max widths for content
      maxWidth: {
        "8xl": "88rem",
        "content": "65ch",
        "content-wide": "75ch",
      },
      // Animation timing
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      // Refined animation easings
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.45, 0, 0.55, 1)",
      },
      // Keyframe animations
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        "blur-in": "blur-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
