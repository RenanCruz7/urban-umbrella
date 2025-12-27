type LetterProps = {
  title: string
  paragraphs: string[]
  closingLabel: string
  signature: string
}

export function Letter({ title, paragraphs, closingLabel, signature }: LetterProps) {
  return (
    <section className="py-6">
      <div className="relative bg-surface-dark rounded-3xl p-8 sm:p-12 overflow-hidden border border-[#49222f]">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
            <span className="material-symbols-outlined text-primary text-3xl">edit_note</span>
          </div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <div className="max-w-xl mx-auto space-y-4 text-gray-300 leading-relaxed font-light text-lg italic">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-6 mt-4 border-t border-white/10 w-full max-w-xs">
            <p className="text-sm font-bold text-primary tracking-widest uppercase">{closingLabel}</p>
            <p className="text-white text-xl mt-1 font-serif">{signature}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
