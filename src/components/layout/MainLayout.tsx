import { useEffect } from 'react'
import { Navbar } from '../navigation/Navbar'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Experience } from '../sections/Experience'
import { GithubSection } from '../sections/GithubSection'
import { Contact } from '../sections/Contact'
import { Footer } from '../navigation/Footer'

export const MainLayout = () => {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-bg-dark text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-hero-gradient bg-[length:200%_200%] opacity-85 animate-gradient-x" />
      <div className="pointer-events-none fixed inset-y-0 left-0 -z-10 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
      <div className="pointer-events-none fixed inset-y-0 right-0 -z-10 w-px bg-gradient-to-b from-transparent via-fuchsia-500/40 to-transparent" />

      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 pt-24 md:px-6 lg:px-8 lg:pt-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

