import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crossborder Adventures — Roads worth remembering",
  description: "Premium motorcycle and automotive adventures across India and beyond. Extraordinary roads, thoughtful planning, and experiences that stay with you.",
  metadataBase: new URL("https://crossborderadventures.co.in"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
