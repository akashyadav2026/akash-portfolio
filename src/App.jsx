import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDelay = 1200 // minimum ms to show loader
    const startTime = Date.now()

    const done = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDelay - elapsed)
      setTimeout(() => setLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      done()
    } else {
      window.addEventListener('load', done, { once: true })
      // fallback: never hang more than 6s on very slow connections
      const fallback = setTimeout(done, 6000)
      return () => {
        window.removeEventListener('load', done)
        clearTimeout(fallback)
      }
    }
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(14,14,22,0.95)',
            color: '#f1f5f9',
            border: '1px solid rgba(110,231,183,0.25)',
            backdropFilter: 'blur(20px)',
          },
        }}
      />
      <div className="app-wrapper">
        {/* Ambient orbs */}
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />

        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <div className="section-divider" />
          <section id="about"><About /></section>
          <div className="section-divider" />
          <section id="experience"><Experience /></section>
          <div className="section-divider" />
          <section id="skills"><Skills /></section>
          <div className="section-divider" />
          <section id="projects"><Projects /></section>
          <div className="section-divider" />
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
