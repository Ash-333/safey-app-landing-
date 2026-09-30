import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from './Logo'
import Footer from './Footer'

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/"><Logo /></Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-brand-600">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <h1 className="text-3xl font-extrabold text-ink-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-ink-500">Last updated {updated}</p>
        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink-700 sm:text-base">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}
