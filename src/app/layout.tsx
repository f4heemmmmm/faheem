import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faheem | Aspiring Software Developer",
  description:
    "Portfolio of Faheem, an aspiring software developer passionate about creating meaningful impact in the tech industry.",
  keywords: [
    "Faheem",
    "Software Developer",
    "Portfolio",
    "Web Development",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Faheem" }],
  openGraph: {
    title: "Faheem | Aspiring Software Developer",
    description:
      "Portfolio of Faheem, an aspiring software developer passionate about creating meaningful impact in the tech industry.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faheem | Aspiring Software Developer",
    description:
      "Portfolio of Faheem, an aspiring software developer passionate about creating meaningful impact in the tech industry.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
