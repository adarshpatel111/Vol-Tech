import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative bg-dark text-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Transformer background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary">Vol-Tech</span> Transformer Industries
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Leading manufacturer of high-quality transformers since 1998
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Call Back
            </Link>
            <Link href="/products" className="btn-outline">
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
