'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Target, Shield, Heart, CheckCircle, Zap, Calculator, Globe, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'

import { GlowEffect } from '@/components/ui/glow-effect'
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

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from tax preparation to web design.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Honest, transparent, and ethical practices in all our client relationships.'
  },
  {
    icon: Heart,
    title: 'Client-First',
    description: 'Your success is our success. We put your needs and goals first.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Using the latest technologies and best practices to deliver exceptional results.'
  }
]

const team = [
  {
    name: 'Nidhi Arora',
    role: 'Financial Management & Tax Specialist',
    bio: 'Experienced financial management professional with a strong track record in Canadian taxation and accounting. Specialized in financial management, audit, and assurance with expertise in Canadian securities and investment funds. Certified with multiple professional qualifications including CPA preparation and strategic planning.',
    credentials: ['CPA Preparation', 'Strategic Planning', 'Excel for Accountants', 'Investment Funds Canada', 'Audit & Assurance'],
    initials: 'NA',
    location: 'Kamloops, British Columbia',
    experience: '8+ years in financial management and accounting'
  },
  {
    name: 'Nakib Shaikh',
    role: 'Web Development & Technology Lead',
    bio: 'Full-stack developer and technology specialist with expertise in modern web technologies, React, and creating high-performance, user-friendly websites. Passionate about innovative web solutions and digital transformation.',
    credentials: ['Full-Stack Development', 'React Specialist', 'Web Technologies', 'Digital Solutions'],
    initials: 'NS',
    location: 'Vancouver, British Columbia',
    experience: '5+ years in web development and technology'
  }
]

const methodology = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your unique needs, goals, and current situation through comprehensive consultation.'
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description: 'Develop a customized strategy that aligns with your objectives and maximizes your potential for success.'
  },
  {
    step: '03',
    title: 'Expert Execution',
    description: 'Our experienced team implements the plan with precision, using proven methodologies and best practices.'
  },
  {
    step: '04',
    title: 'Ongoing Support',
    description: 'We provide continuous support and optimization to ensure long-term success and growth.'
  }
]

const stats = [
  { label: 'Years Combined Experience', value: '13+' },
  { label: 'Clients Served', value: '500+' },
  { label: 'Tax Returns Filed', value: '2000+' },
  { label: 'Websites Built', value: '100+' }
]

const services = [
  {
    icon: Calculator,
    title: 'Tax Services',
    description: 'Comprehensive Canadian tax preparation, planning, and optimization for individuals and businesses.'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.'
  },
  {
    icon: Users,
    title: 'Financial Consulting',
    description: 'Strategic financial planning and management services to help your business grow.'
  },
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Certified professionals with proven track records in their respective fields.'
  }
]

export default function AboutPage() {
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
              <span className="text-white">About </span>
              <span className="text-gradient">Aurora N&N</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
              We&apos;re a British Columbia-based team of financial professionals and web developers, 
              dedicated to helping Canadian businesses thrive through expert tax services, financial management, and modern web solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Our <span className="text-gradient">Services</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="text-center"
              >
                <GlowCard 
                  glowColor={index % 2 === 0 ? 'blue' : 'purple'}
                  size="md"
                  customSize={true}
                  className="w-full h-auto p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient">Values</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center"
              >
                <GlowCard 
                  glowColor={index === 0 ? 'green' : index === 1 ? 'blue' : index === 2 ? 'purple' : 'orange'}
                  size="md"
                  customSize={true}
                  className="w-full h-auto p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our <span className="text-gradient">Team</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid lg:grid-cols-2 gap-12"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="text-center"
              >
                <GlowCard 
                  glowColor={index === 0 ? 'purple' : 'blue'}
                  size="lg"
                  customSize={true}
                  className="w-full h-auto p-8"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {/* Glow behind initials */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/40 to-accent-secondary/40 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full" />
                      <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center border-2 border-gray-300">
                        <span className="text-black text-3xl font-bold tracking-wider">
                          {member.initials}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                      <p className="text-accent-primary mb-2">{member.role}</p>
                      <p className="text-white/60 text-sm mb-3">{member.location}</p>
                      <p className="text-white/70 mb-4">{member.bio}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        {member.credentials.map((credential) => (
                          <span
                            key={credential}
                            className="px-3 py-1 bg-accent-primary/20 text-accent-primary text-sm rounded-full"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-accent-secondary text-sm font-medium">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Our <span className="text-gradient">Methodology</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {methodology.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="text-center"
              >
                <GlowCard 
                  glowColor={index === 0 ? 'blue' : index === 1 ? 'purple' : index === 2 ? 'green' : 'orange'}
                  size="md"
                  customSize={true}
                  className="w-full h-auto p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
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
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and see how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLiquidGlass asChild>
                  <Link href="/contact">
                    Get Started
                  </Link>
                </ButtonLiquidGlass>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services/taxation">
                    Our Services
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
