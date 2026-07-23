'use client'

import { useEffect, useState } from 'react'

export function useIsMobile(breakpoint = 768) {
  // Inicializa sempre como true durante o SSR e a hidratação inicial do cliente.
  // Isso garante que o HTML do servidor e a árvore DOM do cliente coincidam 100%,
  // eliminando o erro de Hydration Mismatch no React/Next.js.
  const [isMobile, setIsMobile] = useState<boolean>(true)

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
