import { ArrowRight, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppScreenshotSlider from './AppScreenshotSlider'
import { useLandingContent } from '../lib/landingContent'

export default function Hero() {
  const content = useLandingContent()

  return (
    <section id="home" className="relative overflow-hidden pt-2 sm:pt-4">
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-brand-50 via-white to-transparent" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[640px]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(24,24,27,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.07) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            {content.heroBadge || '🇳🇵 Built for families in Nepal'}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            {content.heroTitle || 'Real-time safety for your family.'}
            <span className="block text-brand-600">{content.heroHighlight || 'Total privacy for your kid.'}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-700 lg:mx-0">
            {content.heroDescription ||
              "Safey Live gives parents live location, one-tap SOS, and Safe Zone alerts, while keeping your child's private chats, wellbeing journal, and personal space completely off-limits. No spying. Just safety, with consent."}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={content.downloadUrl}
              className="group flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600"
            >
              Download
              {content.appVersion && <span className="text-sm font-medium text-white/75">v{content.appVersion}</span>}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/suggestions"
              className="flex items-center justify-center gap-2 rounded-full border border-ink-900/15 bg-white px-8 py-4 text-base font-semibold text-ink-900 transition-colors hover:border-accent-500 hover:text-accent-600"
            >
              <Lightbulb className="h-4 w-4" />
              Suggestion
            </Link>
          </div>

          
        </div>

        <AppScreenshotSlider />
      </div>
    </section>
  )
}
