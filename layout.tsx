import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const Biryani = localFont({
  src: [
    {
      path: "../assets/fonts/Biryani-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Biryani-ExtraBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-biryani",
});

export const metadata: Metadata = {
  title: "Chris Reski - Portfolio",
  description: "Portfolio website for Chris Reski",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${Biryani.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
