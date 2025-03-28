import Image from 'next/image'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

export default function TestimonialCard({ quote, name, title, imageSrc }: TestimonialCardProps) {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      <Quote className="h-8 w-8 text-primary-300 mb-4" aria-hidden="true" />
      <blockquote className="text-gray-600 italic mb-4 flex-grow">
        <p>"{quote}"</p>
      </blockquote>
      <figcaption className="flex items-center mt-auto">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image 
            src={imageSrc} 
            alt={`Portrait of ${name}`} 
            fill
            className="object-cover"
            sizes="48px" // Specify size for optimization
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </figcaption>
    </article>
  )
}
