import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Godfrey Hire - Car Rental in Nairobi | Book on WhatsApp",
  description: "Rent affordable, clean cars in Nairobi. Instant booking via WhatsApp. SUVs, minivans & more. No hidden fees. 5-minute response time.",
  keywords: ["car hire Nairobi", "car rental Kenya", "rent a car Nairobi", "affordable car hire", "SUV rental Nairobi"],
  authors: [{ name: "Godfrey Hire" }],
  openGraph: {
    title: "Godfrey Hire - Car Rental in Nairobi",
    description: "Rent affordable, clean cars in Nairobi. Book instantly on WhatsApp.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-50 selection:bg-emerald-500/30 antialiased">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
