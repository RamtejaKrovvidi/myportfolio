import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <Hero />
      <main className="max-w-5xl mx-auto">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">© {new Date().getFullYear()} Ramteja Krovvidi</footer>
    </div>
  )
}
