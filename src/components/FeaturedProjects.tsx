// src/components/FeaturedProjects.tsx
'use client'

import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'

export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.slug}
              title={proj.title}
              slug={proj.slug}
              cover={proj.cover}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
