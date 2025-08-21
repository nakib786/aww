'use client'

import { useEffect, useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageTransition, ProgressBar } from './PageTransition'
import { LoadingScreen } from './LoadingScreen'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showLoadingScreen, setShowLoadingScreen] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Show loading screen for first visit only
    const hasVisited = sessionStorage.getItem('aurora-visited')
    
    if (hasVisited) {
      setIsLoading(false)
      setShowLoadingScreen(false)
    } else {
      // First visit - show loading animation
      setShowLoadingScreen(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('aurora-visited', 'true')
      }, 3500)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {isClient && showLoadingScreen && (
        <LoadingScreen 
          isLoading={isLoading} 
          onComplete={() => setShowLoadingScreen(false)}
        />
      )}
      
      <ProgressBar />
      <Header />
      <PageTransition>
        <main className="min-h-screen">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  )
}
