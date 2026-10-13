import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e040a0",
};

export const metadata: Metadata = {
  title: "Salud Sexual y Reproductiva - Pasto Salud E.S.E. & UCC",
  description:
    "Orientación y agendamiento fácil para planificación familiar con Sinoimplant® 150 mg 100% gratuito en el Hospital Santa Mónica, Pasto Salud E.S.E. en alianza con la Universidad Cooperativa de Colombia (UCC).",
  keywords: [
    "Pasto Salud ESE",
    "Hospital Santa Mónica",
    "Sinoimplant 150mg",
    "Planificación Familiar",
    "Implante subdérmico",
    "Salud Sexual y Reproductiva",
    "Pasto Nariño",
    "UCC",
    "Carolina Palacios",
  ],
  authors: [{ name: "Carolina Palacios" }, { name: "Pasto Salud E.S.E. & UCC" }],
  openGraph: {
    title: "Salud Sexual y Reproductiva - Pasto Salud E.S.E. & UCC",
    description:
      "¡Agenda tu cita fácil, rápido y sin complicaciones en Hospital Santa Mónica! Conoce todo sobre el implante Sinoimplant® 150 mg gratuito.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`scroll-smooth ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background font-sans text-on-surface antialiased selection:bg-primary-fixed selection:text-primary-dark">
        {children}
      </body>
    </html>
  );
}
