// app/portfolio/[slug]/page.tsx

type Props = {
  params: { slug: string }
  // if you need searchParams:
  // searchParams: Record<string, string | string[] | undefined>
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params
  return <div>Project: {slug}</div>
}
