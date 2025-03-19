import AuthForm from '@/components/auth/AuthForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create an Account',
  description: 'Sign up for the Elm Recovery client portal to track your application and access resources.',
}

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <AuthForm type="register" />
      </div>
    </div>
  )
}
