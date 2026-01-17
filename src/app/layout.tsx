import type { Metadata } from "next";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "B7Store",
  description: "Loja fictícia de produtos criado no curso da B7Web.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
