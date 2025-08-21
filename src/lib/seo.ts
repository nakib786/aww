import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  service?: 'taxation' | 'web-design'
  ogImage?: string
  noIndex?: boolean
}

export function generateSEO({
  title,
  description,
  keywords,
  canonical,
  service = 'taxation',
  ogImage,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = 'https://aurorabusiness.ca'
  
  const defaultTitle = 'Aurora N&N Business Solutions Inc. | Tax Services & Web Design in BC'
  const defaultDescription = 'Professional taxation services and modern web design for small businesses across Canada. Expert CRA guidance, GST/PST filing, and high-performance Next.js websites.'
  const defaultKeywords = 'tax services BC, web design Canada, GST PST registration, Next.js development, small business tax, Vancouver tax services'
  
  const seoTitle = title || defaultTitle
  const seoDescription = description || defaultDescription
  const seoKeywords = keywords || defaultKeywords
  
  // Generate OG image URL
  const ogImageUrl = ogImage || `${baseUrl}/api/og?title=${encodeURIComponent(seoTitle)}&description=${encodeURIComponent(seoDescription)}&service=${service}`
  
  const metadata: Metadata = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: [{ name: 'Aurora N&N Business Solutions Inc.' }],
    creator: 'Aurora N&N Business Solutions Inc.',
    publisher: 'Aurora N&N Business Solutions Inc.',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || baseUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonical || baseUrl,
      siteName: 'Aurora N&N Business Solutions Inc.',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'en_CA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [ogImageUrl],
      creator: '@AuroraNNSolutions',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      // Add other verification codes as needed
    },
  }

  return metadata
}

// Structured data generators
export function generateOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aurora N&N Business Solutions Inc.',
    alternateName: 'Aurora N&N',
    url: 'https://aurorabusiness.ca',
    logo: 'https://aurorabusiness.ca/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-604-555-0123',
        contactType: 'customer service',
        areaServed: 'CA',
        availableLanguage: ['English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vancouver',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    sameAs: [
      'https://www.linkedin.com/company/aurora-nn-solutions',
      'https://twitter.com/AuroraNNSolutions',
    ],
    foundingDate: '2019',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '5-10',
    },
    slogan: 'Clarity for your business—taxes and websites, guided by the Northern Lights.',
    description: 'Professional taxation services and modern web design for small businesses across Canada.',
  }
}

export function generateLocalBusinessLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://aurorabusiness.ca/#business',
    name: 'Aurora N&N Business Solutions Inc.',
    image: 'https://aurorabusiness.ca/logo.png',
    telephone: '+1-604-555-0123',
    email: 'n@aurorabusiness.ca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vancouver',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      postalCode: 'V6B 1A1',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '49.2827',
      longitude: '-123.1207',
    },
    url: 'https://aurorabusiness.ca',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'CAD',
    paymentAccepted: ['Credit Card', 'E-transfer', 'Cash'],
    servesCuisine: null,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson',
        },
        datePublished: '2024-01-15',
        reviewBody: 'Excellent tax services and web design. Very professional and knowledgeable about BC tax requirements.',
        name: 'Outstanding service',
        reviewRating: {
          '@type': 'Rating',
          bestRating: '5',
          ratingValue: '5',
          worstRating: '1',
        },
      },
    ],
  }
}

export function generateWebsiteLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://aurorabusiness.ca/#website',
    url: 'https://aurorabusiness.ca',
    name: 'Aurora N&N Business Solutions Inc.',
    description: 'Professional taxation services and modern web design for small businesses across Canada.',
    publisher: {
      '@id': 'https://aurorabusiness.ca/#organization',
    },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://aurorabusiness.ca/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    ],
    inLanguage: 'en-CA',
  }
}

export function generateServiceLD(service: 'taxation' | 'web-design') {
  const baseService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@id': 'https://aurorabusiness.ca/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://aurorabusiness.ca/contact',
      serviceSmsNumber: '+1-604-555-0123',
      servicePhone: '+1-604-555-0123',
    },
  }

  if (service === 'taxation') {
    return {
      ...baseService,
      name: 'Tax Preparation and Filing Services',
      description: 'Professional tax preparation, filing, and consultation services for individuals and small businesses in Canada, with expertise in BC provincial taxes.',
      serviceType: 'Tax Preparation',
      category: 'Financial Services',
      offers: [
        {
          '@type': 'Offer',
          name: 'Personal Tax Filing',
          description: 'Complete personal income tax preparation and filing service.',
        },
        {
          '@type': 'Offer',
          name: 'Small Business Tax',
          description: 'Tax preparation and filing for small businesses and corporations.',
        },
        {
          '@type': 'Offer',
          name: 'GST/PST Registration and Filing',
          description: 'GST/HST and PST registration, filing, and compliance services.',
        },
      ],
    }
  } else {
    return {
      ...baseService,
      name: 'Web Design and Development Services',
      description: 'Modern web design and development services using Next.js and React for small businesses across Canada.',
      serviceType: 'Web Development',
      category: 'Technology Services',
      offers: [
        {
          '@type': 'Offer',
          name: 'Custom Website Design',
          description: 'Responsive, modern website design tailored to your business needs.',
        },
        {
          '@type': 'Offer',
          name: 'Next.js Development',
          description: 'High-performance web applications built with Next.js and React.',
        },
        {
          '@type': 'Offer',
          name: 'SEO Optimization',
          description: 'Search engine optimization to improve your online visibility.',
        },
      ],
    }
  }
}
