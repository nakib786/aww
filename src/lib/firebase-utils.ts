import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  User
} from 'firebase/auth'
import { 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  QueryConstraint,
  DocumentData,
  WithFieldValue
} from 'firebase/firestore'
import { auth, db } from './firebase'

// Authentication utilities
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    return { user: userCredential.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return { user: userCredential.user, error: null }
  } catch (error) {
    return { user: null, error }
  }
}

export const signOut = async () => {
  try {
    await firebaseSignOut(auth)
    return { error: null }
  } catch (error) {
    return { error }
  }
}

export const getCurrentUser = (): User | null => {
  return auth.currentUser
}

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
}

// Firestore utilities
export const createDocument = async <T extends DocumentData>(
  collectionName: string,
  data: T,
  documentId?: string
) => {
  try {
    if (documentId) {
      const docRef = doc(db, collectionName, documentId)
      await setDoc(docRef, data as WithFieldValue<DocumentData>)
      return { id: documentId, data, error: null }
    } else {
      const docRef = await addDoc(collection(db, collectionName), data as WithFieldValue<DocumentData>)
      return { id: docRef.id, data, error: null }
    }
  } catch (error) {
    return { id: null, data: null, error }
  }
}

export const getDocument = async <T>(
  collectionName: string,
  documentId: string
) => {
  try {
    const docRef = doc(db, collectionName, documentId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      return { data: { id: docSnap.id, ...docSnap.data() } as T, error: null }
    } else {
      return { data: null, error: 'Document not found' }
    }
  } catch (error) {
    return { data: null, error }
  }
}

export const updateDocument = async <T>(
  collectionName: string,
  documentId: string,
  data: Partial<T>
) => {
  try {
    const docRef = doc(db, collectionName, documentId)
    await updateDoc(docRef, data)
    return { error: null }
  } catch (error) {
    return { error }
  }
}

export const deleteDocument = async (
  collectionName: string,
  documentId: string
) => {
  try {
    const docRef = doc(db, collectionName, documentId)
    await deleteDoc(docRef)
    return { error: null }
  } catch (error) {
    return { error }
  }
}

export const getDocuments = async <T>(
  collectionName: string,
  constraints: QueryConstraint[] = []
) => {
  try {
    const q = query(collection(db, collectionName), ...constraints)
    const querySnapshot = await getDocs(q)
    
    const documents: T[] = []
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() } as T)
    })
    
    return { data: documents, error: null }
  } catch (error) {
    return { data: [], error }
  }
}

// Helper functions for common queries
export const getDocumentsWhere = async <T>(
  collectionName: string,
  field: string,
  operator: '==' | '!=' | '<' | '<=' | '>' | '>=',
  value: string | number | boolean
) => {
  return getDocuments<T>(collectionName, [where(field, operator, value)])
}

export const getDocumentsOrdered = async <T>(
  collectionName: string,
  field: string,
  direction: 'asc' | 'desc' = 'asc',
  limitCount?: number
) => {
  const constraints: QueryConstraint[] = [orderBy(field, direction)]
  if (limitCount) {
    constraints.push(limit(limitCount))
  }
  return getDocuments<T>(collectionName, constraints)
}

// Admin user interface
export interface AdminUser {
  id?: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'viewer'
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  lastLoginAt?: Date
}

// Pricing data utilities
export interface PricingTier {
  id?: string
  name: string
  icon: string
  price: number
  description: string
  color: 'blue' | 'green' | 'purple'
  features: string[]
  popular?: boolean
  serviceType: 'taxation' | 'web-design'
  createdAt: Date
  updatedAt: Date
}

export const createPricingTier = async (pricingData: Omit<PricingTier, 'id' | 'createdAt' | 'updatedAt'>) => {
  const now = new Date()
  const data = {
    ...pricingData,
    createdAt: now,
    updatedAt: now
  }
  
  return createDocument<PricingTier>('pricing_tiers', data)
}

export const getPricingTiers = async (serviceType?: 'taxation' | 'web-design') => {
  const constraints = serviceType ? [where('serviceType', '==', serviceType)] : []
  return getDocuments<PricingTier>('pricing_tiers', constraints)
}

export const updatePricingTier = async (id: string, data: Partial<PricingTier>) => {
  const updateData = {
    ...data,
    updatedAt: new Date()
  }
  return updateDocument<PricingTier>('pricing_tiers', id, updateData)
}

export const deletePricingTier = async (id: string) => {
  return deleteDocument('pricing_tiers', id)
}

// Admin user utilities
export const createAdminUser = async (userData: Omit<AdminUser, 'id' | 'createdAt' | 'updatedAt'>) => {
  const now = new Date()
  const data = {
    ...userData,
    createdAt: now,
    updatedAt: now
  }
  
  return createDocument<AdminUser>('admin_users', data)
}

export const getAdminUser = async (userId: string) => {
  return getDocument<AdminUser>('admin_users', userId)
}

export const updateAdminUser = async (userId: string, data: Partial<AdminUser>) => {
  const updateData = {
    ...data,
    updatedAt: new Date()
  }
  return updateDocument<AdminUser>('admin_users', userId, updateData)
}

export const deleteAdminUser = async (userId: string) => {
  return deleteDocument('admin_users', userId)
}

export const getAllAdminUsers = async () => {
  return getDocuments<AdminUser>('admin_users')
}
