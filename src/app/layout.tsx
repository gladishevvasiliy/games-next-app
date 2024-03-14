import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white p-10">{children}</body>
    </html>
  );
}
