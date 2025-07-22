// src/components/Footer.tsx
'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Webdover. All rights reserved.
      </div>
    </footer>
  )
}
