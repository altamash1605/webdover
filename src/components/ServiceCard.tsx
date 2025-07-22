// src/components/ServiceCard.tsx
'use client'

interface ServiceCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg text-center">
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
