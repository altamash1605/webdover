// src/components/CallToAction.tsx
'use client'

import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to build something great?
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Let’s work together to create a fast, modern, and responsive website for you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
