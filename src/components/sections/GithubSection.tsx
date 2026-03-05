import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const GITHUB_USERNAME = 'Ayanbiswas123'
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`

export const GithubSection = () => {
  const [statsImageError, setStatsImageError] = useState(false)
  const [langsImageError, setLangsImageError] = useState(false)

  return (
    <section id="github" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            GitHub
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            open source footprint & stats
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="grid gap-4 md:grid-cols-[1.4fr_minmax(0,1fr)]"
      >
        <article className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 shadow-lg shadow-black/50 backdrop-blur-xl">
          <header className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/90 text-xl text-slate-100">
                <FaGithub />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">GitHub profile</p>
                <p className="text-sm font-semibold text-slate-50">github.com/{GITHUB_USERNAME}</p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Full-Stack Developer · SpringBoot · MERN · Azure · MySQL · MongoDB
                </p>
              </div>
            </div>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 outline-none transition hover:border-indigo-400/80 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              View profile
            </a>
          </header>

          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Repositories
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-50">5</p>
              <p className="text-[11px] text-slate-400">Public repos on GitHub.</p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-semibold text-slate-50">MERN · Spring Boot</p>
              <p className="text-[11px] text-slate-400">Web & backend development.</p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Pinned
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">LMS · Journal App</p>
              <p className="text-[11px] text-slate-400">JavaScript, Java, React.</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Live stats from GitHub
            </p>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/80 transition hover:border-indigo-400/50"
            >
              {statsImageError ? (
                <div className="flex min-h-[120px] items-center justify-center rounded-xl bg-slate-900/80 px-4 py-6 text-center text-xs text-slate-400">
                  Stats temporarily unavailable. Click to open your GitHub profile.
                </div>
              ) : (
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=react&hide_border=true&bg_color=0f172a&title_color=94a3b8&icon_color=6366f1`}
                  alt="GitHub stats for Ayanbiswas123"
                  className="h-auto w-full object-contain"
                  onError={() => setStatsImageError(true)}
                />
              )}
            </a>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/80 transition hover:border-indigo-400/50"
            >
              {langsImageError ? (
                <div className="flex min-h-[80px] items-center justify-center rounded-xl bg-slate-900/80 px-4 py-4 text-center text-xs text-slate-400">
                  Languages unavailable. Click to open profile.
                </div>
              ) : (
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=react&hide_border=true&bg_color=0f172a&title_color=94a3b8`}
                  alt="Top languages for Ayanbiswas123"
                  className="h-auto w-full object-contain"
                  onError={() => setLangsImageError(true)}
                />
              )}
            </a>
          </div>
        </article>

        <article className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 text-xs text-slate-300 shadow-lg shadow-black/50 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            languages & tools (from profile)
          </p>
          <ul className="space-y-2">
            <li className="flex items-center justify-between gap-2">
              <span>JavaScript · TypeScript</span>
              <span className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[10px] text-slate-300">
                frontend & full‑stack
              </span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span>Node.js · React · GraphQL</span>
              <span className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[10px] text-slate-300">
                MERN
              </span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span>MongoDB · PostgreSQL · Redis</span>
              <span className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[10px] text-slate-300">
                data
              </span>
            </li>
            <li className="flex items-center justify-between gap-2">
              <span>Go · Spring Boot · Next.js</span>
              <span className="rounded-full bg-slate-800/90 px-2 py-0.5 text-[10px] text-slate-300">
                learning
              </span>
            </li>
          </ul>
          <p className="mt-2 text-[11px] text-slate-400">
            Stats above load from{' '}
            <a
              href="https://github.com/anuraghazra/github-readme-stats"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:underline"
            >
              github-readme-stats
            </a>
            ; click cards to open your profile.
          </p>
        </article>
      </motion.div>
    </section>
  )
}

