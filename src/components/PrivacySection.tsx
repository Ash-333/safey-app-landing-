import { Eye, EyeOff, ShieldCheck } from 'lucide-react'

const ALWAYS_SHARED = [
  'Live location & location history',
  'Battery status, so you know if their phone is about to die',
  'App usage (duration only, never message content)',
  'Steps & sleep, for peace of mind',
]

const ALWAYS_PRIVATE = [
  'Personal chat messages',
  'Wellbeing check-ins & private journal',
  'Support helpline conversations',
  'Anything before consent is given',
]

export default function PrivacySection() {
  return (
    <section id="privacy" className="mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            <ShieldCheck className="h-3.5 w-3.5" /> Safety, not surveillance
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            You decide what's shared. Always.
          </h2>
          <p className="mt-4 text-lg text-ink-700">
            Before any device is linked, your child sees exactly what a guardian will be able to
            see, and has to approve it. No hidden tracking, no silent access, no exceptions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                <Eye className="h-4 w-4" /> Shared with consent
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {ALWAYS_SHARED.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-accent-500/20 bg-accent-500/[0.06] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-accent-600">
                <EyeOff className="h-4 w-4" /> Never shared
              </div>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {ALWAYS_PRIVATE.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold text-ink-500">What your child sees before linking</p>
            <div className="mt-5 space-y-3">
              {[
                { label: 'Real-time location', sub: 'Active tracking for safety during commutes', shared: true },
                { label: 'Battery status', sub: 'Alerts you if their phone is about to die', shared: true },
                { label: 'App usage (duration only)', sub: 'Never your private chats', shared: true },
                { label: 'Steps & sleep', sub: 'Well-being indicators for peace of mind', shared: true },
                { label: 'Wellbeing journal & support chat', sub: 'Always private, no toggle, no exception', shared: false },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-start justify-between gap-3 rounded-xl border border-black/5 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{row.label}</p>
                    <p className="text-xs text-ink-500">{row.sub}</p>
                  </div>
                  <span
                    className={`mt-0.5 shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                      row.shared ? 'bg-brand-100 text-brand-700' : 'bg-ink-900 text-white'
                    }`}
                  >
                    {row.shared ? 'SHARED' : 'PRIVATE'}
                  </span>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-brand-600 py-3 text-sm font-semibold text-white"
            >
              I consent and link device
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
