import type { Metadata } from "next";
import Script from "next/script";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/ui/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";

/* ── Font Declarations ──────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* ── Metadata — Blueprint §6 ────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://divyantpoddar.dev"),
  title: {
    default: "Divyant Poddar | Digital Architecture",
    template: "%s | Divyant Poddar",
  },
  description:
    "Full-Stack Developer bridging heavy technical engineering with flawless modern design. Building scalable web apps, cross-platform mobile experiences, and growth strategies that refuse to be ignored.",
  keywords: [
    "Divyant Poddar",
    "Full-Stack Developer",
    "Digital Architecture",
    "Next.js Developer India",
    "React Developer",
    "Flutter Developer",
    "Blockchain DApp",
    "Web Development Portfolio",
    "Beyond Intern",
    "Blockademia",
  ],
  authors: [{ name: "Divyant Poddar", url: "https://divyantpoddar.dev" }],
  creator: "Divyant Poddar",
  publisher: "Divyant Poddar",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divyantpoddar.dev",
    title: "Divyant Poddar | Digital Architecture",
    description:
      "Full-Stack Developer bridging heavy technical engineering with flawless modern design. Experiences that refuse to be ignored.",
    siteName: "Divyant Poddar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Divyant Poddar — Full-Stack Developer & Digital Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyant Poddar | Digital Architecture",
    description:
      "Full-Stack Developer bridging heavy technical engineering with flawless modern design.",
    creator: "@divyantpr",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://divyantpoddar.dev",
  },
};

/* ── Root Layout ────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7958603436560948"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script id="adsense-init" strategy="afterInteractive">{`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main id="main-content">{children}</main>
        </LenisProvider>
      </body>
    </html>
  );
}
