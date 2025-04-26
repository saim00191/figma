import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Crypto Tracking Platform",
    template: "%s | Crypto Tracking Platform",
  },
  description:
    "Stay ahead in the crypto world with real-time tracking and a seamless user experience.",
  openGraph: {
    title: "Crypto Tracking Platform",
    description:
      "Stay ahead in the crypto world with real-time tracking and a seamless user experience.",
    url: "https://crypto-tracking-platform.vercel.app",
    siteName: "Crypto Tracking Platform",
    images: [
      {
        url: "https://crypto-tracking-platform.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Crypto Tracking Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#060C22] ">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
