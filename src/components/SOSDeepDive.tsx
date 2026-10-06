import { KeyRound, PhoneCall, ShieldAlert, Sparkles, VolumeX } from 'lucide-react'
import SosSequence from './SosSequence'

const STEPS = [
  {
    icon: ShieldAlert,
    title: 'A short countdown, always cancelable',
    description:
      'Pressing SOS starts a brief countdown before anything is sent, enough time to stop an accidental press, not enough to matter in a real one.',
  },
  {
    icon: PhoneCall,
    title: 'Guardians alerted, contacts called',
    description:
      'Every linked guardian gets an instant alert with exact GPS. In parallel, the app calls through up to 5 emergency contacts in order until someone picks up.',
  },
  {
    icon: KeyRound,
    title: 'A PIN to cancel, and a duress PIN',
    description:
      "Canceling requires a PIN, so whoever is holding the phone can't silently shut it off. A second, different duress PIN appears to cancel the alert while guardians stay quietly notified, for situations where someone is forced to make it stop.",
  },
]

export default function SOSDeepDive() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold text-accent-600">
            <ShieldAlert className="h-3.5 w-3.5" /> SOS, in detail
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Designed for the worst-case, not the demo
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Most safety apps stop at "send a location." SOS on Safey Live is built around the
            situations where that alone isn't enough.
          </p>

          <div className="mt-8 space-y-6">
            {STEPS.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-900">{title}</h3>
                  <p className="mt-1 text-sm text-ink-700">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/5 px-4 py-2 text-xs font-semibold text-ink-700">
              <VolumeX className="h-3.5 w-3.5" /> Silent SOS: no sound, no flash
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/5 px-4 py-2 text-xs font-semibold text-ink-700">
              <Sparkles className="h-3.5 w-3.5" /> Drill mode: practice, risk-free
            </span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SosSequence />
        </div>
      </div>
    </section>
  )
}
