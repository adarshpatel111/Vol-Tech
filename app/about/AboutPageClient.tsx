"use client"

import AnimatedSection from "@/components/animated-section"
import AnimatedCounter from "@/components/animated-counter"
import { motion } from "framer-motion"
import Image from "next/image"
import { generateBreadcrumbSchema } from "@/lib/seo-config"

export default function AboutPageClient() {
  const clients = [
    { name: "Gujarat Electricity board", sector: "Government", location: "Gujarat" },
    { name: "Indian Railways", sector: "Government", location: "Dahod" },
    { name: "GWSSB", sector: "Government", location: "Surat" },
    { name: "Silvassa Electricity", sector: "Government", location: "Silvassa" },
    { name: "Department", sector: "Government", location: "Silvassa" },
    { name: "ONGC", sector: "Government", location: "Ankleshwar" },
    { name: "ALOCK INDUSTRIES", sector: "Corporate", location: "Silvassa" },
    { name: "TIPCO Industries", sector: "Corporate", location: "Silvassa" },
    { name: "SILVASSA INDUSTRIES LTD.(Reliance group)", sector: "Corporate", location: "Silvassa" },
    { name: "AKLAYA SILK MILLS", sector: "Corporate", location: "Surat" },
    { name: "COLOURTEX LTD", sector: "Corporate", location: "Surat" },
    { name: "DHARNURDHAR DYING", sector: "Corporate", location: "Surat" },
    { name: "DONEAR Industries LTD", sector: "Corporate", location: "Surat" },
    { name: "GARDEN VARELI", sector: "Corporate", location: "Surat" },
    { name: "KIRAN EXPORTS", sector: "Corporate", location: "Surat" },
    { name: "MAHAVIR DYEING", sector: "Corporate", location: "Surat" },
    { name: "M.D. Indusries", sector: "Corporate", location: "Surat" },
    { name: "AASWARYA PRINTS PVT. LTD", sector: "Corporate", location: "Surat" },
    { name: "SINTEX Indusrties", sector: "Corporate", location: "Nagpur" },
    { name: "DHARNURDHAR DYING", sector: "Corporate", location: "Surat" },
    { name: "OM MATELS", sector: "Corporate", location: "Jharkhand" },
    { name: "WELSPUN GUJARAT STAHL ROHREN LTD.", sector: "Corporate", location: "Dahej" },
    { name: "ASHUTOSH TILES", sector: "Corporate", location: "Morbi" },
    { name: "JET GRANITO PVT. LTD.", sector: "Corporate", location: "Morbi" },
    { name: "SIMPLOLO VIRTIFIED LTD.", sector: "Corporate", location: "Morbi" },
    { name: "RADHE ALLOY CAST PVT. LTD.", sector: "Multiplex", location: "Rajkot" },
    { name: "RAJHANS CINEMA", sector: "Multiplex", location: "Surat" },
    { name: "SURMANDIR THEATRE", sector: "Multiplex", location: "Palanpur" },
  ]

  // Stats data
  const stats = [
    { value: 500, label: "Happy Clients", suffix: "+" },
    { value: 10, label: "Types of Products", suffix: "+" },
    { value: 200, label: "Projects", suffix: "+" },
    { value: 50, label: "Team", suffix: "+" },
  ]

  // Breadcrumb data for structured data
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]

  return (
    <>
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl"
          >
            We have over 15 years of experience
          </motion.p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2 className="section-heading">Vol-Tech Transformer Industries</h2>
              <h3 className="text-xl text-primary font-semibold mb-4">Get to know about our company</h3>
              <p className="text-gray-700 mb-6">
                Vol-Tech Industries is established in 1998. The company is based at Waghodia near by Baroda. The Company
                certified with An ISO 9001-2000 in the January 2003. We also manufacture of furnace Transformer,
                Rectifier Duty Transformer and auto Voltage Transformer etc.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Vol-Tech Industries Facility"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-heading">Who we are?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="up" delay={0.1}>
              <p className="text-gray-700 mb-6">
                We are one of the fast growing companies of Gujarat state who design, manufacture a complete rang of
                Quality Transformer. We manufacture to meet the National standard and manufacture under the stage
                inspection and performance.
              </p>
              <p className="text-gray-700">
                The company has supplied various capacity transformers to the government sector, Electricity Board's,
                Corporate sector and many other private Companies.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <p className="text-gray-700 mb-6">
                Unmatched Quality has always been the hallmark of VOL-TECH Industries. We have manufactured transformers
                up to 10 MVA and repaired up to 20 MVA.
              </p>
              <p className="text-gray-700">
                We take pleasure to introduce ourselves as a fast growing Power & Distribution Transformer Manufacturer
                and supplier of Transformers.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

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

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="section-heading">We Had Worked With</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="overflow-x-auto">
            <motion.table
              className="min-w-full bg-white border border-gray-200 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left">#</th>
                  <th className="py-3 px-4 text-left">Client</th>
                  <th className="py-3 px-4 text-left">Sector</th>
                  <th className="py-3 px-4 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.01 }}
                    whileHover={{ backgroundColor: "#f0f9eb" }}
                  >
                    <td className="py-3 px-4 border-b border-gray-200">{index + 1}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{client.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{client.sector}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{client.location}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
