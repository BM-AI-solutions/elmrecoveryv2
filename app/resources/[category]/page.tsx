import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ChevronLeft, Download, ExternalLink, Clock, BookOpen } from 'lucide-react'
import SubpageHero from '@/components/ui/SubpageHero'

// This would typically come from a database or API
const categories = {
  'education': {
    name: 'Educational Materials',
    description: 'Articles, guides, and videos about addiction and recovery',
    heroImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
  },
  'support-groups': {
    name: 'Support Groups',
    description: 'Information on AA, NA, SMART Recovery, and other support communities',
    heroImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
  },
  'events': {
    name: 'Recovery Events',
    description: 'Workshops, meetings, and social gatherings for the recovery community',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
  },
  'local-services': {
    name: 'Local Services',
    description: 'Treatment centers, counselors, and other recovery services in San Diego',
    heroImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624',
  },
  'employment': {
    name: 'Employment Resources',
    description: 'Job listings, resume help, and career guidance for those in recovery',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
  },
  'wellness': {
    name: 'Wellness Tools',
    description: 'Resources for physical health, nutrition, and exercise in recovery',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
  },
  'mental-health': {
    name: 'Mental Health',
    description: 'Resources for managing anxiety, depression, and other mental health concerns',
    heroImage: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2',
  },
  'nutrition': {
    name: 'Nutrition & Recovery',
    description: 'Guides for healthy eating and nutrition to support recovery',
    heroImage: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af',
  },
}

// Mock resources data
const resourcesByCategory = {
  'education': [
    {
      id: 1,
      title: 'The First 90 Days of Recovery: A Comprehensive Guide',
      description: 'Learn essential strategies for navigating the critical first three months of sobriety.',
      type: 'PDF Guide',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136',
      readTime: '15 min read',
      downloadable: true,
      link: '/resources/first-90-days-guide',
    },
    {
      id: 6,
      title: 'Family Support Handbook',
      description: 'Resources and guidance for family members supporting a loved one in recovery.',
      type: 'PDF Guide',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300',
      readTime: '20 min read',
      downloadable: true,
      link: '/resources/family-support',
    },
    {
      id: 7,
      title: 'Understanding Addiction: The Science Behind Recovery',
      description: 'An in-depth look at how addiction affects the brain and body, and the science of recovery.',
      type: 'Video Series',
      image: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d',
      readTime: '5 videos',
      downloadable: false,
      link: '/resources/science-of-addiction',
    },
    {
      id: 8,
      title: 'Recovery Terminology Glossary',
      description: 'A comprehensive guide to common terms and concepts used in addiction treatment and recovery.',
      type: 'PDF Guide',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d',
      readTime: '10 min read',
      downloadable: true,
      link: '/resources/recovery-glossary',
    },
  ],
  // Add resources for other categories as needed
}

type Props = {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const category = params.category
  
  // Check if category exists
  if (!categories[category as keyof typeof categories]) {
    return {
      title: 'Category Not Found',
    }
  }
  
  const categoryInfo = categories[category as keyof typeof categories]
  
  return {
    title: `${categoryInfo.name} | Recovery Resources`,
    description: categoryInfo.description,
  }
}

export default function ResourceCategoryPage({ params }: Props) {
  const { category } = params
  
  // Check if category exists
  if (!categories[category as keyof typeof categories]) {
    notFound()
  }
  
  const categoryInfo = categories[category as keyof typeof categories]
  const resources = resourcesByCategory[category as keyof typeof resourcesByCategory] || []
  
  return (
    <>
      <SubpageHero 
        title={categoryInfo.name}
        description={categoryInfo.description}
        imageSrc={categoryInfo.heroImage}
      />
      
      <div className="container-custom py-12">
        <Link href="/resources" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to All Resources
        </Link>
        
        {resources.length > 0 ? (
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
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No resources available yet</h3>
            <p className="text-gray-600 mb-4">
              We're currently developing resources for this category. Please check back soon!
            </p>
            <Link href="/resources" className="btn btn-primary">
              Browse Other Categories
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
