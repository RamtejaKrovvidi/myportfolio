import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Hero() {
  return (
    <header className="pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
        <img src="public/photo.jpg" alt="Ramteja" className="w-40 h-40 rounded-full border-4 border-gray-800 shadow-xl mx-auto object-cover" />
        <h1 className="mt-6 text-5xl font-extrabold text-accent">Ramteja Krovvidi</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A meticulous and organized individual seeking a role where I can enhance my learnings, knowledge and skills.
          Innovative, creative and willing to learn new things. I aim to contribute effectively to organizational goals while fostering a collaborative and results-driven environment.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="mailto:ramtejakrovvidi618@gmail.com" className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-lg hover:bg-accent/20 transition">Email</a>
          <a href="https://www.linkedin.com/in/ramteja-krovvidi/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-lg hover:bg-accent/20 transition flex items-center gap-2"><FaLinkedin/> LinkedIn</a>
          <a href="https://github.com/RamtejaKrovvidi" target="_blank" rel="noreferrer" className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-lg hover:bg-accent/20 transition flex items-center gap-2"><FaGithub/> GitHub</a>
          <a href="https://leetcode.com/u/U3bibQJYMy/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-accent/10 border border-accent text-accent rounded-lg hover:bg-accent/20 transition flex items-center gap-2"><SiLeetcode/> LeetCode</a>
        </div>
      </div>
    </header>
  )
}
