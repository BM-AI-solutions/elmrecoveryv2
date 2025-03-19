'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Leaf, Mail, Lock, User, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { signIn, signUp, resetPassword, AuthResult } from '@/lib/auth/auth-actions'

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

// Define union type for all possible form data types
type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;
type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

// Combined type for all form data
type FormData = LoginFormData | RegisterFormData | ResetPasswordFormData;

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  
  // Determine which schema to use based on form type
  const formSchema = 
    type === 'login' ? loginSchema :
    type === 'register' ? registerSchema :
    resetPasswordSchema
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    setFormError(null)
    
    try {
      let result: AuthResult | undefined;
      
      if (type === 'login') {
        const loginData = data as LoginFormData;
        const formData = new FormData()
        formData.append('email', loginData.email)
        formData.append('password', loginData.password)
        
        result = await signIn(formData)
      } else if (type === 'register') {
        const registerData = data as RegisterFormData;
        const formData = new FormData()
        formData.append('fullName', registerData.fullName)
        formData.append('email', registerData.email)
        formData.append('phone', registerData.phone)
        formData.append('recoveryJourney', registerData.recoveryJourney || '')
        formData.append('password', registerData.password)
        
        result = await signUp(formData)
        
        if (result?.success) {
          toast.success('Account created! Please check your email to verify your account.')
          router.push('/login')
        }
      } else if (type === 'reset-password') {
        const resetData = data as ResetPasswordFormData;
        const formData = new FormData()
        formData.append('email', resetData.email)
        
        result = await resetPassword(formData)
        
        if (result?.success) {
          toast.success('Password reset email sent. Please check your inbox.')
          router.push('/login')
        }
      }
      
      if (result?.error) {
        if (result.error.form) {
          setFormError(result.error.form)
        } else {
          toast.error(type === 'login' ? 'Invalid email or password' : 'An error occurred. Please try again.')
        }
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
      console.error(error)
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
      
      {formError && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{formError}</span>
        </div>
      )}
      
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
                    className={`block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 ${errors.fullName ? 'border-red-500' : ''}`}
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
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={`block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 ${errors.phone ? 'border-red-500' : ''}`}
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
                  Your Recovery Journey (Optional)
                </label>
                <div className="mt-1">
                  <textarea
                    id="recoveryJourney"
                    rows={3}
                    className={`block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 ${errors.recoveryJourney ? 'border-red-500' : ''}`}
                    placeholder="Tell us a bit about your journey and what you're looking for..."
                    {...register('recoveryJourney')}
                  />
                </div>
                {errors.recoveryJourney && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.recoveryJourney.message}
                  </p>
                )}
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
                className={`block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 ${errors.email ? 'border-red-500' : ''}`}
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
          
          {/* Password field (login and register) */}
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
                  className={`block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 ${errors.password ? 'border-red-500' : ''}`}
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
                  autoComplete="new-password"
                  className={`block w-full rounded-md border-gray-300 pl-10 focus:border-primary-500 focus:ring-primary-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
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
          
          {/* Terms acceptance (register only) */}
          {type === 'register' && (
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  className={`h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded ${errors.termsAccepted ? 'border-red-500' : ''}`}
                  {...register('termsAccepted')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                  I agree to the{' '}
                  <Link href="/terms" className="text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-primary-600 hover:text-primary-500">
                    Privacy Policy
                  </Link>
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
          
          {/* Forgot password link (login only) */}
          {type === 'login' && (
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link href="/reset-password" className="text-primary-600 hover:text-primary-500 font-medium">
                  Forgot your password?
                </Link>
              </div>
            </div>
          )}
        </div>
        
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
