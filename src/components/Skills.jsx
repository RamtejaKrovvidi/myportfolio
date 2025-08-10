import React from 'react'

export default function Skills() {
  const languages = ['Java','C','C++','Python','JavaScript','HTML','CSS']
  const tools = ['Git/GitHub','VS Code','SQL','MongoDB']
  const concepts = ['Data Structures (Java)','OOP (Java)']

  return (
    <section className="py-12 px-6" id="skills" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Languages</h4>
          <div className="flex flex-wrap gap-2">{languages.map(s=> <span key={s} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{s}</span>)}</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Tools & DB</h4>
          <div className="flex flex-wrap gap-2">{tools.map(s=> <span key={s} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{s}</span>)}</div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Concepts</h4>
          <div className="flex flex-wrap gap-2">{concepts.map(s=> <span key={s} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{s}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
