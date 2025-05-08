export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "10+", label: "Types of Products" },
    { value: "200+", label: "Projects" },
    { value: "50+", label: "Team" },
  ]

  return (
    <section className="py-12 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">We Do Better</h2>
          <p className="text-gray-400">We are proud to let you know</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-dark-light hover:bg-primary/10 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
