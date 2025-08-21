'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Target, Award, Shield, Heart, Zap, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'
import { LogoShowcase } from '@/components/LogoShowcase'

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
    name: 'Sarah Chen',
    role: 'Founder & Tax Specialist',
    bio: 'Certified tax professional with 8+ years of experience in Canadian taxation, specializing in small business and personal tax optimization.',
    credentials: ['CPA, CGA', 'BC Tax Specialist', 'CRA Liaison'],
    image: '/api/og?title=Sarah%20Chen&description=Founder%20%26%20Tax%20Specialist'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Web Developer',
            bio: 'Full-stack developer with expertise in modern web technologies and frameworks. Passionate about creating high-performance, user-friendly websites.',
        credentials: ['Web Development Expert', 'React Specialist', 'SEO Certified'],
    image: '/api/og?title=Michael%20Rodriguez&description=Lead%20Web%20Developer'
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
  { label: 'Years Experience', value: '8+' },
  { label: 'Clients Served', value: '500+' },
  { label: 'Tax Returns Filed', value: '2000+' },
  { label: 'Websites Built', value: '100+' }
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
              We&apos;re a Vancouver-based team of tax professionals and web developers, 
              dedicated to helping Canadian businesses thrive through expert tax services and modern web solutions.
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
            {stats.map((stat, index) => (
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

      {/* Values Section */}
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
                <div className="w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                    <p className="text-accent-primary mb-4">{member.role}</p>
                    <p className="text-white/70 mb-6">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {member.credentials.map((credential) => (
                        <span
                          key={credential}
                          className="px-3 py-1 bg-accent-primary/20 text-accent-primary text-sm rounded-full"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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

      {/* Logo Showcase */}
      <LogoShowcase />
    </div>
  )
}
