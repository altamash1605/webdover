// app/portfolio/[slug]/page.tsx

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Project: {params.slug}</h1>
    </main>
  );
}
