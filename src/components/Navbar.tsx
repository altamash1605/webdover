// src/components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const path = usePathname()

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold">
          Webdover
        </Link>

        {/* Navigation links */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = path === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    'hover:text-blue-600 transition ' +
                    (isActive ? 'text-blue-600 font-semibold' : 'text-gray-700')
                  }
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* You can replace this with a hamburger icon and menu later */}
          <button aria-label="Open menu">☰</button>
        </div>
      </div>
    </nav>
  )
}
