import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Bebas_Neue({subsets: ["latin"], display: "auto", preload:true, style:"normal", weight: '400' });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col items-center justify-between p-4 md:px-24 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
