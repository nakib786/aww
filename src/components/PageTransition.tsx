'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { usePageTransitionStore } from '@/lib/store'
import { useEffect } from 'react'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isTransitioning, setIsTransitioning } = usePageTransitionStore()

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 600)
    return () => clearTimeout(timer)
  }, [pathname, setIsTransitioning])

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            className="page-transition-overlay"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: 'left',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            }}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
          delay: isTransitioning ? 0.3 : 0,
        }}
      >
        {children}
      </motion.div>
    </>
  )
}

export function ProgressBar() {
  const { isTransitioning } = usePageTransitionStore()

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="progress-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
          }}
        />
      )}
    </AnimatePresence>
  )
}
