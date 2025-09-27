import "./globals.css";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// فونت فارسی محلی (مسیر نسبی به همین فایل)
const iranSans = localFont({
  src: [
    { path: "../../public/fonts/IRANSansFaNum.woff2", },
    { path: "../../public/fonts/IRANSansFaNum.woff",},
  ],
  display: "swap",
  variable: "--font-iransans",
});

export const metadata = {
  title: "Growly",
  description: "Growly Application",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
