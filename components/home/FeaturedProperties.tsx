import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'

// Mock data - replace with actual data fetching later
const properties = [
  { id: 1, name: 'The Oak House', location: 'North Park, San Diego', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914', price: 1200, beds: 2 },
  { id: 2, name: 'Maple Residence', location: 'Hillcrest, San Diego', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', price: 1350, beds: 1 },
  { id: 3, name: 'Cedar Place', location: 'Pacific Beach, San Diego', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be', price: 1400, beds: 2 },
]

export default function FeaturedProperties() {
  return (
    <section aria-labelledby="featured-properties-heading" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 id="featured-properties-heading" className="mb-4 md:mb-0">Featured Sober Living Homes</h2>
          <Link href="/housing" className="text-primary-600 hover:text-primary-800 font-medium flex items-center">
            View All Homes
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link href={`/housing/${property.id}`} key={property.id} className="group block bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative h-48 w-full">
                <Image 
                  src={property.image} 
                  alt={`Exterior of ${property.name}`} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Basic sizes, refine as needed
                  // Consider adding placeholder="blur" if you have blurDataURL
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 transition-colors">{property.name}</h3>
                <p className="text-sm text-gray-500 flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  {property.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary-700 font-semibold">${property.price}/month</span>
                  <span className="text-sm text-gray-600">{property.beds} Bed{property.beds > 1 ? 's' : ''} Available</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
