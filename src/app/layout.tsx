import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portofolio Website",
  description: "Adrian Hartanto's Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-roboto h-screen overflow-y-scroll overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
