import React from 'react'
import { motion } from 'framer-motion'
import { FiCpu, FiDatabase, FiLayers, FiTool } from 'react-icons/fi'
import { SkillsOrbit } from '../skills/SkillsOrbit'

type SkillCategory = {
  title: string
  icon: JSX.Element
  accent: string
  skills: { name: string; level: number }[]
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <FiLayers className="h-5 w-5" />,
    accent: 'Interfaces that feel fast and polished.',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ESNext)', level: 88 },
      { name: 'TypeScript', level: 82 },
      { name: 'Tailwind CSS', level: 86 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: <FiDatabase className="h-5 w-5" />,
    accent: 'APIs that scale and stay maintainable.',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 86 },
      { name: 'MongoDB', level: 84 },
      { name: 'Mongoose', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <FiTool className="h-5 w-5" />,
    accent: 'Shipping reliably with automation-first workflows.',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'CI/CD', level: 80 },
      { name: 'Linux', level: 78 },
      { name: 'Shell scripting', level: 76 },
    ],
  },
  {
    title: 'Currently Exploring',
    icon: <FiCpu className="h-5 w-5" />,
    accent: 'Pushing into the next wave of tech.',
    skills: [
      { name: 'Artificial Intelligence', level: 65 },
      { name: 'Machine Learning', level: 60 },
      { name: 'Cloud Computing', level: 58 },
    ],
  },
]

const orbitLegend = [
  { label: 'Frontend', color: 'bg-cyan-400' },
  { label: 'Backend', color: 'bg-indigo-500' },
  { label: 'DevOps & Tools', color: 'bg-emerald-400' },
  { label: 'Learning', color: 'bg-fuchsia-400' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.08 + i * 0.04, duration: 0.4, ease: 'easeOut' },
  }),
}

export const Skills = () => {
  return (
    <section id="skills" className="space-y-8">
      {/* NASA-style layout: left sidebar + right 3D view */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid min-h-[480px] gap-4 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/95 shadow-xl shadow-black/40 backdrop-blur-xl md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:min-h-[520px]"
      >
        {/* Left: Featured / legend / controls (like NASA sidebar) */}
        <div className="flex flex-col justify-between gap-6 border-r border-slate-800/60 bg-slate-950/80 p-5 md:p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
                Skills
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                tools i reach for every day
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Each orbit is a category. Hover a planet to see the skill; drag to rotate the view, scroll to zoom.
            </p>
            <div className="space-y-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Orbits
              </p>
              <ul className="space-y-2">
                {orbitLegend.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color} shadow-md shadow-black/30`} />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-[11px] text-slate-500">
            <span className="font-medium text-slate-400">Controls:</span> Drag to rotate · Scroll to zoom
          </div>
        </div>

        {/* Right: 3D solar system view (main display) */}
        <div className="relative min-h-[420px] flex-1 lg:min-h-[520px]">
          <SkillsOrbit className="absolute inset-0 h-full w-full" />
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category, idx) => (
          <motion.div
            key={category.title}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 shadow-lg shadow-black/50 backdrop-blur-xl transition hover:border-indigo-400/80 hover:shadow-glow-soft"
          >
            <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-indigo-500/15 via-sky-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-3 py-1 text-[11px] text-slate-300">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-slate-100 shadow-md shadow-indigo-500/40">
                    {category.icon}
                  </span>
                  <span className="font-semibold">{category.title}</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">{category.accent}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-[11px]">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/80">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

