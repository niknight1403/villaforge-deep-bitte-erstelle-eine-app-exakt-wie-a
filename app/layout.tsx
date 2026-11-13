import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aurora Companion Studio',
  description: 'Virtuelle Begleiterinnen Plattform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-[#0F0F13] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}