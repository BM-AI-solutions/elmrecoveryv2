import Link from 'next/link'
import { ReactNode } from 'react'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  icon?: ReactNode
}

export default function CTASection({ title, description, buttonText, buttonLink, icon }: CTASectionProps) {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
            <Link href={buttonLink} className="btn btn-primary text-base inline-flex items-center">
              {icon}
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
