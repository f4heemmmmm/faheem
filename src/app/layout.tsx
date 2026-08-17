import type { Metadata } from "next";
import { inter, poppins, extenda, gtAmerica } from "@/lib/fonts";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navigation from "@/components/ui/Navigation";
import LoadingScreen from "@/components/ui/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.faheemkamel.com"),
  title: "faheem | software developer",
  description:
    "aspiring software developer passionate about creating meaningful impact in the tech industry.",
  keywords: ["software developer", "portfolio", "web development", "faheem"],
  authors: [{ name: "faheem" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "faheem | software developer",
    description:
      "aspiring software developer passionate about creating meaningful impact in the tech industry.",
    siteName: "faheem portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "faheem | software developer",
    description:
      "aspiring software developer passionate about creating meaningful impact in the tech industry.",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${extenda.variable} ${gtAmerica.variable}`}>
      <body className="min-h-screen font-sans text-foreground">
        <LoadingScreen>
          <SmoothScroll />
          <a
            href="#main-content"
            className="sr-only font-poppins text-sm font-medium uppercase focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2 focus:text-white"
          >
            skip to content
          </a>
          <Navigation />
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
