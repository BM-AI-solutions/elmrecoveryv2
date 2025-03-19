'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Leaf, Mail, Lock, User, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

type AuthFormType = 'login' | 'register' | 'reset-password'

interface AuthFormProps {
  type: AuthFormType
}

// Form schemas
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

const registerSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  recoveryJourney: z.string().max(250, 'Please keep your summary under 250 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and privacy policy',
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

const resetPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  // Determine which schema to use based on form type
  const formSchema = 
    type === 'login' ? loginSchema :
    type === 'register' ? registerSchema :
    resetPasswordSchema
  
  type FormData = z.infer<typeof formSchema>
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (type === 'login') {
        toast.success('Logged in successfully')
        router.push('/dashboard')
      } else if (type === 'register') {
        toast.success('Account created successfully')
        router.push('/login')
      } else if (type === 'reset-password') {
        toast.success('Password reset email sent')
        router.push('/login')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  const getFormTitle = () => {
    switch (type) {
      case 'login': return 'Sign in to your account'
      case 'register': return 'Create your account'
      case 'reset-password': return 'Reset your password'
    }
  }
  
  const getFormDescription = () => {
    switch (type) {
      case 'login': return 'Access your client portal and application status'
      case 'register': return 'Join Elm Recovery to begin your journey with us'
      case 'reset-password': return 'We\'ll send you a link to reset your password'
    }
  }
  
  return (
    <>
      <div className="text-center">
        <div className="flex justify-center">
          <Leaf className="h-12 w-12 text-primary-600" />
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">{getFormTitle()}</h2>
        <p className="mt-2 text-sm text-gray-600">
          {getFormDescription()}
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow">
        <div className="space-y-4">
          {/* Register-specific fields */}
          {type === 'register' && (
            <>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    className={`input pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                    {...register('fullName')}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={`input ${errors.phone ? 'border-red-500' : ''}`}
                    {...register('phone')}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="recoveryJourney" className="block text-sm font-medium text-gray-700">
                  Your Recovery Journey (optional)
                </label>
                <div className="mt-1">
                  <textarea
                    id="recoveryJourney"
                    rows={3}
                    className={`input ${errors.recoveryJourney ? 'border-red-500' : ''}`}
                    placeholder="Share a brief summary of your recovery journey to help us better understand your needs..."
                    {...register('recoveryJourney')}
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  {errors.recoveryJourney ? (
                    <p className="text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.recoveryJourney.message}
                    </p>
                  ) : (
                    <p className="text-xs text-gray-500">Max 250 characters</p>
                  )}
                </div>
              </div>
            </>
          )}
          
          {/* Email field (all forms) */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={`input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email')}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email.message}
              </p>
            )}
          </div>
          
          {/* Password fields (login and register) */}
          {(type === 'login' || type === 'register') && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete={type === 'login' ? 'current-password' : 'new-password'}
                  className={`input pl-10 ${errors.password ? 'border-red-500' : ''}`}
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
          
          {/* Confirm Password (register only) */}
          {type === 'register' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  type="password"
                  className={`input pl-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                  {...register('confirmPassword')}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}
          
          {/* Terms agreement (register only) */}
          {type === 'register' && (
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  {...register('termsAccepted')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsAccepted" className="text-gray-700">
                  I agree to the <a href="/terms" className="text-primary-600 hover:text-primary-500">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:text-primary-500">Privacy Policy</a>
                </label>
                {errors.termsAccepted && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        
        {/* Forgot password link (login only) */}
        {type === 'login' && (
          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link href="/reset-password" className="text-primary-600 hover:text-primary-500">
                Forgot your password?
              </Link>
            </div>
          </div>
        )}
        
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-primary w-full flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                {type === 'login' && 'Sign in'}
                {type === 'register' && 'Create account'}
                {type === 'reset-password' && 'Send reset link'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>
        
        {/* Form footer links */}
        <div className="text-sm text-center mt-4">
          {type === 'login' && (
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-primary-600 hover:text-primary-500 font-medium">
                Sign up
              </Link>
            </p>
          )}
          {type === 'register' && (
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-500 font-medium">
                Sign in
              </Link>
            </p>
          )}
          {type === 'reset-password' && (
            <p className="text-gray-600">
              Remember your password?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-500 font-medium">
                Back to sign in
              </Link>
            </p>
          )}
        </div>
      </form>
    </>
  )
}
