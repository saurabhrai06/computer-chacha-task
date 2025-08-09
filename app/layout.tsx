import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Computer Chacha Assignment',
  description: 'Technical task submission by Saurabh Rai.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* We set the default background here */}
      <body className={`${inter.className} bg-brand-light`}>{children}</body>
    </html>
  )
}