export type GalleryItem = {
  image: string
  span?: string
}

type GalleryProps = {
  items: GalleryItem[]
}

export function Gallery({ items }: GalleryProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">grid_view</span>
          Nossa Galeria
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">12 Fotos</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px]">
        {items.map((item, index) => (
          <div key={`${item.image}-${index}`} className={`relative group overflow-hidden rounded-xl ${item.span ?? ''}`.trim()}>
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-3xl">favorite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
