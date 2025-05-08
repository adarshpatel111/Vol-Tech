"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { Package } from "lucide-react"

export default function ProductsPageClient() {
  const products = [
    "Auto Transformer",
    "Cast Resin Transformer",
    "Distribution Transformer",
    "Dry Type Transformer",
    "Furnace Transformer",
    "Industrial Transformer",
    "Lighting Transformer",
    "Oil Cooled Transformer",
    "Power Distribution Transformer",
    "Power Transformer",
    "Rectifier Transformer",
    "Special Purpose Transformer",
    "Solar Transformer",
    "WindMill Transformer",
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Breadcrumb data for structured data
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]

  return (
    <>
      {/* Structured Data for Products Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateProductSchema(
              "Vol-Tech Transformers",
              "High-quality transformers including distribution, power, furnace, rectifier, auto voltage, and special purpose transformers manufactured by Vol-Tech Industries.",
              "/images/og-products.jpg",
            ),
          ),
        }}
      />

      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl"
          >
            High-quality transformers for various applications
          </motion.p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-heading mb-12">We are working on</h2>
          </AnimatedSection>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="card flex items-start transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mr-4 mt-1 bg-primary/10 p-3 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">{product}</h3>
                  <p className="text-gray-600">
                    High-quality {product.toLowerCase()} designed to meet industry standards and customer requirements.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our High Tech Transformers</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              We manufacture a wide range of transformers to meet various industry needs with the highest quality
              standards.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.1}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Distribution Transformer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">Distribution Transformers</h3>
                  <p className="text-gray-600">
                    Our distribution transformers are designed for reliability and efficiency in power distribution
                    networks.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-64 relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Power Transformer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">Power Transformers</h3>
                  <p className="text-gray-600">
                    High-capacity transformers designed for power generation and transmission applications.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo-config"
