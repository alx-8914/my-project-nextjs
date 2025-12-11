"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle({ asIcon = false }: { asIcon?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Verifica o tema inicial
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkTheme()

    // Observa mudanças no atributo class do html
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    // Atualiza quando o tema muda
    const timer = setTimeout(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }, 50)
    return () => clearTimeout(timer)
  }, [theme, mounted])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    // Alterna apenas entre light e dark
    const currentlyDark = document.documentElement.classList.contains("dark")
    if (currentlyDark) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  if (asIcon) {
    return (
      <button
        onClick={toggleTheme}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80 size-12 rounded-full bg-transparent"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-zinc-950 dark:text-zinc-50 drop-shadow-sm" />
        ) : (
          <Sun className="w-6 h-6 text-zinc-950 dark:text-zinc-50 drop-shadow-sm" />
        )}
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-md border border-border bg-background hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
      {isDark ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  )
}

