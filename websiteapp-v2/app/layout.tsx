import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arav Mathur — Builder",
  description:
    "18-year-old builder from Toronto. CS @ Waterloo. Shipping products people love.",
  openGraph: {
    title: "Arav Mathur — Builder",
    description:
      "18-year-old builder from Toronto. CS @ Waterloo. Shipping products people love.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arav Mathur — Builder",
    description:
      "18-year-old builder from Toronto. CS @ Waterloo. Shipping products people love.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans bg-bg text-text-primary antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <Header />
        <PageTransition>
          <main className="min-h-screen">{children}</main>
        </PageTransition>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
