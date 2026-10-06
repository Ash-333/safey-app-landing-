import { useState } from 'react'
import { Mail } from 'lucide-react'
import { API_BASE_URL, useLandingContent } from '../lib/landingContent'

export default function ContactSection() {
  const { supportEmail: SUPPORT_EMAIL } = useLandingContent()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE_URL}/api/landing/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">Contact us</span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">We're here to help</h2>
        <p className="mt-4 text-lg text-ink-700">
          Questions about Safey Live, a billing issue, or feedback on the app, send it over and a
          real person will get back to you.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-ink-900">Email support</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              For account help, billing, or general questions.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-black/5 bg-white p-8 shadow-sm lg:col-span-3">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-ink-900">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-semibold text-ink-900">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-semibold text-ink-900">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-colors hover:bg-accent-600 disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="text-sm font-medium text-emerald-600">Thanks, your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600">
              Something went wrong. Please try again, or email us directly at {SUPPORT_EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
