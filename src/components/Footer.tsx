export function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-[#49222f] py-8 mt-auto">
      <div className="max-w-[960px] mx-auto px-10 flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <span>Feito com</span>
          <span className="material-symbols-outlined text-primary text-sm animate-bounce">favorite</span>
          <span>para o Natal de 2025</span>
        </div>
        <p className="text-xs text-white/30">© Todos os direitos reservados à nossa família.</p>
      </div>
    </footer>
  )
}
