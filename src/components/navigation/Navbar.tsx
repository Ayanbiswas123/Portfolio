import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_ITEMS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'GitHub', href: 'github' },
  { label: 'Contact', href: 'contact' },
]

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
  }
}

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div
          className={`mt-3 flex items-center justify-between rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 backdrop-blur-xl transition-all ${
            scrolled ? 'shadow-glow-primary' : ''
          }`}
        >
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/40">
              AB
            </span>
            <span className="hidden sm:inline-block">Ayan Biswas</span>
            <span className="hidden text-xs text-slate-400 sm:inline-block">
              MERN · DevOps · AI
            </span>
          </button>

          <nav className="hidden items-center gap-1 text-xs md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 outline-none transition hover:bg-slate-800/80 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200 outline-none transition hover:border-indigo-500 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="mt-2 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 px-4 py-3 shadow-xl shadow-black/60 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      scrollToSection(item.href)
                      setOpen(false)
                    }}
                    className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-200 outline-none transition hover:bg-slate-800/80 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

