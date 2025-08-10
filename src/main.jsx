import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init({ duration: 700, once: true })

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
