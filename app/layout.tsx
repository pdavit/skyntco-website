import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import AOSInit from "./components/AOSInit";

export const viewport = {
  themeColor: "#2563eb",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyntCo LLC | Innovative SaaS Solutions",
  description:
    "SkyntCo LLC builds SaaS tools like EmailRewriter, LandingLens, and ResumeCrafter to enhance productivity.",
  keywords: [
    "SkyntCo",
    "SaaS",
    "AI tools",
    "Email rewriting",
    "Landing page builder",
  ],
  authors: [
    { name: "SkyntCo LLC", url: "https://skyntco.com" },
  ],
  creator: "SkyntCo LLC",
  metadataBase: new URL("https://skyntco.com"),
  alternates: {
    canonical: "https://skyntco.com",
  },
  openGraph: {
    title: "SkyntCo LLC | Innovative SaaS Solutions",
    description:
      "Explore SkyntCo's suite of AI-powered SaaS products designed to enhance business productivity and communication.",
    url: "https://skyntco.com",
    siteName: "SkyntCo LLC",
    images: [
      {
        url: "https://skyntco.com/images/opengraph-banner.png",
        width: 1200,
        height: 630,
        alt: "SkyntCo LLC SaaS Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyntCo LLC | Innovative SaaS Solutions",
    description:
      "SkyntCo LLC develops SaaS products like EmailRewriter, LandingLens, and ResumeCrafter to boost productivity.",
    images: ["https://skyntco.com/images/opengraph-banner.png"],
    // site: "@SkyntCo", // Uncomment if you create a Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
  icon: "/favicon.png",
}
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
