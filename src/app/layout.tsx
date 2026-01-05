import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
