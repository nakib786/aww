'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calculator, FileText, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'
import { ServiceContent } from '@/components/ServiceSwitch'

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

const services = [
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
    icon: Users,
    title: 'Bookkeeping',
    description: 'Professional bookkeeping services to keep your business organized and compliant.',
    features: ['Monthly bookkeeping', 'Financial statements', 'Bank reconciliation', 'Software setup']
  }
]

const benefits = [
  'BC-first expertise with local tax knowledge',
  'CRA audit support and correspondence handling',
  'Modern software and secure document sharing',
  'Year-round support, not just tax season',
  'Competitive pricing with transparent fees',
  'Free initial consultation'
]

export default function TaxationServicesPage() {
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
            <motion.div
              variants={fadeInUp}
              className="w-20 h-20 mx-auto mb-6 bg-slate-700/60 border border-slate-500/50 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <FileText className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Professional </span>
              <span className="text-gradient">Taxation Services</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
              Expert tax services for individuals and small businesses across Canada, 
              with specialized knowledge of BC tax regulations and CRA requirements.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <ButtonLiquidGlass asChild>
                <Link href="/contact">
                  Book Free Consultation
                </Link>
              </ButtonLiquidGlass>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/60">
                      <CheckCircle className="h-4 w-4 text-accent-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Why Choose <span className="text-gradient">Our Tax Services</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Book a free consultation to discuss your tax needs and get a personalized quote.
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
