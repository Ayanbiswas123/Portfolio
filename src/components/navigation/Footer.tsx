import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} <span className="text-slate-100">Ayan Biswas</span>. Built
          with <span className="text-indigo-400">React</span> &amp; <span className="text-sky-400">Tailwind CSS</span>.
        </p>

        <div className="flex items-center gap-3 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent bg-slate-900/80 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-indigo-500/70 hover:bg-slate-900 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent bg-slate-900/80 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-sky-500/70 hover:bg-slate-900 hover:text-sky-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent bg-slate-900/80 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-pink-500/70 hover:bg-slate-900 hover:text-pink-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ayan@example.com"
            className="rounded-full border border-transparent bg-slate-900/80 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-emerald-500/70 hover:bg-slate-900 hover:text-emerald-300"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}

