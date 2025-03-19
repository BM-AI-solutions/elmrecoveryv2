import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Heart, Users, Award, Phone } from 'lucide-react'
import TestimonialCard from '@/components/home/TestimonialCard'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt=" "
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 container-custom py-20 md:py-32">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-white uppercase bg-primary-600 rounded-full">
              San Diego's Premier Recovery Housing
            </span>
            <h1 className="mb-6 text-primary-800">Begin Your Recovery Journey in a Supportive Community</h1>
            <p className="mb-8 text-lg text-primary-800">
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
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-800">Why Choose Elm Recovery</h2>
            <p className="text-gray-600">
              Our community-focused approach provides the structure, support, and safety needed for successful recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h4 className="mb-2 text-primary-800">Safe Environment</h4>
              <p className="text-gray-600">
                Drug and alcohol-free homes with regular testing and accountability measures.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h4 className="mb-2 text-primary-800">Supportive Care</h4>
              <p className="text-gray-600">
                Compassionate staff and a community that understands the challenges of recovery.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h4 className="mb-2 text-primary-800">Peer Community</h4>
              <p className="text-gray-600">
                Connect with others on similar journeys, building meaningful relationships.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h4 className="mb-2 text-primary-800">Proven Results</h4>
              <p className="text-gray-600">
                Our structured program has helped hundreds achieve lasting sobriety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-800">Recovery Success Stories</h2>
            <p className="text-gray-600">
              Hear from individuals who have transformed their lives with Elm Recovery's support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Statistics */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">94%</div>
              <p>Program Completion Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <p>Residents Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <p>Locations in San Diego</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p>1-Year Sobriety Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Help CTA */}
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
