import { useState, useEffect } from 'react'
import { getPricingTiers, PricingTier } from './firebase-utils'

export const usePricingData = (serviceType?: 'taxation' | 'web-design') => {
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const result = await getPricingTiers(serviceType)
        
        if (result.error) {
          setError(result.error as string)
        } else {
          setPricingTiers(result.data)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch pricing data')
      } finally {
        setLoading(false)
      }
    }

    fetchPricingData()
  }, [serviceType])

  return { pricingTiers, loading, error }
}

// Helper function to convert Firestore pricing data to component format
export const convertToComponentFormat = (pricingTiers: PricingTier[]) => {
  return pricingTiers.map(tier => ({
    name: tier.name,
    icon: tier.icon,
    price: tier.price,
    description: tier.description,
    color: tier.color,
    features: tier.features,
    popular: tier.popular || false,
  }))
}
