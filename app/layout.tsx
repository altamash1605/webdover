// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Webdover | Your Name',
  description: 'A minimalist portfolio built with Next.js, TypeScript & Tailwind',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

