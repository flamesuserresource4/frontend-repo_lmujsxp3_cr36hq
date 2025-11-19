import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Cashman Carpentry & Construction"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="leading-tight">
            <p className="text-[13px] tracking-wider uppercase text-neutral-500">Cashman</p>
            <p className="font-semibold text-[17px] text-neutral-900">Carpentry & Construction</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
          <a href="#services" className="hover:text-neutral-900">Services</a>
          <a href="#why" className="hover:text-neutral-900">Why Us</a>
          <a href="#process" className="hover:text-neutral-900">Process</a>
          <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-[#ff6240] text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-95 transition">
            Get a Quote
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 text-neutral-700">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
