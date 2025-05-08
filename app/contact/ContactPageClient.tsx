"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/animated-section"
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react"
import { sendEmail } from "@/lib/send-email"
import { generateBreadcrumbSchema } from "@/lib/seo-config"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitResult({
          success: true,
          message: "Your message has been sent successfully! We'll get back to you soon.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitResult({
          success: false,
          message: "Failed to send message. Please try again later.",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const formVariants = {
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
    { name: "Contact Us", url: "/contact" },
  ]

  return (
    <>
      {/* Structured Data for Contact Page */}
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl"
          >
            Feel free to contact us!
          </motion.p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <h2 className="section-heading">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our products or services? Fill out the form
                and our team will get back to you as soon as possible.
              </p>

              <motion.form
                className="grid gap-6"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Product Inquiry"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </motion.div>
                {submitResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-md ${
                      submitResult.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitResult.message}
                  </motion.div>
                )}
              </motion.form>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="section-heading">Contact Information</h2>
              <div className="grid gap-8 mt-8">
                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                      Phone
                    </h3>
                    <div className="mb-4">
                      <p className="font-medium">For Marketing:</p>
                      <p className="text-gray-700">Mr. Ghanshyam Patel</p>
                      <p className="text-gray-700">+91 98253 07217</p>
                      <p className="text-gray-700">+91 9825043350</p>
                    </div>
                    <div>
                      <p className="font-medium">For Maintenance:</p>
                      <p className="text-gray-700">Mr. Ghanshyam Patel</p>
                      <p className="text-gray-700">+91 9825307217</p>
                      <p className="text-gray-700">Mr. Kirit Patel</p>
                      <p className="text-gray-700">+91 9998983266</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                      Email
                    </h3>
                    <p className="text-gray-700">info@voltechtransformer.com</p>
                    <p className="text-gray-700">
                      transformer@voltechtransformer.com
                    </p>
                    <p className="text-gray-700">voltech2004@yahoo.co.in</p>
                    <p className="text-gray-700">sale@voltechtransformer.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700">
                      878/12 SAHJANAND RICE MILL COMPOUND,
                      <br />
                      WAGHODIA - 391 760
                      <br />
                      VADODARA, GUJARAT, INDIA
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-primary font-medium hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <motion.div
        className="w-full bg-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.8881703479772!2d73.21963124548748!3d22.294928350218925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc585a5338945%3A0x40ee10b8827be44a!2sVoltech%20Transformer!5e0!3m2!1sen!2sin!4v1746695000722!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vol-Tech Transformer Location"
          className="w-full"
        ></iframe>
      </motion.div>
    </>
  );
}
