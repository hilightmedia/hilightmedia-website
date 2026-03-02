// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins, Lora, Noto_Serif, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});



const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-serif",
  style: ["italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-manrope",
  display: "swap",
});

const siteName = "Hilight Media";
const siteUrl = "https://hilightmedia.in";
const defaultTitle = "Hilight Media";
const defaultDescription = "From Advertising to Urban business";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: ["Hilight Media", "Advertising", "Urban business"],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    // images: [
    //   {
    //     url: "/og-default.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: siteName,
    //   },
    // ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    // images: ["/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
      ${inter.variable}
      ${poppins.variable}
      ${notoSerif.variable}
      ${manrope.variable}
    `}
      >
        {children}
      </body>
    </html>
  );
}
