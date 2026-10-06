import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Logo from './Logo'
import { useLandingContent } from '../lib/landingContent'

export default function Footer() {
  const { supportEmail: SUPPORT_EMAIL } = useLandingContent()

  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Logo light />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Real-time family safety, built with privacy at its core. Made in Nepal.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" /> {SUPPORT_EMAIL}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Trust</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="#privacy" className="hover:text-white transition-colors">Safety &amp; Privacy</a></li>
              <li><a href="#safe-space" className="hover:text-white transition-colors">Safe Space Support</a></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Language</p>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="cursor-pointer hover:text-white transition-colors">English</li>
              <li className="cursor-pointer hover:text-white transition-colors">नेपाली</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Safey Live. All rights reserved.</p>
          <p>Made with care in Nepal 🇳🇵</p>
        </div>
      </div>
    </footer>
  )
}
