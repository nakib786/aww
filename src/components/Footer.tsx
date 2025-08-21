'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from 'lucide-react'
import { ServiceContent } from './ServiceSwitch'

const footerLinks = {
  services: [
    { name: 'Personal Tax Filing', href: '/services/taxation' },
    { name: 'Small Business Tax', href: '/services/taxation' },
    { name: 'GST/PST Registration', href: '/services/taxation' },
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'Web Development', href: '/services/web-design' },
    { name: 'SEO Services', href: '/services/web-design' },
  ],
  resources: [
    { name: 'Blog', href: '/resources' },
    { name: 'Tax Guides', href: '/resources' },
    { name: 'Web Tips', href: '/resources' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-ink-black border-t border-white/10">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
                Aurora N&N
              </Link>
              
              <ServiceContent
                taxation={
                  <div className="text-white/70 mb-6">
                    Professional tax services for Canadians and small businesses in BC. 
                    Expert guidance through CRA requirements and tax optimization.
                  </div>
                }
                webDesign={
                  <div className="text-white/70 mb-6">
                    Modern web design and development for small businesses across Canada. 
                    High-performance websites that convert.
                  </div>
                }
              />

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail size={18} />
                  <span>n@aurorabusiness.ca</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone size={18} />
                  <span>+1 (604) 555-0123</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin size={18} />
                  <span>Vancouver, BC, Canada</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-white/70 hover:text-accent-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} Aurora N&N Business Solutions Inc. All rights reserved.
          </div>
                     <div className="text-white/50 text-sm mt-4 md:mt-0">
             Built with modern technologies and hosted on Vercel
           </div>
        </motion.div>
      </div>
    </footer>
  )
}
