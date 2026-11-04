import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') || 'https://api.safey.live'

export const DEFAULT_DOWNLOAD_URL = 'https://drive.google.com/uc?id=1rT6Yli_Y_h2VnpSXOAa_qqlo3NOBoWUj'
export const DEFAULT_SUPPORT_EMAIL = 'safeylive@gmail.com'

// The APK is hosted as a GitHub Release asset. The site always downloads the
// latest release, so publishing a new release is the only step needed to ship
// a new build — no dashboard edit and no landing-site redeploy.
export const GITHUB_REPO =
  (import.meta.env.VITE_GITHUB_REPO as string | undefined) || 'bibhansu12/safey-app-landing-'

export const LATEST_RELEASE_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`

// Shape of GET /api/landing — everything the admin dashboard's "Landing Page"
// screen can edit. Any field left null falls back to the copy built into the
// components, so the site renders fully even if the API is unreachable.
// downloadUrl is intentionally ignored: the APK link comes from GitHub only.
export type LandingContent = {
  // Populated at runtime from the latest GitHub Release, never from the API.
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

type GitHubRelease = { downloadUrl: string; version: string | null }

function fetchLatestRelease(): Promise<GitHubRelease | null> {
  return fetch(LATEST_RELEASE_API_URL, { headers: { Accept: 'application/vnd.github+json' } })
    .then((res) => (res.ok ? res.json() : null))
    .then((release) => {
      if (!release) return null
      const apk = (release.assets ?? []).find((a: { name?: string }) =>
        a.name?.toLowerCase().endsWith('.apk'),
      )
      if (!apk) return null
      const version: string | null = String(release.tag_name ?? '').replace(/^v/, '') || null
      return { downloadUrl: apk.browser_download_url as string, version }
    })
    .catch(() => null)
}

export function LandingContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Partial<LandingContent>>({})
  const [release, setRelease] = useState<GitHubRelease | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${API_BASE_URL}/api/landing`)
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Partial<LandingContent>) => {
        if (!cancelled) setContent(data)
      })
      .catch(() => {})
    fetchLatestRelease().then((r) => {
      if (!cancelled) setRelease(r)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const value: Partial<LandingContent> = {
    ...content,
    downloadUrl: release?.downloadUrl ?? null,
    appVersion: release?.version ?? content.appVersion ?? null,
  }

  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>
}

export function useLandingContent() {
  const content = useContext(LandingContext)
  return {
    ...content,
    // GitHub release link when available; Drive link only as last-resort fallback.
    downloadUrl: content.downloadUrl || DEFAULT_DOWNLOAD_URL,
    supportEmail: content.supportEmail || DEFAULT_SUPPORT_EMAIL,
  }
}
