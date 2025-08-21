'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, X, Star, Calculator, Globe, FileText, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'

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

const taxationPlans = [
  {
    name: 'Personal Tax',
    price: '$150',
    period: 'per return',
    description: 'Complete personal tax filing for individuals and families',
    features: [
      'T1 personal tax return',
      'BC-specific tax credits',
      'CRA correspondence support',
      'Tax planning consultation',
      'Electronic filing',
      '1 year of support'
    ],
    icon: FileText,
    popular: false
  },
  {
    name: 'Small Business Tax',
    price: '$500',
    period: 'per return',
    description: 'Comprehensive tax services for small businesses',
    features: [
      'T2 corporate tax return',
      'GST/PST filing',
      'Payroll setup & management',
      'Business expense optimization',
      'CRA audit support',
      'Year-round consultation'
    ],
    icon: Calculator,
    popular: true
  },
  {
    name: 'Premium Tax Package',
    price: '$1,200',
    period: 'per year',
    description: 'Complete tax management for growing businesses',
    features: [
      'All Small Business features',
      'Monthly bookkeeping',
      'Quarterly tax planning',
      'CRA representation',
      'Financial statements',
      'Priority support'
    ],
    icon: Shield,
    popular: false
  }
]

const webDesignPlans = [
  {
    name: 'Basic Website',
    price: '$2,500',
    period: 'one-time',
    description: 'Professional website for small businesses',
    features: [
      '5-page responsive website',
      'Contact form',
      'Basic SEO setup',
      'Google Analytics',
      'Mobile optimization',
      '1 month of support'
    ],
    icon: Globe,
    popular: false
  },
  {
    name: 'Professional Website',
    price: '$5,000',
    period: 'one-time',
    description: 'Feature-rich website with advanced functionality',
    features: [
      '10-page responsive website',
      'Custom design system',
      'Advanced SEO optimization',
      'Content management system',
      'E-commerce integration',
      '3 months of support'
    ],
    icon: Globe,
    popular: true
  },
  {
    name: 'E-commerce Website',
    price: '$8,000',
    period: 'one-time',
    description: 'Full e-commerce solution with payment processing',
    features: [
      'All Professional features',
      'Online store setup',
      'Payment gateway integration',
      'Inventory management',
      'Order processing',
      '6 months of support'
    ],
    icon: Globe,
    popular: false
  }
]

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

  const plans = selectedService === 'taxation' ? taxationPlans : webDesignPlans

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-deep-space to-ink-black">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Transparent </span>
              <span className="text-gradient">Pricing</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
              Clear, competitive pricing for both our tax services and web design projects. 
              No hidden fees, no surprises.
            </motion.p>

            {/* Service Toggle */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mb-8"
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

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-accent-primary/50 bg-gradient-to-b from-accent-primary/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-slate-700/80 border border-slate-500/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-slate-700/60 border border-slate-500/50 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-white/60 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <Check className="h-5 w-5 text-accent-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.popular ? (
                  <ButtonLiquidGlass className="w-full" asChild>
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </ButtonLiquidGlass>
                ) : (
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/contact">
                      Get Started
                    </Link>
                  </Button>
                )}
              </motion.div>
            ))}
          </motion.div>
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
            className="text-center mb-16"
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
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
