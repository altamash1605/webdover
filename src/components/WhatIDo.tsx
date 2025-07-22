// src/components/WhatIDo.tsx
'use client'

import ServiceCard from '@/components/ServiceCard'
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa'

export default function WhatIDo() {
  const services = [
    {
      title: 'Web Design',
      description: 'Minimal and responsive layouts that put your content first.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'React Development',
      description: 'Modern, component-based sites with Next.js & TypeScript.',
      icon: <FaCode />,
    },
    {
      title: 'Mobile Optimization',
      description: 'Ensuring your site looks great on every device.',
      icon: <FaMobileAlt />,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <ServiceCard
              key={svc.title}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
