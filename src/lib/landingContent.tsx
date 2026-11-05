import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, '') || 'https://api.safey.live'

export const DEFAULT_SUPPORT_EMAIL = 'safeylive@gmail.com'

// The APK is hosted as a GitHub Release asset. This is the ONE link the
// Download button uses. GitHub's "releases/latest/download/<file>" URL always
// redirects to the same-named asset in your newest release — so publishing a
// new release with the same APK filename is the only step needed to ship a new
// build. No dashboard edit, no API call, no landing-site redeploy.
export const GITHUB_REPO =
  (import.meta.env.VITE_GITHUB_REPO as string | undefined) || 'bibhansu12/safey-app-landing-'

// Must exactly match the APK asset filename you attach in every release.
export const APK_ASSET_NAME =
  (import.meta.env.VITE_APK_ASSET_NAME as string | undefined) || 'app-release.apk'

export const DOWNLOAD_URL = `https://github.com/${GITHUB_REPO}/releases/latest/download/${APK_ASSET_NAME}`

// Optional: only used to show the version badge. The download link never
// depends on this, so the app downloads fine even if it fails.
export const LATEST_RELEASE_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`

// Shape of GET /api/landing — everything the admin dashboard's "Landing Page"
// screen can edit. Any field left null falls back to the copy built into the
// components, so the site renders fully even if the API is unreachable.
// downloadUrl is intentionally ignored: the APK link comes from GitHub only.
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

function fetchLatestVersion(): Promise<string | null> {
  return fetch(LATEST_RELEASE_API_URL, { headers: { Accept: 'application/vnd.github+json' } })
    .then((res) => (res.ok ? res.json() : null))
    .then((release) =>
      release ? String(release.tag_name ?? '').replace(/^v/, '') || null : null,
    )
    .catch(() => null)
}

export function LandingContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Partial<LandingContent>>({})
  const [version, setVersion] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${API_BASE_URL}/api/landing`)
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Partial<LandingContent>) => {
        if (!cancelled) setContent(data)
      })
      .catch(() => {})
    fetchLatestVersion().then((v) => {
      if (!cancelled) setVersion(v)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const value: Partial<LandingContent> = {
    ...content,
    // Always the GitHub "latest" link — the single source of truth.
    downloadUrl: DOWNLOAD_URL,
    appVersion: version ?? content.appVersion ?? null,
  }

  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>
}

export function useLandingContent() {
  const content = useContext(LandingContext)
  return {
    ...content,
    downloadUrl: DOWNLOAD_URL,
    supportEmail: content.supportEmail || DEFAULT_SUPPORT_EMAIL,
  }
}
