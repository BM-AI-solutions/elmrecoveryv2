import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { ReactNode } from 'react'

interface DashboardCardProps {
  title: string
  icon?: ReactNode
  children: ReactNode
  actionLink?: string
  actionText?: string
}

export default function DashboardCard({
  title,
  icon,
  children,
  actionLink,
  actionText,
}: DashboardCardProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {icon && <span className="mr-3">{icon}</span>}
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          </div>
          {actionLink && actionText && (
            <Link href={actionLink} className="text-sm font-medium text-primary-600 hover:text-primary-500 flex items-center">
              {actionText}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
      <div className="px-6 py-5">
        {children}
      </div>
    </div>
  )
}
