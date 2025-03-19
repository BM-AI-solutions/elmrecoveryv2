'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  Home, 
  User, 
  Settings, 
  Bell, 
  BookOpen, 
  Calendar, 
  Users,
  LogOut
} from 'lucide-react'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Application', href: '/dashboard/application', icon: FileText },
  { name: 'Housing Options', href: '/dashboard/housing', icon: Home },
  { name: 'My Profile', href: '/dashboard/profile', icon: User },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
  { name: 'Resources', href: '/dashboard/resources', icon: BookOpen },
  { name: 'Community', href: '/dashboard/community', icon: Users },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  return (
    <div className={clsx(
      'bg-white border-r border-gray-200 flex flex-col h-screen fixed md:sticky top-0 z-40 transition-all duration-300',
      isCollapsed ? 'w-16' : 'w-64'
    )}>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="px-4 space-y-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={clsx(
                    isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-primary-600',
                    'mr-3 flex-shrink-0 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                {!isCollapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Link
          href="/api/auth/signout"
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-red-600 hover:bg-red-50"
        >
          <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
          {!isCollapsed && <span>Log Out</span>}
        </Link>
      </div>
    </div>
  )
}
