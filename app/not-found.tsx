// app/not-found.tsx
'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! We can’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </main>
  )
}
