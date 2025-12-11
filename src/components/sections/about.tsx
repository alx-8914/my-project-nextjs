// src/components/sections/about.tsx

import { aboutData } from "@/data/about"

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-28 px-6">
      <h2 className="text-3xl text-left font-bold">{aboutData. headline}</h2>

      <div className="text-left mt-8 space-y-4 max-w-2xl">
        {aboutData.paragraphs.map((text, index) => (
          <p key={index} className="text-muted-foreground">
            {text}
          </p>
        ))}
      </div>

      <div className="text-left mt-6 space-y-4 max-w-2xl">
        <p className="text-muted-foreground">{aboutData.mission}</p>
      </div>

      <div className="text-center mt-8 grid-cols-4 gap-2 rounded-xl">
        {aboutData.highlights.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-sm bg-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
