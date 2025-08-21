'use client'

import { useEffect, useState } from 'react'
import { useServiceStore } from '@/lib/store'

export function Providers({ children }: { children: React.ReactNode }) {
  const { currentService } = useServiceStore()
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    // Only apply theme after hydration is complete
    if (isHydrated && typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-service', currentService)
    }
  }, [currentService, isHydrated])

  return <>{children}</>
}
