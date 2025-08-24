'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { getCurrentUser, signOut, getPricingTiers, updatePricingTier, deletePricingTier, PricingTier } from '@/lib/firebase-utils'
import { Button } from '@/components/ui/Button'
import { GlowCard } from '@/components/ui/spotlight-card'
import { 
  Shield, 
  LogOut, 
  DollarSign,
  ArrowLeft,
  Edit,
  Save,
  X,
  Trash2,
  Plus,
  FileText,
  Calculator,
  Globe,
  Monitor,
  RefreshCw
} from 'lucide-react'
import Link from 'next/link'
import { User } from 'firebase/auth'

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

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'FileText':
      return <FileText className="w-6 h-6" />
    case 'Calculator':
      return <Calculator className="w-6 h-6" />
    case 'Shield':
      return <Shield className="w-6 h-6" />
    case 'Globe':
      return <Globe className="w-6 h-6" />
    case 'Monitor':
      return <Monitor className="w-6 h-6" />
    default:
      return <DollarSign className="w-6 h-6" />
  }
}

export default function AdminPricingPage() {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([])
  const [editingTier, setEditingTier] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<PricingTier>>({})
  const [activeTab, setActiveTab] = useState<'taxation' | 'web-design'>('taxation')
  const [isSaving, setIsSaving] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [newFeature, setNewFeature] = useState('')
  const [isRefreshing, setIsRefreshing] = useState(false)
  const router = useRouter()

  const fetchPricingTiers = useCallback(async () => {
    setIsRefreshing(true)
    try {
      console.log('Fetching pricing tiers for:', activeTab)
      const result = await getPricingTiers(activeTab)
      if (result.error) {
        console.error('Error fetching pricing tiers:', result.error)
      } else {
        console.log('Fetched pricing tiers:', result.data)
        setPricingTiers(result.data || [])
      }
    } catch (error) {
      console.error('Error fetching pricing tiers:', error)
    } finally {
      setIsRefreshing(false)
    }
  }, [activeTab])

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push('/admin/login')
      return
    }

    setUser(currentUser)
    setIsLoading(false)
  }, [router])

  useEffect(() => {
    fetchPricingTiers()
  }, [fetchPricingTiers])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/admin/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleEdit = (tier: PricingTier) => {
    console.log('Editing tier:', tier)
    setEditingTier(tier.id!)
    setEditForm({
      name: tier.name,
      price: tier.price,
      description: tier.description,
      color: tier.color,
      popular: tier.popular || false, // Ensure it's always a boolean
      icon: tier.icon,
      features: [...tier.features], // Create a copy of features array
      serviceType: tier.serviceType
    })
    setShowEditModal(true)
  }

  const handleSave = async () => {
    if (!editingTier || !editForm) return

    setIsSaving(true)
    try {
      // Ensure all fields have proper values before sending to Firestore
      const cleanEditForm = {
        ...editForm,
        popular: Boolean(editForm.popular), // Ensure popular is always a boolean
        price: Number(editForm.price) || 0, // Ensure price is a number
        features: editForm.features || [] // Ensure features is always an array
      }

      const result = await updatePricingTier(editingTier, cleanEditForm)
      if (result.error) {
        console.error('Error updating pricing tier:', result.error)
        alert('Failed to update pricing tier')
      } else {
        console.log('Pricing tier updated successfully')
        
        // Close modal first
        setEditingTier(null)
        setEditForm({})
        setShowEditModal(false)
        setNewFeature('')
        
        // Force refresh the data with a small delay to ensure Firestore has updated
        setTimeout(async () => {
          await fetchPricingTiers()
        }, 500)
      }
    } catch (error) {
      console.error('Error updating pricing tier:', error)
      alert('Failed to update pricing tier')
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setEditingTier(null)
    setEditForm({})
    setShowEditModal(false)
    setNewFeature('')
  }

  const handleDelete = async (tierId: string) => {
    if (!confirm('Are you sure you want to delete this pricing tier?')) return

    try {
      const result = await deletePricingTier(tierId)
      if (result.error) {
        console.error('Error deleting pricing tier:', result.error)
        alert('Failed to delete pricing tier')
      } else {
        console.log('Pricing tier deleted successfully')
        await fetchPricingTiers() // Refresh the data
      }
    } catch (error) {
      console.error('Error deleting pricing tier:', error)
      alert('Failed to delete pricing tier')
    }
  }

  const addFeature = () => {
    if (newFeature.trim() && editForm.features) {
      setEditForm({
        ...editForm,
        features: [...editForm.features, newFeature.trim()]
      })
      setNewFeature('')
    }
  }

  const removeFeature = (index: number) => {
    if (editForm.features) {
      const updatedFeatures = editForm.features.filter((_, i) => i !== index)
      setEditForm({
        ...editForm,
        features: updatedFeatures
      })
    }
  }

  const updateFeature = (index: number, value: string) => {
    if (editForm.features) {
      const updatedFeatures = [...editForm.features]
      updatedFeatures[index] = value
      setEditForm({
        ...editForm,
        features: updatedFeatures
      })
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-deep-space to-ink-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading pricing management...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const filteredTiers = pricingTiers.filter(tier => tier.serviceType === activeTab)
  
  // Debug logging
  console.log('Current state:', {
    editingTier,
    editForm,
    filteredTiers: filteredTiers.length,
    activeTab
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-space to-ink-black">
      {/* Header */}
      <header className="bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/admin/dashboard" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
                         <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                 <DollarSign className="w-5 h-5 text-white" />
               </div>
               <div>
                 <h1 className="text-xl font-bold text-white">Pricing Management</h1>
                 <p className="text-white/60 text-sm">Edit pricing tiers</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <Button
                 onClick={fetchPricingTiers}
                 disabled={isRefreshing}
                 variant="outline"
                 className="border-white/20 text-white hover:bg-white/10"
               >
                 <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                 {isRefreshing ? 'Refreshing...' : 'Refresh'}
               </Button>
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
          {/* Service Type Tabs */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex space-x-1 bg-white/5 rounded-lg p-1 backdrop-blur-sm border border-white/10">
              <button
                onClick={() => setActiveTab('taxation')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'taxation'
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Taxation Services
              </button>
              <button
                onClick={() => setActiveTab('web-design')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'web-design'
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Web Design Services
              </button>
            </div>
          </motion.div>

          {/* Pricing Tiers */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {activeTab === 'taxation' ? 'Taxation' : 'Web Design'} Pricing Tiers
              </h2>
              <div className="text-white/60 text-sm">
                {filteredTiers.length} tier{filteredTiers.length !== 1 ? 's' : ''}
              </div>
            </div>
            
            {filteredTiers.length === 0 ? (
              <GlowCard glowColor="blue" className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center">
                <div className="text-white/60">
                  <DollarSign className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">No pricing tiers found</p>
                  <p className="text-sm">Pricing tiers for {activeTab === 'taxation' ? 'taxation' : 'web design'} services haven&apos;t been created yet.</p>
                </div>
              </GlowCard>
            ) : (
                             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredTiers.map((tier) => (
                                     <GlowCard 
                     key={tier.id} 
                     glowColor={tier.popular ? "purple" : tier.color} 
                     className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 relative min-h-[400px]"
                     customSize={true}
                   >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                                         <div className="mb-6">
                       <div className="flex items-center gap-3 mb-3">
                         <div className="text-white/80">
                           {getIconComponent(tier.icon)}
                         </div>
                         <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                       </div>
                       <p className="text-white/60 text-sm mb-4 leading-relaxed">{tier.description}</p>
                                               <div className="text-4xl font-bold text-white mb-1">
                          ${tier.price}
                        </div>
                        <p className="text-white/60 text-sm">flat rate</p>
                     </div>

                                         <ul className="space-y-2 mb-8">
                       {tier.features.map((feature, index) => (
                         <li key={index} className="flex items-center text-white/80 text-sm">
                           <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                           {feature}
                         </li>
                       ))}
                     </ul>

                     <div className="flex gap-3 mt-auto">
                       <Button
                         onClick={() => handleEdit(tier)}
                         variant="outline"
                         className="flex-1 border-white/20 text-white hover:bg-white/10 h-10"
                       >
                         <Edit className="w-4 h-4 mr-2" />
                         Edit
                       </Button>
                       <Button
                         onClick={() => handleDelete(tier.id!)}
                         variant="outline"
                         className="border-red-500/20 text-red-400 hover:bg-red-500/10 h-10 px-3"
                       >
                         <Trash2 className="w-4 h-4" />
                       </Button>
                     </div>
                  </GlowCard>
                ))}
              </div>
            )}
          </motion.div>

                     
                 </motion.div>
       </main>

       {/* Edit Modal */}
       {showEditModal && (
         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             className="bg-gradient-to-b from-deep-space to-ink-black border border-white/10 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
           >
             <div className="flex items-center justify-between mb-6">
               <h3 className="text-2xl font-bold text-white">Edit Pricing Tier</h3>
               <button
                 onClick={handleCancel}
                 className="text-white/60 hover:text-white transition-colors"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
               <div>
                 <label className="block text-white/60 text-sm mb-3 font-medium">Name</label>
                 <input
                   type="text"
                   value={editForm.name || ''}
                   onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-lg"
                   placeholder="Tier name"
                 />
               </div>
               <div>
                 <label className="block text-white/60 text-sm mb-3 font-medium">Price ($)</label>
                 <input
                   type="number"
                   value={editForm.price || ''}
                   onChange={(e) => setEditForm({...editForm, price: Number(e.target.value)})}
                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-lg"
                   placeholder="0"
                 />
               </div>
               <div className="lg:col-span-2">
                 <label className="block text-white/60 text-sm mb-3 font-medium">Description</label>
                 <textarea
                   value={editForm.description || ''}
                   onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40 h-24 resize-none text-lg"
                   placeholder="Tier description"
                 />
               </div>
               <div>
                 <label className="block text-white/60 text-sm mb-3 font-medium">Color Theme</label>
                 <select
                   value={editForm.color || ''}
                   onChange={(e) => setEditForm({...editForm, color: e.target.value as 'blue' | 'green' | 'purple'})}
                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 text-lg"
                 >
                   <option value="blue">Blue</option>
                   <option value="green">Green</option>
                   <option value="purple">Purple</option>
                 </select>
               </div>
               <div>
                 <label className="block text-white/60 text-sm mb-3 font-medium">Popular</label>
                 <div className="flex items-center mt-3">
                                       <input
                      type="checkbox"
                      checked={editForm.popular || false}
                      onChange={(e) => setEditForm({...editForm, popular: Boolean(e.target.checked)})}
                      className="w-5 h-5 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-purple-500 focus:ring-2"
                    />
                   <span className="ml-3 text-white/80 text-base">Mark as popular</span>
                 </div>
               </div>
             </div>

             {/* Features Section */}
             <div className="mb-6">
               <label className="block text-white/60 text-sm mb-3 font-medium">Features</label>
               <div className="space-y-3">
                 {editForm.features?.map((feature, index) => (
                   <div key={index} className="flex items-center gap-3">
                     <input
                       type="text"
                       value={feature}
                       onChange={(e) => updateFeature(index, e.target.value)}
                       className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                       placeholder="Feature description"
                     />
                     <button
                       onClick={() => removeFeature(index)}
                       className="text-red-400 hover:text-red-300 transition-colors p-2"
                     >
                       <Trash2 className="w-5 h-5" />
                     </button>
                   </div>
                 ))}
                 <div className="flex items-center gap-3">
                   <input
                     type="text"
                     value={newFeature}
                     onChange={(e) => setNewFeature(e.target.value)}
                     onKeyPress={(e) => e.key === 'Enter' && addFeature()}
                     className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/40"
                     placeholder="Add new feature..."
                   />
                   <button
                     onClick={addFeature}
                     className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
                   >
                     <Plus className="w-5 h-5" />
                   </button>
                 </div>
               </div>
             </div>

             {/* Save/Cancel Buttons */}
             <div className="flex gap-4">
               <Button
                 onClick={handleSave}
                 disabled={isSaving}
                 className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 h-12 text-lg font-medium"
               >
                 <Save className="w-5 h-5 mr-3" />
                 {isSaving ? 'Saving...' : 'Save Changes'}
               </Button>
               <Button
                 onClick={handleCancel}
                 variant="outline"
                 className="border-white/20 text-white hover:bg-white/10 h-12 text-lg font-medium"
               >
                 <X className="w-5 h-5 mr-3" />
                 Cancel
               </Button>
             </div>
           </motion.div>
         </div>
       )}
     </div>
   )
 }
