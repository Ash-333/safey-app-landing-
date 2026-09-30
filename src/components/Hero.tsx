import { ArrowRight } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-gradient-to-b from-brand-50 via-white to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700">
            🇳🇵 Built for families in Nepal
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            Real-time safety for your family.
            <span className="block text-brand-600">Total privacy for your kid.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-700 lg:mx-0">
            Safey Live gives parents live location, one-tap SOS, and Safe Zone alerts,
            while keeping your child's private chats, wellbeing journal, and personal
            space completely off-limits. No spying. Just safety, with consent.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=100urq8DhHoffzRiSbgIhK-9OC935mK-B"
              className="group flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700"
            >
              Download
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}
