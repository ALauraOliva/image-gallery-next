import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

export const metadata: Metadata = {
  title: "Image Gallery",
  description: "Search beautiful images with full HD resolution",
  keywords: "unsplash, images, search, gallery, HD, resolution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
