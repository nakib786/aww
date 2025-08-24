'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { signIn } from '@/lib/firebase-utils'
import { AuthProvider, useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/Button'
import { ButtonLiquidGlass } from '@/components/ui/button-colorful'
import { Eye, EyeOff, Mail, Lock, Shield, AlertCircle } from 'lucide-react'

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

function AdminLoginContent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    // Check if user is already logged in
    if (!loading && user) {
      router.push('/admin/dashboard')
    }
  }, [user, loading, router])

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await signIn(email, password)
      if (result.error) {
        setError('Invalid email or password. Please try again.')
      } else {
        router.push('/admin/dashboard')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-ink-black to-deep-space flex items-center justify-center p-4">
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="w-full max-w-md"
      >
        <motion.div variants={fadeInUp} className="text-center mb-8">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
          <p className="text-white/70">Sign in to manage your business</p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl"></div>
            {/* Content */}
            <div className="relative z-10">
            

            {/* Email/Password Form */}
            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all hover:bg-white/10 focus:bg-white/10"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary/50 transition-all hover:bg-white/10 focus:bg-white/10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </motion.div>
              )}

              <ButtonLiquidGlass
                type="submit"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In'
                )}
              </ButtonLiquidGlass>
            </form>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="text-center mt-6">
          <p className="text-white/50 text-sm">
            Protected by Aurora N&N Business Solutions
          </p>
                 </motion.div>
       </motion.div>
     </div>
   )
 }

export default function AdminLoginPage() {
  return (
    <AuthProvider>
      <AdminLoginContent />
    </AuthProvider>
  )
}
