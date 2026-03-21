import { motion } from 'framer-motion'
import { FiMapPin, FiUser } from 'react-icons/fi'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
}

export const About = () => {
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            About
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            who&apos;s behind the code
          </p>
        </div>

        <div className="hidden items-center gap-3 rounded-full border border-slate-800/80 bg-slate-950/80 px-3 py-2 text-xs text-slate-300 shadow-md shadow-black/50 sm:inline-flex">
          <FiMapPin className="h-3.5 w-3.5 text-indigo-400" />
          <span>Based in India · Open to remote</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="space-y-4 rounded-2xl border border-slate-800/80 bg-section-gradient p-5 text-sm leading-relaxed text-slate-300 shadow-lg shadow-black/40 backdrop-blur-xl"
        >
          <p>
            I&apos;m a <span className="font-semibold text-slate-100">BCA graduate</span> and{' '}
            <span className="font-semibold text-slate-100">MERN stack developer</span> focusing on
            building clean, maintainable products with solid engineering foundations.
          </p>
          <p>
            Over the past few years, I&apos;ve worked on{' '}
            <span className="font-semibold text-slate-100">LMS platforms</span>,{' '}
            <span className="font-semibold text-slate-100">secure authentication systems</span>, and{' '}
            <span className="font-semibold text-slate-100">DevOps pipelines</span>—from designing
            APIs to deploying scalable infrastructure.
          </p>
          <p>
            I&apos;m deeply interested in <span className="font-semibold text-slate-100">DevOps</span>{' '}
            and <span className="font-semibold text-slate-100">AI</span>, exploring how automation
            and intelligent systems can make development faster, safer, and more impactful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-lg shadow-black/40 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(129,140,248,0.18),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(236,72,153,0.18),transparent_55%)]" />
            <div className="relative flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/90 text-2xl text-indigo-300 shadow-md shadow-indigo-500/40">
                <FiUser className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  MERN · DevOps · AI
                </p>
                <p className="text-sm font-semibold text-slate-50">MERN Stack Developer</p>
                <p className="text-xs text-slate-400">Turning ideas into reliable, shipped code.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            {[
              { label: 'Years of coding', value: '3+', accent: 'Experience across stack' },
              { label: 'Projects shipped', value: '15+', accent: 'Production‑ready builds' },
              { label: 'Tech used', value: '20+', accent: 'Frameworks & tools' },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 shadow-md shadow-black/40 backdrop-blur-xl"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-50">{item.value}</p>
                <p className="text-[11px] text-slate-400">{item.accent}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

