import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const extenda = localFont({
  src: "../../public/fonts/Extenda-XS-90-Exa.woff2",
  display: "swap",
  variable: "--font-extenda",
});

export const gtAmerica = localFont({
  src: "../../public/fonts/GTAmerica-Regular.woff2",
  display: "swap",
  variable: "--font-gt-america",
});
