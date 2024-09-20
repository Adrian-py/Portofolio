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
      <body className="bg-[linear-gradient(45deg,_#1C1C21_0%,_#27272E_100%)] bg-cover text-text font-roboto">
        {children}
      </body>
    </html>
  );
}
