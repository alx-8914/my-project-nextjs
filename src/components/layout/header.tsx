// src/components/layout/header.tsx
"use client"

export function Header() {
  return (
    <header className="fixed top-0 w-full border-a-2 border-primary g-background/40 backdrop-blur z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <span className="font-bold text-lg">Portfólio do Desenvolvedor</span>

        <nav className="flex gap-8 text-sm">
          <a href="#hero" className="hover:text-primary">Início</a>
          <a href="#about" className="hover:text-primary">Sobre</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#projects" className="hover:text-primary">Projetos</a>
          <a href="#contact" className="hover:text-primary">Contato</a>
        </nav>
      </div>
    </header>
  )
}
