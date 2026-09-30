import { ShieldAlert } from 'lucide-react'

/** Illustrative mockup of the SOS-active screen. Not a real screenshot. */
export default function SosMockup() {
  return (
    <div className="relative mx-auto w-[260px] select-none sm:w-[290px]">
      <div className="animate-float rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-accent-dark to-ink-900 px-5 pt-10 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-white/80">
            SOS Alert Active
          </span>

          <div className="relative mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-xl">
            <ShieldAlert className="h-10 w-10" />
          </div>

          <p className="mt-6 text-xs font-medium text-white/85">
            Recording audio &amp; streaming location
          </p>
          <p className="mt-1 text-[11px] text-white/50">
            Guardians notified with your exact GPS position.
          </p>

          <div className="mt-6 rounded-2xl bg-white/10 p-3 text-left">
            <p className="text-[10px] font-semibold text-white/70">Enter PIN to cancel</p>
            <div className="mt-2 flex justify-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/70" />
              ))}
            </div>
          </div>

          <p className="mt-3 text-[9px] leading-relaxed text-white/40">
            Being forced to cancel? A different, duress PIN looks like it worked,
            while guardians stay quietly alerted.
          </p>
        </div>
      </div>
    </div>
  )
}
