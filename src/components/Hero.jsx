export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?q=80&w=2060&auto=format&fit=crop"
          alt="Construction work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Cork’s Trusted Carpentry & Construction Experts
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            High-quality attic conversions, 1st & 2nd fix carpentry, and fibreglass roofing — delivered with precision, reliability, and craftsmanship.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex rounded-full bg-[#ff6240] text-white px-6 py-3 text-sm md:text-base font-semibold shadow-lg hover:opacity-95 transition">
              Get a Quote
            </a>
            <a href="#services" className="inline-flex rounded-full bg-white/10 backdrop-blur px-6 py-3 text-sm md:text-base font-semibold hover:bg-white/20 transition">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
