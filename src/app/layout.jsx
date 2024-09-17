
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from 'next/image'
import React from 'react'
import ParticlesBack from "@/components/ParticlesBack";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "VidhyaMitra",
  description: "Description here",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen pt-6">
          <ParticlesBack />
          {/* Navbar section */}
          <div className="w-64 flex items-center justify-center">
            <Navbar />
          </div>

          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
