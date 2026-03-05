import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

export const Experience = () => {
  return (
    <section id="experience" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Experience
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            where i&apos;ve been recently
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-indigo-500/40 via-slate-600/50 to-transparent md:left-4" />
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative ml-8 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 shadow-lg shadow-black/50 backdrop-blur-xl md:ml-10"
        >
          <div className="absolute -left-8 top-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-500/80 bg-slate-950/95 text-indigo-200 shadow-lg shadow-indigo-500/40 md:-left-10">
            <FiBriefcase className="h-5 w-5" />
          </div>

          <header className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Software Developer</p>
              <h3 className="text-sm font-semibold text-slate-50">Tata Consultancy Services (TCS)</h3>
            </div>
            <p className="text-xs text-slate-400">Backend · Deployments · Application Health</p>
          </header>

          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            Working on backend systems, deployments, and application improvements—owning the full
            lifecycle from implementation and code review to performance tuning and production
            monitoring.
          </p>

          <ul className="mt-3 grid gap-2 text-[11px] text-slate-300 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Implementing and maintaining REST APIs and backend services for enterprise apps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Owning deployment workflows, environment configurations, and change management.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span>Profiling performance bottlenecks and improving stability and response times.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              <span>Collaborating with cross‑functional teams to continuously improve application UX.</span>
            </li>
          </ul>
        </motion.article>
      </div>
    </section>
  )
}

