import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import ClientLayout from "./ClientLayout";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ümraniye Çanta Tamiri | Çanta & Valiz Tamiri",
  description:
    "Ümraniye çanta tamiri hizmeti. Valiz tamiri, fermuar değişimi, deri çanta onarımı. Atatürk Mahallesi Ümraniye / İstanbul.",

  keywords: [
    "Ümraniye çanta tamiri",
    "Ümraniye valiz tamiri",
    "çanta tamircisi Ümraniye",
    "valiz tamircisi Ümraniye",
    "deri çanta tamiri",
    "fermuar değişimi"
  ],

  openGraph: {
    title: "Ümraniye Çanta Tamiri",
    description:
      "Ümraniye’de profesyonel çanta ve valiz tamiri. Hızlı, güvenilir ve kaliteli hizmet.",
    url: "https://umraniyecantatamiri.com",
    siteName: "Ümraniye Çanta Tamiri",
    locale: "tr_TR",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${jakarta.className}
          antialiased
          overflow-x-hidden
        `}
      >
        {/* CLIENT TARAFI */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
