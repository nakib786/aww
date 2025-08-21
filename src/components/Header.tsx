'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ServiceSwitch } from './ServiceSwitch'
import { Button } from './ui/Button'
import { AnimatedLogo, LogoMark } from './AnimatedLogo'
import { useScrollStore } from '@/lib/store'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services/taxation' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY, scrollDirection } = useScrollStore()
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      useScrollStore.getState().setScrollY(currentScrollY)
      useScrollStore.getState().setScrollDirection(
        currentScrollY > lastScrollY ? 'down' : 'up'
      )
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const shouldHideHeader = scrollY > 100 && scrollDirection === 'down'

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrollY > 50 ? 'glass border-b border-white/10' : 'bg-transparent'
        )}
        initial={{ y: 0 }}
        animate={{ y: shouldHideHeader ? -100 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {scrollY > 50 ? (
                <LogoMark size={32} className="transition-all duration-300" />
              ) : (
                <AnimatedLogo 
                  size="sm" 
                  autoPlay={false}
                  className="transition-all duration-300" 
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/70 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Service Switch & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <ServiceSwitch />
              <Button variant="magnetic" asChild>
                <Link href="/contact">Book Consult</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-ink-black/95 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative flex flex-col h-full pt-24 pb-8 px-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col space-y-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-medium text-white/70 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                <ServiceSwitch />
                <Button variant="magnetic" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book Consult
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
