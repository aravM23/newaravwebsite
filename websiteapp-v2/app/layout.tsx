import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import PageTransition from "@/components/layout/PageTransition";
import Chatbot from "@/components/Chatbot";

// Body, UI & labels — friendly, calm geometric sans (single sans family)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Headings — elegant, warm serif
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Arav :)",
  description:
    "18-year-old builder from Toronto. CS @ Waterloo. Shipping products people love.",
  openGraph: {
    title: "Arav :)",
    description:
      "18-year-old builder from Toronto. CS @ Waterloo. Shipping products people love.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arav :)",
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
      className={`${jakarta.variable} ${lora.variable}`}
    >
      <body className="font-sans bg-bg text-text-primary antialiased">
        <div className="noise-overlay" aria-hidden="true" />
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
