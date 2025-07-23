/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

export default function ProjectPage({ params }) {
  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Project: {params.slug}</h1>
    </main>
  );
}
