import type { Metadata } from "next";
import "./globals.css";
import { Questrial, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KickOff.gg",
  description:
    "Experience sophisticated sports betting with virtual points. Football, basketball, esports, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
