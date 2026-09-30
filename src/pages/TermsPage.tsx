import LegalLayout from '../components/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="September 2026">
      <section>
        <h2 className="text-lg font-bold text-ink-900">1. Using Safey Live</h2>
        <p className="mt-2">
          Safey Live provides family-safety tools including location sharing, SOS alerts, Safe Walk
          navigation, Safe Zones, safety education, and wellness features. Student and parent/guardian
          accounts are role-based and fixed at creation.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">2. Family linking &amp; consent</h2>
        <p className="mt-2">
          A guardian account may only access a student's data after that student's account has
          reviewed and explicitly consented to the specific scopes being shared. Either party may
          remove a family link at any time.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">3. Emergency features are not a substitute for emergency services</h2>
        <p className="mt-2">
          SOS, Silent SOS, and Safe Walk are designed to speed up how quickly a guardian or emergency
          contact learns about a situation. They do not replace contacting local police, medical, or
          emergency services directly when a genuine emergency is underway.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">4. Subscriptions</h2>
        <p className="mt-2">
          Premium features may be offered under a paid plan. Where a promotional period makes Premium
          available free of charge, standard pricing may resume with notice once that period ends.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">5. Acceptable use</h2>
        <p className="mt-2">
          Accounts may not be used to monitor or contact anyone without their knowledge and consent, or
          in a way that violates applicable law. We may suspend accounts that misuse the platform's
          safety features.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">6. Account deletion</h2>
        <p className="mt-2">
          You may delete your account at any time from within the app. This is permanent and removes
          your account's data and any active family links.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-bold text-ink-900">7. Changes to these terms</h2>
        <p className="mt-2">
          We may update these terms as the product evolves. Continued use of Safey Live after an update
          means you accept the revised terms.
        </p>
      </section>
    </LegalLayout>
  )
}
