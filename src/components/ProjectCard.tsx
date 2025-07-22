// src/components/ProjectCard.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  slug: string
  cover: string
  description: string
}

export default function ProjectCard({
  title,
  slug,
  cover,
  description,
}: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${slug}`} className="block group">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={cover}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold group-hover:text-blue-600 transition">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}
