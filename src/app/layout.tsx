import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "3Byte — Software que funciona",
  description:
    "Sistemas de gestión a medida, productos SaaS e integraciones reales — todo en producción, para clientes reales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full bg-[#09090c] text-[#eeeef3] font-syne overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
