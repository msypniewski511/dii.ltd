import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dii-public-visions.msypniewski511.chatgpt.site"),
  title: "DII — Build the business. Keep it moving.",
  description: "Dhruvi OS connects five focused DII products across planning, finance, people and operations.",
  openGraph: {
    title: "Build the business. Keep it moving.",
    description: "Dhruvi OS · One company platform",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "A glass infinity symbol connecting the DII company platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build the business. Keep it moving.",
    description: "Dhruvi OS · One company platform",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem("dii-theme")||"system";const d=t==="system"?(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"):t;document.documentElement.dataset.theme=d;document.documentElement.style.colorScheme=d}catch(e){}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
