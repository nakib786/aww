'use client'

import { useState } from 'react'
import { seedPricingData } from '@/lib/seed-pricing-data'
import { Button } from '@/components/ui/Button'

export default function SeedPricingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSeedData = async () => {
    setIsLoading(true)
    setMessage('')
    
    try {
      await seedPricingData()
      setMessage('✅ Pricing data successfully seeded to Firestore!')
    } catch (error) {
      setMessage(`❌ Error seeding data: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space to-ink-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Admin: Seed Pricing Data</h1>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Pricing Data Seeding</h2>
            <p className="text-white/70 mb-6">
              This will populate the Firestore database with the pricing tiers for both taxation and web design services.
            </p>
            
            <Button 
              onClick={handleSeedData}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Seeding Data...' : 'Seed Pricing Data to Firestore'}
            </Button>
          </div>

          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('✅') 
                ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                : 'bg-red-500/20 border border-red-500/30 text-red-300'
            }`}>
              {message}
            </div>
          )}

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-white mb-4">What will be seeded:</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">Taxation Services (3 tiers):</h4>
                <ul className="text-white/70 text-sm space-y-1 ml-4">
                  <li>• Personal Tax - $150</li>
                  <li>• Small Business - $500 (Popular)</li>
                  <li>• Premium Package - $1,200</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Web Design Services (3 tiers):</h4>
                <ul className="text-white/70 text-sm space-y-1 ml-4">
                  <li>• Basic Website - $2,500</li>
                  <li>• Professional - $5,000 (Popular)</li>
                  <li>• Enterprise - $10,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
