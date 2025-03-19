import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Home, Users, Wifi, CheckCircle } from 'lucide-react'

const properties = [
  {
    id: 1,
    name: 'Serenity House',
    address: 'Pacific Beach, San Diego',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    beds: 8,
    baths: 3,
    features: ['Weekly House Meetings', 'Near Public Transport', 'Workout Area', 'WiFi Included'],
    availability: true
  },
  {
    id: 2,
    name: 'Tranquility Villa',
    address: 'La Jolla, San Diego',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    beds: 10,
    baths: 4,
    features: ['Pool & Outdoor Space', 'Employment Assistance', 'Recovery Meetings', 'Weekly Activities'],
    availability: true
  },
  {
    id: 3,
    name: 'Hope Haven',
    address: 'North Park, San Diego',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    beds: 6,
    baths: 2,
    features: ['Quiet Neighborhood', 'Fully Furnished', 'Community Kitchen', 'Meditation Garden'],
    availability: false
  }
]

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-primary-800">Our Recovery Homes</h2>
          <p className="text-gray-600">
            Explore our safe, supportive housing options throughout San Diego County. Each home is designed to promote recovery and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-56 w-full">
                <Image 
                  src={property.image} 
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  {property.availability ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Waitlist
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-500">{property.address}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{property.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">{property.baths} Baths</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-gray-900">Amenities:</h4>
                  <ul className="grid grid-cols-1 gap-y-1">
                    {property.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/housing/${property.id}`}
                  className="btn btn-primary w-full"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/housing" className="btn btn-secondary">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  )
}
