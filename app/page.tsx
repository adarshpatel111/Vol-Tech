import type { Metadata } from "next"
import ImageCarousel from "@/components/image-carousel"
import AnimatedSection from "@/components/animated-section"
import AnimatedCounter from "@/components/animated-counter"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { pageSeoConfig, generateProductSchema } from "@/lib/seo-config"

export const metadata: Metadata = {
  title: pageSeoConfig.home.title,
  description: pageSeoConfig.home.description,
  keywords: pageSeoConfig.home.keywords,
  openGraph: {
    title: pageSeoConfig.home.title,
    description: pageSeoConfig.home.description,
    images: [pageSeoConfig.home.image],
  },
  twitter: {
    title: pageSeoConfig.home.title,
    description: pageSeoConfig.home.description,
    images: [pageSeoConfig.home.image],
  },
}

export default function Home() {
  // Carousel images
  const carouselImages = [
    {
      src: "/placeholder.svg?height=800&width=1600",
      alt: "Transformer manufacturing",
    },
    {
      src: "/placeholder.svg?height=800&width=1600",
      alt: "High-quality transformers",
    },
    {
      src: "/placeholder.svg?height=800&width=1600",
      alt: "Vol-Tech facility",
    },
  ]

  // Stats data
  const stats = [
    { value: 500, label: "Happy Clients", suffix: "+" },
    { value: 10, label: "Types of Products", suffix: "+" },
    { value: 200, label: "Projects", suffix: "+" },
    { value: 50, label: "Team", suffix: "+" },
  ]

  return (
    <>
      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateProductSchema(
              "High-Quality Transformers",
              "Vol-Tech Industries manufactures a wide range of high-quality transformers including distribution, power, furnace, and special purpose transformers.",
              "/images/og-home.jpg",
            ),
          ),
        }}
      />

      {/* Hero Section with Carousel */}
      <section>
        <ImageCarousel images={carouselImages} />
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="section-heading">Vol-Tech Transformer Industries</h2>
              <h3 className="text-xl text-primary font-semibold mb-4">Get to know about our company</h3>
              <p className="text-gray-700 mb-6">
                Vol-Tech Industries was established in 1998. The company is based at Waghodia near Vadodara. The Company
                is certified with An ISO 9001-2000 in January 2003. We manufacture Distribution Transformer, Furnace
                Transformer, Rectifier Duty Transformer and Auto Voltage Transformer etc.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Vol-Tech Industries Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Services</h2>
            <p className="text-xl text-gray-700">We provide services and maintenance also</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection
              delay={0.1}
              className="card flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Conversion of vector group</h3>
              <p className="text-gray-600 mb-4">
                General industries requires Dyn11 vector group, same can be changed by changing in winding or by making
                change in connection.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.2}
              className="card flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Voltage ratio conversion</h3>
              <p className="text-gray-600 mb-4">
                Converting voltage ratio is possible from higher to lower voltage ratio for various applications.
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.3}
              className="card flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">Offload to On load tap changer</h3>
              <p className="text-gray-600 mb-4">
                This can be done by changing of primary winding and change in fitting arrangement and modification of
                tank.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link href="/services" className="btn-primary inline-flex items-center">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-primary-dark">We Do Better</h2>
            <p className="text-gray-700">We are proud to let you know</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <div className="text-gray-700">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Request a call back right now?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to assist you with your transformer needs.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300 inline-flex items-center"
            >
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
