'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User } from 'firebase/auth'
import { onAuthChange, getCurrentUser } from './firebase-utils'

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
      setError(null)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
    error,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
