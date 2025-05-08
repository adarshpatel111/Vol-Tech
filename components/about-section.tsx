import Link from "next/link"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">Vol-Tech Transformer Industries</h2>
            <h3 className="text-xl text-secondary font-semibold mb-4">Get to know about our company</h3>
            <p className="text-gray-700 mb-6">
              Vol-Tech Industries was established in 1998. The company is based at Waghodia near Vadodara. The Company
              is certified with An ISO 9001-2000 in January 2003. We manufacture Distribution Transformer, Furnace
              Transformer, Rectifier Duty Transformer and Auto Voltage Transformer etc.
            </p>
            <Link href="/about" className="btn-primary">
              Read More
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Vol-Tech Industries Facility"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
