import { useState } from 'react'

export type GalleryItem = {
  image: string
  span?: string
}

type GalleryProps = {
  items: GalleryItem[]
}

export function Gallery({ items }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % items.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + items.length) % items.length)
    }
  }

  return (
    <>
      <section id="galeria">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">grid_view</span>
            Nossa Galeria
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px]">
          {items.map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${item.span ?? ''}`.trim()}
              onClick={() => openImage(index)}
            >
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

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
          >
            <span className="material-symbols-outlined text-white text-2xl">close</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10"
          >
            <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
          </button>

          <img
            src={items[selectedImage].image}
            alt="Foto da galeria"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {selectedImage + 1} / {items.length}
          </div>
        </div>
      )}
    </>
  )
}
