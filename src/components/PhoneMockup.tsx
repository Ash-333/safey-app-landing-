import { Battery, MapPin, ShieldAlert, Signal, Wifi } from 'lucide-react'

/** Illustrative mockup of the guardian dashboard — not a real screenshot,
 * just enough visual language (map, live-status card, SOS button) to sell
 * the idea at a glance on the hero section. */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] select-none sm:w-[320px]">
      <div className="animate-float rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-brand-50 to-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-semibold text-ink-700">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <Battery className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Header */}
          <div className="mt-3 flex items-center justify-between px-4">
            <div>
              <p className="text-[10px] text-ink-500">Your child</p>
              <p className="text-sm font-bold text-ink-900">Aasha • Active now</p>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
          </div>

          {/* Map area */}
          <div className="relative mx-4 mt-3 h-40 overflow-hidden rounded-2xl bg-brand-100">
            <svg viewBox="0 0 200 120" className="h-full w-full opacity-70">
              <path d="M0 40 H200" stroke="#a7f3d0" strokeWidth="6" />
              <path d="M40 0 V120" stroke="#a7f3d0" strokeWidth="6" />
              <path d="M0 90 H200" stroke="#a7f3d0" strokeWidth="4" />
              <path d="M140 0 V120" stroke="#a7f3d0" strokeWidth="4" />
            </svg>
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand-500 shadow-[0_0_0_6px_rgba(16,185,129,0.25)]" />
            <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[9px] font-semibold text-brand-700 shadow">
              <MapPin className="h-2.5 w-2.5" /> Home
            </div>
            <div className="absolute bottom-2 left-2 rounded-lg bg-ink-900/85 px-2 py-1 text-[9px] font-medium text-white">
              Safe Walk • 0.8 km remaining
            </div>
          </div>

          {/* Status card */}
          <div className="mx-4 mt-3 rounded-2xl border border-brand-100 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-ink-900">Inside Safe Zone</span>
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            </div>
            <p className="mt-1 text-[10px] text-ink-500">Last synced 12s ago • 92% battery</p>
          </div>

          {/* SOS button */}
          <div className="mt-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg">
              <ShieldAlert className="h-7 w-7" />
            </div>
          </div>
          <p className="mt-2 text-center text-[9px] font-medium text-ink-500">Guardian alerts within seconds</p>
        </div>
      </div>
    </div>
  )
}
