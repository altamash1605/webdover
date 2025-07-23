// app/portfolio/[slug]/page.tsx
import { PageProps } from 'next'

type Params = { slug: string }

export default function ProjectPage({ params }: PageProps<Params>) {
  const { slug } = params

  // fetch your data here if you need, e.g.
  // const project = await fetchProject(slug)

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Project: {slug}</h1>
      {/* …your project details UI… */}
    </main>
  )
}
