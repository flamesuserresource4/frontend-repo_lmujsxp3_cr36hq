export default function Process() {
  const steps = [
    {
      n: 1,
      title: "Request a Quote",
      desc: "Send us a quick message with your project details — we’ll respond fast with a clear estimate.",
    },
    {
      n: 2,
      title: "Schedule a Visit",
      desc: "We’ll arrive on-site, assess the work, and provide expert guidance before getting started.",
    },
    {
      n: 3,
      title: "Enjoy the Results",
      desc: "Relax while we transform your space with high-quality carpentry and clean, durable finishes.",
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">Our Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white border border-neutral-200 p-8">
              <div className="h-12 w-12 rounded-full bg-[#ff6240]/10 text-[#ff6240] flex items-center justify-center font-extrabold text-lg mb-4">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
