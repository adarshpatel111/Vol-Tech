"use client"

import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { Settings, Zap, PenToolIcon as Tool, RefreshCw, Cable, Thermometer } from "lucide-react"

export default function ServicesClientPage() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Conversion of vector group",
      description:
        "General industries requires Dyn11 vector group, same can be changed by changing in winding or by making change in connection to YD11, Dy5, Yd0 etc.",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Voltage ratio conversion",
      description:
        "Converting voltage ratio is possible from higher to lower voltage ratio i.e. 66KV/33KV/22or11KV, 33KV/22KVto33KVto11KVor33KVto6.6KVetc.",
    },
    {
      icon: <Tool className="h-12 w-12 text-primary" />,
      title: "Offload to On load tap changer",
      description:
        "This can be done by changing of primary winding and change in fitting arrangement and modification of tank so that the transformer can arrange voltage fluctuations without switch of the transformer.",
    },
    {
      icon: <Cable className="h-12 w-12 text-primary" />,
      title: "Conversion of cable box to bare bushing and bare bushing to cable box",
      description:
        "This type of conversion can be done by modification of top cover or tank to maintain require Ampere capacity.",
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-primary" />,
      title: "Radiator change",
      description:
        "Old type radiator like tube radiator can be change by using directly welded or flange type radiator, it can also be replaced by having more fins for more cooling of the transformer.",
    },
    {
      icon: <Thermometer className="h-12 w-12 text-primary" />,
      title: "Supply & Change of General & Additional Accessories",
      description:
        "Supply & change of general accessories like Drain Valve, Oil Filter Valve, Silica Gel Breather, Plain Oil Gauge etc & additional accessories like buchholz Relay, OTI, WTI, Marshaling Box, Dial Type Thermometer and special type AVR, RTCC & OSR.",
    },
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
    { name: "Services", url: "/services" },
  ]

  return (
    <>
      {/* Structured Data for Services Page */}
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
            generateServiceSchema(
              "Transformer Services",
              "Comprehensive transformer services including vector group conversion, voltage ratio conversion, tap changer modifications, and maintenance services.",
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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl"
          >
            We provide comprehensive transformer services and maintenance
          </motion.p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto mb-16">
            <p className="text-gray-700 text-lg leading-relaxed">
              At our works we have the capability and more enough experience to repair and fully service of any make of
              transformers up to 20MVA/66KV class. We have competent and well experienced engineers and technicians to
              do the independent job of assembly, commission, maintenance repairing & trouble shooting transformers. Our
              engineer and consultant can re-design the repairing job for better cooling and enhance the rating.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We can also make transformers life healthy by overhauling, replacement of entire insulation including
              conductor covering. Repairs of Power & Distribution Transformer up to 20 MVA 66KV class including of
              winding, insulation and high quality CRGO core material to reduce the no load losses of the transformer.
            </p>
          </AnimatedSection>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 bg-primary/10 p-4 rounded-full">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
