'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatedLogo, LogoMark } from './AnimatedLogo'
import { Button } from './ui/Button'

const logoVariants = [
  { id: 'full', name: 'Full Logo', size: 'lg' as const },
  { id: 'medium', name: 'Medium', size: 'md' as const },
  { id: 'small', name: 'Small', size: 'sm' as const },
  { id: 'mark', name: 'Logo Mark', size: 'md' as const },
]

const backgrounds = [
  { id: 'dark', name: 'Dark', bg: 'bg-deep-space' },
  { id: 'light', name: 'Light', bg: 'bg-white' },
  { id: 'gradient', name: 'Gradient', bg: 'bg-gradient-to-br from-deep-space to-ink-black' },
]

export function LogoShowcase() {
  const [selectedVariant, setSelectedVariant] = useState('full')
  const [selectedBg, setSelectedBg] = useState('dark')
  const [animationKey, setAnimationKey] = useState(0)

  const triggerAnimation = () => {
    setAnimationKey(prev => prev + 1)
  }

  const currentBg = backgrounds.find(bg => bg.id === selectedBg)

  return (
    <section className="section-padding bg-ink-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Brand <span className="text-gradient">Identity</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Our animated logo represents the Northern Lights guiding businesses 
            through their financial and digital transformation journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Logo Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <div 
                className={`
                  ${currentBg?.bg} 
                  rounded-xl p-12 flex items-center justify-center min-h-[300px]
                  ${selectedBg === 'light' ? 'text-deep-space' : 'text-white'}
                `}
              >
                <div key={animationKey}>
                  {selectedVariant === 'mark' ? (
                    <LogoMark size={120} className="text-aurora-cyan" />
                  ) : (
                    <AnimatedLogo 
                      size={logoVariants.find(v => v.id === selectedVariant)?.size || 'lg'}
                      autoPlay={true}
                    />
                  )}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button 
                  onClick={triggerAnimation}
                  variant="outline"
                  size="sm"
                  className="mb-4"
                >
                  Replay Animation
                </Button>
              </div>
            </div>

            {/* Logo Specs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Logo Specifications</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-white/60">Animation Duration:</span>
                  <span className="text-white ml-2">2.5s</span>
                </div>
                <div>
                  <span className="text-white/60">Format:</span>
                  <span className="text-white ml-2">SVG + CSS</span>
                </div>
                <div>
                  <span className="text-white/60">Colors:</span>
                  <span className="text-white ml-2">4 Gradient Stops</span>
                </div>
                <div>
                  <span className="text-white/60">Performance:</span>
                  <span className="text-white ml-2">Optimized</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Logo Variants */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Logo Variants</h3>
              <div className="grid grid-cols-2 gap-3">
                {logoVariants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium
                      ${selectedVariant === variant.id 
                        ? 'border-aurora-cyan bg-aurora-cyan/10 text-aurora-cyan' 
                        : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                      }
                    `}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Options */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Background</h3>
              <div className="space-y-3">
                {backgrounds.map((bg) => (
                  <button
                    key={bg.id}
                    onClick={() => setSelectedBg(bg.id)}
                    className={`
                      w-full p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium text-left
                      ${selectedBg === bg.id 
                        ? 'border-aurora-cyan bg-aurora-cyan/10 text-aurora-cyan' 
                        : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                      }
                    `}
                  >
                    {bg.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Design Philosophy</h3>
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-aurora-cyan mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Aurora Inspiration:</strong> The flowing lines represent the Northern Lights, symbolizing guidance and clarity.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-lime-green mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Dynamic Colors:</strong> Four-color gradient representing diverse business solutions.
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-magenta mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Professional Typography:</strong> Space Grotesk font for modern, trustworthy appeal.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

