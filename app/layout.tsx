import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "José C. Thompson — Engineer · Entrepreneur · Sales",
  description:
    "Mexican engineer and entrepreneur living in Amsterdam. Seven years moving between technical and commercial work.",
  openGraph: {
    title: "José C. Thompson",
    description: "Engineer · Entrepreneur · Sales",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
