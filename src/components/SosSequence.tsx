import { useEffect, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const COUNTDOWN_SECONDS = 5
const MESSAGE_VISIBLE_MS = 4500

/** Animated re-enactment of the actual flow: a live countdown overlaid on the
 * real SOS screen ticks down from 5, then the real alert text pops onto the
 * guardian's phone, exactly like it does for real. Loops so anyone scrolling
 * past at any point still sees the full sequence. */
export default function SosSequence() {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS)
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    let tickInterval: ReturnType<typeof setInterval>
    let resetTimer: ReturnType<typeof setTimeout>

    const cycle = () => {
      setShowMessage(false)
      setSecondsLeft(COUNTDOWN_SECONDS)
      let remaining = COUNTDOWN_SECONDS
      tickInterval = setInterval(() => {
        remaining -= 1
        if (remaining <= 0) {
          clearInterval(tickInterval)
          setShowMessage(true)
          resetTimer = setTimeout(cycle, MESSAGE_VISIBLE_MS)
        } else {
          setSecondsLeft(remaining)
        }
      }, 1000)
    }

    cycle()
    return () => {
      clearInterval(tickInterval)
      clearTimeout(resetTimer)
    }
  }, [])

  return (
    <div>
      <div className="relative mx-auto w-[260px] select-none sm:w-[290px]">
        <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-accent-500/20 blur-2xl" />

        <div className="animate-float rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-black">
            <img
              src="/screenshots/student-sos.jpeg"
              alt="SOS alert countdown screen"
              className="h-full w-full object-cover"
            />

            {/* Live countdown, drawn over the same circle the screenshot
                shows, so it reads as the real screen actually ticking down. */}
            <div className="absolute left-[22%] top-[21%] flex aspect-square w-[56%] flex-col items-center justify-center rounded-full border-[6px] border-rose-400 bg-rose-100 shadow-inner">
              {!showMessage ? (
                <>
                  <span className="text-3xl font-extrabold leading-none text-rose-600 sm:text-4xl">
                    {secondsLeft}
                  </span>
                  <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wide text-rose-500 sm:text-[10px]">
                    Seconds
                  </span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-7 w-7 text-emerald-600 sm:h-9 sm:w-9" />
                  <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wide text-emerald-600 sm:text-[10px]">
                    Alert sent
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Pops in once the countdown hits zero, like a real text message
            notification landing on the guardian's phone. */}
        <div
          className={`absolute -right-8 bottom-14 w-40 origin-bottom-right transition-all duration-500 ease-out sm:-right-12 sm:w-48 ${
            showMessage ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-90 opacity-0'
          }`}
        >
          <img
            src="/screenshots/sms-alert.jpeg"
            alt="Real SOS text message a guardian receives, with name, location, and a map link"
            className="w-full rounded-xl shadow-2xl ring-4 ring-white"
          />
        </div>
      </div>
    </div>
  )
}
