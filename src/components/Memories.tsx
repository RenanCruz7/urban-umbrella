export type Memory = {
  tag: string
  title: string
  description: string
  image: string
}

type MemoriesProps = {
  items: Memory[]
}

export function Memories({ items }: MemoriesProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">star</span>
          Momentos Especiais
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="group relative overflow-hidden rounded-2xl h-[300px] cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{item.tag}</span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
              <p className="text-gray-300 text-sm mt-1 line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
