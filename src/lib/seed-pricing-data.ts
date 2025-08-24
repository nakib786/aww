import { createPricingTier } from './firebase-utils'

const taxationPricingTiers = [
  {
    name: "Personal Tax",
    icon: "FileText",
    price: 150,
    description: "Complete personal tax filing for individuals",
    color: "blue" as const,
    features: [
      "T1 personal tax return",
      "BC-specific tax credits",
      "CRA correspondence support",
      "Tax planning consultation",
    ],
    serviceType: "taxation" as const,
  },
  {
    name: "Small Business",
    icon: "Calculator",
    price: 500,
    description: "Comprehensive tax services for small businesses",
    color: "green" as const,
    features: [
      "T2 corporate tax return",
      "GST/PST filing",
      "Payroll setup & management",
      "Business expense optimization",
    ],
    popular: true,
    serviceType: "taxation" as const,
  },
  {
    name: "Premium Package",
    icon: "Shield",
    price: 1200,
    description: "Complete tax management for growing businesses",
    color: "purple" as const,
    features: [
      "All Small Business features",
      "Monthly bookkeeping",
      "Quarterly tax planning",
      "CRA representation",
    ],
    serviceType: "taxation" as const,
  },
]

const webDesignPricingTiers = [
  {
    name: "Basic Website",
    icon: "Globe",
    price: 2500,
    description: "Professional website for small businesses",
    color: "blue" as const,
    features: [
      "5-page responsive website",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
    ],
    serviceType: "web-design" as const,
  },
  {
    name: "Professional",
    icon: "Shield",
    price: 5000,
    description: "Feature-rich website with advanced functionality",
    color: "green" as const,
    features: [
      "10-page responsive website",
      "Custom design system",
      "Advanced SEO optimization",
      "Content management system",
    ],
    popular: true,
    serviceType: "web-design" as const,
  },
  {
    name: "Enterprise",
    icon: "Calculator",
    price: 10000,
    description: "Full-service digital transformation",
    color: "purple" as const,
    features: [
      "Unlimited pages",
      "E-commerce integration",
      "Custom functionality",
      "Ongoing support",
    ],
    serviceType: "web-design" as const,
  },
]

export const seedPricingData = async () => {
  console.log('🌱 Starting to seed pricing data...')
  
  try {
    // Seed taxation pricing tiers
    console.log('📊 Seeding taxation pricing tiers...')
    for (const tier of taxationPricingTiers) {
      const result = await createPricingTier(tier)
      if (result.error) {
        console.error(`❌ Error creating taxation tier "${tier.name}":`, result.error)
      } else {
        console.log(`✅ Created taxation tier "${tier.name}" with ID: ${result.id}`)
      }
    }

    // Seed web design pricing tiers
    console.log('🎨 Seeding web design pricing tiers...')
    for (const tier of webDesignPricingTiers) {
      const result = await createPricingTier(tier)
      if (result.error) {
        console.error(`❌ Error creating web design tier "${tier.name}":`, result.error)
      } else {
        console.log(`✅ Created web design tier "${tier.name}" with ID: ${result.id}`)
      }
    }

    console.log('🎉 Pricing data seeding completed!')
  } catch (error) {
    console.error('💥 Error seeding pricing data:', error)
  }
}

// Export the data for reference
export { taxationPricingTiers, webDesignPricingTiers }
