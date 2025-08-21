'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code, Globe, Zap, Smartphone, Search, Shield, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Websites that look and work perfectly on all devices, with mobile-first design principles.',
    features: ['Mobile optimized', 'Touch friendly', 'Fast loading', 'Cross-browser']
  }
]

const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, target audience, and technical requirements.'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Creating beautiful, user-friendly designs with interactive prototypes for your approval.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Building your website with modern technologies and thorough testing across devices.'
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Deploying your site and providing ongoing support, maintenance, and optimization.'
  }
]

const benefits = [
  'Modern technology stack for optimal performance',
  'Mobile-first responsive design',
  'SEO optimized for better search rankings',
  'Fast loading times and excellent user experience',
  'Ongoing support and maintenance',
  'Competitive pricing with transparent project scope'
]

export default function WebDesignServicesPage() {
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
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center"
            >
              <Globe className="h-10 w-10 text-white" />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-white">Modern </span>
              <span className="text-gradient">Web Design</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
                             High-performance websites and web applications built with modern technology, 
               designed to convert visitors into customers and help your business grow.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="magnetic" size="lg" asChild>
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
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

      {/* Process Section */}
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
              Our <span className="text-gradient">Development Process</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
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
              Why Choose <span className="text-gradient">Our Web Design</span>
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
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and create a website that drives results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="magnetic" size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                  </Link>
                </Button>
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
