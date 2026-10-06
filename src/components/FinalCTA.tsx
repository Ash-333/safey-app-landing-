import { ArrowRight, Smartphone } from 'lucide-react'
import { useLandingContent } from '../lib/landingContent'

export default function FinalCTA() {
  const content = useLandingContent()

  return (
    <section id="download" className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-900 px-8 py-16 text-center sm:px-16">
        <Smartphone className="mx-auto h-10 w-10 text-white/80" />
        <h2 className="mx-auto mt-5 max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
          {content.ctaTitle || 'Give your family real safety, without giving up trust.'}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/75">
          {content.ctaDescription || 'Free to get started. No credit card. Set up your family in under five minutes.'}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={content.downloadUrl}
            className="group flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-accent-600"
          >
            Download for Android{content.appVersion && ` (v${content.appVersion})`}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="text-xs font-medium text-white/60">iOS coming soon</span>
        </div>
      </div>
    </section>
  )
}
