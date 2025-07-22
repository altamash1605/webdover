// src/components/Hero.tsx
'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Crafting Digital Experiences
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          I build minimal, fast, and responsive websites using Next.js & Tailwind CSS.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Let’s Talk
        </Link>
      </div>
    </section>
  )
}
