import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../../data/projects'

const filters = ['All', 'Full Stack', 'DevOps', 'Tools'] as const
type Filter = (typeof filters)[number]

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.08 + i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
}

export const Projects = () => {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Projects
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            a snapshot of what i&apos;ve built
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1.5 font-medium transition ${
                filter === f
                  ? 'border-indigo-400/80 bg-indigo-500/15 text-indigo-100 shadow shadow-indigo-500/40'
                  : 'border-slate-700/80 bg-slate-900/80 text-slate-300 hover:border-indigo-400/60 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <AnimatePresence>
          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 shadow-lg shadow-black/50 backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-indigo-500/20 via-sky-500/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative grid gap-4 p-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div className="flex flex-col justify-between gap-3">
                  <header className="space-y-1.5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
                      {project.category}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                  </header>

                  <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-200">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/90 px-2.5 py-1 shadow-sm shadow-black/40"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-indigo-400 to-fuchsia-400" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/90 px-3 py-1.5 text-slate-200 outline-none transition hover:border-indigo-400/80 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <FiGithub className="h-3.5 w-3.5" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-transparent bg-gradient-to-r from-indigo-500 to-sky-500 px-3 py-1.5 text-slate-50 shadow shadow-indigo-500/50 outline-none transition hover:from-indigo-400 hover:to-sky-400 focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                      <FiExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(129,140,248,0.28),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_50%_120%,rgba(244,114,182,0.26),transparent_55%)] opacity-80" />
                  <div className="relative flex h-full flex-col justify-between p-3 text-[11px] text-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        In production
                      </span>
                      <span className="rounded-full bg-slate-950/80 px-2 py-1 text-[10px] text-slate-400">
                        {project.category}
                      </span>
                    </div>
                    <p className="mt-3 text-xs font-medium text-slate-50">
                      Designed for real‑world usage, observability, and long‑term maintainability.
                    </p>
                    <div className="mt-4 flex items-center justify-between text-[10px] text-slate-300">
                      <div>
                        <p className="text-slate-400">Key focus</p>
                        <p className="font-semibold">Performance · Reliability · DX</p>
                      </div>
                      <div className="flex -space-x-1.5">
                        <span className="h-6 w-6 rounded-full border border-slate-800 bg-indigo-500/90" />
                        <span className="h-6 w-6 rounded-full border border-slate-800 bg-sky-400/90" />
                        <span className="h-6 w-6 rounded-full border border-slate-800 bg-fuchsia-500/90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

