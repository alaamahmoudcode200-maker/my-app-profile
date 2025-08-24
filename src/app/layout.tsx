// ./src/app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

// استخدم الخطوط مع خيار display: 'swap'
const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}