import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ServiceType = 'taxation' | 'web-design'

interface ServiceState {
  currentService: ServiceType
  setService: (service: ServiceType) => void
  toggleService: () => void
}

export const useServiceStore = create<ServiceState>()(
  persist(
    (set, get) => ({
      currentService: 'taxation',
      setService: (service) => {
        set({ currentService: service })
        // Update CSS custom property for theme switching - only on client
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-service', service)
        }
      },
      toggleService: () => {
        const { currentService } = get()
        const newService = currentService === 'taxation' ? 'web-design' : 'taxation'
        get().setService(newService)
      },
    }),
    {
      name: 'aurora-service-preference',
      onRehydrateStorage: () => (state) => {
        // Ensure theme is applied after hydration - only on client
        if (state?.currentService && typeof window !== 'undefined' && typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-service', state.currentService)
        }
      },
    }
  )
)

interface PageTransitionState {
  isTransitioning: boolean
  setIsTransitioning: (transitioning: boolean) => void
}

export const usePageTransitionStore = create<PageTransitionState>((set) => ({
  isTransitioning: false,
  setIsTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
}))

interface ScrollState {
  scrollY: number
  scrollDirection: 'up' | 'down'
  setScrollY: (y: number) => void
  setScrollDirection: (direction: 'up' | 'down') => void
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollY: 0,
  scrollDirection: 'down',
  setScrollY: (y) => set({ scrollY: y }),
  setScrollDirection: (direction) => set({ scrollDirection: direction }),
}))
