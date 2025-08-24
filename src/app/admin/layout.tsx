'use client'

import { AuthProvider } from '@/lib/auth-context'
import { useAuth } from '@/lib/auth-context'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'

function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/admin/login') {
      return
    }

    if (!loading) {
      if (!user) {
        router.push('/admin/login')
      }
    }
  }, [user, loading, router, pathname])

  // For login page, don't show loading or auth guard
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-deep-space to-ink-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return <>{children}</>
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <AdminAuthGuard>
        {children}
      </AdminAuthGuard>
    </AuthProvider>
  )
}
