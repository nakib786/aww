'use client'

import { motion } from 'framer-motion'
import { useServiceStore, type ServiceType } from '@/lib/store'
import { cn } from '@/lib/utils'

const services: { id: ServiceType; label: string; icon: string }[] = [
  { id: 'taxation', label: 'Taxation', icon: '📊' },
  { id: 'web-design', label: 'Web Design', icon: '💻' },
]

export function ServiceSwitch() {
  const { currentService, setService } = useServiceStore()

  return (
    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full p-1">
      <div className="flex relative">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setService(service.id)}
            className={cn(
              'relative px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-full z-10',
              'focus:outline-none focus:ring-2 focus:ring-white/20',
              currentService === service.id
                ? 'text-white'
                : 'text-white/70 hover:text-white/90'
            )}
          >
            <span className="flex items-center gap-2">
              <span className="text-base">{service.icon}</span>
              <span>{service.label}</span>
            </span>
          </button>
        ))}
        
        {/* Animated background */}
        <motion.div
          className="absolute top-1 bottom-1 bg-slate-700/60 border border-slate-500/50 rounded-full"
          initial={false}
          animate={{
            left: currentService === 'taxation' ? '4px' : '50%',
            width: currentService === 'taxation' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      </div>
    </div>
  )
}

interface ServiceContentProps {
  taxation: React.ReactNode
  webDesign: React.ReactNode
  className?: string
}

export function ServiceContent({ taxation, webDesign, className }: ServiceContentProps) {
  const { currentService } = useServiceStore()

  return (
    <span className={className}>
      {currentService === 'taxation' ? taxation : webDesign}
    </span>
  )
}
