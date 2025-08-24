'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { getCurrentUser, signOut } from '@/lib/firebase-utils'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'
import { GlowCard } from '@/components/ui/spotlight-card'
import { 
  Shield, 
  LogOut, 
  DollarSign
} from 'lucide-react'
import Link from 'next/link'

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

export default function AdminDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push('/admin/login')
      return
    }

    setUser(currentUser)
    setIsLoading(false)
  }, [router])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/admin/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-deep-space to-ink-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space to-ink-black">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-white/60 text-sm">Welcome back, {user.email}</p>
              </div>
            </div>
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          

          {/* Quick Actions */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/admin/pricing">
                <GlowCard glowColor="purple" className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Pricing Management</h3>
                      <p className="text-white/60 text-sm">Edit pricing tiers</p>
                    </div>
                  </div>
                </GlowCard>
              </Link>
            </div>
          </motion.div>

          {/* User Info */}
          <motion.div variants={fadeInUp}>
            <GlowCard glowColor="blue" className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">User Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-medium">{user.email}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">User ID</p>
                  <p className="text-white font-medium text-sm">{user.uid}</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Email Verified</p>
                  <p className={`font-medium ${user.emailVerified ? 'text-green-400' : 'text-red-400'}`}>
                    {user.emailVerified ? 'Verified' : 'Not Verified'}
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">Last Sign In</p>
                  <p className="text-white font-medium text-sm">
                    {user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}
