// app/portfolio/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import projects, { Project } from '@/data/projects'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p: Project) => ({
    slug: p.slug,
  }))
}

export default function ProjectPage({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <article className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <Image
          src={project.cover}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-lg object-cover"
        />
        <p className="text-gray-700">{project.description}</p>
        {/* TODO: Add more case-study details here: problem, solution, result */}
      </div>
    </article>
  )
}
