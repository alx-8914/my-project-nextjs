// src/components/sections/skills.tsx
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/animations"
import { skills } from "@/data/skills"

export function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-bold">Habilidades</motion.h2>

      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 cursor-pointer">
        {skills.map((skill) => (
          <motion.div
            variants={fadeUp}
            key={skill.name}
            className="border rounded-xl p-5 flex items-center justify-between min-h-[56px] overflow-hidden"
          >
            <span className="font-medium truncate">{skill.name}</span>
            <span className="rounded-full border border-border bg-muted/40 px-4 py-1 text-xs font-medium">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
