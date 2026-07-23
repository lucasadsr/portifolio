'use client'

import { useEffect, useState } from 'react'

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoint
    }
    return true
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    setIsMobile(mql.matches)

    if (mql.addEventListener) {
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    } else {
      mql.addListener(onChange)
      return () => mql.removeListener(onChange)
    }
  }, [breakpoint])

  return isMobile
}

