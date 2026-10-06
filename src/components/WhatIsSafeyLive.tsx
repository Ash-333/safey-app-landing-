import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function WhatIsSafeyLive() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="what-is-safey-live" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div>
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">What Safey Live actually is</span>
        <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
          Not a tracking app. A trust system.
        </h2>
      </div>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-700">
        <p>
          This is built on a specific, debatable idea: that real safety and real privacy aren&rsquo;t
          opposing forces. They&rsquo;re the same project. A child who knows every message, every app,
          every private thought is being watched doesn&rsquo;t confide in a crisis, they hide it better.
          A family only gets real safety when a young person still trusts the adults around them enough
          to come forward before a small problem becomes a dangerous one. So the design draws a hard,
          non-negotiable line: location and physical-safety signals are shared, with consent, while
          personal chats, the wellbeing journal, and crisis conversations never are, not because of a
          setting a parent could switch, but because the architecture itself makes it impossible.
        </p>

        <p>
          That same idea shapes how a family link even comes to exist. Most monitoring software gives
          the adult total control and the child a notification, after the fact. Here, nothing connects
          until the student reviews, item by item, exactly what will become visible, and approves it
          themselves, and either side can end it at any time. A small difference in code. A completely
          different message about what the relationship actually is.
        </p>

        {expanded && (
          <>
            <p>
              It also shapes what &ldquo;safety&rdquo; means in the first place. Most child-safety apps are
              built around one scenario: did they get home. The rest of what&rsquo;s here, harassment
              reporting, digital-safety and legal-rights courses, crisis counseling, spam-call detection,
              reflects a more honest theory of what young people actually face day to day: online
              harassment, predatory calls, legal ignorance, and the quiet weight of a hard week with nobody
              to tell. The GPS and the SOS button are the loud, urgent layer. The learning courses and the
              private wellness space are the quiet, constant one, and they matter just as much.
            </p>

            <p>
              And it goes one step further than most teams are willing to. A PIN to cancel an SOS alert
              stops a stranger from silencing it, but what about someone the child already trusts, or is
              afraid of? That&rsquo;s why there&rsquo;s a second, different PIN: using it looks exactly like
              the alert was canceled, while guardians stay quietly notified underneath. It&rsquo;s an
              uncomfortable feature to build, because building it means admitting that &ldquo;just ask a
              trusted adult&rdquo; doesn&rsquo;t always hold. It&rsquo;s in here anyway.
            </p>
          </>
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700"
      >
        {expanded ? 'Read less' : 'Read more'}
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
    </section>
  )
}
