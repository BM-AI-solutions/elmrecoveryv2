'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Users, FileText, Bell, Clock, ChevronRight, Shield, MapPin } from 'lucide-react'
import DashboardCard from '@/components/dashboard/DashboardCard'
import NotificationItem from '@/components/dashboard/NotificationItem'

// Mock data
const applicationStatus = {
  status: 'In Review',
  progress: 65,
  nextStep: 'Interview Scheduling',
  lastUpdated: 'October 10, 2023',
}

const upcomingEvents = [
  { 
    id: 1, 
    title: 'Housing Interview', 
    date: 'Oct 15, 2023', 
    time: '10:00 AM',
    location: 'Elm Recovery Office',
  },
  { 
    id: 2, 
    title: 'Document Submission Deadline', 
    date: 'Oct 20, 2023', 
    time: '11:59 PM',
    location: 'Online Portal',
  },
]

// Updated to match the NotificationItem component's expected type
const recentNotifications = [
  {
    id: 1,
    type: 'info' as const,
    message: 'Your application has moved to the review stage',
    timestamp: '2 days ago',
  },
  {
    id: 2,
    type: 'success' as const,
    message: 'Background check completed successfully',
    timestamp: '3 days ago',
  },
  {
    id: 3,
    type: 'warning' as const,
    message: 'Please upload your insurance information',
    timestamp: '5 days ago',
  },
]

export default function DashboardPage() {
  const [greeting, setGreeting] = useState(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  })
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">{greeting}, Michael</h1>
        <p className="text-sm text-gray-500">Last login: Today at 9:42 AM</p>
      </div>
      
      {/* Application Status */}
      <DashboardCard
        title="Application Status"
        icon={<FileText className="h-5 w-5 text-primary-600" />}
        actionLink="/dashboard/application"
        actionText="View details"
      >
        <div className="mt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">Current Status:</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {applicationStatus.status}
            </span>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-gray-500">Application Completion</span>
              <span className="text-xs font-medium text-gray-700">{applicationStatus.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${applicationStatus.progress}%` }}></div>
            </div>
          </div>
          
          <div className="text-sm">
            <p className="text-gray-600"><span className="font-medium">Next step:</span> {applicationStatus.nextStep}</p>
            <p className="text-gray-500 text-xs mt-1">Last updated: {applicationStatus.lastUpdated}</p>
          </div>
        </div>
      </DashboardCard>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <DashboardCard
          title="Upcoming Schedule"
          icon={<Calendar className="h-5 w-5 text-primary-600" />}
          actionLink="/dashboard/calendar"
          actionText="Full calendar"
        >
          <div className="mt-2 space-y-3">
            {upcomingEvents.map(event => (
              <div key={event.id} className="flex items-start p-3 bg-gray-50 rounded-md">
                <div className="p-2 bg-primary-100 rounded-md">
                  <Clock className="h-4 w-4 text-primary-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                  <div className="mt-1 text-xs text-gray-500">
                    <p>{event.date} at {event.time}</p>
                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            ))}
            {upcomingEvents.length === 0 && (
              <p className="text-gray-500 text-sm">No upcoming events scheduled</p>
            )}
          </div>
        </DashboardCard>
        
        {/* Recent Notifications */}
        <DashboardCard
          title="Recent Notifications"
          icon={<Bell className="h-5 w-5 text-primary-600" />}
          actionLink="/dashboard/notifications"
          actionText="View all"
        >
          <div className="mt-2 space-y-3">
            {recentNotifications.map(notification => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
          </div>
        </DashboardCard>
      </div>
      
      {/* Quick Access */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Quick Access</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <Link href="/dashboard/resources" className="p-6 flex items-center hover:bg-gray-50 transition-colors">
            <div className="p-3 bg-primary-100 rounded-full">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-base font-medium text-gray-900">Recovery Resources</h4>
              <p className="mt-1 text-sm text-gray-500">Access worksheets and guides</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
          
          <Link href="/dashboard/community" className="p-6 flex items-center hover:bg-gray-50 transition-colors">
            <div className="p-3 bg-primary-100 rounded-full">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-base font-medium text-gray-900">Community Support</h4>
              <p className="mt-1 text-sm text-gray-500">Connect with your peers</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
          
          <Link href="/dashboard/settings" className="p-6 flex items-center hover:bg-gray-50 transition-colors">
            <div className="p-3 bg-primary-100 rounded-full">
              <Shield className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4 flex-1">
              <h4 className="text-base font-medium text-gray-900">Privacy Settings</h4>
              <p className="mt-1 text-sm text-gray-500">Manage your data preferences</p>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </Link>
        </div>
      </div>
      
      {/* Housing Options */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Recommended Housing Options</h3>
          <Link href="/housing" className="text-sm text-primary-600 font-medium hover:text-primary-700">
            View all
          </Link>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="relative h-48 md:h-32 md:w-48 rounded-md overflow-hidden mb-4 md:mb-0">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
                  alt="Tranquility Villa" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:ml-6 flex-1">
                <h4 className="text-base font-medium text-gray-900">Tranquility Villa</h4>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  <span>La Jolla, San Diego</span>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  Spacious sober living home in a quiet La Jolla neighborhood, featuring modern amenities, and a supportive community environment matching your preferences.
                </p>
                <div className="mt-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available Now
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 ml-2">
                    98% Match
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <Link href="/housing/2" className="btn btn-primary text-sm py-2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
