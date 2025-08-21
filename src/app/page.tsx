'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Calculator, FileText, Globe, Zap } from 'lucide-react'
import { AuroraCanvas, useReducedMotion } from '@/components/AuroraCanvas'
import { ServiceSwitch, ServiceContent } from '@/components/ServiceSwitch'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'
import { Marquee } from '@/components/Marquee'
import { StatCounter } from '@/components/StatCounter'
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
        
        {/* Additional Ribbon Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Top Left Ribbon */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-aurora-cyan/20 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Top Right Ribbon */}
          <motion.div
            className="absolute -top-32 -right-16 w-32 h-32 bg-gradient-to-bl from-lime-green/20 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Bottom Left Ribbon */}
          <motion.div
            className="absolute -bottom-24 -left-12 w-36 h-36 bg-gradient-to-tr from-magenta/20 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Bottom Right Ribbon */}
          <motion.div
            className="absolute -bottom-16 -right-24 w-28 h-28 bg-gradient-to-tl from-aurora-cyan/15 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          {/* Center Top Ribbon */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-lime-green/10 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          
          {/* Floating Ribbon Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-aurora-cyan to-lime-green rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </div>
        
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
              <ButtonLiquidGlass asChild>
                <Link href="/contact">
                  <ServiceContent
                    taxation="Get Tax Consultation"
                    webDesign="Start Your Project"
                  />
                </Link>
              </ButtonLiquidGlass>
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
            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="purple" 
                size="lg" 
                className="text-center h-full flex flex-col justify-center"
                mobileMode="breathe"
              >
                <div className="flex-1 flex flex-col items-center justify-center relative z-20">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
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
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="blue" 
                size="lg" 
                className="text-center h-full flex flex-col justify-center"
                mobileMode="rotate"
              >
                <div className="flex-1 flex flex-col items-center justify-center relative z-20">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
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
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="green" 
                size="lg" 
                className="text-center h-full flex flex-col justify-center"
                mobileMode="pulse"
              >
                <div className="flex-1 flex flex-col items-center justify-center relative z-20">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">One Partner</h3>
                  <div className="text-white/70">
                    Finance + web under one roof—fast feedback loops and integrated business solutions.
                  </div>
                </div>
              </GlowCard>
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
              <ButtonLiquidGlass asChild>
                <Link href="/contact">
                  <ServiceContent
                    taxation="Book Tax Consultation"
                    webDesign="Book Web Consultation"
                  />
                </Link>
              </ButtonLiquidGlass>
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
