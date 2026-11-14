import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aurora Companion Studio',
  description: 'Virtuelle Begleiterinnen für anspruchsvolle Nutzer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-[#0F0F13] text-white font-sans">{children}</body>
    </html>
  );
}