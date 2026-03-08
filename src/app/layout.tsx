import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageLoader from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "Aura Cosmetics | Premium Beauty & Makeup Services",
  description:
    "Discover luxury beauty services, bridal makeup, skincare consultations, and premium cosmetics. Book your transformation with Aura Cosmetics - Where beauty meets elegance.",
  keywords: [
    "beauty",
    "makeup",
    "bridal makeup",
    "skincare",
    "cosmetics",
    "beauty influencer",
    "luxury beauty",
  ],
  openGraph: {
    title: "Aura Cosmetics | Premium Beauty & Makeup Services",
    description:
      "Discover luxury beauty services, bridal makeup, skincare consultations, and premium cosmetics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
