export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cashman Carpentry & Construction" className="h-10 w-auto object-contain" onError={(e)=>{e.currentTarget.style.display='none'}}/>
            <div>
              <p className="font-semibold text-neutral-900">Cashman Carpentry & Construction</p>
              <p className="text-sm text-neutral-500">Cork, Ireland</p>
            </div>
          </div>

          <div className="text-sm text-neutral-600">
            <p>Service areas: Cork City, Ballincollig, Cobh, Midleton, Carrigaline, and surrounding areas.</p>
          </div>

          <div className="flex gap-3">
            <a href="#contact" className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Contact</a>
            <a href="#" className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Privacy</a>
            <a href="#" className="rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50">Facebook</a>
          </div>
        </div>

        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Cashman Carpentry & Construction. All rights reserved.</div>
      </div>
    </footer>
  )
}
