import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') || 'https://api.safey.live'

export const DEFAULT_DOWNLOAD_URL = 'https://drive.google.com/uc?id=1w-_o1V_MTlsZdZEqfCdoppWtCu-iTLR6'
export const DEFAULT_SUPPORT_EMAIL = 'safeylive@gmail.com'

// Shape of GET /api/landing — everything the admin dashboard's "Landing Page"
// screen can edit. Any field left null falls back to the copy built into the
// components, so the site renders fully even if the API is unreachable.
export type LandingContent = {
  downloadUrl: string | null
  appVersion: string | null
  heroBadge: string | null
  heroTitle: string | null
  heroHighlight: string | null
  heroDescription: string | null
  ctaTitle: string | null
  ctaDescription: string | null
  supportEmail: string | null
  screenshots: { id: string; url: string; alt: string }[]
  faqs: { q: string; a: string }[] | null
}

const LandingContext = createContext<Partial<LandingContent>>({})

export function LandingContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Partial<LandingContent>>({})

  useEffect(() => {
    let cancelled = false
    fetch(`${API_BASE_URL}/api/landing`)
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Partial<LandingContent>) => {
        if (!cancelled) setContent(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  return <LandingContext.Provider value={content}>{children}</LandingContext.Provider>
}

export function useLandingContent() {
  const content = useContext(LandingContext)
  return {
    ...content,
    downloadUrl: content.downloadUrl || DEFAULT_DOWNLOAD_URL,
    supportEmail: content.supportEmail || DEFAULT_SUPPORT_EMAIL,
  }
}
