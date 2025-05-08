import Link from "next/link"
import { Settings, Zap, PenToolIcon as Tool } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Conversion of vector group",
      description:
        "General industries requires Dyn11 vector group, same can be change by change in winding & or by change in connection to YD11, Dy5, Yd0).",
    },
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Voltage ratio conversion",
      description:
        "Converting voltage ratio is possible from higher to lower voltage ratio i.e. 66KV/33KV/22or11KV, 33KV/22KV to 33KV to 11KV or 33KV to 6.6KV etc.",
    },
    {
      icon: <Tool className="h-12 w-12 text-primary" />,
      title: "Offload to On load tap changer",
      description:
        "This can be done by changing of primary winding and change in fitting arrangement and modification of tank.",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Our Services</h2>
          <p className="text-xl text-gray-700">We provide services and maintenance also</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-dark">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-secondary">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}
