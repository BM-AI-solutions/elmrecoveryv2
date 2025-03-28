import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, Shield, Heart, Users, Award, Phone } from 'lucide-react'

// Dynamically import components that are likely below the fold
const FeaturedProperties = dynamic(() => import('@/components/home/FeaturedProperties'), { 
  loading: () => <div className="container-custom py-16"><p>Loading properties...</p></div> 
})
const TestimonialCard = dynamic(() => import('@/components/home/TestimonialCard'), {
  loading: () => <div className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
})
const CTASection = dynamic(() => import('@/components/home/CTASection'), {
  loading: () => <div className="h-48 bg-gray-200 animate-pulse"></div>
})

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section aria-labelledby="hero-heading" className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Exterior view of a comfortable house, representing Elm Recovery housing"
            fill
            className="object-cover brightness-50"
            priority // Load this image eagerly as it's above the fold
          />
        </div>
        <div className="relative z-10 container-custom py-20 md:py-32">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary-600 bg-opacity-80 bg-white rounded-full">
              San Diego's Premier Recovery Housing
            </span>
            <h1 id="hero-heading" className="mb-6">Begin Your Recovery Journey in a Supportive Community</h1>
            <p className="mb-8 text-lg text-gray-100">
              Elm Recovery provides safe, structured, and supportive housing for individuals on their path to sobriety. Our homes in San Diego offer the perfect environment to heal, grow, and thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/housing" className="btn btn-primary">
                View Our Homes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/apply" className="btn btn-secondary bg-white hover:bg-gray-100">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section aria-labelledby="features-heading" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="features-heading" className="mb-4">Why Choose Elm Recovery</h2>
            <p className="text-gray-600">
              Our community-focused approach provides the structure, support, and safety needed for successful recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards - Consider making these a separate component if reused */}
            <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Safe Environment</h3>
              <p className="text-gray-600 text-sm">
                Drug and alcohol-free homes with regular testing and accountability measures.
              </p>
            </div>
            
            <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Supportive Care</h3>
              <p className="text-gray-600 text-sm">
                Compassionate staff and a community that understands the challenges of recovery.
              </p>
            </div>
            
            <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Peer Community</h3>
              <p className="text-gray-600 text-sm">
                Connect with others on similar journeys, building meaningful relationships.
              </p>
            </div>
            
            <div className="card text-center p-6 border border-gray-200 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Proven Results</h3>
              <p className="text-gray-600 text-sm">
                Our structured program has helped hundreds achieve lasting sobriety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties - Loaded Dynamically */}
      <FeaturedProperties />

      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="testimonials-heading" className="mb-4">Recovery Success Stories</h2>
            <p className="text-gray-600">
              Hear from individuals who have transformed their lives with Elm Recovery's support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial Cards - Loaded Dynamically */}
            <TestimonialCard 
              quote="Elm Recovery provided the structure I needed after treatment. The staff genuinely cared about my recovery, and the community support helped me stay accountable."
              name="Michael D."
              title="Resident for 8 months"
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            />
            <TestimonialCard 
              quote="Living at Elm was a crucial stepping stone in my recovery journey. I learned life skills, built meaningful connections, and gained the confidence to maintain my sobriety."
              name="Jennifer T."
              title="Former Resident"
              imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            />
            <TestimonialCard 
              quote="After trying other sober living homes, Elm Recovery stood out for its professional management and genuine community. I'm grateful for the foundation it helped me build."
              name="Robert K."
              title="Resident for 6 months"
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section aria-label="Elm Recovery Statistics" className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <p className="text-primary-100">Program Completion Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <p className="text-primary-100">Residents Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="text-primary-100">Locations in San Diego</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-primary-100">1-Year Sobriety Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Help CTA - Loaded Dynamically */}
      <CTASection 
        title="Ready to Begin Your Recovery Journey?"
        description="Our admissions team is available 24/7 to answer your questions and guide you through the application process."
        buttonText="Contact Us Today"
        buttonLink="/contact"
        icon={<Phone className="h-5 w-5 mr-2" />}
      />
    </>
  )
}
