import Image from 'next/image'
import { QuoteIcon } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, title, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="absolute -top-4 left-6 text-primary-500">
        <QuoteIcon className="h-8 w-8" />
      </div>
      <div className="pt-4">
        <p className="text-gray-700 italic mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image 
              src={imageSrc} 
              alt={name} 
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-base font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
