'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Users, Home, Wifi, CheckCircle, Calendar } from 'lucide-react'

// Mock data
const properties = [
  {
    id: 1,
    name: 'Serenity House',
    address: 'Pacific Beach, San Diego',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    beds: 8,
    baths: 3,
    features: ['Weekly House Meetings', 'Near Public Transport', 'Workout Area', 'WiFi Included', 'Fully Furnished'],
    availability: true,
    price: '$1,200/month',
    gender: 'Men',
    neighborhood: 'Pacific Beach'
  },
  {
    id: 2,
    name: 'Tranquility Villa',
    address: 'La Jolla, San Diego',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    beds: 10,
    baths: 4,
    features: ['Pool & Outdoor Space', 'Employment Assistance', 'Recovery Meetings', 'Weekly Activities', 'In-house Manager'],
    availability: true,
    price: '$1,400/month',
    gender: 'Women',
    neighborhood: 'La Jolla'
  },
  {
    id: 3,
    name: 'Hope Haven',
    address: 'North Park, San Diego',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    beds: 6,
    baths: 2,
    features: ['Quiet Neighborhood', 'Fully Furnished', 'Community Kitchen', 'Meditation Garden', 'Near Recovery Community'],
    availability: false,
    price: '$1,100/month',
    gender: 'Men',
    neighborhood: 'North Park'
  },
  {
    id: 4,
    name: 'Recovery Retreat',
    address: 'Mission Valley, San Diego',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    beds: 12,
    baths: 4,
    features: ['Spacious Common Areas', 'Walking Distance to Transit', '24/7 Staff Support', 'Employment Resources', 'Weekly Activities'],
    availability: true,
    price: '$1,250/month',
    gender: 'Co-Ed',
    neighborhood: 'Mission Valley'
  },
  {
    id: 5,
    name: 'Sunset Sanctuary',
    address: 'Ocean Beach, San Diego',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    beds: 7,
    baths: 3,
    features: ['Beach Access', 'Outdoor Meditation Space', 'Fitness Area', 'WiFi Included', 'Transport to Meetings'],
    availability: true,
    price: '$1,350/month',
    gender: 'Women',
    neighborhood: 'Ocean Beach'
  },
  {
    id: 6,
    name: 'Harmony House',
    address: 'Hillcrest, San Diego',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
    beds: 9,
    baths: 3,
    features: ['LGBTQ+ Friendly', 'Community Garden', 'Modern Amenities', 'Weekly House Meetings', 'Near Medical Facilities'],
    availability: true,
    price: '$1,300/month',
    gender: 'Co-Ed',
    neighborhood: 'Hillcrest'
  }
]

export default function PropertyGrid() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid')
  
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {properties.length} Housing Options Available
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewType('grid')}
            className={`p-2 rounded ${viewType === 'grid' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'}`}
          >
            <span className="sr-only">Grid view</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewType('list')}
            className={`p-2 rounded ${viewType === 'list' ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'}`}
          >
            <span className="sr-only">List view</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12 a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {viewType === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {property.gender}
                    </span>
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
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-lg font-semibold text-primary-700">
                    {property.price}
                  </div>
                  {property.availability && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Schedule Tour
                    </div>
                  )}
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
      ) : (
        <div className="space-y-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-56 md:h-auto">
                  <Image 
                    src={property.image} 
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 md:w-2/3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                      <div className="flex items-center mb-3">
                        <MapPin className="h-4 w-4 text-primary-600 mr-2" />
                        <span className="text-sm text-gray-500">{property.address}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0 md:text-right">
                      <div className="text-lg font-semibold text-primary-700 mb-1">
                        {property.price}
                      </div>
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
                  
                  <div className="flex flex-wrap gap-3 mt-4 mb-4">
                    <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                      <Users className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                      <Home className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                      <span className="text-sm text-gray-600">{property.gender}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-gray-900">Amenities:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-1">
                      {property.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link 
                      href={`/housing/${property.id}`}
                      className="btn btn-primary sm:flex-1"
                    >
                      View Details
                    </Link>
                    {property.availability && (
                      <button className="btn btn-secondary sm:flex-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Tour
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
