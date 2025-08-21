'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Calculator, FileText, Globe, Zap } from 'lucide-react'
import { AuroraCanvas, useReducedMotion } from '@/components/AuroraCanvas'
import { ServiceSwitch, ServiceContent } from '@/components/ServiceSwitch'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/Marquee'
import { StatCounter } from '@/components/StatCounter'


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

export default function Home() {
  const reducedMotion = useReducedMotion()

  return (
    <>
              {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Aurora Background */}
                      <AuroraCanvas 
              className="absolute inset-0 z-0 opacity-50" 
              reducedMotion={reducedMotion}
            />
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >


            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <ServiceContent
                taxation={
                  <>
                    <span className="text-white">Tax clarity for individuals and businesses—</span>
                    <br />
                    <span className="text-gradient">filing made simple.</span>
                  </>
                }
                webDesign={
                  <>
                    <span className="text-white">Digital presence for your business—</span>
                    <br />
                    <span className="text-gradient">websites that convert.</span>
                  </>
                }
              />
            </motion.h1>

            <motion.div 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
            >
              <ServiceContent
                taxation="Expert BC tax services for personal and business returns. GST/PST filing, CRA support, and personalized tax guidance to maximize your returns."
                webDesign="Modern, high-performance websites that rank and convert. Built with cutting-edge technology to help your business grow online."
              />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button variant="magnetic" size="lg" asChild>
                <Link href="/contact">
                  <ServiceContent
                    taxation="Get Tax Consultation"
                    webDesign="Start Your Project"
                  />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <ServiceContent
                  taxation={
                    <Link href="/services/taxation">
                      View Tax Services
                    </Link>
                  }
                  webDesign={
                    <Link href="/services/web-design">
                      View Web Services
                    </Link>
                  }
                />
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center"
            >
              <ServiceSwitch />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Value Props Section */}
      <section className="section-padding bg-ink-black">
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
              <span className="text-white">Why choose </span>
              <span className="text-gradient">Aurora N&N</span>
              <span className="text-white">?</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                <ServiceContent
                  taxation={<FileText className="h-8 w-8 text-white" />}
                  webDesign={<Globe className="h-8 w-8 text-white" />}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                <ServiceContent
                  taxation="BC-First Tax Expertise"
                  webDesign="Modern Craft"
                />
              </h3>
              <div className="text-white/70">
                <ServiceContent
                  taxation="GST/PST, CRA support, and real-world small business filing expertise."
                  webDesign="High-performance websites designed to rank and convert using modern technology."
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                <ServiceContent
                  taxation={<Calculator className="h-8 w-8 text-white" />}
                  webDesign={<Zap className="h-8 w-8 text-white" />}
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                <ServiceContent
                  taxation="Expert Tax Guidance"
                  webDesign="Lightning Fast Performance"
                />
              </h3>
              <div className="text-white/70">
                <ServiceContent
                  taxation="Professional tax advice and filing services with personalized support."
                  webDesign="Optimized for Core Web Vitals with LCP < 2.5s and perfect Lighthouse scores."
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="glass p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">One Partner</h3>
              <div className="text-white/70">
                Finance + web under one roof—fast feedback loops and integrated business solutions.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <StatCounter 
                value={500} 
                suffix="+" 
                className="text-4xl md:text-5xl font-bold text-gradient block mb-2"
              />
              <div className="text-white/70">
                <ServiceContent
                  taxation="Tax Returns Filed"
                  webDesign="Websites Built"
                />
              </div>
            </div>
            <div>
              <StatCounter 
                value={98} 
                suffix="%" 
                className="text-4xl md:text-5xl font-bold text-gradient block mb-2"
              />
              <div className="text-white/70">Client Satisfaction</div>
            </div>
            <div>
              <StatCounter 
                value={5} 
                className="text-4xl md:text-5xl font-bold text-gradient block mb-2"
              />
              <div className="text-white/70">Years Experience</div>
            </div>
            <div>
              <StatCounter 
                value={24} 
                suffix="h" 
                className="text-4xl md:text-5xl font-bold text-gradient block mb-2"
              />
              <div className="text-white/70">Average Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Tools Marquee */}
      <section className="py-12 border-y border-white/10">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/50 mb-8"
          >
            <ServiceContent
              taxation="Trusted by CRA-registered professionals and integrated with leading accounting software"
              webDesign="Built with industry-leading technologies and frameworks"
            />
          </motion.div>
          <Marquee />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ink-black">
        <div className="container text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold mb-6 text-white"
            >
              <ServiceContent
                taxation="Ready to optimize your personal and business taxes?"
                webDesign="Ready to launch your website?"
              />
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="text-xl text-white/80 mb-8"
            >
              <ServiceContent
                taxation="Book a free consultation and discover how we can maximize your personal and business tax returns while minimizing your stress."
                webDesign="Book a free consultation and discover how we can transform your business with a powerful online presence."
              />
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="magnetic" size="lg" asChild>
                <Link href="/contact">
                  <ServiceContent
                    taxation="Book Tax Consultation"
                    webDesign="Book Web Consultation"
                  />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
