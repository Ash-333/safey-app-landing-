import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  AlertTriangle,
  BookOpenCheck,
  Check,
  Footprints,
  GraduationCap,
  HeartHandshake,
  History,
  WifiOff,
  MapPinned,
  PhoneOff,
  QrCode,
  ShieldAlert,
  Sparkles,
  Users,
} from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type Category = {
  key: string
  label: string
  intro: string
  features: Feature[]
}

const CATEGORIES: Category[] = [
  {
    key: 'location',
    label: 'Location & Safe Walk',
    intro: 'Live location tracking and geofenced safe zones, always on.',
    features: [
      {
        icon: MapPinned,
        title: 'Live location tracking',
        description:
          'Guardians see exactly where your child is in real time, on an actual map with real place names, not just a coordinate that means nothing.',
      },
      {
        icon: Footprints,
        title: 'Safe Walk, live',
        description:
          'Start a guided walk and guardians see the exact same road-following route, shrinking in real time as your child gets closer, with an automatic overdue alert if they don\'t arrive.',
      },
      {
        icon: ShieldAlert,
        title: 'Geofenced Safe Zones',
        description:
          'Draw a geofence around home, school, or a tutor\'s place on the map. Get notified the instant it\'s entered or left, no manual check-ins needed.',
      },
      {
        icon: History,
        title: 'Location history',
        description:
          'See where your child has actually been, with real place names and visit durations, not just raw coordinates.',
      },
    ],
  },
  {
    key: 'emergency',
    label: 'Emergency & SOS',
    intro: 'Built for the ten seconds that actually matter.',
    features: [
      {
        icon: ShieldAlert,
        title: 'One-tap SOS',
        description:
          'A short countdown, then every linked guardian gets an instant alert with exact GPS, while the app auto-calls through up to 5 emergency contacts, in order, until someone answers.',
      },
      {
        icon: AlertTriangle,
        title: 'Silent SOS',
        description:
          'The same alert, with zero sound or screen flash, for the moments when staying quiet is the whole point.',
      },
      {
        icon: Sparkles,
        title: 'Drill mode',
        description:
          'Practice the entire flow, cancel PIN included, without ever alerting a real guardian, so it\'s second nature before it\'s ever needed.',
      },
      {
        icon: WifiOff,
        title: 'Offline SMS Fallback',
        description:
          'If there\'s no active internet connection when an SOS is triggered, the app automatically falls back to sending direct emergency SMS alerts to your guardians.',
      },
    ],
  },
  {
    key: 'trust',
    label: 'Trust & Family',
    intro: 'Real oversight, real verification, never guesswork.',
    features: [
      {
        icon: QrCode,
        title: 'Consent-based linking',
        description:
          "Pair accounts with a QR code in seconds. Your child reviews, and approves, exactly what's shared before any device connects.",
      },
      {
        icon: Users,
        title: 'Multiple guardians, one child',
        description:
          'Up to 4 guardians can be linked to a single student (parents, an aunt, a family friend), each with their own account and their own view.',
      },
      {
        icon: Check,
        title: 'Identity verification (KYC)',
        description:
          'Parent and student accounts complete a light identity check, reviewed by a real person, to keep the whole platform trustworthy.',
      },
      {
        icon: MapPinned,
        title: 'Switch between children',
        description:
          'Families with more than one child linked can flip between them from a single guardian dashboard. No separate logins.',
      },
    ],
  },
  {
    key: 'learning',
    label: 'Learning & Wellness',
    intro: 'Skills for the world outside, a space that\'s truly theirs inside.',
    features: [
      {
        icon: GraduationCap,
        title: 'Safety courses',
        description:
          'Short guided video lessons on self-defense, digital safety, and legal rights, with real progress tracking, not a checkbox.',
      },
      {
        icon: HeartHandshake,
        title: 'Private wellness journal',
        description:
          'Mood check-ins and an end-to-end encrypted personal journal, invisible to guardians, and to us, by design.',
      },
      {
        icon: BookOpenCheck,
        title: 'National support helpline',
        description:
          'One tap connects to certified counselors, available 24/7, completely free and anonymous. No account, no history, no questions asked.',
      },
      {
        icon: PhoneOff,
        title: 'Fake call exit',
        description:
          'Trigger a discreet fake call to your phone to exit an uncomfortable situation on the spot.',
      },
    ],
  },
]

export default function Features() {
  const [active, setActive] = useState(CATEGORIES[0].key)
  const category = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0]

  return (
    <section id="features" className="mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">Everything in one app</span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Built for the moments that matter most
        </h2>
        <p className="mt-4 text-lg text-ink-700">
          From a walk home after dark to a quiet night when they just need someone to talk to,
          Safey Live covers the whole picture, not just the location dot.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === c.key
                ? 'bg-ink-900 text-white shadow-sm'
                : 'bg-white text-ink-700 hover:bg-brand-50 hover:text-brand-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {category.features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
