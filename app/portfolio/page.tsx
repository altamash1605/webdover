// app/portfolio/page.tsx
import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'

export const metadata = {
  title: 'Portfolio – Webdover',
  description: 'Browse my work and case studies',
}

export default function PortfolioPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Portfolio</h1>
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
