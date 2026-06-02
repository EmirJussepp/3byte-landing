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
  title: "3Byte — Software a medida para PyMEs argentinas",
  description:
    "Construimos sistemas de gestión, productos SaaS e integraciones reales para negocios argentinos. Sin agencias, sin plantillas. San Francisco, Córdoba.",
  keywords: ["software a medida", "sistemas de gestión", "desarrollo web argentina", "SaaS córdoba", "software PyME"],
  authors: [{ name: "3Byte" }],
  creator: "3Byte",
  metadataBase: new URL("https://www.grupo3byte.com"),
  openGraph: {
    title: "3Byte — Tu negocio merece un sistema propio",
    description: "Software a medida para PyMEs y negocios argentinos. Del primer llamado al sistema en producción.",
    url: "https://www.grupo3byte.com",
    siteName: "3Byte",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3Byte — Software a medida",
    description: "Software a medida para PyMEs y negocios argentinos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full bg-[#09090c] text-[#eeeef3] font-syne overflow-x-hidden md:cursor-none">
        {children}
      </body>
    </html>
  );
}
