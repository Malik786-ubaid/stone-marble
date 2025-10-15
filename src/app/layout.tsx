import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

export const metadata: Metadata = {
  title: "Stone Marble",
  description: "Premium Marble & Natural Stone Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900 flex flex-col min-h-screen">
      
        <Navbar />

        
        <main className="flex-grow pt-24 sm:pt-28 px-4 sm:px-6">
          {children}
        </main>

      
        <Footer />
      </body>
    </html>
  );
}
