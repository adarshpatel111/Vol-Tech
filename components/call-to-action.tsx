import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Request a call back right now?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Our team of experts is ready to assist you with your transformer needs.
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
