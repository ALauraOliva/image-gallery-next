import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./ui/globals.css";
import Nav from "./ui/nav/nav";

const grotesk = Space_Grotesk({
  weight: ["300", "700", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ImageGrid",
  description: "See beautiful images with full HD resolution",
  keywords: "unsplash, images, search, gallery, HD, resolution, talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.className} bg-neutral-100 w-full min-h-[90vh] tracking-tighter text-zinc-700`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
