import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyBabes AI Clone',
  description: 'Immersive AI Companion Experience',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className={`${inter.className} bg-[#0F0F13] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}