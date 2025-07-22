// src/components/TestimonialCarousel.tsx
'use client'

import Image from 'next/image'
import testimonials from '@/data/testimonials'

export default function TestimonialCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="text-center p-6 bg-white rounded-lg shadow"
            >
              <Image
                src={t.avatar}
                alt={t.name}
                width={100}
                height={100}
                className="mx-auto rounded-full"
              />
              <p className="mt-4 text-gray-700 italic">“{t.quote}”</p>
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
