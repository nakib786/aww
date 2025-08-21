'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  onAnimationComplete?: () => void
}

const sizeClasses = {
  sm: 'w-28 sm:w-36 h-12',
  md: 'w-40 sm:w-52 h-18',
  lg: 'w-56 sm:w-72 h-24',
  xl: 'w-72 sm:w-96 h-32'
}

export function AnimatedLogo({ 
  className = '', 
  size = 'md', 
  onAnimationComplete 
}: AnimatedLogoProps) {
  return (
    <motion.div
      className={cn(
        'relative cursor-pointer select-none',
        sizeClasses[size],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Simple Logo Content */}
      <div className="flex items-center justify-center h-full px-2 sm:px-4">
        {/* Tech Icon */}
        <div className="mr-2 sm:mr-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            className="text-white sm:w-8 sm:h-8"
          >
            {/* Circuit board / tech icon */}
            <rect x="4" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
            <circle cx="20" cy="12" r="2" fill="currentColor"/>
            <circle cx="12" cy="20" r="2" fill="currentColor"/>
            <circle cx="20" cy="20" r="2" fill="currentColor"/>
            <line x1="12" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1"/>
            <line x1="12" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1"/>
            <line x1="12" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="1"/>
            <line x1="20" y1="12" x2="20" y2="20" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        {/* Company Name */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="text-lg sm:text-xl font-bold text-white">
              Aurora
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              N&N
            </div>
          </div>
          <div className="text-xs text-white/70 font-medium tracking-wider hidden sm:block">
            BUSINESS SOLUTIONS INC.
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Simplified version for loading states
export function LogoMark({ className = '', size = 24 }: { className?: string; size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn("text-white", className)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <rect x="4" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="20" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="20" r="2" fill="currentColor"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
      <line x1="12" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1"/>
      <line x1="12" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1"/>
      <line x1="12" y1="12" x2="12" y2="20" stroke="currentColor" strokeWidth="1"/>
      <line x1="20" y1="12" x2="20" y2="20" stroke="currentColor" strokeWidth="1"/>
    </motion.svg>
  )
}
