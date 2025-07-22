// src/data/testimonials.ts

export interface Testimonial {
  name: string
  role: string
  avatar: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Emily Carter',
    role: 'Founder, Startup Co.',
    avatar:
      'https://ui-avatars.com/api/?name=Emily+Carter&size=200&background=0D8ABC&color=fff',
    quote:
      'Working with Webdover was an absolute pleasure. The site launch boosted our traffic by 40% in the first month!',
  },
  {
    name: 'Michael Lee',
    role: 'CEO, Tech Innovators',
    avatar:
      'https://ui-avatars.com/api/?name=Michael+Lee&size=200&background=4CAF50&color=fff',
    quote:
      'Their attention to detail and clean design made our brand stand out. Highly recommended!',
  },
  {
    name: 'Sophia Patel',
    role: 'Marketing Lead, Creative Agency',
    avatar:
      'https://ui-avatars.com/api/?name=Sophia+Patel&size=200&background=F44336&color=fff',
    quote:
      'A seamless process from start to finish. Our new site looks amazing and performs flawlessly.',
  },
]

export default testimonials
