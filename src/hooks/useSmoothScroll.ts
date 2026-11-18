import { useCallback } from 'react'

/** Smooth-scrolls to a CSS selector / anchor href. */
export const useSmoothScroll = () => {
  const scrollTo = useCallback((href: string) => {
    const id = href.startsWith('#') ? href.slice(1) : href
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return { scrollTo }
}
