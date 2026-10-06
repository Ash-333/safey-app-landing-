import { useEffect, useState } from 'react'
import { useLandingContent } from '../lib/landingContent'

const DEFAULT_SLIDES = [
  { src: '/screenshots/dashboard.jpeg', alt: 'Guardian dashboard with live location and quick actions' },
  { src: '/screenshots/student-home.jpeg', alt: 'Student home screen with Safe Walk and priority safety tools' },
  { src: '/screenshots/student-safe-walk.jpeg', alt: 'Live Safe Walk route on the map' },
  { src: '/screenshots/student-sos.jpeg', alt: 'SOS alert countdown screen' },
  { src: '/screenshots/insights.jpeg', alt: 'Screen time and wellbeing insights' },
  { src: '/screenshots/student-safe-space.jpeg', alt: 'Nearby verified hospitals and police stations' },
  { src: '/screenshots/location.jpeg', alt: 'Live location map with nearby places' },
  { src: '/screenshots/student-learning.jpeg', alt: 'Recommended safety courses' },
  { src: '/screenshots/student-news.jpeg', alt: 'World news feed' },
]

const SLIDE_DURATION_MS = 2000

/** Real app screenshots, auto-advancing every 2 seconds. Uses the ones
 * uploaded from the admin dashboard when there are any, otherwise the
 * built-in set in /public/screenshots. */
export default function AppScreenshotSlider() {
  const { screenshots } = useLandingContent()
  const slides =
    screenshots && screenshots.length > 0
      ? screenshots.map((s) => ({ src: s.url, alt: s.alt || 'Safey Live app screenshot' }))
      : DEFAULT_SLIDES
  const count = slides.length
  const [active, setActive] = useState(0)
  const current = active % count

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(id)
  }, [count])

  return (
    <div className="relative mx-auto w-[260px] select-none sm:w-[300px]">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-accent-400/25 via-transparent to-brand-900/10 blur-2xl" />

      <div className="animate-float rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-black">
          {slides.map((slide, i) => (
            <img
              key={`${i}-${slide.src}`}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={`${i}-${slide.src}`}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? 'w-6 bg-accent-500' : 'w-1.5 bg-ink-900/15'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
