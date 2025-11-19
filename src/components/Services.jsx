import { Hammer, Home, Layers, Ruler, Shield, TreePine } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Attic Conversions",
    desc: "We turn unused attic space into bright, functional living areas with expert structural work and clean finishes.",
  },
  {
    icon: Ruler,
    title: "1st Fix Carpentry",
    desc: "Framing, floors, stud walls, roofing prep, and all essential structural carpentry done with accuracy.",
  },
  {
    icon: Hammer,
    title: "2nd Fix Carpentry",
    desc: "Doors, skirting, architraves, stairs, and detailed interior finishing for a polished final result.",
  },
  {
    icon: Layers,
    title: "Fibreglass Roofing (GRP)",
    desc: "Durable, seamless, weather-resistant fibreglass roofing that lasts for decades with minimal maintenance.",
  },
  {
    icon: Shield,
    title: "Home Renovations",
    desc: "Room upgrades, layout improvements, and quality carpentry to refresh and enhance your living space.",
  },
  {
    icon: TreePine,
    title: "Outdoor Carpentry",
    desc: "Decking, pergolas, fencing, and garden structures built for durability and outdoor appeal.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">Services</h2>
          <p className="text-neutral-600 max-w-2xl">Specialist carpentry and construction services across Cork — designed for quality, longevity, and a clean finish.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white border border-neutral-200 p-6 hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-xl bg-[#ff6240]/10 text-[#ff6240] flex items-center justify-center mb-4">
                <s.icon size={26} />
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
