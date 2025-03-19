// This file will contain server actions for authentication
'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { z } from 'zod'

// Schema for login validation
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

// Schema for registration validation
const registerSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  recoveryJourney: z.string().max(250, 'Please keep your summary under 250 characters').optional(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

// Define error response types
export type AuthError = {
  form?: string;
  fieldErrors?: Record<string, string[]>;
}

export type AuthResult = {
  error?: AuthError;
  success?: boolean;
  email?: string;
}

// Create a Supabase client for server components
const getSupabase = () => {
  const cookieStore = cookies()
  
  return createServerComponentClient({
    cookies: () => cookieStore
  })
}

export async function signIn(formData: FormData): Promise<AuthResult> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  // Validate form data
  const result = loginSchema.safeParse({ email, password })
  if (!result.success) {
    return { error: { fieldErrors: result.error.flatten().fieldErrors } }
  }
  
  const supabase = getSupabase()
  
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) {
    return { error: { form: error.message } }
  }
  
  redirect('/dashboard')
}

export async function signUp(formData: FormData): Promise<AuthResult> {
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const recoveryJourney = formData.get('recoveryJourney') as string
  const password = formData.get('password') as string
  
  // Validate form data
  const result = registerSchema.safeParse({ 
    fullName, 
    email, 
    phone, 
    recoveryJourney, 
    password 
  })
  
  if (!result.success) {
    return { error: { fieldErrors: result.error.flatten().fieldErrors } }
  }
  
  const supabase = getSupabase()
  
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone,
        recovery_journey: recoveryJourney,
      },
    },
  })
  
  if (error) {
    return { error: { form: error.message } }
  }
  
  return { success: true, email }
}

export async function signOut() {
  const supabase = getSupabase()
  await supabase.auth.signOut()
  redirect('/')
}

export async function resetPassword(formData: FormData): Promise<AuthResult> {
  const email = formData.get('email') as string
  
  const supabase = getSupabase()
  
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password/confirm`,
  })
  
  if (error) {
    return { error: { form: error.message } }
  }
  
  return { success: true }
}
