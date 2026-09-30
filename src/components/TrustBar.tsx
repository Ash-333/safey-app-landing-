import { Languages, Lock, MapPinned, PhoneCall } from 'lucide-react'

const ITEMS = [
  { icon: PhoneCall, label: '5 emergency contacts, one tap' },
  { icon: MapPinned, label: 'Optimized maps for Nepal' },
  { icon: Lock, label: 'End-to-end encrypted' },
  { icon: Languages, label: 'English & नेपाली' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-black/5 bg-white/70 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-5 sm:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-sm font-medium text-ink-700">
            <Icon className="h-4 w-4 text-brand-600" />
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
