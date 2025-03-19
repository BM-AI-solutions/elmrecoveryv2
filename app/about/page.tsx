import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import SubpageHero from '@/components/ui/SubpageHero'
import { Users, Award, Heart, Clock, MapPin, Phone, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Our Mission and Values',
  description: 'Learn about Elm Recovery\'s mission, values, and commitment to providing supportive sober living environments in San Diego.',
}

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        title="About Elm Recovery"
        description="Our mission is to provide safe, structured, and supportive housing for individuals on their path to long-term recovery."
        imageSrc="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
      />

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary-800">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Elm Recovery, we believe that a supportive environment is essential for successful recovery. Our mission is to provide safe, structured housing that empowers individuals to rebuild their lives and maintain long-term sobriety.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that recovery is a journey, not a destination. That's why we've created a community where residents can find accountability, peer support, and the resources needed to develop healthy habits and coping mechanisms.
              </p>
              <p className="text-gray-700">
                Our homes are more than just a place to live—they're a foundation for a new beginning. Through our structured program and supportive community, we help residents develop the skills and confidence needed for lasting recovery.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                alt="Supportive community at Elm Recovery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-800">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do at Elm Recovery, from how we structure our programs to how we interact with our residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Heart className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary-800">Compassion</h3>
              <p className="text-gray-600 text-center">
                We approach each resident with empathy and understanding, recognizing the courage it takes to seek recovery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary-800">Community</h3>
              <p className="text-gray-600 text-center">
                We foster a sense of belonging and mutual support, creating an environment where residents can learn from and encourage one another.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary-800">Integrity</h3>
              <p className="text-gray-600 text-center">
                We maintain the highest standards of honesty and ethical behavior in all our operations and interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Clock className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary-800">Accountability</h3>
              <p className="text-gray-600 text-center">
                We believe in personal responsibility and provide a structured environment that encourages residents to be accountable for their actions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary-800">Safety</h3>
              <p className="text-gray-600 text-center">
                We provide a secure, drug and alcohol-free environment where residents can focus on their recovery without external pressures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-primary-800">Growth</h3>
              <p className="text-gray-600 text-center">
                We encourage continuous personal development, providing resources and support for residents to build skills for a fulfilling life in recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-800">Our Leadership Team</h2>
            <p className="text-gray-600">
              Meet the dedicated professionals who guide our organization with experience, compassion, and a commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Michael Thompson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Thompson</h3>
              <p className="text-primary-600 mb-3">Executive Director</p>
              <p className="text-gray-600 mb-4 px-4">
                With over 15 years in recovery services and a personal recovery journey, Michael brings compassion and expertise to Elm Recovery.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Jennifer Martinez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jennifer Martinez</h3>
              <p className="text-primary-600 mb-3">Clinical Director</p>
              <p className="text-gray-600 mb-4 px-4">
                Jennifer is a licensed therapist with specialized training in addiction recovery and trauma-informed care.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="David Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">David Wilson</h3>
              <p className="text-primary-600 mb-3">Operations Manager</p>
              <p className="text-gray-600 mb-4 px-4">
                David ensures our homes maintain the highest standards of safety, comfort, and support for all residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                alt="Elm Recovery's first sober living home"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-primary-800">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Elm Recovery was founded in 2012 by Michael Thompson, who experienced firsthand the challenges of finding supportive housing after completing treatment for substance use disorder.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a single home in Pacific Beach has grown into a network of recovery residences throughout San Diego, each maintaining the same commitment to quality, support, and community that defined our first location.
              </p>
              <p className="text-gray-700">
                Over the years, we've refined our approach based on resident feedback and recovery research, creating a program that balances structure with autonomy, accountability with compassion, and individual growth with community support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4 text-primary-800">Our Locations</h2>
            <p className="text-gray-600">
              Elm Recovery operates sober living homes in several San Diego neighborhoods, each chosen for its supportive environment and access to recovery resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Pacific Beach</h3>
                  <p className="text-gray-600">
                    Our original location offers a relaxed beach community with easy access to recovery meetings and employment opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">La Jolla</h3>
                  <p className="text-gray-600">
                    Our upscale La Jolla homes provide a serene environment with beautiful outdoor spaces for reflection and community activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">North Park</h3>
                  <p className="text-gray-600">
                    Located in a vibrant urban neighborhood with a strong recovery community and diverse employment options.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Mission Valley</h3>
                  <p className="text-gray-600">
                    Centrally located with excellent public transportation access and proximity to educational institutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Ocean Beach</h3>
                  <p className="text-gray-600">
                    A laid-back coastal community with a strong focus on wellness and outdoor activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Hillcrest</h3>
                  <p className="text-gray-600">
                    An inclusive, LGBTQ+ friendly location with a diverse community and excellent healthcare resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Ready to Learn More?</h2>
            <p className="text-lg mb-8">
              Contact our team to schedule a tour, learn about our application process, or discuss how Elm Recovery can support your recovery journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Contact Us
              </Link>
              <Link href="/housing" className="btn bg-primary-600 text-white hover:bg-primary-500">
                View Our Homes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
