import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DII Public Website — Five Design Visions",
  description: "Compare five visual directions for the future DII public company website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
