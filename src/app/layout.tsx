import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DERMAÉ CLINIC — Приватна дерматологія та діагностика",
  description:
    "Експертна дерматологія від доктора Олександра Мілера, MD, PhD. Приватні консультації, прецизійна діагностика та сучасні протоколи лікування шкіри.",
  keywords: [
    "дерматологія",
    "шкірна клініка",
    "дерматоскопія",
    "лікування акне",
    "діагностика шкіри",
    "приватний дерматолог",
    "дерматологічна клініка Київ",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "DERMAÉ CLINIC — Приватна дерматологія та діагностика",
    description:
      "Експертна дерматологія для здоров'я вашої шкіри. Запишіться на приватну консультацію до доктора Олександра Мілера.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-clinic-bg text-clinic-dark font-sans">
        {children}
      </body>
    </html>
  );
}
