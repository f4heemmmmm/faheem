import { Inter, Playfair_Display } from "next/font/google";

// Primary sans-serif for body text
// Inter - Clean, modern, excellent readability
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Display serif for headlines
// Playfair Display - Editorial, elegant, timeless
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
