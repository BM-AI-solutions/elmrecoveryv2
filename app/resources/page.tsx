import { Metadata } from 'next'
import SubpageHero from '@/components/ui/SubpageHero'
import ResourceCategories from '@/components/resources/ResourceCategories'
import FeaturedResources from '@/components/resources/FeaturedResources'
import ResourceSearch from '@/components/resources/ResourceSearch'
import CTASection from '@/components/home/CTASection'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recovery Resources',
  description: 'Access helpful resources for your recovery journey, including educational materials, support groups, and wellness tools.',
}

export default function ResourcesPage() {
  return (
    <>
      <SubpageHero 
        title="Recovery Resources"
        description="Access tools, guides, and information to support your recovery journey. Our curated resources are designed to help you build a strong foundation for lasting sobriety."
        imageSrc="https://images.unsplash.com/photo-1532012197267-da84d127e765"
      />
      
      <div className="container-custom py-12">
        <ResourceSearch />
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Resource Categories</h2>
          <ResourceCategories />
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Resources</h2>
          <FeaturedResources />
        </div>
      </div>
      
      <CTASection 
        title="Need Personalized Support?"
        description="Our recovery specialists are available to help you find the right resources for your specific situation."
        buttonText="Contact Our Team"
        buttonLink="/contact"
        icon={<Phone className="h-5 w-5 mr-2" />}
      />
    </>
  )
}
