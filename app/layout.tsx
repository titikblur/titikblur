import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Titikblur — Content Creator yang Menginspirasi",
  description: "Blur Food adalah content creator yang fokus di niche Food & Beverage. Membuat konten yang tidak hanya enak dipandang, tapi juga menginspirasi.",
  keywords: ["titikblur", "blur food", "content creator", "food content", "F&B", "YouTube", "Instagram", "TikTok"],
  authors: [{ name: "Titikblur" }],
  openGraph: {
    title: "Titikblur — Content Creator yang Menginspirasi",
    description: "Blur Food adalah content creator yang fokus di niche Food & Beverage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-full flex flex-col antialiased bg-background">
        {children}
      </body>
    </html>
  );
}
