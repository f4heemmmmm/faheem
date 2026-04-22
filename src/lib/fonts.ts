import { Inter, Playfair_Display, Space_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";

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

// Monospace for labels and captions
// Space Mono - Technical, modern feel
export const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-mono",
});

// Poppins for navigation sidebar
export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Extenda for experience section company names
export const extenda = localFont({
  src: "../../public/fonts/Extenda-XS-90-Exa.woff2",
  display: "swap",
  variable: "--font-extenda",
});

// GT America for experience descriptions
export const gtAmerica = localFont({
  src: "../../public/fonts/GTAmerica-Regular.woff2",
  display: "swap",
  variable: "--font-gt-america",
});
