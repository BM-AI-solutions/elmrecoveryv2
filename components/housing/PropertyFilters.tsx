'use client'

import { useState } from 'react'
import { FilterIcon, X } from 'lucide-react'

export default function PropertyFilters() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [filters, setFilters] = useState({
    gender: '',
    minBeds: '',
    maxPrice: '',
    neighborhood: [],
    amenities: [],
  })
  
  const neighborhoods = [
    'Pacific Beach',
    'La Jolla',
    'North Park',
    'Mission Valley',
    'Ocean Beach',
    'Hillcrest',
    'Clairemont',
    'Downtown',
  ]
  
  const amenities = [
    'WiFi Included',
    'Fully Furnished',
    'Near Public Transport',
    'Weekly House Meetings',
    'Employment Assistance',
    'Workout Area',
    'Outdoor Space',
    'In-house Manager',
  ]
  
  const handleNeighborhoodChange = (neighborhood: string) => {
    setFilters(prev => {
      const newNeighborhoods = prev.neighborhood.includes(neighborhood)
        ? prev.neighborhood.filter(n => n !== neighborhood)
        : [...prev.neighborhood, neighborhood]
      
      return { ...prev, neighborhood: newNeighborhoods }
    })
  }
  
  const handleAmenityChange = (amenity: string) => {
    setFilters(prev => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
      
      return { ...prev, amenities: newAmenities }
    })
  }
  
  const clearFilters = () => {
    setFilters({
      gender: '',
      minBeds: '',
      maxPrice: '',
      neighborhood: [],
      amenities: [],
    })
  }
  
  return (
    <>
      {/* Mobile filter dialog toggle */}
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center w-full p-3 text-sm font-medium text-left text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
          onClick={() => setIsFiltersOpen(true)}
        >
          <FilterIcon className="h-5 w-5 mr-2 text-gray-400" />
          Filter Properties
        </button>
      </div>
      
      {/* Desktop filters */}
      <div className="hidden lg:block bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Filters</h3>
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-500"
          >
            Clear all
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Housing Type
            </label>
            <select
              id="gender"
              name="gender"
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              className="input"
            >
              <option value="">Any</option>
              <option value="Men">Men's Housing</option>
              <option value="Women">Women's Housing</option>
              <option value="Co-Ed">Co-Ed Housing</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="minBeds" className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Beds
            </label>
            <select
              id="minBeds"
              name="minBeds"
              value={filters.minBeds}
              onChange={(e) => setFilters({ ...filters, minBeds: e.target.value })}
              className="input"
            >
              <option value="">Any</option>
              <option value="6">6+ Beds</option>
              <option value="8">8+ Beds</option>
              <option value="10">10+ Beds</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-1">
              Max Monthly Price
            </label>
            <select
              id="maxPrice"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className="input"
            >
              <option value="">Any</option>
              <option value="1000">$1,000</option>
              <option value="1200">$1,200</option>
              <option value="1400">$1,400</option>
              <option value="1600">$1,600</option>
            </select>
          </div>
          
          <div className="col-span-2">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Neighborhoods
            </span>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map((neighborhood) => (
                <label key={neighborhood} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.neighborhood.includes(neighborhood)}
                    onChange={() => handleNeighborhoodChange(neighborhood)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{neighborhood}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="col-span-2">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Amenities
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button type="button" className="btn btn-primary w-full">
            Apply Filters
          </button>
        </div>
      </div>
      
      {/* Mobile filters modal */}
      {isFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto lg:hidden">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsFiltersOpen(false)}
            ></div>
            
            <div className="inline-block align-bottom bg-white rounded-t-lg pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                <button
                  type="button"
                  className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={() => setIsFiltersOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="mt-4 space-y-6">
                <div>
                  <label htmlFor="mobileGender" className="block text-sm font-medium text-gray-700 mb-1">
                    Housing Type
                  </label>
                  <select
                    id="mobileGender"
                    name="gender"
                    value={filters.gender}
                    onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
                    className="input"
                  >
                    <option value="">Any</option>
                    <option value="Men">Men's Housing</option>
                    <option value="Women">Women's Housing</option>
                    <option value="Co-Ed">Co-Ed Housing</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mobileMinBeds" className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Beds
                  </label>
                  <select
                    id="mobileMinBeds"
                    name="minBeds"
                    value={filters.minBeds}
                    onChange={(e) => setFilters({ ...filters, minBeds: e.target.value })}
                    className="input"
                  >
                    <option value="">Any</option>
                    <option value="6">6+ Beds</option>
                    <option value="8">8+ Beds</option>
                    <option value="10">10+ Beds</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mobileMaxPrice" className="block text-sm font-medium text-gray-700 mb-1">
                    Max Monthly Price
                  </label>
                  <select
                    id="mobileMaxPrice"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                    className="input"
                  >
                    <option value="">Any</option>
                    <option value="1000">$1,000</option>
                    <option value="1200">$1,200</option>
                    <option value="1400">$1,400</option>
                    <option value="1600">$1,600</option>
                  </select>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Neighborhoods
                  </span>
                  <div className="space-y-1">
                    {neighborhoods.map((neighborhood) => (
                      <label key={neighborhood} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.neighborhood.includes(neighborhood)}
                          onChange={() => handleNeighborhoodChange(neighborhood)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{neighborhood}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Amenities
                  </span>
                  <div className="space-y-1">
                    {amenities.map((amenity) => (
                      <label key={amenity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => handleAmenityChange(amenity)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  className="flex-1 btn btn-secondary"
                  onClick={clearFilters}
                >
                  Clear All
                </button>
                <button
                  type="button"
                  className="flex-1 btn btn-primary"
                  onClick={() => setIsFiltersOpen(false)}
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
