import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  MapPin, 
  Users, 
  Home, 
  Calendar, 
  CheckCircle, 
  ChevronLeft,
  Phone,
  Clock,
  Shield,
  Star
} from 'lucide-react'

// Mock data - in a real app, this would come from a database or API
const properties = [
  {
    id: 1,
    name: 'Serenity House',
    address: 'Pacific Beach, San Diego',
    fullAddress: '1234 Ocean Blvd, Pacific Beach, San Diego, CA 92109',
    description: 'Serenity House offers a peaceful environment for men in recovery, located just blocks from the beach in Pacific Beach. Our structured program includes regular house meetings, accountability, and a supportive community of peers committed to sobriety.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753376-12c8ab8e17a9',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
    ],
    beds: 8,
    baths: 3,
    features: [
      'Weekly House Meetings', 
      'Near Public Transport', 
      'Workout Area', 
      'WiFi Included', 
      'Fully Furnished',
      'Walking Distance to Beach',
      'Outdoor Patio',
      'Laundry Facilities'
    ],
    rules: [
      'Zero tolerance for drugs and alcohol',
      'Weekly drug testing',
      'Curfew at 11:00 PM on weekdays',
      'Mandatory house meetings',
      'Guests must be approved by house manager',
      'Residents must be actively working or in school'
    ],
    availability: true,
    price: '$1,200/month',
    gender: 'Men',
    neighborhood: 'Pacific Beach',
    manager: 'John Smith',
    managerPhone: '(619) 555-1234',
    testimonials: [
      {
        name: 'Michael R.',
        text: 'Serenity House provided the structure and support I needed in early recovery. The location near the beach was perfect for morning meditation walks.',
        duration: '8 months resident'
      },
      {
        name: 'David T.',
        text: 'Living here helped me build a solid foundation for my recovery. The house manager was always available when I needed guidance.',
        duration: '1 year resident'
      }
    ]
  },
  {
    id: 2,
    name: 'Tranquility Villa',
    address: 'La Jolla, San Diego',
    fullAddress: '5678 Prospect St, La Jolla, San Diego, CA 92037',
    description: 'Tranquility Villa is an upscale recovery residence for women seeking a supportive and structured environment. Our beautiful home in La Jolla offers comfort, community, and accountability with a focus on long-term recovery and personal growth.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f'
    ],
    beds: 10,
    baths: 4,
    features: [
      'Pool & Outdoor Space', 
      'Employment Assistance', 
      'Recovery Meetings', 
      'Weekly Activities', 
      'In-house Manager',
      'Meditation Garden',
      'Fully Equipped Kitchen',
      'Study/Work Space'
    ],
    rules: [
      'Zero tolerance for drugs and alcohol',
      'Weekly drug testing',
      'Curfew at 10:30 PM',
      'Mandatory house meetings twice weekly',
      'Guests allowed only in common areas',
      'Must attend minimum of 3 recovery meetings per week'
    ],
    availability: true,
    price: '$1,400/month',
    gender: 'Women',
    neighborhood: 'La Jolla',
    manager: 'Sarah Johnson',
    managerPhone: '(619) 555-5678',
    testimonials: [
      {
        name: 'Jennifer L.',
        text: 'Tranquility Villa was exactly what I needed to rebuild my life. The support from other women and the beautiful environment helped me focus on my recovery journey.',
        duration: '6 months resident'
      },
      {
        name: 'Amanda K.',
        text: 'Living at Tranquility Villa gave me the structure and accountability I needed while still respecting my independence. The house manager was incredibly supportive.',
        duration: '9 months resident'
      }
    ]
  },
  // Add more properties as needed
]

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const id = parseInt(params.id)
  const property = properties.find(p => p.id === id)
  
  if (!property) {
    return {
      title: 'Property Not Found',
    }
  }
  
  return {
    title: `${property.name} | Elm Recovery Housing`,
    description: property.description.substring(0, 160),
  }
}

