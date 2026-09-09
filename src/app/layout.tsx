import type { Metadata } from "next";
import { googleSansFlex, poppins } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabinet Notarial",
  description: "Cabinet notarial — expertise, confiance et proximité.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${googleSansFlex.variable} ${poppins.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}