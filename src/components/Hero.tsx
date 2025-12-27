type HeroProps = {
  image: string
  badgeLabel: string
  title: string
  highlight: string
  description: string
  ctaLabel: string
}

export function Hero({ image, badgeLabel, title, highlight, description, ctaLabel }: HeroProps) {
  return (
    <section className="mt-4 sm:mt-8">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[500px] flex flex-col items-center justify-center text-center p-8 gap-6 group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent z-10" />
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        <div className="relative z-20 flex flex-col items-center max-w-2xl gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {badgeLabel}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm">
            {title}, <br />
            <span className="text-primary text-glow">{highlight}</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg font-light leading-relaxed">{description}</p>
          <div className="mt-4 flex gap-4">
            <button className="h-12 px-6 rounded-xl bg-white text-background-dark font-bold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined">photo_library</span>
              {ctaLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
