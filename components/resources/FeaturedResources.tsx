import Image from 'next/image'
import Link from 'next/link'
import { Download, ExternalLink, Clock, BookOpen } from 'lucide-react'

const resources = [
  {
    id: 1,
    title: 'The First 90 Days of Recovery: A Comprehensive Guide',
    description: 'Learn essential strategies for navigating the critical first three months of sobriety.',
    type: 'PDF Guide',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
    category: 'Educational Materials',
    readTime: '15 min read',
    downloadable: true,
    link: '/resources/first-90-days-guide',
  },
  {
    id: 2,
    title: 'San Diego Recovery Meeting Directory',
    description: 'A comprehensive list of AA, NA, and other recovery meetings throughout San Diego County.',
    type: 'Directory',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca',
    category: 'Support Groups',
    readTime: 'Updated Weekly',
    downloadable: true,
    link: '/resources/meeting-directory',
  },
  {
    id: 3,
    title: 'Mindfulness Practices for Recovery',
    description: 'Audio meditations and exercises specifically designed to support addiction recovery.',
    type: 'Audio Series',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    category: 'Wellness Tools',
    readTime: '10 sessions',
    downloadable: false,
    link: '/resources/mindfulness-practices',
  },
  {
    id: 4,
    title: 'Recovery-Friendly Employer Network',
    description: 'Directory of San Diego employers who support individuals in recovery with employment opportunities.',
    type: 'Directory',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    category: 'Employment Resources',
    readTime: 'Updated Monthly',
    downloadable: true,
    link: '/resources/employer-network',
  },
  {
    id: 5,
    title: 'Nutrition for Recovery: Healing Your Body',
    description: 'Learn how proper nutrition can support your brain and body during the recovery process.',
    type: 'Video Course',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af',
    category: 'Nutrition & Recovery',
    readTime: '6 lessons',
    downloadable: false,
    link: '/resources/nutrition-course',
  },
  {
    id: 6,
    title: 'Family Support Handbook',
    description: 'Resources and guidance for family members supporting a loved one in recovery.',
    type: 'PDF Guide',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
    category: 'Educational Materials',
    readTime: '20 min read',
    downloadable: true,
    link: '/resources/family-support',
  },
]

export default function FeaturedResources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {resources.map((resource) => (
        <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
          <div className="relative h-48">
            <Image 
              src={resource.image} 
              alt={resource.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                {resource.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{resource.type}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{resource.readTime}</span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
          </div>
          
          <div className="px-6 pb-6 mt-auto">
            <Link 
              href={resource.link}
              className="btn btn-primary w-full flex items-center justify-center"
            >
              {resource.downloadable ? (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resource
                </>
              ) : (
                <>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Access Resource
                </>
              )}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
