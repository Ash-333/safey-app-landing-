import { ShieldCheck } from 'lucide-react'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2 font-display font-bold text-lg">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-sm">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <span className={light ? 'text-white' : 'text-ink-900'}>
        Safey<span className="text-brand-500">Live</span>
      </span>
    </div>
  )
}
