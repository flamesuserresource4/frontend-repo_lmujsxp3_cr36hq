const images = [
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574182245530-967d9b3831a1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1614332618590-35067793483f?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582582621952-b1a9b9d4b126?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599693338237-5adedb1f1b86?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519624036798-07b52cedf1dc?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1974&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl border border-neutral-200">
              <img src={src} alt="Project" className="w-full h-full object-cover hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
