import { Check } from 'lucide-react'

const PARENT_ITEMS = [
  'Live location & location history',
  'Safe Zone enter/exit alerts',
  'Instant SOS alerts with exact GPS',
  'Live Safe Walk map, same route your child sees',
  'Up to 4 guardians per child, switch between kids',
  'Screen-time, app-usage & learning progress',
]

const STUDENT_ITEMS = [
  'One-tap SOS, Silent SOS & a duress PIN',
  'Guided Safe Walk navigation',
  'Safety courses that actually help',
  'Private wellness journal & mood tracker',
  'National support helpline (1145) & chat',
  'Fake call exit',
]

export default function DualView() {
  return (
    <section className="bg-ink-900 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-400">Two apps, one family</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Everyone gets what they actually need</h2>
          <p className="mt-4 text-lg text-white/70">
            Parents get real safety oversight. Kids get real tools and real privacy. Neither side is guessing.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-xl font-bold text-white">For Parents</h3>
            <p className="mt-1 text-sm text-white/60">Peace of mind, without watching every second.</p>
            <ul className="mt-6 space-y-3">
              {PARENT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-xl font-bold text-white">For Students</h3>
            <p className="mt-1 text-sm text-white/60">Real tools for real situations, and a space that's truly theirs.</p>
            <ul className="mt-6 space-y-3">
              {STUDENT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        
      </div>
    </section>
  )
}
