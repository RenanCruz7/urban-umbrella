type NavbarProps = {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-[#231016]/80 border-b border-gray-200 dark:border-[#49222f]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-xl">favorite</span>
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight">{title}</h2>
        </div>
        <a
          href="https://open.spotify.com/track/1PDP7mLiAMwhfmgIwzhOm2?si=9880639ba9cc41d0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-rose-600 transition-colors text-white text-sm font-bold shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined text-[20px]">music_note</span>
          <span className="hidden sm:inline">Nossa Música</span>
        </a>
      </div>
    </nav>
  )
}
