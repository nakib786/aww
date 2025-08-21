'use client'

import { GlowCard } from "@/components/ui/spotlight-card"
import { GlowEffect } from "@/components/ui/glow-effect"
import { FileText, Globe, Zap, Check, Calculator } from 'lucide-react'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Glow Card Component Demo
        </h1>
        
        {/* Basic Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Basic Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard glowColor="blue" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Modern Craft</h3>
                <p className="text-white/70">High-performance websites designed to rank and convert using modern technology.</p>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="purple" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast Performance</h3>
                <p className="text-white/70">Optimized for Core Web Vitals with LCP &lt; 2.5s and perfect Lighthouse scores.</p>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="green" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">One Partner</h3>
                <p className="text-white/70">Finance + web under one roof—fast feedback loops and integrated business solutions.</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Different Sizes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Different Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <GlowCard glowColor="red" size="sm">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Small Card</h3>
                <p className="text-white/70 text-sm">Compact design for tight spaces.</p>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="orange" size="md">
              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <Calculator className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Medium Card</h3>
                <p className="text-white/70">Balanced size for most use cases.</p>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="blue" size="lg">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Large Card</h3>
                <p className="text-white/70">Prominent display for important content.</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Custom Sizes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Custom Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlowCard 
              glowColor="purple" 
              customSize 
              width="100%" 
              height="200px"
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Custom Width Card</h3>
                <p className="text-white/70">Full width with custom height</p>
              </div>
            </GlowCard>
            
            <GlowCard 
              glowColor="green" 
              customSize 
              width="300px" 
              height="150px"
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Fixed Size Card</h3>
                <p className="text-white/70">300px × 150px dimensions</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Interactive Demo</h2>
          <p className="text-white/70 mb-8 text-center">
            Desktop: Move your mouse around to see the interactive glow effects!<br />
            Mobile: Touch devices automatically use animated glow effects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard glowColor="blue" size="lg" className="cursor-pointer" mobileMode="breathe">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Blue</h3>
                <p className="text-white/70">Desktop: Mouse tracking | Mobile: Breathe animation</p>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="purple" size="lg" className="cursor-pointer" mobileMode="rotate">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Purple</h3>
                <p className="text-white/70">Desktop: Cursor tracking | Mobile: Rotate animation</p>
              </div>
            </GlowCard>
            
            <GlowCard glowColor="green" size="lg" className="cursor-pointer" mobileMode="pulse">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interactive Green</h3>
                <p className="text-white/70">Desktop: Spotlight effect | Mobile: Pulse animation</p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* Mobile Glow Effect Demo */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Mobile Glow Effect Demo</h2>
          <p className="text-white/70 mb-8 text-center">
            Standalone GlowEffect component with different animation modes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-44 w-64 rounded-lg bg-black p-4 text-white">
              <GlowEffect
                colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
                mode="static"
                blur="medium"
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Static Mode</h3>
                <p className="text-sm text-white/70">Fixed gradient background</p>
              </div>
            </div>
            
            <div className="relative h-44 w-64 rounded-lg bg-black p-4 text-white">
              <GlowEffect
                colors={['#4CAF50', '#8BC34A', '#CDDC39', '#00BCD4']}
                mode="breathe"
                blur="medium"
                duration={3}
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Breathe Mode</h3>
                <p className="text-sm text-white/70">Gentle breathing animation</p>
              </div>
            </div>
            
            <div className="relative h-44 w-64 rounded-lg bg-black p-4 text-white">
              <GlowEffect
                colors={['#E91E63', '#9C27B0', '#673AB7', '#3F51B5']}
                mode="rotate"
                blur="medium"
                duration={6}
              />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">Rotate Mode</h3>
                <p className="text-sm text-white/70">Continuous rotation</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
