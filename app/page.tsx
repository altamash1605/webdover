// src/app/page.tsx

import Hero from '@/components/Hero'
import WhatIDo from '@/components/WhatIDo'
import FeaturedProjects from '@/components/FeaturedProjects'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <TestimonialCarousel />
      <CallToAction />
    </>
  )
}
