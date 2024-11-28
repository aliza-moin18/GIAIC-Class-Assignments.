import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const roboto = Roboto({
  weight: ["400","900"],
  subsets: ["latin"],
  variable: "--font-roboto", 
});

const lora = Lora({
  weight: ["400","700"], 
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Travel Website",
  description: "Build by: Aliza Moin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${roboto.variable} ${lora.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};