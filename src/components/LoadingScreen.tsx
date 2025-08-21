'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AnimatedLogo } from './AnimatedLogo'

interface LoadingScreenProps {
  isLoading: boolean
  onComplete?: () => void
}

export function LoadingScreen({ isLoading, onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setShowLogo(true)
      
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              onComplete?.()
            }, 500)
            return 100
          }
          // Use deterministic increment based on current progress
          const increment = Math.min(15, Math.max(5, 100 - prev) / 10)
          return prev + increment
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0B1020 0%, #070A12 100%)'
          }}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            transition: { 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          suppressHydrationWarning
        >
          {/* Aurora Background Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  radial-gradient(circle at 20% 50%, rgba(59, 240, 229, 0.3) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(166, 255, 154, 0.2) 0%, transparent 50%),
                  radial-gradient(circle at 40% 80%, rgba(255, 92, 168, 0.25) 0%, transparent 50%),
                  radial-gradient(circle at 60% 30%, rgba(177, 156, 255, 0.2) 0%, transparent 50%)
                `
              }}
            />
            
            {/* Animated particles */}
            {[...Array(20)].map((_, i) => {
              // Use deterministic positioning based on index
              const left = ((i * 7) % 100) + (i * 3) % 20
              const top = ((i * 11) % 100) + (i * 5) % 15
              const duration = 3 + (i % 3) * 0.5
              const delay = (i * 0.3) % 2
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-aurora-cyan rounded-full"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    delay,
                    ease: "easeInOut"
                  }}
                />
              )
            })}
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              className="mb-12"
            >
              <AnimatedLogo 
                size="xl" 
                autoPlay={showLogo}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2 font-space-grotesk">
                Loading Experience
              </h2>
              <p className="text-white/70 font-inter">
                Preparing your business solutions...
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  delay: 1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              className="w-80 max-w-sm"
            >
              {/* Progress Container */}
              <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #3BF0E5, #A6FF9A, #FF5CA8, #B19CFF)',
                    boxShadow: '0 0 20px rgba(59, 240, 229, 0.5)'
                  }}
                  initial={{ width: '0%' }}
                  animate={{ 
                    width: `${progress}%`,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(59, 240, 229, 0.3), rgba(166, 255, 154, 0.3))',
                    filter: 'blur(4px)'
                  }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Progress Text */}
              <motion.div 
                className="flex justify-between items-center mt-3 text-sm text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </motion.div>
            </motion.div>

            {/* Loading Steps */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 1.5,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }
              }}
              className="mt-8 text-center"
            >
              <div className="flex items-center justify-center space-x-2 text-xs text-white/50">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Initializing Aurora Engine
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: 360,
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="w-3 h-3 border border-aurora-cyan border-t-transparent rounded-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Background Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 240, 229, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 240, 229, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Hook for managing loading state
export function useLoadingScreen(duration = 3000) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return { isLoading, setIsLoading }
}
