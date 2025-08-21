'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ServiceContent } from '@/components/ServiceSwitch'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(['taxation', 'web-design', 'both']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.enum(['under-1k', '1k-5k', '5k-10k', '10k-plus', 'not-sure']).optional(),
  timeline: z.enum(['asap', '1-month', '2-3-months', '3-plus-months', 'flexible']).optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

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

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <span className="text-white">Let&apos;s </span>
              <span className="text-gradient">work together</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              <ServiceContent
                taxation="Ready to simplify your taxes or launch your dream website? Get in touch for a free consultation."
                webDesign="Ready to launch your dream website or simplify your taxes? Get in touch for a free consultation."
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-ink-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">n@aurorabusiness.ca</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+1 (604) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/70">Vancouver, BC, Canada</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-white/70">Mon-Fri: 9AM-6PM PST</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 glass rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>24-hour response time</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>BC tax expertise</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                    <span>Modern web solutions</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400">Thank you! We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-primary transition-colors"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-primary transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Phone</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-primary transition-colors"
                      placeholder="(604) 555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      {...register('company')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-primary transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Service Needed *</label>
                  <select
                    {...register('service')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="taxation">Taxation Services</option>
                    <option value="web-design">Web Design</option>
                    <option value="both">Both Services</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-red-400 text-sm">{errors.service.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Budget Range</label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-primary transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-5k">$1,000 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Timeline</label>
                    <select
                      {...register('timeline')}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-primary transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-plus-months">3+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    placeholder="Tell us about your project or tax needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="magnetic"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
