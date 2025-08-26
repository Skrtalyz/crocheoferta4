import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: 'COMO GANHAR DINHEIRO COM CROCHE',
  description: 'Transforme seu hobby em renda com nosso curso de crochê.',
  icons: {
    icon: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
      </head>
      <body className={cn("font-body antialiased", inter.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
