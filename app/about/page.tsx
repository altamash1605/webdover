// app/about/page.tsx
import Image from 'next/image'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si'

export const metadata = {
  title: 'About – Webdover',
  description: 'Learn more about me, my skills and experience',
}

export default function AboutPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 space-y-16">
        {/* Bio */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/assets/images/avatar.jpg"
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">ABOUT ME</h1>
            <p className="text-gray-700 leading-relaxed">
              Hi, I’m Altamash, a web developer specializing in
              building clean, performant, and accessible websites with
              Next.js, React and Tailwind CSS. I love translating
              design mockups into pixel-perfect code and optimizing for
              speed and SEO.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">SKILLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl mb-2 text-orange-500" />
              <span>HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-4xl mb-2 text-blue-600" />
              <span>CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-4xl mb-2 text-teal-500" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl mb-2 text-blue-700" />
              <span>TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl mb-2 text-cyan-400" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-4xl mb-2" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-4xl mb-2 text-green-600" />
              <span>Node.js</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">EXPERIENCE</h2>
          <ul className="border-l-2 border-gray-200">
            <li className="mb-8 pl-6">
              <span className="text-gray-500 text-sm">2022 – Present</span>
              <h3 className="text-xl font-semibold">Web Developer</h3>
              <p className="text-gray-600">
                Building responsive, high-performance websites at Webdover
                using Next.js & Tailwind.
              </p>
            </li>
            <li className="mb-8 pl-6">
              <span className="text-gray-500 text-sm">2021 – 2022</span>
              <h3 className="text-xl font-semibold">Frontend Intern</h3>
              <p className="text-gray-600">
                Developed UI features and landing pages at Startup Co.
              </p>
            </li>
            {/* Add more entries as needed */}
          </ul>
        </div>
      </div>
    </section>
  )
}

