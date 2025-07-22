// src/data/projects.ts
export interface Project {
  title: string
  slug: string
  cover: string
  description: string
}

const projects: Project[] = [
  {
    title: 'E-commerce Landing',
    slug: 'ecommerce-landing',
    cover: '/assets/images/project1.jpg',
    description: 'A responsive landing page for an online store.',
  },
  {
    title: 'Portfolio Showcase',
    slug: 'portfolio-showcase',
    cover: '/assets/images/project2.jpg',
    description: 'A grid-based portfolio site with filters.',
  },
  {
    title: 'Blog Platform',
    slug: 'blog-platform',
    cover: '/assets/images/project3.jpg',
    description: 'A minimalist blog with CMS integration.',
  },
]

export default projects
