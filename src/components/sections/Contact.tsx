import { FormEvent, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

type Status = 'idle' | 'sending' | 'success' | 'error'

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setStatus('error')
      // eslint-disable-next-line no-console
      console.error('EmailJS environment variables are not configured.')
      return
    }

    setStatus('sending')

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus('success')
          formRef.current?.reset()
          setTimeout(() => setStatus('idle'), 4000)
        },
        () => {
          setStatus('error')
          setTimeout(() => setStatus('idle'), 4000)
        },
      )
  }

  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Contact
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            let&apos;s build something together
          </p>
        </div>

        <div className="flex items-center gap-3 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent bg-slate-950/90 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-indigo-500/80 hover:bg-slate-900 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent bg-slate-950/90 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-sky-500/80 hover:bg-slate-900 hover:text-sky-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-transparent bg-slate-950/90 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-pink-500/80 hover:bg-slate-900 hover:text-pink-300"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ayan@example.com"
            className="rounded-full border border-transparent bg-slate-950/90 p-2 text-slate-300 shadow-sm shadow-black/40 transition hover:border-emerald-500/80 hover:bg-slate-900 hover:text-emerald-300"
          >
            <FiMail />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" as const }}
        className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 text-sm text-slate-200 shadow-lg shadow-black/50 backdrop-blur-xl"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-indigo-400/80 focus:ring-2 focus:ring-indigo-500/60"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-indigo-400/80 focus:ring-2 focus:ring-indigo-500/60"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-indigo-400/80 focus:ring-2 focus:ring-indigo-500/60"
              placeholder="Tell me about your project, idea, or collaboration."
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 outline-none transition hover:shadow-glow-primary disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiSend className="h-4 w-4" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <span className="text-xs text-emerald-400">
                Message sent successfully! I&apos;ll get back to you soon.
              </span>
            )}
            {status === 'error' && (
              <span className="text-xs text-rose-400">
                Something went wrong. Check EmailJS config or try again later.
              </span>
            )}
          </div>
        </form>

        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/90 p-4 text-xs text-slate-300 shadow-lg shadow-black/50 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            preferred projects
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
              <span>End‑to‑end MERN applications with clear business goals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>DevOps automation, CI/CD pipelines, and cloud deployments.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>AI‑driven features or integrations that impact users directly.</span>
            </li>
          </ul>
          <p className="mt-2 text-[11px] text-slate-400">
            Configure EmailJS by adding{' '}
            <span className="font-mono text-slate-300">
              VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
            </span>{' '}
            to your `.env` file in the project root.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

