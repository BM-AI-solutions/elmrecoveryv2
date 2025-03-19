import { Info, AlertCircle, CheckCircle } from 'lucide-react'

interface Notification {
  id: number
  type: 'info' | 'warning' | 'success' | 'error'
  message: string
  timestamp: string
}

interface NotificationItemProps {
  notification: Notification
}

export default function NotificationItem({ notification }: NotificationItemProps) {
  const getIcon = () => {
    switch (notification.type) {
      case 'info':
        return <Info className="h-4 w-4 text-primary-500" />
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Info className="h-4 w-4 text-primary-500" />
    }
  }
  
  const getBgColor = () => {
    switch (notification.type) {
      case 'info':
        return 'bg-primary-50'
      case 'warning':
        return 'bg-yellow-50'
      case 'success':
        return 'bg-green-50'
      case 'error':
        return 'bg-red-50'
      default:
        return 'bg-primary-50'
    }
  }
  
  return (
    <div className={`p-3 rounded-md ${getBgColor()}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm text-gray-800">{notification.message}</p>
          <p className="mt-1 text-xs text-gray-500">{notification.timestamp}</p>
        </div>
      </div>
    </div>
  )
}
