import Image from 'next/image'

interface SubpageHeroProps {
  title: string
  description: string
  imageSrc: string
}

export default function SubpageHero({ title, description, imageSrc }: SubpageHeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 container-custom py-20 md:py-24">
        <div className="max-w-3xl text-black">
          <h1 className="mb-4">{title}</h1>
          <p className="text-lg text-black">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
