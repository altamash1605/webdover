// src/app/contact/page.tsx
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact – Webdover',
  description: 'Get in touch with Webdover for your next project',
}

export default function ContactPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Let’s Talk</h1>
        <p className="text-center text-gray-600 mb-12">
          Have a project in mind? Fill out the form below or email me directly at{' '}
          <a
            href="mailto:altamash16.05@gmail.com"
            className="text-blue-600 hover:underline"
          >
            altamash16.05@gmail.com
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
