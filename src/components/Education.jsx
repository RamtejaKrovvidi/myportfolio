import React from 'react'

export default function Education() {
  return (
    <section className="py-12 px-6" id="education" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-6">Education</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold">B.Tech in Computer Science</h4>
          <p className="text-sm text-gray-400">University College of Engineering (JNTUK) | 2023 – 2026 | CGPA: 8.0/10</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold">Diploma in Computer Science & Engineering</h4>
          <p className="text-sm text-gray-400">Aditya Polytechnic College | 2020 – 2023 | 95.4%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold">Secondary School Education</h4>
          <p className="text-sm text-gray-400">Tirumala Proactive English Medium School | 2020 | CGPA: 10.0/10</p>
        </div>
      </div>
    </section>
  )
}
