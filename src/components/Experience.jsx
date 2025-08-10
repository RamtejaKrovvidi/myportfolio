import React from 'react'

export default function Experience() {
  return (
    <section className="py-12 px-6" id="experience" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-6">Experience</h3>
      <div className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold">Full Stack Web Development Intern - NEXT24Tech Technologies</h4>
          <p className="text-sm text-gray-400">Apr 2024 - Jun 2024 | Remote</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Developed a secure web-based voting system with authentication and real-time tallying.</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold">Web Development Intern - Technical Hub Pvt Ltd</h4>
          <p className="text-sm text-gray-400">Jul 2022 - Dec 2022</p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Built user-friendly interfaces, improving retention by ~20%.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
