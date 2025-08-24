# Pricing Data Seeding for Aurora N&N Business Solutions

This document explains how to seed pricing information to the Firestore database for the Aurora N&N Business Solutions website.

## Overview

The pricing system stores pricing tiers for both taxation services and web design services in Firestore. Each pricing tier includes:

- Name and description
- Price
- Features list
- Color theme
- Popular flag
- Service type (taxation or web-design)
- Timestamps

## Database Structure

### Collection: `pricing_tiers`

Each document contains:
```typescript
{
  name: string
  icon: string
  price: number
  description: string
  color: 'blue' | 'green' | 'purple'
  features: string[]
  popular?: boolean
  serviceType: 'taxation' | 'web-design'
  createdAt: Date
  updatedAt: Date
}
```

## Seeding Methods

### Method 1: Command Line Script (Recommended)

1. Ensure your Firebase environment variables are set in `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

2. Run the seeding script:
   ```bash
   npm run seed-pricing
   ```

### Method 2: Admin Page

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/admin/seed-pricing`

3. Click the "Seed Pricing Data to Firestore" button

### Method 3: Programmatic

```typescript
import { seedPricingData } from '@/lib/seed-pricing-data'

// Seed all pricing data
await seedPricingData()
```

## Pricing Data

### Taxation Services
1. **Personal Tax** - $150
   - T1 personal tax return
   - BC-specific tax credits
   - CRA correspondence support
   - Tax planning consultation

2. **Small Business** - $500 (Popular)
   - T2 corporate tax return
   - GST/PST filing
   - Payroll setup & management
   - Business expense optimization

3. **Premium Package** - $1,200
   - All Small Business features
   - Monthly bookkeeping
   - Quarterly tax planning
   - CRA representation

### Web Design Services
1. **Basic Website** - $2,500
   - 5-page responsive website
   - Contact form
   - Basic SEO setup
   - Google Analytics

2. **Professional** - $5,000 (Popular)
   - 10-page responsive website
   - Custom design system
   - Advanced SEO optimization
   - Content management system

3. **Enterprise** - $10,000
   - Unlimited pages
   - E-commerce integration
   - Custom functionality
   - Ongoing support

## Utility Functions

### Fetching Pricing Data

```typescript
import { getPricingTiers } from '@/lib/firebase-utils'

// Get all pricing tiers
const { data, error } = await getPricingTiers()

// Get only taxation pricing tiers
const { data, error } = await getPricingTiers('taxation')

// Get only web design pricing tiers
const { data, error } = await getPricingTiers('web-design')
```

### Using the Custom Hook

```typescript
import { usePricingData } from '@/lib/pricing-hooks'

function PricingComponent() {
  const { pricingTiers, loading, error } = usePricingData('taxation')
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return (
    <div>
      {pricingTiers.map(tier => (
        <div key={tier.id}>
          <h3>{tier.name}</h3>
          <p>${tier.price}</p>
        </div>
      ))}
    </div>
  )
}
```

## Updating Pricing Data

To update existing pricing tiers:

```typescript
import { updatePricingTier } from '@/lib/firebase-utils'

await updatePricingTier('document_id', {
  price: 175,
  features: ['Updated feature 1', 'Updated feature 2']
})
```

## Deleting Pricing Data

To delete a pricing tier:

```typescript
import { deletePricingTier } from '@/lib/firebase-utils'

await deletePricingTier('document_id')
```

## Security Rules

Make sure your Firestore security rules allow read access to pricing data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /pricing_tiers/{document} {
      allow read: if true;  // Anyone can read pricing data
      allow write: if request.auth != null;  // Only authenticated users can write
    }
  }
}
```

## Troubleshooting

### Common Issues

1. **Environment Variables Not Set**
   - Ensure all Firebase environment variables are properly configured
   - Check that the Firebase project is set up correctly

2. **Permission Denied**
   - Verify Firestore security rules allow write operations
   - Ensure you're authenticated if required

3. **Data Already Exists**
   - The script checks for existing data and won't duplicate
   - Clear existing data manually if you need to re-seed

### Checking Data

To verify the data was seeded correctly:

1. Go to Firebase Console
2. Navigate to Firestore Database
3. Look for the `pricing_tiers` collection
4. Verify all 6 documents are present (3 taxation + 3 web design)

## Next Steps

After seeding the pricing data, you can:

1. Update the pricing page to fetch data from Firestore instead of using hardcoded data
2. Create an admin interface to manage pricing tiers
3. Implement dynamic pricing updates without code changes
4. Add analytics to track pricing page views and conversions
