'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'

// Define interface for the filters state
interface ResourceFilters {
  categories: string[];
  types: string[];
  tags: string[];
}

export default function ResourceSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<ResourceFilters>({
    categories: [],
    types: [],
    tags: [],
  })
  
  const resourceTypes = [
    'PDF Guide',
    'Video',
    'Audio',
    'Article',
    'Directory',
    'Worksheet',
    'Course',
  ]
  
  const resourceTags = [
    'Beginner',
    'Advanced',
    'Family',
    'Mental Health',
    'Relapse Prevention',
    'Spirituality',
    'Science-Based',
    'Personal Stories',
  ]
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a search
    console.log('Searching for:', searchQuery, 'with filters:', filters)
  }
  
  const toggleFilter = (type: keyof ResourceFilters, value: string) => {
    setFilters(prev => {
      const current = prev[type]
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value]
      
      return { ...prev, [type]: updated }
    })
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10 w-full"
              placeholder="Search for resources, topics, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button
            type="button"
            className="md:w-auto w-full btn btn-secondary flex items-center justify-center"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
          
          <button
            type="submit"
            className="md:w-auto w-full btn btn-primary"
          >
            Search
          </button>
        </div>
        
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Resource Type</h4>
                <div className="space-y-1">
                  {resourceTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        checked={filters.types.includes(type)}
                        onChange={() => toggleFilter('types', type)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Topics</h4>
                <div className="space-y-1">
                  {resourceTags.slice(0, 4).map((tag) => (
                    <label key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        checked={filters.tags.includes(tag)}
                        onChange={() => toggleFilter('tags', tag)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Additional Topics</h4>
                <div className="space-y-1">
                  {resourceTags.slice(4).map((tag) => (
                    <label key={tag} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        checked={filters.tags.includes(tag)}
                        onChange={() => toggleFilter('tags', tag)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
