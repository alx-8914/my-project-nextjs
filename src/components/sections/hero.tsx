"use client"

// src/components/sections/hero.tsx
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"
import { heroData } from "@/data/hero"
import { heroDataVariantB } from "@/data/hero"
import { smoothScrollTo } from "@/lib/utils"

// Esta seção é responsável apenas pela renderização visual
export function HeroSection() {
  const handleCTAClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
    isDownload: boolean
  ) => {
    if (!isDownload && link.startsWith("#")) {
      e.preventDefault()
      smoothScrollTo(link)
    }
    // Para download, permite o comportamento padrão
  }

  const ctaButtons = [
    {
      text: heroData.ctaSecondary.text,
      link: heroData.ctaSecondary.link,
      isDownload: false,
    },
    {
      text: heroData.ctaPrimary.text,
      link: heroData.ctaPrimary.link,
      isDownload: true,
      download: "CurricullumDEv.pdf",
    },
  ]

  const buttonClassName =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-200 hover:scale-105 hover:bg-green-400 hover:text-white dark:hover:bg-green-300 dark:hover:text-black"

  return (
    <motion.section
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="container mx-auto flex flex-col items-center justify-center py-40 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        <span className="pointer-events-none text-center text-8xl leading-none font-extrabold tracking-tight whitespace-pre-wrap">
          <span className="bg-linear-to-b from-emerald-600 via-green-800 to-teal-700 bg-clip-text text-transparent [text-shadow:0_2px_12px_rgba(16,185,129,0.25),0_0_2px_rgba(0,0,0,0.1)] dark:from-zinc-50 dark:via-zinc-300 dark:to-zinc-500 dark:[text-shadow:0_0_25px_rgba(97,240,152,0.55)]">
            {heroData.subtitle} {heroData.name.replace(/👋🏽/g, "")}
          </span>
          <span className="inline-block">👋🏽</span>
        </span>
      </h1>
      <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
        {heroData.title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-left text-muted-foreground">
        {heroData.description} {heroDataVariantB.description}
      </p>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        {heroDataVariantB.subtitle}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        {ctaButtons.map((cta) => (
          <a
            key={cta.text}
            href={cta.link}
            onClick={(e) => handleCTAClick(e, cta.link, cta.isDownload)}
            download={cta.isDownload ? cta.download : undefined}
            className={buttonClassName}
          >
            {cta.text}
          </a>
        ))}
      </div>
    </motion.section>
  )
}
