import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const QUESTIONS = [
  {
    q: "Can I read my child's private messages or wellbeing journal?",
    a: "No, never. Personal chats, the wellbeing journal, and support chat conversations are end-to-end encrypted and are never visible to guardians, no matter what plan you're on.",
  },
  {
    q: 'What happens when my child presses SOS?',
    a: 'Every linked guardian is notified instantly with their exact GPS location, and the app automatically calls through up to 5 emergency contacts in order until someone picks up. A Silent SOS does the same thing with no sound or screen flash, for situations where staying quiet matters.',
  },
  {
    q: 'What if someone forces my child to cancel an SOS?',
    a: "Canceling an SOS requires a PIN, so whoever is holding the phone can't silently switch it off. There's also a separate duress PIN. Entering it looks like the alert was canceled, while guardians stay quietly notified in the background.",
  },
  {
    q: "Does my child know they're being tracked?",
    a: "Yes, always. Before any device is linked, your child sees the exact list of what will be shared and has to consent to it. There's no hidden or silent tracking.",
  },
  {
    q: 'Can more than one parent or guardian be linked to a child?',
    a: 'Yes, up to 4 guardians can be linked to a single student account, each with their own login and their own view. Families with more than one child can also switch between them from a single dashboard.',
  },
  {
    q: 'What does Safe Walk actually show me?',
    a: "When your child starts a Safe Walk, you see the same live map they do: their real walking route, updating in real time, with the remaining distance shrinking as they get closer to their destination. If they don't arrive in time, you're alerted automatically.",
  },
  {
    q: 'How much does it cost?',
    a: 'Safey Live is free to use. Premium, which unlocks unlimited Safe Zones, extended location history, and every learning course, is also free during our launch period in Nepal.',
  },
  {
    q: 'What languages are supported?',
    a: 'The app is fully available in both English and नेपाली, and you can switch at any time from Settings.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 pb-12 pt-24 sm:px-8">
      <div className="text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">FAQ</span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">Questions parents actually ask</h2>
      </div>

      <div className="mt-12 space-y-3">
        {QUESTIONS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-black/5 bg-white">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-ink-900 sm:text-base">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-ink-700 sm:text-base">{item.a}</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
