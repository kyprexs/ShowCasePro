import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'ShowcasePro - Professional Portfolio & Blog Template',
  description: 'A modern, responsive portfolio template for developers, designers, and professionals. Built with Next.js, TypeScript, and Tailwind CSS.',
  keywords: ['portfolio', 'blog', 'template', 'developer', 'designer', 'professional', 'nextjs', 'typescript', 'tailwind'],
  authors: [{ name: 'ShowcasePro' }],
  creator: 'ShowcasePro',
  publisher: 'ShowcasePro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.github.io/showcasepro',
    title: 'ShowcasePro - Professional Portfolio & Blog Template',
    description: 'A modern, responsive portfolio template for developers, designers, and professionals.',
    siteName: 'ShowcasePro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShowcasePro - Professional Portfolio & Blog Template',
    description: 'A modern, responsive portfolio template for developers, designers, and professionals.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