export default function PropertyDetailPage({ params }: Props) {
  const id = parseInt(params.id)
  const property = properties.find(p => p.id === id)
  
  if (!property) {
    notFound()
  }
  
  return (
    <div className="container-custom py-12">
      <Link href="/housing" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to All Housing Options
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="lg:col-span-2 md:col-span-2 col-span-1 relative h-64 md:h-80">
            <Image 
              src={property.images[0]} 
              alt={property.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {property.images.slice(1, 4).map((image, index) => (
            <div key={index} className="relative h-40 md:h-80 lg:h-40">
              <Image 
                src={image} 
                alt={`${property.name} - Image ${index + 2}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Property Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.name}</h1>
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-gray-600">{property.fullAddress}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <Users className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{property.beds} Beds</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <Home className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{property.baths} Baths</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <span className="text-sm text-gray-600">{property.gender}'s Housing</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <span className="text-sm text-gray-600">{property.neighborhood}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 md:text-right">
              <div className="text-2xl font-bold text-primary-700 mb-2">
                {property.price}
              </div>
              {property.availability ? (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Available Now
                </span>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Waitlist Only
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Property Description */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Property</h2>
          <p className="text-gray-700 leading-relaxed">
            {property.description}
          </p>
        </div>
        
        {/* Property Features */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            {property.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* House Rules */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            {property.rules.map((rule, index) => (
              <div key={index} className="flex items-start">
                <Shield className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <span className="text-gray-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* House Manager */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">House Management</h2>
          <div className="flex items-center">
            <div className="bg-primary-100 rounded-full p-3 mr-4">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{property.manager}</h3>
              <p className="text-gray-600">House Manager</p>
              <div className="flex items-center mt-1">
                <Phone className="h-4 w-4 text-primary-600 mr-2" />
                <span className="text-primary-600">{property.managerPhone}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        {property.testimonials && property.testimonials.length > 0 && (
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resident Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{testimonial.name}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {testimonial.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="p-6">
          <div className="bg-primary-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interested in this property?</h3>
            <p className="text-gray-600 mb-4">
              Contact us to schedule a tour or learn more about our application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {property.availability ? (
                <>
                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Tour
                  </Link>
                  <Link href="/apply" className="btn btn-secondary">
                    Apply Now
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/contact" className="btn btn-primary">
                    Join<boltAction type="file" filePath="app/housing/[id]/page.tsx">
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  MapPin, 
  Users, 
  Home, 
  Calendar, 
  CheckCircle, 
  ChevronLeft,
  Phone,
  Clock,
  Shield,
  Star
} from 'lucide-react'

// Mock data - in a real app, this would come from a database or API
const properties = [
  {
    id: 1,
    name: 'Serenity House',
    address: 'Pacific Beach, San Diego',
    fullAddress: '1234 Ocean Blvd, Pacific Beach, San Diego, CA 92109',
    description: 'Serenity House offers a peaceful environment for men in recovery, located just blocks from the beach in Pacific Beach. Our structured program includes regular house meetings, accountability, and a supportive community of peers committed to sobriety.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753376-12c8ab8e17a9',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d'
    ],
    beds: 8,
    baths: 3,
    features: [
      'Weekly House Meetings', 
      'Near Public Transport', 
      'Workout Area', 
      'WiFi Included', 
      'Fully Furnished',
      'Walking Distance to Beach',
      'Outdoor Patio',
      'Laundry Facilities'
    ],
    rules: [
      'Zero tolerance for drugs and alcohol',
      'Weekly drug testing',
      'Curfew at 11:00 PM on weekdays',
      'Mandatory house meetings',
      'Guests must be approved by house manager',
      'Residents must be actively working or in school'
    ],
    availability: true,
    price: '$1,200/month',
    gender: 'Men',
    neighborhood: 'Pacific Beach',
    manager: 'John Smith',
    managerPhone: '(619) 555-1234',
    testimonials: [
      {
        name: 'Michael R.',
        text: 'Serenity House provided the structure and support I needed in early recovery. The location near the beach was perfect for morning meditation walks.',
        duration: '8 months resident'
      },
      {
        name: 'David T.',
        text: 'Living here helped me build a solid foundation for my recovery. The house manager was always available when I needed guidance.',
        duration: '1 year resident'
      }
    ]
  },
  {
    id: 2,
    name: 'Tranquility Villa',
    address: 'La Jolla, San Diego',
    fullAddress: '5678 Prospect St, La Jolla, San Diego, CA 92037',
    description: 'Tranquility Villa is an upscale recovery residence for women seeking a supportive and structured environment. Our beautiful home in La Jolla offers comfort, community, and accountability with a focus on long-term recovery and personal growth.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f'
    ],
    beds: 10,
    baths: 4,
    features: [
      'Pool & Outdoor Space', 
      'Employment Assistance', 
      'Recovery Meetings', 
      'Weekly Activities', 
      'In-house Manager',
      'Meditation Garden',
      'Fully Equipped Kitchen',
      'Study/Work Space'
    ],
    rules: [
      'Zero tolerance for drugs and alcohol',
      'Weekly drug testing',
      'Curfew at 10:30 PM',
      'Mandatory house meetings twice weekly',
      'Guests allowed only in common areas',
      'Must attend minimum of 3 recovery meetings per week'
    ],
    availability: true,
    price: '$1,400/month',
    gender: 'Women',
    neighborhood: 'La Jolla',
    manager: 'Sarah Johnson',
    managerPhone: '(619) 555-5678',
    testimonials: [
      {
        name: 'Jennifer L.',
        text: 'Tranquility Villa was exactly what I needed to rebuild my life. The support from other women and the beautiful environment helped me focus on my recovery journey.',
        duration: '6 months resident'
      },
      {
        name: 'Amanda K.',
        text: 'Living at Tranquility Villa gave me the structure and accountability I needed while still respecting my independence. The house manager was incredibly supportive.',
        duration: '9 months resident'
      }
    ]
  },
  // Add more properties as needed
]

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const id = parseInt(params.id)
  const property = properties.find(p => p.id === id)
  
  if (!property) {
    return {
      title: 'Property Not Found',
    }
  }
  
  return {
    title: `${property.name} | Elm Recovery Housing`,
    description: property.description.substring(0, 160),
  }
}

export default function PropertyDetailPage({ params }: Props) {
  const id = parseInt(params.id)
  const property = properties.find(p => p.id === id)
  
  if (!property) {
    notFound()
  }
  
  return (
    <div className="container-custom py-12">
      <Link href="/housing" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to All Housing Options
      </Link>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="lg:col-span-2 md:col-span-2 col-span-1 relative h-64 md:h-80">
            <Image 
              src={property.images[0]} 
              alt={property.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {property.images.slice(1, 4).map((image, index) => (
            <div key={index} className="relative h-40 md:h-80 lg:h-40">
              <Image 
                src={image} 
                alt={`${property.name} - Image ${index + 2}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Property Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{property.name}</h1>
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-gray-600">{property.fullAddress}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <Users className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{property.beds} Beds</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <Home className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">{property.baths} Baths</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <span className="text-sm text-gray-600">{property.gender}'s Housing</span>
                </div>
                <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                  <span className="text-sm text-gray-600">{property.neighborhood}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 md:text-right">
              <div className="text-2xl font-bold text-primary-700 mb-2">
                {property.price}
              </div>
              {property.availability ? (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Available Now
                </span>
              ) : (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Waitlist Only
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Property Description */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Property</h2>
          <p className="text-gray-700 leading-relaxed">
            {property.description}
          </p>
        </div>
        
        {/* Property Features */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            {property.features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-2" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* House Rules */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            {property.rules.map((rule, index) => (
              <div key={index} className="flex items-start">
                <Shield className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                <span className="text-gray-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* House Manager */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">House Management</h2>
          <div className="flex items-center">
            <div className="bg-primary-100 rounded-full p-3 mr-4">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{property.manager}</h3>
              <p className="text-gray-600">House Manager</p>
              <div className="flex items-center mt-1">
                <Phone className="h-4 w-4 text-primary-600 mr-2" />
                <span className="text-primary-600">{property.managerPhone}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        {property.testimonials && property.testimonials.length > 0 && (
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resident Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {property.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{testimonial.name}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {testimonial.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="p-6">
          <div className="bg-primary-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Interested in this property?</h3>
            <p className="text-gray-600 mb-4">
              Contact us to schedule a tour or learn more about our application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {property.availability ? (
                <>
                  <Link href="/contact" className="btn btn-primary">
                    Schedule a Tour
                  </Link>
                  <Link href="/apply" className="btn btn-secondary">
                    Apply Now
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/contact" className="btn btn-primary">
                    Join Waitlist
                  </Link>
                  <Link href="/housing" className="btn btn-secondary">
                    View Other Properties
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
