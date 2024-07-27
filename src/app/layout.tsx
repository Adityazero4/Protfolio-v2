import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Aditya Jain",
  description: "Aditya Jain's Portfolio Website",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Aditya Jain", url: "" }],
  openGraph: {
    title: "Aditya Jain",
    description: "Aditya Jain's Portfolio Website",
    url: "",
    siteName: "Aditya Jain",
    images: [
      {
        url: "",
        width: 500,
        height: 500,
        alt: "aditya",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
