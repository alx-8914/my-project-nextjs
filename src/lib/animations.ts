// src/lib/animations.ts

import type { Variants } from "framer-motion"

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
