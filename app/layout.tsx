import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomad Golf — Golf Gadget",
  description: "The golf multitool that eliminates tee height guesswork. Consistent tee height, every hole, every round.",
  openGraph: {
    title: "Nomad Golf — Golf Gadget",
    description: "Same height. Every tee. Every hole.",
    siteName: "Nomad Golf",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
