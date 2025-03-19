import { Metadata } from 'next'
import PropertyGrid from '@/components/housing/PropertyGrid'
import PropertyFilters from '@/components/housing/PropertyFilters'
import SubpageHero from '@/components/ui/SubpageHero'

export const metadata: Metadata = {
  title: 'Our Housing Options',
  description: 'Explore our recovery housing options in San Diego, California. Find a safe, supportive environment for your recovery journey.',
}

export default function HousingPage() {
  return (
    <>
      <SubpageHero 
        title="Sober Living Housing"
        description="Discover our safe, supportive recovery housing options located throughout San Diego County. Each home is designed to support your journey to lasting recovery."
        imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
      />
      
      <div className="container-custom py-12">
        <PropertyFilters />
        <PropertyGrid />
      </div>
    </>
  )
}
