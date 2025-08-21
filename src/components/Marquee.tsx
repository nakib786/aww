'use client'

import { motion } from 'framer-motion'
import { ServiceContent } from './ServiceSwitch'

const taxationLogos = [
  'CRA', 'BC Gov', 'GST/HST', 'PST', 'T1', 'T2', 'QuickBooks', 'Sage'
]

const webDesignLogos = [
  'Next.js', 'React', 'Vercel', 'Tailwind', 'TypeScript', 'Figma', 'Shopify', 'WordPress'
]

interface MarqueeProps {
  className?: string
}

export function Marquee({ className = '' }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <ServiceContent
        taxation={
          <MarqueeContent items={taxationLogos} />
        }
        webDesign={
          <MarqueeContent items={webDesignLogos} />
        }
      />
    </div>
  )
}

function MarqueeContent({ items }: { items: string[] }) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items]

  return (
    <motion.div
      className="flex space-x-12"
      animate={{
        x: [0, -100 * items.length],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      }}
    >
      {duplicatedItems.map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex-shrink-0 text-white/60 hover:text-white transition-colors duration-300 text-lg font-medium whitespace-nowrap"
        >
          {item}
        </div>
      ))}
    </motion.div>
  )
}
