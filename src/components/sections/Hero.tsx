import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import { HeroCanvas } from '../hero/HeroCanvas'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const Hero = () => {
  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0px', '-60px'])
  const parallaxYSoft = useTransform(scrollYProgress, [0, 1], ['0px', '-30px'])

  return (
    <section
      id="home"
      className="relative grid gap-10 pt-10 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)]"
    >
      <motion.div
        style={{ y: parallaxYSoft }}
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-500/40 via-cyan-400/30 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-500/35 via-violet-500/30 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: parallaxYSoft }}
        className="pointer-events-none absolute inset-x-10 bottom-0 -z-10 h-40 rounded-[3rem] bg-gradient-to-r from-indigo-500/20 via-sky-500/15 to-fuchsia-500/20 blur-3xl"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-xs text-slate-300 shadow-md shadow-black/40 backdrop-blur-xl">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-[10px] font-semibold text-white">
            ●
          </span>
          <span className="font-medium text-slate-200">Available for freelance & remote roles</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-tr from-indigo-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
            Ayan Biswas
          </span>
          .
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="bg-gradient-to-r from-indigo-300 via-sky-300 to-fuchsia-300 bg-clip-text text-lg font-semibold uppercase tracking-[0.28em] text-transparent sm:text-xs"
        >
          MERN Stack Developer · DevOps Engineer · AI Enthusiast
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          I build <span className="font-semibold text-slate-100">scalable full‑stack applications</span>{' '}
          and obsess over <span className="font-semibold text-slate-100">DevOps automation</span> and{' '}
          <span className="font-semibold text-slate-100">AI‑driven experiences</span>. From pixel‑perfect
          frontends to resilient cloud‑native backends, I love shipping things that feel fast, reliable, and delightful.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-3 text-sm"
        >
          <button
            onClick={() => {
              const el = document.getElementById('projects')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 outline-none transition hover:shadow-glow-primary focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            View Projects
            <FiArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-2.5 text-sm font-medium text-slate-100 outline-none transition hover:border-indigo-400/80 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <FiDownload className="h-4 w-4" />
            Download Resume
          </a>

          <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm font-medium text-indigo-300 outline-none transition hover:border-indigo-400/80 hover:bg-indigo-500/10 hover:text-indigo-100 focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <FiMail className="h-4 w-4" />
            Contact Me
          </button>
        </motion.div>

        <motion.dl
          variants={itemVariants}
          className="grid gap-3 pt-4 text-xs text-slate-300 sm:grid-cols-3"
        >
          <div className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3 shadow-md shadow-black/50 backdrop-blur-xl transition hover:border-indigo-400/80 hover:shadow-glow-soft">
            <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Experience</dt>
            <dd className="mt-1 text-base font-semibold text-slate-50">
              3+ <span className="text-xs font-medium text-slate-400">years coding</span>
            </dd>
          </div>
          <div className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3 shadow-md shadow-black/50 backdrop-blur-xl transition hover:border-sky-400/80 hover:shadow-glow-soft">
            <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Projects</dt>
            <dd className="mt-1 text-base font-semibold text-slate-50">
              15+ <span className="text-xs font-medium text-slate-400">full‑stack builds</span>
            </dd>
          </div>
          <div className="group rounded-2xl border border-slate-800/80 bg-slate-950/70 p-3 shadow-md shadow-black/50 backdrop-blur-xl transition hover:border-fuchsia-400/80 hover:shadow-glow-soft">
            <dt className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Focus</dt>
            <dd className="mt-1 text-base font-semibold text-slate-50">
              MERN · DevOps · AI
            </dd>
          </div>
        </motion.dl>
      </motion.div>

      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="relative"
        >
          <HeroCanvas />

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-6 top-6 h-16 w-16 animate-float-slow rounded-3xl border border-slate-500/40 bg-slate-900/80 shadow-lg shadow-sky-500/40 backdrop-blur-xl">
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-sky-300">
                React
              </span>
            </div>
            <div className="absolute -right-4 top-20 h-14 w-14 animate-float-medium rounded-3xl border border-slate-500/40 bg-slate-900/80 shadow-lg shadow-emerald-500/40 backdrop-blur-xl">
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-emerald-300">
                Node
              </span>
            </div>
            <div className="absolute left-4 bottom-8 h-12 w-12 animate-float-medium rounded-3xl border border-slate-500/40 bg-slate-900/80 shadow-lg shadow-sky-400/40 backdrop-blur-xl">
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-sky-200">
                Docker
              </span>
            </div>
            <div className="absolute -right-2 bottom-4 h-14 w-14 animate-float-slow rounded-3xl border border-slate-500/40 bg-slate-900/80 shadow-lg shadow-fuchsia-500/40 backdrop-blur-xl">
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-fuchsia-300">
                AI
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

