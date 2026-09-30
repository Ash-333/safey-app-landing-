import { QrCode, ShieldCheck, UserCheck, UserPlus } from 'lucide-react'

const STEPS = [
  {
    icon: UserPlus,
    title: 'Create your account',
    description: 'Parent signs up and completes a quick identity check. Takes about two minutes.',
  },
  {
    icon: UserCheck,
    title: 'Your child signs up too',
    description: 'They get their own account, their own app experience, and their own privacy.',
  },
  {
    icon: QrCode,
    title: 'Scan a QR code to link',
    description: "Your child generates a code from their profile. You scan it, nothing more to type.",
  },
  {
    icon: ShieldCheck,
    title: "They approve what's shared",
    description: 'Your child reviews the exact list of what you\'ll see, and consents before anything connects.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">How it works</span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">Connected in under five minutes</h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(({ icon: Icon, title, description }, i) => (
          <div key={title} className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-900 text-white">
              <Icon className="h-6 w-6" />
            </div>
            <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-5 text-base font-bold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm text-ink-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
