'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, Calculator, Globe, FileText, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'
import { CreativePricing } from '@/components/ui/creative-pricing'
import type { PricingTier } from '@/components/ui/creative-pricing'
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



const creativeTaxationTiers: PricingTier[] = [
  {
    name: "Personal Tax",
    icon: <FileText className="w-6 h-6" />,
    price: 150,
    description: "Complete personal tax filing for individuals",
    color: "blue",
    features: [
      "T1 personal tax return",
      "BC-specific tax credits",
      "CRA correspondence support",
      "Tax planning consultation",
    ],
  },
  {
    name: "Small Business",
    icon: <Calculator className="w-6 h-6" />,
    price: 500,
    description: "Comprehensive tax services for small businesses",
    color: "green",
    features: [
      "T2 corporate tax return",
      "GST/PST filing",
      "Payroll setup & management",
      "Business expense optimization",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    icon: <Shield className="w-6 h-6" />,
    price: 1200,
    description: "Complete tax management for growing businesses",
    color: "purple",
    features: [
      "All Small Business features",
      "Monthly bookkeeping",
      "Quarterly tax planning",
      "CRA representation",
    ],
  },
];

const creativeWebDesignTiers: PricingTier[] = [
  {
    name: "Basic Website",
    icon: <Globe className="w-6 h-6" />,
    price: 2500,
    description: "Professional website for small businesses",
    color: "blue",
    features: [
      "5-page responsive website",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
    ],
  },
  {
    name: "Professional",
    icon: <Shield className="w-6 h-6" />,
    price: 5000,
    description: "Feature-rich website with advanced functionality",
    color: "green",
    features: [
      "10-page responsive website",
      "Custom design system",
      "Advanced SEO optimization",
      "Content management system",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: <Calculator className="w-6 h-6" />,
    price: 10000,
    description: "Full-service digital transformation",
    color: "purple",
    features: [
      "Unlimited pages",
      "E-commerce integration",
      "Custom functionality",
      "Ongoing support",
    ],
  },
];

const faqs = [
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans for larger projects. We typically require 50% upfront and the remainder upon completion.'
  },
  {
    question: 'What\'s included in the support period?',
    answer: 'Support includes bug fixes, minor updates, and technical assistance. Major changes or new features are quoted separately.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Tax returns typically take 1-2 weeks. Website projects range from 2-8 weeks depending on complexity and scope.'
  },
  {
    question: 'Do you work with clients outside of BC?',
    answer: 'Yes, we serve clients across Canada for both tax services and web design projects.'
  },
  {
    question: 'What if I\'m not satisfied with the work?',
    answer: 'We offer a satisfaction guarantee. If you\'re not happy with our work, we\'ll make it right or provide a full refund.'
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes, we offer ongoing maintenance packages for websites and year-round tax support for business clients.'
  }
]

export default function PricingPage() {
  const [selectedService, setSelectedService] = useState<'taxation' | 'web-design'>('taxation')

  

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-deep-space to-ink-black">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center mb-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">Transparent </span>
              <span className="text-gradient">Pricing</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-6"
            >
              Clear, competitive pricing for both our tax services and web design projects. 
              No hidden fees, no surprises.
            </motion.p>

            {/* Service Toggle */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mb-6"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 rounded-full p-1">
                <div className="flex relative">
                  <button
                    onClick={() => setSelectedService('taxation')}
                    className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-full z-10 ${
                      selectedService === 'taxation'
                        ? 'text-white'
                        : 'text-white/70 hover:text-white/90'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Taxation Services
                    </span>
                  </button>
                  <button
                    onClick={() => setSelectedService('web-design')}
                    className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 rounded-full z-10 ${
                      selectedService === 'web-design'
                        ? 'text-white'
                        : 'text-white/70 hover:text-white/90'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Web Design
                    </span>
                  </button>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute top-1 bottom-1 bg-slate-700/60 border border-slate-500/50 rounded-full"
                    initial={false}
                    animate={{
                      left: selectedService === 'taxation' ? '4px' : '50%',
                      width: selectedService === 'taxation' ? 'calc(50% - 4px)' : 'calc(50% - 4px)',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Creative Pricing Section */}
      <section className="section-padding">
        <div className="container">
          <CreativePricing 
            tag={selectedService === 'taxation' ? "Taxation Services" : "Web Design Services"}
            title={selectedService === 'taxation' ? "Professional Tax Solutions" : "Modern Web Solutions"}
            description={selectedService === 'taxation' ? "Expert tax services for individuals and businesses across Canada" : "Cutting-edge websites that drive results for your business"}
            tiers={selectedService === 'taxation' ? creativeTaxationTiers : creativeWebDesignTiers}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-b from-ink-black to-deep-space">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <GlowCard
                  glowColor={index % 2 === 0 ? 'blue' : 'purple'}
                  customSize={true}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                  mobileMode="breathe"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </GlowCard>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Book a free consultation to discuss your needs and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLiquidGlass asChild>
                  <Link href="/contact">
                    Book Free Consultation
                  </Link>
                </ButtonLiquidGlass>
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
