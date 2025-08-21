'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Globe, Calculator, Code, Shield, Search, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MagnetizeButton } from '@/components/ui/magnetize-button'

import { ServiceSwitch } from '@/components/ServiceSwitch'
import { useServiceStore } from '@/lib/store'
import { useEffect, useState } from 'react'
import { GlowCard } from '@/components/ui/spotlight-card'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const taxationServices = [
  {
    icon: FileText,
    title: 'Personal Tax Returns',
    description: 'Complete personal tax filing for individuals and families across Canada, with special expertise in BC tax regulations.',
    features: ['T1 returns', 'BC-specific credits', 'CRA correspondence', 'Tax planning']
  },
  {
    icon: Calculator,
    title: 'Small Business Tax',
    description: 'Comprehensive tax services for small businesses, including GST/PST registration and filing.',
    features: ['T2 returns', 'GST/PST filing', 'Payroll setup', 'Business planning']
  },
  {
    icon: Shield,
    title: 'CRA Support',
    description: 'Expert assistance with CRA correspondence, audits, and compliance issues.',
    features: ['Audit support', 'CRA letters', 'Compliance reviews', 'Appeals assistance']
  },
  {
    icon: Search,
    title: 'Bookkeeping',
    description: 'Professional bookkeeping services to keep your business organized and compliant.',
    features: ['Monthly bookkeeping', 'Financial statements', 'Bank reconciliation', 'Software setup']
  }
]

const webDesignServices = [
  {
    icon: Globe,
    title: 'Custom Website Design',
    description: 'Beautiful, modern websites built with cutting-edge technology for optimal performance and user experience.',
    features: ['Responsive design', 'Modern UI/UX', 'Performance optimized', 'SEO ready']
  },
  {
    icon: Code,
    title: 'Modern Web Development',
    description: 'High-performance web applications built with the latest technologies and best practices.',
    features: ['App Router', 'Server components', 'API routes', 'TypeScript']
  },
  {
    icon: Search,
    title: 'SEO & Analytics',
    description: 'Search engine optimization and analytics setup to help your business grow online.',
    features: ['Technical SEO', 'Content optimization', 'Google Analytics', 'Performance tracking']
  },
  {
    icon: Shield,
    title: 'Mobile-First Design',
    description: 'Websites that look and work perfectly on all devices, with mobile-first design principles.',
    features: ['Mobile optimized', 'Touch friendly', 'Fast loading', 'Cross-browser']
  }
]

const taxationBenefits = [
  'BC-first expertise with local tax knowledge',
  'CRA audit support and correspondence handling',
  'Modern software and secure document sharing',
  'Year-round support, not just tax season',
  'Competitive pricing with transparent fees',
  'Free initial consultation'
]

const webDesignBenefits = [
  'Modern technology stack for optimal performance',
  'Mobile-first responsive design',
  'SEO optimized for better search rankings',
  'Fast loading times and excellent user experience',
  'Ongoing support and maintenance',
  'Competitive pricing with transparent project scope'
]

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false)
  const { currentService } = useServiceStore()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null
  }

  const isTaxation = currentService === 'taxation'

  const currentServices = isTaxation ? taxationServices : webDesignServices
  const currentBenefits = isTaxation ? taxationBenefits : webDesignBenefits

  return (
    <div className="pt-20" key={currentService}>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-deep-space to-ink-black">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="w-20 h-20 mx-auto mb-6 bg-slate-700/60 border border-slate-500/50 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              {isTaxation ? (
                <FileText className="h-10 w-10 text-white" />
              ) : (
                <Globe className="h-10 w-10 text-white" />
              )}
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Professional </span>
              {isTaxation ? (
                <span className="text-gradient">Taxation Services</span>
              ) : (
                <span className="text-gradient">Web Design & Development</span>
              )}
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
              {isTaxation 
                ? "Expert tax services for individuals and small businesses across Canada, with specialized knowledge of BC tax regulations and CRA requirements."
                : "High-performance websites and web applications built with modern technology, designed to convert visitors into customers and help your business grow."
              }
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-center gap-6"
            >
              <ServiceSwitch />
              <div className="flex flex-col sm:flex-row gap-4">
                <MagnetizeButton asChild>
                  <Link href="/contact">
                    {isTaxation ? "Book Free Consultation" : "Start Your Project"}
                  </Link>
                </MagnetizeButton>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            key={`services-${currentService}`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {currentServices.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
              >
                <GlowCard
                  glowColor={isTaxation ? 'blue' : 'purple'}
                  customSize={true}
                  className="w-full h-auto min-h-[400px] p-8"
                  mobileMode="breathe"
                >
                  <div className="flex flex-col h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${
                      isTaxation ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                    } rounded-xl flex items-center justify-center mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-white/70 mb-6 flex-grow">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-white/60">
                          <CheckCircle className="h-4 w-4 text-accent-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-ink-black to-deep-space">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Why Choose {isTaxation ? (
                <span className="text-gradient">Our Tax Services</span>
              ) : (
                <span className="text-gradient">Our Web Design</span>
              )}
            </motion.h2>
          </motion.div>

          <motion.div
            key={`benefits-${currentService}`}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentBenefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={fadeInUp}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <p className="text-white/80">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {isTaxation ? "Ready to Get Started?" : "Ready to Build Something Amazing?"}
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                {isTaxation 
                  ? "Book a free consultation to discuss your tax needs and get a personalized quote."
                  : "Let's discuss your project and create a website that drives results for your business."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagnetizeButton asChild>
                  <Link href="/contact">
                    {isTaxation ? "Book Free Consultation" : "Start Your Project"}
                  </Link>
                </MagnetizeButton>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
