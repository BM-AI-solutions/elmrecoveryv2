import AuthForm from '@/components/auth/AuthForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Your Password',
  description: 'Reset your Elm Recovery account password securely.',
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <AuthForm type="reset-password" />
      </div>
    </div>
  )
}
