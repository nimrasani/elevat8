import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "ELEVAT8 | Premium Strength & Performance Club",
  description:
    "Train at a higher level. Premium facilities, elite coaching and a training environment built for people who expect more. Start your 7-day trial today.",
  openGraph: {
    title: "Train At A Higher Level | ELEVAT8",
    description:
      "Premium strength & conditioning, elite coaching and a members-only training environment. Not your average gym — ELEVAT8.",
    url: "https://www.elevat8.com/",
    siteName: "ELEVAT8",
    images: [
      {
        url: "https://www.elevat8.com/OG.png",
        width: 1200,
        height: 630,
        alt: "ELEVAT8 — Premium Strength & Performance Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Train At A Higher Level | ELEVAT8",
    description:
      "Premium facilities, elite coaching and a training environment for people who expect more from themselves.",
    images: ["https://www.elevat8.com/OG.png"],
  },
  keywords: [
    "premium gym",
    "luxury fitness club",
    "strength and conditioning",
    "elite coaching",
    "personal training",
    "ELEVAT8",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
