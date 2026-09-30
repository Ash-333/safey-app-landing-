import { Building2, BookOpen, Navigation, PhoneCall, HeartHandshake } from 'lucide-react'

const CARDS = [
  {
    icon: BookOpen,
    title: 'Understand your rights',
    description:
      'Learn about your legal rights and digital safety through short, guided resources built specifically for students.',
  },
  {
    icon: HeartHandshake,
    title: 'Private wellness journal',
    description:
      'Mood check-ins and an end-to-end encrypted personal journal, invisible to guardians, and to us, by design.',
  },
  {
    icon: PhoneCall,
    title: 'National support helpline',
    description:
      'One tap connects to certified counselors (1145), available 24/7, completely free and anonymous.',
  },
  {
    icon: Navigation,
    title: 'Verified hospitals & police',
    description:
      'Search real, verified hospitals and police stations nearby, with live walking or driving directions and ETA, not a generic map pin.',
  },
]

export default function SafeSpaceSupport() {
  return (
    <section id="safe-space" className="bg-white pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <Building2 className="h-3.5 w-3.5" /> Safe Space Support
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Real help, for when it's genuinely needed
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            A section of the app that belongs to the student alone, for knowing your rights, finding
            real support, or knowing exactly where the nearest verified hospital or police station is.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl border border-black/5 bg-brand-50/40 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
