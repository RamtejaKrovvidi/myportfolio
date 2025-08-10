import React from 'react'

const projectData = [
  {
    title: 'DBMS Project On Students Database',
    desc: "Centralized view of students' data including academics, hostel, mess, library, and sports.",
    link: 'https://github.com/RamtejaKrovvidi/DBMSproject',
    tech: ['MySQL', 'Java', 'HTML', 'CSS']
  },
  {
    title: 'Fake News Prediction',
    desc: 'Machine Learning & NLP system for detecting fake vs real news articles.',
    link: 'https://github.com/RamtejaKrovvidi/FakeNewsPrediction',
    tech: ['Python', 'sklearn', 'NLP']
  }
]

export default function Projects() {
  return (
    <section className="py-12 px-6" id="projects" data-aos="fade-up">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projectData.map(p=> (
          <div key={p.title} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl shadow hover:shadow-xl transform hover:-translate-y-2 transition">
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 text-sm text-gray-400">
                {p.tech.map(t=> <span key={t} className="px-2 py-1 bg-gray-800 rounded">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="px-3 py-2 bg-accent text-black rounded font-medium">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
