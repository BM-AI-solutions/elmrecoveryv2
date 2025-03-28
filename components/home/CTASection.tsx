import Link from 'next/link'

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  icon?: React.ReactNode; // Optional icon for the button
}

export default function CTASection({ title, description, buttonText, buttonLink, icon }: CTASectionProps) {
  return (
    <section aria-labelledby="cta-heading" className="bg-white py-16">
      <div className="container-custom text-center">
        <h2 id="cta-heading" className="mb-4">{title}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Link href={buttonLink} className="btn btn-primary">
          {icon}
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
