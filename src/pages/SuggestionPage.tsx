import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Lightbulb } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') || 'https://api.safey.live'

export default function SuggestionPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${API_BASE_URL}/api/landing/suggestions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, title, description }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setName('')
      setEmail('')
      setTitle('')
      setDescription('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent-600">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-600">
            <Lightbulb className="h-3.5 w-3.5" /> Suggest a feature
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">What are your suggestions?</h1>
          <p className="mt-4 text-lg text-ink-700">
            Missing something that would make your family safer, or an idea that would make Safey
            Live better? Tell us, every suggestion gets read.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
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
            <label htmlFor="title" className="text-sm font-semibold text-ink-900">
              Feature title
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              placeholder="A short name for your idea"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm font-semibold text-ink-900">
              Tell us more
            </label>
            <textarea
              id="description"
              required
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-accent-500"
              placeholder="What would this feature do, and why would it help?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-colors hover:bg-accent-600 disabled:opacity-60 sm:w-auto"
          >
            {status === 'sending' ? 'Sending…' : 'Send suggestion'}
          </button>

          {status === 'sent' && (
            <p className="text-sm font-medium text-emerald-600">Thanks, your suggestion has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600">Something went wrong. Please try again.</p>
          )}
        </form>
      </main>

      <Footer />
    </div>
  )
}
