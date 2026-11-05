import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useLandingContent } from '../lib/landingContent'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#what-is-safey-live', label: 'About Us' },
  { href: '#features', label: 'Features' },
  { href: '#privacy', label: 'Safety & Privacy' },
  { href: '#learning', label: 'Learning & Wellness' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { downloadUrl } = useLandingContent()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    )

    // Treats a thin band just under the sticky navbar as "active" — only
    // one section sits in that band at a time, so this naturally avoids the
    // multiple-simultaneous-matches problem a plain viewport-visibility
    // check would have.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-pink-100/85 backdrop-blur-md shadow-sm' : 'bg-pink-50'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-1 text-sm font-medium transition-colors hover:text-accent-600 ${
                activeHref === link.href ? 'border-accent-500 text-accent-600' : 'border-transparent text-ink-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={downloadUrl}
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] hover:bg-accent-600"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent-50 hover:text-accent-700 ${
                  activeHref === link.href ? 'bg-accent-50 text-accent-700' : 'text-ink-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={downloadUrl}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent-500 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
