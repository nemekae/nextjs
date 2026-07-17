import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js is Classic!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Page content */}
      <body className="min-h-screen flex flex-col">
        {/* Navigation bar */}
        <Navigation/>
        <main className="flex-grow p-6"> {children} </main>
        {/* Footer Content */}
        <Footer/>
      </body>
    </html>
  );
}
