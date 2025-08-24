# Admin Authentication System for Aurora N&N Business Solutions

This document explains the admin authentication system with Google and email/password authentication.

## 🏗️ System Architecture

The admin system consists of:
- **Firebase Authentication**: Handles user authentication
- **Firestore Database**: Stores admin user permissions and data
- **React Context**: Manages authentication state across the app
- **Protected Routes**: Admin pages are protected by authentication guards

## 🔐 Authentication Methods

### 1. Google Authentication
- Users can sign in with their Google account
- Automatically checks if the user exists in the admin users collection
- If not found, access is denied

### 2. Email/Password Authentication
- Traditional email and password login
- Requires Firebase Auth users to be created manually
- Validates against admin users collection

## 👥 User Roles

The system supports three user roles:

1. **Admin** (`admin`)
   - Full access to all admin features
   - Can manage other users
   - Can modify pricing and settings

2. **Manager** (`manager`)
   - Can view and edit pricing data
   - Limited user management
   - Cannot access system settings

3. **Viewer** (`viewer`)
   - Read-only access to dashboard
   - Can view pricing and analytics
   - Cannot make changes

## 🗄️ Database Structure

### Collection: `admin_users`

Each document contains:
```typescript
{
  id: string                    // Firebase Auth UID
  email: string                 // User's email address
  name: string                  // Display name
  role: 'admin' | 'manager' | 'viewer'
  isActive: boolean             // Account status
  createdAt: Date              // Account creation date
  updatedAt: Date              // Last update date
  lastLoginAt?: Date           // Last login timestamp
}
```

## 🚀 Setup Instructions

### 1. Seed Admin Users

Run the admin user seeding script:
```bash
npm run seed-admin-users
```

This creates three default users:
- `admin@aurorabusiness.ca` (Admin role)
- `manager@aurorabusiness.ca` (Manager role)
- `viewer@aurorabusiness.ca` (Viewer role)

### 2. Create Firebase Auth Users

You need to create Firebase Auth users manually:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to Authentication → Users
4. Click "Add User"
5. Create users with the same emails as in the admin collection

### 3. Set Passwords

For email/password authentication:
1. In Firebase Console → Authentication → Users
2. Click on each user
3. Set a password for each account

### 4. Enable Google Authentication

1. In Firebase Console → Authentication → Sign-in method
2. Enable Google provider
3. Configure OAuth consent screen if needed

## 📁 File Structure

```
src/
├── app/
│   └── admin/
│       ├── login/
│       │   └── page.tsx          # Login page
│       ├── dashboard/
│       │   └── page.tsx          # Admin dashboard
│       ├── seed-pricing/
│       │   └── page.tsx          # Pricing seeding page
│       └── layout.tsx            # Admin layout with auth guard
├── lib/
│   ├── firebase-utils.ts         # Firebase utilities
│   ├── auth-context.tsx          # Authentication context
│   └── pricing-hooks.ts          # Pricing data hooks
└── scripts/
    ├── seed-pricing.js           # Pricing data seeding
    └── seed-admin-users.js       # Admin users seeding
```

## 🔧 Usage

### Login Page

Visit `/admin/login` to access the admin login page. Features:
- Google sign-in button
- Email/password form
- Password visibility toggle
- Error handling and loading states
- Automatic redirect if already authenticated

### Dashboard

After successful login, users are redirected to `/admin/dashboard` which includes:
- User information display
- Quick action cards
- Statistics overview
- Navigation to other admin features

### Protected Routes

All admin pages (except login) are protected by the `AdminAuthGuard` component that:
- Checks if user is authenticated
- Validates admin user permissions
- Redirects to login if unauthorized

## 🛡️ Security Features

1. **Double Authentication**: Users must exist in both Firebase Auth and admin collection
2. **Role-Based Access**: Different permissions based on user role
3. **Automatic Logout**: Session management with automatic logout on auth state changes
4. **Protected Routes**: All admin pages are protected from unauthorized access

## 🔄 Authentication Flow

1. User visits `/admin/login`
2. User signs in with Google or email/password
3. System checks if user exists in `admin_users` collection
4. If authorized, user is redirected to dashboard
5. If not authorized, user is logged out and shown error message

## 🛠️ Development

### Adding New Admin Users

1. Add user to Firestore `admin_users` collection:
```javascript
await createAdminUser({
  email: 'newuser@example.com',
  name: 'New User',
  role: 'manager',
  isActive: true
})
```

2. Create Firebase Auth user with the same email
3. Set password for email/password authentication

### Customizing Roles

To add new roles, update the `AdminUser` interface in `firebase-utils.ts`:
```typescript
export interface AdminUser {
  // ... existing fields
  role: 'admin' | 'manager' | 'viewer' | 'new_role'
}
```

### Adding Protected Pages

1. Create the page in `src/app/admin/`
2. The page will automatically be protected by the admin layout
3. Use the `useAuth` hook to access user data:

```typescript
import { useAuth } from '@/lib/auth-context'

function MyAdminPage() {
  const { user, adminUser } = useAuth()
  
  // Check role-based permissions
  if (adminUser?.role !== 'admin') {
    return <div>Access denied</div>
  }
  
  return <div>Admin only content</div>
}
```

## 🐛 Troubleshooting

### Common Issues

1. **"Access denied. User not authorized"**
   - User exists in Firebase Auth but not in admin collection
   - Run `npm run seed-admin-users` to create admin users
   - Or manually add user to `admin_users` collection

2. **Google sign-in not working**
   - Check if Google provider is enabled in Firebase Console
   - Verify OAuth consent screen configuration
   - Check browser console for errors

3. **Email/password not working**
   - Ensure Firebase Auth user exists with correct email
   - Verify password is set correctly
   - Check if user exists in admin collection

4. **Infinite loading**
   - Check Firebase configuration in environment variables
   - Verify Firestore security rules allow read access
   - Check browser console for errors

### Debug Commands

```bash
# Check environment variables
npm run check-env

# Seed admin users
npm run seed-admin-users

# Seed pricing data
npm run seed-pricing
```

## 📊 Monitoring

The system includes:
- Authentication state monitoring
- Error logging and display
- Loading states for better UX
- Automatic session management

## 🔮 Future Enhancements

Potential improvements:
- Password reset functionality
- Two-factor authentication
- Session timeout settings
- Audit logging
- Bulk user management
- Advanced role permissions
