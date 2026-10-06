import { Languages, MapPin, ShieldCheck, Wallet } from 'lucide-react'

const ITEMS = [
  {
    icon: Wallet,
    title: 'Local payment rails',
    description: 'Pay with Khalti, eSewa, or Fonepay QR. No foreign card required.',
  },
  {
    icon: MapPin,
    title: 'Local maps, not generic tiles',
    description: 'Safe Zones, Safe Walk routing, and nearby-facility search all run on maps built for Nepal.',
  },
  {
    icon: Languages,
    title: 'Fully bilingual',
    description: 'Every screen, alert, and notification is available in both English and नेपाली.',
  },
  {
    icon: ShieldCheck,
    title: 'Human-reviewed verification',
    description: 'Identity checks and payment proofs are reviewed by a real person, not left to a black box.',
  },
]

export default function BuiltForNepal() {
  return (
    <section className="border-y border-black/5 bg-ink-900 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-400">🇳🇵 Not an adapted template</span>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Built for Nepal from day one</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <Icon className="h-5 w-5 text-accent-400" />
              <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
