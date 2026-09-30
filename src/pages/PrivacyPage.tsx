import LegalLayout from '../components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="September 2026">
      <p>
        Safey Live ("we", "us") builds tools for family safety. This page explains what we collect,
        why we collect it, and, just as importantly, what we never collect or share, regardless of
        which account is asking.
      </p>

      <section>
        <h2 className="text-lg font-bold text-ink-900">1. Data shared between a student and their guardian</h2>
        <p className="mt-2">
          A guardian only ever sees data a student account has explicitly consented to share, chosen
          scope by scope, before any device is linked. Depending on what's consented to, this can
          include:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Real-time location and location history</li>
          <li>Battery level and connectivity status</li>
          <li>App usage duration (never message content)</li>
          <li>Daily steps and sleep estimates</li>
          <li>Learning course progress</li>
        </ul>
        <p className="mt-2">Consent can be reviewed and a linked device can be removed at any time.</p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">2. Data that is never shared, with anyone</h2>
        <p className="mt-2">
          Some data belongs to the student alone, and no consent setting can change that. This includes
          personal chat messages, wellbeing journal entries, mood check-ins, and support helpline
          conversations. This data is encrypted and is not accessible to guardians, school
          administrators, or our own staff in readable form.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">3. SOS and emergency data</h2>
        <p className="mt-2">
          When an SOS alert is triggered, the student's location is shared with linked guardians for the duration of the emergency, to
          allow a fast response. This exists specifically for safety-critical situations.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">4. Payment information</h2>
        <p className="mt-2">
          Subscription payments are processed by third-party providers (such as Khalti, eSewa, or
          Fonepay). We do not store your full card or wallet credentials on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">5. Identity verification</h2>
        <p className="mt-2">
          Parent and student accounts may be asked to complete a light identity verification (KYC) to
          keep the platform trustworthy for families. This information is used solely for
          verification and is not shared with other users.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">6. Account deletion</h2>
        <p className="mt-2">
          You can permanently delete your account and its associated data from within the app at any
          time. Family links tied to your account are removed immediately as part of that process.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">7. Contact</h2>
        <p className="mt-2">
          Questions about this policy or your data can be sent through the in-app Support &amp; Contact
          Us screen.
        </p>
      </section>
    </LegalLayout>
  )
}
