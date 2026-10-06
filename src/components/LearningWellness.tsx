import { BookOpenCheck, HeartPulse, MessageCircleHeart, ShieldHalf, Smile, Sparkles } from 'lucide-react'

export default function LearningWellness() {
  return (
    <section id="learning" className="bg-brand-50/50 pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">More than a tracker</span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Learning to stay safe, and a space to just be okay
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-white">
              <BookOpenCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink-900">Learn to stay safe</h3>
            <p className="mt-2 text-sm text-ink-700">
              Short, guided video lessons students actually finish, with real progress tracking, not a checkbox.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-700">
              <li className="flex items-center gap-3">
                <ShieldHalf className="h-4 w-4 text-brand-600" /> Self-defense basics & situational awareness
              </li>
              <li className="flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-brand-600" /> Digital safety: passwords, privacy, phishing
              </li>
              <li className="flex items-center gap-3">
                <BookOpenCheck className="h-4 w-4 text-brand-600" /> Legal awareness & knowing your rights
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ink-900">A space to just be okay</h3>
            <p className="mt-2 text-sm text-ink-700">
              Encrypted, private, and never visible to guardians, not even to us. This one belongs entirely to the student.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-700">
              <li className="flex items-center gap-3">
                <Smile className="h-4 w-4 text-accent-600" /> Daily mood check-ins & weekly trends
              </li>
              <li className="flex items-center gap-3">
                <MessageCircleHeart className="h-4 w-4 text-accent-600" /> 24/7 access to the national support helpline (1145)
              </li>
              <li className="flex items-center gap-3">
                <HeartPulse className="h-4 w-4 text-accent-600" /> A fully private, end-to-end encrypted journal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
