import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função de scroll suave customizada com controle de velocidade
export const smoothScrollTo = (targetId: string | null, offset: number = 80) => {
  // Se targetId for null ou "#", faz scroll para o topo
  if (!targetId || targetId === "#") {
    const startPosition = window.pageYOffset
    const targetPosition = 0
    const distance = targetPosition - startPosition
    const duration = 80
    let start: number | null = null

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 2)
      const ease = easeInOutCubic(progress)

      window.scrollTo({
        top: startPosition + distance * ease,
        behavior: "auto",
      })

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
    return
  }

  // Scroll para elemento específico
  const targetElement = document.getElementById(targetId.replace("#", ""))
  if (!targetElement) return

  const startPosition = window.pageYOffset
  const targetPosition = targetElement.offsetTop - offset
  const distance = targetPosition - startPosition
  const duration = 80
  let start: number | null = null

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime
    const timeElapsed = currentTime - start
    const progress = Math.min(timeElapsed / duration, 2)
    const ease = easeInOutCubic(progress)

    window.scrollTo({
      top: startPosition + distance * ease,
      behavior: "auto",
    })

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}
