import { Check } from 'lucide-react'
import { useLandingContent } from '../lib/landingContent'

const FREE_FEATURES = [
  'Live location & Safe Walk',
  'One-tap SOS + Silent SOS',
  '1 Safe Zone per child',
  'Standard location history',
  'Core safety learning courses',
]

const PREMIUM_FEATURES = [
  'Everything in Free',
  'Unlimited Safe Zones per child',
  'Extended location history',
  'All learning courses unlocked',
  'Priority SOS & safety alerts',
]

export default function Pricing() {
  const { downloadUrl } = useLandingContent()

  return (
    <section id="pricing" className="bg-ink-900 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-400">Pricing</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Simple, honest pricing</h2>
          <p className="mt-4 text-lg text-white/70">Premium is completely free during our launch in Nepal.</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-lg font-bold text-white">Free</h3>
            <p className="mt-1 text-sm text-white/60">Everything you need to get started.</p>
            <p className="mt-5 text-4xl font-extrabold text-white">
              Rs 0<span className="text-base font-medium text-white/50">/month</span>
            </p>
            <ul className="mt-6 space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={downloadUrl}
              className="mt-8 block rounded-full border border-white/20 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Download
            </a>
          </div>

          <div className="relative rounded-3xl border-2 border-accent-500 bg-gradient-to-b from-accent-500/10 to-transparent p-8">
            <span className="absolute -top-3 left-8 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white">
              FREE FOR NOW
            </span>
            <h3 className="text-lg font-bold text-white">Premium</h3>
            <p className="mt-1 text-sm text-white/60">Full protection for the whole family.</p>
            <p className="mt-5 text-4xl font-extrabold text-white">
              <span className="mr-2 text-xl font-medium text-white/40 line-through">Rs 100</span>Rs 0
              <span className="text-base font-medium text-white/50">/month</span>
            </p>
            <ul className="mt-6 space-y-3">
              {PREMIUM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" /> {f}
                </li>
              ))}
            </ul>
            <a
              href={downloadUrl}
              className="mt-8 block rounded-full bg-accent-500 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Activate Free Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
